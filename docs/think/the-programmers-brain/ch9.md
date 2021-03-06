---
sidebar_position: 9
---

# 9. 나쁜 코드와 인지 부하를 방지하는 두 가지 프레임워크

## 9.1 코드 스멜이 인지 부하를 초래하는 이유

### 9.1.1 코드 스멜에 대한 간략한 소개

|코드 스멜|설명|수준|
|-|-|-|
|긴 메서드|메서드는 여러 가지 다른 일을 수행하느라 라인이 걸어져서는 안 된다.|메서드|
|많은 인수|메서드는 인수가 많으면 안 된다.|메서드|
|스위치 문|스위치 문이 길면 안 된다. 다형성을 통해 해결할 수 있다.|메서드|
|다른 것처럼 보이나 같은 클래스|처음 보면 다른 것처럼 보이지만 유수한 필드와 메서드를 갖는 클래스가 두 개 있으면 안된다.|클래스|
|원시 타입 집착|클래스에서 원시 데이터 타입의 과도한 사용은 피해야 한다.|클래스|
|미완성 라이브러리|메서드를 라이브러릴 클래스가 아닌 임의의 클래스에 추가해서는 안 된다.|클래스|
|너무 큰 클래스|너무 많은 메서드와 필드를 가지고 있어서 클래스가 제공하는 추상화를 불명확하게 만들어서는 안 됩니다.|클래스|
|게으른 클래스|클래스가 하는 일이 너무 적으면 존재할 이유가 없습니다.|클래스|
|데이터 클래스|클래스는 데이터만 가져서는 안 되고 메서드도 가져야 한다.|클래스|
|임시 필드|클래스는 불필요한 임시 필드를 가져서는 안 된다.|클래스|
|데이터 그룹|같이 사용되는 데이터는 같은 클래스나 구조체에 저장되어야 한다.|클래스|
|산재한 수정|일반적으로 코드 수정은 한 클래스의 한 부분에서만 이루어져야 한다. 클래스의 여러 부분을 수정해야 한다면 코드 구조가 잘못된 것을 의미합니다.|코드베이스|
|기능 이전|클래스 A의 많은 메서드가 클래스 B에 의해 참조되면 그 메서드들은 B로 롬겨야 합니다.|코드베이스|
|부적절한 연관|클래스는 다른 클래스에 광범위하게 연관되지 않아야 합니다.|코드베이스|
|중복 코드 또는 코드 클론|같은 혹은 비슷한 코드가 코드베이스 내 여러 군데에서 중복돼서는 안된다.|코드베이스|
|주석문|주석문은 그 코드가 무엇을 하는지가 아니라 왜 거기 있는지를 설명해야 합니다.|코드베이스|
|메시지 체인|메시지 호출이 연속해서 꼬리에 꼬리를 무는 방식으로 이루어져서는 안 된다.|코드베이스|
|미들맨|클래스가 자신이 하는 일은 없이 위임을 많이 사용하며 이 클래스가 굳이 존재할 이유가 있는가|코드베이스|
|평행 상속|한 클래스의 서브 클래스를 만들 때마다 다른 클래스의 서브 클래스도 만들어야한다면 두 클래스의 기능을 하나의 클래스로 합쳐야 한다.|코드베이스|
|상속 거절|클래스가 자신이 사용하지 않는 것을 상속받는다면 상속은 필요 없는 일일지도 모릅니다.|코드베이스|
|샷건 수술|일반적으로 코드 수정은 한 클래스에 대해서만 이루어져야 합니다. 하나의 사항에 대해 여러 클래스를 수정해야 한다면 코드 구조에 문제가 있으므로 수정할 여러 부분을 하나의 클래스로 묶어야 합니다.|코드베이스|
|추측에 근거한 일반성|만일의 경우를 대비한 코드를 추가하지 말고 필요한 기능만 추가하자.|코드베이스|

- 메서드 수준 코드 스멜
  - 개별 메서드에 속한 코드 스멜에 대한 예로는 한 메서드가 많은 라인으로 되어 있고 많은 기능을 자는 경우입니다.
  - 메서드가 많은 매개변수를 가지고 있으면 이 역시 또 다른 코드 스멜입니다.
- 클래스 수준 코드 스멜
  - 스멜을 관리하지 않으면 특정 한 논리를 나타내지 않고, 애플리케이션 내의 모든 종류의 프로세스에 대한 논리를 포함하게 됩니다.
  - 반대로, 클래스가 의미 있는 추상화가 되기에 메서드와 필드가 적을 수도 있습니다.
- 코드베이스 수준 코드 스멜
  - 코드베이스에는 중복 코드 또는 코드 클론이라고 부르는 코드 스멜이 있습니다.
- 코드 스멜의 영향
  - 코드 스멜이 있다고 해서 코드에 반드시 오류가 있는 것은 아니지만, 오류가 있을 가능성이 높습니다.

### 9.1.2 코드 스멜이 인지 과정에 악영향을 미치는 방식

- 많은 코드 스멜은 두뇌의 인지 기능과 관련이 있습니다.

#### 긴 매개변수 목록, 복잡한 스위치 문: 작업 기억 공간의 용량 초과

- 메서드에 매개변수가 많을수록 이해하기는 더 어렵습니다.
- 매개변수 목록이 길면 작업 기억 공간이 과부하를 가질 가능성이 높습니다.

#### 신의 클래스, 긴 메서드: 효율적인 청킹이 불가능

- 서로 관련된 속성과 함수들은 클래스 안에 모아놓습니다. 개별 함수, 클래스, 메서드로 기능을 분할할 때의 이점은 이름이 문서 역할을 한다는 것입니다.

#### 코드 클론: 청킹이 잘못된

- 오개념들이 오랫동안 남아있을 수 있습니다.

<br/>

## 9.2 나쁜 이름이 인지 부하에 미치는 영향

- 코드 스멜은 **구조적 안티패턴(structural antipattern)** 문제가 있는 코드입니다.

### 9.2.1 언어적 안티패턴

- 6가지 언어적 안티패턴은 다음과 같습니다.
  - 이름이 나타내는 것보다 더 많은 일을 하는 메서드
  - 이름이 나타내는 것보다 더 적은 일을 메서드
  - 이름과 정반대의 일을 하는 메서드
  - 개체에 포함된 것보다 더 많은 것을 가지고 잇는 것처럼 보이는 식별자 이름
  - 개체에 포함된 것은 누락하는 식별자 이름
  - 개체에 포함된 것과 반대되는 식별자 이름

### 9.2.2 인지 부하 측정

- 인지 부하에 대한 파스 척도
  - 인지적노력이 거의 없음 <-> 최고로 높은 인지적 노력
- 눈 기반 측정
- 피부 기반 측정
- 뇌 기반 측정
- 뇌전도
- 기능적 fNIRS와 프로그래밍

### 9.2.3 언어적 안티패턴 및 인지 부하

- 사람들은 구조적으로 일관되지 않은 코드를 싫어합니다.

### 9.2.4 언어적 안티패턴이 혼란을 일으키는 이유

- 언어적 안티패턴을 많이 가지고 있는 코드는 인지 부하를 더 많이 유발합니다.

<br/>

## 요약

- 긴 메서드 등 코드 스멜은 코드의 구조적 문제를 의미합니다. 코드 스멜이 인지 부하를 높이는 데에는 여러 인지적 이유가 있습니다. 
  - 예를 들어 중복 코드는 코드를 제대로 청킹하기 어렵게 만들고, 긴 매개변수 목록은 작업 기억 공간을 많이 차지합니다.
- 생체 인식 센서 등 인지 부항 측정 방법에는 눈 깜박임 비율, 피부 온도 측정 등 다양한 방법이 있습니다. 자신의 인지 부하를 측정하려는 경우 일반적으로 파스 척도는 신뢰할 수 있는 도구입니다.
- 언어적 안티패턴이란 코드가 실제 수행하는 작업과 맞지 않는 이름을 의미하며, 높은 인지 부하를 초래합니다.
  - 이는 우리가 사고할 때 LTM이 돕는 과정에서 잘못된 사실을 발견하기 때문에 일어날 수 있습니다.
  - 언어적 안티패턴은 실제로 구현되지 않은 코드의 의미를 가졍하기 때문에 잘못된 청킹으로 이어질 수 있습니다.