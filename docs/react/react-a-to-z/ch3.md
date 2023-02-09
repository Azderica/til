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

<br/>

## 리액트 모듈 종속성 에러 해결 방법

- `--legacy-peer-deps` :  기존 버전 다 무시하고 일단 설치.
- `--force` : package-lock.json에 몇가지의 다른 의존 버전들을 추가하면서 설치.

<br/>

## TailWindCSS

### TailWindCSS란 무엇인가요?

- HTML 안에서, CSS 스타일을 만들 수 있게 해주는 CSS 프레임 워크 입니다.

###  CSS 프레임 워크는 무엇인가요?

- CSS 프레임워크는 레이아웃 및 여러 컴포넌트 구성, 브라우저 호환성을 보장하는데 소요되는 시간을 최소화하기 위해 여러 웹 개발/디자인 프로젝트에 적용할 수 있는 CSS 파일 모음입니다.

### Tailwind CSS의 장점
Tailwind CSS는 부트스트랩과 비슷하게 m-1, flex와 같이 미리 세팅된 Uitility Class 를 활용하는 방식으로 HTML 에서 스타일링을 할 수 있다. 

1. 빠른 스타일링 작업이 가능합니다.
2. class 혹은 id 명을 작성하기 위한 고생을 하지 않아도 ehlqslek..
3. 유틸리티 클래스가 익숙해지는 시간이 필요할 수 있지만 IntelliSense 플러그인이 제공돼서 금방 익숙해질 수 있습니다.

> react-beautiful-dnd react 18 버전 에러 해결 방법
>
> - 리액트 18버전을 사용할 때 드래그 앤 드랍 기능을 사용하면 이러한 에러가 나옵니다.
> - 해결방법은 리액트의 StricMode를 제거합니다.

<br/>

## Drag and Drop 기능 추가

### Drag and Drop 기능 구현 순서

-  HTML 드래그 앤 드롭 API를 사용하여 원하는 목록을 드래그 가능하게 만듭니다. (https://developer.mozilla.org/ko/docs/Web/API/HTML_Drag_and_Drop_API)
- 사용자가 드래그를 할 때 적절한 애니메이션을 줍니다.
- 사용자가 드래그를 멈췄는지 확인합니다. 그리고 여기에도 애니메이션을 줍니다. 
- 클라이언트가 목록을 재정렬한 경우 항목의 위치를 새 항목으로 업데이트합니다.

=====> 이것을 쉽게 구현할 수 있게 도와주는 모듈이 react-beautiful-dnd

### 필요 모듈 설치하기

- npm install react-beautiful-dnd --save

- `<DragDropContext />` - Wraps the part of your application you want to have drag and drop enabled for
- `<Droppable />` - An area that can be dropped into. Contains `<Draggable />` s
- `<Draggable />` - What can be dragged around


<br/>

## 리액트 불변성 지키기

### 리액트에서 불변성이란 무엇인가?

- 불변성이란 사전적 의미로는 값이나 상태를 변경할 수 없는 것을 의미합니다.

### 자바스크립트 타입을 통한 불변성 의미 살펴보기

- 원시 타입은 불변성(immutable)을 가지고 있고 참조 타입은 그렇지 습니다(mutable) 
  - 원시 타입 : Boolean, String, Number, null, undefined, Symbol (불변성을 가지고 있다.) 
  - 참조 타입: Object, Array

### 불변성을 지켜야 하는 이유는 ?

1. 참조 타입에서 객체나 배열의 값이 변할 때 원본 데이터가 변경되기에 이 원본 데이터를 참 조하고 있는 다른 객체에서 예상치 못한 오류가 발생할 수 있어서 프로그래밍의 복잡도가 올라 갑니다.
2. 리액트에서 화면을 업데이트할 때 불변성을 지켜서 값을 이전 값과 비교해서 변경된 사항을 확인한 후 업데이트하기 때문에 불변성을 지켜줘야 합니다

### 불변성을 지키는 방법은 ?

- 참조 타입에서는 값을 바꿨을 때 Call Stack 주소 값은 같은데 Heap 메모리 값만 바꿔주기 불변성을 유지할 수 없었으므로 아예 새로운 배열을 반환하는 메소드를 사용하면 됩니다. 
- spread operator, map, filter, slice, reduce
- 원본 데이터를 변경하는 메소드 => splice, push

## React.memo 를 이용한 컴포넌트 렌더링 최적화

### 현재 Todo 앱의 문제점!

- 현재 Todo 앱에서 App , Lists, List, Form 컴포넌트로 나눠져 있습니다.  이렇게 나눠준 이유는 재사용성을 위해서도 이지만 각 컴포넌트의 렌더링의 최적화를 위해서 이기도 합니다.
- `React.memo` 적용은 간단하게 원하는 컴포넌트를 React.memo로 감싸주시면 됩니다.