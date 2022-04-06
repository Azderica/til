---
sidebar_position: 2
---

# 2. 코틀린 기초

## 2.1 기본 요소: 함수와 변수

### 2.1.1 Hello. World!

```kotlin
fun main(args: Array<String>) {
  println("Hello, world!")
}
```

### 2.1.2 함수

- 함수의 선언은 `fun` 키워드로 시작합니다.
- `fun 함수이름(파라미터 변수이름: 변수타입): 반환타입 { 함수 본문 }`

> 코틀린에서 if는 식(expression)이며 문(statement)이 아닙니다.
>
> - 식은 값을 만들어 내며 다른 식의 하위 요소로 계산에 참여할 수 있으나 문은 자신을 둘렀가ㅗ 있는 가장 안쪽 블록의 최상위 요소로 존재합니다.

### 2.1.3 변수

- 코틀린에서는 키워드로 변수 선언을 시작하는 대신 변수 이름에 타입을 명시하거나 생략하도록 허락합니다.
- 변경 가능한 변수과 변경 불가능한 변수
  - `val` : 변경 불가능한 참조를 저장하는 변수(자바의 final)
  - `var` : 변경 가능한 참조
- 기본적으로 모든 변수를 val 키워드를 통해 불변 변수로 선언하고 필요시에만 var로 변경하는 것이 중요합니다.
- val 변수는 블록을 실행할 때 정확히 한 번 초기화돼야 합니다.

### 2.1.4 문자열 템플릿

```kotlin
fun main(args: Array<String>) {
  val name = if(args.size > 0) args[0] else "Kotlin"
  println("Hello, $name!")
}
```

- `$`을 추가해 효율적으로 표현이 가능합니다.
- 복잡한 식의 경우 괄호를 사요아홀 수 있습니다.
  - `println("Hello, ${args[0]}!")`

<br/>

## 2.2 클래스와 프로퍼티

```java
// java
public class Person {
  private final String name;

  public Person(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }
}
```

```kotlin
// kotlin
class Person(val name: String)
```

- 위의 유형처럼 데이버만 저장하는 클래스를 값 객체(value object)라 부르며 다양한 언어가 값 객체를 간결하게 기술할 수 있는 구문을 제공합니다.

### 2.2.1 프로퍼티

- 클래스의 목적은 데이터를 캡슐화하는 것입니다.
- 클래스는 데이터를 private field에 저장하며 데이터에 접근하는 통로로 쓸 수 있는 접근자 메서드(access method)를 제공합니다.
  - 대표적인 예시로 getter와 setter를 추가 제공합니다.
- 자바에서는 필드와 접근자를 묶어 **프로퍼티(property)** 라고 부릅니다.

```kotlin
class Person {
  val name: String,       // 읽기 전용 프로퍼티 - private field + public getter
  var isMarried: Boolean  // 쓸 수 있는 프로퍼티 - private field + public getter + public setter
}
```

- 자바 클래스에서 Person 클래스 사용

```java
Person person = new Person("Bob", true);
```

- 코틀린에서 Person 클래스 사용

```kotlin
val person = Person("Bob", true);
```

- 대부분의 프로퍼티에는 그 값을 뒷받침하는 backing field가 있습니다. (커스텀 게터)

### 2.2.2 커스텀 접근자

```kt
class Rectangle(val height: Int, val width Int) {
  val isSquare: Boolean
    get() { // property getter 선언
      return height == width
    }
}

```

### 2.2.3 코틀린 소스코드 구조: 디렉토리와 패키지

- 코틀린도 자바처럼 패키지의 개념이 있습니다.
- 모든 파일의 맨앞에 package 문을 넣을 수 있습니다.

```kt
package geometry.shapes

import java.util.Random

class Rectangle(val height: Int, val width: Int) {
  val isSquare: Boolean
    get() = height == width
}

fun createRandomRectangle(): Rectangle {
  val random = Random()
  return Rectangle(random.nextInt(), random.nextInt())
}
```

```kt
package geometry.shapes

import geometry.shapes.createRandomRectangle

fun main(args: Array<String>) {
  println(createRandomRectangle().isSquare)
}
```

<br/>

## 2.3 선택 표현과 처리: enum과 when

### 2.3.1 enum 클래스 정의

- 간단한 enum 클래스

```kt
enum class Color {
  RED, ORANGE, YELLOW
}
```

- 프로퍼티와 메서드가 있는 enum 클래스

```kt
enum class Color (
  val r: Int, val g: Int, val b: Int
) {
  RED(255, 0, 0), ORANGE(255, 165, 0),
  YELLOW(255, 255, 0), GREEN(0, 255, 0);

  fun rgb() = (r * 256 + g) * 256 + b
}

>>> println(Color.BLUE.rgb())
```

- enum에서도 일반적인 클래스와 마찬가지로 생성자와 프로퍼티를 선언합니다.

### 2.3.2 when으로 enum 클래스 다루기

```kt
fun getMnemonic(color: Color) =
  when (color) {
    Color.RED -> "Richard"
    Color.ORANGE -> "Of"
    Color.YELLOW -> "Yellow"
    Color.GREEN -> "Gave"
    Color.BLUE -> "Battle"
  }
```

```kt
fun getWarmth(color: Color) = when(color) {
  RED, ORANGE, YELLOW -> "warm"
  GREEN -> "neutral"
  BLUE, INDIGO, VIOLET -> "cold"
}
```

### 2.3.3 when과 임의의 객체를 함께 사용

- wen은 자바의 switch 보다 더 강력합니다.

```kt
fun mix(c1: Color, c2: Color) =
  when (setOf(c1, c2)) {
    setOf(RED, YELLOW) -> ORANGE
    setOf(YELLOW, BLUE) -> GREEN
    setOf(BLUE, VIOLET) -> INDIGO
    else -> throw Exception("Dirty color")
  }

>> println(mix(BLUE, YELLOW))
```

### 2.3.4 인자 없는 when 사용

- 코드가 읽기 어려워지지만 성능을 향상시키는 경우가 있습니다.

```kt
fun mixOptimized(c1: Color, c2: Color) =
  when {
    (c1 == RED && c2 == YELLOW) || (c1 == YELLOW && c2 == RED) -> ORANGE
    (c1 == YELLOW && c2 == BLUE) || (c1 == BLUE && c2 == YELLOW) -> GREEN
    (c1 == BLUE && c2 == VIOLET) || (c1 == VIOLET && c2 == BLUE) -> INDIGO
    else -> throw Exception("Dirty color")
  }

>>> println(mixOptimized(BLUE, YELLOW))
```

### 2.3.5 스마트 캐스트: 타입 검사와 타입 캐스트를 조합

- 식을 표현할 때는 다음과 같이 할 수 있습니다.

```kt
interface Expr
class Num(val value: Int) : Expr
class Sum(val left: Expr, val right: Expr) : Expr
```

- Expr 인터페이스는 두가지 구현 클래스가 존재합니다.
  - 어떤 식이 수라면 그 값을 반환합니다.
  - 어떤 식이 합계라면 좌항과 우항의 값을 계산한 다음에 그 두 값을 합한 값을 반환합니다.

```kt
fun eval(e: Expr): Int {
  if(e is Num) {
    val n = e as Num
    return n.value
  }
  if(e is Sum) {
    return eval(e.right) + eval(e.left)
  }
  throw IllegalArgumentException("Unknown expression")
}
```

- kotlin에서는 is를 사용해 변수 타입을 검사합니다.
- 명시적인 타입 캐스팅하려면 as 키워드를 사용합니다.
  - `val n = e as Num`

### 2.3.6 리팩토링: if를 when으로 변경

- 코틀린은 자바와 달리 3항 연산자가 없습니다.

```kt
fun eval(e: Expr): Int =
  if(e is Num) {
    e.value
  } else if(e is Sum) {
    eval(e.right) + eval(e.left)
  } else {
    throw IllegalArgumentException("Unknown expression")
  }

>>> printLn(eval(Sum(Num(1), Num(2))))
```

```kt
fun eval(e: Expr): Int =
  when (e) {
    is Num ->
      e.value
    is Sum ->
      eval(e.right) + eval(e.left)
    else ->
      throw IllegalArgumentException("Unknown expression")
  }
```

### 2.3.7 if와 when의 분기에서 블록 사용

- 복잡한 경우, 다음의 블록을 사용할 수 있습니다.

```kt
fun evalWithLogging(e: Expr): Int =
  when (e) {
    is Num -> {
      println("num: ${value}")
      e.value
    }
    is Sum -> {
      val left = evalWithLogging(e.left)
      val right = evalWithLogging(e.right)
      println("sum: $left + $right")
      left + right
    }
    else -> throw IllegalArgumentException("Unknown expression")
  }
```

<br/>

## 2.4 대상을 이터레이션: while과 for 루프

### 2.4.1 while 루프

### 2.4.2 수에 대한 이터레이션: 범위와 수열

### 2.4.3 맵에 대한 이터레이션

### 2.4.4 in으로 컬렉션이나 범위의 원소 검사

<br/>

## 2.5 코틀린의 예외 처리

### 2.5.1 try, catch, finally

### 2.5.2 try를 식으로 사용

<br/>

## 2.6 요약
