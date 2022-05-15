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

### 6.1.7 let 함수

### 6.1.8 나중에 초기화할 프로퍼티

### 6.1.9 널이 될 수 있는 타입 확장

### 6.1.10 타입 파라미터의 널 가능성

### 6.1.11 널 가능성과 자바

<br/>

## 6.2 코틀린의 원시 타입

### 6.2.1 원시 타입: Int, Boolean 등

### 6.2.2 널이 될 수 있는 원시 타입: Int?, Boolean? 등

### 6.2.3 숫자 변환

### 6.2.4 Any, Any?: 최상위 타입

### 6.2.5 Unit 타입: 코틀린의 void

### 6.2.6 Nothing 타입: 이 함수는 결코 정상적으로 끝나지 않는다

<br/>

## 6.3 컬렉션과 배열

### 6.3.1 널 가능성과 컬렉션

### 6.3.2 읽기 전용과 변경 가능한 컬렉션

### 6.3.3 코틀린 컬렉션과 자바

### 6.3.4 컬렉션을 플랫폼 타입으로 다루기

### 6.3.5 객체의 배열과 원시 타입의 배열

<br/>

## 6.4 요약
