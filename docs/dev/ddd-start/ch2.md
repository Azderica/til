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

### 엔티티와 밸류

### 애그리거트

### 리포지터리

<br/>

## 요청 처리 흐름

<br/>

## 인프라스트럭처 개요

<br/>

## 모듈 구성
