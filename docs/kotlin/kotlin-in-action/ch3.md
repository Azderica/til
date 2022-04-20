---
sidebar_position: 3
---

# 3. 함수 정의와 호출

## 3.1 코틀린에서 컬렉션 만들기

```kt
val set = hashSetOf(1, 7, 53)
val list = arrayListOf(1, 7, 53)
val map = hashMapOf(1 to "one", 7 to "seven", 53 to "fifty-three")
```

- to는 특별한 키워드가 아닌 일반 함수입니다.

```kt
>>> println(set.javaClass)    // class java.util.HashSet
>>> println(list.javaClass)   // class java.util.ArrayList
>>> println(map.javaClass)    // class java.util.HashMap
```

- 위의 예시를 보면 코틀린이 자신만의 컬렉션 기능을 제공하지 않음을 알 수 있습니다.
- 즉, 자바 코드와 상호작용하기가 훨씬 더 편합니다.

<br/>

## 3.2 함수를 호출하기 쉽게 만들기

- 다음과 같이 직접 코드를 구현할 수 있습니다.

```kt
fun <T> joinToString(
  collection: Collection<T>,
  separator: String,
  prefix: String,
  postfix: String
): String {
  val result = StringBuilder(prefix)
  for((index, element) in collection.withIndex()) {
    if(index > 0) result.append(separator)
    result.append(element)
  }
  result.append(postfix)
  return result.toString()
}
```

```kt
val list = listOf(1, 2, 3)
println(joinToString(list, ";", "(", ")"))
```

### 3.2.1 이름 붙인 인자

- 위의 예시는 파라미터가 어떤 역할을 하는지 몰랐기 때문에 아래의 예시처럼 할 수 있습니다.

```kt
joinToString(collection, separator = " ", prefix = ",", postfix = ".")
```

### 3.2.2 디폴트 파라미터 값

- 코틀린에서 디폴트 파라미터를 쓸수도 있습니다.

```kt
fun <T> joinToString(
  collection: Collection<T>,
  separator: String = ", ",
  prefix: String = "",
  postfix: String = ""
): String
```

### 3.2.3 정적인 유틸리티 클래스 없애기: 최상위 함수와 프로퍼티

- 코틀린에서는 무의미한 클래스가 필요없습니다.

```kt
// kotlin
package strings

fun joinToString(...): String {...}
```

```java
// java
package strings

public class JoinKt {
  public static String joinToString(...) {...}
}
```

#### 최상위 프로퍼티

- 함수와 마찬가지로 프로퍼티도 파일의 최상위 수준에 놓일 수 있습니다.

```kt
var opCount = 0
fun performOperation() {
  opCount++
  // ...
}

fun reportOperationCount() {
  println("Operation performed $opCount times")
}
```

<br/>

## 3.3 메서드를 다른 클래스에 추가: 확장 함수와 확장 프로퍼티

- 기존 자바 API를 재작성할 필요없이 코틀린이 제공하는 여러 편리한 기능을 사용할 수 있다면 좋으며 확장 함수(extension function)이 그런 역할을 할 수 있습니다.
- 확장 함수를 만들때는 클래스 이름을 **수신 객체 타입(receiver type)** 이라 부르며, 확장 함수의 호출되는 대상이 되는 값(객체)를 **수신 객체(receiver object)** 라고 부릅니다..

```kt
// this -> 수신 객체
// String.lastChar() -> 수신 객체 타입
fun String.lastChar(): Char = this.get(this.length - 1)
```

### 3.3.1 임포트와 확장 함수

- 개별 함수, \*를 사용한 임포트, as 키워드를 사용한 임포트 클래스 등을 통해 개별 함수를 임포트할 수 있습니다.

```kt
import strings.lastChar

val c = "Kotlin:".lastChar()
```

```kt
import strings.*

val c = "Kotlin".lastChar()
```

```kt
import strings.lastChar as last

val c = "Kotlin".last()
```

- 임포트 시 이름 충돌을 해결할 유일한 방법은 이름을 바꾸는 것입니다.

### 3.3.2 자바에서 확장 함수 호출

- 자바에서 확장함수를 호출하는 것은 다음과 같습니다.

```java
// 확장함수가 StringUtil.kt 에 있다고 가정
char c = StringUtilKt.lastChar("Java");
```

### 3.3.3 확장 함수로 유틸리티 함수 정의

- 위의 코드 예시를 컬렉션에 대한 확장으로 다음과 같이 구성할 수 있습니다.

```kt
fun <T> Collection<T>.joinToString(
  separator: String = ", ",
  prefix: String = "",
  postfix: String = ""
): String {
  val result = StringBuilder(prefix)
  for((index, element) in collection.withIndex()) {
    if(index > 0) result.append(separator)
    result.append(element)
  }
  result.append(postfix)
  return result.toString()
}
```

```kt
>>> val list = listOf(1, 2, 3)
>>> println(list.joinToString(separator = "; ", prefix="(", postfix=")"))
// (1; 2; 3)
```

- 위를 문자열 컬렉션에 대해서만 호출할 수 있는 join 함수를 정의하고 싶다면 아래처럼도 가능합니다.

```kt
fun Collection<String>.join(
  separator: String = ", ",
  prefix: String = "",
  postfix: String = ""
) = jointToString(separator, prefix, postfix)
```

### 3.3.4 확장 함수는 오버라이드할 수 없다

```kt
open class View {
  open fun click() = println("View clicked")
}

class Button: View() {
  override fun click() = println("Button clicked")
}
```

- 확장 함수는 클래스의 일부가 아닙니다.
- 확장 함수는 객체의 동적인 타입에 의해 결정되지 않습니다.

```kt
fun View.showOff() = println("I'm a view!")
fun Button.showOff() = println("I'm a button!")

>>> val view: View = Button()
>>> view.showOff()  // 확장함수는 정적으로 결정됨, "I'm a view!"
```

### 3.3.5 확장 프로퍼티

- 확장 프로퍼티는 아무 상태도 가질 수 없습니다.

```kt
var StringBuilder.lastChar: Char
  get () = get(length - 1)
  set(value: Char) {
    this.setCharAt(length - 1, value)
  }
```

```kt
>> println("Kotlin".lastChar)
>> val sb = StringBuilder("Kotlin?")
```

- 자바에서 확장 프로퍼티를 사용하려면 게터나 세터를 명시적으로 호출해줘야합니다.

<br/>

## 3.4 컬렉션 처리: 가변 길이 인자, 중위 함수 호출, 라이브러리 지원

- varang 키워드를 사용하면 호출 시 인자 개수가 달라질 수 있는 함수를 정의할 수 있습니다.
- 중의 함수 호출 구문을 사용하면 인자가 하나뿐인 메서드를 간편하게 호출할 수 있습니다.
- 구조 분해 선언을 통해 복합적인 값을 분해해서 여러 변수에 나눠 담을 수 있습니다.

### 3.4.1 자바 컬렉션 API 확장

- 대표적인 예시로 last와 max는 모두 확장 함수 입니다.

```kt
fun <T> List<T>.last(): T { /* 마지막 원소를 반환함 */}
fun Collection<Int>.max(): Int { /* 컬렉션의 최댓값을 찾음 */ }
```

### 3.4.2 가변 인자 함수: 인자의 개수가 달라질 수 없는 함수 정의

- 리스트 생성함수가 대표적인 예시입니다.

```kt
val list = listOf(2, 3, 5, 7, 11)
```

```kt
fun listOf<T>(varang values: T): List<T> {...}
```

- 자바의 가변 인지와 비슷합니다.

### 3.4.3 값의 쌍 다루기: 중위 호출과 구조 분해 선언

```kt
val map = mapOf(1 to "one", 7 to "seven", 53 to "fifty-three")
```

- 위 코드는 중위 호출(infix call)이라는 방식으로 to라는 일반 메서드를 호출합니다.

```kt
infix fun Any.to(other: Any) = Pair(this, other)
```

```kt
val (number, name) = 1 to "one
```

- 위 기능을 구조 분해 선언(destructuring declaration) 이라고 부릅니다.

```kt
fun <K, V> mapOf(varang values: pair<K, V>): Map<K, V>
```

<br/>

## 3.5 문자열과 정규식 다루기

- 코틀린은 다양한 확장 함수를 제공합니다.

### 3.5.1 문자열 나누기

- 자바와 코틀린 모두 정규식 문법은 똑같으며, String 타입이 아닌 Regex 타입의 값을 받습니다.

```kt
// 마침표나 대시로 문자열을 분리하는 예시
println("12.345-6.A".split("\\.|-".toRegex()))
// [12, 345, 6, A]
```

- 다만 코틀린에서는 toRegex를 통해서 문자열을 정규식으로 변환할 수 있습니다.

```kt
println("12.345-6.A".split(".", ","))
// [12, 345, 6, A]
```

### 3.5.2 정규식과 3중 따옴표로 묶은 문자열

```kt
"/Users/yole/kotlin-book/chapter.adoc"
// Users/yole/kotlin-book : 디렉토리
// / : 마지막 슬래쉬
// chapter : 파일 이름
// . : 마지막 마침표
// adoc : 확장표
```

- 위의 경우처럼 나누는 경우는 다음처럼 할 수 있습니다.

```kt
fun parsePath(path: String) {
  val directory = path.substringBeforeLast("/")
  val fullName = path.substringAfterLast("/")
  val fileName = fullName.substringBeforeLast(".")
  val extension = fullName.substringAfterLast(".")
  println("Dir: $directory, name: $fileName, ext: $extension")
}

>>> parsePath("/Users/yole/kotlin-book/chapter.adoc")
// Dir: Users/yole/kotlin-book, name: chapter, ext: adoc
```

- 이를 정규식을 통하면 더 편리하게 구성할 수 있습니다.

```kt
fun parsePath(path: String) {
  val regex = """(.+)/(.+)\.(.+)""".toRegex()
  val matchResult = regex.matchEntire(path)
  if(matchResult != null) {
    val (directory, filename, extension) = matchResult.destructured
    println("Dir: $directory, name: $fileName, ext: $extension")
  }
}
```

### 3.5.3 여러 줄 3중 따옴표 문자열

- 3중 따옴표 문자열은 문자열 이스케이프를 피하기 위해서만 사용하지 않습니다.
- 3중 따옴표 문자열은 줄 바꿈을 표현하는 아무 문자열이 그대로 들어갑니다.

<br/>

## 3.6 코드 다듬기: 로컬 함수와 확장

- 좋은 코드의 중요한 특징 중 하나는 DRY 원칙입니다.
- 코틀린은 함수에서 추출한 함수를 원 함수 내부에 추출한 함수를 원 함수 내부에 중첩시킬 수 있습니다.

```kt
// 코드 중복
class User(val id: Int, val name: String, val address: String)

fun saveUser(user: User) {
  if(user.name.isEmpty()) {     // 필드 검증의 중복
    throw IllegalArgumentException(
      "Can't save user ${user.id}: empty Name")
  }
  if(user.address.isEmpty()) {
    throw IllegalArgumentException(
      "Can't save user ${user.id}: empty Address")
  }
}
```

```kt
// 중복 코드 제거 및 불필요 파라미터 제거
class User(val id: Int, val name: String, val address: String)

fun saveUser(user: User) {
  fun validate(value: String, fieldName: String) {
    if(value.isEmpty()) {
      throw IllegalArgumentException(
      "Can't save user ${user.id}: empty $fieldName")
    }
  }
  validate(user.name, "Name")
  validate(user.address, "Address")
}
```

<br/>

## 3.7 요약

- 코틀린은 자체 컬렉션 클래스를 정의하지 않지만 자바 클래스를 확장해서 더 풍부한 API를 제공합니다.
- 함수 파라미터의 디폴트 값을 정의하면 오버로딩한 함수를 정의할 필요성이 줄어듭니다.
- 코틀린 파일에서 클래스 멤버가 아닌 최상위 함수와 프로퍼티를 직접 선언할 수 있습니다.
- 확장 함수와 프로퍼티를 사용하면 외부 라이브러리에 정의된 클래스를 포함해 모든 클래스의 API를 그 클래스의 소스코드를 바꿀 필요 없이 확장할 수 있습니다.
- 중위 호출을 통해 인자가 하나 밖에 없는 메서드나 확장 함수를 더 깔끔한 구문으로 호출할 수 있습니다.
- 코틀린은 정규식과 일반 문자열을 처리할 때 유용한 다양한 문자열 처리 함수를 제공합니다.
- 자바 문자열로 표현하려면 수많은 이스케이프가 필요한 문자열의경우 3중 따옴표 문자열을 사용하면 더 깔끔하게 표현이 가능합니다.
- 로컬 함수를 써서 코드를 더 깔끔하게 유지하면서 중복을 제거할 수 있습니다.
