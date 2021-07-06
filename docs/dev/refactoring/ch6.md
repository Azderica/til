# 6. 기본적인 리팩터링

해당 챕터에서는 가장 기본적인 리팩터링을 소개합니다.

가장 많이 사용하는 것은 다음과 같습니다.

- 함수 추출하기, 변수 추출하기
- 함수 인라인하기, 변수 인라인하기
- 함수 선언 바꾸기, 변수 이름 바꾸기, 매개변수 객체 만들기
  - 함수 이름을 변경할 때 주로 사용
  - 변수 캡슐화와 꽌련이 있습니다.
- 여러 함수를 클래스로 묶기, 여러 함수를 변환 함수로 묶기, 단계 쪼개기

## 함수 추출하기

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
