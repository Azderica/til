---
sidebar_position: 2
---

# 2. 테스트

스프링이 개발자에게 제공하는 중요한 가치는 **객체 지향**과 **테스트**로 정할 수 있습니다.

- 스프링의 핵심인 IoC와 DI는 오브젝트의 설계와 생성, 관계, 사용에 관한 기술입니다.
- 복잡한 애플리케이션을 개발하는데 필요한 도구 하나는 객체지향 기술입니다.
- 다른 하나의 도구로 스프링이 강조하고 가치를 두고 있는 것이 테스트입니다.

애플리케이션은 계속 변하고 복잡하기 때문에 이를 해결하는 전략은 다음과 같습니다.

- 확장과 변화를 고려한 객체지향적 설계와 그것을 효과적으로 담아낼 수 있는 IoC/DI 같은 기술
- 만들어진 코드를 확신할 수 있게 해주고, 변화에 유연하게 대처할 수 있는 자신감을 주는 테스트 기술

## 2.1 UserDaoTest 다시 보기

### 2.1.1 테스트 유용성

- 테스트란 결국 내가 예상하고 의도했던 대로 코드가 정확히 동작하는지를 확인해서 만든 코드를 확신할 수 있게 해주는 작업입니다.

### 2.1.2 UserDaoTest 특징

```java
public static void main(String[] args) throws ClassNotFoundException, SQLException {
  ApplicationContext context = new GenericXmlApplicationContext("applicationContext.xml");

  UserDao dao = context.getBean("userDao", UserDao.class);

  User user = new User();
  user.setId("user");
  user.setName("백기선");
  user.setPassword("married");
  dao.add(user);
  System.out.println(user.getId() + " 등록 성공");

  User user2 = dao.get(user.getId());
  System.out.println(user.getName());
  System.out.println(user.getPassword());
  System.out.println(user2.getId() + " 조회 성공");
}
```

다음의 코드는 해당 특징을 가지고 있습니다.

- 자바에서 가장 손쉽게 실행 가능한 main() 메소드를 이용합니다.
- 테스트할 대상인 UserDao의 오브젝트를 가져와 메소드를 호출합니다.
- 테스트에 사용할 입력 값을 직접 코드에서 만들어 넣어줍니다.
- 테스트의 결과를 콘솔에 출력합니다.
- 작업이 에러 없이 끊나면 콘솔에 성공 메시지로 출력해줍니다.

> 웹을 통한 DAO 테스트 방법의 문제점

> 작은 단위의 테스트

> 자동수행 테스트 코드

> 지속적인 개선과 점진적인 개발을 위한 테스트

<br/>

## 2.2 UserDaoTest 개선

<br/>

## 2.3 개발자를 위한 테스팅 프레임워크 JUnit

<br/>

## 2.4 스프링 테스트 적용

<br/>

## 2.5 학습 테스트로 배우는 스프링

<br/>

## 2.6 정리
