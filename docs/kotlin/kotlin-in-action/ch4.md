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
      println("""
        Address was changed for $name:
        "$field" -> "$value".""".trimIndent())
      field = value
    }
}
```

- 변경 가능 프로퍼티의 게터와세터 중 한쪽만 직접 정의해도 됩니다.

### 4.2.5 접근자의 가시성 변경

- `get`이나 `set` 앞에 가시성 변경자를 추가해서 접근성의 가시성을 변경할 수 있습니다.

```kt
// 비공개 세터가 있는 프로퍼티 선언하기
class LengthCounter {
  var counter: Int = 0
    private set
  fun addWord(word: String) {
    counter += word.length
  }
}
```

<br/>

## 4.3 컴파일러가 생성한 메서드: 데이터 클래스와 클래스 위임

- 코틀린은 유용한 메서드를 자동으로 만들어주는 예와 클래스 위임 패턴을 아주 간단하게 쓸 수 있게 해줍니다.

### 4.3.1 모든 클래스가 정의해야 하는 메서드

- 자바와 마찬가지로 코틀린 클래스도 `toString, equals, hashCode` 등을 오버라이드할 수 있습니다.

```kt
class Client(val name: String, val postalCode: Int) {
  // equals
  override fun equals(other: Any?): Boolean {
    if(other == null || other !is Client)
      return false
    return name == other.name && postalCode == other.postalCode
  }

  // toString
  override fun toString() = "client(name=$name, postalCode=$postalCode)"

  // hashCode
  override fun hashCode(): Int = name.hashCode() * 31 + postalCode
}
```

### 4.3.2 데이터 클래스: 모든 클래스가 정의해야 하는 메서드 자동 생성

```kt
data class Client(val name: String, val postalCode: Int)
```

- 자바에서 요구하는 모든 메서드를 포함합니다.
  - 인스턴스 간 비교를 위한 equals
  - Hashmap과 같은 해시 기반 컨테이너에서 키로 사용할 수 있는 hashCode
  - 클래스의 각 필드를 선언 순서대로 표시하는 문자열 표현을 만들어주는 toString

#### 데이터 클래스와 불면성: copy() 메서드

- 데이터 클래스의 프로퍼티가 꼭 val일 필요는 없으나, 데이터 클래스의 모든 프로퍼티를 읽기 전용으로 만들어서 데이터 클래스를 불변 클래스로 만드는 것이 권장됩니다.
- 이 대표적인 예시로 `copy`메서드이며 객체를 복사하면서 일부 프로퍼티를 바꿀 수 있습니다.

```kt
val lee = Client("lee", 4122)
println(lee.copy(postalCode = 4000))
```

### 4.3.3 클래스 위임: by 키워드 사용

- 대규모 객체지향 시스템을 설계할 때 시스템을 취약하게 하는 문제는 보통 **구현 상속(implementation inheritance)** 에 의해 발생합니다.
- 하위 클래스가 상위 클래스의 메서드 중 일부를 오버라이드하면 하위 클래스는 상위 클래스의 세부 구현 사항에 의존합니다.
- 코틀린은 위의 문제를 해결하기 위해 기본적으로 클래스를 `final`로 취급합니다.
  - 상속을 염두에 두고 open 변경자로 열어둔 클래스만 확장할 수 있습니다.
- 상속을 허용하지 않는 클래스에 새로운 동작을 추가할 때가 있으며 이때 `데코레이터(Decorator)` 패턴을 사용합니다.
  - 상속을 허용하지 않는 클래스 대신 사용할 수 있는 새로운 클래스를 만들되 기존 클래스와 같은 인터페이스를 데코레이터가 제공하게 만들고, 기존 클래스를 데코레이터 내부에 필드로 유지합니다.
  - **새로 정의해야 하는 기능은 데코레이터의 메서드에 새로 정의하고 기존 기능이 그대로 필요한 부분은 데코레이터의 메서드가 기존 클래스의 메서드에게 요청을 전달**합니다.
- by 키워드를 통해 인터페이스에 대한 구현을 다른 객체에 위임중을 명시할 수 있습니다.

```kt
class DelegatingCollection<T> {
  innerList: Collection<T> = ArrayList<T>()
} : Collection<T> by innerList()
```

- 불필요한 메서드 정의를 위처럼 없앨 수 있습니다.

```kt
class CountingSet<T> {
  val innerSet: MutableCollection<T> = HashSet<T>()
} : MutableCollection<T> by innerSet {
  var objectAdded = 0
  override fun add(element: T): Boolean {
    objectsAdded++
    return innerSet.add(element)
  }
  override fun addAll(c: Collection<T>): Boolean {
    objectsAdded += c.size
    return innerSet.addAll(c)
  }
}
```

- 이 경우는 구현 방식에 대한 의존관계가 생기지 않는 장점이 있습니다.

<br/>

## 4.4 object 클래스: 클래스 선언과 인스턴스 생성

- object 키워드를 사용하는 여러 상황을 살펴봐야합니다.
  - 객체 선언(object declaration)
  - 동반 객체(companion object)
  - 객체 식은 자바의 무명 내부 클래스(anonymous inner class) 대신 사용합니다.

### 4.4.1 객체 선언: 싱글턴을 쉽게 만들기

- 객체지향 시스템을 설계하다 보면 인스턴스가 하나만 필요한 클래스가 유용한 경우가 많습니다.
- 코틀린은 `객체 선언` 기능을 통해 싱글턴을 언어에서 기본 지원합니다.
  - 객체 선언은 클래스 선언과 그 클래스에 속한 단일 인스턴스의 선언을 합친 선언입니다.

```kt
// 객체 선언을 사용해 Comparator 구현
object CaseInsensitiveFileComparator : Comparator<File> {
  override fun compare(file1: File, file2: File): Int {
    return file1.path.compareTo(file2.path, ignoreCase = true)
  }
}
```

- 싱글턴 패턴과 마찬가지 이유로 대규모 소프트웨어 시스템에서는 객체 선언이 항상 적합하지는 않습니다.

```kt
data class Person(val name: String) {
  object NameComparator : Comparator<Person> {
    override fun compare(p1: Person, p2: Person): Int = p1.name.compareTo(p2.name)
  }
}
```

### 4.4.2 동반 객체: 팩토리 메서드와 정적 멤버가 들어갈 장소

- 코틀린 클래스 안에는 정적인 멤버가 없으며 자바의 static 키워드를 지원하지 않스빈다. 대신 패키지 수준의 최상위 함수와 객체 선언을 활용합니다.
- 최상위 함수는 private 클래스에 접근할 수 없스빈다.
- 내부 정보에 접근이 필요한 경우 중첩된 객체 선언의 멤버 함수로 정의해야 합니다.
  - 대표적인 예시로 팩토리 메서드를 예시로 들 수 있습니다.

```kt
// 부 생성자를 팩토리 메서드로 대신하기
class User private constructor(val nickname: String) {  // 주 생성자를 비공개로 만듦
  companion object {  // 동반 객체 선언
    fun newSubscribingUser(email: String) = User(email.substringBefore('@'))
    fun newFacebookUser(accountId: Int) = User(getFacebookName(accountId))
  }
}
```

- **팩토리 메서드**는 목적에 따라 이름을 정할 수 있으며, 선언된 클래스의 하위 클래스 객체도 반환이 가능합니다.

### 4.4.3 동반 객체를 일반 객체처럼 사용

- 동반 객체는 클래스 안에 정의된 일반 객체입니다.

```kt
class Person(val name: String) {
  companion object Loader { // 동반 객체에 이름을 붙입니다.
    fun fromJson(jsonText: String): Person = ...
  }
}
```

- 동반 객체도 인터페이스를 구현할 수 있습니다.

```kt
interface JSONFactory<T> {
  fun fromJSON(jsonText: String): T
}
class Person(val name: String) {
  companion object : JSONFactory<Person> { // 동반 객체가 인터페이스를 구현합니다.
    override fun fromJson(jsonText: String): Person = ...
  }
}
```

- 클래스에 동반 객체가 있으면 그 객체 안에 함수를 정의함으로써 클래스에 대해 호출할 수 있는 확장 함수를 만들 수 있습니다.

```kt
// 비지니스 모듈
class Person(val firstName: String, val lastName: String) {
  companion object {}
}

// 클라이언트/서버 통신 모듈
fun Person.Companion.fromJSON(json: String): Person { // 확장함수 선언
  ...
}
```

### 4.4.4 객체 식: 무명 내부 클래스를 다른 방식으로 작성

- 무명 객체(anonymous object)를 정의할 때 object 키워드를 사용합니다.

```kt
// 무명 객체로 이벤트 리스너 구현
window.addMouseListener(  // MouseAdapter를 확장하는 무명 객체를 선언합니다.
  object : MouseAdapter() {
    // MouseAdapter의 메서드 오버라이드
    override fun mouseClicked(e: MouseEvent) {
      // ...
    }
    override fun mouseEntered(e: MouseEvent) {
      // ...
    }
  }
)
```

> 객체 선언과 달리 무명 객체는 싱클턴이 아니며, 객체 식이 쓰일 때마다 새로운 인스턴스가 생성됩니다.

- 무명 객체 식 안에서 변수의 값을 변경할 수도 있습니다.

```kt
fun countClicks(window: Window) {
  var clickCount = 0
  window.addMouseListener(object: MouseAdapter() {
    override fun mouseClicked(e: MouseEvent) {
      clickCount++
    }
  })
}
```

> 객체 식은 무명 객체 안에서 여러 메서드를 오버라이드해야하는 경우에 유용합니다.

<br/>

## 4.5 요약

- 코틀린의 인터페이스는 디폴트 구현을 포함할 수 있고 프로퍼티도 포함할 수 있습니다.
- 모든 코틀린 선언은 기본적으로 final이며 public입니다.
- 선언이 final이 되지 않게 만들려면 앞에 open을 붙여야합니다.
- internal 선언은 같은 모듈안에서만 볼 수 있습니다.
- 중첩 클래스는 기본적으로 내부 클래스가 압니다. 바깥쪽 클래스에 대한 참조를 중첩 클래스 안에 포함시키려면 inner 키워드를 중첩 클래스 선언 앞에 붙여서 내부 클래스로 만들어야합니다.
- sealed 클래스를 사용하는 클래스를 정의하려면 반드시 부모 클래스 정의 안에 중첩 클래스로 정의해야합니다.
- 초기화 클록과 부 생성자를 활용해 클래스 인스턴스를 더 유연하게 초기화할 수 있습니다.
- field 식별자를 통해 프로퍼티 접근자(게터/세터) 안에서 프로퍼티의 데이터를 저장하는 데 쓰이는 뒷받침하는 필드를 참조할 수 있습니다.
- 데이터 클래스를 사용하면 컴파일러가 equals, hashCode, toString, copy 등의 메서드를 자동으로 생성해줍니다.
- 클래스 위임을 사용하면 위임 패턴을 구현할 때 필요한 수많은 성가신 준비 코드를 줄일 수 있습니다.
- 객체 선언을 사용하면 코틀린답게 싱글턴 클래스를 정의할 수 있습니다.
- 동반 객체는 자바의 정적 메서드와 필드 정의를 대신합니다.
- 동반 객체도 인터페이스를 구현할 수 있습니다.
- 코틀린의 객체 식은 자바의 무명 내부 클래스를 대신합니다.
