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

<br/>

## 참조를 값으로 바꾸기

<br/>

## 값을 참조로 바꾸기

<br/>

## 매직 리터럴 바꾸기
