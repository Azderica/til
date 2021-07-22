# 8. 기능 이동

아래에서는 요소를 다른 컨텍스트로 옮기는 일에 대해 이야기합니다.

- 함수 옮기기, 필드 옮기기
- 문장을 함수로 옮기기, 문장을 호출한 곳으로 옮기기, 문장 슬라이드하기, 인라인 코드를 함수 호출로 바꾸기
- 반복문 쪼개기, 반복문을 파이프라인으로 바꾸기
- 죽은 코드 제거하기

<br/>

## 함수 옮기기

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

- 이가 문제가 없으므로 calculateDistance 함수로 옮깁니다. (top_calculateDistance 도.)

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

## 필드 옮기기

<br/>

## 문장을 함수로 옮기기

<br/>

## 문장을 호출한 곳으로 옮기기

<br/>

## 인라인 코드를 함수 호출로 바꾸기

<br/>

## 문장 슬라이드하기

<br/>

## 반복문 쪼개기

<br/>

## 반복문을 파이프라인으로 바꾸기

<br/>

## 죽은 코드 제거하기
