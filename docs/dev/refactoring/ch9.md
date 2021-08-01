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

<br/>

## 파생 변수를 질의 함수로 바꾸기

<br/>

## 참조를 값으로 바꾸기

<br/>

## 값을 참조로 바꾸기

<br/>

## 매직 리터럴 바꾸기
