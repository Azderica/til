---
sidebar_position: 1
---

# 1. 코틀린이란 무엇이며, 왜 필요한가?

- 코틀린은 자바 플랫폼에서 돌아가는 새ㅔ로운 프로그래밍 언어
- 코틀린은 간결하고 실용적이며, 자바 코드와의 상호운용성을 중시합니다.

<br/>

## 1.1 코틀린 맛보기

```kotlin
// 데이터 클래스
data class Person(val name: String, val age: Int? = null)

// 최상위 함수
fun main(args:Array<String>) {
  val persons = listOf(Person("영희"), Person("철수", age=29))
  val oldest = persons.maxBy { it.age ?: 0} // 람다식과 엘비스 연산자
  println("나이가 가장 많은 사람: $oldest") // 문자열 템플릿
}
```

<br/>

## 1.2 코틀린의 주요 특성

### 1.2.1 대상 플랫폼: 서버, 안드로이드 등 자바가 실행되는 모든 곳

- 코틀린을 활용하는 일반적인 경우는 다음과 같습니다.
  - 서버상의 코드
  - 안드로이드 디바이스에서 실행되는 모바일 애플리케이션
- 코틀린의 핵심은 생산성을 향상시켜주는 것입니다.

### 1.2.2 정적 타입 지정 언어

- 자바와 마찬가지로 정적 타입(statically typed) 지정 언어입니다.
  - 정적 타입 지정이라는 말은 모든 프로그램 구성 요소의 타입을 프로그램 안에서 객체의 필드나 메서드를 사용할 때마다 컴파일러가 타입을 검증해준다는 뜻입니다.
- 이는 동적 타입(dynamically typed) 지정 언어와는 다릅니다.
  - JVM에서는 Groovy나 JRuby가 대표적인 동적 타입 언어입니다.
  - 검증이 실행 시점에 일어납니다.
- 코틀린 컴파일러가 문맥으로부터 변수 타입을 자동으로 유추합니다.

`var x = 1`

- 컴파일러가 문맥을 고려해 변수 타입을 결정하는 이런 기능을 `타입 추론(type inference)`라고 합니다.
- 정적 타입 지정의 단점은 다음과 같습니다.
  - 성능 : 실행 시점에 어떤 메서드를 호출할지 알아내는 과정이 필요 없으므로 메서드 호출이 빠릅니다.
  - 신뢰성 : 컴파일러가 프로그램의 정확성(correctness)을 검증하기 때문에 실행 시 프로그램이 오류로 중단될 가능성이 적어집니다.
  - 유지보수성 : 코드에서 다루는 객체가 어떤 타입에 속하는지 알 수 있기 때문에 처음 보는 코드를 다룰 때도 쉽습니다.
  - 도구 지원 : 정적 타입 지정을 활용하면 더 안전하게 리팩터링을 할 수 있고, 도구는 더 정확한 코드 완성 기능을 제공할 수 있으며, IDE의 다른 지원 기능도 더 잘 만들 수 있습니다.
- 코틀린의 가장 큰 특징은 널이 될 수 있는 타입(nullable type)을 지원한다는 점이며, 널포인터 예외 발생 여부를 검사할 수 있습니다.
- 함수 타입(function type)에 대한 지원을 들 수 있습니다.

### 1.2.3 함수형 프로그래밍과 객체지향 프로그래밍

- 함수형 프로그래밍의 핵심은 다음과 같습니다.
  - first-class 함수 : 함수를 일반 값처럼 다룰 수 있습니다.
  - 불변성(immutability) 함수 : 함수형 프로그래밍은 만들어지고 나면 내부 상태가 절대로 바뀌지 않는 불변 객체를 사용합니다.
  - 부수 효과(side effect) 함수 : 함수형 프로그래밍에서는 입력이 같으며 항상 같은 출력을 내놓고 다른 객체의 상태를 변경하지 않으며, 함수 외부나 다른 바깥 환경과 상호작용하지 않는 순수 함수를 사용합니다.
- 함수형 스타일은 다음의 장점을 가집니다.
  - 간결성 : 강력한 추상화를 사용하 코드 중복을 막을 수 있습니다.
  - 다중 스레드를 사용해도 안전합니다.
  - 함수형 프로그램은 테스트하기 쉽습니다.

### 1.2.4 무료 오픈소스

- [kotlin github](https://github.com/jetbrains/kotlin)

<br/>

## 1.3 코틀린 응용

대표적으로 아래 두 분야가 대표적인 예시입니다.

### 1.3.1 코틀린 서버 프로그래밍

- 서버 프로그래밍은 상당히 광범위한 개념이며, 여러 분야가 서버 프로그래밍에 포함됩니다.
  - 브라우저에 HTML 페이지를 돌려주는 웹 애플리케이션
  - 모바일 애플리케이션에게 HTTP를 통해 JSON API를 제공하는 백엔드 에플리케이션
  - RPC 프로토콜을 통해 서로 통신하는 작은 서비스들로 이뤄진 마이크로서비스

### 1.3.2 코틀린 안드로이드 프로그래밍

- 모바일 애플리케이션은 엔터프라이즈 애플리케이션보다 더 작고 기존 코드 기반과 새 코드를 통합할 필요도 더 적습니다.
- 모바일 애플리케이션은 보통 더 다양한 디바이스에 대해 서비스의 신뢰성을 보장하며 더 빠르게 개발해 배포할 필요가 있습니다.

<br/>

## 1.4 코틀린의 철학

### 1.4.1 실용성

- 코틀린은 기존에서 성공적으로 검증된 해법과 기능에 의존함으로 언어의 복잡도가 줄어들고 이미 알고 있는 기존 개념을 통해 쉽게 배울 수 있습니다.
- 코틀린은 특정 스타일이나 패러다임을 사용할 것은 강제하지 않습니다.
- 실용성에 있어 도구를 강조합니다.

### 1.4.2 간결성

- 코드가 더 간단하고 간결할수록 내용을 파악하기가 더 쉽습니다.
- 코드외 부수적인 요소를 줄이기 이후ㅐ 노력을 했습니다.
- 다양한 표준 라이브러리를 제공함으로 반복되거나 길어지는 코드를 라이브러리 함수에 쉽게 전달할 수 있습니다.

### 1.4.3 안전성

- 일부 발생할 수 있는 오류를 설계가 원천적으로 방비합니다.
- 자바보다 더 적은 비용으로 타입 안전성을 사용할 수 있습니다.
- `NullPointerException`이나 `ClassCastException` 등을 예방하기 위해 노력합니다.

### 1.4.4 상호운용성

- 기존 라이브러리를 사용할 수 있습니다
- 다음과 같은 동작이 가능합니다.
  - 자바와 코틀린 소스 파일을 자유롭게 내비게이션 할 수 잇습니다.
  - 여러 언어로 이뤄진 단일 프로젝트를 디버깅하고 서로 다른 언어로 작성된 코드를 언어와 상관 언어와 관계없이 한 단계씩 실행할 수 있습니다.

<br/>

## 1.5 코틀린 도구 사용

- `.kt` -> `.class` -> 표준 패키징을 실행
- 코틀린 컴파일러로 컴파일한 코드는 코틀린 런타임 라이브러리에 의존합니다.

<br/>

## 1.6 요약

- 코틀린은 타입 추론을 지원하는 정접 타입 지정 언어
  - 소스코드의 확성과 성능을 보장
- 코틀린은 객체지향과 함수형 프로그래밍 스타일을 모두 지원합니다.
- 코틀린은 서버 애플리케이션 개발에 테스트를 더 쉽세할 수 있습니다.
- 안드로이드에 활용가능하며, 무료 오픈소스입니단,