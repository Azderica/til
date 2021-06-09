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
