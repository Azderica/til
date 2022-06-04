---
sidebar_position: 9
---

# 9. 제네릭스

## 9.1 제네릭 타입 파라미터

- 제네릭스를 사용하면 **타입 파리미터(type parameter)** 를 받는 타입을 정의할 수 있습니다.
- 제네릭 타입의 인스턴스를 만들려면 타입 파라미터를 구체적인 **타입 인자(type argument)** 로 치환해야 합니다.

### 9.1.1 제네릭 함수와 프로퍼티

- 컬렉션을 다루는 라이브러리 함수는 대부분 제네릭 함수입니다.

```kt
fun <T> List<T>.slice(indicees: IntRange): List<T>
// <T> : 타입 파라미터 선언
// <T>. , <T> : 타입 파라미터가 수신 객체와 반환 타입에 씁니다.
```

- 클래스나 인터페이스 안에 정의된 메서드, 확장 함수 또는 최상위 함수에서 타입 파라미터를 선언할 수 있습니다.

> 확장 프로퍼티만 제네릭하게 만들 수 있습니다.
> - 일반 프로퍼티는 타입 파라미터를 가질 수 없습니다.
> - `val <T> x: T = TODO()` // Error: type parameter of a property must be used in its receiver type

### 9.1.2 제네릭 클래스 선언

- 자바와 마찬가지로 코틀린에서도 타입 파라미터를 넣은 `<>` 를 클래스(인터페이스) 이름 뒤에 붙이면 클래스(인터페이스)를 제네릭하게 만들 수 있습니다.
- 제네릭 클래스를 확장하는 클래스를 정의하려면 기반 타입의 제네릭 파라미터에 대해 타입 인자를 지정해야 합니다.

```kt
interface Comparable<T> {
    fun compareTo(other: T): Int
}
class String: Comparable<String> {
    override fun compareTo(other: String): Int = /*...*/
}
```

- 해당 건은 자바와 비슷합니다.

### 9.1.3 타입 파라미터 제약

- **타입 파라미터 제약(type parameter constraint)** 은 클래스나 함수에 사용할 수 있는 타입 인자를 제한하는 기능입니다.
- 어떤 타입을 제네릭 타입의 타입 파라미터에 대한 상한(upper bound)으로 지정하면 그 제네릭 타입을 인스턴스화할 때 사용하는 타입 인자는 반드시 그 상한 타입이거나 그 상한 타입의 하위 타입이어야 합니다.

```kt
fun <T : Number> List<T>.sum(): T
// T : 타입 파라미터
// Number : 상한 
```

```kt
// 타입 파라미터를 제약하는 함수 선언
fun <T: Comparable<T>> max(first: T, secont: T): T {
    return if(first > second) first else second
}
println(max("kotlin", 42))  // Error: Type parameter bound for T is not satisfied
```

- 데이터에 접근하는 연산과 데이터를 변환하는 연산을 T 타입의 값에서 수행할 수 있습니다.

### 9.1.4 타입 파라미터를 널이 될 수 없는 타입으로 한정

- 제네릭 클래스나 함수를 정의하고 그 타입을 인스턴스화할 때는 널이 될 수 있는 타입을 포함하는 어떤 타입으로 타입 인자를 지정해도 타입 파라미터를 치환할 수 있습니다.
- 아무런 상한이 없는 경우, `Any?` 를 상한으로 정한 파라미터와 같습니다.

```kt
// null을 허용하는 경우
class Processor<T> {}

// null을 허용하지 않는 경우
class Processor<T : Any> {}
```

- 널이 될 수 없는 타입을 통해 상한을 정할 수 있습니다.

<br/>

## 9.2 실행 시 제네릭스의 동작: 소거된 타입 파라미터와 실체화된 타입 파라미터

- JVM의 제네릭스는 보통 **타입 소거(type erasure)** 를 사용해서 구현됩니다.
  - 이는 실행 시점에 제네릭 클래스의 인스턴스에 타입 인자 정보가 없다는 뜻입니다.
- `inline` 을 통해 이러한 제약을 우회할 수 있습니다.

### 9.2.1 실행 시점의 제네릭: 타입 검사와 캐스트

- 자바와 마찬가지로 코틀린 제네릭 타입 인자 정보는 런타임에 지워집니다.
- 컴파일러가 타입 인자를 알고 올바른 타입의 값만 각 리스트에 넣도록 보장해주므로 큰 상관이 없습니다.
- 타입인자를 따로 저장하지 않기 때문에 실행 시점에 타입 인자를 검사할 수 없습니다.

```kt
if (value is List<String>)  { ... }
// Error: Cannot check for instnce of erased type
```

- 타입 정보의 크기를 줄여 전반적인 메모리 사용량이 줄어든다는 제네릭 타입 소거 나름의 장점이 있습니다.
- 값이 집합이나 맵이 아니라 리스트라는 사실을 확인하는 방법은 **스타 프로젝션(star projection)** 을 사용하면 됩니다.

```kt
// 제네릭 타입으로 타입 캐스팅
fun printSum(c: Collection<*>) {
    val intList = c as? List<Int> ?: throw IllegalArgumentException("List is expected")
    println(intList.sum())
}
printSum(listOf(1, 2, 3))   // 6
printSum(setOf(1, 2, 3))    // IllegalArgumentException: List is expected
printSum(listOf("a", "b", "c")) // ClassCastException: String cannot be cast to Number
```

- 코틀린 컴파일러는 컴파일 시점에 타입 정보가 주어진 경우에는 `is` 검사를 수행하게 허용할 수 있을 정도록 똑똑합니다.

```kt
fun printSum(c: Collection<T>) {
    if(c is List<Int>) {    // 올바른 검사
        println(c.sum())
    }
}
```

- 코틀린은 제네릭 함수의 본문에서 그 함수의 타입 인자를 가리킬 수 있는 특별한 기능을 제공하지 않습니다.

### 9.2.2 실체화된 타입 파라미터를 사용한 함수 선언

### 9.2.3 실체화된 타입 파라미터로 클래스 참조 대신

### 9.2.4 실체화된 타입 파라미터의 제약


<br/>

## 9.3 변성: 제네릭과 하위 타입

### 9.3.1 변성이 있는 이유: 인자를 함수에 넘기기

### 9.3.2 클래스, 타입, 하위 타입

### 9.3.3 공변성: 하위 타입 관계를 유지

### 9.3.4 반공변성: 뒤집힌 하위 타입 관계

### 9.3.5 사용 지점 변성: 타입이 언급되는 지점에서 변성 지정

### 9.3.6 스타 프로젝션: 타입 인자 대신 * 사용


<br/>

## 9.4 요약
