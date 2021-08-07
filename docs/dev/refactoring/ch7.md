---
sidebar_position: 7
---

# 7. 캡슐화

모듈을 분리하는 중요한 기준 중 하나는 모듈을 얼마나 잘 숨기는 지입니다.

다음의 방법이 있습니다.

- 레코드 캡슐화하기, 컬렉션 캡슐화하기, 기본형을 객체로 바꾸기, 임시 변수를 질의로 바꾸기
- 여러 함수를 클래스로 묶기, 클리스 추출하기, 클래스 인라인하기
- 위임 숨기기, 중개자 제거하기
- 함수 추출하기, 알고리즘 교체하기

## 7.1 레코드 캡슐화하기

### 배경

- 일반적으로는 레코드보다는 객체를 선호하는 것이 좋습니다.
  - 이는 레코드는 결국 헷갈릴 수 있습니다.
- 레코드 구조는 두 가지로 구분할 수 있는데 하나는 필드 이름을 노출하는 형태와 다른 하나는 내가 원하는 이름을 쓸 수 있는 형태입니다.
  - 후자는 일반적으로 해시, 맵, 해시맵, 딕셔너리, 연관 배열 등을 제공하지만 일종의 단점이 될 수 있습니다.
- 객체를 사용하면 이후에 JSON이나, XML 같은 포맷으로 직렬화할 때나 수정할 때 편해집니다.

### 절차

- 레코드를 담은 변수를 캡슐화합니다.
  - 레코드를 캡슐화하는 함수의 이름은 검색하기 쉽게 지어줍니다.
- 레코드를 감싼 단순한 클래스로 해당 변수의 내용을 교체합니다. 이 클래스에 원본 레코를 반환하는 접근자도 정의하고, 변수를 캡슐화하는 함수들이 이 접근자를 사용하도록 수정합니다.
- 테스트합니다.
- 원본 레코드 대신 새로 정의한 클래스 타입의 객체를 반환하는 함수들을 새로 만듭니다.
- 레코드를 반환하는 예전 함수를 사용하는 코드를 위에서 만든 새 함수를 사용하도록 바꿉니다. 필드에 접근할 때는 객체의 접근자를 사용합니다. 적절한 접근자가 없다면 추가하고, 한 부분을 바꿀 때마다 테스트합니다.
- 클래스에서 원본 데이터를 반환하는 접근자와 원본 레코드를 반환하는 함수들을 제거합니다.
- 테스트합니다.
- 레코드의 필드도 데이터 구조인 중첩 구조라면 레코드 캡슐화하기와 컬렉션 캡슐화하기를 재귀적으로 적용합니다.

### 예시

#### 간단한 레코드 캡슐화하기

다음과 같이 리팩토링을 진행할 수 있습니다.

- [리팩토링 전 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex1/refactoring-step-0.js)
- [중간 리팩토링 코드, 1](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex1/refactoring-step-1.js)
- [중간 리팩토링 코드, 2](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex1/refactoring-step-2.js)
- [최종 리팩토링 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex1/refactoring-step-3.js)

#### 중첩된 레코드 캡슐화하기

다음과 같은 데이터를 사용하는 경우에도 리팩토링을 진행할 수 있습니다.

```json
"1920":{
  name: "마틴 파울러",
  id: "1920",
  usages: {
    "2016": {
      "1": 50,
      "2": 55,
      // 생략
    },
    "2015": {
      "1": 70,
      "2": 63,
      // 생략
    }
  }
},
"38673": {
  name: "닐 포드",
  id: "38763"
  // 생략
}
```

이를 사용하는 코드는 다음과 같습니다.

- [리팩토링 전 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex1/refactoring-step-4.js)
- [최종 리팩토링 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex1/refactoring-step-5.js)

중첩된 레코드를 처리할 때는 두가지 방법으로 진행할 수 있습니다.

- 모든 데이터를 명시적인 API로 제공하기
  - 장점 : 클래스를 통해서 데이터 사용 방법을 모두 파악 가능합니다.
  - 단점 : 읽는 패턴이 다양하면 작성할 코드가 늘어납니다.
- 실제 데이터를 제공, 레코드 캡슐화를 재귀적으로 하기
  - 장점 : 확실한 제어가 가능합니다.
  - 단점 : 모든 쓰기를 함수안에서 처리가 불가능합니다. (이를 clone으로 처리), 복제 비용이 커집니다.

<br/>

## 7.2 컬렉션 캡슐화하기

```js
// before
class Person {
  get courses() {
    return this._courses
  }
  set courses(aList) {
    this._courses = aList
  }
}

// after
class Person {
  get courses() {
    return this._courses.slice()
  }
  addCourse(aCourse) {}
  removeCourse(aCourse) {}
}
```

### 배경

- 가변데이터를 캡슐화하는 것은 데이터 구조가 언제 어떻게 수정되는지 파악하기 쉬워서, 필요한 시점에 데이터 구조를 변경하기 쉽다는 장점이 있습니다.
- 추가적으로 내부 컬렉션을 사용하게되면, 실수로 컬렉션이 바꿀 수 있는데 이를 차단하는 방법은 2가지가 있습니다.
  - 절대로 컬렉션 값을 반환하지 않도록 하기
  - 컬렉션을 읽기전용으로 제공
  - 컬렉션 케터를 제공하나 복제본을 반환해서 원본이 수정이 되지 않도록 합니다.
- 중요한 점은 **코드 베이스에서 일관성을 주는 것**입니다. 위의 방법 중 하나만 써야합니다.

### 절차

- 아직 컬렉션을 캡슐화하지 않았다면 변수 캡슐화하기부터 진행합니다.
- 컬렉션에 원소를 추가/제거하는 함수를 추가합니다.
  - 컬렉션 자체를 통째로 바꾸는 세터는 제거합니다.
  - 세터를 제거할 수 없다면 인수로 받은 컬렉션을 복제해 저장하도록 합니다.
- 정적 검사를 수행합니다.
- 컬렉션을 참조하는 부분을 모두 찾습니다.
- 컬렉션 케터를 수정해서 원본 내용을 수정할 수 없는 읽기전용 프락시나 복제본을 반환하게 합니다.
- 테스트합니다.

### 예시

- [리팩터링 전 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex2/refactoring-step-0.js)
- [리팩터링 후 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex2/refactoring-step-1.js)

<br/>

## 7.3 기본형을 객체로 바꾸기

```js
// before
orders.filter((o) => 'high' === o.priority || 'rush' === o.priority)

// after
orders.filter((o) => o.priority.higherThan(new Priority('normal')))
```

### 배경

- 단순한 출력 이상의 기능이 필요시, 데이터를 표현하는 전용 클래스를 정의하는 것이 좋습니다.

### 절차

- 아직 변수를 캡슐화하지 않았다면 캡슐화합니다.
- 단순한 값 클래스를 만듭니다. 생성자는 기존 값을 인수로 받아서 저장하고, 이 값을 반환하는 게터를 추가합니다.
- 정적 검사를 수행합니다.
- 값 클래스의 인스턴스를 새로 만들어서 킬드에 저장하도록 세터를 수정합니다. 이미 있다면 필드의 타입을 적절히 변경합니다.
- 새로 만든 클래스의 게터를 호출한 결과를 반환하도록 게터를 수정합니다.
- 테스트합니다.
- 함수 이름을 바꾸면 원본 접근자의 동작을 더 잘 드러낼 수 있는지 검토합니다.

### 예시

- [리팩터링 전 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex3/refactoring-step-0.js)
- [리팩터링 후 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex3/refactoring-step-1.js)

<br/>

## 7.4 임시 변수를 질의 함수로 바꾸기

```js
// before
const basePrice = this._quantity * this._itemPrice
if (basePrice > 1000) return basePrice * 0.95
else return basePrice * 0.98

// after
class Order {
  get basePrice() {
    this._quantity * this._itemPrice
  }
  // ...
}
if (basePrice > 1000) return this.basePrice * 0.95
else return this.basePrice * 0.98
```

### 배경

- 참조의 목적으로 임시 변수를 사용할 때가 있습니다. 그러나 때로는 더 나아가 함수로 사용하는 경우가 좋을 때도 있습니다.
- 이를 통해서 경계가 더 분명해지고, 부적절한 의존 관계나 부수효과를 제거하는데 도움이 됩니다.
- 일반적으로 클래스안에 적용할 때 효과가 큽니다.

### 절차

- 변수가 사용되기 전에 값이 확실히 결정되는지, 변수를 사용할 때마다 계산 로직이 매번 다른 결과를 내지는 않는지 확인합니다.
- 읽기전용으로 만들 수 있는 변수를 읽기전용으로 만듭니다.
- 테스트합니다.
- 변수 대입문을 함수로 추출합니다.
- 테스트합니다.
- 변수 인라인하기로 임시 변수를 제거합니다.

### 예시

간단한 주문

- [리팩터링 전 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex4/refactoring-step-0.js)
- [리팩터링 후 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex4/refactoring-step-1.js)

<br/>

## 7.5 클래스 추출하기

```js
// before
class Person {
  get officeAreaCode() {
    return this._officeAreaCode
  }
  get officeNumber() {
    return this._officeNumber
  }
}

// after
class Person {
  get officeAreaCode() {
    return this._telephoneNumber.areaCode
  }
  get officeNumber() {
    return this._telephoneNumber.number
  }
}
class TelephoneNumber {
  get areaCode() {
    return this._areaCode
  }
  get number() {
    return this._number
  }
}
```

### 배경

- 클래스는 반드시 명확하게 추상화하고 소수의 주어진 역활을 처리해야합니다.
- 메서드와 데이터가 너무 많은 클래스는 이해하기 어려우므로 적절히 분리하는 것이 좋습니다.

### 절차

- 클래스의 역할을 분리할 방법을 정합니다.
- 분리될 역할을 담당할 클래스를 새로 만듭니다.
- 원래 클래스의 생성자에서 새로운 클래스의 인스턴스를 생성하여 필드에 저장해둡니다.
- 분리될 역할에 필요한 필드들은 새 클래스로 옮깁니다. 하나씩 옮길 때마다 테스트합니다.
- 메서드들도 새 클래스로 옮깁니다. 이때 저수준 메서드, 즉 다른 메서드를 호출하기보다는 호출을 당하는 일이 많은 메서드부터 옮깁니다. 하나씩 옮길 때마다 테스트합니다.
- 양쪽 클래스의 인터페이스를 살펴보면서 불필요한 메서드를 제거하고, 이름도 새로운 환경에 맞게 바꿉니다.
- 새 클래스를 외부로 노출할지 정합니다. 노출하려거든 새 클래스에 참조를 값으로 바꾸기를 적용할 지 고민해봅니다.

### 예시

- [리팩터링 전 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex5/refactoring-step-0.js)
- [리팩터링 후 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex5/refactoring-step-1.js)

<br/>

## 7.6 클래스 인라인하기

```js
// before
class Person {
  get officeAreaCode() {
    return this._telephoneNumber.areaCode
  }
  get officeNumber() {
    return this._telephoneNumber.number
  }
}
class TelephoneNumber {
  get areaCode() {
    return this._areaCode
  }
  get number() {
    return this._number
  }
}

// after
class Person {
  get officeAreaCode() {
    return this._officeAreaCode
  }
  get officeNumber() {
    return this._officeNumber
  }
}
```

### 배경

- 클래스 추출을 거꾸로 돌리는 리팩터링입니다. 일반적으로 제 역할을 못하는 클래스를 인라인합니다.
- 두 클래스의 기능을 지금과 다르게 배분하고 싶을 때도, 클래스를 인라인합니다.

### 절차

- 소스 클래스의 각 public 메서드에 대응하는 메서드들은 타깃 클래스에 생성합니다. 이 메서드들은 단순히 작업을 소스 클래스로 위임합니다.
- 소스 클래스의 메서드를 사용하는 코드를 모두 타깃 클래스의 위임 메서드를 사용하도록 바꿉니다. 하나씩 바꿀 때마다 테스트합니다.
- 소스 클래스의 메서드와 필드를 모두 타깃 클래스로 옮깁니다. 하나씩 옮길 때마다 테스트합니다.
- 소스 클래스를 삭제하고 조의를 표합니다.

### 예시

- [리팩터링 전 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex6/refactoring-step-0.js)
- [리팩터링 후 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex6/refactoring-step-1.js)

<br/>

## 7.7 위임 숨기기

```js
// before
manager = aPerson.department.manager

// after
class Person {
  get manager() {
    return this.department.manager
  }
}
manager = aPerson.manager
```

### 배경

- 모듈화 설계에서의 핵심은 캡슐화입니다.
- 위임 객체의 존재를 숨기면, 향후 위김 객체가 수정되더라도 서버 코드만 고치면 되고 클라이언트는 영향이 없습니다.

### 절차

- 위임 객체의 각 메서드에 해당하는 위임 메서드를 서버에 생성합니다.
- 클라이언트가 위임 객체 대신 서버를 호출하도록 수정합니다. 하나씩 바꿀 때마다 테스트합니다.
- 코두 수정했다면, 서버로부터 위임 객체를 얻는 접근자를 제거합니다.
- 테스트합니다.

### 예시

사람과 사람이 속한 부서에 대한 클래스, 클라이언트에서는 어떤 사람이 속한 부서의 관리자가 필요한 경우입니다.

- [리팩터링 전 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex7/refactoring-step-0.js)
- [리팩터링 후 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch7/ex7/refactoring-step-1.js)

<br/>

## 7.8 중개자 제거하기

```js
// before
class Person {
  get manager() {
    return this.department.manager
  }
}
manager = aPerson.manager

// after
manager = aPerson.department.manager
```

### 배경

- 앞서 이야기한것 처럼 위임 객체는 캡슐화의 장점이 있습니다. 그러나, 이러한 기능을 사용하고 싶을 때마다 위임을 하면 위임 메서드가 너무 커집니다.
- 이러한 경우에는 서버 클래스는 중개자 역할을 수행하고, 차라라리 클라이언트가 위임 객체를 직접 호출하는 것이 좋습니다.

### 절차

- 위임 객체를 얻는 게터를 만듭니다.
- 위임 메서드를 호출하는 클라이언트가 모두 이 게터를 거치도록 수정합니다. 하나씩 바꿀 때마다 테스트합니다.
- 모두 수정했다면 위임 메서드를 삭제합니다/

### 예시

- 7번 코드와 반대라 생략합니다.

<br/>

## 7.9 알고리즘 교체하기

```js
// before
function foundPerson(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Don') {
      return 'Don'
    }
    if (people[i] === 'John') {
      return 'John'
    }
    if (people[i] === 'Kent') {
      return 'Kent'
    }
  }
  return ''
}

// after
function foundPerson(people) {
  const candidates = ['Don', 'John', 'Kent']
  return people.find((p) => candidates.includes(p)) || ''
}
```

### 배경

- 기존의 알고리즘보다 더 쉬운 방식의 알고리즘이 있다면 이를 고칩니다.

### 절차

- 교체할 코드를 함수 하나에 모읍니다.
- 이 함수만을 이용해 동작을 검증하는 테스트를 마련합니다.
- 대체할 알고리즘을 준비합니다.
- 정적 검사를 수행합니다.
- 기존 알고리즘과 새 알고리즘의 결과를 비교하늩 테스트를 수행합니다.
  - 두 결과가 같다면 리팩터링이 끝납니다.
  - 그렇지 않다면 기존 알고리즘을 참고해서 새 알고리즘을 테스트하고 디버깅합니다.
