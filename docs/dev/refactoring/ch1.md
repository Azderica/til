# 리팩터링: 첫 번째 예시

## 리팩토링 전 코드

리팩토링을 하기 전, 공연료 청구서에 들어갈 데이터를 표한한 코드는 다음과 같습니다.

```js
function statement(invoice, plays) {
  let totalAmount = 0
  let volumeCredits = 0
  let result = `청구 내역 (고객명: ${invoice.custmoer})\n`
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format

  for (let perf of invoice.performance) {
    const play = plays[perf.playID]
    let thisAmount = 0

    switch (play.type) {
      case 'tragedy': // 비극
        thisAmount = 40000
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30)
        }
        break
      case 'comedy': // 희극
        thisAmount = 30000
        if (perf.audience > 20) {
          thisAmount += 10000 + 500 * (perf.audience - 20)
        }
        thisAmount += 300 * perf.audience
        break
      default:
        throw new Error(`알 수 없는 장르: ${play.type}`)
    }

    // 포인트 적립
    volumeCredits += Math.max(perf.audience - 30, 0)
    // 희극 관객 5명마다 추가 포인트를 제공합니다.
    if ('commedy' === play.type) volumeCredits += Math.floor(perf.audience / 5)

    // 청구 내역을 출력한다.
    result += `  ${play.name}: ${format(thisAmount / 100)} (${
      perf.audience
    }석\n)`
    totalAmount += thisAmount
  }
  result += `총액: ${format(totalAmount / 100)}\n`
  result += `적립 포인트: ${volumeCredits}점\n`
  return result
}
```

인풋 파일은 다음과 같습니다.

```json
// plays.json
{
  "hamlet": { "name": "Hamlet", "type": "tragedy" },
  "as-like": { "name": "As You Like It", "type": "comedy" },
  "othello": { "name": "Othello", "type": "tragedy" }
}
```

```json
// invoices.json
[
  {
    "customer": "BigCo",
    "performances": [
      {
        "playID": "hamlet",
        "audience": 55
      },
      {
        "playID": "as-like",
        "audience": 35
      },
      {
        "playID": "othello",
        "audience": 40
      }
    ]
  }
]
```

### 코드 문제점

```
프로그램이 새로운 기능을 추가하기에 편한 구조가 아니라면 먼저 기능을 추가하기 쉬운 형태로 리팩터링하고 나서 원하는 기능을 추가합니다.
```

다음을 먼저 수정해야합니다.

- 청구 내역을 HTML로 출력하는 기능 필요
- 변경 상항이 이후에 들어왔을 때를 고려해야합니다.

리팩토링의 단계

-리팩토링의 첫단계는 제대로 된 테스트 코드를 작성하는 것입니다.

## 중간 리팩터링 코드 적용

이를 쪼갠 코드는 다음과 같습니다.

```js
function statement(invoice, plays) {
  let result = `청구 내역 (고객명: ${invoice.customer})\n`
  for (let perf of invoice.performances) {
    result += `${playFor(perf).name}: ${usd(amountFor(perf))} (${
      perf.audience
    }석\n)`
    result += `총액: ${usd(totalAmount())}\n`
    result += `적립 포인트: ${totalVolumeCredits()}점\n`
    return result

    function totalAmount() {
      let result = 0
      for (let perf of invoice.performances) {
        result += amountFor(perf)
      }
      return result
    }

    // 중첩 함수 시작
    function totalVolumeCredits() {
      let result = 0
      for (let perf of invoice.performances) {
        result += volumeCreditsFor(perf)
      }
      return result
    }

    function usd(aNumber) {
      return new Intl.NumberFormat('en_US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      }).format(aNumber / 100)
    }

    function volumeCreditsFor(aPerformance) {
      let result = 0
      result += Math.max(aPerformance.audience - 30, 0)
      if ('comedy' === playFor(aPerformance).type)
        result += Math.floor(aPerformance.audience / 5)
      return result
    }

    function playFor(aPerformance) {
      return plays[aPerformance.playID]
    }

    function amountFor(aPerformance) {
      let result = 0
      switch (playFor(aPerformance).type) {
        case 'tragedy': // 비극
          result = 40000
          if (aPerformance.audience > 30) {
            result += 1000 * (aPerformance.audience - 30)
          }
          break
        case 'comedy': // 희극
          result = 30000
          if (aPerformance.audience > 20) {
            result += 10000 + 500 * (aPerformance.audience - 20)
          }
          result += 300 * aPerformance.audience
          break
        default:
          throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`)
      }
      return result
    }
  } // statement 끝
}
```
