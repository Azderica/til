---
sidebar_position: 9
---

# 9. 도메인 모델과 BOUNDED CONTEXT

## 도메인 모델과 경계

- 처음 도메인 모델을 만들 때 빠지기 쉬운 함정이 도메인을 완벽하게 표현하는 단일 모델을 만드는 시도를 하는 것입니다.
  - 한 개의 모델로 여러 하위 도메인을 모두 표현하려고 시도하게 되면 모든 하위 도메인에 맞지 않는 모델을 만듭니다.
- 논리적으로 같은 존재처럼 보이지만 하위 도메인에 따라 다른 용어를 사용하는 경우도 있습니다.
- 하위 도메인마다 사용하는 용어가 다르기 때문에 올바른 도메인 모델을 개발하려면 하위 도메인마다 모델을 만들어야합니다.
- 모델은 특정한 컨텍스트(문맥)하에서 완전한 의미를 갖습니다. 이때의 경계를 갖는 컨텍스트를 DDD에서는 BOUNDED CONTEXT 라고 부릅니다.

<br/>

## BOUNDED CONTEXT

- BOUNDED CONTEXT는 모델의 경계를 결정하며 한 개의 BOUNDED CONTEXT는 논리적으로 한 개의 모델을 갖습니다.
- BOUNDED CONTEXT는 용어를 기준으로 구분합니다.
- BOUNDED CONTEXT는 실제로 사용자에게 기능을 제공하는 물리적 시스템으로 도메인 모델은 이 BOUNDED CONTEXT 안에서 도메인을 구현합니다.
- 이상적으로 하위 도메인과 BOUNDED CONTEXT가 일대일 관계를 가지면 좋겠지만 현실은 그렇지 않을 때가 많습니다.
- 여러 하위 도메인을 하나의 BOUNDED CONTEXT에서 개발할 대 주의할 점은 하위 도메인 의 모델이 뒤섞이지 하도록 하는 것입니다.
- BOUNDED CONTEXT는 도메인 모델을 구분하는 경계가 되기 때문에 BOUNDED CONTEXT는 구현하는 하위 도메인에 알맞은 모델을 포함합니다.

<br/>

## BOUNDED CONTEXT의 구현

- BOUNDED CONTEXT는 도메인 모델뿐만 아니라, 도메인 기능을 사용자에게 제공하는 필요한 표현 영역, 응용 서비스, 인프라 영역 등을 모두 포함합니다.

![BOUNDED CONTEXT](https://user-images.githubusercontent.com/42582516/159478300-47648192-ea1c-46d2-9635-a954e8b1fa9b.png)

- BOUNDED CONTEXT는 반드시 도메인 주도로 개발할 필요는 없습니다.

![BOUNDED CONTEXT는 도메인에 알맞는 아키텍처를 사용합니다.](https://user-images.githubusercontent.com/42582516/159478979-68ad9157-0a92-4f51-b218-1d615c471009.png)

- 서비스-DAO 사용하면 도메인 기능이 서비스에 흩어지게 되지만 도메인 기능 자체가 단순하면 서비스-DAO로 구성된 CRUD 방식을 사용해도 코드를 유지보수하는데 문제가 되지 않습니다.

![BOUNDED CONTEXT에 CQRS를 적용한 예](https://user-images.githubusercontent.com/42582516/159479376-500e3456-298e-4b53-82d4-af3e9b8c48cb.png)

- 각 BOUNDED CONTEXT는 서로 다른 구현 기술을 사용할 수도 있습니다.
- BOUNDED CONTEXT가 반드시 사용자에게 보여지는 UI를 가져야하는 것은 아닙니다.

<br/>

## BOUNDED CONTEXT간 통합

- 때로는 BOUNDED CONTEXT간 통합이 발생하는 경우가 있습니다.

![BOUNDED CONTEXT간 통합 필요성](https://user-images.githubusercontent.com/42582516/159481370-4d50619f-0609-45f0-9846-9a4508659a2f.png)

> ex. 사용자가 제품 상세 페이지를 볼 때, 보고 있는 상품과 유사한 상품 목록을 하단에 보여줍니다.

- 도메인 서비스를 구현한 클래스는 인프라스트럭처 영역에 위치합니다.
- REST API를 호출하는 것은 두 BOUNDED CONTEXT를 직접 통합하는 방법입니다.
- 어떤 도메인 관점에서 모델을 사용하느냐에 따라 두 BOUNDED CONTEXT를 직접 통합하는 방법입니다.

> 마이크로서비스와 BOUNDED CONTEXT

- 마이크로서비스의 특징은 BOUNDED CONTEXT와 잘 어울립니다.
- 각 BOUNDED CONTEXT는 모델의 경계를 형성하는데, BOUNDED CONTEXT를 마이크로서비스로 구현하면 자연스럽게 컨텍스트별로 모델이 분리됩니다.
- 별도 프로세스로 개발한 BOUNDED CONTEXT는 독립적으로 배포하고 모니터링하고 확장하게 되는데 이 또한 마이크로서비스의 특징입니다.

<br/>

## BOUNDED CONTEXT간 관계

<br/>

## 컨텍스트 맵
