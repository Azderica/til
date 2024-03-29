---
sidebar_position: 7
---

# 7. 프로젝트 전에

- 프로젝트를 시작할 때 요구사항을 결정할 필요가 있습니다.

## Item 36. 요구사항의 구렁텅이

- 요구사항이 지면에 있는 경우보다, 보통은 가정과 오해 등 속에 깊이 묻혀져 있습니다.

> Tip 51. 요구사항을 수집하지 말고 채굴하라

### 요구사항 채굴하기

요구사항은 어떤 것이 성취되어야 한다는 진술입니다. 이에 대한 좋은 예시는 다음과 같습니다.

- 직원 기록은 지명된 사람들만 볼 수 있습니다.
- 실린더헤드 온도는 임계값을 넘으면 안 되며, 이는 엔진마다 다르다
- 에디터는 편집하는 파일의 종류에 따라 별도로 선택된 키워드를 강조 표시합니다.

그러나 대부분의 요구사항은 이렇게 분명하게 주지 않으므로 분석은 복잡합니다.

> Tip 52. 사용자처럼 생각하기 위해 사용자와 함께 일하라

### 요구사항 문서화

- 유스케이스는 시스템의 특정한 사용을 설명합니다.
- 유스케이스를 보는 하나의 관점은 목적 지향성을 장조하는 것입니다.

```plain
유스 케이스 5. 물건을 구매한다.

A.특징적인 정보
- 맥락 안에서의 목표 : 구매자는 우리회사에 직접 구매 요청을 보내며 물건이 도착하고 청구서를 받아볼 것을 예상합니다.
- 범위: 회사
- 수준: 요약
- 선행조건: 우리는 구매자의 정보(주소, 이름 등)을 안다
- 성공적인 종료 조건: 구매자는 몰건을 받고 우리는 물건 값을 받습니다.
- 실패로 간주할 종료 조건: 우리가 제품을 보내지 않았다, 구매자가 돈을 보내지 않았다
- 주행위자: 구매자
- 발동 조건: 구매 요청이 들어옵니다.

B. 주된 성공 시나리오
...
```

#### 유스 케이스 다이어그램

작업 흐름(workflow)는 UML 활동 다이어그램으로 갈무리합니다.

![Use-case Diagram](https://user-images.githubusercontent.com/42582516/140606720-978c251f-8492-4c41-9bb0-13a1ae17daac.png)

### 지나치게 자세한 명세

- 요구사항 문서를 만들 때 생기는 큰 위험은 지나치게 자세히 서술하는 것입니다.
- 좋은 요구사항 문서는 추상적이며, 요구사항에 관한 한 비즈니스에 필요한 사항을 정확히 반영하는 가장 간단한 진술문이 중요합니다.
- 요구사항은 아키텍처가 아니며, 요구사항은 설게가 아니며, 사용자 인터페이스도 아닙니다. 요구사항은 필요입니다.

### 더 멀리보기

> Tip 53. 구체적인 것보다 추상적인 것이 더 오래갑니다.

- 대표적인 예시로 시스템은 DATE의 추상화를 적극적으로 사용합니다.

### 딱 하나만 더

- 많은 프로젝트 들이 범위(scope)의 증가 때문에 실패한다고 알려져 있습니다.
- 문서상으로 여러 가지 메트릭에 대한 설명이 있습니다.
  - 버그 보고와 수정, 결함의 밀도, 응집, 결합, 기능 점수, 코드 라인 수 등
- 많은 프로젝트가 요구사항을 적극적으로 추적하지는 않습니다.
- 요구사항 증가 관리의 핵심은, 새 기능이 일정에 미칠 영향을 프로젝트 후원자에게 인식시키는 것입니다.

### 용어사전 유지하기

- 프로젝트 용어사전(glossary)를 만들고 유지하라.
  - 모든 용어와 어휘를 모아 놓은 단일한 장소여야 합니다.
- 사용자와 개발자가 동일한 것을 다른 이름으로 가르키는 프로젝트가 성공하기는 매우 힙듭니다.

> Tip 54. 프로젝트 용어사전을 사용하라

### 말을 끄집어내라

- 요구사항을 하이퍼텍스트 문서로 표현함으로써 우리는 다양한 청중의 필요를 더 잘 충족시킬 수 있습니다.
- 전형적인 요구사항 분석인 두꺼운 바인더는 웹 기반 배포를 통해 방지할 수 있으며, 이는 많은 사람들이 읽습니다.

> Q. 만들고 있는 소프트웨어를 직접 사용할 수 있는가? 스스로 소프트웨어를 사용하지 못하면서 요구사항에 대해 어떤 감을 갖는가?

> Q. 현재 해결해야할 컴퓨터와 상관없는 문제를 고르고, 컴퓨터와 상관없이 해결하기 위한 요구사항을 만들어 보라

<br/>

## Item 37. 불가능한 퍼즐 풀기

- 프로젝트 진행 중에 정말 어려운 문제가 발생할 수도 있는데 과연 이가 어려운 이슈일지 다시 한번 생각해봐야 합니다.
- 어떤 제약 조건은 **절대적**이지만, 다른 것들은 단순히 **지례 짐작**한 것들에 불과합니다.
- 많은 소프트웨어 문제들이 이러한 속임수에 있을 수도 있습니다.

### 자유의 정도

- '생각의 틀을 벗어나라'에서 '틀'이 제약과 조건들의 경계선을 의미하면, 해야하는 일은 그 틀을 파악하는 것입니다.
  - 그틀은 생각보다 꽤 넓을 것입니다.

> Tip 55. 생각의 틀을 벗어나지 말고, 틀을 찾아라

- 풀리지 않는 문제를 만나면 생각해 볼 수 있는 모든 가능한 해결 경로를 눈앞에 나열합니다.
  - 그 후 목록을 하나씩 점검하면서 왜 이 경로가 안되는지 설명해보면서 확신과 증명의 과정을 가집니다.
- 제약들을 범주별로 나누고 우선순위를 매깁니다.

### 분명히 더 쉬운 방법이 있을 거야

- 어떤 경우에는 문제가 생각보다 훨씬 어렵다는 것을 발견하는 때도 있습니다.
- 아마 푸는 방법을 잘못 선택했다는 느낌이 들 것이며, 더 쉽게 문제를 풀 수 있는 방법이 있을 수도 있습니다.
- '불가능'한 문제 때문에 일정이 늦어지거나, 시스템을 동작하게 만드는 일 자체를 포기하고 있을 수도 있습니다.

다음의 질문을 사용합니다.

- 더 쉬운 방법이 존재하는지
- 진짜 문제를 풀려고 노력하는지, 중요하지 않는 기술에 정신이 팔려있는지
- 왜 이것이 문제인지
- 문제를 이렇게 풀기 어렵게 만드는 것이 무엇인지
- 반드시 이 방법으로 해야하는지
- 반드시 해야 하는 일이긴 하는지

이러한 질문들에 대한 답을 찾으려고 노력함으로써 깨달음을 얻는 경우가 많습니다. 더 나아가 요구사항을 새롭게 해석하니 문제 전체가 사라지는 경우도 많습니다.

<br/>

## Item 38. 준비가 되어야만

> 가끔은 망설이는 자가 재난을 모면한다.

- 개발자도 어떤 일을 뛰어나게 수행하는 사람입니다.
- 마음속에 어떤 의심이 있다면 느낌을 따라야 할 때도 있습니다.

> Tip 56. 준비가 되었을 때 시작하라.

- 경험과 지혜를 바탕으로 느낌을 가져야합니다.
- 의심은 좀 더 단단한 것, 대응책을 생각할 수 있는 무엇으로 구체화될 것입니다.

### 좋은 판단이냐 늑장부림이냐?

- 새로운 프로젝트를 시작하는 일은 좋습니다.
- 이러한 상황에서 효과적인 방법은 프로토타이핑을 시작하는 것입니다.
  - 어려울 것 같은 부분을 고른 다음, 일종의 개념 입증용 코드를 작성하빈다.
- 프로토타이핑을 통해 지루함을 느끼면 진짜 개발을 진행합니다.
- 프로토타이핑이 진행하면서 갑자기 기본적인 몇몇 전제가 틀렸다는 것을 깨닫는 순간, 올바른 방향을 알게 되고, 프로토타입을 버리고 정식 프로젝트를 시작합니다.

<br/>

## Item 39. 명세의 함정

- **프로세스 명세화**란 어떤 요구사항을 가져와 프로그래머가 자기 기술로 작업을 시작할 수 있는 시점까지 정리하는 과정입니다.
- 명세는 사용자의 필요를 명문화한 것이며 최종 시스템이 그 요구사항과 일치할 것이라는 암묵적인 계약이기도 합니다.
- 명세의 작성은 굉장히 무거운 책임이 따릅니다.
- 명세에서 하기 쉬운 실수는 아래와 같습니다.
  - 첫째, 어떤 명세서가 어떤 시스템이나 그 시스템에 대한 요구사항의 모든 세부사항과 미묘한 차이점을 잡을 수 있다고 믿는 것은 순진한 생각입니다.
  - 둘째, 언어 자체의 표현 능력에도 문제가 있습니다.
  - 마지막으로, 구속복 효과가 있습니다. (코딩하는 사람에게 해석의 여지를 남기지 않습니다.)

> Tip 57. 어떤 일들은 설명하기보다 실제로 하는 것이 쉽습니다.

- 실용주의 프로그래머는 요구사항의 수집, 설계, 구현을 훌륭한 시스템을 전달한다는 동일한 과정의 서로 다른측면으로 봐야합니다.
- 명세와 구현은 단지 동일한 과정, 요구사항을 포착해서 명문화하려는 노력의 다른 측면입니다.
- 물론 명세서가 필요한 경우도 많지만 너무 자세하게 작성하는 것은 그 이득이 감소합니다.
- 명세의 순환에 빠지지 말고, 코딩을 시작하는 것도 좋은 방법입니다.

<br/>

## Item 40. 동그라미와 화살표

> Tip 58. 형식적 방법의 노예가 되지 마라

형식적 방법에는 몇가지 심각한 단점들이 있습니다.

- 대부분의 형식적 방법은 다이어그램과 거기에 추가된 설명의 조합을 이용해서 요구사항을 포착합니다. (즉, 설계자가 해석을 해줘야합니다.)
- 형식적인 방법들은 전문화를 권장하는 것처럼 보입니다.
- 런타임에도 애플리케이션의 성격을 변화시키는 일이 가능하도록 메타데이터를 이용해서 적응가능성이 높고 동적인 시스템을 작성해야합니다.

### 방법론이 제 값을 하는가?

- 어떤 방법론은 이점이 있습니다.
- 다만, 새로운 도구와 방법론을 채택하는 비용을 절대 과소평가하면 안됩니다.
- 새로운 기법을 사용하는 최초의 프로젝트를 학습 경험으로 여길 준비를 해야합니다.

### 우리가 형식적 방법을 사용해야 할까?

- 형식적인 방법은 필요합니다. 다만 도구 상자의 또 다른 도구일 뿐이라는 사실을 알아야 합니다.
- 절대 방법론의 노예가 되면 안됩니다.
- 어떤 방법의 거짓된 권위에도 넘어가면 안됩니다.
  - 어떤 사람이 다이어그램과 유스케이스를 들고와도 이는 요구사항과 설계에 대한 그 사람의 해석입니다.

> Tip 59. 비싼 도구가 더 좋은 설계를 낳지는 않습니다.

- 형식적 방법들은 분명 개발 과정에서 자기 자리가 있습니다.
