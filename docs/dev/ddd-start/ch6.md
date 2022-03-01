---
sidebar_position: 6
---

# 6. 응용 서비스와 표현 영역

## 표현 영역과 응용 영역

- 1~5장까지는 도메인과 구현에 대한 내용이였습니다.
  - 도메인 영역을 잘 구현하지 못하면 사용자 요구를 충족하는 소프트웨어를 만들지 못합니다.
- 도메인이 제 기능을 하려면 사용자와 도메인 영역을 연결해주는 매개체 역할이 필요합니다.

![표현 영역과 응용 영역의 필요](https://user-images.githubusercontent.com/42582516/156258113-ac06c254-b130-4a04-a7d9-5de43d7df771.png)

- 표현 영역은 사용자의 요청을 해석합니다.
  - ex. 웹 브라우저의 URL, 요청 파라미터, 쿠키, 헤더 등
- 응용 서비스의 메서드가 요구하는 파라미터와 표현 영역이 사용자로부터 전달받은 데이터는 형식이 일치하지 않기 때문에 표현 영역을 응용 서비스가 요구하는 형식으로 사용자 요청을 변환합니다.
- 사용자와의 상호작용은 표현 영역이 처리하기 때문에 응용 서비스는 표현 영역에 의존하지 않습니다.

<br/>

## 응용 서비스의 역할

- 응용 서비스는 사용자가 요청한 기능을 실행합니다.
  - 응용 서비스는 사용자의 요청을 처리하기 위해 리포지터리로부터 도메인 객체를 구하고, 도메인 객체를 사용합니다.
- 응용 서비스의 주요 역할은 도메인 객체를 사용해서 사용자의 요청을 처리하는 것이므로 사용자 영역 입장에서 보았을 때 파사드(facade) 역할을 합니다.
- 응용 서비스는 주로 도메인 객체 간의 흐름을 제어하기 때문에 다음과 같이 단순한 형태를 갖습니다.

```java
public Result doSomeFunc(SomeReq req) {
  SomeAgg agg = someAggRepository.findById(req.getId());
  checkNull(agg);
  agg.doFunc(req.getValue());
  return createSuccessResult(agg);
}
```

```java
public Result domSomeCreation(CreateSomeReq req) {
  checkValid(req);
  SomeAgg newAgg = createSome(req);
  someAggRepository.sav(newAgg);
  return createSuccessResult(newAgg);
}
```

- 응용 서비스의 주된 역할은 **도메인 객체 간의 실행 흐름을 제어하는 것과 트랜잭션 처리**입니다.

### 도메인 로직 넣지 않기

<br/>

## 응용 서비스의 구현

### 응용 서비스의 크기

### 응용 서비스의 인터페이스와 클래스

### 메서드 파라미터와 값 리턴

### 표현 영역에 의존하지 않기

### 트랜잭션 처리

### 도메인 이벤트 처리

<br/>

## 표현 검증

<br/>

## 값 검증

<br/>

## 권한 검사

<br/>

## 조회 전용 기능과 응용 서비스
