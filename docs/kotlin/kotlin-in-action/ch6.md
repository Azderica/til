---
sidebar_position: 6
---

# 6. 코틀린 타입 시스템

- 코틀린은 `널이 될수 있는 타입(nullable type)`과 `읽기 전용 컬렉션`을 제공해줍니다.

## 6.1 널 가능성

- `널 가능성(nullability)`은 `NullPointerException` 오류를 필할 수 있게 돕기 위한 코틀린 타입 시스템의 특성입니다.
- 코틀린을 비롯한 최신 언어에서 null에 대한 접근 방법은 가능한 이 문제를 실행 시점에서 컴파일 시점으로 옮기는 것입니다.

### 6.1.1 널이 될 수 있는 타입

- 코틀린과 자바의 첫 번째이자 가장 중요한 차이는 코틀린 타입 시스템이 널이 될 수 있는 타입을 명시적으로 지원한다는 점입니다.

```java
int strLen(String s) { return s.length(); }
```

```kt
fun strLen(s: String) = s.length
strLen(null)  // error
```

- 널과 문자열을 인자로 받을 수 있게 하려면 타입 이름 뒤에 물음표(?)를 명시해야 합니다.
- 널이 될 수 있는 타입의 변수가 있다면 그에 대한 수행할 수 있는 연산이 제한됩니다.

```kt
// 예시
val x: String? = null
val y: String = x
// Error: Type mismatch: inferred type is String? but Strign was expected
```

```kt
// if 검사를 통해서는 null 값을 다룰 수 있습니다.
fun strLenSafe(s: String?): Int = if(s != null) x.length else 0
```

### 6.1.2 타입의 의미

- null이 들어있는 경우에는 사용할 수 있는 연산이 많지 않습니다.
- 이러한 의미로 자바의 타입 시스템은 널을 제대로 다루지 못합니다.

> NullPointerException 오류를 다루는 다른 방법

> - 자바에도 `NullPointerException` 문제를 해결하는 데 `@Nullable`으나 `@NotNull`과 같은 애노테이션을 쓸 수도 있습니다. 그러나 이는 모든 문제를 해결할 수도 없습니다.
> - 자바에서 `null` 대신 자바 8의 `Optional` 타입 등의 `null`을 감싸는 특별한 래퍼 타입을 활용할 수도 있습니다.

- 코틀린에서 널이 될 수 있는 타입을 처리하는 데 별도의 실행 시점 부가 비용이 들지 않습니다.

### 6.1.3 안전한 호출 연선자: ?.

- `?.`은 null 검사와 메서드 호출을 한 번의 연산으로 수행합니다.
- `s?.toUpperCase()` 는 `if(s != null) s.toUpperCase() else null`과 같습니다.

```kt
fun printAllCaps(s: String?) {
  val allCaps: String? = s?.toUpperCase()
  println(allCaps)
}
printAllCaps("abc") // ABC
printAllCaps(null)  // null
```

- 메서드 호출 뿐 아니라, 프로퍼티를 읽을 때도 안전한 호출이 가능합니다.

```kt
class Address(val streetAddress: String, val zipCode: Int, val city: String, val country: String)
class Company(val name: String, val address: Address?)
class Person(val name: String, val company: Company?)
fun Person.countryName(): String {
  val country = this.company?.address?.country
  return if(country != null) country else "Unknown"
}
println(Person("Dmitry", null).countryName()) // Unknown
```

### 6.1.4 엘비스 연산자: ?:

- 코틀린은 `null` 대신 사용할 디폴트 값을 지정할 때 편리하게 사용할 수 있는 연산자를 제공하며 이 연산자를 `엘비스(elvis)` 연산자라고 합니다.

```kt
fun foo(s: String?) {
  val t: String = s ?: ""
}
```

```kt
fun strLenSafe(s: String?): Int = s?.length ?:0
println(strLenSafe("abc"))  // 3
println(strLenSafe(null))   // 0
```

```kt
fun Person.countryName() = company?.address?.country?:"Unknown"
```

- 코틀린에서는 return 이나 throw 등의 연산도 식이므로, 엘비스 연산자를 사용할 수 있습니다.

```kt
class Address(val streetAddress: String, val zipCode: Int, val city: String, val country: String)
class Company(val name: String, val address: Address?)
class Person(val name: String, val company: Company?)
fun printShippingLabel(person: Person) {
  val address = person.company?.address?:throw illegalArgumentException("No address")
  with (address) {
    println(streetAddress)
    println("$zipCode $city, $country")
  }
}

val address = Address("Elesestr. 47", 80687, "Munich", "Germany")
val jetbrains = Company("JetBrains", address)
val person = Person("Dmitry", jetbrains)
printShippingLabel(person)  // Elesestr. 47 /n 80687 Munich, Germany
printShippingLable(Person("Alexey", null))  // Exception, No address
```

### 6.1.5 안전한 캐스: as?

- `as?` 연산자는 어떤 값을 지정한 타입으로 캐스트합니다.

```kt
class Person(val firstName: String, val lastName: String) {
  override fun equals(o: Any?): Boolean {
    val otherPerson = o as? Person ?: return false
    return otherPerson.firstName == firstName && otherPerson.lastName == lastName
  }
  override fun hashCode(): Int = firstName.hashCode() * 37 + lastName.hashCode()
}

val p1 = Person("Dmitry", "Jemerov")
val p2 = Person("Dmitry", "Jemerov")
println(p1 == p2) // true
println(p1.equals(42))  // false
```

- 이 패턴을 사용하면 파라미터로 받은 값이 원하는 타입인지쉽게 검사하고 캐스트할 수 있으며, 타입이 맞지않으면 쉽게 false를 반환할 수 있습니다.

### 6.1.6 널 아님 단언: !!

- `not-null assertion`은 코틀린에서 널이 될 수 있는 타입의 값을 다룰 때, 사용할 수 있는 도구 중 가장 단순한 도구 입니다.
- `!!` 를 사용하면 어떤 값이든 널이 될 수 없는 타입으로 바꿀 수 있습니다.

```kt
fun ignoreNulls(s: String?) {
  val sNotNull: String = s!!
  println(sNotNull.length)
}9
ignoreNulls(null) // exception
```

- 위와 같이 작성을 하면, null이면 예외가 발생해도 감수함을 의미합니다.
- 일반적으로는 다음과 같이 작성하는 것이 좋습니다.

```kt
class CopyRowAction(val list: JList<String>): AbstractAction() {
  override fun isEnabled(): Boolean = list.selectedValue != null
  override fun actionPerformed(e: ActionEvent) { val value = list.selectedValue!! }
}
```

### 6.1.7 let 함수

- `let` 함수를 통해, 안전한 호출 연산자와 함께 사용하면 원하는 식을 평가해서 결과가 널인지 검사한 다음에 그 결과를 변수에 넣는 작업을 간단한 식을 통해 한꺼번에 처리할 수 있습니다.

```kt
fun sendEmailTo(email: String) {
  println("Sending email to $email")
}
var email: String? = "a@example.com"
email?.let { sendEmailTo(it) }  //  "a@example.com"
```

- 코드를 아래와 같이 간단하게 만들 수도 있습니다.

```kt
// before
val person: Person? = getThreBestPersonInTheWorld()
if (person != null) sendEmailTo(person.email)

// after
getThreBestPersonInTheWorld()?.let { sendEmailTo(it.email) }
```

### 6.1.8 나중에 초기화할 프로퍼티

- 코틀린에서 클래스 안의 널이 될 수 없는 프로퍼티를 생성자 안에서 초기화하지 않고 특별한 메서드 안에서 초기화할 수 없습니다.

```kt
// Null 이 될 수 있는 프로퍼티 접근, 다만 코드가 지저분함
class myService { fun performAction(): String = "foo" }
class MyTest {
  private var myService: MyService? = null
  @Before fun setUp() {
    myService = MyService()
  }
  @Test fun testAction() {
    Assert.assertEquals("foo", myService!!.performAction())
  }
}
```

- 이러한 못생긴 코드를 해결하기 위해서 `late-initialized` 할 수 있습니다.

```kt
class myService { fun performAction(): String = "foo" }
class MyTest {
  private lateinit var myService: MyService
  @Before fun setUp() {
    myService = MyService()
  }
  @Test fun testAction() {
    Assert.assertEquals("foo", myService.performAction())
  }
}
```

- 나중에 초기화하는 프로퍼티는 항상 `var` 이여야 합니다.
- 이를 초기화하기 전에 접근하면, `lateinit preopert ... has not been initialized`라는 예외가 발생합니다.
- 일반적으로 `lateinit` 프로퍼티를 의존관계 주입(DI) 프레임워크와 함께 사용하는 경우가 많습니다.

### 6.1.9 널이 될 수 있는 타입 확장

- 널이 될 수 있는 타입에 대한 확장 함수를 정의하면 null 값을 다루는 강력한 도구로 활용할 수 있습니다.
- 확장 함수의 경우, 직접 변수에 대해 메서드를 호출하면 알아서 널 차리를 해줍니다.

```kt
// null이 될 수 있는 수신 객체에 대해 확장 함수 호출
fun verifyUserInput(input: String?) {
  if(input.isNullOrBlank()) {
    println("Please fill in the required fields")
  }
}
verifyUserInput(" ")  // "Please fill in the required fields"
verifyUserInput(null) // "Please fill in the required fields"
```

- 자바에서는 메서드 안의 this는 그 메서드가 호출된 수신 객체를 가리키므로 항상 널이 아닙니다.
- 코틀린에서는 앞에서 살펴본 let 함수도 널이 될 수 있는 타입의 값에 대해 호출할 수 있지만 let은 this가 널인지 검사하지 않습니다.

```kt
val person: Person? = ...
person.let { sendEmailTo(it) }    // Error: Type mismatch: inferred type is Person? but Person was expected
```

> 확장 함수를 작성한다면, 확장 함수를 널이 될 수 있는 타입에 대해 정의할지 여부를 고민할 필요가 있습니다. 처음에는 널이 될 수 없는 타입에 대한 확장 함수를 정의하고, 나중에 널이 될 수 있는 타입에 대해 호출했다면 여기서 널을 제대로 처리하게 되면 안전하게 그 확장 함수를 널이 될 수 있는 타입에 대한 확장 함수로 바꿀 수 있습니다.

### 6.1.10 타입 파라미터의 널 가능성

- 다음은 널이 될 수 있는 예시입니다.

```kt
fun <T> printHashCode(t: T) {
  println(t?.hashCode())
}
printHashCode(null) // null, 해당 경우 "T"의 타입은 "Any?"로 추론됩니다.
```

- 타입 파라미터가 널이 아님을 확실히 하려면 널이 될 수 없는 타입 상한(upper bound)를 지정해야 합니다.

```kt
// 널이 될 수 없도록 상한을 사용합니다.
fun <T: Any> printHashCode(t: T) {  // T는 널이 될 수 없는 타입입니다.
  println(t.hashCode())
}
printHashCode(null) // Error, 이 코드는 컴파일 되지 않습니다.
printHashCode(42)   // 42
```

- 타입 파라미터는 널이 될 수 있는 타입을 표시하려면 반드시 물음표를 타입 이름 뒤에 붙여야 한다는 규칙의 유일한 예외입니다.

### 6.1.11 널 가능성과 자바

- 자바와 코틀린을 같이 사용하는 경우, 안전하게 하기 위해서는 신경써야 하는 부분이 있습니다.
- 자바의 경우, 애노테이션으로 널 가능성 정보를 지정할 수 있습니다.
  - `@Nullable Type` = `Type?`
  - `@NotNull Type` = `Type`
- 널 가능성 애노테이션이 소스코드에 없는 경우에는 자바의 타입은 코틀린의 플랫폼 타입(platform type)이 됩니다.

#### 플랫폼 타입

- 플랫폼 타입은 코틀린이 널 관련 정보를 알 수 없는 타입을 의미합니다.
  - `Type` = `Type?` or `Type`

```java
public class Person {
  private final String anme;
  public Person(String name) { this.name = name; }
  public String getName() { return name; }
}
```

- 위의 코드에서는 코틀린 컴파일러는 String 타입의 널 가능성에 대해 전혀 알지 못합니다.

```kt
fun yellAt(person: Person) {
  println(person.name.toUpperCase() + "!!!")
}
yellAt(Person(null))  //   java.lang.IllegalArgumentException: Paramter specified as non-null is null
```

- 코틀린 컴파일러는 공개(public) 가시성인 코틀린 함수의 널이 아닌 타입인 파라미터와 수신 객체에 대한 널 검사를 추가해줍니다.

```kt
fun yellAtSafe(person: Person) {
  println((person.name ?: "AnyOne").toUpperCase() + "!!!")
}
yellAtSafe(Person(null))  // ANYONE!!!
```

- 코틀린은 플랫폼 타입을 통해서, 불필요한 널 검사를 줄일 수 있습니다.
- 특히 제네릭을 다룰 때 상황이 안좋아지기 때문에, 이를 프로그래머에게 책임을 부여하는 실용적인 접근 방법을 사용합니다.

```kt
val s: String? = person.name  // 자바 프로퍼티를 널이 될 수 있는 타입으로 볼 수 있습니다.
val s1: String = person.name  // 자바 프로퍼티를 널이 될 수 없는 타입으로도 볼 수 있습니다.
```

#### 상속

- 코틀린에서 자바 메서드를 오버라이드할 때 그 메서드의 파라미터와 반환 타입을 널이 도리 수 잇는 타입으로 선언할지 널이 될 수 없는 타입으로 선언할지 결정해야 합니다.

```java
interface StringProcessor { void process(String value); }
```

```kt
// 코틀린에서 자바 인터페이스를여러 다른 널 가능성으로 구현합니다.
class StringPrinter : StringProcessor {
  override fun process(value: String) {
    println(value)
  }
}

class NullableStringPrinter : StringProcessor {
  override fun process(value: String?) {
    if(value != null) { println(value) }
  }
}
```

- 자바 클래스나 인터페이스를 코틀린에서 구현할 경우 널 가능성을 제대로 처리하는 일이 중요합니다.
- 코틀린 컴파일러는 널이 될 수 없는 타입으로 선언한 모든 파라미터에 대해 널이 아님을 검사하는 단언문을 만들어 줄 수 있습니다.

<br/>

## 6.2 코틀린의 원시 타입

### 6.2.1 원시 타입: Int, Boolean 등

- 자바는 원시 타입(primitive type)과 참조 타입(reference type)이 있지만, 코틀린은 원시 타입과 래퍼 타입을 구분하지 않으며 항상 같은 타입을 사용합니다.
- 코틀린은 실행 시점에 숫자 타입은 가능한 가장 효율적인 방식으로 표현됩니다.

### 6.2.2 널이 될 수 있는 원시 타입: Int?, Boolean? 등

- 널이 될 수 있는 코틀린 타입은 자바 원시 타입으로 표현할 수 없으므로, 자바의 래퍼 타입으로 컴파일됩니다.

```kt
data class Person(val name: String, val age: Int? = null) {
  fun isOlderThan(other: Person): Boolean? {
    if(age == null || other.age == null)  return null
    return age > other.age
  }
}
println(Person("Sam", 35).isOlderThan(Person("Amy", 42))) // false
println(Person("Sam", 35).isOlderThan(Person("Jane")))    // null
```

- 제네릭 클래스의 경우 래퍼 타입을 사용합니다.
- JVM은 타입 인자로 원시 타입을 허용하지 않기 때문에 자바나 코틀린 모두에서 제네릭 클래스는 항상 박스 타입을 사용합니다.

### 6.2.3 숫자 변환

- 코틀린과 자바의 가장 큰 차이점 중 하나는 숫자를 변환하는 방식입니다.

```kt
// "Error: type mismatch" 컴파일 오류 발생
val i = 1
val l: Long = i

// 정상
val i = 1
val l: Long = i.toLong()
```

- 코틀린은 모든 원시 타입에 대한 변환 함수를 제공합니다. (`Boolean` 제외)
- 코틀린은 개발자의 혼란을 피하기 위해 **타입 변환를 명시**합니다.

### 6.2.4 Any, Any?: 최상위 타입

- `Any` 타입이 **모든 널이 될 수 없는 타입의 조상 타입**입니다.
  - `val answer: Any = 42`

### 6.2.5 Unit 타입: 코틀린의 void

- 코틀린 `Unit` 타입은 자바 `void`와 기능은 합니다.

```kt
// 아래는 같은 의미합니다.
fun f(): Unit { ... }
fun f() { ... }
```

- 코틀린 `Unit`은 모든 기능을 갖는 일반적인 타입이며, `void`와 달리 타입 인자로 사용할 수 있습니다.
- 다음과 같이 제네릭 파라미터를 반환하는 함수를 오버라이드하면서 반환 타입으로 `Unit`을 쓸 때 유용합니다.

```kt
interface Processor<T> { fun process(): T }
class NoResultProcessor : Processor<Unit> {   
  override fun process() {  // Unit을 반환하지만 타입 지정의 필요가 없습니다.
    // 업무 처리 코드
  } // return 명시 필요가 없습니다.
}
```

- `Unit`은 **단 하나의 인스턴스만 갖는 타입**을 의미합니다.

### 6.2.6 Nothing 타입: 이 함수는 결코 정상적으로 끝나지 않는다

- 코틀린에서는 반환 값이라는 개념 자체가 의미 없는 함수가 일부 존재합니다.
- 함수가 정상적으로 끝나지 않는다는 사실을 알기 위해서 `Nothing`이라는 특별한 반환 타입이 있습니다.

```kt
fun fail(message: String): Nothing {
  throw IllegalStateException(message)
}
fail("Error occurred")  // java.lang.IllegalStateException: Error occurred
```

- `Nothing` 타입은 아무 값도 포함하지 않으며, 함수의 반환 타입이나 반환 타입으로 쓰일 타입 파라미터로만 쓸 수 있습니다.
- `Nothing` 은 아무 값도 저장할 수 없으므로 아무 의미가 없습니다.

```kt
val address = company.address ?: fail("No address")
println(address.city)
```

<br/>

## 6.3 컬렉션과 배열

### 6.3.1 널 가능성과 컬렉션

- 널 가능성은 타입 시스템 일관성을 지키기 위해 필수적입니다.
- `List<Int?>` 와 `List<Int>?` 는 다릅니다.

### 6.3.2 읽기 전용과 변경 가능한 컬렉션

- 코틀린 컬렉션과 자바 컬렉션을 나누는 가장 중요한 특성 중 하나는 **코틀린에서는 컬렉션 안의 데이터에 접근하는 인터페이스와 컬렉션 안의 데이터를 변경하는 인터페이스를 분리한 점**입니다.
- 컬렉션의 데이터를 수정하려면 `kotlin.collections.MutableCollection` 인터페이스를 사용해야 합니다.
- 컬렉션의 읽기 전용 인터페이스와 변경 가능 인터페이스를 구별함으로서 프로그램에서 데이터에 어떤 일이 벌어지는지를 더 쉽게 이해할 수 있게 됩니다.

```kt
fun <T> copyElements(source: Collection<T>, target: MutableCollection<T>) {
  for(item in source) {
    target.add(item)
  }
}
val source: Collection<Int> = arrayListOf(3, 5, 7)
val target: MutableCollection<Int> = arrayListOf(1)
copyElements(source, target)
println(target) // 1, 3, 5, 7

val source: Collection<Int> = arrayListOf(3, 5, 7)
val target: Collection<Int> = arrayListOf(1)
copyElements(source, target)  // error
```

- 위 코드에서 source 컬렉션은 변경하지 못하지만, target 컬렉션의 경우 변경가능함을 알 수 있습니다.
- 다만, 읽기 전용 컬렉션은 항상 **스레드 안전(thread safe)** 하지는 않습니다.
- 다중 스레드 환경에서 데이터를 다루는 경우 데이터를 적절하게 동기화하거나 동시 접근을 허용하는 데이터 구조를 활용해야 합니다.

### 6.3.3 코틀린 컬렉션과 자바

![kotlin-collection-interface](https://user-images.githubusercontent.com/42582516/169536424-31796592-afc7-4c35-9f49-4f4edb05eb8d.png)

> 초록색은 읽기 전용, 주황색은 변경 가능, 하늘색은 자바 클래스를 의미합니다.

- 다른 컬렉션의 예시는 아래와 같습니다.

|컬렉션 타입|읽기 전용 타입|변경 가능 타입|
|-|-|-|
|List|listOf|mutableListOf, arrayListOf|
|Set|setOf|mutableSetOf, hashSetOf, linkedSetOf, sortedSetOf|
|Map|mapOf|mutableMapOf, hashMapOf, linkedMapOf, sortedMapOf|

### 6.3.4 컬렉션을 플랫폼 타입으로 다루기

- 컴파일러는 코틀린 코드가 그 타입을 널이 될 수 있는 타입이나 널이 될 수 없는 타입 어느 쪽으로 사용할 수 있게 허용합니다.
- 자바 인터페이스가 파일에 들어가는 텍스트를 처리하는 객체를 표현하는 예시입니다.

```java
interface FileContentProcessor {
  void processContents(File path, byte[] binaryContents, List<String> textContents);
}
```

```kt
class FileIndexer : FileContentProcessor {
  override fun processContents(path: File, binaryContents: ByteArray?, textContexts: List<String>?) {
    //...
  }
}
```

- 컬렉션 파라미터가 있는 다른 자바 인터페이스 예시입니다.

```java
interface DataParser<T> {
  void parseData(String input, List<T> output, List<String> errors);
}
```

```kt
class PersonParser: DataParser<Person> {
  override fun parseData(input: String, output: MutableList<Person>, errors: MutableList<Person>) {
    // ...
  }
}
```

### 6.3.5 객체의 배열과 원시 타입의 배열

- 코틀린에서 배열을 만드는 방법은 다음과 같습니다.
  - `arrayOf` 함수에 원소를 넘기면 배열을 만들 수 있습니다.
  - `arrayOfNulls` 함수에 정수 값을 인자로 넘기면 모든 원소가 null이고 인자로 넘긴 값과 크기가 같은 배열을 만들 수 있습니다.
  - `Array` 생성자는 배열 크기와 람다를 인자로 받아서 람다를 호출해서 각 배열 원소를 초기화해줍니다.

```kt
val letters = Array<String>(26) { i -> ('a' + i).toString() }
println(letters.jointToString(""))  // abcdefghijklmnopqrstuvwxyz
```

<br/>

## 6.4 요약

- 코틀린은 널이 될 수 있는 타입을 지원해 `NullPointerException` 오류를 컴파일 시점에 감지할 수 있습니다.
- 코틀린의 `?.`, `?:` `!!`, `let` 함수 등을 사용하면 널이 될 수 잇는 타입을 간결한 코드로 다룰 수 있습니다.
- `as?` 연산자를 사용하면 값을 다른 타입으로 변환하는 것과 변환이 불가능한 경우를 처리하는 것을 한꺼번에 편리하게 처리할 수 있습니다.
- 자바에서 가져온 타입은 코틀린에서 플랫폼 타입으로 취급됩니다.
- 코틀린에서는 수를 표현하는 타입이 일반 클래스와 똑같이 생겼고 일반 클래스와 똑같이 동작합니다.
- 널이 될 수 있는 원시 타입(Int? 등)은 자바의 `박싱한 원시 타입(java.lang.Integer)`에 대응합니다.
- `Any` 타입은 다른 모든 타입의 조상 타입이며, 자바의 `Object`에 해당합니다. `Unit` 은 자바의 `void`와 비슷합니다.
- 정상적으로 끝나지 않는 함수의 반환 타입을 지정할 때 `Nothing` 타입을 사용합니다.
- 코틀린 컬렉션은 표준 자바 컬렉션 클래스를 사용합니다. 그러나 코틀린은 자바보다 컬렉션을 더 개선해서 읽기 전용 컬렉션과 변경 가능한 컬렉션을 구별해 제공합니다.
- 자바 클래스를 코틀린에서 확장하거나 자바 인터페이스를 코틀린에서 구현하는 경우, 메서드 파라미터의 널 가능성과 변경 가능성에 대해 생각해야합니다.
- 코틀린의 `Array` 클래스는 일반 제네릭 클래스처럼 보입니다.
- 원시타입의 배열은 `IntArray`와 같이 각 타입에 대한 특별한 배열로 표현합니다.