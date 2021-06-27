# GC 로깅, 모니터링, 튜닝, 툴

GC 로깅 및 모니터링에 대해서 다룹니다.

## GC 로깅 개요

GC 로그

- 훌륭한 정보
- 시스템이 내려간 원인의 단서를 찾는 콜드 케이스 분석을 할 때 매우 유용합니다.

모든 중요한 애플리케이션에서는 다음 두 가지를 선정해야합니다.

- GC 로그를 생성해야합니다.
- 애플리케이션 출력과는 별도로 특정 파일에 GC 로그를 보관합니다.

GC 로깅은 거의 오버헤드가 없으므로, 주요 JVM 프로세스는 항상 로깅을 켜놓아야합니다.

### GC 로깅 켜기

```bash
-Xloggc:gc.log -XX:+PrintGCDetails -XX:+PrintTenuringDistribution-XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps
```

알면 좋은 플래그는 다음과 같습니다.

- `-Xloggc:gc.logGC`
  - 이벤트에 로깅할 파일을 지정한다.
- `-XX:+PrintGCDetailsGC `
  - 이벤트 세부 정보를 로깅한다.
- `-XX:+PrintTenuringDistribution`
  - 툴링에 꼭 필요한, 부가적인 GC 이벤트 세부 정보를 추가한다.
- `-XX:+PrintGCTimeStampsGC`
  - 이벤트 발생 시간을 (VM 시작 이후 경과한 시간을 초 단위로) 출력한다.
- `-XX:+PrintGCDateStampsGC`
  - 이벤트 발생 시간을 (벽시계 시간 기준으로) 출력한다

### GC 로그 vs JMX

VisualGC는 JVM 힙 상태를 실시간 표시하는 툴이며 JMX(자바 관리 확장, Java Management eXtensions) 인터페이스를 통해서 JVM 데이터를 수집합니다.

JMX는 성능 데이터의 원천으로서 스트리밍 데이터를 즉시 제공한다는 점에서는 GC 로그보다 낫지만, 요즘 툴은 일반적으로 GC 로그 데이터를 스트리밍하는 API를 제공하므로 큰 차이가 없습니다.

### JMX의 단점

JMX를 이용해 애플리케이션을 모니터링하는 클라이언트는 대부분 런타임을 샘플링해 현재 상태를 업데이트합니다.

다만 문제는 **가비지 수집**입니다. 즉, 각 수집 사이클 전후의 메모리 상태를 알 수가 없으므로 GC 데이터를 깊이 있게, 정확하게 분석할 수 없습니다.

### GC 로그 데이터의 장점

GC 로그에 쌓인 기초 데이터는 특정 GC 이벤트와 연관 지을 수 있어서 모든 의미 있는 분석 작업을 수행할 수 있습니다. (어느 지점에서 수집 비용이 발생하는 지, 어떻게 튜닝해야 긍정적인 결과를 얻을 수 있을지를 수행할 수 있습니다.)

<br/>

## 로그 파싱 툴

<br/>

## GC 기본 튜닝

<br/>

## Parallel GC 튜닝

<br/>

## CMS 튜닝

<br/>

## G1 튜닝

<br/>

## jHiccup

<br/>

## 마치며
