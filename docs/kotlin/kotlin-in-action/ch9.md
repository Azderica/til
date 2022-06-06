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

- 코틀린 제네릭 타입의 타입 인자 정보는 실행 시점에 지워집니다.
- 이러한 제약을 피할 수 있는 경우로 인라인 함수의 타입 파라미터는 실행 시점에 인라인 함수의 타입 인자를 알 수 있습니다.
- 인라인 함수로 만들고 타입 파라미터를 `reified`로 지정하면 `value`의 타입이 T의 인스턴스인지를 실행 시점에 검사할 수 있습니다.

```kt
inline fun <reified T> isA(value: Any) = value is T
println(isA<String>("abc")) // true
println(isA<String>(123))   // false
```

- 다음과 같이 실체화된 타입 파라미터를 사용할 수 있습니다.

```kt
val items = listOf("one", 2, "three")
println(items.filterIsInstance<String>) // [one, three]
```

> 인라인 함수에서만 실체화된 타입 인자를 쓸 수 있는 이유
> - 인라인 함수의 본문을 구현한 바이트 코드를 그 함수가 호출되는 모든 지점에 삽입합니다.
> - 자바 코드에서는 `reified` 타입 파라미터를 사용하는 `inline` 함수를 호출할 수 없습니다.

- 성능을 좋게 하려면 인라인 함수의 크기를 계속 관찰해야합니다.

### 9.2.3 실체화된 타입 파라미터로 클래스 참조 대신

- 표준 자바 API인 `ServiceLoader`를 사용해 서비스를 읽으려면 다음처럼 호출해야 합니다.

```kt
val serviceImpl = ServiceLoader.load(Service::class.java)
```

- 이를 구체화한 타입 파라미터를 사용하면 다음과 같습니다.

```kt
inline fun <reified T> loadService() {
    return ServiceLoader.load(T::class.java)
}
val serviceImple = loadService<Service>()
```

### 9.2.4 실체화된 타입 파라미터의 제약

- 다음의 경우, 실체화된 타입 파라미터를 사용할 수 있습니다.
  - 타입 검사와 캐스팅(`is, !is, as, as?`)
  - 코틀린 리플렉션 API(`::class`)
  - 코틀린 타입에 대응하는 `java.lang.Class` (`::class.java`)
  - 다른 함수를 호출할 때 타입 인자로 사용
- 그러나 다음과 같은 일은 할 수 없습니다.
  - 타입 파라미터 클래스의 인스턴스 생성
  - 타입 파라미터 클래스의 동반 객체 메서드 호출
  - 실체화한 타입 파라미터를요구하는 함수를 호출하면서 실체화하지 않는 타입 파라미터로 받은 타입을 타입 인자로 넘기기
  - 클래스, 프로퍼티, 인라인 함수가 아닌 함수의 타입 파라미터를 `reified`로 지정
- 실체화된 타입 파라미터를 인라인 함수에만 사용할 수 있으므로 실체화한 타입 파라미터를 사용하는 함수는 자신에게 전달되는 모든 람다와 함게 인라이닝
- `noinline` 변경자를 함수 타입 파라미터에 붙여서 인라이닝을 금지할 수 있습니다.

<br/>

## 9.3 변성: 제네릭과 하위 타입

- **변성(variance)** 개념은 `List<String>`와 `List<Any>` 와 같이 기저 타입이 같고 타입인자가 다른 여러 타입이 서로 어던 관계로 있는지 설명하는 개념입니다.

### 9.3.1 변성이 있는 이유: 인자를 함수에 넘기기

- `List<Any>`를 사용하는 함수에 `List<String>`을 넣으면 안전하지는 않습니다.
- 그러나 **원소의 추가나 변경이 없는 경우**에는 가능합니다.

### 9.3.2 클래스, 타입, 하위 타입

- 제네릭 클래스가 아닌 클래스에서는 클래스 이름을 바로 타입으로 쓸 수 있습니다.
- 제네릭 클래스에서는 올바른 타입을 얻으려면 제네릭 타입의 타입 파라미터를 구체적인 타입인자로 바꿔야합니다.
- 타입 사이의 관계를 논하기 위해서는 **하위 타입(subtype)** 의 개념을 잘알아야합니다.
  - Int는 Number의 하위 타입이지만 String의 하위 타입이 아닙니다.
  - 모든 타입은 자신의 하위 타입입니다.
- 상위 타입은 하위 타입의 반대입니다.

```kt
// 하위 타입 검사
fun test(i: Int) {
    val n: Number = i
    fun f(s: String) { /*...*/ }
    f(i)    // Int가 String의 하위 타입이 아니라서 컴파일되지 않습니다.
}
```

- 간단한 경우 하위 타입은 **하위 클래스(subclass)** 와 근본적으로 갑니다.
- 제네릭 타입을 인스턴스화할 때 타입 인자로 서로 다른 타입이 들어가면 인스턴스 타입 사이의 하위 타입 관계가 성립하지 않으면 그 제네릭 타입을 **무공변(invariant)** 라고 합니다.
  - 자바에서는 모든 클래스가 무공변입니다.
- A가 B의 하위 타입이면 `List<A>`는 `List<B>`의 하위 타입이며, 이런 클래스나 인터페이스를 **공변적(covariant)** 라고 말합니다.

### 9.3.3 공변성: 하위 타입 관계를 유지

- 코틀린에서 제네릭 클래스가 타입 파라미터에 대해 공변적임을 표시하려면 타입 파라미터 이름 앞에 `out`을 넣어야합니다.

```kt
interface Producer<out T> {
    fun produce() : T
}
```

- 클래스의 타입 파라미터를 공변적으로 만들면 함수 정의에 사용한 파라미터 타입과 타입 인자의 타입이 정확히 일치하지 않더라도 그 클래스의 인스턴스를 함수 인자나 반환 값으로 사용할 수 있습니다.

```kt
// 무공변 컬렉션 역할을 하는 클래스 사용
class Herd<out T : Animal> {    // T는 공변적
    ...
}
fun takeCareOfCats(cats: Herd<Cat>) {
    for (i in 0 until cats.size) {
        cats[i].cleanLitter()
    }
    feedAll(cats)   // 캐스팅 필요 없음.
}
```

- 정리하면 다음과 같습니다.
  - **공변성** : 하위 타입 관계가 유지
  - **사용 제한** : T를 아웃 위치에서만 사용할 수 있습니다.
- List는 T에 대해 공변적입니다.

```kt
interface List<out T> : Collection<T> {
    operator fun get(index: Int) : T
    fun subList(fromIndex: Int, toIndex: Int) : List<T>
    // ...
}
```

### 9.3.4 반공변성: 뒤집힌 하위 타입 관계

### 9.3.5 사용 지점 변성: 타입이 언급되는 지점에서 변성 지정

### 9.3.6 스타 프로젝션: 타입 인자 대신 * 사용


<br/>

## 9.4 요약
