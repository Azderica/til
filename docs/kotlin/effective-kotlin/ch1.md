---
sidebar_position: 1
---

# 1. 안정성

- 코틀린의 가장 큰 장점은 안정성(safety)입니다.
- 이를 잘 하기위해서는 개발자가 뒷받침을 해주어야 합니다.

> '즉. 오류가 덜 발생하는 코드를 만드는 것'에 대해 중점적으로 이야기합니다.

<br/>

## Item 1. 가변성을 제한하라

- 코틀린은 모듈로 프로그램을 설계하며 모듈은 클래스, 객체, 함수, 타입 별칭, 톱레벨 포로퍼티 등 다양한 요소로 구성됩니다.
- 이러한 요소 중 일부는 상태(state)를 가집니다.
- 그러나 이러한 상태는 양날의 검입니다.
  - 시간의 변화에 따라서 변화는 요소를 표현하기는 좋으나, 상태를 적절하게 관리하는 것이 어렵습니다.
- 대규모 팀일수록 변경 가능한 부분에 의한 일관성(consistency) 문제, 복잡성(complexity) 증가와 관련된 문제에 익숙합니다.
- 실제 프로젝트는 동기화를 잘 구현해야하며 이는 굉장히 어려운 부분입니다.
  - 따라서 변할 수 있는 지점을 줄이는 것이 핵심입니다.
- 가변성은 시스템의 상태를 나타내기 위한 중요한 방법 중 하나이나, 변경이 일어나야 하는 부분은 신중하고 확실하게 결정해야 합니다.

### 코틀린에서 가변성 제한하기

- 코틀린에서 가변성을 제한하는 방법은 다음과 같습니다. 
  - 읽기 전용 프로퍼티 (val)
  - 가변 컬렉션과 읽기 전용 컬렉션 구분
  - 데이터 클래스의 copy

#### 읽기 전용 프로퍼티 (val)

- val에 대한 예제는 다음과 같습니다.

```kt
val name: String? = "Marton"
val surname: String = "Braun"

val fullName: String?
    get() = name?.let { "$it $surname" }

val fullName2: String? = name?.let { "$it $surname" }

fun main() {
  if(fullName != null) {
    println(fullName.length)  // error
  }
  if(fullName2 != null) {
    println(fullName2.length) // Marton Braun
  }
}
```

#### 가변 컬렉션과 읽기 전용 컬렉션 구분

- 코틀린은 읽고 쓸 수 있는 컬렉션과 읽기 전용 컬렉션으로 구분됩니다.
  - 읽기 전용 : `Iterable`, `Collection`, `Set`, `List`
  - 읽기 쓰기 전용 : `MutableIterable`, `MutableCollection`, `MutableSet`, `MutableList`

#### 데이터 클래스의 copy

- 코틀린에서 내부적으로 상태를 변경하지 않는 이유는 다음의 장점이 있습니다.
  - 한 번 정의된 상태가 유지되므로 코드를 이해하기 쉬움
  - immutable 객체는 공유했을 때도 충돌이 없으므로 안전하고, 병렬 처리를 안전하게 할 수 있음
  - immutable 객체에 대한 참조는 변경되지 않으므로, 쉽게 캐시할 수 있음
  - immutable 객체는 방어적 복사본을 만들 필요가 없음, 깊은 복사의 필요가 없음
  - immutable 객체는 다른 객체를 만들 때 활용하기 좋습니다.
  - immutable 객체는 set나 map의 키로 사용할 수 있습니다.

```kt
data class User(
  val name: String,
  val surname: String
)

var user = User("Maja", "Markiewicz")
user = user.copy(surname = "Moskala")
print(user) // User(name=Maja, surname=Moskala)
```

### 다른 지점의 변경 가능 지점

- 다음의 리스트는 두 가지 선택지가 있습니다.

```kt
val list1: MutableList<Int> = mutableListOf()
val list2: List<Int> = listOf()

// 동작은 같으나 방법이 다릅니다.
list1.add(1)
list2 = list2 + 1
```

- 위 두개는 정상적으로 동작하지만 장단점이 존재합니다.
  - 첫번째는 구체적인 리스트 구현 내부에 변경 가능 지점이 있습니다. 다만 멀티스레드 처리가 이루어질 경우, 동기화를 알 수 없으므로 위험합니다.
  - 두번째는 프로퍼티 자체가 변경 가능한 지점입니다. 즉, 멀티스레드의 안정성이 더 좋습니다.
- mutable 컬렉션을 관찰할 수 있게 만들려면, 추가적인 구현이 필요합니다. 즉, 읽기 전용 컬렉션을 넣어 사용하는 것이 쉽습니다.

```kt
// 변경시 로그 출력
var names by Delegates.observable(listOf<String>()) {_, old, new ->
  println("Names changed from $old to $new")
}
names += "Fabio"  // names [] -> [Fabio]
names += "Bill"   // names [Fabio] -> [Fabio, Bill]
```

### 변경 가능 지점 노출하지 말기

### 정리

<br/>

## Item 2. 변수의 스코프를 최소화하라

<br/>

## Item 3. 최대한 플랫폼 타입을 사용하지 말라

<br/>

## Item 4. inferred 타입으로 리턴하지 말라

<br/>

## Item 5. 예외를 활용해 코드에 제한을 걸어라

<br/>

## Item 6. 사용자 정의 오류보다는 표준 오류를 사용하라

<br/>

## Item 7. 결과 부족이 발생할 경우 null과 Failure을 사용하라

<br/>

## Item 8. 적절하게 null을 처리하라

<br/>

## Item 9. use를 사용하여 리소스를닫아라

<br/>

## Item 10. 단위 테스트를 만들어라
