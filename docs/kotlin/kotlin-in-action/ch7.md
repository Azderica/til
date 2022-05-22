---
sidebar_position: 7
---

# 7. 연산자 오버로딩과 기타 관례

- 언어 기능을 타입에 의존하는 자바와 달리 코틀린은 관례에 의존합니다.

## 7.1 산술 연산자 오버로딩

### 7.1.1. 이항 산술 연산 오버로딩

```kt
data dlass Point(val x: Int, val y: Int) {
    operator fun plus(other: Point): Point {
        return Point(x + other.x, y + other.y)
    }
}
val p1 = Point(10, 20)
val p2 = Point(30, 40)
println(p1 + p2)    // Point(x = 40, y = 60)
```

- 오버로딩 가능한 이항 산술 연산자는 다음과 같습니다.

|식|함수 이름|
|-----|-----|
|a * b|times|
|a / b|div|
|a % b|mod(1.1 부터 rem)|
|a + b|plus|
|a - b|minus|

> 코틀린 연산자를 자바에서 호출하기는 쉽습니다.

```kt
operator fun Point.times(scale: Double): Point {
    return Point((x * scale).toInt(), (y * scale).toInt())
}
val p = Point(10, 20)
println(p * 1.5)    // Point(x = 15, y = 30)
```

- 코틀린 연산자는 자동으로 교환 법칙(commutativity)를 지원하지는 않습니다.
- 연산자 함수의 반환 타입이 꼭 두 피연산자 중 하나와 일치해야하지만은 않습니다.

```kt
operatior fun Char.times(count: Int): String {
    return toString().repeat(count)
}
println('a' * 3)    // aaa
```

### 7.1.2. 복합 대입 연산자 오버로딩

### 7.1.3. 단항 연산자 오버로딩

<br/>

## 7.2 비교 연산자 오버로딩

### 7.2.1. 동등성 연산자: equals

### 7.2.2. 순서 연산자: compareTo

<br/>

## 7.3 컬렉션과 범위에 대해 쓸 수 있는 관례

### 7.3.1. 인덱스로 원소에 접근: get과 set

### 7.3.2. in 관례

### 7.3.3. rangeTo 관례

### 7.3.4. for 루프를 위한 iterator 관례

<br/>

## 7.4 구조 분해 선언과 component 함수

### 7.4.1. 구조 분해 선언과 루프

<br/>

## 7.5 프로퍼티 접근자 로직 재활용: 위임 프로퍼티

### 7.5.1. 위임 프로퍼티 소개

### 7.5.2. 위임 프로퍼티 사용: by lazy()를 사용한 프로퍼티 초기화 지연

### 7.5.3. 위임 프로퍼티 구현

### 7.5.4. 위임 프로퍼티 컴파일 규칙

### 7.5.5. 프로퍼티 값을 맵에 저장

### 7.5.6. 프레임워크에서 위임 프로퍼티 활용

<br/>

## 7.6 요약