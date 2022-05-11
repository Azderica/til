---
sidebar_position: 5
---

# 5. 람다로 프로그래밍

## 5.1 람다 식과 멤버 참조

### 5.1.1 람다 소개: 코드 블록을 함수 인자로 넘기기

- 무명 내부 클래스를 코드를 함수에 넘기거나 변수에 저장할 수 있지만 상당히 번거로우나, 함수형 프로그래밍에서는 함수를 값처럼 다루면서 문제를 해결합니다.

```java
// 무명 클래스
button.setOnClickListener(new OnClickListener() {
  @Override
  public void onClick(View view) { /* 클릭시 수행할 동작 */ }
})
```

```kt
button.setOnClickListener{ /* 클릭시 수행할 동작 */ }
```

- 람다를 메서드가 하나뿐인 무명 객체 대신 사용할 수 있습니다.

### 5.1.2 람다와 컬렉션

- 코드에서 중복을 제거하는 것은 프로그래밍 스타일을 개선하는 중요한 방법 중 하나입니다.
- 때로는 람다를 멤버 참조로 대치가 가능합니다.

```kt
val people = listOf(Person("Alice", 29), Person("Bob", 31))
println(people.maxBy{ it.age })
```

```kt
people.maxBy(Person::age)
```

### 5.1.3 람다 식의 문법

- 람다 식을 선언하는 문법은 다음과 같습니다.

```kt
{ x: Int, y: Int -> x + y }
// x: Int, y: Int : 파라미터
// x + y : 본문
```

- 코드의 일부분을 블록으로 둘러싸 실행할 필요가 있다면 `run`을 사용합니다.

```kt
people.maxBy({ p: Person -> p.age })
```

- 람다가 함수의 유일한 인자라면 괄호 없이 람다를 쓰는 것이 좋은 방법 중 하나입니다.

```kt
people.maxBy { p: Person -> p.age } // 파라미터 타입을 명시
people.maxBy { p -> p.age } // 파라미터 타입을 생략
```

- 파라미터 중 일부의 타입은 지정하고 나머지 파라미터는 타입을 지정하지 않고 이름만 남겨둬도 됩니다.
- 람다의 파라미터 이름을 디폴트 이름인 `it`으로 바꾸면 람다 식을 더 간단하게 만들 수 있습니다.

```kt
people.maxBy { it.age }
```

### 5.1.4 현재 영역에 있는 변수에 접근

- 자바 메서드 안에서 무명 내부 클래스를 정의할 때 메서드의 로컬 변수를 무명 내부 클래스에서 사용할 수 있습니다.

```kt
fun printMessagesWithPrefix(messages: Collection<String>, prefix: String) {
  messages.forEach { println("$prefix $it") }
}
```

- 자바와 다른 점 중 중요한 한 가지는 코틀린 람다 안에서 파이널 변수가 아닌 변수에 접근할 수 없습니다.

```kt
fun printProblemCounts(responses: Collection<String>) {
  var clientErrors = 0
  var serverErrors = 0
  responses.forEach {
    if(it.startsWith("4")) {
      clientErrors++
    } else if(it.startsWith("5")) {
      serverErrors++
    }
  }
  println("$clientErrors client errors, $serverErrors server errors")
}
```

- 코틀린에서는 자바와 달리 람다에서 람다 밖 함수에 있는 파이널이 아닌 변수에 접근할 수 있고, 그 변수를 변경할 수 있습니다.

### 5.1.5 멤버 참조

- 코틀린에서는 자바 8과 마찬가지로 함수를 값으로 바꿀 수 있습니다.
- `::`를 사용하는 식을 멤버 참조(member references)라고 부릅니다.

```kt
Person::age
// Person : 클래스
// age : 멤버
```

```kt
people.maxBy {Person::age}
people.maxBy {p -> p.age}
people.maxBy {it.age}
```

- **생성자 참조(constructor reference)**를 사용하면 클래스 생성 작업을 연기하거나 저장해둘 수 있습니다.

```kt
val createPerson = ::Person
val p = createPerson("Alice", 29)
println(p)
```

> 바운드 멤버 참조

- 바운드 멤버 참조를 사용하면 멤버 참조를 생성할 때 클래스 인스턴스를 함께 저장한 다음 나중에 인스턴스에 대해 멤버를 호출해줍니다.

```kt
val p = Person("Dmitry", 34)
val dmitrysAgeFunction = p::age
println(dmitrysAgeFunction())
```

<br/>

## 5.2 컬렉션 함수형 API

### 5.2.1 필수적인 함수: filter와 map

```kt
// filter 예제
val people = listOf(Person("Alice", 29), Person("Bob", 31))
println(people.filter{it.age > 30}) // [Person(name=Bob, age=31)]

// map 예제
val list = listOf(1, 2, 3, 4)
println(list.map{it * it})  // {1, 4, 9, 16}
```

### 5.2.2 all, any, count, find,: 컬렉션에 술어 적용

```kt
val canBeInClub27 = { p: Person -> p.age <= 27 }
val people = listOf(Person("Alice", 27), Person("Bob", 31))

// all 예시
println(people.all(canBeInClub27))  // false

// any 예시
println(people.any(canBeInClub27))  // true

// count 예시
println(people.count(canBeInClub27))  // 1

// find 예시
println(people.find(canBeInClub27))  // Person(name=Alice, age=27)
```

### 5.2.3 groupBy: 리스트를 여러 그룹으로 이뤄진 맵으로 변경

```kt
// groupBy
val people = listOf(Person("Alice", 31), Person("Bob", 29), Person("Carol", 31))
println(people.groupBy{ it.age }) // 29=[Person(name=Bob, age=29)], 31=[...]

val list = listOf("a", "ab", "b")
println(list.groupBy(String::first))  // a=[a, ab], b=[b]
```

### 5.2.4 flatMap과 flatten: 중첩된 컬렉션 안의 원소처리

-`flatMap` 함수는 인자로 주어진 람다를 컬렉션의 모든 객체에 적용하고 람다를 적용한 결과 얻어지는 여러 리스트를 한 리스트로 모읍니다.

```kt
val strings = listOf("abc", "def")
println(strings.flatMap{ it.toList() }) // [a, b, c, d, e, f]
// map 과 flatten 함수를 적용한 결과입니다.
```

- 특별히 변환해야 할 내용이 없는 경우, 리스트를 평평하게 펼치면 되는 `flatten` 함수를 사용할 수 있습니다.

<br/>

## 5.3 지연 계산(lazy) 컬렉선 연산

- `map`이나 `filter` 같은 몇 가지 컬렉션 함수는 결과 컬렉션을 **즉시(eagerly)** 생성합니다.
- 효율적으로 사용하기 위해서는 시퀀스를 사용하는 것이 중요합니다.

```kt
// 성능에 이점이 있습니다.
people.asSequence()
  .map(Person::name)
  .filter { it.startsWith("A")}
  .toList()
```

> 큰 컬렉션에 대해서 연산을 연쇄시킬 때는 시퀀스를 사용하는 것을 규칙으로 삼습니다.

### 5.3.1 시퀀스 연산 실행: 중간연산과 최종 연산

- 시퀀스에 대한 연산은 **중간(intermediate) 연산**과 **최종(terminal) 연산**으로 나뉩니다.

```kt
sequence.map {...}.filter {...}.toList()
// map {...}.filter {...} : 중간 연산
// toList() : 최종 연산
```

- 시퀀스를 사용하면 지연 계산으로 인해 원소 중 일부의 계산이 이뤄지지는 않습니다.
- 컬렉션에 대해 수행하는 연산의 순서도 성능에 영향을 끼칩니다.

> > 자바 스트림과 코틀린 시퀀스의 개념이 비슷합니다.

### 5.3.2 시퀀스 만들기

- 시퀀스를 만드는 예제로 `asSequence()`를 호출할 수도 잇고, `generateSequence` 함수를 사용할 수도 있습니다.

```kt
fun File.isInsideHiddenDirectory() =
    generateSequence(this) { it.parentFile }.any {it.isHidden}
val file = File("/Users/svtk/.HiddenDir/a.txt")
println(file.isInsideHiddenDirectory())   // true
```

<br/>

## 5.4 자바 함수형 인터페이스 활용

- 코틀린에서는 무명 클래스 인스턴스 대신 람다를 넘길 수 있습니다.

```kt
button.setOnClickListener {view -> ...}
```

- 위의 코드가작동하는 이유는 추상 메서드가 단 하나만 있기 때문이며, 이러한 인터페이스를 **함수형 인터페이스(functional interface)** 혹은 **SAM 인터페이스(single abstract method interface)**라고 합니다.
- 자바와 달리 코틀린에는 함수 타입이 존재합니다.

### 5.4.1 자바 메서드에 람다를 인자로 전달

- 함수형 인터페이스를 인자로 원하는 자바 메서드에 코틀린 람다를 전달할 수 있습니다.

```kt
postponeComputation(1000, object : Runnable {
  // 객체 식을 함수형 인터페이스 구현으로 넘깁니다.
  override fun run() {
    println(42)
  }
})
```

- 람다와 무명 객체 사이에는 차이가 있습니다. 객체를 명시적으로 선언하는 경우 메서드를 호출할 때마다 새로운 객체가 생성됩니다. 람다는 반복 사용합니다.

```kt
val runnable = Runnable { println(42) }
fun handleComputation() {
  postponeComputation(1000, runnable)
}
```

> 코틀린 1.0에서 인라인(inline) 되지 않은 모든 람다 식은 무명 클래스로 컴파일됩니다.

- 대부분의 경우, 람다와 자바 함수형 인터페이스 사이의 변환은 자동으로 이뤄집니다.

### 5.4.2 SAM 생성자: 람다를 함수형 인터페이스로 명시적으로 변경

- SAM 생성자는 람다를 함수형 인터페이스의 인스턴스로 변환할 수 있게 컴파일러가 자동으로 생성한 함수입니다.

```kt
fun createAllDoneRunnable(): Runnable {
  return Runnable { println("All done!) }
}
createAllDoneRunnable().run()
```

- 람다로 생성한 함수형 인터페이스 인스턴스를 변수에 저장해야 하는 경우에도 SAM 생성자를 사용할 수 있습니다.

```kt
val listener = OnClickListener { view ->
  val text = when (view.id) { // view.id를 사용해 어떤 버튼이 클릭됐는지 판단합니다.
    R.id.button1 -> "First button"
    R.id.button2 -> "Second button"
    else -> "Unknown button"
  }
  toast(text) // "text"의값을 사용자에게 보여줍니다.
}
```

- 람다에는 무명 객체와 달리 인스턴스 자신을 가리키는 `this`가 없습니다.
- 람다안에서 `this` 는 그 람다를 둘러싼 클래스의 인스턴스를 가리킵니다.
- 이벤트 리스너가 이벤트를 처리하다가 자기 자신의 리스너 등록을 해제해야 한다면 람다를 사용할 수 없으므로, 무명 객체를 통해 리스너를 구현해야 합니다.

<br/>

## 5.5 수신 객체 지정 람다: with와 apply

- 수신 객체를 명시하지 않고 람다의 본문 안에서 다른 객체의 메서드를 호출할 수 있게 하는 것입니다. 이러한 람다를 `수신 객체 지정 람다(lambda with receiver)` 라고 부릅니다.

### 5.5.1 with 함수

```kt
// 알파벳 만들기
fun alphabet(): String {
  val result = StringBuilder()
  for(letter in 'A'..'Z') {
    result.append(letter)
  }
  result.append("\nNow I know the alphabet!")
  return result.toString()
}
```

```kt
// with을 사용해 알파벳 만들기
fun alphabet(): String {
  val stringBuilder = StringBuilder()
  return with(StringBuilder) {  // 메서드를 호출하려는 수신 객체를 지정합니다.
    for(letter in 'A'..'Z') {
      this.append(letter)       // `this`를 명시해서 앞에서 지정한 수신 객체의 메서드를 호출합니다.
    }
    append("\nNow I know the alphabet!")  // `this`를 생략하고 메서드를 호출합니다.
    this.toString()   // 람다에서 값을 반환합니다.
  }
}
```

- with 함수는 첫번째 인자로 받은 객체를 두 번째 인자로 받은 람다의 수신 객체로 만듭니다.

> 수신 객체 지정 람다와 확장 함수 비교

| 일반 함수 | 일반 람다           |
| --------- | ------------------- |
| 확장함수  | 수신 객체 지정 람다 |

> - 람다는 일반 함수와 비슷한 동작을 정의하는 한 방법입니다.

```kt
// with을 사용해 알파벳 만들기
fun alphabet() = with(StringBuilder()) {
  for(letter in 'A'..'Z') {
    append(letter)
  }
  append("\nNow I know the alphabet!")
  toString()
}
```

- 불필요한 stringBuilder 변수를 없애면 alphabet 함수가 식의 결과를 바로 반환하게 됩니다.

> 메서드 이름 충돌

> - 바깥쪽 클래스에 정의된 함수를 사용하고 싶으면, `this@OuterClass.method()`와 같이 사용해야합니다.

### 5.5.2 apply 함수

- apply 함수는 거의 with과 같으나, 항상 자신에게 전달된 객체를 반환한다는 점입니다.

```kt
// apply을 사용해 알파벳 만들기
fun alphabet() = StringBuilder().apply {
    for(letter in 'A'..'Z') {
      append(letter)
    }
    append("\nNow I know the alphabet!")
  }.toString()
```

- with과 apply는 수신 객체 지정 람다를 사용하는 일반적인 예제 중 하나입니다.

<br/>

## 5.6 요약

- 람다를 사용하면 코드 조각을 다른 함수에게 인자로 넘길 수 있습니다.
- 코틀린에서는 람다가 함수 인자인 경우 괄호 밖으로 람다를 빼낼 수 있고, 람다의 인자가 단 하나뿐인 경우 인자 이름을 지정하지 않고 `it`이라는 디폴트 이름으로 부를 수 있습니다.
- 람다 안에 있는 코드는 그 람다가 들어있는 바깥 함수의 변수를 읽거나 쓸 수 있습니다.
- 메서드, 생성자, 프로퍼티의 이름 앞에 ::을 붙이면 각각에 대한 참조를 맏르 수 있습니다. 이러한 참조를 람다 대신 다른 함수에게 넘길 수 있습니다.
- `filter, map, all, any` 등의 함수를 활용하면 컬렉션에 대한 대부분의 연산을 직접 원소를 이터레이션하지 않고 수행할 수 있습니다.
- 시퀀스를 사용하면 중간 결과를 담는 컬렉션을 생성하지 않고도 컬렉션에 대한 여러 연산을 조합할 수 있습니다.
- 함수형 인터페이스를 인자로 받는 자바 함수를 호출할 경우 람다를 함수형 인터페이스 인자 대신 넘길 수 있습니다.
- 수신 객체 지정 람다를 사용하면 람다 안에서 미리 정해둔 수신 객체의 메서드를 직접 호출할 수 있습니다.
- 표준 라이브러리의 `with` 함수를 사용하면 어떤 객체에 대한 참조를 반복해서 언급하지 않으면서 그 객체의 메서드를 호출할 수 있습니다. `apply`를 사용하면 어떤 객체라도 빌더 스타일의 API를 사용해 생성하고 초기화할 수 있습니다.
