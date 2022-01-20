---
sidebar_position: 2
---

# 2. 아키텍처 개요

> 이 장에서 볼 내용

- 아키텍처
- DIP
- 도메인 영역의 주요 구성요소
- 인프라스트럭처
- 모듈

## 네 개의 영역

- 아키텍처를 설계할 때 출현하는 전형적인 영역은 **'표현', '응용', '도메인', '인프라스트럭처'** 의 네영역입니다.

![표현 영역](https://user-images.githubusercontent.com/42582516/149680661-dbc6ad00-e074-4bbb-bce7-a480222adfb7.png)

- 표현 영역은 사용자의 요청을 해석해서 응용 서비스에 전달하고 응용 서비스의 실행 결과를 사용자가 이해할 수 있는 형식으로 변환해서 응답합니다.

![응용 영역](https://user-images.githubusercontent.com/42582516/149680764-7316319f-a887-491e-9657-72d5f94d9797.png)

- 응용 영역은 도메인 모델을 이용해서 사용자에게 제공할 기능을 구현합니다. 실제 도메인 로직 구현은 도메인 모델에 위임합니다.
- 도메인 영역은 도메인 모델을 구현합니다. (핵심 로직을 도메인 모델에서 구현합니다.)

![인프라스트럭처](https://user-images.githubusercontent.com/42582516/149680873-cd72be2d-d7c9-40bb-b269-30964fcf920c.png)

- 인프라스트럭처 영역은 구현 기술을 다룹니다.

<br/>

## 계층 구조 아키텍처

![계층 구조의 아키텍처 구성](https://user-images.githubusercontent.com/42582516/149680967-f76a0e77-ec54-4e42-bbbc-484e2e5b443a.png)

- 전체적인 아키텍처는 위 그림의 구조를 따릅니다.
- 계층 구조는 그 특성상 상위 계층에서 하위 계층으로의 의존만 존재하고 하위 계층은 상위 계층에 의존하지 않습니다.

![전형적인 계층 구조상의 의존관계](https://user-images.githubusercontent.com/42582516/149681123-624aafc7-8220-4d44-aa90-783aea26a7cd.png)

- 인프라스트럭처에 의존하면 '테스트 어려움'과 '기능 확장의 어려움'이라는 문제가 발생합니다.

<br/>

## DIP

![고수준 모듈과 저수준 모듈](https://user-images.githubusercontent.com/42582516/149946529-0ed784a4-c16e-4f55-8fcb-5f51ab5b8a17.png)

- 고수준 모듈의 기능을 구현하려면 여러 하위 기능이 필요합니다.
- 고수준 모듈이 제대로 동작하려면 저수준 모듈을 사용해야 합니다.
- DIP는 이 문제를 해결하기 위해 저수준 모듈이 고수준 모듈에 의존하도록 바꿉니다.

```java
public interface RuleDiscounter {
  public Money applyRules(Customer customer, List<OrderLine> orderLines);
}
```

```java
public class CalculateDiscountService {
  private RuleDiscounter ruleDiscounter;

  public CalculateDiscountService(RuleDiscounter ruleDiscounter) {
    this.ruleDiscounter = ruleDiscounter;
  }

  public Money calculateDiscount(List<OrderLine> orderLines, String customerId) {
    Customer customer = findCustomer(customerId);
    return ruleDiscounter.applyRules(customer, orderLines);
  }
}
```

```java
public class DroolsRuleDiscounter implements RuleDiscounter {
  private KieContainer kContainer;

  public DroolsRuleDiscounter) {
    KieService ks = KieServices.Factory.get();
    kContainer = ks.getKieClasspathContainer();
  }

  @Override
  public Money applyRules(Customer customer, List<OrderLine> orderLines) {
    ...
  }
}
```

- DIP를 적용해서 고수준 모듈이 저수준 모듈에 의존하지 않기 때문에 테스트 등이 쉬워집니다.

### DIP 주의사항

- DIP는 단순히 인터페이스와 구현 클래스를 분리하는 것이 아닙니다.
- 핵심은 고수준 모듈이 저수준 모듈에 의존하지 않도록 하는 것입니다.

![하위 기능을 추상화한 인터페이스는 고수준 모듈에 위치](https://user-images.githubusercontent.com/42582516/150043420-196ea35c-0492-4033-9275-2e9c9a793ca8.png)

### DIP와 아키텍처

- 인프라스트럭처 영역은 구현 기술을 다루는 저수준 모듈이며 응용 영역과 도메인 영역은 고수준 모듈입니다.

![아키텍처 수준](https://user-images.githubusercontent.com/42582516/150043561-7309f180-6cd2-4bda-a1e4-aa7b87683c72.png)

<br/>

## 도메인 영역의 주요 구성요소

도메인 영역의 주요 구성요소는 다음과 같습니다.

| 요소                         | 설명                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------- |
| 엔티티(ENTITY)               | 고유의 식별자를 갖는 객체                                                                   |
| 밸류(VALUE)                  | 고유의 식별자를 갖지 않는 객체로 주로 개념적으로 하나인 도메인 객체의 속성을 표현할 때 사용 |
| 애그리거트(AGGREGATE)        | 애그리거트는 관련된 엔티티와 밸류 객체를 개념적으로 하나로 묶은 것                          |
| 리포지터리(REPOSITORY)       | 도메인 모델의 영속성을 처리                                                                 |
| 도메인서비스(DOMAIN SERVICE) | 특정 엔티티에 속하지 않은 도메인 로직을 제공                                                |

### 엔티티와 밸류

- 도메인 모델 엔티티와 DB 테이블의 엔티티의 가장 큰 차이점은 도메인 모델의 엔티티는 데이터와 함께 도메인 기능을 함께 제공합니다.
- 또 다른 차이점은 도메인 모델의 엔티티는 두 개 이상의 데이터가 개념적으로 하나인 경우 밸류 타입을 이용해서 표현할 수 있다는 것입니다.

### 애그리거트

- 도메인이 커질수록 개발한 도메인 모델도 커지면서 많은 엔티티와 밸류가 출현합니다.

![복잡해지는 도메인 모델의 구성요소](https://user-images.githubusercontent.com/42582516/150241235-9d5534a2-79f4-440e-89f4-11ead1b2e810.png)

- 애그리거트는 관련 객체를 하나로 묶은 군집입니다.

![애그리거트](https://user-images.githubusercontent.com/42582516/150241472-c18dbb6b-d154-4f86-ab08-5415cfacf547.png)

- 애그리거트는 군집에 속한 객체들을 관리하는 루트 엔티티를 갖습니다.
- 루트 엔티티는 애그리거트에 속해 있는 엔티티와 밸류 객체를 이용해서 애그리거트가 구현해야할 기능을 제공합니다.

### 리포지터리

- 도메인 객체를 지속적으로 사용하려면 RDBMS, NoSQL, 로컬 파일과 같은 물리적인 저장소에 도메인 객체를 보관해야 합니다. 이를 위한 도메인 모델이 리포지터리입니다.
- 엔티티나 밸류가 요구사항에서 도출되는 도메인 모델이라면 리포지터리는 구현을 위한 도메인 모델입니다.
- 응용 서비스와 리포지터리는 밀접한 연관이 있습니다.
  - 응용 서비스는 필요한 도메인 객체를 구하거나 저장할 때 리포지터리를 사용합니다.
  - 응용 서비스는 트랜잭션을 관리하는데, 트랜잭션 처리는 리포지터리 구현 기술에 영향을 받습니다.
- 리포지터리는 응용서비스가 필요로 하는 메서드를 제공합니다.
  - 애그리거트를 저장하는 메서드
  - 애그리거트 루트 식별자로 애그리거트를 조회하는 메서드

<br/>

## 요청 처리 흐름

- 다음처럼 요청 처리 흐름이 진행됩니다.

![요청 처리 흐름](https://user-images.githubusercontent.com/42582516/150355075-abf5a6f2-b239-4bb8-b6dd-bc2aa1c6100f.png)

<br/>

## 인프라스트럭처 개요

- 인프라스트럭처는 표현 영역, 응용 영역, 도메인 영어을 지원합니다.
- 도메인 객체의 영속성 처리, 트랜잭션, SMTP 클라이언트, REST 클라이언트 등 다른 영역에서 필요로 하는 프레임워크, 구현 기술, 보조 기능을 지원합니다.
- 그러나 인프라스트럭처에 대한 의존을 없애는 것이 좋은 것은 아닙니다.
- 구현의 편리함은 DIP가 주는 다른 장점(변경의 유연함, 테스트가 쉬움)만큼 중요하기 때문에 DIP의 장점을 해치지 않는 범위에서 응용 영역과 도메인 영역에서 구현 기술에 대한 의존을 가지는 것이 현명합니다.
- 표현 영역은 항상 인프라스트럭처 영역과 쌍을 이룹니다.

<br/>

## 모듈 구성

- 아키텍처의 각 영역은 별도 패키지에 위치합니다.
- 도메인이 크면 하위 도메인으로 나누고 각 하위 도메인마다 별도 패키지를 구성합니다.
- 도메인이 복잡하면 도메인 모델과 도메인 서비스를 다음과 같이 별도 패키지에 위치할 수도 있습니다.
  - `com.myshop.order.domain.order` : 애그리거트 위치
  - `com.myshop.order.domain.service` : 도메인 서비스 위치
- 응용 서비스도 다음과 같이 도메인 별로 패키지를 구분할 수 있습니다.
  - `com.myshop.catalog.application.product`
  - `com.myshop.catalog.application.category`
- 모듈 구조를 얼마나 세분화해야 하는지에 대해 정해진 규칙은 없습니다.
  - 가능하면 한 패키지에 10개 미만으로 유지하는 것이 좋습니다.
