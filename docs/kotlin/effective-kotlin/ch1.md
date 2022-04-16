---
sidebar_position: 1
---

# 1. 안정성

- 코틀린의 가장 큰 장점은 안정성(safety)입니다.
- 이를 잘 하기위해서는 개발자가 뒷받침을 해주어야 합니다.

> '즉. 오류가 덜 발생하는 코드를 만드는 것'에 대해 중점적으로 이야기합니다.

<br/>

## Item 1. 가변성을 제한하라

- 코틀린은 모듈로 프로그램을 설계하며 모듈은 클래스, 객체, 함수, 타입 별칭, 톱레벨 포로퍼티 등 다양한 요소로 구성됩니다.
- 이러한 요소 중 일부는 상태(state)를 가집니다.
- 그러나 이러한 상태는 양날의 검입니다.
  - 시간의 변화에 따라서 변화는 요소를 표현하기는 좋으나, 상태를 적절하게 관리하는 것이 어렵습니다.
- 대규모 팀일수록 변경 가능한 부분에 의한 일관성(consistency) 문제, 복잡성(complexity) 증가와 관련된 문제에 익숙합니다.
- 실제 프로젝트는 동기화를 잘 구현해야하며 이는 굉장히 어려운 부분입니다.
  - 따라서 변할 수 있는 지점을 줄이는 것이 핵심입니다.

### 코틀린에서 가변성 제한하기

### 다른 지점의 변경 가능 지점

### 변경 가능 지점 노출하지 말기

### 정리

<br/>

## Item 2. 변수의 스코프를 최소화하라

<br/>

## Item 3. 최대한 플랫폼 타입을 사용하지 말라

<br/>

## Item 4. inferred 타입으로 리턴하지 말라

<br/>

## Item 5. 예외를 활용해 코드에 제한을 걸어라

<br/>

## Item 6. 사용자 정의 오류보다는 표준 오류를 사용하라

<br/>

## Item 7. 결과 부족이 발생할 경우 null과 Failure을 사용하라

<br/>

## Item 8. 적절하게 null을 처리하라

<br/>

## Item 9. use를 사용하여 리소스를닫아라

<br/>

## Item 10. 단위 테스트를 만들어라