---
sidebar_position: 6
---

# 6. React TDD 기본

## 테스트 주도 개발(Test Driven Development)이란 무엇인가?

### Test Driven Development 란 무엇인가요?

- 실제 코드를 작성하기 전에 테스트 코드를 먼저 작성합니다.
- 테스트 코드를 작성한 후 그 테스트 코드를 Pass 할 수 있는 실제 코드를 작성합니다.

### TDD를 하면 좋은 점

1. TDD를 하므로 인해 많은 기능을 테스트하기에 소스 코드에 안정감이 부여됩니다.
2. 실제 개발하면서 많은 시간이 소요되는 부분은 디버깅 부분이기에 TDD를 사용하면 디버깅 시간이 줄어들고 실제 개발 시간도 줄어듭니다.
3. 소스 코드 하나하나를 더욱 신중하게 짤 수 있기 때문에 깨끗한 코드가 나올 확률이 높습니다.

<br/>

## React Testing Library 란?

### React Testing Library란 무엇인가요?

- React Testing Library는 React 구성 요소 작업을 위한 API를 추가하여 DOM Testing Library 위에 구축됩니다.
- DOM Testing Library란 Dom 노드(Node)를 테스트하기 위한 매우 가벼운 솔루션입니다.

![react-testing-library](https://user-images.githubusercontent.com/42582516/220494847-789daced-7c3e-4402-8806-65f044e23e96.png)


```
// creat-react-app 의 경우, 바로 설치되어 있음.
npm install --save-dev @testing-library/react
```

<br/>

## Jest란?

### Jest란 무엇인가요?

- FaceBook에 의해서 만들어진 테스팅 프레임 워크입니다.
- 최소한의 설정으로 동작하며 Test Case 를 만들어서 어플리케이션 코드가 잘 돌아가는지 확인해줍니다.
- 단위 (Unit) 테스트를 위해서 이용합니다.

### Jest 시작하기

1. Jest 라이브러리 설치 npm install jest --save-dev
2. Test 스크립트 변경 "test" : "jest" or "jest --watchAll
3. 테스트 작성할 폴더 및 파일 기본 구조 생성

<br/>

## React Testing Library 주요 API

`npx create-react-app react-testing-app`

> "render" 함수
>
> - DOM에 컴포넌트를 랜더링하는 함수
> - 인자로 랜더링할 React 컴포넌트가 들어감
> Return은 RTL에서 제공하는 쿼리 함수와 기타 유틸리티 함수를 담고 있는 객체를 리턴(Destructuring 문법으로 원하는 쿼리 함수만 얻어올 수 있다.)
> - 소스 코드가 복잡해지면 비추천 !!! screen 객체를 사용하기
> - 왜냐면 사용해야 할 쿼리가 많아질수록 코드가 복잡해질 수 있음

<br/>

## 쿼리 함수에 대해서

### 쿼리 함수란?

- 쿼리는 페이지에서 요소를 찾기 위해 테스트 라이브러리가 제공하는 방법입니다. 여러 유형의 쿼리("get", "find", "query")가 있습니다. 
- 이들 간의 차이점은 요소가 발견되지 않으면 쿼리에서 오류가 발생하는지 또는 Promise를 반환하고 다시 시도하는지 여부입니다. 선택하는 페이지 콘텐츠에 따라 다른 쿼리가 다소 적절할 수 있습니다.

### get, find, query 의 차이점

- 쿼리는 페이지에서 요소를 찾기 위해 테스트 라이브러리가 제공하는 방법입니다. 여러 유형의 쿼리("get", "find", "query")가 있습니다. 
- 이들 간의 차이점은 요소가 발견되지 않으면 쿼리에서 오류가 발생하는지 또는 Promise를 반환하고 다시 시도하는지 여부입니다. 선택하는 페이지 콘 텐츠에 따라 다른 쿼리가 다소 적절할 수 있습니다.
- "getBy..."
  - 쿼리에 대해 일치하는 노드를 반환하고 일치하는 요소가 없거나 이상의 요소가 상의 일치가 발견되면 설명 오류를 발생시킵니다(둘 이상의 요소가 예 상되는 경우 대신 getAllBy 사용)
- "queryBy..."
  - 쿼리에 대해 일치하는 노드를 반환하고 일치하는 요소가 없으면 null을 반환합니다. 이것은 존재하지 않는 요소를 어설션하는 데 유용합니다. 
  - 둘 이상의 일치 항목이 발견되면 오류가 발생합니다(확인된 경우 대신 queryAllBy 사용).
- "findBy..."
  - 주어진 쿼리와 일치하는 요소가 발견되면 Promise를 반환합니다. 요소 가 발견되지 않거나 기본 제한 시간는 요소를 어설션하는 데 유용합니다. - 둘 이상의 일치 항목이 발견되면 오류가 발생합니다(확인된 경우 대신 queryAllBy 사용).

`getBy + waitFor = findBy`