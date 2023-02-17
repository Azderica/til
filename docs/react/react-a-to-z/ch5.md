---
sidebar_position: 5
---

# 5. 넷플릭스 앱 모달 및 이미지 불러오기

## 슬라이드 기능 추가하기

- `document.getElementById(id).scrollLeft = document.getElementById(id).scrollLeft - (window.innerWidth - 80)`

> 나머지 코드 참조

<br/>

## React Router Dom

### React Router Dom이란?

- React Router DOM을 사용하면 웹 앱에서 동적 라우팅을 구현할 수 있습니다. 라우팅이 실행 중인 앱 외부의 구성에서 처리되는 기존 라우팅 아키텍처와 달리 React Router DOM은 앱 및 플랫폼의 요구 사항에 따라 컴포넌트 기반 라우팅을 용이하게 합니다.

### Single Page Application (SPA)

- 리액트는 SPA이기 때문에 하나의 index.html 템플릿 파일을 가지고 있습니다. 
- 이 하나의 템플릿에 자바스크립트를 이용해서 다른 컴포넌트를 이 index.html 템플릿에 넣으므로 페이지를 변경해주게 됩니다. 
- 이 때 이 React Router Dom 라이브러리가 새 컴포넌트로 라우팅/탐색을 하고 렌더링하는데 도움을 주게 됩니다

### React Router Dom 설치하기

- `npm install react-router-dom --save`
- `yarn add react-router-dom`

### React Router 설정하기

- 설치가 완료된 후 가장 먼저 할 일은 앱 어디에서나 React Router를 사용할 수 있도록 하는 것입니다.
- 이렇게 하려면 src 폴더에서 index.js 파일을 열고 react-router-dom에서 BrowserRouter를 가져온 다음 루트 구성 요소(App 구성 요소)를 그 안에 래핑합니다.

> Routes
>
> - Routes는 앱에서 생성될 모든 개별 경로에 대한 컨테이너/상위 역할을 합니다.
> - Route로 생성된 자식 컴포넌트 중에서 매칭되는 첫번째 Route를 렌더링 해줍니다.

> Route
>
> - Route 는 단일 경로를 만드는 데 사용됩니다. 두 가지 속성을 취합니다.
> - path 는 원하는 컴포넌트의 URL 경로를 지정합니다. 이 경로 이름을 원하는 대로 정할 수 있습니다. 위에서 첫 번째 경로 이름이 백슬래시(/)임을 알 수 있습니다. 경로 이름이 백슬래시인 컴포넌트는 앱이 처음 로드될 때마다 먼저 렌더링 됩니다. 이는 홈 구성 요소가 렌더링되는 첫 번째 구성 요소가 됨을 의미합니다
> - element 경로에 맞게가 렌더링되어야 하는 컴포넌트를 지정합니다

<br/>

## React Router Dom APIs

### 중첩 라우팅(Nested Routes)

- 이것은 React Router의 가장 강력한 기능 중 하나이므로 복잡한 레이아웃 코드를 어지럽힐 필요가 없습니다. 대부분의 레이아웃은 URL의 세그먼트에 연결되며 React Router는 이를 완전히 수용합니다.

### Outlet

- 자식 경로 요소를 렌더링하려면 부모 경로 요소에서 <Outlet>을 사용해야 합니다. 이렇게 하면 하위 경로가 렌더링될 때 중첩된 UI가 표시될 수 있습니다. 부모 라우트가 정확히 일치하면 자식 인덱스 라우트를 렌더링하거나 인덱스 라우트가 없으면 아무것도 렌더링하지 않습니다.
- react-router-dom에서 가져와서 사용합니다

### useNavigate

- 경로를 바꿔줍니다. `navigate('/home') ===> localhost:3000/home` 으로 갑니다.

### useParams

- `:style` 문법을 path 경로에 사용하였다면 useParams()로 읽을 수 있습니다. 아래는 `:invoiceId`가 무엇인지 알기위해 usePrams를 사용했습니다.

### useLocation

- 이 Hooks 는 현재 위치 객체를 반환합니다. 이것은 현재 위치가 변경될 때마다 일부 side effect를 수행하려는 경우에 유용할 수 있습니다.

### useRoutes

- useRoutes Hooks는 와 `<Routes>`와 기능적으로 동일하지만 `<Route>` 요소 대신 JavaScript 객체를 사용하여 경로를 정의합니다. 이러한 객체는 일반 `<Route>` 요소와 동일한 속성을 갖지만 JSX가 필요하지 않습니다.

<br/>

## useDebounce Custom Hooks 만들기

### Debounce가 무엇인가요?

- 아래 그림을 보면 검색 입력에 입력할 때 입력 결과가 나타날 때까지 지연이 있습니다. 이 기능은 debounce디바운스라는 function에 의해 제어됩니다. debounce function 은 사용자가 미리 결정된 시간 동안 타이핑을 멈출 때까지 keyup 이벤트의 처리를 지연시킵니다.
- 이렇게 하면 UI 코드가 모든 이벤트를 처리할 필요가 없고 서버로 전송되는 API 호출 수도 크게 줄어듭니다. 입력된 모든 문자를 처리하면 성능이 저하되고 백엔드에 불필요한 로드가 추가될 수 있습니다.