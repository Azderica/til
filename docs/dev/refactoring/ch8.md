# 8. 기능 이동

아래에서는 요소를 다른 컨텍스트로 옮기는 일에 대해 이야기합니다.

- 함수 옮기기, 필드 옮기기
- 문장을 함수로 옮기기, 문장을 호출한 곳으로 옮기기, 문장 슬라이드하기, 인라인 코드를 함수 호출로 바꾸기
- 반복문 쪼개기, 반복문을 파이프라인으로 바꾸기
- 죽은 코드 제거하기

<br/>

## 1. 함수 옮기기

### 배경.

- 좋은 소프트웨어의 설계 핵심은 모듈화가 얼마나 잘 되어 있느냐를 뜻하는 모듈성입니다.
  - 모듈성은 프로그램을 수정할 때 작은 일부만 이해하도록 해주는 것입니다.
- 모든 함수는 어떤 컨텍스트 안에서 존재하며, 객체 지향의 핵심 모듈화 컨텍스트는 클래스입니다.

### 절차

1. 선택한 함수가 현재 컨텍스트에서 사용 중인 프로그램 요소를 살펴보고, 옮길 필요를 확인합니다.
2. 선택한 함수가 다형 메서드인지 확인합니다.
3. 선택한 함수를 타깃 컨텍스트로 복사합니다.
4. 정적 분석을 수행합니다.
5. 소스 컨텍스트에서 타킷 함수를 참조할 방법을 찾아 반영합니다.
6. 소스 함수를 타깃 함수의 위임 함수가 되도록 수정합니다.
7. 테스트합니다.
8. 소스 함수를 인라인할지 고민합니다.

### 예시

#### 중첩 함수를 최상위로 옮기기

- 분석하기.

```js
function trackSummary(points) {
  const totalTime = calculateTime()
  const totalDistance = calculateDistance()
  const pace = totalTime / 60 / totalDistance
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  }

  function calculateDistance() {  // 총 거리 계산
    let result = 0
    for (let i = 0; i < points.length; i++) {
      result += distance(points[i-1], points[i])
    }
    return result
  }

  function distance(p1, p2) {
    const EARTH_RADIUS = 3959
    const dLat = radians(p2.lat) - radians(p1.lat)
    const dLon = radians(p2.lon) - radians(p1.lon)
    const a = Math.pow(Math.sin(dLat/ 2), 2)
      + Math.cos(radians(p2.lat))
      + Math.cos(radians(p1.lat))
      + Math.pow(Math.sin(dLon / 2), 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return EARTH_RADIUS * c
  } // 두 지점의 거리 계산
  function radians(degrees) {
    return degrees * Math.PI / 180
  } // 라디안 값으로 변환
  function calculateTime()  { ... } // 총 시간 계산
}
```

- 함수를 최상위로 복사하기

```js
function trackSummary(points) {
  const totalTime = calculateTime()
  const totalDistance = calculateDistance()
  const pace = totalTime / 60 / totalDistance
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  }

  function calculateDistance() {  // 총 거리 계산
    let result = 0
    for (let i = 0; i < points.length; i++) {
      result += distance(points[i-1], points[i])
    }
    return result
  }

  function distance(p1, p2) { ... } // 두 지점의 거리 계산
  function radians(degrees) { ... } // 라디안 값으로 변환
  function calculateTime()  { ... } // 총 시간 계산
}

function top_calculateDistance(points) {
  let result = 0
  for (let i = 0; i < points.length; i++) {
    result += distance(points[i-1], points[i])
  }
  return result
}
```

- 문제가 없으므로 calculateDistance 함수로 옮깁니다. (top_calculateDistance 도.)

```js
function trackSummary(points) {
  const totalTime = calculateTime()
  const totalDistance = calculateDistance()
  const pace = totalTime / 60 / totalDistance
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  }

  function calculateDistance() {  // 총 거리 계산
    let result = 0
    for (let i = 0; i < points.length; i++) {
      result += distance(points[i-1], points[i])
    }
    return result

    function distance(p1, p2) { ... } // 두 지점의 거리 계산
    function radians(degrees) { ... } // 라디안 값으로 변환
    function calculateTime()  { ... } // 총 시간 계산
  }
}

function top_calculateDistance(points) {
  let result = 0
  for (let i = 0; i < points.length; i++) {
    result += distance(points[i-1], points[i])
  }
  return result

  function distance(p1, p2) { ... } // 두 지점의 거리 계산
  function radians(degrees) { ... } // 라디안 값으로 변환
  function calculateTime()  { ... } // 총 시간 계산
}
```

- 수정합니다.

```js
function trackSummary(points) {
  const totalTime = calculateTime()
  const totalDistance = top_calculateDistance()
  const pace = totalTime / 60 / totalDistance
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  }
}

function top_calculateDistance(points) {
  let result = 0
  for (let i = 0; i < points.length; i++) {
    result += distance(points[i-1], points[i])
  }
  return result

  function distance(p1, p2) { ... } // 두 지점의 거리 계산
  function radians(degrees) { ... } // 라디안 값으로 변환
  function calculateTime()  { ... } // 총 시간 계산
}
```

- 테스트 및 함수의 이름을 바꿔주고, 인라인 처리도 합니다.

```js
function trackSummary(points) {
  const totalTime = calculateTime()
  const pace = totalTime / 60 / totalDistance(points)
  return {
    time: totalTime,
    distance: totalDistance(points),
    pace: pace,
  }
}

function totalDistance(points) {
  let result = 0
  for (let i = 0; i < points.length; i++) {
    result += distance(points[i-1], points[i])
  }
  return result

  function distance(p1, p2) { ... } // 두 지점의 거리 계산
  function radians(degrees) { ... } // 라디안 값으로 변환
  function calculateTime()  { ... } // 총 시간 계산
}
```

#### 다른 클래스로 옮기기

```js
class Account {
  get bankCharge() {
    // 은행 이자 계산
    let result = 4.5
    if (this._daysOverdrawn > 0) result += this.overdraftCharge
    return result
  }

  get overdraftCharge() {
    // 초과 인출 이자 계산
    if (this.type.isPremium) {
      const baseCharge = 10
      if (this.daysOverdrawn <= 7) return baseCharge
      else return baseCharge + (this.daysOverdrawn - 7) * 0.85
    } else return this.daysOverdrawn * 1.75
  }
}
```

```js
class AccountType {
  overdraftCharge(daysOverdrawn) {
    if (this.isPremium) {
      const baseCharge = 10
      if (daysOverdrawn <= 7) return baseCharge
      else return baseCharge + (daysOverdrawn - 7) * 0.85
    } else return daysOverdrawn * 1.75
  }
}
```

```js
class Account {
  get bankCharge() {
    // 은행 이자 계산
    let result = 4.5
    if (this._daysOverdrawn > 0) result += this.overdraftCharge
    return result
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this.daysOverdrawn)
  }
}
```

```js
class Account {
  get bankCharge() {
    // 은행 이자 계산
    let result = 4.5
    if (this._daysOverdrawn > 0)
      result += this.this.type.overdraftCharge(this.daysOverdrawn)
    return result
  }
}
```

다음의 순으로 리팩터링이 진행됩니다.

<br/>

## 2. 필드 옮기기

```js
// before
class Customer {
  get plan() {
    return this._plan
  }
  get discountRate() {
    return this._discountRate
  }
}

// after
class Customer {
  get plan() {
    return this._plan
  }
  get discountRate() {
    return this.plan.discountRate
  }
}
```

### 배경

- 프로그램의 힘은 데이터 구조에서 나옵니다.
- 데이터 구조는 매우 중요하나, 제대로 하기 어렵습니다.
- 데이터 구조가 적절치 않다고 판단하면 곧바로 수정합니다.

### 절차

1. 소스 필드가 캡슐화되어 있지 않다면 캡슐화합니다.
2. 테스트합니다.
3. 타깃 객체에 필드들을 생성합니다.
4. 정적 검사를 수행합니다.
5. 소스 객체에서 타깃 체를 참조할 수 있는지 확인합니다.
6. 접근자들이 타깃 필드를 사용하도록 수정합니다.
7. 테스트합니다.
8. 소스 필드를 제거합니다.
9. 테스트합니다.

### 예시

#### 기본 예시

- 고객 클래스와 계약 클래스에서 시작합니다.

```js
class Customer {
  constructor(name, discountRate) {
    this._name = name
    this._discountRate = discountRate
    this._contract = new CustomerContract(dateToday())
  }
  get discountRate() {
    return this._discountRate
  }
  becomePreferred() {
    this._discountRate += 0.03
  }
  applyDiscount(amount) {
    this amount.subtract(amount.multiply(this._discountRate))
  }
}

class CustomerContract {
  constructor(startDate) {
    this._startDate = startDate
  }
}
```

- 필드를 캡슐화합니다.

```js
class Customer {
  constructor(name, discountRate) {
    this._name = name
    this._discountRate = discountRate
    this._contract = new CustomerContract(dateToday())
  }
  get discountRate() {
    return this._discountRate
  }
  _setDiscountRate(aNumber) {
    this._discountRate = aNumber
  }
  becomePreferred() {
    this._discountRate += 0.03
  }
  applyDiscount(amount) {
    this amount.subtract(amount.multiply(this._discountRate))
  }
}
```

- 필드와 접근자를 추가합니다.

```js
class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate
    this._discountRate = discountRate
  }
  get discountRate() {
    return this._discountRate
  }
  set discountRate(arg) {
    this._discountRate = arg
  }
}
```

- 새로운 필드를 사용하도록 수정합니다.

```js
class Customer {
  constructor(name, discountRate) {
    this._name = name
    this._contract = new CustomerContract(dateToday())
    this._setDiscountRate(discountRate)
  }
  get discountRate() {
    return this._contract.discountRate
  }
  _setDiscountRate(aNumber) {
    this._contract.discountRate = aNumber
  }
  becomePreferred() {
    this._discountRate += 0.03
  }
  applyDiscount(amount) {
    this amount.subtract(amount.multiply(this._discountRate))
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate
    this._discountRate = discountRate
  }
  get discountRate() {
    return this._discountRate
  }
  set discountRate(arg) {
    this._discountRate = arg
  }
}
```

#### 공유 객체로 이동

```js
class Account {
  constructor(number, type, interestRate) {
    this._number = number
    this._type = type
    this._interestRate = interestRate
  }
  get interestRate() {
    return this._interestRate
  }
}

class AccountType {
  constructor(nameString) {
    this._name = nameString
  }
}
```

- 필드와 메서드 생성

```js
class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString
    this._interestRate = interestRate
  }

  get interestRate() {
    return this._interestRate
  }
}
```

- 테스트 후, 변경 후 기존 코드 삭제

```js
class Account {
  constructor(number, type) {
    this._number = number
    this._type = type
  }
  get interestRate() {
    return this._type.interestRate
  }
}
```

<br/>

## 3. 문장을 함수로 옮기기

```js
// before
result.push(`<p>제목: ${person.photo.title}</p>`)
result.concat(photoData(person.photo))

function photoData(aPhoto) {
  return [`<p>위치: ${aPhoto.location}</p>`, `<p>위치: ${aPhoto.data}</p>`]
}

// after
result.concat(photoData(person.photo))

function photoData(aPhoto) {
  return [
    `<p>제목: ${aPhoto.title}</p>`,
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>위치: ${aPhoto.data}</p>`,
  ]
}
```

### 배경

- 중복 제거는 코드를 건강하게 관리하는 효과적인 방법 중 하나입니다.
- 문장들을 함수로 옮기려면 그 문장들이 피호출 함수의 일부라는 확신이 있어ㅗ야합니다.

### 절차

1. 반복 코드가 함수 호출 부분과 멀리 떨어져 있다면 문장 슬라이드하기를 적용해 근처로 옮깁니다.
2. 타깃 함수를 호출하는 곳이 한 곳뿐이면, 단순히 소스 위치에서 해당 코드를 잘라내어 피호출 함수로 복하고 테스트합니다.
3. 호출자가 둘 이상이면 호출자 중 하나에서 타깃 함수 호출 부분과 그 함수로 옮기려는 문장들을 함께 다른 함수로 추출합니다. 추출한 함수에는 기억하기 쉬운 임시 이름을 지어줍니다.
4. 다른 호출자 모두가 방금 추출한 함수를 사용하도록 수정합니다. 하나씩 수정할 때마다 테스트합니다.
5. 모든 호출자가 새로운 함수를 사용하게 되면 원래 함수를 새로운 함수 안으로 인라인한 후 우ㅓㄴ래 함수를 제거합니다.
6. 새로운 함수의 이름을 원래 함수의 이름으로 바꿔줍니다.

### 예시

- 사진 관련 데이터를 HTML로 내보내는 코드를 준비합니다.

```js
function renderPerson(outStream, person) {
  const result = []
  result.push(`<p>${person.name}</p>`)
  result.push(renderPhoto(person.photo))
  result.push(`<p>제목: ${person.photo.title}</p>`)
  result.push(emitPhotoData(person.photo))
  return result.join('\n')
}

function photoDiv(p) {
  return ['<div>', `<p>제목: ${p.title}</p>`, emitPhotoData(p), '</div>'].join(
    '\n'
  )
}

function emitPhotoData(aPhoto) {
  const result = []
  result.push(`<p>위치: ${aPhoto.location}</p>`)
  result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`)
  return result.join('\n')
}
```

- 함수 추출합니다.

```js
function photoDiv(p) {
  return ['<div>', zznew(p), '</div>'].join('\n')

  function zznew(p) {
    return [`<p>제목: ${p.title}</p>`, emitPhotoData(p)].join('\n')
  }
}
```

- 새로운 함수를 사용하도록 수정합니다.

```js
function renderPerson(outStream, person) {
  const result = []
  result.push(`<p>${person.name}</p>`)
  result.push(renderPhoto(person.photo))
  result.push(zznew(person.photo))
  return result.join('\n')
}
```

- emitPhotoData() 함수를 인라인합니다.

```js
function zznew(p) {
  return [
    `<p>제목: ${p.title}</p>`,
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
  ].join('\n')
}
```

- 함수 이름을 바꿔서 마무리 합니다.

```js
function renderPerson(outStream, person) {
  const result = []
  result.push(`<p>${person.name}</p>`)
  result.push(renderPhoto(person.photo))
  result.push(emitPhotoData(person.photo))
  return result.join('\n')
}

function photoDiv(p) {
  return ['<div>', emitPhotoData(p), '</div>'].join('\n')
}

function emitPhotoData(p) {
  return [
    `<p>제목: ${p.title}</p>`,
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
  ].join('\n')
}
```

<br/>

## 4. 문장을 호출한 곳으로 옮기기

```js
// before
emitPhotoData(outStream, person.photo)

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>`)
  outStream.write(`<p>위치: ${photo.location}</p>`)
}

// after
emitPhotoData(outStream, person.photo)
outStream.write(`<p>위치: ${person.photo.location}</p>`)

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>`)
}
```

### 배경

- 함수는 프로그래머가 쌓아 올리는 추상화의 기본 빌딩 블록
- 옮기기 리팩터링을 통해서 독립적으로 수정가능합니다.

### 절차

1. 호출자가 한두개뿐이고 피호출 함수도 간단한 단순한 상황이면, 피호출 함수의 처음 줄을 잘라내어 호출자들로 복사해서 넣습니다.
2. 더 복잡한 경우에는 모든 문장을 함수로 추출한 다음 검색하기 쉬운 임시 이름을 지어줍니다.
3. 원래 함수를 인라인합니다.
4. 추출된 함수의 이름을 원래 함수의 이름으로 변경합니다.

### 예시

- 3번 코드의 반대와 가까워서 생략함

<br/>

## 5. 인라인 코드를 함수 호출로 바꾸기

```js
// before
let appliesToMass = false
for (const s of states) {
  if (s === 'MA') appliesToMass = true
}

// after
appliesToMass = states.includes('MA')
```

### 배경

- 함수는 여러 동작을 하나로 바꿔줍니다.

### 절차

- 인라인 코드를 함수 호출로 변경합니다.
- 테스트합니다.

<br/>

## 6. 문장 슬라이드하기

```js
// before
const pricingPlan = retrievePricingPlan()
const order = retrieveOrder()
let charge
const chargePerUnit = pricingPlan.unit

// after
const pricingPlan = retrievePricingPlan()
const chargePerUnit = pricingPlan.unit
const order = retrieveOrder()
let charge
```

### 배경

- 관련된 코드들이 가까이 모여 있다면 이해하기가 더 쉽습니다.
- 관련 코드를 모으는 것은 다른 리팩터링의 준비 단계로 행해집니다.

### 절차

1. 코드 조각을 이동할 목표 위치를 찾습니다. 이때 변경을 했을 때 문제가 있다고 판단하면 포기합니다.
2. 코드 조각을 원래 위치에서 잘라내어 목표 위치에 붙여 넣습니다.
3. 테스트합니다.

<br/>

## 7. 반복문 쪼개기

```js
// before
let averageAge = 0
let totalSalary = 0
for (const p of people) {
  averageAge += p.age
  totalSalary += p.salary
}
averageAge = averageAge / people.length

// after
let totalSalary = 0
for (const p of people) {
  totalSalary += p.salary
}
let averageAge = 0
for (const p of people) {
  averageAge += p.age
}
averageAge = averageAge / people.length
```

### 배경

- 종종 반복문 하나에서 두가지 일을 수행하면 반복문 수정시 두가지 일 모두를 이해하고 진행해야합니다.
- 다만 이는 최적화와 다르게 때문에 이러한 방식이 있습니다. 다만 이는 성능상 문제로 인해 필요하다고 판단되는 경우에 맞춰서 모아도 문제는 없습니다.

### 절차

1. 반복문을 복제해 두 개로 만듭니다.
2. 반복문이 중복되어 생기는 부수효과를 파악해서 제거합니다.
3. 테스트합니다.
4. 완료되었으면 각 반복문을 함수로 추출할지 고민합니다.

### 예시

- 리팩터링 전

```js
let youngest = people[0] ? people[0].age : Infinity
let totalSalary = 0
for (const p of people) {
  if (p.age < youngest) youngest = p.age
  totalSalary += p.salary
}

return `최연소: ${youngestAge()}, 총 급여: ${totalSalary()}`
```

- 리팩터링 후

```js
function totalSalary() {
  let totalSalary = 0
  for (const p of people) {
    totalSalary += p.salary
  }
  return totalSalary
}

function youngestAge() {
  let youngest = people[0] ? people[0].age : Infinity
  for (const p of people) {
    if (p.age < youngest) youngest = p.age
  }
  return youngest
}
```

- 알고리즘 리팩터링까지 젹용

```js
return `최연소: ${youngestAge()}, 총 급여: ${totalSalary()}`

function totalSalary() {
  return people.reduce((total, p) => total + p.salary, 0)
}

function youngestAge() {
  return Math.min(...people.map((p) => p.age))
}
```

<br/>

## 8. 반복문을 파이프라인으로 바꾸기

<br/>

## 9. 죽은 코드 제거하기
