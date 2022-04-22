---
sidebar_position: 4
---

# 4. 클래스, 객체, 인터페이스

## 4.1 클래스 계층 정의

- 코틀린 가시성/접근 변경자는 자바와 비슷하지만 아무것도 지정하지 않은 경우 기본 가시성은 다릅니다.
- `sealed`은 클래스 상속을 제한합니다.

### 4.1.1 코틀린 인터페이스

- 다음과 같은 예시가 있습니다.

```kt
interface Clickable {
  fun click()
}
```

```kt
class Button: Clickable {
  override fun click() = println("I was clicked")
}
```

- 코틀린에서는 override 변경자를 꼭 사용해야합니다.
- 디폴트 메서드도 사용할 수 있습니다.

```kt
interface Clickable {
  fun click()   // 일반 메서드 선언
  fun showoff() = println("I'm clickable!") // 디폴트 구현이 있는 메서드
}
```

```kt
interface Focusable {
  fun showOff() = println("I'm focusable!")
}
```

- 코틀린 컴파일러는 두 메서드를 아우르는 구현을 하위 클래스에 직접 구현하게 강제합니다.

```kt
class Button: Clickable, Focusable {
  override fun click() = println("I was clicked")
  override fun shoOff() {
    super<Clickable>.showOff()
    super<Focusable>.showOff()
  }
}
```

- 코틀린은 자바 6와 호환되게 설계되었습니다.

### 4.1.2 open, final, abstract 변경자: 기본적으로 final

### 4.1.3 가시성 변경자: 기본적으로 공개

### 4.1.4 내부 클래스와 중첩된 클래스: 기본적으로 중첩 클래스

### 4.1.5 봉인된 클래스: 클래스 계층 정의 시 계층 확장 제한

<br/>

## 4.2 뻔하지 않은 생성자와 프로퍼티를 갖는 클래스 선언

### 4.2.1 클래스 초기화: 주 생성자와 초기화 블록

### 4.2.2 뷰 생성자: 상위 클래스를 다른 방식으로 초기화

### 4.2.3 인터페이스에 선언된 프로퍼티 구현

### 4.2.4 게터와 세터에서 뒷받침하는 필드에 접근

### 4.2.5 접근자의 가시성 변경

<br/>

## 4.3 컴파일러가 생성한 메서드: 데이터 클래스와 클래스 위임

### 4.3.1 모든 클래스가 정의해야 하는 메서드

### 4.3.2 데이터 클래스: 모든 클래스가 정의해야 하는 메서드 자동 생성

### 4.3.3 클래스 위임: by 키워드 사용

<br/>

## 4.4 object 클래스: 클래스 선언과 인스턴스 생성

### 4.4.1 객체 선언: 싱글턴을 쉽게 만들기

### 4.4.2 동반 객체: 팩토리 메서드와 정적 멤버가 들어갈 장소

### 4.4.3 동반 객체를 일반 객체처럼 사용

### 4.4.4 객체 식: 무명 내부 클래스를 다른 방식으로 작성

<br/>

## 4.5 요약
