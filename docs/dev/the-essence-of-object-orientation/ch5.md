---
sidebar_position: 5
---

# 5. 책임과 메시지

> 의도는 메시징입니다. 훌륭하고 성장 가능한 시스템을 만들기 위한 핵심은 모듈 내부의 속성과 행동이 어떤가보다는 모듈이 어떻게 커뮤니케이션하는지에 따라 달려있습니다.

- '책임감 분산(diffusion of responsibility)'와 같은 경우를 보면, 책임감에 대한 생각을 해볼 수 있습니다.
- 핵심은 명확한 책임과 역할을 지닌 참가자들이 협력에 참여해야한다는 것입니다.
- 역할과 책임이 흐릿할수록 객체들을 도와줄 협력자를 찾지 못하게됩니다.

## 5.1 자율적인 책임

### 설계의 품짐을 좌우하는 책임

- 객체지향 공동체를 구성하는 기본 단위는 **자율적**인 객체입니다.
- 객체가 어떤 행동을 하는 유일한 이유는 다른 객체로부터 요청을 수신했기 때문입니다. 이러한 행동을 책임이라고 합니다.
- 적절한 책임이 자율적인 객체를 낳고, 자율적인 객체들이 모여 유연하고 단순한 협력을 낳습니다.

### 자신의 의지에 따라 증언할 수 있는 자유

- 객체가 책임을 자율적으로 수행하기 위해서는 객체에게 할당되는 책임이 자율적이여야합니다.
- 객체 지향에서 책임을 너무 상세하게 요청하면 이는 그 객체에게 독이됩니다.
- 객체지향에서는 자율적인 객체들의 공동체이며 객체가 자율적이기 위해서는 객체에게 할당되는 책임의 수준 역시 자율적이어야합니다.

### 너무 추성적인 책임

- 너무 포괄적이고 추상적인 책임을 선택하는 것도 좋은 것은 아닙니다.
- 추상적이고 포괄적인 책임은 협력을 좀 더 다양한 환경에서 재사용할 수 있도록 유연성이라는 축복을 주나, 이는 **의도를 명확하게 설명할 수 있는 수준에서 추상적**이어야합니다.
- 어떤 책임이 자율적인지를 판단하는 기준은 문맥에 따라 다릅니다.

### '어떻게'가 아니라 '무엇'을

- 자율적인 책임의 특징은 객체가 `어떻게(how)` 해야 하는지가 아니라 `무엇(what)`을 해야하는지에 대해 설명해야합니다.

### 책임을 자극하는 메시지

- 책임이라는 말 속에는 어떤 행동을 수행한다는 의미가 내포됩니다.
- 객체가 자신에게 할당된 책임을 수행하는 것은 외부에서의 요청입니다. 이를 **메시지**라고 부릅니다.

<br/>

## 5.2 메시지와 메서드

### 메시지

- 하나의 객체는 메시지를 전송함으로써 다른 객체에 접근합니다. 이러한 행위를 **메시지-전송**이라고 합니다.
- 메시지를 가리키는 이름을 **메시지 이름(message name)**이라고 하며, 추가적인 정보가 필요한 경우 메시지의 **인자(argument)**를 통해 추가 정보를 제공할 수 있습니다.
- 메시지는 메시지의 이름과 인자의 두 부분으로 구성됩니다.

> 메시지 전송 문법은 언어에 따라 달라질 수 있습니다.

- 메시지를 수신받은 객체는 해당 메시지를 처리할 수 있는지를 확인합니다.
- **메시지는 객체들이 서로 협력하기 위해 사용할 수 있는 유일한 의사소통 수단입니다.**
- 외부 객체는 메시지에 관해서만 볼 수 있고 객체 내부는 볼 수 없으므로 자연스럽게 객체의 외부와 내부가 분리됩니다.

### 메서드

- 객체가 수신할 수 있는 '메시지'와 메시지를 처리하기 위해 선택할 수 있는 '방법'이 있습니다.
- 메시지를 수신한 객체가 실행 시간에 메서드를 선택할 수 있다는 사실은 다른 프로그래밍 언어와 객체지향 프로그래밍 언어를 구분 짓는 핵심적인 특징 중 하나입니다.

### 다형성

- 다형성이란 **서로 다른 유형의 객체가 동일한 메시지에 대해 서로 다르게 반응하는 것을 의미**합니다.
- 다형성은 역할, 책임, 협력과 깊은 관계가 있으며 서로 다른 객체들이 다형성을 만족시킨다는 것은 객체들이 동일한 책임을 공유한다는 것을 의미합니다.
- 다형성은 객체들의 대체 가능성을 이용해 설계를 유연하고 재사용 가능하게 만듭니다.
- 다형성을 사용하면 메시지를 이해할 수 있는 어떤 객체와도 협력할 수 있는 유연하고 확장 가능한 구조를 만들 수 있습니다.

### 유연하고 확장 가능하고 재사용성이 높은 협력의 의미

송신자가 수진자에 대해 매우 적은 정보를 통해 상호 협력이 가능합니다.

- 협력이 유연해집니다.
- 협력이 수행되는 방식을 확장할 수 있습니다.
- 협력이 수행되는 방식을 재사용할 수 있습니다.

> 객체 지-지향 시스템은 협력하는 객체들의 연결망(web)입니다. 객체의 조합을 변경함으로써 시스템의 행위를 변경할 수 있게 합니다.

### 송신자와 수신자를 약하게 연결하는 메시지

- 수신자와 송신자는 메시지라는 얇은 끈으로만 이어져 있습니다.
- **메시지를 기반으로 한 두 객체 사이의 이 낮은 결합도가 바로 설계를 유연하고 확장 가능하며 재사용 가능하게 만드는 비결입니다.**

<br/>

## 5.3 메시지를 따라라

### 객체지향의 핵심, 메시지

- 클래스 기반의 객체 지향언어에서도 애플리케이션을 살아있게 만드는 것은 클래스가 아닌 객체입니다.
- 클래스는 단지 동적인 객체들의 특성과 행위를 정적인 텍스트로 표현하기 위해 사용할 수 있는 추상화 도구일 뿐입니다.
- 클래스를 중심에 두는 설계는 유연하지 못하고 확장하기 어렵습니다.
- 메시지가 아니라 데이터를 중심으로 객체를 설계하는 방식은 객체의 내부 구조를 객체 정의의 일부로 만들기 때문에 객체의 자율성을 저해합니다. (이러한 방식은 데이터-주도 설계라 불립니다.)
- **데이터에 대한 결정을 뒤로 미루면서 객체의 행위를 고려하기 위해서는 객체를 독립된 단위가 아니라 협력이라는 문맥에서 생각해야합니다.**
- **훌륭한 객체지향 설계는 어떤 객체가 어떤 메시지를 전송할 수 있는가와 어떤 객체가 어떤 메시지를 이해할 수 있는가를 중심으로 객체 사이의 협력 관계를 구성하는 것입니다.**

### 책임-주도 설계 다시 살펴보기

- 시스템이 수행할 책임을 구현하기 위해 협력 관계를 시작할 적절한 객체를 찾아 시스템의 책임을 객체의 책임으로 할당합니다.
- 객체가 책임을 완수하기 위해 다른 객체의 도움이 필요하다고 판단되면 도움을 요청하기 위해 어떤 **메시지가 필요한지 결정**합니다.
- 메시지를 결정한 후에는 메시지를 수신하기에 **적절한 객체를 선택**합니다.
- **메시지가 수신자의 책임을 결정**합니다.

위의 협력 과정은 시스템의 책임이 완전하게 달성될 때까지 반복됩니다.

### What/Who 사이클

- 책임-주도 설계의 핵심인 **어떤 행위가 필요한지를 먼저 결정한 후에 행위를 수행할 객체를 결정하는 것**을 **What/Who 사이틀**이라고 합니다.
- 객체의 행위를 결정하는 것은 객체 자체의 속성이 아닌 행위에 속합니다.
- 협력이라는 문맥에서 객체의 책임을 결정하는 것은 메시지입니다. 이러한 메시지를 먼저 결정함으로써 객체의 인터페이스를 발견할 수 있습니다.
- 즉, **책임-주도 설계 방법에서는 What/Who 사이클에 따라 협력에 참여할 객체를 결정하기 전에 협력에 필요한 메시지를 먼저 결정합니다.**

### 묻지말고 시켜라

- 메시지를 먼저 결정하고 객체가 메시지를 따르게 하는 설계방식은 **묻지 말고 시켜라(Tell, Don't Ask) 스타일** 혹은 **데메테르 법칙(Law of Demeter)**이라고 합니다.
- 이러한 설계 방식은 객체가 아닌 메시지에 초점을 맞춤으로 객체지향의 장점을 살립니다.
- 결과적으로 **묻지 말고 시켜라 스타일은 객체를 자율적으로 만들고 캡슐화를 보장하며 결합도를 낮게 유지시켜 주기 때문에 설계를 유연하게 만듭니다.**
- 묻지 말고 시켜라는 메시지가 어떻게 보다는 무엇을에 초점을 맞추고 이는 객체 인터페이스의 크기를 줄입니다. 결과적으로 결합도가 낮아져 설계가 유연해지고 의도 역시 명확해집니다.

### 메시지를 믿어라

- 메시지를 수신하는 객체가 메시지의 의미를 이해하고 의도대로 요청을 처리하는지에 의미가 있습니다.
- 메시지를 이해할 수만 있다면 다양한 타입의 객체로 협력 대상을 자유롭게 교체할 수 있기 때문에 설계가 좀 더 유연해집니다.
- **메시지를 믿는다면 자율적인 책임은 저절로 따라옵니다.**

<br/>

## 5.4 객체 인터페이스

### 인터페이스

일반적으로 인터페이스란 어떤 두 사물이 마주치는 경계 지점에서 서로 상호작용할 수 있게 이어주는 방법이나 장치를 의미합니다.

- 개발자는 미리 약속된 애플리케이션 프로그래밍 인터페이스를 통해 다른 사람이 작성한 코드와 상호작용합니다.
- 일반적인 인터페이스는 다음의 세가지 특징을 가집니다.
  - 인터페이스의 사용법을 익히기만 하면 내부 구조나 동작 방식을 몰라도 쉽게 대상을 조작하거나 의사를 전달할 수 있습니다.
  - 인터페이스 자체는 변경하지 않고 단순히 내부 구성이나 작동방식을 변경하는 것은 인터페이스 사용자에게 어떤 영향도 미치지 않습니다.
  - 대상이 변경되더라도 동일한 인터페이스를 제공하기만 하면 아무런 문제 없이 상호작용할 수 있습니다.

### 메시지가 인터페이스를 결정한다

- 객체의 인터페이스는 객체가 수신할 수 있는 메시지의 목록으로 구성되며 객체가 어떤 메시지를 수신할 수 있는지가 객체가 제공하는 인터페이스의 모양을 빚습니다.

### 공용 인터페이스

인터페이스는 외부에서 접근 가능한 **공개된 인터페이스(공용 인터페이스)** 와 내부에서만 접근할 수 있는 **감춰진 인터페이스**로 구분됩니다.

- 모든 인터페이스는 메시지 전송으로 접근할 수 있습니다.
- 객체가 협력에 참여하기 위해 수행하는 메시지가 객체의 공용 인터페이스의 모양을 암시합니다.

### 책임, 메시지, 그리고 인터페이스

앞의 내용을 요약하면 다음과 같습니다.

- 협력에 참여하는 객체의 책임이 자율적이어야합니다.
- 한 객체가 다른 객체에게 요청을 전송할 때는 **메시지**를 사용합니다.
  - 객체의 인터페이스는 수신 가능한 메시지의 목록입니다.
  - 메서드는 메시지를 수신했을 때 책임을 수행하는 의미를 가집니다.
  - 메시지와 메서드의 구분은 객체를 외부와 내부라는 분리된 영역으로 구분하는 동시에 동시에 다형성을 통해 다양한 타입의 객체를 수용할 수 있는 유연성을 부과합니다.
- 객체가 책임을 수행하기 위해 외부로부터 메시지를 받기 위한 통로는 **인터페이스**입니다.

<br/>

## 5.5 인터페이스와 구현의 분리

### 객체 관점에서 생각하는 방법

객체지향적인 사고 방식을 이해하기 위해서는 다음의 세가지 원칙이 중요합니다.

- 좀 더 추상적인 인터페이스, 추상화를 통해 객체의 자율성을 높입니다.
- 최소 인터페이스, 외부에서 사용할 필요가 없는 인터페이스는 노출을 줄입니다.
- 인터페이스와 구현 간에 차이가 있습니다.

### 구현

- 객체지향에서 내부 구조와 작동 방식을 가리키는 고유 용어는 **구현(implementation)** 입니다.
- 객체는 상태를 가지며 이를 표현하는 방법은 구현에 속합니다.
- 객체는 행동을 가지며, 행동은 메시지를 수신햇을 때 처리하는 방법(메서드)이므로 객체의 구현 부분에 포함됩니다.
- **객체의 외부와 내부를 분리하라는 것은 결국 객체의 공용 인터페이스와 구현을 명확히 분리하라는 이야기입니다.**

### 인터페이스와 구현의 분리 원칙

**인터페이스와 구현의 분리(separation of interface and implementation) 원칙** : 객체를 설계할 때 객체 외부에 노출되는 인터페이스와 객체의 내부에 숨겨지는 구현을 명확하게 분리해서 고려해야합니다.

- 인터페이스와 구현을 분리하지않으면, 변경에 의한 파급효과가 심할 것입니다.
- 객체가 가져야 할 상태와 메서드 구현인 객체 내부와 공용 인터페이스인 객체 외부는 분리해야합니다.
- 이러한 원칙은 변경을 관리하기 위해서입니다.
- 이 원칙을 수행하기 위한 객체 설계 방식은 **캡슐화**입니다.

### 캡슐화

**캡슐화**란 객체의 자율성을 보존하기 위해 구현을 외부로부터 감추는 것입니다. 이를 **정보 은닉(information hiding)**이라고 부릅니다.

객체지향의 세계에서 캡슐화는 두 가지 관점에서 사용됩니다.

- 상태와 행위의 캡슐화
- 사적인 비밀의 캡슐화

#### 상태와 행위의 캡슐화

- 객체는 상태와 행동을 하나의 단위로 묶는 자율적인 실체이며 이 관점의 캡슐화입니다.
- 객체는 상태와 행위를 묶고 외부에서 반드시 접근하는 행위만 골라 공용 인터페이스를 통해 노출합니다.
- 프로그래밍 관점에서 상태는 주로 데이터로 구현되고 행동은 프로세스로 구현됩니다.

#### 사적인 비밀의 캡슐화

- 캡슐화를 통해 변경이 자주 일어나는 부분을 인터페이스 뒤로 숨길 수 있습니다.
- **객체의 공용 인터페이스는 외부에서 전송 가능한 메시지의 집합**입니다. 공용 인터페이스를 경계로 최대한의 자율성을 보장받습니다.
- 외부의 객체는 공용 인터페이스에만 의존해야하며 구현 세부 사항에 대해서는 직접적인 의존을 하면 안됩니다.
- 객체의 외부와 내부를 명확하게 구분하면 설계가 단순하고 유연하고 변경하기 쉬워질 것입니다.

<br/>

## 5.6 책임의 자율성이 협력의 품질을 결정합니다.

**첫째, 자율적인 책임은 협력을 단순하게 만듭니다.**

- 자율적인 책임은 세부적인 사항들을 무시하고 의도를 드러내는 표현으로 협력을 단순하게 만듭니다.

**둘째, 자율적인 책임은 외부와 내부를 명확하게 분리합니다.**

- 객체가 몰라도 되는 부분은 객체 내부로 캡슐화하되므로 인터페이스과 구현이 분리됩니다.

**셋째, 책임이 자율적일 경우 책임을 수행하는 내부적인 방법을 변경하더라도 외부에 영향을 미치지않습니다.**

- 변경의 파급효화각 객체 내부로 캡슐화되기 때문에 두 객체 간의 결합도가 낮아집니다.

**넷째, 자율적인 책임은 협력의 대상을 다양하게 선택할 수 있는 유연성을 제공합니다.**

- 책임이 자율적일 수록 설계가 유연해지고 재사용성이 높아집니다.

**다섯째, 객체가 수행하는 책임들이 자율적일수록 객체의 역할을 이해하기 쉬워집니다.**
