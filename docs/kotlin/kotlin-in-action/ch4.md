---
sidebar_position: 4
---

# 4. 클래스, 객체, 인터페이스

## 4.1 클래스 계층 정의

- 코틀린 가시성/접근 변경자는 자바와 비슷하지만 아무것도 지정하지 않은 경우 기본 가시성은 다릅니다.
- `sealed`은 클래스 상속을 제한합니다.

### 4.1.1 코틀린 인터페이스

- 다음과 같은 예시가 있습니다.

```kt
interface Clickable {
  fun click()
}
```

```kt
class Button: Clickable {
  override fun click() = println("I was clicked")
}
```

- 코틀린에서는 override 변경자를 꼭 사용해야합니다.
- 디폴트 메서드도 사용할 수 있습니다.

```kt
interface Clickable {
  fun click()   // 일반 메서드 선언
  fun showoff() = println("I'm clickable!") // 디폴트 구현이 있는 메서드
}
```

```kt
interface Focusable {
  fun showOff() = println("I'm focusable!")
}
```

- 코틀린 컴파일러는 두 메서드를 아우르는 구현을 하위 클래스에 직접 구현하게 강제합니다.

```kt
class Button: Clickable, Focusable {
  override fun click() = println("I was clicked")
  override fun shoOff() {
    super<Clickable>.showOff()
    super<Focusable>.showOff()
  }
}
```

- 코틀린은 자바 6와 호환되게 설계되었습니다.

### 4.1.2 open, final, abstract 변경자: 기본적으로 final

- 취약한 기반 클래스(fragile base class)와 같은 문제는 하위 클래스가 기반 클래스에 대해 가졌던 가정이 기반 클래스를 변경함으로 깨져버린 경우에 생깁니다.
- 코틀린의 클래스와 메서드는 기본적으로 `final`입니다.
- 상속을 허용하려면 클래스 앞에 `open` 변경자를 붙여야 합니다.

```kt
open class RichButton: Clickable {
  fun disable() {}      // 이 함수는 파이널입니다.
  open fun animate() {} // 하위 클래스에서 이 메서드를 오버라이드해도 됩니다.
  override fun click() {} // 이 함수는 상위 클래스에서 열려있는 메서드를 오버라이드합니다.
}
```

- 오버라이드를 금지하려면 `final`을 명시해야 합니다.

```kt
open class RichButton: Clickable {
  final override fun click() {}
}
```

- final을 통해 다양한 경우에 스마트 캐스트가 가능합니다.
- abstract로 선언한 추상 클래스는 인스턴스화할 수 없습니다.

```kt
abstract class Animated {   // 추상 클래스
  abstract fun animate()    // 추상 함수
  open fun stopAnimating() {}
  fun animateTwice() {}
}
```

- 위를 요약하면 다음과 같습니다.

| 변경자     | 오버라이드 관련                                 | 설명                                         |
| ---------- | ----------------------------------------------- | -------------------------------------------- |
| `final`    | 오버라이드할 수 없음                            | 클래스 멤버의 기본 변경자                    |
| `open`     | 오버라이드할 수 있음                            | 반드시 open을 명시해야 오버라이드할 수 있음  |
| `abstract` | 반드시 오버라이드해야함                         | 추상 클래스의 멤버에만 변경자를 붙일 수 있음 |
| `override` | 상위 클래스나 상위 인스턴스의 멤버를 오버라이드 | 오버라이드하는 멤버는 기본적으로 열려있음    |

### 4.1.3 가시성 변경자: 기본적으로 공개

- 가시성 변경자는 자바와 비슷하지만 패키지 전용(package-private)는 없습니다.
- 코틀린에서는 internal이 새로 등장했습니다.

| 변경자      | 클래스 멤버                     | 최상위 선언                    |
| ----------- | ------------------------------- | ------------------------------ |
| `public`    | 모든 곳에서 볼 수 있음          | 모든 곳에서 볼 수 있음         |
| `internal`  | 같은 모듈 안에서만 볼 수 있음   | 같은 모듈 안에서만 볼 수 있음  |
| `protected` | 하위 클래스 안에서만 볼 수 있음 | (최상위 선언에 적용할 수 없음) |
| `private`   | 같은 클래스 안에서만 볼 수 있음 | 같은 파일 안에서만 볼 수 있음  |

- 코틀린을 자바로 변경시, private을 package-private로 컴파일합니다.

### 4.1.4 내부 클래스와 중첩된 클래스: 기본적으로 중첩 클래스

- 자바처럼 코틀린에서도 클래스 안에 다른 클래스를 선언할 수 있습니다.

```kt
class Button : View {
  override fun getCurrentState() : State = ButtonState()
  override fun restoreState(state: State) { /*...*/ }
  class ButtonState : State { /*...*/ }
}
```

- 자바와 코틀린의 중첩 클래스와 내부 클래스의 관계입니다.

| 클래스 B 안에 정의된 클래스 A                          | 자바             | 코틀린          |
| ------------------------------------------------------ | ---------------- | --------------- |
| 중첩 클래스(바깥쪽 클래스에 대한 참조를 저장하지 않음) | `static class A` | `class A`       |
| 내부 클래스(바깥쪽 클래스에 대한 참조를 저장함)        | `class A`        | `inner class A` |

- Inner 안에서 바깥쪽 클래스 Outer의 참조에 접근하려면 `this@Outer`라고 써야 합니다.

```kt
class Outer {
  inner class Inner {
    fun getOuterReference(): Outer = this@Outer
  }
}
```

### 4.1.5 봉인된 클래스: 클래스 계층 정의 시 계층 확장 제한

- 코틀린은 상위 클래스에 sealed 변경자를 통해 상위 클래스를 상속환 하위 클래스 정의를 제한할 수 있습니다.

```kt
sealed class Expr {
  class Num(val value: Int) : Expr()
  class Sum(val left: Expr, val right: Expr) : Expr()
}

fun eval(e: Expr): Int =
  when (e) {
    is Expr.Num -> e.value
    is Expr.Sum -> eval(e.right) + eval(e.left)
  }
```

<br/>

## 4.2 뻔하지 않은 생성자와 프로퍼티를 갖는 클래스 선언

- 코틀린은 주(primary) 생성자와 부(secondary) 생성자를 구분합니다.

### 4.2.1 클래스 초기화: 주 생성자와 초기화 블록

```kt
class User constructor(_nickname: String) { // 주 생성자
  val nickname: String
  init {    // 초기화 블록
    nickname = _nickname
  }
}
```

- `constructor` 키워드는 주 생성자나 부 생성자 정의를 시작할 때 사용하고, `init` 키워드는 초기화 블록을 시작합니다
- 초기화 블록은 주 생성자와 함께 사용됩니다.
- 클래스 정의 시 별도로 생성자를 정의하지 않으면 컴파일러가 자동으로 인자가 없는 디폴트 생성자를 만듭니다.
- 클래스를 외부에서 인스턴스화하지 못하게 하려면 private으로 만들면 됩니다.

### 4.2.2 뷰 생성자: 상위 클래스를 다른 방식으로 초기화

> 인자에 대한 디폴트 값을 제공하기 위해 부 생성자를 여러개 만들지 말고 파라미터의 디폴트 값을 생성자 시그니처에 명시해야 합니다.

- 생성자는 여러 필요한 경우가 있습니다.

```kt
open class View {
  constructor(ctx: Context) { /* 코드 */ }  // 부 생성자
  constructor(ctx: Context, attr: AttributeSet) { /* 코드 */ }  // 부 생성자
}
```

```kt
class MyButton: View {
  constructor(ctx: Context) : super(ctx) { /* 코드 */}
  constructor(ctx: Context, attr: AttributeSet) : super(ctx, attr) { /* 코드 */}
}
```

- 위는 생성자를 위임한 예시입니다.

### 4.2.3 인터페이스에 선언된 프로퍼티 구현

- 인터페이스는 아무 상태를 포함할 수 없으므로 상태를 저장할 필요가 있다면 인터페이스를 구현한 하위 클래스에서 상태 저장을 위한 프로퍼티를 만들어야 합니다.

```kt
class PrivateUser(override val nickname: String) : User // 주 생성자에 있는 프로퍼티
class SubscribingUser(val email: String) : User {
  override val nickname: String
    get() = email.substringBefore('@')  // 커스텀 게터
}
class FacebookUser(val accountId: Int) : User {
  override val nickname = getFacebookName(accountId)  // 프로퍼티 초기화 식
}
```

- 인터페이스에 선언된 프로퍼티와 달리 클래스에 구현된 프로퍼티는 뒷받침하는 필드를 원하는 대로 사용할 수 있습니다.

### 4.2.4 게터와 세터에서 뒷받침하는 필드에 접근

- 코틀린에서 프로퍼티의 값을 바꿀 때는 `user.address = "new value"`처럼 필드 설정 구문을 사용합니다.

```kt
// 새터에서 뒷받침하는 필드 접근
class User(val name: String) {
  var address: String = "unspecified"
    set(value: String) {
      println("""Address was changed for $name: "$field" -> "$value".""".trimIndent())
      field = value
    }
}
```

- 변경 가능 프로퍼티의 게터와세터 중 한쪽만 직접 정의해도 됩니다.

### 4.2.5 접근자의 가시성 변경

<br/>

## 4.3 컴파일러가 생성한 메서드: 데이터 클래스와 클래스 위임

### 4.3.1 모든 클래스가 정의해야 하는 메서드

### 4.3.2 데이터 클래스: 모든 클래스가 정의해야 하는 메서드 자동 생성

### 4.3.3 클래스 위임: by 키워드 사용

<br/>

## 4.4 object 클래스: 클래스 선언과 인스턴스 생성

### 4.4.1 객체 선언: 싱글턴을 쉽게 만들기

### 4.4.2 동반 객체: 팩토리 메서드와 정적 멤버가 들어갈 장소

### 4.4.3 동반 객체를 일반 객체처럼 사용

### 4.4.4 객체 식: 무명 내부 클래스를 다른 방식으로 작성

<br/>

## 4.5 요약
