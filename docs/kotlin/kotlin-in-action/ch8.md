---
sidebar_position: 8
---

# 8. 고차 함수: 파라미터와  반환 값으로 람다 사용

- 람다를 인자로 받거나 반환하는 함수인 고차원 함수(high order function)에 대해 이야기합니다.

## 8.1 고차 함수 정의

- 고차 함수는 다른 함수를 인자로 받거나 함수를 반환하는 함수입니다.

### 8.1.1 함수 타입

```kt
val sum = { x: Int, y: Int -> x + y }
val action = { println(42) }
```

- 코틀린 문법은 다음과 같습니다.

```kt
(Int, String) -> Unit
// (Int, String) : 파라미터 타입
// Unit : 반환 타입
```

- 다음과 같이 사용할 수 있습니다.

```kt
var canReturnNull: (Int, Int) -> Int? = { x, y -> null }
var funOrNull: ((Int, Int) -> Int)? = null
```

- 파라미터 이름은 타입 검사 시 무시됩니다.

### 8.1.2 인자로 받은 함수 호출

- filter의 선언은 다음과 같습니다.

```kt
fun String.filter(predicate: (Char) -> Boolean): String
// String.filter    : 수신 객체 타입
// predicate        : 파라미터 타입
// (Char) -> Boolean: 파라미터 함수 타입
// (Char)           : 파라미터로 받는 함수의 파라미터 타입
// Boolean          : 파라미터로 받는 함수의 반환 타입
```

- filter를 구현하면 다음과 같습니다.

```kt
fun String.filter(predicate: (Char) -> Boolean): String {
    val sb = StringBuilder()
    for(index in 0 until length) {
        val element = get(index)
        if (predicate(element)) sb.append(element)
    }
    return sb.toString()
}
println("ab1c".filter { it in 'a'...'z' })  // abc
```

### 8.1.3 자바에서 코틀린 함수 타입 사용

- 컴파일된 코드안에서 함수 타입은 일반 인터페이스로 바뀝니다.
- 함수 타입을 사용하는 코틀린 함수를 자바에서도 쉽게 호출할 수 있습니다.

```kt
fun processTheAnswer(f: (Int) -> Int) {
    println(f(42))
}
```

```java
processTheAnswer(number -> number + 1)  // 43
```

- 자바에서 코틀린 표준 라이브러리가 제공하는 람다를 인자로 받는 확장 함수를 쉽게 호출할 수는 있으나 코드가 깔끔하지는 않습니다.

```java
List<String> strings = new ArrayList<>();
strings.add("42");
CollectionsKt.forEach(strings. s -> {
    System.out.println(s);
    return Unit.INSTANCES;
})
```

### 8.1.4 디폴트 값을 지정한 함수 타입 파라미터나 널이 될 수 있는 함수 타입 파라미터

- 호출마다 람다를 넘기게 되면, 함수 호출을 오히려 불편하게 되는 경우가 있으나, 이 때는 파라미터에 대한 디폴트 값을 지정하면 이런 문제를 해결할 수 있습니다.

```kt
fun <T> Collection<T>.joinToString (
    separator: String = ", ",
    prefix: String = "",
    postfix: String = "",
    transform: (T) -> String = { it.toString() }
): String {
    val result = StringBuilder(prefix)
    for((index, element) in this.withIndex()) {
        if(index > 0) result.append(separator)
        result.append(transform(element))
    }
    result.append(postfix)
    return result.toString()
}
val letters = listOf("Alpha", "Beta")
println(letters.joinToString()) // Alpha, Beta
println(letters.joinToString { it.toLowerCase() })  // alpha, beta
println(letters.joinToString(separator = "!", postfix = "! ", ... transform = {it.toUpperCase() } ))    // ALPHA!, BETA!
```

- 안전 호출을 활용하면 다음과 같습니다.

```kt
fun <T> Collection<T>.joinToString (
    separator: String = ", ",
    prefix: String = "",
    postfix: String = "",
    transform: ((T) -> String)? = null
): String {
    val result = StringBuilder(prefix)
    for((index, element) in this.withIndex()) {
        if(index > 0) result.append(separator)
        val str = transform?.invoke(element) ?: element.toString()
        result.append(str)
    }
    result.append(postfix)
    return result.toString()
}
```

### 8.1.5 함수를 함수에서 반환

- 함수가 함수를 반환할 필요가 있는 경우보다는 함수가 함수를 인자로 받아야 할 필요가 있는 경우가 더 많습니다. 그렇지만 함수가 함수를 반환하는 유용합니다.

```kt
data class Person(
    val firstName: String,
    val lastName: String,
    val phoneNumber: String?
)

class ContactListFilters {
    var prefix: String = ""
    var onlyWithPhoneNumber: Boolean = false
    fun getPredicate(): (Person) -> Boolean {
        val startsWithPrefix = { p: Person -> 
            p.firstName.startsWith(prefix) || p.lastName.startsWith(prefix)
        } 
        if(!onlyWithPhoneNumber) {
            return startsWithPrefix
        }
        return { startsWithPrefix(it) && it.phoneNumber != null }
    }
}
val contacts = listOf(Person("Dmitry", "Jemerov", "123-4567"), Person("Svetlana", "Isakova", null))
val contactListFilters = ContactListFilters()
with (contactListFilters) {
    prefix = "Dm"
    onlyWithPhoneNumber = true    
}
println(contacts.filter(... contactListFilters.getPredicate()))
// [Person(firstName=Dmitry, lastName=Jemerov, phoneNumber=123-4567)]
```

- 고차 함수는 코드 구조를 개선하고 중복을 없앨 때 쓸 수 있는 강력한 도구입니다.

### 8.1.6 람다를 활용한 중복 제거

- 함수 타입과 람다 식은 재활용하기 좋은 코드를 만들 때 쓸 수 있는 좋은 도구입니다.
- 람다는 복잡한 구조를 만들어야만 피할 수 있는 코드 중복도 람다를 활용하면 간결하고 쉽게 제거할 수 있습니다.

```kt
val averageMobileDuration = log
    .filter { it.os in setOf(OS.IOS, OS.ANDROID) }
    .map(SiteVisit::duration)
    .average()
println(averageMobileDuration)  // 12.15
```

```kt
fun List<SiteVisit>.averageDurationFor(predicate: (SiteVisit) -> Boolean) =
        filter(predicate).map(SiteVisit::duration).average()
println(log.averageDurationFor { it.os in setOf(OS.ANDROID, OS.IOS) })  // 12.15
println(log.averageDurationFor { it.os == OS.IOS && it.path == "/signup" }) // 8.0
```

<br/>

## 8.2 인라인 함수: 람다의 부가 비용 없애기

### 8.2.1 인라이닝이 작동하는 방식

- 어떤 함수를 `inline`으로 선언하면 그 함수의 본문이 인라인이 됩니다.
- 즉, 함수를 호출하는 코드를 함수를 호출하는 바이트코드 대신에 함수 본문을 번역한 바이트 코드로 컴파일한다는 뜻입니다.

```kt
inline fun <T> synchronized(lock: Lock, action: () -> T) : T {
    lock.lock()
    try { return action() }
    finally { lock.unlock() }
}
val l = Lock()
synchronzied(l) { ... }
```

- 위 코드는 자바의 `synchronized` 와 동일합니다.
- 인라인 함수를 호출하는 코드 위치에서는 변수에 저장된 람다의 코드를 알 수 없습니다.
- 인라인 함수를 두 곳에서 각가 다른 람다를 사용해 호출한다면 두 호출은 각각 따로 인라이닝 됩니다.

> 인라인 함수란?
> - 성능 향상을 위한 것이며, 호출해서 실행이 아니라 코드 자체가 함수 내용이 된다.
> ```c++
> void PrintHello() { cout << "Hello, World!" << endl; }
> int main() {
>   PrintHello();
>   PrintHello();
>   return 0;
> }
> ```
> 다음과 같이 바뀌게 됩니다.
> ```c++
> int main() {
>   cout << "Hello, World!" << endl;
>   cout << "Hello, World!" << endl;
>   return 0;
> }
> ```

### 8.2.2 인라인 함수의 한계

- 인라이닝을 하는 방식으로는 람다를 사용하는 모든 함수를 인라이닝할 수 없습니다.
- 함수 본문에서 파라미터로 받은 람다를 호출한다면 그 호출을 쉽게 람다 본문으로 바꿀 수 있습니다.
- 하지만 파라미터로 받은 람다를 다른 변수에 저장하고 나중에 그 변수를 사용한다면 람다를 표현하는 객체가 어딘가 존재해야 하기 때문에 람다를 인라이닝할 수 없습니다.
- 일반적으로 인라인 함수의 본문에서 람다 식을 바로 호출하거나 람다 식을 인자로 전달받아 바로 호출하는 경우에는 그 람다를 인라이닝할 수 있으나, 안되는 경우는 `Illegal usage of inline-parameter`라는 메시지와 함께 금지시킵니다.
- 인라인을 허용하고, 금지하는 경우는 다음과 같이 진행할 수 있습니다.

```kt
inline fun foo(inlined: () -> Unit, noinline notInlined: () -> Unit) {
    // ...
}
```

- 코틀린에서는 어떤 모듈이나 서드파티 라이브러리 안에서 인라인 함수를 정의하고 그 모듈이나 라이브러리 밖에서 해당 인라인 함수를 사용할 수 있습니다.
- 자바에서도 코틀린에서 정의한 인라인 함수를 호출할 수 있으나, 일반 함수 호출로 컴파일합니다.

### 8.2.3 컬렉션 연산 인라이닝

- 코틀린 표준 라이브러리의 컬렉션 함수는 대부분 람다를 인자로 받습니다. 표준 라이브러리 함수가 아니라 직접 연산이 더 효율적으로 볼 수도 있습니다.

```kt
// 람다를 사용해 컬렉션 거르기
data class Person(val name: String, val age: Int)
val people = listOf(Person("Alice", 29), Person("Bob", 31))
println(people.filter{ it.age < 30 })   // [Person(name=Alice, age=29)]
```

```kt
// 컬렉션을 직접 거르기
val result = mutableListOf<Person>()
for(person in people) { 
    if(person.age < 30) result.add(person)
}
println(result) // [Person(name=Alice, age=29)]
```

- 시퀀스를 통해 성능을 향상시킬 수 있는 경우는 컬렉션 크기가 큰 경우뿐이며, 작은 경우는 컬렉션을 사용하는 것이 좋습니다.

### 8.2.4 함수를 인라인으로 선언해야 하는 경우

- `inline` 키워드를 사용해도 람다를 인자로 받는 함수만 성능이 좋아질 가능성이 높습니다.
- 일반 함수 호출의 경우 JVM은 이미 강력하게 인라이닝을 지원합니다. JVM은 코드 실행을 분석해서 가장 이익이 되는 방향으로 호출을 인라이닝합니다.
- 람다를 인자로 받는 함수를 인라이닝하면 이익이 많습니다.
  - 1) 인라이닝을 통해 없앨 수 있는 부가 비용이 상당합니다. 
  - 2) 현재의 JVM은 함수 호출과 람다를 인라이닝해 줄 정도로 똑똑하지 못합니다.
  - 3) 인라이닝을 사용하면 일반 람다에서는 사용할 수 없는 몇 가지 기능을 사용할 수 있습니다.
- `inline` 변경자를 함수에 붙일 때는 코드 크기에 주의를 기울여야 합니다.
  - 인라이닝하는 함수가 큰 경우 함수의 본문에 해당하는 바이트코드를 모든 호출 지점에 복사해 넣고 나면 바이트코드가 전체적으로 아주 커집니다.

### 8.2.5 자원 관리를 위해 인라인된 람다 사용

- 람다로 중복을 없앨 수 있는 일반적인 패턴 중 한개는 작업을 하기 전에 자원을 획득하고 작업을 마친 후 자원을 해제하는 자원 관리입니다.
  - **자원(resource)** 는 파일, 락, 데이터베이스 트랜잭션 등 여러 다른 대상을 가리킬 수 있습니다.
  - 일반적으로 사용하는 `try/finally` 문을 사용하여 `try` 블록을 시작하기 직전에 자원을 획득하고 `finally` 블록에서 자원을 해제하는 것입니다.

```kt
// 코틀린 라이브러리에 있는 withLock 함수 정의
fun <T> Lock.withLock(action: () -> T): T {
    lock()
    try {
        return action()
    } finally {
        unlock()
    }
}
```

- 코틀린에서는 함수 타입의 값을 파라미터로 받는 함수를 통해 자원등을 매끄럽게 처리할 수 있으며, 이와 같은 기능을 언어 구성 요소로 제공하지 않습니다.
- 자바 `try-with-resource` 와 같은 기능을 제공하는 `use` 함수가 코틀린 표준 라이브러리 안에 들어있습니다.

```kt
fun readFirstLineFromFile(path: String): String {
    BufferedReader(FileReader(path)).use {br ->
        return br.readLine()
    }
}
```

- `use` 함수는 닫을 수 있는(closeable) 자원에 대한 확장 함수며, 람다를 인자로 받습니다.

<br/>

## 8.3 고차 함수 안에서 흐름 제어

### 8.3.1 람다 안의 return문: 람다를 둘러싼 함수로부터 반환

```kt
fun lookForAlice(people: List<Person>) {
    people.forEach {
        if (it.name == "Alice") {
            println("Found!")
            return
        }
    }
    println("Alice is not found")
}
```

- 자신을 둘러싸고 있는 블록보다 더 바깥에 있는 다른 블록을 반환하게 만드는 `return`문을 **넌로컬(non-local)return** 이라 부릅니다.
- `return`이 바깥쪽 함수를 반환시킬 수 있는 때는 람다를 인자로 받는 함수가 인라인 함수인 경우일 뿐입니다.

### 8.3.2 람다로부터 반환: 레이블을 사용한 return

- 람다식에서도 **로컬(local) return**을 사용할 수 있습니다.

```kt
fun lookForAlice(people: List<Person>) {
    people.forEach {
        if(it.name == "Alice") return@forEach   // return@forEach는 람다식으로부터 반환시킵니다.
    }
    println("Alice might be somewhere")
}
```

- 람다 식에는 레이블이 2개 이상 붙을 수 없습니다.
- 넌로컬 반환문은 장황하고, 람다 안의 여러 위치에 return 식이 들어가야하는 경우 사용하기 불편합니다. 이때는 무명 함수를 사용합니다.

### 8.3.3 무명 함수: 기본적으로 로컬 return

```kt
// 무명 함수 안에서 return 사용하기
fun lookForAlice(people: List<Perosn>) {
    people.forEach(fun (person) {
        if (person.name == "Alice") return
        println("${person.name} is not Alice")
    })
}
lookForAlice (people)   // Bob is not Alice
```

- 무명 함수는 일반 함수와 비슷해 보이며, 차이는 함수 이름이나 파라미터 타입을 생략할 수 있다는 점입니다.

```kt
// filter에 무명 함수 넘기기
people.filter(fun (person): Boolean {
    return person.age < 30
})
```

- 무명 함수도 일반 함수와 같은 반환 타입 지정 규칙을 따릅니다.

```kt
// 식이 본문인 무명 함수 사용하기
people.filter(fun (person) = person.age < 30)
```

- 무명 함수 안에서 레이블이 붙지 않은 return 식은 무명 함수 자체를 반환시킬 뿐 무명 함수를 둘러싼 다른 함수를 반환시키지 않습니다.
- 무명 함수 본문의 return은 무명 함수를 반환시키고, 무명 함수 밖의 다른 함수를 반환시키지 못합니다.

<br/>

## 8.4 요약

- 함수 타입을 사용해 함수에 대한 참조를 담는 변수나 파라미터나 반환 값을 만들 수 있습니다.
- 고차 함수는 다른 함수를 인자로 받거나 함수를 반환합니다. 함수의 파라미터 타입이나 반환 타입으로 함수 타입을 사용하면 고차 함수를 선언할 수 있습니다.
- 인라인 함수를 컴파일할 때 컴파일러는 그 함수의 본문과 그 함수에게 전달된 람다의 본문을 컴파일한 바이트코드를 모든 함수 호출 지점에 삽입해줍니다. 이렇게 만들어지는 바이트코드는 람다를 활용한 인라인 함수 코드를 풀어서 직접 쓴 경우와 비교할 때 아무 부가 비용이 들지 않습니다.
- 고차 함수를 사용하면 컴포넌트를 이루는 각 부분의 코드를 더 잘 재사용할 수 있습니다. 또 고차 함수를 활용해 강력한 제네릭 라이브러리를 만들 수 있습니다.
- 인라인 함수에서는 람다 안에 있는 `return`문이 바깥쪽 함수를 반환시키는 넌 로컬 `return` 을 사용할 수 있습니다.
- 무명 함수는 람다 식을 대신할 수 있으며 `return` 식을 처리하는 규칙이 일반 람다 식과는 다릅니다. 본문 여러 곳에서 `return`해야 하는 코드 블록을 만들어야한다면 람다 대신 무명 함수를 쓸 수 있습니다.