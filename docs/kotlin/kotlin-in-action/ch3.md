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

### 3.4.1 자바 컬렉션 API 확장

### 3.4.2 가변 인자 함수: 인자의 개수가 달라질 수 없는 함수 정의

### 3.4.3 값의 쌍 다루기: 중위 호출과 구조 분해 선언

<br/>

## 3.5 문자열과 정규식 다루기

### 3.5.1 문자열 나누기

### 3.5.2 정규식과 3중 따옴표로 묶은 문자열

### 3.5.3 여러 줄 3중 따옴표 문자열

<br/>

## 3.6 코드 다듬기: 로컬 함수와 확장

<br/>

## 3.7 요약
