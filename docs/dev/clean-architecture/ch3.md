---
sidebar_position: 3
---

# 3. 설계 원칙

## 7장. SRP: 단일 책임 원칙

- SRP는 헷갈리기 쉽습니다.
- **단일 모듈은 변경의 이유가 하나, 오직 하나뿐이어야 합니다.**
- 이를 다르게 말하면 **하나의 모듈은 하나의, 오직 하나의 사용자 또는 이해관계자에 대해서만 책임져야 합니다.**
- SRP의 최종적으로 정리는 다음과 같습니다.
  - **하나의 모듈은 하나의 오직 하나의 액터에 대해서만 책임져야 합니다.**
- '모듈'은 간단하게 이야기 하면 대부분은 소스 파일이고, 단순히 함수와 데이터 구조로 구성된 응집된 결합입니다.
- SRP를 잘 이해하는 방법 중 하나는 원칙을 위반하는 징후를 확인하는 것입니다.

### 징후 1: 우발적 중복

![우발적 중복](https://user-images.githubusercontent.com/42582516/143684221-bbf791af-3ed5-49fe-b3f1-05dfc08e9997.png)

- SRP를 위반하며, 세가지 메서드가 세명의 액터를 책임지는 문제가 있습니다.
- 이후 작업을 했을 때, 이러한 변경사항이 다른 문제를 만들게 됩니다.
  - 즉, CFO를 위해 수정을 했으나 변경을 희망하지 않는 COO가 변경될 수 있습니다.

### 징후 2: 병합

- 소스 파일에 다양하고 많은 메서드를 포함하면 병함이 자주 발생하리라고 짐작하기는 어려운 일은 아닙니다.
  - 특히 이들 메서드가 서로 다른 액터를 책임진다면 병합이 발생할 가능성은 확실히 더 높습니다.
- 병합은 항상 위험이 뒤따르게 됩니다.
- 이를 해결하는 방법은 **서로 다른 액터를 뒷받침하는 코드를 서로 분리하는 것**입니다.

### 해결책

- 이 문제의 해결책은 여러 방법이 있습니다.
- 가장 확실한 해결책은 데이터와 메서드를 분리하는 방식입니다.

![세 클래스는 서로의 존재를 알지 못합니다.](https://user-images.githubusercontent.com/42582516/143684752-05825fd9-f0cb-49f3-8e22-3e746c8dee8e.png)

- 다만 위 해결책은 세가지 클래스를 인스턴스화하고 추적해야 한다는 게 단점입니다.
- 이를 해결하기 위한 방법으로 **퍼사드(Facade)** 패턴이 있습니다.

![퍼사드 패턴](https://user-images.githubusercontent.com/42582516/143684916-15359a25-5151-4ae3-a559-b57f538a4c14.png)

- 가장 중요한 메서드를 기존 Employee에 넣고 덜 중요한 나머지 메서드들에 대한 퍼사드로 사용할 수도 있습니다.

![덜 중요한 메서드를 퍼사드 패턴](https://user-images.githubusercontent.com/42582516/143685025-b39911a6-f713-49cf-8986-a67110828f8b.png)

### 결론

- 단일 책임 원칙은 메서드와 클래스 수준의 원칙입니다.
- 컴포넌트 수준에서는 **공통 폐쇄 원칙(Common Closure Principle)** 이 됩니다.
- 아키텍처 수준에서는 **아키텍처 경계(Architectural Boundary)** 의 생성을 책임지는 변경의 축이 됩니다.

<br/>

## 8장. OCP : 개방-폐쇄 원칙

- OCP의 뜻은 **소프트웨어 개체(artifact)는 확장에는 열려 있어야하고, 변경에는 닫혀 있어야합니다.**
- 소프트웨어 아키텍처를 공부하는 가장 근본적인 이유이며, 확장성이 없다면 엄청난 수정이 필요합니다.

### 사고 실험

- 어떤 변경이 들어왔을 때 소프트웨어 아키텍처가 훌륭하다면 변경되는 코드의 양이 가능한 한 최소화가 될 것입니다.
- 서로 다른 목적으로 변경되는 요소를 적절하게 분리(단일 책임 원칙, SRP)하고 이들 요소 사이의 의존성을 체계화함으로써(의존성 역전 원칙, DIP) 변경량을 최소화할 수 있습니다.

먼저 단일 책임 원칙을 적용하면 데이터 흐름을 그림으로 나타낼 수 있습니다.

![SRP 적용](https://user-images.githubusercontent.com/42582516/143726735-27be2075-c248-474d-b249-0d594076920f.png)

- 위처럼 책임을 분리한 다음에는 클래스 단위로 분할하고, 컴포넌트 단위로 구분해야 합니다.

![클래스, 컴포넌트 단위로 구분](https://user-images.githubusercontent.com/42582516/143729628-dc034673-ee40-428a-9fd5-920f586e823c.png)

> > `<I>` : 인터페이스, `<DS>` : 데이터 구조

- 이를 한 후는 컴포넌트 관계를 그립니다.

![컴포넌트 관계](https://user-images.githubusercontent.com/42582516/143729699-dc54efc7-2700-4b31-84e4-a4be4a25bd36.png)

- 컴포넌트 관계는 단방향으로 이루어집니다.
- 위의 예시에서 볼 수 있듯이 추가 설명을 하면 다음과 같습니다.
  - `Presenter`에서 발견한 변경으로부터 `Controller`를 보호하고자 합니다.
  - `View`에서 발생한 변경으로부터 `Presenter`를 보호하고자합니다.
  - `Interactor`은 다른 `모든 것에서 발생한 변경`으로 보호하고자 합니다.
  - `Interactor`은 업무 규칙을 포함하기 때문에 가낭 높은 수준의 정책을 포함하는 특별한 규칙을 가지고 있습니다.
  - 위의 예시처럼 계층구조가 '수준(level)'이라는 개념을 바탕으로 어떻게 생성되는지 확인하는 것이 중요합니다.

위는 아키텍처 수준에서 OCP가 동작하는 방식입니다. 아키텍트는 기능이 어떻게, 왜, 언제 발생하는지에 따라서 기능을 분리하고, 분리한 기능을 컴포넌트의 계층구조로 조직화합니다. 컴포넌트 계층구조를 이와 같이 조직화 하면 저수준 컴포넌트에서 발생한 변경으로부터 고수준 컴포넌트를 보호할 수 있습니다.

### 방향성 제어

- 위의 예시에서 `FinancialDataGateway` 인터페이스는 `Generator`과 `DataMapper` 사이에 존재하는데 이는 **의존성을 역전**시키기 위해서 입니다.
  - 이러한 인터페이스가 없었다면 의존성이 `Interactor` 컴포넌트에서 Database 컴포넌트로 바로 향하게 됩니다.

### 정보 은닉

- `FinancialReportRequester` 인터페이스는 방향성 제어와는 다른 목적을 가집니다. 즉, `Interactor` 내부에 대해 너무 많이 알지 못하도록 막기 위해서 존재합니다.
  - 인터페이스가 없는 경우, `Controller`는 `FinancialEntities`에 대해 추이 종속성(transitive dependency)을 가지게 됩니다.
- 추아 종속성을 가지게 되면, 소프트웨어 엔티티는 '자신이 직접 사용하지 않는 요소에는절대로 의존해서는 안 된다'는 소프트웨어 원칙을 위반하게 됩니다.
- 이 원칙은 인터페이스 분리 원칙(ISP)와 공통 재사용 원칙(CRP)을 설명할 때 다시 한번 설명합니다.
- 즉, `Controller`에서 발생한 변경으로부터 `Interactor`를 보호하는 일의 우선순위가 가장 높지만, 반대로 `Interactor`에서 발생한 변경으로부터 `Controller`도 보호되기를 원합니다.

### 결론

- OCP는 시스템의 아키텍처를 떠받치는 원동력 중 하나입니다.
- OCP의 목표는 시스템을 확장하기 쉬운 동시에 변경으로 인해 시스템이 너무 많은 영향을 받지 않도록 하는데 있습니다.
- 이러한 목표를 달성하려면 시스템을 컴포넌트 단위로 분리하고, 저수준 컴포넌트에서 발생한 변경으로부터 고수준 컴포넌트를 보호할 수 있는 형태의 의존성 계층구조가 만들어지도록 해야 합니다.

<br/>

## 9장. LSP : 리스코프 치환 원칙

<br/>

## 10장. ISP : 인터페이스 분리 원칙

<br/>

## 11장 DIP : 의존성 역전 원칙