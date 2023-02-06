---
sidebar_position: 2
---

# 간단한 To-Do 앱 만들며 리액트 익히기

## Craete React App 폴더와 파일 기본 구조

- 아래는 이름이 수정되면 안되는 파일입니다.
  - public/index.html -> 페이지 템플릿
  - src/index.js -> 자바스크립트 시작점
- src : 대부분의 리액트 소스 코드
- packange.json
  - dependencies: 필요한 라이브러리와 라이브러리의 버전들 명시
  - scripts: 실행, 빌드, 테스트 등의 스크립트

## SPA(Single Page Application) 이란?

- 여러 페이지를 가져올 필요 없이, **전체 페이지를 하나의 페이지에 담아 동적으로 화면을 바꿔가며 표현하는 것을 의미**합니다.
- History API
  - History.back() : 뒤로가기
  - History.forward() : 앞으로가기
  - History.go() : 특정한 세션 기록으로 이동
  - History.pushState() : 주어진 데이터를 세션 기록 스택에 넣음
  - History.replaceState() : 최근 세션 기록 스택의 내용을 주어진 데이터로 교체

### JSX(Javascript syntax extension)

- JSX는 자바스크립트의 확장 문접이며, 리액트에서는 이 JSX를 이용해서 화면에서 UI가 보이는 모습을 나타내줍니다.
- JSX는 여러 규칙이 존재합니다.
- 리스트에 key 속성을 넣지 않으면, warning이 발생합니다. 데이터를 변경, 추가, 제거된 항목을 식별하는 데 도움이 됩니다.
  - index는 추천하지 않습니다.

> state를 바꾸는 법
>
> - this.setState({ todoData: newTodoData });