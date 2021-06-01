# 마이크로벤치마킹과 통계

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

<br/>

## JVM 성능 통계

<br/>

## 통계치 해석

<br/>

## 마치며.
