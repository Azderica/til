---
sidebar_position: 1
---

# 1. 신뢰할 수 있고 확장 가능하며 유지보수하기 쉬운 애플리케이션

- 오늘날 많은 애플리케이션은 **계산 중심(compute-intensive)** 와 다르게 **데이터 중심(data-intensive)** 적입니다.
- 이러한 애플리케이션은 CPU 성능보다는 데이터 양, 데이터 복잡도, 데이터의 변화속도에 더 민감합니다.
- 많은 애플리케이션은 다음을 필요로 합니다.
  - 데이터베이스, 구동 애플리케이션이나 다른 애플리케이션에서 나중에 다시 데이터를 찾을 수 있게 데이터를 저장
  - 캐시, 읽기 속도 향상을 위해 갑비싼 수행 결과를 기억
  - 검색색인, 사용자가 키워드로 데이터를 검색하거나 다양한 방법으로 필터링할 수 있게 제공
  - 스트림 처리, 비동기 처리를 위해 다른 프로세스로 메시지 보내기
  - 일괄 처리, 주기적으로 대량의 누적된 데이터를 분석
- 아래의 책에서는 데이터 시스템의 원칙(principle)과 실용성(practicality), 애플리케이션 개발 방법에 대해 소개합니다.

## 데이터 시스템에 대한 생각

데이터벤이스, 큐, 캐시 등을 **데이터 시스템**이라는 포괄적 단어로 묶는 이유는 다음과 같습니다.

- 최근들에 경계가 더 모호해 지고 있습니다.
  - 메시지 큐이자 데이터스토어인 레디스
  - 지속성을 보장하는 메시지큐인 카프카도 존재
- 점점 더 많은 애플리케이션이 단일 도구로는 더 이상 데이터 처리와 저장 모두를 만족시킬 수 없는 과도하고 광범위한 요구사항이 있습니다.
  - 작업은 단일 도구에서 효율적으로 **수행할 수 있는** 테스트로 나누고 다양한 도구들은 애플리케이션 코드를 이용해 서로 연결합니다.

![데이터 시스템 아키텍처 예시](https://user-images.githubusercontent.com/42582516/134787508-06cb0ad3-2b00-4b0f-bd99-1e675836d865.png)

데이터 시스템이나 서비스를 설계할 때 여러 문제가 발생하며 좋은 설게를 하기 위해서는 아래의 관심사에 중점을 줍니다.

- 신뢰성(Reliability)
  - 하드웨어 소프트웨어 결함, 인적 오류에 직면해도 올바르게 동작해야합니다.
- 확장성(Scalability)
  - 데이터 양, 트래픽 양, 복잡도가 증가하면서 이를 처리할 적절한 방법이 있어야합니다.
- 유지보수성(Maintainability)
  - 모든 사용자가 시스템 상에서 생산적으로 작업할 수 있게 해야합니다.

<br/>

## 신뢰성

소프트웨어에 바라는 기대는 다음과 같습니다.

- 애플리케이션은 사용자가 기대한 기능을 수행한다,.
- 시스템은 사용자가 범한 실수나 예상치 못한 소프트웨엉 사용법을 허용할 수 있습니다.
- 시스템 성능은 예상된 부하와 데이터 양에서 필수적인 사용 사례를 충분히 만족합니다.
- 시스템은 허가되지 않은 접근과 오남용을 방지합니다.

> 결함(fault) : 잘못될 수 있는 일, 0%확률은 어려움

> 장애 : 사용자에게 필요한 서비스를 제공하지 못하고 서비스 전체가 멈춘 경우

> 내결함성(fault-tolerant), 탄력성(resilient) : 결함을 예측하고 대처할 수 있는 시스템

대표적인 예시로 넷플릭스의 카오스 몽키가 있습니다.

### 하드웨어 결함

- 하드웨어 장애는 늘상 발생할 수 있는 문제입니다. (정전, 실수 등등)
- 이러한 시스템 장애율을 줄이기 위해서는 **하드웨어 구성 요소에 중복을 추가하는 방법이 일반적입니다.**

### 소프트웨어 오류

- 시스템 내 **체계적 오류(systematic error)** 가 발생할 수 있습니다.
- 소프트웨어 체계적 오류 문제는 신속한 해결책이 없습니다. (아래의 해결책은 도움이 되는 방법입니다.)
  - 시스템의 가정
  - 상호작용에 대한 주의 깊은 생각
  - 빈틈 없는 테스트
  - 프로세스 격리
  - 죽은 프로세스의 재시작 허용
  - 프로덕션 환경에서의 동작 측정, 모니터링, 분석하기

### 인적 오류

사람은 소프트웨어 시스템을 설계하고 구축합니다. 다음은 신뢰성이 있게 만드는 접근 방식입니다.

- 오류의 가능성을 최소화하는 방법으로 시스템을 설계합니다.
- 사람이 많이 실수하는 부분에서 실수로 장애가 발생하는 부분을 분리합니다. (즉, 샌드박스(sandbox)를 제공합니다.)
- 단위 테스트부터 통합 테스트, 수동 테스트까지 모든 수준에서 철저히 테스트합니다.
- 장애 발생의 영향을 최소화하기 위해 인적 오류를 빠르고 쉽게 복구할 수 있도록 합니다.
- 성능 지표와 오류율같은 상세하고 명확한 모니터링 대책을 마련합니다.
- 조직 교육과 실습을 시행합니다.

### 신뢰성의 중요성

- 중요하지 않은 애플리케이션도 사용자에 대한 책임(responsibility)가 있습니다.

<br/>

## 확장성

**확장성**은 증가한 부하에 대처하는 시스템 능력을 설명하는데 사용하는 용어입니다.

### 부하 기술하기

- 시스템의 현재 부하를 간결하게 기술해야지, 성장에 관련된 질문을 할 수 있습니다.
- 부하는 부하 매개변수(load parameter) 라 부르는 몇 개의 숫자로 나타낼 수 있습니다.

ex) 트위터

- 트윗 작성 : 사용자는 팔로워에게 새로운 메시지 게시 가능, 초당 4.6k + 피크시 12k 요청 이상
- 홈 타임라인 : 사용자는 팔로우한 사람이 작성한 트윗을 볼 수 있음, 초당 300k
- 트위터의 확장성 문제는 팬 아웃에 관련되어 있습니다.
- **팬 아웃(fan-out)** : 하나의 수신 요청 수를 설명하기 위해 팬 아웃을 사용합니다.

```sql
# 방법 1.
--사용자가 홈 타임 라인을 요청하면 팔로우하는 모든 사람들 찾고, 시간순으로 정렬해서 합칩니다.
SELECT tweets.*, users.* FROM tweets
  JOIN users ON tweets.sender_id = users.id
  JOIN follows ON follows.followee_id = users.id
  WHERE follows.follower_id = current_user
```

```sql
# 방법 2.
--사용자가 사용자에게 보낼 캐시를 만들어서, 데이터를 넣을 시 미리 계산해서 수신자용 캐시에 넣습니다.
```

방법 1과 방법 2의 단점이 있어서 현재는 두 개를 혼합형으로 바꾸고 있습니다. (방법 1은 대용량 처리에서 불리하고 방법 2는 팔로워가 많은 경우에게 요청이 복잡해집니다.)

### 성능 기술하기

다음 두가지 방법으로 살펴볼 수 있습니다.

- 부하 매개변수를 증가시키고 시스템 자원(CPU, 메모리, 네트워크 대역폭 등)은 변경하지 않고 유지하면 시스템 성능은 어떻게 영향을 받을까
- 부하 매개변수를 증가시켰을 때 성능이 변하지 않고 유지되길 원한다면 자원을 얼마나 많이 자원을 늘려야할까

두 질문 모두 성능 수치가 필요합니다.

- **처리량(throughput)** : 초당 처리할 수 있는 레코드 수나 일정 크기의 데이터 집합, 하둡에서 필요로 함
- **응답 시간(response time)** : 클라이언트가 요청을 보내고 응답을 받는 사이의 시간, 온라인 서비스에서 중요, 클라이언트 측면이며 `실제 시간 + 네트워크 지연 + 큐 지연` 입니다.
- **지연 시간(latency)** : 요청이 처리되길 기다리는 시간

클라이언트는 몇 번이고 반복해서 동일 요청을 하더라도 매번 응답시간이 다릅니다. 따라서 응답 시간은 단일 숫자가 아닌 측정 가능한 값의 **분포**로 생각해야합니다.

- 대부분 요청은 빠르지만 가끔 오래 걸리는 **특이 값(outlier)** 가 있습니다.
- 보고된 서비스 **평균** 응답 시간을 살피는 것은 일반적이며 평균은 **산술 평균**입니다.
- 일반적으로 평균보다는 백분위(percentile)을 사용하는 편이 좋습니다.
- **중앙 값**을 통해서 사용자가 보통 얼마나 기다리는 지 아는데 좋습니다.
- 특이 값이 얼마나 안좋은지 보는 것은 상위 백분위를 살펴보는 것이 좋습니다. (95분위, 99분위, 99.9분위)
- **꼬리 지연 시간(tail latency)**, 상위 백분위 응답 시간 : 서비스의 사용자 경험에 직접 영향을 줍니다
- 다만 99.99분위 등의 최적화는 작업 비용이 비싸기 때문에 포기하는 경우가 많습니다.
- 백분위는 **서비스 수준 목표(service level objective, SLO)** 와 **서비스 수준 협약서(service level agreement, SLA)** 에 자주 사용하고 기대 성능과 서비스 가용성을 정의하는 계약서에 자주 등장합니다.
- 큐 대기 지연(queueing delay)는 높은 백분위에서 응답 시간의 상당 부분을 차지합니다. (서버는 병렬로 소수의 작업만 처리할 수 있기 때문에 소스의 느린 요청을 처리가 후속 요청 처리가 지체됩니다.) 이를 **선두 차단(head-of-line blocking)** 이라 합니다.

> 실전 백분위

- **꼬리 지연 증폭(tail latency amplification)** : 작은 비율의 백엔드 호출이 느린 경우 -> 요청이 여러번 백엔드 호출하면 느린 호출 가능성의 증가 -> 최종 사용자 요청 중 많은 비율의 응답 시간이 느려집니다.

### 부하 대응 접근 방식

- **용량 확장(scaling up), 수직 확장(vertical scaling)** : 좀 더 강력한 장비로 이동
- **규모 확장(scaling out), 수평 확장(horizontal scaling)** : 다수의 낮은 사용 장비에 부하를 분산
- **비공유(shared-nothing)** 아키텍처 : 다수의 장비에 부하를 분산하는 아키텍처
- 일부 시스템은 **탄력적(elastic)** 으로 돌아갑니다. 부하 증가시 컴퓨팅 자원을 자동으로 추가합니다.

<br/>

## 유지보수성

레거시를 만들지 않게 소프트웨어 설계 원칙은 다음 세가지 입니다.

- 운용성(operability) : 운영팀이 시스템이 원할하게 운영할 수 있게 쉽게 만듭니다.
- 단순성(simplicity) : 시스템에서 복잡도를 최대한 제거해서 새로운 엔지니어가 시스템을 이해하기 쉽게 만듭니다.
- 발전성(evolvability) : 엔지니어가 이후에 시스템을 쉽게 변경할 수 있게 합니다. (유연성, 수정가능성, 적응성이라 이야기하기도 좋습니다.)

### 운용성: 운영의 편리함 만들기

좋은 소프트웨어라도 나쁘게 운영하면 작동을 신뢰할 수 있습니다. 즉, 자동화를 설정하고 동작하는 역할은 사람이 합니다.

#### 좋은 운영팀이 하는 일

- 시스템 상태를 모니터링하고 상태가 좋지 않다면 빠르게 서비스를 복원합니다.
- 시스템 장애, 성능 저하 등의 문제의 원인을 추적합니다.
- 보안 패치를 포함해 소프트웨어와 플랫폼을 최신 상태로 유지합니다.
- 다른 시스템이 서로 어떻게 영향을 주는지 확인해서 문제가 생길 수 있는 변경 사항을 손상 입기전에 차단합니다.
- 미래에 발생 가능한 문제를 예측해 문제가 발생하기 전에 해결합니다.
- 배포, 설정 관리 등을 위한 모범 사례와 도구를 마련 합니다.
- 애플리케이션을 특정 플랫폼에서 다른 플랫폼으로 이동하는 등의 복잡한 유지보수 태스크를 수행합니다.
- 설정 변경으로 생기는 시스템 보안을 유지보수합니다.
- 예측 가능한 운영과 안정적인 서비스 환경을 유지하기 위한 절차를 정의합니다.
- 개인 인사 이동에도 시스템에 대한 조식의 지식을 보존합니다.

#### 데이터 시스템의 역할

- 좋은 모니터링으로 런타임 동작과 시스템 내부에 대한 가시성을 제공합니다.
- 표준 도구를 이용해 자동화와 통합을 위한 우수한 지원을 제공합니다.
- 개별 장비 의존성을 회피, 유지보수를 위해 장비를 내리더라도 전체 시스템에 영향을 주지 않고 계속해서 운영 가능하게 합니다.
- 좋은 문서와 이해하기 쉬운 운영 모델을 제공합니다.
  - **ex. X를 하면 Y가 발생한다.**
- 만족할 만한 기본 동작을 제공하고, 필요할 때 기본값을 다시 정의ㅐ할 수 있는 자유를 관리제에게 부여합니다.
- 적절하게 자기 회복이 가능하며 필요에 따라 관리자가 시스템 상태를 수동으로 제어할 수 있게 합니다.
- 예측 가능하게 동작하고 예기치 않은 상황을 최소화합니다.

### 단순성: 복잡도 관리

- 프로젝트가 커짐에 따라 시스템은 복잡하고 이해하기 어려워집니다.
- 복잡도는 같은 시스템에서 작업해야 하는 모든 사람의 진행을 느리게 하고 나아가 유지보수 비용이 증가합니다.
- 복잡도에 빠진 소프트웨어 프로젝트를 커다란 **진흙 덩어리(big ball of mud)** 로 묘사합니다.

#### 복잡도의 발생 원인

- 상태 공간의 급증
- 모듈 간 강한 커플링(tight coupling)
- 복잡한 의존성
- 일관성 없는 명명(naming)과 용어
- 성능 문제 해결을 목표로 한 해킹
- 임시방편으로 문제를 해결한 특수 사례(special-casing)

#### 복잡도의 결과

- 유지보수가 어려워집니다.
- 예산과 일정이 초과됩니다.

#### 시스템을 단순하게.

- 시스템을 단순하게 만드는 것은 기능을 줄인다는 의미가 아닌 **우발적 복잡도(accidental complexity)** 를 줄인다는 뜻일 수도 있습니다.
- 대표적인 방법은 **추상화**를 통해 깔끔하고 직관성을 제공하며 세부 구현을 숨길 수 있습니다.
- 좋은 추상화는 다른 다양한 애플리케이션에서도 사용 가능한 재사용성을 제공합니다.

> 개인 의견.

- 중복 함수를 만들지 않는 것도 하나의 방법일 듯...

### 발전성: 변화를 쉽게 만들기

시스템의 요구사항이 안 바뀔 가능성은 매우 적습니다. 즉, 시스템의 요구사항은 끊임없이 변할 가능성이 훨씬 큽니다.

- 새로운 사용 사례의 등장
- 비지니스 우선순위의 변화
- 사용자의 신규 기능 요청
- 새로운 플랫폼이 기존 플랫폼을 대체
- 법적 또는 규체 요구사항의 변경
- 시스템의 성장으로 인한 아키텍처 변화

위와 같은 여러 요구사항이 존재합니다.

#### 발전성을 위한 해결책.

- 조직 프로세스 측면에서 **애자일(agile)** 작업 패턴은 변화에 적응하기 위한 프레임워크를 제공합니다.
- 애자일 커뮤니티는 **테스트 주도 개발(TDD, Test-Driven Development)** 와 **리팩토링(refactoring)** 같이 자주 변화하는 환경에서 도움이 되는 기술 도구와 패턴을 개발합니다.

> 한편으로 애자일을 진행하려면 모든 팀원이 애자일에 대해 이해하고, 책임진 부분에 대해 정확히 할 수 있어야합니다. 일종의 패턴이고 경우에 따라 맞는 답은 다르다라고 생각합니다.

<br/>

## 정리

- 애플리케이션이 유용하기 위해서는 다양한 요구사항을 축적 시켜야합니다.
  - **기능적 요구 사항**(여러 방법으로 데이터를 CRUD하고 같이 해야하는 일)
  - **비기능적 요구 사항**(보안, 신뢰성, 법규 준수, 확장성, 호환성, 유지보수성과 같은 일반 속성)
- **신뢰성**
  - **결합이 발생해도 시스템이 올바르게 동작하게 만든다는 의미**
  - 결함은 하드웨어와 소프트웨어 버그, 인적 실수가 있을 수 있습니다.
  - 내결함성 기술을 통해 최종 사용자에게 특정 결함을 숨길 수 있습니다.
- **확장성**
  - **부하가 증가해도 좋은 성능을 유지하기 위한 전략**
  - 확장성을 표현하는 용어로 부하와 성능이 있습니다.
- **유지보수성**
  - 본질은 **시스템에 작업하는 엔지니어와 운영 팀의 삶을 개선하는 것**
  - 좋은 추상화는 복잡도를 줄이고 쉽게 시스템을 변경할 수 있게 하며 새로운 사용 사례에 적용하는 데 도움이 됩니다.
  - 좋은 운용성은 시스템의 건강 상태를 잘 관찰할 수 있고 시스템을 효율적으로 관리하는 방법을 보유한다는 의미입니다.
- 애플리케이션을 신뢰할 수 있고 확장 가능, 유지보수하기위한 간단한 해결책은 없으며 이를 도와주는 **특정 패턴과 기술이 있을 뿐**입니다.