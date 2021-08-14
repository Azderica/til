---
sidebar_position: 1
---

# 1장. 오브젝트와 의존관계

## DAO

### 용어 정리

- DAO
  - DAO(Data Access Object)는 DB를 사용해 데이터를 조회하거나 조작하는 기능을 전담하도록 만든 오브젝트
- JavaBean(자바 빈)
  - 비주얼 툴에서 조작 가능한 컴포넌트
  - 두 가지 조건이 필요
    - 디폴트 생성자 : 파라미터가 없는 디폴트 생성자가 필요
    - 프로퍼티 : 자바빈이 노출하는 이름을 가진 속성, 접근자(set/get)을 통해 수정 및 조회 가능
- 리팩토링
  - 기존의 코드를 외부의 동작방식에 변화 ㅇ벗이 내부 구조를 변경해서 재구성하는 작업/기술
  - 좋은 내부 설계로 인해 유지보수와 생산성, 품질이 높아집니다.
  - 마틴 하울러의 **리팩토링** 책 추천

### JDBC 작업의 순서

1. DB 연결을 위한 Connection을 가져온다
2. SQL을 담은 Statement를 만든다
3. 만들어진 Statement를 실행한다
4. 조회의 경우 SQL 쿼리의 실행 결과를 ResultSet으로 받아서 정보를 저장할 Object에 옮겨준다.
5. 작업 중에 생성된 Connection, Statement, ResultSet 같은 리소스는 작업을 마친 후 반드시 닫는다.
6. JDBC API가 만들어내는 예외를 잡아서 직접 처리하거나, 메소드에 throws를 선언해서 예외가 발생시 메소드 밖으로 던집니다.

<br/>

## 코드를 통한 리팩토링

### 리팩토링 전 코드

오브젝트 클래스

```java
@Getter @Setter
public class User {
  String id;
  String name;
  String password;
}
```

DB를 관리할 수 있는 DAO 클래스

```java
public class UserDao {
  public void add(User user) throws ClassNotFoundException, SQLException {
    Class.forName("come.mysql.jdbc.Driver");
    Connection c = DriverManager.getConnection("jdbc:mysql://localhost:springbook", "spring", "book");

    PreparedStatement ps = c.prepareStatement("insert into users(id, name, password) values(?, ?, ?)");
    ps.setString(1, user.getId());
    ps.setString(2, user.getName());
    ps.setString(3, user.getPassword());

    ps.executeUpdate();

    ps.close();
    c.close();
  }

  public void get(String id) throws ClassNotFoundException, SQLException {
    Class.forName("come.mysql.jdbc.Driver");
    Connection c = DriverManager.getConnection("jdbc:mysql://localhost:springbook", "spring", "book");

    PreparedStatement ps = c.prepareStatement("select * from users where id = ?");
    ps.setString(1, id);

    ResultSet rs = ps.executeQuery();
    rs.next();
    User user = new User();
    user.setId(rs.getString("id"));
    user.setName(rs.getString("name"));
    user.setPassword(rs.getString("password"));

    rs.close();
    ps.close();
    c.close();

    return user;
  }
}

```

테스트 클래스

```java
public static void main(String[] args) throws ClassNotFoundException, SQLException {
  UserDao dao = new UserDao();

  User user = new User();
  user.setId("123");
  user.setName("myName");
  user.setPassword("myPassword");

  dao.add(user);

  System.out.println(user.getId() + " is created");

  User user2 = dao.get(user.getId());

  System.out.println(user2.getName());
  System.out.println(user2.getPassword());
  System.out.println(user2.getId() + "is validate");
}
```

### 해당 코드의 문제점.

관심사의 분리가 없음. -> **분리와 확장**이 필요 (관심사의 분리, Separation of Concerns)

객체 지향의 장점을 살리지 못했음

- 변화에 효과적으로 대처할 수 잇음
- 가상의 추상세계를 효과적으로 구성 가능
- 이를 자유롭고 편리하게 변경, 발전, 확장이 가능합니다.

### 디자인 패턴

소프트웨어 설계 시 특정 상황에서 자주 만나는 문제를 해결하기 위해 사용할 수 있는 재사용 가능한 솔루션

패턴의 내부 설계의 구조는 일반적으로 비슷한데, 대부분 두 구조로 정리된다.

- 클래스 상속
- 오브젝트 합성

패턴에서 가장 중요한 내용은 **각 패턴의 핵심이 담긴 목적이나 의도**이다.

#### 템플릿 메소드 패턴

**의도** : 상속을 통해서 슈퍼클래스의 기능을 확장하기 사용하는 가장 대표적인 방법

변하지 않는 기능은 슈퍼클래스에서 만들고, 자주 변경되며 확장할 기능은 서브클래스에서 만듭니다.

슈퍼 클래스에서 미리 추상 메소드나 오버라이드 가능한 메소드를 정의하고, 이를 활용한 템플릿 메소드를 만듭니다. 이를 일반적으로 훅(hook) 메소드라고 합니다.

#### 팩토리 메소드 변경

**의도** : 상속을 통해 기능을 확장하는 패턴

슈퍼클래스 코드에서 서브클래스에서 구현할 메소드를 호출해서 필요한 타입의 오브젝트를 가져와서 사용합니다.

### 리팩토링 전략

다음과 같은 솔루션을 사용했습니다.

- 반복적인 코드 제거
- 상속 사용 -> but, 상속이 가지는 2가지 문제가 존재
  - 다중 상속 불가, 상속 클래스는 생각보다 밀접함
- 따라서 **인터페이스 사용**
- 관계설정 책임의 분리
- 불필요한 의존 제거 -> 다형성을 이용
- 각종 원칙과 패턴을 적용
  - 해당 문제에서는 개방 폐쇄 원칙을 적용하였습니다.
- IoC 사용

> 원칙과 패턴

객체지향 설계 원칙(SOLID)는 크게 다음과 같이 5가지로 구성됩니다.

- SPR(The Single Responsibility Principle) : 단일 책임 원칙
- OCP(The Open Closed Principle) : 개방 폐쇄 원칙
- LSP(The Liskov Substitution Principle) : 리스코프 치환 원칙
- ISP(The Interface Segregation Principle) : 인터페이스 분리 원칙
- DIP(The Dependency Inversion Principle) : 의존관계 역전 원칙

> 높은 응집도와 낮은 결합도 (High coherence and low coupling)

개방 폐쇄 원칙(OCP)는 **높은 응집도와 낮은 결합도**로 설명가능합니다.

- 높은 응집도
  - 변화가 일어날 때 해당 모듈에서 변하는 부분이 큽니다.
  - 응집도가 적으면 모듈의 일부분만 변하기 때문에 이를 확인해야하는 부담이 필요합니다.
- 낮은 결합도
  - 책임과 관심사가 다른 오프젝트 또는 모듈과는 낮은 결합도(느슨한 연결)을 유지합니다.

### 리팩토링 한 코드

![image](https://user-images.githubusercontent.com/42582516/108572122-f3d1eb80-7354-11eb-982b-e1c7dd558eb3.png)

다음과 같이 설계됩니다.

DaoFactory

```java
public class DaoFactory {
  public UserDao userDao() {
    return new UserDao(connectionMaker());
  }

  public AccountDao accountDao() {
    return new AccountDao(connectionMaker());
  }

  public MessageDao messageDao() {
    return new MessageDao(connectionMaker());
  }

  public ConnectionMaker connectionMaker() {
    return new DConnectionMaker();
  }
}
```

ConnectionMaker Interface

```java
public interface ConnectionMaker {
  public Connection makeConnection() throws ClassNotFoundException, SQLException;
}
```

UserDao

```java
public class UserDao {
  private ConnectionMaker connectionMaker;

  public UserDao(ConnectionMaker connectionMaker) {
    this.connectionMaker = connectionMaker;
  }

  public void add(User user) throws ClassNotFoundException, SQLException {
    Connection c = connectionMaker.makeConnection();
    ...
  }

  public void get(String id) throws ClassNotFoundException, SQLException {
    Connection c = connectionMaker.makeConnection();
    ...
  }
}
```

Test

```java
public class UserDaoTest {
  public static void main(String[] args) throws ClassNotFoundException, SQLException {
    UserDao dao = new DaoFactory().userDao();

  }
}
```

<br/>

## IoC

IoC는 제어의 역전(Inversion of Control)의 약자입니다.

제어의 역전은 **일종의 프로그램의 제어 흐름 구조가 뒤바뀌는 것을 의미**합니다.

모든 제어 권한을 자신이 아닌 다른 대상에 위임합니다. 프로그램의 시작을 담당하는 `main()`과 같은 엔트리 포인트를 제외하면 모든 오브젝트는 이렇게 위임받은 제어 권한을 갖는 특별한 오브젝트에 의해 결정되고 만들어집니다.

다음과 같은 내용이 필요합니다.

- 애플리케이션 컴포넌트의 생성과 관계설정, 사용, 생명주기 관리를 하는 존재가 필요

### Factory

객체의 생성 방법을 결정하고, 만들어진 오브젝트를 돌려줍니다.

추상 팩토리 패턴이나 팩토리 메소드 패턴에서 이야기하는 팩토리와는 다릅니다.

### 대표적 예시

JSP, EJB, 프레임 워크

프레임워크의 경우는 라이브러리와 달리 애플리케이션 코드가 프레임워크에 의해 사용되며 개발한 클래스를 등록하고 흐름을 주도하는 중에 개발자가 만든 애플리케이션 코드를 사용하는 방식

<br/>

## Spring IoC

스프링의 핵심을 담당하는 것은 **빈 팩토리**또는 **애플리케이션 컨텍스트**입니다.

### 용어 정리

- 빈(bean)
  - 스프링이 제어권을 가지고 직접 만들고 관계를 부여하는 오브젝트
  - 스프링이 IoC 방식으로 관리하는 오브젝트
- 빈 팩토리(bean factory)
  - IoC를 담당하는 컨테이너
  - 빈의 등록, 생성과 관계설정 같은 제어를 담당하는 IoC 오브젝트
  - 대표적인 예시로 `getBean()`와 같은 메소드가 있다.
- 애플리케이션 컨텍스트(application context)
  - 빈 팩토리를 확장한 IoC 컨테이너
  - 빈을 등록하고 관리하는 기본적인 기능은 빈팩토리와 동일
  - `BeanFactory`를 상속받음
- 설정정보/설정 메타정보(configuration metadata)
  - 애플리케이션 컨텍스트가 IoC를 적용하기 위해 사용하는 메타정보
- 컨테이너/IoC 컨테이너
  - IoC 방식으로 빈을 관리한다는 의미
- 스프링 프레임워크
  - IoC 컨테이너, 애플리케이션 컨텍스트를 포함해서 스프링이 제공하는 모든 기능을 통틀어 말할 때 주로 사용됨

### 애플리케이션 컨텍스트

> 애노테이션

- `@Configuration` : 애플리케이션 컨텍스트 또는 빈 팩토리가 사용할 설정 정보
- `@Bean` : 오브젝트 생성을 담당하는 IoC용 메소드라는 표시

#### 애플리케이션 컨텍스트의 장점

- 클라이언트는 구체적인 팩토리 클래스 알 필요가 없습니다.
- 애플리케이션 컨텍스트는 종합 IoC 서비스를 제공해줍니다.
- 애플리케이션 컨텍스트는 빈을 검색하는 다양한 방법을 제공합니다.

<br/>

## 싱글톤 레지스트리와 오브젝트 스코프

> 오브젝트의 동일성(identical)과 동등성(equality)

두 오브젝트가 동일하다면 사실은 하나의 오브젝트만 존재하고, 두 개의 오브젝트 레퍼런스 변수를 가지고 있는 것이고 두 오브젝트가 동등하다는 것은 각기 다른 오브젝트가 존재하는데 동등성 기준에 따라 두 오브젝트의 정보가 동등하다고 판단하는 것입니다.

### 서버 애플리케이션과 싱글톤

애플리케이션 컨텍스트는 **싱글톤**을 저장하고 관리한다.

스프링에서 싱글톤을 사용하는 이유는 다음과 같다.

- 대부분 스프링은 서버환경에서 사용된다.
- 높은 처리의 성능이 요구된다.
- 데이터 액세스 로직, 서비스 로직, 비지니스 로직, 프레젠테이션 로직 등의 다양한 기능을 담당하는 오브젝트들이 참여하는 계층적 구조로 이루어 있다.
- 즉, **많은 요청이 들어올 때 마다 로직을 선언해서 사용하는 경우, 서버가 감당하기 힘들다.**

서블릿이 자바 EE의 기본이 되는 서비스 오브젝트이며, 싱글톤으로 동작합니다.

### 싱글톤 패턴과 단점

디자인 패턴 중의 하나이며, 자주 활용되지만 많은 비판도 있습니다. 싱글톤 패턴은 **어떤 클래스를 애플리케이션 내에서 제한된 인스턴스 개수, 이름처럼 주로 하나만 존재하도록 강제하는 패턴**입니다.

그러나 다음과 같은 문제가 존재합니다.

- private 생성자를 가지고 있기 때문에 상속할 수 없습니다.
  - 객체 지향적인 설계의 장점을 적용하기 어렵습니다.
- 싱글톤은 테스트하기 힘듭니다.
  - 만들어지는 방식이 제한적이라서 테스트가 어렵거나 불가능한 경우가 있습니다.
- 서버환경에서 싱글톤이 하나만 만들어지는 것을 보장하지 못합니다.
  - 클래스 로드에 따라 하나 이상의 오브젝트가 생성가능합니다.
- 싱글톤의 사용은 전역 상태를 만들 수 있기 때문에 좋지않습니다.
  - 사용하는 클라이언트가 정해져있지않고, 스태틱 메소드로 접근이 가능하므로 어디서든지 사용가능합니다.

### 싱글톤 레퍼지토리

정의 : 직접 싱글톤 형태의 오버젝트를 만들고 관리하는 기능을 제공하는 것

장점

- 평범한 자바 클래스를 싱글톤으로 활용하게 해줍니다.
- 객체 지향적인 설계방식과 원칙, 디자인 패턴 등을 적용하는데 제약이 없습니다. (싱글톤 패턴 제외)

### 싱글톤과 오브젝트의 상태

싱글톤은 멀티스레드 환경이면 여러 스레드가 동시에 접근해서 사용가능 -> 상태 관리에 주의를 기울여야함

기본적으로 서비스 형태의 오브젝트로 사용하는 경우, 무상태(stateless) 방식으로 만들어야합니다.

- 일반적으로 파라미터, 로컬 변수, 리턴 값 등을 사용해야합니다.

### 스프링 빈의 스코프

정의 : 스프링이 관리하는 오브젝트인 빈이 생성하고 존재, 적용되는 범위

<br/>

## 의존 관계 주입 (DI)

DI를 번역하면 의존성 주입으로 해석되지만, 이는 완벽한 해석이라고 할 수는 없습니다. 핵심은 **오브젝트 레퍼런스를 외부로부터 제공(주입)받고 이를 통해 여타 오브젝트와 다이내믹하게 의존관계가 만들어지는 것**입니다.

의존이란? 영향을 미친다는 것.

- A가 B에 의존 = B가 A에 영향을 미친다.

의존오브젝트?

- 프로그램이 시작되고 오브젝트가 만들어지고 런타임시에 의존관계를 맺는 대상

**의존 관계 주입**은 3가지 조건을 만족해야합니다.

- 클래스 모델이나 코드에는 런타임 시점의 의존관계가 드러나지 않는다. 즉, 인터페이스에만 의존해야합니다.
- 런타임 시점의 의존관계는 컨테이너나 팩토리 같은 제 3의 존재가 결정합니다.
- 의존관계는 사용할 오브젝트에 대한 레퍼런스를 외부에서 제공해줌으로써 만들어집니다.

의존관계 검색(dependency lookup)?

- 자신이 필요로 하는 의존 오브젝트를 능동적으로 찾음.
- 기존의 다른 의존관계 주입의 거의 모든 장점을 가지고 있습니다.

### DI 기술의 장점

- 객체지향 설계와 프로그래밍의 원칙의 장점
- 결합도가 낮고, 의존성이 적으며, 확장에 좀 더 자유롭습니다.

따라서 아래의 응용 사례에 쓸 수 있습니다.

- 기능 구현의 교환 (ex. 개발시 개발 DB, 배포시는 실제 DB)
- 부가 기능 추가

### 메소드를 통한 의존관계 주입

일반적으로는 의존관계 주입을 위해 **생성자**를 사용했으나 메소드를 이용해서도 생성할 수 있습니다.

- setter 메소드를 이용한 주입
- 일반 메소드를 이용한 주입

### XML을 이용한 설정

다음과 같이 사용할 수 있습니다.

|             | 자바 코드 설정정보        | XML 설정정보                  | 설명                                           |
| ----------- | ------------------------- | ----------------------------- | ---------------------------------------------- |
| 빈 설정파일 | `@Configuration`          | `<beans>`                     |                                                |
| 빈의 이름   | `@Bean methodName()`      | `<bean id="methodName"`       | 빈이름                                         |
| 빈의 클래스 | `return new BeanClass();` | `class="a.b.c... BeanClass">` | 빈 오브젝트를 어떤 클래스를 이용해 만들지 결정 |

- 빈의 의존 오브젝트 : 빈의 생성자나 수정자 메소드를 통해 의존 오브젝트를 넣어줍니다.

### 프로퍼티 값 주입

값 주입도 일종의 DI, value를 넣어줄 수 있습니다.

```xml
<property name="username" value="admin">
```

<br/>

## 정리

- 바뀔 수 있는 쪽의 클래스는 인터페이스를 구현하고, 다른 클래스에서는 인터페이스를 통해서만 접근 가능하도록 해야한다.
  - 이를 통해서 책임이 변하는 경우 외에는 불필요한 변화를 줄일 수 있습니다.
  - 낮은 결합도, 높은 응집도를 구현할 수 있습니다.
- IoC, Di를 통해서 생성 및 선택 책임을 벗어 날 수 있습니다.
- DI를 통해서 설계 시점과 코드레벨에서는 클래스와 인터페이스 사이의 느슨한 의존관계를 구성하고, 런타임시 실제 사용할 구체적인 의존 오브젝트를 DI 컨테이너를 통해서 주입받아 의존관계를 만듭니다.
