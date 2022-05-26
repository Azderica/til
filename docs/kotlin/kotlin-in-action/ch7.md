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

- **위임 프로퍼티(delegated property)** 를 사용하면 값을 뒷받침하는 필드에 단순히 저장하는 것보다 더 복잡한 방식으로 작동하는 프로퍼티를 쉽게 구현할 수 있습니다.
- 이러한 특성의 기반에는 **위임**이 있으며, 위임은 객체가 직접 작업을수행하지 않고 다른 도우미 객체가 그 작업을 처리하게 맡기는 디자인 패턴입니다.
- 작업을 처리하는 도무이 객체를 **위임 객체(delegate)** 라 부릅니다.

### 7.5.1. 위임 프로퍼티 소개

- 일반적인 위임의 문법은 다음과 같습니다.

```kt
class Foo {
    var p: Type by Delegate()
}
```

```kt
class Foo {
    private val delegate = Delegate()
    var p: Type
    set(value: Type) = delegate.setValue(..., value)
    get() = delegate.getValue(...)
}
```

- 프로퍼티 위임 관례를 따르는 Delegate 클래스는 `getValue`와 `setValue`를 제공해야합니다.

```kt
class Delegate {
    operator fun getValue(...) {...}
    operator fun setValue(..., value: Type) { ... }
}
class Foo {
    var p: Type by Delegate()   // "by" 키워드는 프로퍼티와 위임 객체를 연결합니다.
}
val foo = Foo()
val oldValue = foo.p    // delegate.getValue() 호출
foo.p = newValue        // delegate.setValue(..., newValue)
```

### 7.5.2. 위임 프로퍼티 사용: by lazy()를 사용한 프로퍼티 초기화 지연

- **지연 초기화(lazy initialization)** 는 객체의 일부분을 초기화하지 않고 남겨뒀다가 실제로 그 부분의 값이 필요할 경우 초기화할 때 흔히 쓰이는 패턴입니다.
- 초기화 과정에 자원을 많이 사용하거나 객체를 사용할 때마다 꼭 초기화하지 않아도 되는프로퍼티에 대해 지연 초기화 패턴을 사용할 수 있습니다.

```kt
class Email { /*...*/ }
fun loadEmails(person: Person) : List<Email> {
    println("${person.name}의 이메일을 가져옴")
    return listOf(/*...*/)
}

// 지연 초기화 예제.
class Person (val name: String) {
    private var _emails: List<Email>? = null
    val emails: List<Email>
        get() {
            if(_emails == null) { _emails loadEmails(this)}
            return _emails!!    // 저장해 둔 데이터가 있으면 데이터 반환
        }
}

val p = Person("Alice")
p.emails    // Load emails for Alice
```

- 위의 예제는 **뒷받침하는 프로퍼티(backing property)** 라는 기법을 사용합니다.
  - `_emails`라는 프로퍼티는 값을 저장하고, 다른 프로퍼티인 `emails`는 `_emails`라는 프로퍼티에 대한 읽기 연산을 저장합니다.
- 코틀린은 이를 개선했으며, `lazy`라는 표준 라이브러리 함수가 있습니다.

```kt
class Person(val name: String) {
    val emails by lazy { loadEmails(this) }
}
```

### 7.5.3. 위임 프로퍼티 구현

- 코틀린의 위임 방식에 대한 예제는 다음과 같습니다.

```kt
class ObservableProperty (
    var propValue: Int, val changeSupport: PropertyChangeSupport
) {
    operator fun getValue(p: Person, prop: KProperty<*>): Int = propValue
    operator fun setValue(p: Person, prop: KProperty<*>, newValue: Int) {
        val oldValue = propValue
        propValue = newValue
        changeSupport.firePropertyChange(prop.name, oldValue, newValue)
    }
}

class Person (
    val name: String, age: Int, salary: Int
) : PropertyChangeAware() {
    var age: Int by ObservableProperty(age, changeSupport)
    var salary: Int by ObservableProperty(salary, changeSupport)
}
```

- `by` 오른쪽에 오는 객체를 **위임 객체(delegate)** 라고 부릅니다.
- 코틀린은 위임 객체를 감춰진 프로퍼티에 저장하고, 주 객체의 프로퍼티를 읽거나 쓸 때마다 위임 객체의 `getValue` 와 `setValue` 를 호출해줍니다.

```kt
// Delegates.observable을 사용해 프로퍼티 변경 통지 구현
class Person (
    val name: String, age: Int, salary: Int
) : PropertyChangeAware() {
    private val observer = {
        prop: KProperty<*>, oldValue: Int, newValue: Int ->
        changeSupport.firePropertyChange(prop.name, oldValue, newValue)
    }
    var age: Int by Delegates.observable(age, observer)
    var salary: Int by Delegates.observable(salary, observer)
}
```

- 위임 메커니즘을 모든 타입에 두루두루 사용할 수 있습니다.

### 7.5.4. 위임 프로퍼티 컴파일 규칙

- 컴파일러는 모든 프로퍼티 접근자 안은 `getValue`와 `setValue` 호출을 생성해줍니다.
  - `val x = c.prop` 는 `val x = <delegate>.getValue(c, <property>)`
  - `c.prop = x` 는 `<delegate>.setValue(c, <property>, x)`

### 7.5.5. 프로퍼티 값을 맵에 저장

- 자신의 프로퍼티를 동적으로 정의할 수 있는 객체를 만들 때 위임 프로퍼티를 활용하는 경우가 있으며 그런 객체를 **확장 가능한 객체(expando object)** 라고 합니다.

```kt
// 값을 맵에 저장하는 위임 프로퍼티
class Person {
    private val _attributes = hashMapOf<String, String>()
    fun setAttribute(attrName: String, value: String) {
        _attributes[attrName] = value
    }
    val name: String by _attributes
}
```

- 표준 라이브러리가 `Map`과 `MutableMap` 인터페이스에 대해 `getValue`와 `setValue` 확장 함수를 제공합니다.

### 7.5.6. 프레임워크에서 위임 프로퍼티 활용

```kt
// 위임 프로퍼티를 사용해 데이터베이스 칼럼 접근
object Users: IdTable() {
    val name = varchar("name", length = 50).index()
    val age = integer("age")
}
class User(id: EntityID) : Entity(id) {
    var name: String by Users.name
    var age: Int by Users.age
}
```

- `User`의 상위 클래스인 `Entity` 클래스는 데이터베이스 칼럼을 엔티티의 속성(attribute) 값으로 연결해주는 매핑이 있습니다.

<br/>

## 7.6 요약

- 코틀린에서는 정해진 이름의 함수를 오버로딩암으로써 표준 수학 연산자를 오버로딩할 수 있습니다.
- 비교 연산자는 `equals`와 `compareTo` 메서드로 변환됩니다.
- 클래스에 `get, set, contains`라는 함수를 정의하면 그 클래스의 인스턴스에 대해 `[]`와 `in` 연산을 사용할 수 있고, 그 객체를 코틀린 컬렉션 객 체와 비슷하게 다룰 수 있습니다.
- 미리 정해진 관례를 따라 `rangeTo, iterator` ㅎ마수를 정의하면 범위를 만들거나 컬렉션과 배열의 원소를 이터레이션할 수 있습니다.
- 구조 분해 선언을 통해 한 객체의 상태를 분해해서 여러 변수에 대입할 수 있습니다.
- 위임 프로퍼티를 통해 프로퍼티 값을 저장하거나 초기화하거나 읽거나 변경할 때 사용하는 로직을 재활용할 수 있습니다. 위임 프로퍼티는 프레임워크를 만들 때 아주 유용합니다.
- 표준 라이브러리 함수인 `lazy`를 통해 지연 초기화 프로퍼티를 쉽게 구현할 수 있습니다.
- `Delegates.observable` 함수를 사용하면 프로퍼티 변경을 관찰할 수 있는 관찰자를 쉽게 추가할 수 있습니다.
- 맵을 위임 객체로 사용하는 위임 프로퍼티를 통해 다양한 속성을 제공하는 객체를 유연하게 다룰 수 있습니다.