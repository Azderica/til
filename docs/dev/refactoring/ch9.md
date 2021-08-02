---
sidebar_position: 9
---

# 9. 데이터 조직화

- 변수 쪼개기, 변수 이름 바꾸기, 파생 변수를 질의 함수로 바꾸기
- 참조를 값으로 바꾸기, 값을 참조로 바꾸기
- 매직 리터럴 바꾸기

## 변수 쪼개기

```js
// before
let temp = 2 * (height + width)
console.log(temp)
temp = height * width
console.log(temp)

// after
const perimeter = 2 * (height + width)
console.log(perimeter)
const area = height * width
console.log(area)
```

### 배경

- 참조 목적으로 쓰는 변수는 값을 한번만 대입하는 것이 좋습니다.
- 여러 목적으로 쓰인 변수는 혼란을 줍니다.

### 절차

1. 변수를 선언한 곳과 값을 처음 대입하는 곳에서 변수 이름을 바꿉니다.
2. 가능하면 이때 불변으로 선언합니다.
3. 이 변수에 두 번째로 값을 대입하는 곳 앞까지의 모든 참조를 새로운 변수 이름으로 바꿉니다.
4. 두 번째 대입 시 변수를 원래 이름으로 다시 선언합니다.
5. 테스트합니다.
6. 반복합니다.

### 예시

```js
function distanceTravelled(scenario, time) {
  let result
  let acc = scenario.primaryForce / scenario.mass
  let primaryTime = Math.min(time, scenario.delay)
  result = 0.5 * acc * primaryTime * primaryTime
  let secondaryTime = time - scenario.delay
  if (secondaryTime > 0) {
    let primaryVelocity = acc * scenario.delay
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass
    result +=
      primaryVelocity * secondaryTime +
      0.5 * acc * secondaryTime * secondaryTime
  }
  return result
}
```

- 일부 리팩토링 이후.

```js
function distanceTravelled(scenario, time) {
  let result
  const primaryAcceleration = scenario.primaryForce / scenario.mass
  let primaryTime = Math.min(time, scenario.delay)
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime
  let secondaryTime = time - scenario.delay
  if (secondaryTime > 0) {
    let primaryVelocity = acc * scenario.delay
    const secondaryAcceleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime
  }
  return result
}
```

#### 입력 매개 변수 수정 시

```js
function discount(inputValue, quantity) {
  if (inputValue > 50) inputValue = inputValue - 2
  if (quantity > 100) inputValue = inputValue - 1
  return inputValue
}
```

```js
function discount(originalInputValue, quantity) {
  let inputValue = originalInputValue
  if (inputValue > 50) inputValue = inputValue - 2
  if (quantity > 100) inputValue = inputValue - 1
  return inputValue
}
```

```js
function discount(inputValue, quantity) {
  let result = inputValue
  if (inputValue > 50) result = result - 2
  if (quantity > 100) result = result - 1
  return result
}
```

<br/>

## 필드 이름 바꾸기

```js
// before
class Organization {
  get name() {...}
}

// after
class Organization {
  get title() {...}
}
```

### 배경

- 데이터 구조는 프로그램을 이해하는데 큰 역할을 하며, 이름이 중요합니다.

### 절차

1. 레코드의 유효 범위가 제한적이라면 필드에 접근하는 모든 코드를 수정한 후 테스트합니다. 이후 단계는 필요없습니다.
2. 레코드가 캡슐화되지 않았다면 우선 레코드를 캡슐화합니다.
3. 캡슐화된 객체 안의 private 필드명을 변경하고, 그에 맞게 내부 메서드들을 수정합니다.
4. 테스트합니다.
5. 생성자의 매개변수 중 필드와 이름이 겹치는 게 있다면 함수 선언 바꾸기로 변경합니다.
6. 접근자들의 이름도 바꿀 수 있습니다.

### 예시

```js
class Organization {
  constructor(data) {
    this._name = data.name
    this._country = data.country
  }
  get name() {
    return this._name
  }
  set name(aString) {
    this._name = aString
  }
  get country() {
    return this._country
  }
  set country(aCountry) {
    this._country = aCountry
  }
}

const organization = new Organization({
  name: '애크리 구스베리',
  country: 'GB',
})
```

- 리팩토링 이후

```js
class Organization {
  constructor(data) {
    this._title = data.title
    this._country = data.country
  }
  get title() {
    return this._title
  }
  set title(aString) {
    this._title = aString
  }
  get country() {
    return this._country
  }
  set country(aCountry) {
    this._country = aCountry
  }
}

const organization = new Organization({
  title: '애크리 구스베리',
  country: 'GB',
})
```

<br/>

## 파생 변수를 질의 함수로 바꾸기

```js
// before
get discountedTotal() {return this._discountedTotal}
set discount(aNumber) {
  const old = this._discount
  this._discount = aNumber
  this._discountedTotal += old - aNumber
}

// after
get discountedTotal() {return this._discountedTotal}
set discount(aNumber) {this._discount = aNumber;}
```

### 배경

- 가변 데이터는 소프트웨어에 문제를 일으킵니다.
- 가변 데이터의 유효 범위를 가능한 줄이는 것이 좋습니다.
- 쉽게 계산해낼 수 있는 변수값은 제거합니다.
- 다음의 경우는 예외입니다.
  - 데이터 구조를 감싸며 그 데이터에 기초해서 계산한 결과를 속성으로 제공하는 객체인 경우
  - 데이터 구조를 받아 다른 데이터 구조로 변환해 반환하는 함수인 경우

### 절차

1. 변수 값이 갱신되는 지점을 모두 찾습니다. 필요하면 변수 쪼개기를 활용해서 각 갱신 지점에서 변수를 분리합니다.
2. 해당 변수의 값을 계산해주는 함수를 만듭니다.
3. 해당 변수가 사용되는 모든 곳에 어시션을 추가하여 함수의 계산 결과가 변수의 값과 같은지 확인합니다.
4. 테스트합니다.
5. 변수를 읽는 코드를 모두 함수 호출로 대체합니다.
6. 테스트합니다.
7. 변수를 선언하고 갱신하는 코드를 죽은 코드 제거하기로 없앱니다.

### 에시

```js
class ProductionPlan {
  get production() {
    return this._production
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment)
    this._production += anAdjustment.amount
  }
}
```

- 신규 함수를 생성합니다.
- assert를 통해서 테스트합니다.
- 필드를 반환하는 코드를 수정해서 계산 결과를 직접 반환합니다.
- 기존 메서드를 인라인합니다.
- 옛 변수를 참조하는 모든 코드를 죽은 코드 제거하기로 정리합니다.

```js
class ProductionPlan {
  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0)
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment)
  }
}
```

<br/>

## 참조를 값으로 바꾸기

```js
// before
class Product {
  applyDiscount(arg) {
    this._price.amount -= arg
  }
}

// after
class Product {
  applyDiscount(arg) {
    this._price = new Money(this._price.amount - arg, this._price.currency)
  }
}
```

### 배경

- 객체를 다른 객체에 중첩하면 내부 객체를 참조 혹은 값으로 취급할 수 있습니다.

### 절차

1. 후보 클래스가 불변인지, 혹은 불변이 될 수 있는지 확인합니다.
2. 각각의 세터를 하나씩 제거합니다.
3. 이 값 객체의 필드들을 사용하는 동치성 비교 메서드를 만듭니다.

### 예시

```js
class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber()
  }
  get officeAreaCode() {
    return this._telephone.areaCode
  }
  set officeAreaCode(arg) {
    this._telephone.areaCode = arg
  }
  get officeNumber() {
    return this._telephone.number
  }
  set officeNumber(arg) {
    this._telephone.number = arg
  }
}

class TelephoneNumber {
  get areaCode() {
    return this._areaCode
  }
  set areaCode(arg) {
    this._areaCode = arg
  }
  get number() {
    return this._number_
  }
  set number(arg) {
    this._number = arg
  }
}
```

<br/>

## 값을 참조로 바꾸기

<br/>

## 매직 리터럴 바꾸기
