---
sidebar_position: 6
---

# Clean Code 내용 정리 - 6

## 부록 A. 동시성

###

클라이언트/서버 예제

#### 서버

애플리케이션에서 많은 시간을 보내는 가능성은 크게 2개이다.

- I/O : 소켓 사용, 데이터베이스 연결, 가상 메모리 스와핑 기다리기 emd
- 프로세서 : 수치 계산, 정규 표현식 처리, 가비지 컬렉션 등

일반적으로 프로그램이 **프로세서 연산에 많은 시간을 보낸다면, 하드웨어를 추가하여 성능을 높여야 한다.**

즉, 스레드를 늘린다고 해결할 수 있는 문제가 아니다.

하지만 프로그램이 주로 **I/O 연산에 시간을 보낸다면 동시성이 성능을 높여 줄 수 있다.**

#### 결론

단일스레드 시스템에서 다중 스레드 시스템으로 변환하고, 성능을 높이기 위해서는 다음과 같은 방법을 사용해야한다.

- I/O에 많은 시간을 보내야 한다.
- 관련된 코드를 분리시켜 여러개의 클래스로 분리해 **단일 책임 원칙**을 지켜야 한다.

### 가능한 실행 경로

10000개의 스레드로 현재 값인 변수에 1을 더한다고 했을 때 가정했을때,

최악의 경우는 1부터 10000까지 나올 수 있다.

이를 해결하기 위해서는 ...

#### 심층 분석

3가지 정의를 이야기할 수 있다.

- **프레임** : 모든 메서드 호출에는 프레임이 필요하다
- **지역 변수** : 메서드 범위 내에 정의되는 모든 변수를 가리킴
- **피연산자 스택** : JVM이 지원하는 명령 대다수는 매개변수를 받으며, 이 매개변수를 저장하는 장소

이 3개를 atomic으로 잘 처리한다면, 결과는 일정하다.

##### 결론

스레드가 서로의 작업을 덮어쓰는 과정을 이해하기 위해서는 어떤 연산이 안전한지 못한지에 파악할 수 있도록 메모리 모델을 이해하고 있어야한다.

즉, 아래의 3가지를 이해해야 한다.

- 공유 객체/값이 있는 곳
- 동시 읽기/수정 문제를 일으킬 소지가 있는 코드
- 동시성 문제를 방지하는 법

### 라이브러리를 이해하기

#### Executor 프레임워크

- 스레드 풀링으로 정교한 실행을 지원한다.
- 코드가 깔끔해지고 이해하기 쉬워지며, 크기가 작아진다.
- 스레드 풀 크기를 자동으로 조정하며, 재사용할 수 있다.

#### 스레드를 차단하지 않는 방법(non blocking)

- 최신 프로세서는 blocking 하지 않고 안정적으로 값을 갱신한다.
  - Ex) AtomicInteger, incrementAndGet() 등등
- 현대 프로세서는 CAS(Compare and Swap)을 지원한다.

#### 다중 스레드 환경에서 안전하지 않은 클래스

다중 스레드 환경에서 안정하지 않는 환경은 다음과 같다.

- SimpleDateFormat
- 데이터베이스 연결
- java.util 컨테이너 클래스
- 서블릿

### 메서드 사이에 존재하는 의존성 조심

추적하기 어렵지만 이를 해결하는 방안은 크게 3가지로 구성된다.

#### 1\. 실패를 용인하기

#### 2\. 클라이언트-기반 잠금

굉장히 위험한 전략이다.

#### 3\. 서버-기반 잠금

일반적으로 가장 바람직한 방법이다.

- 코드 중복이 줄어든다.
- 성능이 좋아진다.
- 오류가 발생할 가능성이 줄어든다.
- 스레드 정책이 하나이다.
- 공유 변수 범위가 절어든다.

### 작업 처리량 높이기

동기화 영역은 언제나 작아야한다.

### 데드락

데드락의 4가지 조건

- 상호 배제 (Mutual Exclusion)
- 잠금 & 대기 (Lock & Wait)
- 선점 불가 (No Preemption)
- 순환 대기 (Circular Wait)

#### 상호 배제

- 정의 : 여러 스레드가 동시에 사용하지 못하고, 개수가 제한적인 경우
- 해결책
  - 동시에 사용해도 괜찮은 자원을 사용, Ex) Atomic
  - 스레드 수 이상으로 자원 수를 높임
  - 자원을 점유하기 전에 필요한 자원이 모두 있는지 확인

#### 잠금 & 대기

- 정의 : 스레드가 자원을 점유하면 필요한 나머지 자원까지 모두 점유해 작업을 마칠 때까지 이미 점유한 자원을 내놓지 않는다.
- 해결책
  - 대기하지 않기
- 문제점
  - 기아(Starvation) : 한 스레드가 계속해서 필요한 자원을 점유하지 못하는 것
  - 라이브락(Livelock) : 여러 스레드가 한번에 잠금으로 들어가 계속 자원을 점유했다 내놨다를 반복하는 것

#### 선점 불가

- 정의 : 한 스레드가 다른 스레드로부터 자원을 빼앗지 못함
- 해결책
  - 다른 자원을 뺏어오기

#### 순환 대기

- 정의 : 스레드 A는 B가 끝나기를 기다리고, 스레드 B는 A가 끝나기를 기다리는 상황
- 해결책 : 간단한 규약을 설정해서 순환이 없도록 한다
- 문제점
  - 자원을 할당하는 순서와 자원을 사용하는 순서를 다르게 한다
  - 때로는 순서에 따라 자원을 할당하기 어려움

### 다중 스레드 코드 테스트

- 몬테 카를로 테스트 : 조율이 가능하게 유연하게 테스트를 만든다
- 시스템을 배치할 플랫폼 전부에서 테스트를 돌린다
- 부하가 변하는 장비에서 테스트를 돌린다.

### 스레드 코드 테스트를 도와주는 도구

대표적인 예시로 IBM의 ConTest가 있다.

사용방법은 다음과 같다.

- 실제 코드와 테스트 코드 작성
- ConTest로 실제 코드와 테스트 코드에 보조 코드 추가
- 테스트를 실행

---

드디어 정리 완료.

**부록 B. org.jfree.date.SerialDate** 와 **부록 C. 휴리스틱의 교차 참조 목록** 은 코드 위주라서, 해당 부분을 따로 추가하지 않았다.

점차 이전의 게시글을 틈틈이 수정하면서 가독성을 높이는 작업을 할 예정.

책의 내용을 대부분 정리하기는 했지만, 코드나 원글의 내용을 다 담지 못한 듯 하여 한번 책을 읽어보는 것이 좋을 듯합니다.
