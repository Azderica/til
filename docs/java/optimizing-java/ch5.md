---
sidebar_position: 5
---

# 5. 마이크로벤치마킹과 통계

아래에서는 자바 성능 수치를 직접 측정하는 내용에 대해 작성합니다. 특히, 작은 자바 코드 한 조각의 성능을 정확히 측정(마이크로벤치마킹)하기에는 매우 미묘하고 어렵습니다.

## 자바 성능 측정 기초

- 목표 : 벤치마크로 공정한 테스트를 하는 것
- 어려움
  - 자바 플랫폼을 벤치마크할 때는 런타임의 정교함이 문제입니다.
  - 최적화가 미치는 영향을 구체적으로 완전히 이해하고 설명하기에는 어렵습니다.
  - JVM 웜업 등을 고려해야하기 때문에 신경쓸 것이 많습니다.

예를 들어 아래의 코드를 실행 시, 여러 문제점이 있습니다.

```java
public class ClassicSort {
  private static final int N = 1_000;
  private static final int I = 150_000;
  private static final List<Integer> testData = new ArrayList<>();

  public static void main(String[] args) {
    Random randomGenerator = new Random();
    for (int i = 0; i < N; i++) {
      testData.add(randomGenerator.nextInt(Integer.MAX_VALUE));
    }

    System.out.println("정렬 알고리즘 테스트");

    double startTime = System.nanoTime();

    for (int i = 0; i < I; i++) {
      List<Integer> copy = new ArrayList<>(testData);
      Collections.sort(copy);
    }

    double endTime = System.nanoTime();
    double timePerOperation = ((endTime - startTime) / (1_000_000_000L * I));
    System.out.println("결과: " + (1/timePerOperation) + "op/s");
  }
}
```

```bash
// 힙 크기를 2기가 바이트로 잡았습니다.
java -Xms2048m -Xmx2048m -XX:+PrintCompilation ClassicSort.java
```

위 코드 실행시, 제 환경에서는 `결과: 12602.36988231042op/s` 가 나오게 됩니다. 다만 위 경우에는 여러 변수 요소들이 많습니다.

- JVM이 가동 준비를 하기 위해서 시간이 걸립니다.
- 가비지 수집이 불확정적으로 발생하기 때문에 정확한 확인이 되지 않습니다.

이를 확인하기 위해서 gc 로그를 확인해서 명령어를 작성해보면, GC가 발생한 것을 볼 수 있습니다.

```bash
java -Xms2048m -Xmx2048m -verbose:gc ClassicSort.java
```

```
[0.008s][info][gc] Using G1
정렬 알고리즘 테스트
[1.362s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 102M->3M(2048M) 4.684ms
[2.719s][info][gc] GC(1) Pause Young (Normal) (G1 Evacuation Pause) 122M->3M(2048M) 2.618ms
결과: 12549.384183956532op/s
```

이처럼 결과가 나오게 됩니다.

- 또한 테스트 하는 코드를 생성된 결과에 실제 사용하지 않기 때문에 이르 최적화할 가능성도 있습니다.
- 추가적으로 이를 평균을 낼 수 도 없는 것이 벤치마크가 어떻게 수행되었는지 정확히 알 수 없습니다.

이를 해결하는 방법은 크게 **두가지**입니다.

- 시스템 전체를 벤치마크합니다. (저수진 수치는 수집하지않거나 무시합니다.)
- 연관된 저수준의 결과를 의미있게 비교하기 위해서는 앞서 언급한 문제들을 공통 프레임워크를 이용해서 처리하는 것입니다.

JMH가 그런 툴입니다.

<br/>

## JMH 소개

### 될 수 있으면 마이크로벤치마크를 하지 않습니다.

너무 작은 문제를 보면서 숲을 보지 못하고, 나무만 보는 경우가 존재합니다. 즉, 다른 원인이 될 활률이 높습니다.

### 휴리스틱 : 마이크로 벤치마킹은 언제 하나요.

주로 사용하는 경우는 다음과 같습니다.

- 사용 범위가 넓은 범용 라이브러리 코드를 개발합니다.
- OpenJDK 또는 다른 자바 플랫폼 구현체를 개발합니다.
- 지연에 극도로 민감한 코드를 개발합니다.

일반적으로 마이크로벤치마크는 가장 극단적인 애플리케이션에 한해서 사용하는 것이 좋습니다.

대부분의 경우에는 거의 쓸일이 없습니다. 다만, 이론과 복잡성을 알고 있는 것이 좋습니다.

### JMH 프레임워크

JMH는 앞의 이슈를 해결하기 위해 개발된 프레임워크입니다.

- JMH : 자바를 비롯해 JVM을 타깃으로 하는 언어로 작성된 벤치마크를 제작, 실행, 분석하는 자바 도구입니다.

프로엠워크는 컴파일 타임에 벤치마크 내용을 알 수 없으므로 동적이여야합니다.

### 벤치마크 실행

```bash
mvn archetype:generate \
  -DinteractiveMode=false \
  -DarchetypeGroupId=org.openjdk.jmh \
  -DarchetypeArtifactId=jmh-java-benchmark-archetype \
  -DgroupId=org.sample \
  -DartifactId=test \
  -Dversion=1.0
```

JMH는 강력한 기능을 제공합니다.

- 컴파일러를 제어합니다.
- 벤치마크 도중 CPU 사용 수준을 시뮬레이션합니다.

<br/>

## JVM 성능 통계

모든 측정은 어느 정도의 오차를 가지고 있습니다. 성능 분석 시 흔히 발생하는 두가지 주요 오차 유형이 있습니다.

- 랜덤 오차(random error)
  - 어떠한 요인과 상관없이 결과에 영향을 미칩니다.
- 계통 오차(systematic error)
  - 원인을 알 수 없는 요인이 상관관계 있는 형태로 측정에 영향을 미칩니다.

정확성은 계측 오차의 수준을 나타내고, 정밀도는 랜덤 오차를 나타내는 오차입니다.

<br/>

## 통계치 해석

- 클라이언트 오류

![image](https://user-images.githubusercontent.com/42582516/120488136-7ad13e00-c3f1-11eb-902d-cc8024428c8a.png)

- 서버 오류

![image](https://user-images.githubusercontent.com/42582516/120488182-83c20f80-c3f1-11eb-83fc-c08e315563ff.png)

- 성공 요청

![image](https://user-images.githubusercontent.com/42582516/120488239-8e7ca480-c3f1-11eb-8861-73da30bc006e.png)

- 이를 합친 요청

![image](https://user-images.githubusercontent.com/42582516/120488409-b66c0800-c3f1-11eb-9783-cf5af1785a2f.png)

<br/>

## 마치며.

마이크로 벤치마킹을 사용하는 것은 다음과 같습니다.

- 유스케이스를 확실히 모르는 상태에서 마이크로벤치마킹 하면 안됩니다.
- 해야 한다면 가능한 한 많은 사람과 공유하고 회사 동료들과 함께 의논합니다.
- 항상 잘못될 가능성을 염두에 두고 여러분의 생각을 지속적으로 검증합니다.

마이크로벤치마킹은 한가지 장점은 저수준 서브시스템들이 유발한 고도로 동적인 움직임과 비정규 분포 양상을 명확히 드러낸다는 것입니다.
