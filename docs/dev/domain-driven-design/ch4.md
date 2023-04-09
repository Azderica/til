---
sidebar_position: 4
---

# 4. 바운디드 컨텍스트 연동

- 바운디드 컨텍스트 패턴은 유비쿼터스 언어의 일관성을 유지할 뿐만이 아니라 모델링도 가능하게 합니다.
- 바운디드 컨텍스트 사이에는 접점이 존재하며 이를 **컨트랙트(contract)** 라고 합니다.

## 협력형 패턴 그룹

### 파트너십 패턴

- 연동의 조정은 양방향에서 합니다.
- 발생할 수 있는 연동의 문제를 해결하는 데 양 팀 모두 협력하며, 서로 방해하지 않습니다.
- 양 팀이 적용한 변경사항의 지속적인 통합이 필요합니다.

### 공유 커널 패턴

- 공유 모델은 모든 바운디드 컨텍스트에 걸쳐서 일관성을 유지합니다.

- 공유 범위
  - 겹치는 형태의 모델은 해당되는 컨텍스트의 수명주기도 서로 엮이게 합니다.
- 구현
  - 공유 커널은 소스코드의 모든 변경이 이를 사용하는 모든 바운디드 컨텍스트에 즉시 반영되도록 구현합니다.
  - 공유 커널은 여러 바운디드 컨텍스트에 속하기 때문에 변경은 지속적으로 통합돼야 합니다.
- 공유 커널을 사용해야 하는 경우
  - 공유 커널 패턴의 적용 결정하는 가장 중요한 기준은 중복 비용과 조율 비용의 비율입니다.
  - 통합 비용과 중복 비용의 차이는 모델의 변동성에 달려있습니다.
  - 공유 커널은 동일 팀에서 소유하고 구현한 바운디드 컨텍스트를 연동하는 경우에 잘 맞습니다.


<br/>

## 사용자-제공자 패턴 그룹

- 양팀이 서로 독립적으로 성공할 수 있습니다.
- 제공자는 업스트림이고 사용자는 다운스트림입니다.

### 순응주의자 패턴

- 다운스트림 팀이 업스트림 팀의 모델을 받아들이는 바운디드 컨텍스트의 관계를 순응주의자(conformist) 패턴이라고 부릅니다.

### 충돌 방지 계층 패턴

- 충돌 방지 계층(ACL: anticorruption layer) 패턴은 다음 사례와 같이 제공자의 모델을 따르는 것을 원치 않거나 순응에 필요한 노력이 가치가 없을 경우를 다룹니다.
  - 다운스트림 바운디드 컨텍스트가 핵심 하위 도메인을 포함할 경우
    - 핵심 하위 도메인은 각별한 주의가 필요합니다.
  - 업스트림 모델이 사용자의 요건에 비효율적이거나 불편할 경우
    - 바운디드 컨텍스트가 혼란에 순응하면 그 자체로 위험합니다.
  - 제공자가 컨트랙트를 자주 변경하는 경우
    - 사용자는 잦은 변경으로부터 모델을 보호하기를 원합니다.

### 오픈 호스트 서비스 패턴

- 제공자는 사용자를 보호하고 가능한 최고의 서비스를 제공하는 데 관심이 있습니다.
- 오픈 호스트 서비스(OHS: open-host service) 패턴은 충돌 방지 계층 패턴의 반대입니다.

<br/>

## 분리형 노선

- 협력하지 않는 케이스입니다.

### 커뮤니케이션 이슈

- 협업을 회피하는 이유는 조직의 규모와내부 정치 요인입니다.

### 일반 하위 도메인

- 여러 컨텍스트 간에 기능 중복이 없을 경우의 장점보다 솔루션을 연동했을 때 더해지는 복잡성이 더 큽니다.

### 모델의 차이

- 모델이 너무 달라서 순응주의자 관계가 불가능하고 충돌 방지 계층을 구현하는 것도 기능 중복보다 비용이 더 클 수 있습니다.

<br/>

## 컨텍스트 맵

- 컨텍스트 맵은 시스템의 바운디드 컨텍스트와의 연동을 시각적으로 표현합니다.
  - 거시적 설계 관점 : 컨텍스트 맵은 시스템의 구성요소와 구현하는 모델의 개요를 제공합니다.
  - 커뮤니케이션 패턴 : 컨텍스트 맵은 시스템의 구성요소 간의 커뮤니케이션 패턴을 묘사합니다.
  - 조직적 문제 : 컨텍스트 맵은 조직적 문제에 대한 통찰력 제공

### 유지보수

- 컨텍스트 맵은 프로젝트 초기부터 도입해서 새로운 바운디드 컨텍스트와 기존 요소에 대한 수정을 반영하는 것이 이상적입니다.

### 한계

- 컨텍스트 맵을 작성하는 것은 어려운 작업입니다.

<br/>

## 결론

- 컨텍스트가 연동하는 다양한 방법을 정의합니다.
  - 파트너십 : 애드혹 방식으로 연동
  - 공유 커널 : 두 개 이상의 바운디드 컨텍스트가 참여하는 모든 컨텍스트가 공유하는 제한적으로 겹치는 모델을 공유해서 연동
  - 순응주의자 : 사용자는 서비스 제공자의 모델에 순응
  - 충돌 방지 계층 : 사용자는 서비스 제공자의 모델을 사용자의 요건에 맞게 번역
  - 오픈 호스트 서비스 : 서비스 제공자는 사용자의 요건에 최적화된 모델인 공표된 언어를 구현
  - 분리형 노선 : 협력과 연동보다 특정 기능을 중복으로 두는 것이 더 저렴한 경우