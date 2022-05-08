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

### 5.3.1 시퀀스 연산 실행: 중간연산과 최종 연산

### 5.3.2 시퀀스 만들기

<br/>

## 5.4 자바 함수형 인터페이스 활용

### 5.4.1 자바 메서드에 람다를 인자로 전달

### 5.4.2 SAM 생성자: 람다를 함수형 인터페이스로 명시적으로 변경

<br/>

## 5.5 수신 객체 지정 람다: with와 apply

### 5.5.1 with 함수

### 5.5.2 apply 함수

<br/>

## 5.6 요약
