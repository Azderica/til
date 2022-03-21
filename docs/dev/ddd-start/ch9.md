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

<br/>

## BOUNDED CONTEXT간 통합

<br/>

## BOUNDED CONTEXT간 관계

<br/>

## 컨텍스트 맵
