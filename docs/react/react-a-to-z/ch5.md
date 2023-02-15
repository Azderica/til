---
sidebar_position: 5
---

# 5. 넷플릭스 앱 모달 및 이미지 불러오기

## 슬라이드 기능 추가하기

- `document.getElementById(id).scrollLeft = document.getElementById(id).scrollLeft - (window.innerWidth - 80)`

> 나머지 코드 참조

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

