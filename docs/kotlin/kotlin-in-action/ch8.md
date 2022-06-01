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

### 8.2.2 인라인 함수의 한계

### 8.2.3 컬렉션 연산 인라이닝

### 8.2.4 함수를 인라인으로 선언해야 하는 경우

### 8.2.5 자원 관리를 위해 인라인된 람다 사용

<br/>

## 8.3 고차 함수 안에서 흐름 제어

### 8.3.1 람다 안의 return문: 람다를 둘러싼 함수로부터 반환

### 8.3.2 람다로부터 반환: 레이블을 사용한 return

### 8.3.3 무명 함수: 기본적으로 로컬 return


<br/>

## 8.4 요약