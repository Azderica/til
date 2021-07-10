# 6. 기본적인 리팩터링

해당 챕터에서는 가장 기본적인 리팩터링을 소개합니다.

가장 많이 사용하는 것은 다음과 같습니다.

- 함수 추출하기, 변수 추출하기
- 함수 인라인하기, 변수 인라인하기
- 함수 선언 바꾸기, 변수 이름 바꾸기, 매개변수 객체 만들기
  - 함수 이름을 변경할 때 주로 사용
  - 변수 캡슐화와 꽌련이 있습니다.
- 여러 함수를 클래스로 묶기, 여러 함수를 변환 함수로 묶기, 단계 쪼개기

## 1. 함수 추출하기

다음의 코드를 점차 풀어가며, 리팩토링 할 예정입니다.

```js
function prinOwing(invoice) {
  printBanner()
  let outstanding = calculateOutstanding()
  printDetails(outstanding)

  // 세부 사항 출력
  function printDetails(outstanding) {
    console.log(`고객명: ${invoice.customer}`)
    console.log(`채무액: ${outstanding}`)
  }
}
```

### 간략하게.

- 함수 추출하기
  - 하는 일을 파악, 독립된 함수로 추출, 목적에 맞는 이름을 붙입니다.
  - 대부분 함수를 아주 짧게 구성합니다. (1줄에서 5~6줄 사이)

### 절차

1. 함수를 새로 만들고 목적을 잘 드러내는 이름을 붙입니다.
   - 어떻게가 아닌 무엇을 하는지 잘 나타내야합니다.
   - 함수로 뽑아서 목적이 더 잘 드러내는 이름이 있다면 추출하나, 그렇지 않은 경우는 추출하면 안되는 경우입니다.
   - 추출해서 사용하고 안맞는 경우에 다시 인라인으로 넣는 것도 나쁘지 않습니다.
2. 추출할 코드를 원본 함수에서 복사해서 새 함수에 붙여넣습니다.
3. 추출한 코드 중 원본 함수의 지역 변수를 참조하거나 추출한 함수의 유효범위를 벗어나는 변수는 없는지 검사합니다. 있는 경우는 매개변수로 전달합니다.
   - 원본 함수의 중첩 함수로 추출할 때는 문제가 발생하지 않습니다.
   - 지역변수와 매개변수를 인수로 전달하는 방법은 값이 바뀌지 않는 경우에는 좋은 방법입니다.
   - 추출한 코드에서만 사용하는 변수가 함수 밖에서 선언되는 경우는 안으로 넣습니다.
   - 추출한 코드에서 값이 바뀌는 변수는 조심히 처리합니다.
   - 값을 수정하는 지역변수가 너무 많은 경우는, 함수 추출을 멈추고 변수 쪼개기나 임시 변수를 질의 함수로 바꾸는 등의 리팩터링을 적용합니다.
4. 변수를 다 처리했다면 컴파일합니다.
5. 원본 함수에서 추출한 코드 부분을 새로 만든 함수를 호출하는 문장으로 바꿉니다.
   - 추출한 함수로 일을 위임합니다.
6. 테스트합니다.
7. 다른 코드에 방금 추출한 것과 똑같은 코드가 없는지 살핍니다. 있는 경우에는 추출한 새 함수를 호출할지 바꿀지 검토합니다. (인라인 코드를 함수 호출로 변경)
   - 중복 혹은 비슷한 코드를 찾아주는 리팩터링 도구를 사용하는 것도 좋은 방법입니다.
   - 검색 기능을 사용하는 방법도 괜찮습니다.

### 코드

최초의 코드는 다음과 같습니다.

- [메인 로직](https://github.com/Azderica/js-test/blob/master/refactoring/ch6/ex1/refactoring-step-0.js)
- [리팩터링 전 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch6/ex1/refactoring-step-1.js)

여기서 유효 범위를 벗어나는 변수가 없기에 이를 추출합니다.

- [step-2](https://github.com/Azderica/js-test/blob/master/refactoring/ch6/ex1/refactoring-step-2.js)

지역 변수를 통해서 추출합니다.

- [step-3](https://github.com/Azderica/js-test/blob/master/refactoring/ch6/ex1/refactoring-step-3.js)

지역 변수의 값을 변경합니다.

- [step-4](https://github.com/Azderica/js-test/blob/master/refactoring/ch6/ex1/refactoring-step-4.js)

계산에 대한 로직도 분리하여, 리팩터링을 종료합니다.

- [step-5, 최종 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch6/ex1/refactoring-step-5.js)

<br/>

## 2. 함수 인라인하기

함수 추출하기와 반대의 리팩터링입니다.

```js
// before
function getRating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1
}

function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5
}

// after
function getRating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1
}
```

다음의 경우에 일반적으로 사용합니다.

- 잘못 추출된 함수들도 다시 인라인합니다.
- 다른 함수로 단순히 위임하는게 너무 많고, 관계가 복잡한 경우에 다시 인라인합니다.

### 절차

- 다형 메서드인지 확인합니다.
  - 서브클래스에서 오버라이드하는 메서드는 인라인하면 안됩니다.
- 인라인할 함수를 호출하는 곳을 모두 찾습니다.
- 각 호출문을 함수 본문으로 교체합니다.
- 하나씩 교체할 때마다 테스트합니다.
- 함수 정의를 삭제합니다.

### 예시

- [변경 전 리팩터링 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch6/ex2/refactoring-step-2.js)
- [변경 후 리팩터링 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch6/ex2/refactoring-step-3.js)

<br/>

## 3. 변수 추출하기

변수 인라인하기와 반대의 리팩터링입니다.

다음과 같습니다.

```js
// before
return (
  order.quantity * order.itemPrice -
  Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
  Math.min(order.quantity * order.itemPrice * 0.1, 100)
)

// after
const basePrice = order.quantity * order.itemPrice
const quantityDiscount =
  Math.max(0, order.quantity - 500) * order.itemPrice * 0.05
const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100)
return basePrice - quantityDiscount + shipping
```

### 배경

- 표현식이 너무 복잡해서 이해하기 어려운 경우가 있으며, 이런 경우에 지역 변수를 활용하여 표현식을 쪼개 관리하기 쉽습니다.
- 추가한 변수는 디버깅에 도움이됩니다.
- 중복이 적으면서 의도가 잘 드러내는 코드를 구성해야합니다.

### 절차

- 추출하려는 표현식에 부작용은 없는지 확인합니다.
- 불변 변수를 하나 선언하고 이름을 붙일 표현식의 복제본을 대입합니다.
- 원본 표현식을 새로 만든 변수로 교체합니다.
- 테스트합니다.
- 표현식을 여러 곳에서 사용한다면 각각 새로 만든 변수로 교체합니다.

### 예시

- [변경 전 리팩터링 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch6/ex3/refactoring-step-2.js)
- [변경 후 리팩터링 코드](https://github.com/Azderica/js-test/blob/master/refactoring/ch6/ex3/refactoring-step-3.js)

위의 코드를 보면 객체의 장점을 확인할 수 있습니다. 객체는 특정 로직과 데이터를 외부와 공유할 때 적당한 크기의 문맥이 되어줍니다.

<br/>

## 4. 변수 인라인하기

다음의 형태를 가집니다.

```js
// before
let basePrice = anOrder.basePrice
return basePrice > 1000

// after
return anOrder.basePrice > 1000
```

### 배경

변수는 함수 안에서 표현식을 가리키는 이름이며 대체로 긍정적인 효과입니다. 하지만 그 이름이 원래 표현식과 다르지 않은 경우도 있고 변수가 주변 코드를 리팩터링하는데 방해가 되기도 합니다. 이때 **변수를 인라인하는 것**이 좋습니다.

### 절차

- 대입문의 표현식에서 부작용이 생기지는 않는지 확인합니다.
- 변수가 불변으며 선언되지 않았다면 불변으로 만든 후 테스트합니다.
  - 이렇게 하면 변수에 값이 단 한번만 대입되는 지 확인할 수 있습니다.
- 이 변수를 가장 처음 사용하는 코드를 찾아서 대입문 우변의 코드로 바꿉니다.
- 테스트합니다.
- 변수를 사용하는 부분을 모두 교체할 때까지 이 과정을 반복합니다.
- 변수 선언문과 대입문을 지웁니다.
- 테스트합니다.

<br/>

## 5. 함수 선언 바꾸기

다음의 형태를 가집니다.

```java
// before
function circum(radius) {
  return 2 * Math.PI * radius
}

// after
function circumference(radius) {
  return 2 * Math.PI * radius
}
```

### 배경

- 함수는 프로그램을 작은 부분으로 나누는 주된 수단입니다.
- 소프트웨어는 연결부에 상당히 의존하며, 이를 잘 정의하면 시스템에 새로운 부분을 추가하기 쉬워집니다.
- 함수의 이름과 매개변수가 중요한 요소입니다
  - 좋은 이름으로 선정하는 것이 중요하고, 잘못된 함수를 발견하면 즉시 바꿔야 이후에 같은 고민을 안하게 됩니다.
  - 이를 통해서 활용 점위가 넓어지고 다른 모듈간의 결합을 제거할 수 있습니다.

### 절차

크게 **간단한 절차**와 **마이그레이션 절차**로 나눌 수 있습니다.

#### 간단한 절차

호출하는 곳이 많거나, 호출 과정이 복잡하거나, 호출 대상이 다형 메서드거나 선언을 복잡하게 변경할 때 사용해야합니다.

- 매개변수를 제거하려거든 먼저 함수 본문에서 제거 대상 매개변수를 참조하는 곳은 없는지 확인합니다.
- 메서드 선언을 원하는 형태로 바꿉니다.
- 기존 메서드 서언을 참조하는 부분을 모두 찾아서 바뀐 형태로 수정합니다.
- 테스트합니다.

#### 마이그레이션 절차

변경할 것이 둘 이상이면 나눠서 처리할 때가 나을 때가 있으며, 이름 변경과 매개변수 추가를 모두 하고 싶다면 각각을 독립적으로 처리합니다. (이후 문제가 생길 시 돌리기 위해서)

- 이어지는 추출 단계를 수월하게 만들어야 한다면 함수의 본문을 적절히 리팩터링합니다.
- 함수 본문을 새로운 함수로 추출합니다.
  - 새로 만들 함수 이름이 기존 함수와 같아면 일단 검색하기 쉬운 이름을 임시로 붙입니다.
- 추출한 함수에 매개변수를 추가해야 한다면 '간단한 절차'를 따라 추가합니다.
- 테스트합니다.
- 기존 함수를 인라인합니다.
- 이름을 임시로 붙여뒀다면 함수 선언 바꾸기를 한 번 더 적용해서 원래 이름으로 되돌립니다.
- 테스트합니다.

### 예시

#### 함수 이름 바꾸기

위의 시작 코드와 동일

#### 매개변수 추가하기

```js
// before
class Book {
  addReservation(customer) {
    this._reservations.push(customer)
  }
}

// after
class Book {
  zz_addReservation(customer, isPriority) {
    assert(isPriority == true || isPriority == false)
    this._reservations.push(customer)
  }
}
```

### 매개변수를 속성으로 바꾸기

```js
// before
function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state)
}
const newEnglanders = someCustomer.filter((c) => inNewEngland(c))

// after
function inNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode)
}
const newEnglanders = someCustomer.filter((c) => inNewEngland(c.address.state))
```

<br/>

## 6. 변수 캡슐화하기

다음과 같이 진행됩니다.

```js
// before
let defaultOwner = { firstName: '마틴', lastName: '파울러' }

// after
let defaultOwner = { firstName: '마틴', lastName: '파울러' }
export function defaultOwner() {
  return defaultOwner
}
export function settDefaultOwner(arg) {
  defaultOwner = arg
}
```

### 배경

데이터의 유효범위가 넓을수록 캡슐화해야합니다.

- 코드를 추가하거나 변경할 때마다 최대한 캡슐화해야합니다.
- 결합도를 막을 수 있습니다.

불변데이터는 가변 데이터보다 캡슐화의 이유가 적습니다.

### 절차

- 변수로의 접근과 갱신을 전담하는 캡슐화 함수들을 만듭니다.
- 정적 검사를 수행합니다.
- 변수를 직접 참조하던 부분을 모두 적절한 캡슐화 함수 호출로 바꿉니다. 하나씩 바꿨을 때마다 테스트합니다.
- 변수의 접근 범위를 제한합니다.
- 테스트합니다.
- 변수 값이 레코드라면 레코드 캡슐화도 고민합니다.

### 예시

```js
let defaultOwner = { firstName: '마틴', lastName: '파울러' }
export function defaultOwner() {
  return defaultOwner
}
export function settDefaultOwner(arg) {
  defaultOwner = arg
}

class Person {
  constructor(data) {
    this._lastName = data.lastName
    this._firstName = data.firstName
  }

  get lastName() {
    return this._lastName
  }
  get firstName() {
    return this._firstName
  }
}
```

핵심한 내용은 **데이터의 사용 범위가 넓을 수록 적절히 캡슐화하는 것이 중요**합니다.

<br/>

## 7. 변수 이름 바꾸기

<br/>

## 8. 매개변수 객체 만들기

<br/>

## 9. 여러 함수를 클래스로 묶기

<br/>

## 10. 여러 함수를 변환 함수로 묶기

<br/>

## 11. 단계 쪼개기
