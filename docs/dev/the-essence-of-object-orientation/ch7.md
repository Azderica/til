---
sidebar_position: 7
---

# 7. 함께 모으기

> 코드와 모델을 밀접하게 연관시키는 것은 코드에 의미를 부여하고 모델을 적절하게 하낟.

- `개념 관점(Conceptual Perspective)`
  - 도메인 안에 존재하는 개념과 개념들 사이의 관계를 표현합니다.
- `명세 관점(Specification Perspective)`
  - 사용자의 영역인 도메인을 벗어나 개발자의 영역인 소프트웨어로 초점이 옮겨집니다.
  - 실제 소프트웨어 안에서 살아 숨쉬는 객체들의 책임에 초점을 맞춥니다.
- `구현 관점(Implementation Perspective)`
  - 객체들이 책임을 수행하는 데 필요한 동작하는 코드를 작성하는 것입니다.
  - 객체의 책임을 '어떻게' 수행할 것인가에 초점을 맞추며 인터페이스를 구현하는 데 필요한 속성과 메서드를 클래스에 추가합니다.

클래스는 세 가지 관점을 모두 수용할 수 있도록 개념, 인터페이스, 구현을 함께 드러내야합니다. 동시에 코드 안에서 세 가지 관점을 쉽게 식별할 수 있도록 깔끔하게 분리해야 합니다.

아래에서의 목표는 다음과 같습니다.

- 도메인 모델에서 최종 코드까지의 구현 과정을 간략하게 설명합니다.
- 구현 클래스를 개념 관점, 명세 관점, 구현 관점에서 바라본다는 것이 무엇을 의미하는지를 설명하는 것입니다.

## 7.1 커피 전문점 도메인

### 커피 주문

커피 전문점에서 커피를 주문하는 과정을 객체들의 협력 관계로 구현하는 경우를 가정합니다.

(내용 생략)

### 커피 전문점이라는 세상

이를 간단하게 객체의 관계로 간단하게 나타내면 다음과 같습니다.

![객체-관계](https://user-images.githubusercontent.com/42582516/132520697-66abeae3-1f2f-4011-9869-84ed7e33f0f4.png)

- **포함(containment) 관계, 합성(composition) 관계** : 포함되는 관계, 속이찬 마름모 모양
- **연관(association) 관계** : 인스턴스가 서로 포함하지는 않으나 알고 있어야하는 관계, 직선

위의 관계를 참고하여 만든 **도메인 모델**은 다음과 같습니다. 핵심은 관계를 완성하는 것입니다.

![도메인 모델](https://user-images.githubusercontent.com/42582516/132521431-3eeed7ae-fb43-416a-a3bb-7d7033e2ab55.png)

이 단계의 다음 단계는 적절한 객체에게 적절한 책임을 할당하는 것입니다.

<br/>

## 7.2 설계하고 구현하기

### 커피를 주문하기 위한 협력 찾기

- 객체지향 설계의 첫 번째 목표는 훌륭한 협력을 설계하는 것입니다. 그리고 이를 수행하는 것은 메시지입니다.
- 메시지를 먼저 선택한 후에는 메시지를 수신하기에 적절한 객체를 선택합니다.

이를 객체 협력으로 나타내면 다음과 같습니다.

![커피 주문을 위한 객체 협력](https://user-images.githubusercontent.com/42582516/132597401-a8a7b48f-bb6d-47d2-998c-6fa072adefdb.png)

### 인터페이스 정리하기

- 해당 작업으로 얻어낸 것은 객체들의 인터페이스입니다. (객체가 수신한 메시지가 객체의 인터페이스를 결정합니다.)
  - **메시지가 객체를 선택했고, 선택된 객체는 메시지를 자신의 인터페이스로 받아들입니다.**
- 객체들의 협력은 컴퓨터 안에서 일어나는 상황을 동적으로 묘사한 모델입니다.
- 일반적으로 객체의 타입을 구현하는 일반적인 방법은 클래스를 이용하는 것입니다.

```java
class Customer {
   public void order(String menuName) {}
}
class MenuItem {}
class Menu {
   public MenuItem choose(String name) {}
}
class Barista {
   public Coffee makeCoffee(MenuItem menuItem) {}
}
class Coffee {
   public Coffee(MenuItem menuItem) {}
}
```

### 구현하기

앞에서 내온 내용을 구현하면 다음과 같습니다. (Customer가 Menu 객체와 Barista 객체에 접근하기 위해 참조를 사용합니다.)

```java
class Customer {
   public void order(String menuName, Menu menu, Barista barista) {
      MenuItem menuItem = menu.choose(menuName);
      Coffee coffee = barista.makeCoffee(menuItem);
      ...
   }
}
```

```java
class Menu {
   private List<MenuItem> items;

   public Menu(List<MenuItem> items) {
      this.items = items;
   }

   public MenuItem choose(String name) {
      for(MenuItem each : items) {
         if(each.getName().equals(name)) {
            return each;
         }
      }
      return null;
   }
}
```

```java
class Barista {
   public Coffee makeCoffee(MenuItem menuItem) {
      Coffee coffee = new Coffee(menuItem);
      return coffee;
   }
}
```

```java
class Coffee {
   private String name;
   private int price;

   public Coffee(MenuItem menuItem) {
      this.name = menuItem.getName();
      this.price = menuItem.cost();
   }
}
```

```java
public class MenuItem {
   private String name;
   private int price;

   public MenuItem(String name, int price) {
      this.name = name;
      this.price = price;
   }

   public int cost() {
      return price;
   }

   public String getName() {
      return name;
   }
}
```

이를 클래스 구조로 나타내면 다음과 같습니다.

![최종 클래스 구조](https://user-images.githubusercontent.com/42582516/132598610-2840e430-3f75-452b-a329-b9eddbb3ebb6.png)

> 참고 사항

- 인터페이스를 통해 실제 상호작용을 해보지 않으면 인터페이스를 정확하게 예측이 안됩니다.
- 설계는 간단히 끝나고 빠르게 구현에 들어갑니다.

<br/>

## 7.3 코드와 세 가지 관점

### 코드는 세 가지 관점을 모두 제공해야 한다

앞의 코드는 개념 관점, 명세 관점 구현 고나점에서 각기 다른 사항들을 설명해줍니다.

#### 개념 관점

- Customer, Menu, MenuItem, Barista, Coffee 클래스
- 도메인을 구성하는 중요한 개념과 관계를 반영합니다.
- 소프트웨어 클래스가 도메인 개념의 특성을 최대한 수용하면 변경을 관리하기 쉽고 유지보수성을 향상시킵니다.
- 소프트웨어 클래스와 도메인 클래스 사이의 간격이 좁을수록 기능 변경시 수정사항이 줄어듭니다.

#### 명세 관점

- 클래스의 인터페이스를 바라봅니다.
- 클래스의 public 메서드는 다른 클래스가 협력할 수 있는 공용 인터페이스를 드러냅니다.
- 최대한 변화에 안정적인 인터페이스를 만들기 위해서는 인터페이스를 통해 구현과 관련된 세부 사항이 드러나지 않게 해야합니다.

#### 구현 관점

- 클래스의 내부 구현을 바라봅니다.
- 메서드와 속성이 철저히 클래스 내부로 **캡슐화**해야합니다.

#### 즉.

개념 관점, 명세 관점, 구현 관점은 동일한 코드를 바라보는 서로 다른 관점입니다. 이러한 관점이 명확하게 드러날 수 있게 코드를 개선해야합니다.

### 도메인 개념을 참조하는 이유

어떤 메시지가 있을 때 그 메시지를 수신할 객체를 선택하는 방법은 도메인 개념 중 가장 적절한 것을 선택하는 방법입니다.

- 도메인 개념 안에서 적절한 객체를 선택하는 것은 도메인에 대한 지식을 기반으로 코드의 구조와 의미를 쉽게 유추할 수 있습니다.
- 소프트웨어는 항상 변하고 설계는 변경을 위해 존재합니다.
- **소프트웨어 클래스가 도메인 개념을 따르면 변화에 쉽게 대응이 가능합니다.**

### 인터페이스와 구현을 분리하라

- **인터페이스와 구현을 분리합니다.**
- 명세 관점과 구현 관점이 섞이면 취약한 설계가 나옵니다.
- **클래스를 봤을 때 명세 관점과 구현 관점으로 나눠볼 수 있어야합니다.** 이를 하기 위해서는 훌륭한 설계가 뒷받침되어야합니다.
