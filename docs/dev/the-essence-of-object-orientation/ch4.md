---
sidebar_position: 4
---

# 4. 역할, 책임, 협력

> 우리 모두를 합친 것보다 더 현명한 사람은 없다

- 각 개인이 처해 있는 정황 또는 문맥(context)가 인간의 행동 방식을 결정합니다.
- 이때 인간의 행동을 결정하는 문맥은 **타인과의 협력**입니다.
- 객체의 세계에서도 협력이라는 문맥이 객체의 행동 방식을 결정합니다.
- **훌륭한 객체지향 설계란 객체가 조화를 이루며 적극적으로 상호작용하는 협력적인 객체를 창조하는 것입니다.**

## 4.1 협력

### 요청하고 응답하여 협력하는 사람들

- **협력**은 한 사람이 다른 사람에게 도움을 요청할 때 시작됩니다.
- 요청을 받은 사람은 일을 처리한 후, 요청한 사람에게 필요한 지식이나 서비스를 제공하는 것으로 요청에 **응답**합니다.
- 일반적으로 협력은 다수의 연쇄적인 요청과 응답의 흐름으로 구성됩니다.

### 누가 파이를 훔쳤는지

- 객체지향에서는 객체들은 동일한 목적을 달성하기 위해 협력합니다.

### 재판 속의 협력

- 협력은 수많은 요청과 응답으로 이루어져 있습니다.
- 요청을 받아들일 수 있는 이유는 그 요청에 대해 적절한 방식으로 응답하는 데 필요한 지식과 행동 방식을 가지고 있기 때문입니다.

<br/>

## 4.2 책임

- 객체지향에서는 어떤 객체가 어떤 요청에 대해 대답을 할 수 있거나, 적절한 행동을 할 의무가 있는 경우 객체가 **책임**을 가진다고 말합니다.
- 어떤 대상에 대한 요청은 그 대상이 요청을 처리할 책임이 있습니다.
- 책임은 객체지향 설계의 가장 중요한 재료입니다.
- 객체지향 개발에서 중요한 능력 중 하나는 **책임을 능숙하게 객체에 할당하는 것**입니다.

### 책임의 분류

- 객체의 책임은 **객체가 무엇을 알고 있는지**와 **무엇을 할 수 있는지**로 구성됩니다.
- 하는 것(doing)
  - 객체를 생성하거나 계산을 하는 등의 스스로 하는 것
  - 다른 객체의 행동을 시작시키는 것
  - 다른 객체의 활동을 제어하고 조절하는 것
- 아는 것(knowing)
  - 개인적인 정보에 관해 아는 것
  - 관련된 객체에 관해 아는 것
  - 자신이 유도하거나 계산할 수 있는 것에 관해 아는 것
- 책임은 객체지향 설계의 품질을 결정하는 중요한 요소이며, 적절한 객체에게 적절한 책임을 할당하는 것이 중요합니다.
- 책임은 객체의 **공용 인터페이스(public interface)** 를 구성합니다.

### 책임과 메시지

- 한 객체가 다른 객체에게 전송한 요청은 그 요청을 수신한 객체의 책임이 수행되게 합니다. 이처럼 객체가 다른 객체에게 주어진 책임을 수행하도록 요청을 보내는 것을 **메시지 전송(message send)** 라고 합니다.
- 두 객체간의 협력은 메시지를 통해 이뤄집니다.
- 다만 책임과 메시지의 수준은 같지않습니다.
  - 책임은 객체가 협력에 참여하기 위해 수행해야 하는 행위를 상위 수준에서 개략적으로 서술한 것입니다.
  - 이를 메시지로 변경할 때는 일반적으로 하나의 책임이 여러 메시지로 분할되는 것이 일반적입니다.
- **객체지향 설계는 협력에 참여하기 위해 어떤 객체가 어떤 책임을 수행해야 하고 어떤 객체로부터 메시지를 수신할 것인지를 결정하는 것으로부터 시작됩니다.**

<br/>

## 4.3 역할

### 책임의 집합이 의미하는 것

- 어떤 객체가 수행하는 책임의 집합은 객체가 협력 안에서 수행하는 역할을 암시합니다.
- 역할이 재사용 가능하고 유연한 객체지향 설계를 낳는 매우 종요한 구성요소입니다.

### 판사와 증인

(앨리스 내용, 생략)

### 역할이 답이다

- 각각의 협력이 있는데 이를 별도로 관리할 수는 없습니다. 이를 위해 **역할(role)** 을 사용해 각각의 협력을 포괄하는 하나의 협력으로 추상화할 수 있습니다.
- 동일한 역할을 수행할 수 있다는 것은 해당 객체들이 협력 내에서 동일한 책임의 집합을 수행할 수 있다는 것을 의미합니다. 이를 통해 여러 장점을 많이 얻을 수 있습니다.
- 역할은 객체지향 설계의 **단순성(simplicity), 유연성(flexibility), 재사용성(reusability)** 을 뒷받침하는 핵심 개념입니다.

### 협력의 추상화

- 하나의 협력 안에 여러 종류의 객체가 참여할 수 있게 함으로 협력을 **추상화**할 수 있습니다.
- 역할을 이용하면 협력을 추상화함으로 단순화할 수 있습니다.

### 대체 가능성

- 역할은 협력 안에서 구체적인 객체로 대체될 수 있는 추상적인 협력자입니다. 그렇기에 본질적으로 역할은 다른 객체에 의해 대체 가능함을 의미합니다.
- 객체가 역할을 대체하기 위해서는 행동이 호환돼야 합니다.
- 객체가 역할에 주어진 책임 이외에 다른 책임을 수행할 수도 있다는 사실에 주목합니다.
- 객체는 역할이 암시하는 책임보다 더 많은 책임을 가질 수 있습니다. 따라서 대부분은 객체의 타입과 역할 사이에는 일반화/특수화 관계가 성립합니다.
- **역할의 대체 가능성은 행위 호환성을 의미하고, 행위 호환성은 동일한 책임의 수행을 의미합니다.**

<br/>

## 4.4 객체의 모양을 결정하는 협력

### 흔한 오류

객체 지향에 대해서 많은 오해가 있습니다.

- (1) 시스템에 필요한 데이터를 저장하기 위해 객체가 필요하다.
  - 객체가 상태의 일부로 데이터를 포함하는 것은 사실이나 단지 객체가 행위를 수행하기 위한 필요 재료입니다.
  - **객체의 존재 이유는 행위를 수행하며 협력에 참여하기 위해서 입니다.**
- (2) 객체지향이 클래스와 클래스 간의 관계를 표현하는 시스템의 정적인 측면에 중점을 둡니다.
  - 중요한 것은 정적인 클래스가 아니라 **협력에 참여하는 동적인 객체**입니다.
  - **객체지향의 핵심은 클래스 구현이 아닌 객체가 협력 안에서 어떤 책임과 역할을 수행할 것인지를 결정하는 것**
- 각 객체를 독립적으로 봐서는 안됩니다.

### 협력을 따라 흐르는 객체의 책임

- 올바른 객체를 설계하기 위해서는 먼저 견고하고 깔끔한 협력을 설계해야합니다.
- 협력을 설계한다는 것은 설계에 참여하는 객체들이 주고 받을 요청과 응답의 흐름을 결정한다는 것입니다.
- **클래스와 데이터는 협력과 책임의 집합이 결정된 후에야 무대 위에 등장할 수 있습니다.**
- 좋은 객체지향 시스템을 만드는 방법으로는 **객체를 충분히 협력적으로 만든 후에 협력이라는 문맥 안에서 객체를 충분히 자율적으로 만드는 것**입니다.

<br/>

## 4.5 객체지향 설계 기법

역할, 책임, 협력의 관점에서 애플리케이션을 설계하는 유용한 세 가지 기법이 있습니다.

- 책임-주도 설계(Responsibility-Driven Design)
  - 협력에 필요한 책임들을 식별하고 적합한 객체에게 책임을 할당하는 방식으로 애플리케이션을 설계합니다.
- 디자인 패턴(Design Pattern)
  - 전문가들이 반복적으로 사용하는 해결방법을 정의해 놓은 설계 템플릿 모음입니다.
- 테스트-주도 개발(Test-Driven Development)
  - 테스트를 먼저 작성하고 테스트를 통과하는 구체적인 코드를 추가하면서 애플리케이션을 완성해가는 방식을 따릅니다.

### 책임-주도 설계

- 객체지향 시스템은 역할과 책임을 수행하는 자율적인 객체들의 공동체입니다.
- 객체지향 설계란 애플리케이션의 기능을 구현하기 위한 협력 관계를 고안하고 협력에 필요한 역할과 책임을 식별한 후 이를 수행할 수 있는 적절한 객체를 식별해 나가는 과정입니다.
- 현재 가장 유명한 방법은 객체지향 설계 방법은 **책임-주도 설계 방법**입니다. 이는 객체의 책임을 중심으로 시스템을 구축하는 설계 방법입니다.
- **시스템의 기능은 더 작은 규모의 책임으로 분할되고 각 책임은 책임을 수행할 적절한 객체에게 할당됩니다.**

이러한 단계를 요약하면 다음과 같습니다.

- 시스템이 사용자에게 제공해야 하는 기능인 시스템 책임을 파악합니다.
- 시스템 책임을 더 작은 책임으로 분할합니다.
- 분할된 책임을 수행할 수 있는 적절한 객체 또는 역할을 찾아 책임을 할당합니다.
- 객체가 책임을 수행하는 중에 다른 객체의 도움이 필요한 경우 이를 책임질 적절한 객체 또는 역할을 찾습니다.
- 해당 객체 또는 역할에게 책임을 할당함으로서 두 객체가 협력하게 됩니다.

### 디자인 패턴

책임-주도 설계는 객체의 역할, 책임, 협력을 고안하기 위한 방법과 절차라면 **디자인 패턴은 책임-주도 설계의 결과를 표현합니다.**

- 관련해서는 [GoF 디자인패턴]을 참고하면 좋습니다.
- [주요 디자인 패턴 정리 내용](https://azderica.github.io/til/docs/dev/object-orientation-and-design-patterns/ch3)

### 테스트-주도 개발

- 애자일 방법론의 한 종류인 XP의 기본 프랙티스로 소개되며 주목받기 시작한 설계 기법입니다.
- 테스트-주도 개발을 통해 **작동하는 깔끔한 코드**를 얻을 수 있습니다.
- **테스트-주도 개발은 책임-주도 설계의 기본 개념을 따릅니다.** 다만, 이에 대한 설계 경험이 없는 경우는 어려울 수 있습니다.
- 테스트-주도 개발은 객체지향에 대한 깊이 있는 지식이 필요합니다.
- 테스트-주도 개발은 책임-주도 설계의 기본 개념과 다양한 원칙과 프랙티스, 패턴을 종합적으로 이해하고 좋은 설계에 대한 감각과 경험을 길러야만이 적용할 수 있는 설계기법입니다.
