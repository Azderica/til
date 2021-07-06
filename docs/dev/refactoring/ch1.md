# 1. 리팩터링: 첫 번째 예시

## 리팩토링 전 코드

리팩토링을 하기 전, 공연료 청구서에 들어갈 데이터를 표한한 코드는 다음과 같습니다.

```js
function statement(invoice, plays) {
  let totalAmount = 0
  let volumeCredits = 0
  let result = `청구 내역 (고객명: ${invoice.customer})\n`
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

물론 짧은 코드라서 바로 확인이 가능하지만. 아래의 부분이 필요합니다.

- 청구 내역을 HTML로 출력하는 기능이 필요합니다.
- 변경 상항이 이후에 들어왔을 때를 고려해서 개발을 해야합니다.

### 리팩토링 전략

```
프로그램이 새로운 기능을 추가하기에 편한 구조가 아니라면 먼저 기능을 추가하기 쉬운 형태로 리팩터링하고 나서 원하는 기능을 추가합니다.
```

들어가기에 앞서서, 리팩토링 코드를 적용하는 것은 먼저 테스트 코드를 마련하는 것입니다. 아래 내용에서는 테스트 코드를 미리 작성했다고 가정하고 사용하는 것이 좋습니다.

테스트 코드 프레임워크

- mocha.js
- chai.js

<br/>

## 중간 리팩터링 코드 적용

### 문제점.

다음의 내용을 수정했습니다.

- 함수 추출하기
- 임의 변수를 질의 함수로 바꿉니다.
- 변수에 인라인을 적용합니다. (한줄로 표현할 수 있도록)
  - 추출 작업이 편해집니다.
  - 함수 선언을 바꿀 수 있습니다.
- 필요없는 주석은 제거합니다.
- 반복문을 쪼갭니다.

### 코드

앞에서 나온 코드를 쪼갠 결과는 다음과 같습니다.

다만, 아직도 중첩 함수가 존재합니다.

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

다음 코드의 문제는 다음과 같습니다. 일부 함수를 작게 쪼갰지만, 기능에 대한 분리가 되지 않았습니다. 그리고 중첩 함수가 많은 것을 확인할 수 있습니다. (앞서 진행한 방법은 코드의 구조를 보강하는데 힘을 쓴것입니다. 즉, 골격 개선 작업이였습니다.)

### 다음 수정사항

- 반복문을 파이프라인으로 바꿉니다.
- 기능에 따라 두 파일로 나눕니다.
- 다형성을 활용해서 계산 코드를 재구성했습니다. (조건부 로직을 다형성으로 수정합니다.)
- 생성자를 팩토리 패턴으로 수정합니다.
- 함수를 인라인으로 해서 새함수를 직접 호출하도록 수정합니다.

<br/>

## 최종 코드

```js
// statement.js
// 출력용 파일입니다.
import createStatementData from './createStatementData.js'

function statement(invoice, plays) {
  return renderPlayText(createStatementData(invoice, plays))
}

function renderPlayText(data, plays) {
  let result = `청구 내역 (고객명: for ${data.customer})\n`
  for (let perf of data.performances) {
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${
      perf.audience
    }석\n)`
  }
  result += `총액: ${usd(totalAmount())}\n`
  result += `적립 포인트: ${totalVolumeCredits()}점\n`
  return result
}

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays))
}

function renderHtml(data) {
  let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`
  result += '<table>\n'
  result += '<tr><th>연극</th><th>좌석 수</th><tr>금액</tr></tr>'
  for (let perf of data.performances) {
    result += ` <tr><td>${perf.play.name}</td><td>(${perf.audience}석)</td></tr>`
    result += `<td>${usd(perf.amount)}</td></tr>\n`
  }
  result += '</table>'
  result += `<p>총액: <em>${usd(data.totalAmount)}</em></p>\n`
  result += `<p>적립 포인트: <em>${data.totalVolumeCredits}</em>점</p>\n`
  return result
}

function usd(aNumber) {
  return new Intl.NumberFormat('en_US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100)
}
```

```js
// createStatementData.js
// 계산에 대한 로직을 수행합니다.
export default function createStatementData(invoice, plays) {
  const result = {}
  result.customer = invoice.customer
  result.performances = invoice.performances.map(enrichPerformance)
  result.totalAmount = totalAmount(result)
  result.totalVolumeCredits = totalVolumeCredits(result)
  return result

  function enrichPerformance(aPerformance) {
    const calculator = createPerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    )
    const result = Object.assign({}, aPerformance)
    result.play = calculator.play
    result.amount = calculator.amount
    result.volumeCredits = calculator.volumeCredits
    return result
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID]
  }
  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0)
  }

  function totalVolumeCredits() {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0)
  }
}

function createPerformanceCalculator(aPerformance, aPlay) {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, aPlay)
    case 'comedy':
      return new ComedyCalculator(aPerformance, aPlay)
    default:
      throw new Error(`알 수 잆는 장르: ${(aPlay, type)}`)
  }
}

class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance
    this.play = aPlay
  }

  get amount() {
    throw new Error('서브 클래스에서 처리하도록 설계되었습니다.')
  }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0)
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000
    if (aPerformance.audience > 30) {
      result += 1000 * (aPerformance.audience - 30)
    }
    return result
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000
    if (aPerformance.audience > 20) {
      result += 10000 + 500 * (aPerformance.audience - 20)
    }
    result += 300 * aPerformance.audience
    return result
  }

  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5)
  }
}
```

- 다음 코드는 계산 단계와 포맷팅단계를 분리했습니다.
- 다형성을 통해서 반복문을 줄였습니다.
- 그외에도 여러 수정을 진행했습니다.

<br/>

## 결론.

### 사용된 리팩토링 기법

- 함수 추출
- 변수 인라인
- 함수 옮기기
- 조건부 로직 다형성

### 리팩토링의 순서

1. 원본 함수를 여러개로 나눕니다.
2. 단계를 쪼갭니다. (위의 코드에서는 계산과 출력을 나눕니다.)
3. 계산 로직을 다형성에 맞게 구성합니다.

### 테스트 코드

- [JS-TEST CH1](https://github.com/Azderica/js-test/tree/master/ch1)

### 마무리.

리팩토링을 통해서 좋은 코드를 구성할 수 있습니다. **좋은 코드를 가늠하는 방법 중 하나는 얼마나 수정하기 쉬운가에 대한 것입니다.** 건강한 코드는 **생산성을 극대화**하고, **고객에게 필요한 기능을 더 빠르고 저렴한 비용으로 제공**하도록 해줍니다.
