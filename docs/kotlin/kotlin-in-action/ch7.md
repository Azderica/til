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

- `+=`, `-=` 등의 연산자는 **복합 대입(compound assignment) 연산자**라고 부릅니다.

```kt
val numbers = ArrayList<Int>()
numbers += 42
println(numbers[0])
```

- 복합 대입 연산자 함수도 비슷하게 `minusAssign, timesAssign` 등의 이름을 사용합니다.

```kt
operator fun<T> MutableCollection<T>.plusAssign(element: T) { this.add(element) }
```

- `a += b`는 `a = a.plus(b)` 또는 `a.plusAssign(b)` 로 번역할 수 있습니다.

### 7.1.3. 단항 연산자 오버로딩

- 코틀린은 단항 연산자도 제공합니다.

```kt
operator fun Point.unaryMinus(): Point { return Point(-x, -y) }
val p = Point(10, 20)
println(-p)     // Point(x=-10, y=-20)
```

- 오버로딩할 수 있는 단항 산술 연산자는 다음과 같습니다.

|식|함수 이름|
|-|-|
|+a|unaryPlus|
|-a|unaryMinus|
|!a|not|
|++a, a++|inc|
|--a, a--|dec|

<br/>

## 7.2 비교 연산자 오버로딩

- 코틀린은 자바와 달리 모든 객체에 대해 비교 연산을 수행할 수 있습니다.

### 7.2.1. 동등성 연산자: equals

- 코틀린은 `==` 연산자를 `equals` 메서드 호출로 컴파일합니다.
- `a == b` 는 `a?.equals(b) ?: (b == null)` 을 의미합니다.
- 식별자 비교(identity equals, `===`) 를 사용해 파라미터의 수신 객체와 같은 지 비교하며, 자바의 `==` 연산자와 동일합니다.

### 7.2.2. 순서 연산자: compareTo

- 코틀린도 자바와 동일한 `Compareable` 인터페이스를 지원합니다.
- `a >= b` 는 `a.compareTo(b) >= 0` 을 의미합니다.
- 다음과 같은 라이브러리도 사용가능합니다.

```kt
class Person (
    val firstName: String, val lastName: String
): Comparable<Person> {
    override fun compareTo(other: Person): Int {
        return compareValuesBy(this, other, Person::lastName, Person::firstName)
    }
}
```

<br/>

## 7.3 컬렉션과 범위에 대해 쓸 수 있는 관례

### 7.3.1. 인덱스로 원소에 접근: get과 set

- 코틀린에서 맵의 원사에 접근할 때나 자바에서 배열 원소에 접근할 때, `[]`를 사용합니다.
- `x[a, b]` 는 `x.get(a, b)` 로 호출됩니다.
- `x[a, b] = c` 는 `x.set(a, b, c)` 로 호출됩니다. 

### 7.3.2. in 관례

- 컬렉션이 지원하는 다른 연산자는 `in` 이 있습니다.
- `a in c` 는 `c.contains(a)` 로 전달됩니다.

### 7.3.3. rangeTo 관례

- `start..end` 는 `start.rangeTo(end)` 를 지원합니다.
- `rangeTo` 함수는 범위를 반환합니다.

```kt
val n = 9
println(0..(n+1))   // 0..10
(0..n).forEach { print(it) }    // 0123456789
```

### 7.3.4. for 루프를 위한 iterator 관례

- 코틀린의 `for` 루프는 범위 검사와 똑같이 `in` 연산자를 사용하나 의미는 다르며 이때는 `list.iterator()` 를 호출합니다.

```kt
operator fun CharSequence.iterator(): CharIterator  // for (c in "abc")
```

<br/>

## 7.4 구조 분해 선언과 component 함수

- 코틀린의 특징 중 **구조 분해 선언(destructuring declaration)** 에 대해 이야기합니다.
- `val (a, b) = p` 는 `val a = p.component1(), val b = p.component2()` 와 같습니다.
- 다음과 같이 사용할 수 있습니다.

```kt
// 구조 분해 선언을 사용해 여러 값 반환
data class NameComponents(val name: String, val extension: String)

fun splitFilename(fullName: String): NameComponents {
    val (name, extension) = fullName.split('.', limit = 2)
    return NameComponents(name, extension)
}
val (name, ext) = splitFilename("example.kt")
println(name)   // example
println(ext)    // ext
```

### 7.4.1. 구조 분해 선언과 루프

- 확장 함수를 대표적으로 사용한 예제는 다음과 같습니다.

```kt
// 구조 분해 선언을 사용해 맵 이터레이션
fun printEntries (map: Map<String, String>) {
    for ((key, value) in map) {
        println("$key -> $value")
    }
}
val map = mapOf("Oracle" to "Java", "JetBrains" to "Kotlin")
printEntries(map)   // Oracle -> Java \n JetBrains -> Kotlin
```

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