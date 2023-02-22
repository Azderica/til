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