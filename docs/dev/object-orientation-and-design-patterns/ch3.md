# 주요 디자인 패턴

## 디자인 패턴이란?

객체 지향 설계는 소프트웨어로 해결하고자 하는 문제를 다루면서, 동시에 재설계 없이 또는 재 설계를 최소화하면서 요구 사항의 변화를 수용할 수 있도록 만들어줍니다.

이러한 좋은 설계는 클래스, 객체의 구성, 객체 간 메시지 흐름에서 일정 패턴을 갖게됩니다. 이런 패턴을 잘 습득하면 다음의 이득이 있습니다.

- 상황에 맞는 올바른 설계를 더 빠르게 적용할 수 있습니다.
- 각 패턴의 장단점을 통해서 설계를 선택하는데 도움을 얻을 수 있습니다.
- 설계 패턴에 이름을 붙임으로써 시스템의 문서화, 이해, 유지 보수에 도움을 얻을 수 있습니다.

이러한 패턴을 모은 책이 있는데 GoF의 디자인 패턴은 많은 프로그래머에게 도움이 되었습니다. 이중에서 자주사용되는 패턴과, GoF 패턴에는 없으나 자주 사용하는 널(Null) 객체 패턴을 설명합니다.

### 종류

- 전략 패턴 / 템플릿 패턴 / 상태 패턴
- 데코레이터 패턴 / 프록시 패턴 / 어댑터 패턴
- 옵저버 패턴 / 미디에이터 패턴 / 파사드 패턴
- 추상 팩토리 패턴 / 컴포지트 패턴
- 널(Null) 객체 패턴

<br/>

## 전력 패턴

콘텍스트 ---> 전략(strategry) <--(상속)-- 전략 콘크리트 클래스

이처럼 **특정 콘텍스트에서 알고리즘을 별도로 분리하는 설계 방법**입니다.

- 전략 패턴에서는 콘텍스트는 사용할 전략을 직접 선택하지 않습니다.
- 콘텍스트의 클라이언트가 콘텍스트에 사용활 전략을 전달해줍니다. (DI)

### 장점

- 콘텍스트 코드의 변경 없이 새로운 전략을 추가할 수 있습니다.
- 일반적으로 if-else로 구성된 블록이 비슷한 기능을 수행할 때, 전략패턴을 적용함으로써 코드의 확장이 편하게 할 수 있습니다.

<br/>

## 템플릿 패턴

코드를 작성하다보면, 완전히 동일한 절차를 가진 코드를 작성하게 될 때가 있습니다. 보통 실행 과정/단계는 동일한데 각 단계 중 일부의 구현이 다른 경우에 사용할 수 있는 패턴입니다. 일반적으로는 아래 2개로 이뤄집니다.

- 실행 과정을 구현한 상위 클래스
- 실행 과정의 일부 단계를 구현한 하위 클래스

상위 클래스는 실행 과정을 구현한 메서드를 제공하며, 이 메서드는 기능을 구현하는데 필요한 각 단계를 정의하며 일부 단게는 추상 메서드를 호출하는 방식으로 구현됩니다.

### 상위 클래스가 흐름을 주체합니다.

템플릿 메서드 패턴은 하위 클래스가 아닌 상위 클래스에서 프름을 제어합니다. 즉, 상위 타입의 템플릿 메서드가 모든 실행 흐름을 제어하고 하위 타입의 메서드는 템플릿 메서드에서 호출되는 구조를 갖게 합니다.

### 훅(hook) 메서드

**상위 클래스에서 실행 시점이 제어되고, 기본 구현을 제공하면서, 하위 클래스에서 알맞게 확장할 수 있는 메서드**를 훅 메서드라고 합니다.

### 템플릿 메서드와 전략 패턴의 조합

일반적으로 템플릿 메서드/전략 패턴 조합은 엄격하게는 전략 패턴에 가깝습니다. 다만 이를 같이 사용하게 되면 상속이 아닌 조립의 방식으로 템플릿 메서드 패턴을 사용할 수 있습니다.

```java
public <T> T execute(TransactionCallback<T> action) throws TransactionException {
  // 일부 코드 생략.
  TransactionStatus status = this.transactionManager.getTransaction(this);
  T result;
  try {
    result = action.doInTransaction(status);
  } catch (RuntimeException ex) {
    rollbackOnException(status, ex);
    throw ex;
  }
  ... // 다른 익셉션 코드
  this.transactionManager.commit(status);
  return result;
}
```

```java
transactionTemplate.execute(new TransactionCallback<String>()) {
  public String doInTransaction(TransactionStatus status) {
    // 트랜잭션 범위 안에서 실행될 코드
  }
}
```

이와 같이 조합하면, 상속에 기반을 둔 템플릿 메서드 구현과 비교해서 유연함을 가집니다. 상속을 사용하는 경우에는 클래스가 불필요하게 증가하고 런타임에 교체할 수 없습니다. 다만 조립/위임의 경우에는 런타임에 템플릿 메서드에서 사용할 객체를 교체할 수 있는 장점을 가집니다.

하지만, 상속 방식의 경우 훅 메서드를 재정의하는 방법으로 하위 클래스에서 쉽게 확장 기능을 제공할 수 있는 장점이 있고, 조립/위임 방식에서는 확장 기능을 제공하려면 복잡해지는 단점이 있습니다.

<br/>

## 상태 패턴

상태에 따라 동일한 기능 요청의 처리를 다르게 하는 경우가 있습니다. 이때 상태 패턴을 적용합니다.

콘텍스트 ---> 상태 <--(상속)-- 상태 콘크리트 클래스들

이러한 방식은 객체에 처리를 위임하는 방식으로 동작합니다.

상태 패턴의 장점은 크게 두가지입니다.

- 새로운 상태가 추가되더라도 콘텍스트 코드가 받는 영향은 최소화됩니다.
- 상태에 따른 동작을 구현한 코드가 각 상태 별로 구분되기 때문에 상태 별 동작을 수정하기가 쉽습니다.

### 상태 변경의 주체

- 콘텍스트에서 상태를 변경하는 방식
  - 비교적 상태 개수가 적고 상태 변경 규칙이 거의 바뀌지 않는 경우에 유리합니다.
- 상태 객체에서 콘텍스트의 상태를 변경하는 방식
  - 콘텍스트에 영향을 주지 않으면서 상태를 추가하거나 상태 변경 규칙을 바꿀 수 있게 됩니다.

위 두 방식의 서로 상반되는 장단점을 잘 고려하는 것이 중요합니다.

<br/>

## 데코레이터 패턴

상속은 기능을 확장하는 방법을 제공합니다. 상속을 이용한 기능 확장 방법이 쉽긴 하지만, 다양한 조합의 기능 확장이 요구될 때 클래스가 불필요하게 증가하는 문제가 발생합니다.

데코레이터 패턴은 상속이 아닌 위임을 하는 방식입니다. 기능 확장을 위해 데코레이터라 불리는 추상 클래스를 만듭니다.

또는 기존 기능에 새로운 기능을 추가해준다는 의미에서 객체를 데코레이터라고 부릅니다.

### 데코레이터 패턴의 장점

- 데코레이터를 조합하는 방식으로 기능을 확장할 수 있습니다.
- 기능 적용 순서의 변경도 쉽습니다.
- 각 확장 기능들의 구현이 별도의 클래스로 분리되기 때문에 각 확장 기능 및 원래 기능을 서로 영향 없이 변경할 수 있도록 만들어줍니다.
- 데코레이터 패턴은 단일 책임 원칙을 지킬 수 있도록 만들어줍니다.

일반적으로 데코레이터 패턴은 전략 패턴/템플릿 메서드 패턴/상태 패턴과 함께 매우 흔하게 사용되는 패턴입니다. 스프링 프레임워크의 경우 트랜잭션 처리를 위해 데코레이터 패턴을 사용합니다.

### 고려할 점.

- 데코레이터 대상이 되는 타입의 기능 개수에 대해 신경을 써야합니다.
  - 구현이 비교적으로 간단하지만 정의되어 있는 메서드가 증가하게 되면 그 만큼 데코레이터의 구현도 복잡해집니다.
- 데코레이터 객체가 비정상적으로 동작할 때 어떻게 처리할 지 고민이 필요합니다.

### 단점.

사용자 입장에서 데코레이터 객체와 실제 구현 객체의 구분이 되지 않기 때문에 코드만으로는 기능이 어떻게 동작하는지 이해하기 어렵습니다.

<br/>

## 프록시 패턴

불필요하게 메모리를 사용하는 문제가 발생할 수 있습니다.

**변경없이 이미지 로딩 방식을 교체할 수 있도록 해주는 패턴**이 **프록시 패턴**입니다. 프록시 패턴은 실제 객체를 대신하는 프록시 객체를 사용해서 실제 객체의 생성이나 접근 등을 제어할 수 있도록 하는 패턴입니다.

프록시에는 여러 종류가 존재합니다.

- 가상 프록시
  - 필요한 순간에 실제 객체를 생성해 주는 프록시
- 보호 프록시
  - 실제 객체에 대한 접근을 제어하는 프록시
  - 접근 권한이 있는 경우에만 실제 객체의 메서드를 실행하는 방식으로 구현
- 원격 프록시
  - 자바의 RMI처럼 다른 프로세스에 존재하는 객체에 접근할 때 사용되는 프록시
  - IPC나 TCP 통신을 이용해서 다른 프로세스의 객체를 실행합니다.

### 고려할 점

실제 객체를 누가 생성할 것이냐에 대한 고민을 해야합니다.

- 가상 프록시는 필요한 순간에 실제 객체를 생성하는 경우가 많습니다.
- 보호 프록시는 접근 제어를 목적으로 하기에, 이를 생성할 때 실제 객체를 전달하면 되므로 실제 객체의 타입을 알 필요 없이 추상 타입을 사용하면 됩니다.

상속 방식의 프록시는 간단해서 구현이 쉽지만 객체 생성시 실제 객체가 생성되므로 가상 프록시에는 적절하지 않습니다.

<br/>

## 어댑터 패턴

**클라이언트가 요구하는 인터페이스와 재사용하려는 모듈의 인터페이스가 일치하지 않을 때 사용할 수 있는 패턴**이 어댑터 패턴입니다.

어댑터 패턴을 적용한 구조는 다음과 같습니다.

![image](https://user-images.githubusercontent.com/42582516/120910654-7e97e580-c6bb-11eb-8b97-c46de7981b3d.png)

코드의 예시는 다음과 같습니다.

```java
public class SearchServiceTolrAdapter implements SearchService {
  private TolrClient tolrClient = new TolrClient();

  public SearchResult search(String keyword) {
    TolrQuery tolrQuery = new TolrQuery(keyword);
    QueryResponse response = tolrClient.query(tolrQuery);
    SearchResult result = convertToResult(response);
    return result;
  }

  ...
}
```

이러한 어댑터 패턴을 적용된 예는 `SLF4J` 라는 로깅 API입니다. SLF4J는 단일 로깅 API를 사용하면서 자바 로깅, log4j, LogBack 등의 로깅 프레임워크를 선택적으로 사용할 수 있도록 해줍니다. 이때 SLF4J가 제공하는 인터페이스와 각 로깅 프레임워크를 맞춰 주기 위해 어댑터를 사용하고 있습니다.

![image](https://user-images.githubusercontent.com/42582516/120910633-5e682680-c6bb-11eb-91f8-cc5bfefc27f3.png)

이러한 어댑터 패턴은 개방 폐쇄 원칙을 따를 수 있게 해줍니다.

<br/>

## 옵저버 패턴

**한 객체의 상태 변화를 정해지지 않은 여러 다른 객체에 주입하고 싶을 때 사용하는 패턴**을 옵저버 패턴이라고 합니다.

![image](https://user-images.githubusercontent.com/42582516/120910857-63c67080-c6bd-11eb-8801-fe8659a1b8a1.png)

옵저버 패턴은 크게 주제(subject) 객체와 옵저버(observer) 객체가 등장하며, **주제 객체**는 다음의 두가지 책임을 가집니다.

- 옵저버 목록을 관리하고 옵저버를 등록하고 제거할 수 있는 메서드를 제공합니다.
- 상태의 변경이 발생하면 등록된 옵저버에 변경 내역을 알립니다.

```java
// 옵저버 패턴에서 주제에 해당하는 클래스의 구현
public abstract class StatusSubject {
  private List<StatusObserver> observers = new ArrayList<StatusObserver>();

  public void add(StatusObserver observer) {observers.add(observer);}
  public void remove(StatusObserver observer) {observers.remove(observer);}
  public void notifyStatus(Status status) {
    for(StatusObserver observer : observers)
      observer.onAbnormalStatus(status);
  }
}
```

```java
// 옵저버 인터페이스
public interface StatusObserver {
  void onAbnormalStatus(Status status);
}

// 콘클이트 옵저버 클래스의 구현 예시
public class StatusEmailSender implements StatusObserver {
  @Override
  public void onAbnormalStatus(Status status) {
    sendEmail(status);
  }

  private void sendEmail(Status status) {
    ... // 이메일 전송 코드
  }
}
```

이러한 옵저버 패턴을 적용할 때의 **장점**은 **주제 클래스 변경 없이 상태 변경을 통지 받을 옵저버를 추가할 수 있습니다.**

### 옵저버 객체에게 상태 전달 방법

일반적으로는 주체 객체에서 상태 값을 전달하면, 옵저버 객체에서 파라미터로 받아 상태를 전달 받습니다. 다만, 필요에 따라, 콘크리트 주체 객체에서 직접 접근하는 경우도 존재합니다. 이러한 경우에는 콘크리트 주제 클래스에 의존을 가지게 됩니다.

### 주제 객체 구분

옵저버 패턴을 자주 사용되는 영역은 GUI 프로그래밍 영역입니다.

### 옵저버 패턴 구현의 고려 사항

일반적으로 옵저버 패턴을 구현할 때는 다음을 고려합니다.

- 주제 객체의 통지 기능 실행 주체
  - 옵저버에 통지하는 시점을 결정하는 주체가 누가 되는지에 대한 고민
- 옵저버 인터페이스의 분리
  - 옵저버 인터페이스 개수에 대한 고민(ex. 마우스 클릭 이벤트, 터치 이벤트 ...)
- 통지 시점에서의 주제 객체 상태
  - 통지 시점에서 주제 객체의 상태에 결함이 없어야합니다.
  - 이러한 방법의 예시로는 상태 변경과 통지 기능에 템플릿 메서드 패턴을 적용하는 것입니다.
- 옵저버 객체의 실행 제약 조건
  - 옵저버 객체의 실행에 대한 제약 규칙을 정해야합니다.

<br/>

## 미디에이터 패턴

미디에이터(Mediator) 패턴을 사용하면 각 객체들이 직접 메세지를 주고 받는 대신에 중간에 중계 역할을 수행하는 미디에이터 객체를 두고 미디에이터를 통해서 각 객체들이 간접적으로 메시지를 주고 받도록 합니다.

![image](https://user-images.githubusercontent.com/42582516/120911624-c02c8e80-c6c3-11eb-9aba-f5e9ced4aac3.png)

다른 협업 객체들도 모든 요청을 미디에이터에 보내며, 미디에이터는 그 요청을 처리할 알맞은 객체를 실행합니다. 신규로 클래스가 추가되더라도 미디에이터만 수정될 뿐 **각 협업 클래스를 수정할 필요는 없으며 수정하더라도 변경 범위가 최소화됩니다.**

미디에이터 패턴을 사용할 때의 단점은 협업 클래스의 개수가 증가할수록 미디에이터의 코드는 복잡해지기 때문에 미디에이터 자체를 유지 보수하는 것은 협업 클래스에 비해 어려워집니다.

### 추상 키디에이터 클래스의 재사용

메시지 흐름이 서로 다른 기능에서 반복해서 사용될 결우, 미디에이터 추상 클래스를 사용함으로써 미디에이터 자체의 재사용을 높일 수 있습니다.

<br/>

## 파사드 패턴

다음과 같은 구조를 가진 프로그램이 있을 때,

![image](https://user-images.githubusercontent.com/42582516/120911823-31b90c80-c6c5-11eb-8b0e-36f485f54f17.png)

이러한 구조는 문제를 가집니다.

- 코드 중복이 발생합니다. (관리가 어려워지고, 버그가 생기기 쉽습니다.)
- Dao의 직접적인 의존을 하고 있습니다.

이를 해결하는 파사드 패턴은 다음과 같습니다.

![image](https://user-images.githubusercontent.com/42582516/120911880-a8eea080-c6c5-11eb-8fed-51acff53fcfe.png)

파사드를 통해서 간접적으로 서비스 시스템에 접근합니다.

### 파사드 패턴의 장점과 특징

클라이언트와 서브 시스템 간의 결합을 제거함으로써 얻을 수 있는 장점은 다음과 같습니다.

- 코드가 간결해집니다.
- 파사드를 인터페이스로 정의함으로써 클라이언트의 변경 없이 서브 시스템 자체를 변경할 수 있습니다.

파사드는 서브 시스템의 상세함을 감춰 주는 인터페이스와 유사하며, 파사드를 통해서 서비 시스템의 상세한 구현을 캡슐화합니다.

<br/>

## 추상 팩토리 패턴

**객체 생성 책임을 분리함으로써 문제를 해결하는 패턴**을 추상 팩토리 패턴이라고 합니다. 추상 팩토리 패턴을 사용할 때의 장점은 클라이언트에 영향을 주지 않으면서 사용할 제품(객체) 군을 교체할 수 있습니다.

만약에 팩토리가 생성하는 객체가 늘 동일한 상태를 갖는 다면, 프로토타입 방식으로 팩토리를 구현할 수 있습니다. **프로토타입 방식**은 아래 **코드처럼 생성할 객체의 원형 객체를 등록하고, 객체 생성 요청이 있으면 원형 객체를 복제해서 생성합니다.**

프로토타입 방식을 사용하면 추상 팩토리 타입과 팩토리 클래스를 따로 만들 필요가 없어 구현이 쉽지만, 제품 객체의 생성 규칙이 복잡할 경우 적용할 수 없는 한계가 있습니다.

<br/>

## 컴포지트 패턴

예를 들어 빌딩의 장비들의 전원을 관리하는 제어 프로그램을 개발할 때, 전체를 관리하는 기능이 필요할 수 있다. 이 경우에 클래스를 관리하는 클래스를 만들어서 해결할 수 있는데 이는 여러 단점이 존재합니다.

이는 동일한 코드가 중복된다는 점은 복잡도를 높여서 코드의 수정이나 확장을 어렵게 만듭니다. 이러한 문제를 해결하는 패턴이 **컴포지트 패턴**입니다. 컴포지트 패턴은 전체-부분을 구성하는 클래스가 동일 인터페이스를 구현함으로서 해결합니다.

![image](https://user-images.githubusercontent.com/42582516/120912359-51523400-c6c9-11eb-91b4-3aef3cd4a525.png)

컴포지트 패턴에서 컴포지트는 다음의 책임을 가집니다.

- 컴포넌트 그룹을 관리합니다.
- 컴포지트에 기능 실행을 요청하면, 컴포지트는 포함하고 있는 컴포넌트들에게 기능 실행 요청을 위임합니다.

### 컴포지트 패턴의 장점

- 전체나 부분이냐 상관없이 클라이언트는 단일 인터페이스로 기능을 실행할 수 있는 장점을 가집니다.
- 컴포지트 자체도 컴포넌트이기 때문에 컴포지트에 다른 컴포지트를 등록할 수 있습니다.

### 컴포지트 패턴 구현의 고려사항

- 컴포넌트를 관리하는 인터페이스를 어디서 구현할지에 대한 여부입니다.

<br/>

## 널(Null) 객체 패턴

코드를 작성하다보면 null 검사 코드를 빼먹기 쉽습니다. 이를 대비하기 위해서 널 객체 패턴을 사용할 수 있습니다.

널(Null) 객체 패턴은 null 검사 코드 누락에 다른 문제를 없애 줍니다. **널 객체 패턴**은 **null을 리턴하지 않고 null을 대신할 객체를 리턴함으로써 null 검사 코드를 없앨 수 있도록 합니다.** 널 객체 패턴은 다음과 같이 구현합니다.

- null 대신 사용될 클래스를 구현합니다. 이 클래스는 상위 타입을 상속 받으며 아무 기능도 수행하지 않습니다.
- null을 리턴하는 대신, null을 대체할 클래스의 객체를 리턴합니다.

### 널 객체 패턴의 장점

- null 검사 코드를 사용할 필요가 없기 때문에 코드가 간결해집니다.
- 코드가 간결해지므로서 코드 가독성을 높여주고 향후에 코드 수정을 보다 쉽게 해줍니다.
