---
sidebar_position: 3
---

# To-Do 앱 최적화하기

## React Hooks란 무엇인가?

- class 없이 state를 사용할 수 있는 새로운 기능

### React Hooks이 필요한 이유

![React Component](https://user-images.githubusercontent.com/42582516/216848364-32f0024c-e02f-4627-bb87-27ff5fd7eba8.png)

- Class Component와 Functional Component 비교

![React 생명주기](https://user-images.githubusercontent.com/42582516/216848394-79948a78-020a-46e2-9a20-bec4062698ed.png)

### 함수형 컴포넌트의 이점

![함수형 이점 1](https://user-images.githubusercontent.com/42582516/216848417-5e578a41-0349-4f97-a7ef-2522c8364ebd.png)

![함수형 이점 2](https://user-images.githubusercontent.com/42582516/216848429-de346f64-c9dc-4751-9cda-c5abe2b37985.png)

- react hooks을 사용시 useEffect 안에서 다 처리할 수 있습니다.

### HOC(Higher Order Component)

- 화면에서 재사용 가능한 로직만을 분리해서 component로 만들고, 재사용 불가능한 UI와 같은 다른 부분들은 parameter로 받아서 처리하는 방법

![before](https://user-images.githubusercontent.com/42582516/216848570-601ddb2e-07b7-41a2-ac25-17cbdd68985f.png)

![image](https://user-images.githubusercontent.com/42582516/216848583-3f08a89b-2231-4f81-8016-542ab6175edb.png)

- 그러나 이러한 방식은 많은 Wrapper 컴포넌트가 생길 수 있습니다.

![Wrapper 문제](https://user-images.githubusercontent.com/42582516/216848622-8f675275-044b-4c92-9540-f13ac71cbbe2.png)

- 이를 해결하는 방법은 다음과 같습니다.

![image](https://user-images.githubusercontent.com/42582516/216848667-02654c30-f750-43e0-b0a9-ff5f1f33d908.png)

- 클래스와 함수명은 이후 babel 동작을 보았을 때, 파일 크기가 다릅니다.

![babel-before](https://user-images.githubusercontent.com/42582516/216848730-36e8c7ef-c686-44b7-9f61-2fe3f393f2db.png)

![babel-after](https://user-images.githubusercontent.com/42582516/216848735-39beefc1-689b-48c4-8915-9963a9db5bd4.png)

### Hooks 관련 문제들

- HOC란 무엇인가?
  - High Order Component의 약자
  - 컴포넌트를 인자로 받아서 새로운 리액트 컴포넌트를 리턴
- 너무 많은 HOC를 사용하게 되면 Wrapper가 너무 많아지는데 이를 처리하는 방법은
  - Custom Hooks을 이용해서 컴포넌트를 만들어서 처리를 할 수 있습니다.
- 생명주기를 위해서 Hooks에서는 어떤 api를 사용하나요?
  - componentDidMount
  - componentDidUpdate
  - componentWillUnmount
- Hooks에서 state를 업데이트 해주려면 어떻게 해야하나요?
  - state를 정의해 줄때 아래와 같으 작성합니다.
  - `const [name, setName] = useState("");`
- Class 컴포넌트와 비교했을 때 함수형 컴포넌트의 장점
  - 더 짧고 간결한 코드
  - 더 빠른 성능
  - 더 나은 가독성

<br/>

## 리액트 Hooks를 이용해서 To-Do 앱을 함수형 컴포넌트로 바꾸기

- 생략

## State와 Props

- Props
  - Props는 Properties의 줄임말.
  - Props는 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터등을 전달하는 방법
  - Props는 읽기 전용(immutable)으로 자녀 컴포넌트 입장에서는 변하지 않는다. (변하게 하고자 하면 부모 컴포넌트에서 state를 변경시켜줘야한다.)
- State
  - 부모 컴포넌트에서 자녀 컴포넌트로 데이터를 보내는게 아닌 해당 컴포넌트 내부에서 데이터를 전달하려면? State으로 예를 들어서 검색 창에 글을 입력할떄 글이 변하는것은 state을 바꿈
  - State 는 변경 가능(mutable) 
  - State 이 변하면 re-render 된다.

<br/>

## 구조 분해 할당

### 구조 분해 할당이란 ? (ES6)

- 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 Javascript 표현식

![객체 구조 분해 할당](https://user-images.githubusercontent.com/42582516/217107331-c295178f-5571-453b-a66e-2ef475fabb42.png)

![객체 구조 분해 할당 심화](https://user-images.githubusercontent.com/42582516/217107382-f91857f0-7f43-497a-910a-287be9dab24e.png)

![배열 구조 분해 할당](https://user-images.githubusercontent.com/42582516/217107431-3b28b265-3c49-433e-b165-91babea6a5e8.png)
