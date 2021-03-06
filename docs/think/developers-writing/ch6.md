---
sidebar_position: 6
---

# 6장. 수주를 돕는 SI 제안서 쓰기

## 1. 개발자가 알아야 할 제안서 작성 원식

### 개발자와 제안 PM의 차이

- 개발자라고 코드만 작성하지 않습니다.
- 제안서에서 개발자는 주로 기술 부문을 쓰며, 책임져야 합니다.
- 개발자가 기술 부문에서 쓰기 어려운 것은 목적, 목표, 전략, 방안, 기대효과 같은 것입니다.
- 개발자가 제안서에서 쓰기 어려운 것은 이렇게 전략적 제안에 관한 것입니다.

### 시스템 구성도의 본질은 그림이 아니다

- 많은 제안서는 (AS-IS)를 분석해서 시스템 구성도(TO-BE)를 구상해 그림을 그리고 제안서에 넣습니다.
- 그리고 뻔한 `시스템의 성능, 안정성, 확장성을 위해 다음과 같이 시스템을 구성함` 말을 붙입니다.
- 이는 PM이 원하는 답이 아닙니다.

### 첫째, 제안요청서 분석

- 첫째는 제안 요청서를 제대로 분석하는 것입니다.
- 제안 PM은 거의 모든 요구를 제안요청서를 기반으로 하는 것입니다. 제안요청서는 고객이 제안을 요청하는 문서입니다.
- 제안요청서에는 모든 문제와 답이 들어 있습니다.
- 개발자가 제안요청서에서 힌트를 잘 찾아내기만 하면 기술 부문을 더 전략적으로 쓸 수 있습니다.

### 둘째, 논리적 완결성

- 둘째는 항목을 논리적으로 완결하는 것입니다.
- 제안서는 기승전결이 있는 소설이 아닙니다.
- 대부분의 경우, 관련이 있거나 관심이 있는 부분만 봅니다.
- ex) 시스템 구성도 항목을 작성한다면 시스템 구성에 관한 고객의 요구, 고려사항, 구성 전략, 구성 목표, 구성 방안, 구성 특장점, 기대 효과가 들어갑니다.

<br/>

## 2. 고객의 문제 인식과 제안사의 문제 해결 능력

### 문제 인식과 문제 해결 능력

- 제안서의 시작은 문제가 아니라 고객의 문제 인식입니다.
- 문제 해결에 드는 비용보다 문제 해결로 얻는 효과가 낮으면, 즉 비용 대비 효과가 낮으면 문제를 그냥 놔둡니다.
- 고객의 문제 인식 정도가 제안서에 영향을 주는 것처럼, 제안사의 문제 해결 능력도 제안서에 영향을 끼칩니다.

|||제안사의 문제 해결 능력||
|-|-|-|-|
|||탁월함|부족함|
|고객의 문제인식|중대함|(1) 경쟁사와 비교하여 제안|(2) 일단 동감하고 다른 방안 제시|
||사소함|(3) 고객이 문제를 중대하게 인식하게 만듦|(4) 경쟁사의 전략을 확인하여 대처|

### (1) 경쟁사와 비교하여 제안하라

- 고객이 문제를 중대하게 생각하고 제안사가 그 문제를 해결할 능력이 탁월하면 경쟁사와 세부 기능이나 스펙을 비교해서 제안해야합니다.
- 제안사가 가진 솔루션이 혁신적이고 안정적인 점도 강조해야합니다.

### (2) 일단 동감하고 다른 방안를 제시하라

- 문제를 해결할 솔루션을 가진 경재사는 자신의 솔루션이 가장 좋은 방안이라 주장해야 합니다.
- 대안 등을 사용해야 합니다.

### (3) 고객이 문제를 중대하게 인식하게 만들어라

- 고객이 중요하게 생각하지 않는다면, 중대하게 인식하도록 만들어야 합니다.

### (4) 경쟁사의 전략을 확인해서 대처하라

- 고객이 문제를 사소하게 보고, 제안사도 솔루션이 없으면 일반적으로 넘어갑니다.
- 그러나 경쟁사가 문제를 들고 나온다면, 관련해서 할 말은 있어야합니다.

<br/>

## 3. 고객의 요구사항은 변할 수밖에 없다

### 개발은 고객 요구 실현

- 개발은 고객의 요구사항을 실현하는 것입니다.
- 그런데 요구사항이 모호한 경우가 많습니다. 따라서 이를 잘 대비해야 합니다.

### 요구사항을 분석하지 말고 제시하라

- **고객은 자기가 원하는 제품이 뭔지 모릅니다.**
- 개발자는 고객의 요구사항을 받아서 분석이 아닌, 요구사항을 제시해서 고객이 선택하게 만들어야 합니다.

### 변화하는 요구사항에 대비하라

- 요구사항은 반드시 변합니다.
- 투 트랙으로 진행하는 것이 좋습니다.
  - 첫번째는 기본적이고 일반적인 수준으로 요구를 정의해야 합니다.
  - 두번째는 기능별로 세부 활동에 대한 정밀한 요구를 정의해야합니다.
- 기능의 개발이 끝나면 즉시 고객에게 테스트를 요청하고 검수를 받습니다.

<br/>

## 4. 고객의 총 만족도를 높이자

### 요구라고 다 같은 요구가 아니다

- 개발자가 고객의 요구를 충족하지 못하면 고객의 불만이 커집니다.
- 요구사항은 개발자 관점과 고객 관점이 다릅니다.

### 카노 모델로 본 요구의 세 가지 종류

![카노 모델](https://user-images.githubusercontent.com/42582516/177781984-b3249436-606e-43c5-a723-10a93ee0d7b6.png)

- 같은 요구 충족이라도 시간이 지나면서 고객의 만족도는 달라집니다.
- 개발자는 기본적으로 기본 기능 요구는 모두 수용을 해야합니다. 다만, 기능의 성능 요구는 한계를 정해야 합니다.