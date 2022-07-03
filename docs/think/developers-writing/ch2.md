---
sidebar_position: 2
---

# 2장. 개발 시간을 줄여주는 이름 짓기와 주석 쓰기

## 1. 네이밍 컨벤션, 이유를 알고 쓰자

### 개발자의 가장 큰 고민은 이름 짓기

- 영어로 이름을 지어야 하고, 영어 표기법도 고려해야하고, 다른 개발자가 봤을 때 한번에 무슨 뜻인지, 기능을 하는지 알수있어야하며, 간결해야 합니다.

### 이름 짓기는 창조가 아닌 조합

- 대부분의 이름은 조합입니다.
- 다음의 규칙을 준수해야 합니다.
  - 자바 네이밍 컨벤션을 철저히 준수합니다.
    - 클래스는 `UpperCamelCase`
    - 함수와 변수는 `lowerCamelCase`
    - 상수는 `UPPER_DELIMITER_CASE`
  - 네이밍은 보통 16글자, 3단어를 조합합니다.
    - 클래스 네임: 3.18 단어
    - 함수 네임: 3.36 단어
    - 변수 네임 : 2.57단어
  - 품사는 주로 명사, 동사, 형용사의 조합입니다.
    - 명사 + 명사 + 명사
    - 동사 + 명사 + 명사
    - 형용사 + 명사 + 명사 등
- 인기 있는 자바 소스의 네이밍 비법은 다른게 아니라 기존 영어 규칙을 지키고 기존 단어를 적절히 조합해서 사용하는 것이 좋습니다.

### 코드의 네이밍 컨벤션은 영어 표기법을 상속받았다.

- 네이밍 컨벤션은 기본적으로 영어의 표기법을 상속받습니다.
- 영어 대문자 표기 원칙 몇가지는 다음과 같습니다.
  - 고유 명사는 문장 어느 위치에 오든 첫 글자를 대문자로 씁니다.
  - 이름 앞에 오는 직함은 첫 글자를 대문자로 씁니다.
  - 책, 신문, 잡지, 음악, 영화 등의 제목에 나오는 첫 단어와 마지막 단어의 첫글자와 관서는 대문자를 씁니다.
  - 출판물의 일부와 관련한 명사 다음에 숫자가 올 때 명사의 첫 글자를 대문자로 씁니다.
  - 요일명, 휴일명, 달, 역사적 사건, 역사적 기간은 첫 글자를 모두 대문자로 씁니다.
  - 천체의 이름은 첫글자를 대문자로 씁니다.
- 영어의 대문자 표기 원칙은 다음과 같습니다.
  - 첫째, 중요하거나 크거나 특정한 것을 가리키거나 제목에 해당하는 명사는 모두 첫 글자를 대문자로 씁니다.
  - 둘째, 그런 명사들이 이어질 때는 첫 글자를 모두 대문자로 씁니다.
  - 셋째, 명사나 관사가 아닌 동사, 형용사 등은 소문자를 씁니다.

### 파스칼 표기법으로 클래스 이름 짓기

- 클래스의 첫 글자는 어디에 위치하든 모두 대문자로 씁니다.

### 카멜 표기법으로 함수, 변수의 이름 짓기

- 카멜 표기법은 첫 단어를 빼고 나머지 단어의 첫 번째 글자만 대문자로 씁니다.
- 주로 함수나 변수에 사용합니다.
- 함수는 동작을 시키는 명령어 개념이므로 첫 단어가 주로 동사입니다. 변수는 형용사로 시작하는 경우도 많습니다.

### 상수는 모두 대문자로 쓴다

- 상수는 값이 변해서는 안된다는 점을 강조하고 주의하기 위해서 대문자를 선택했습니다. 
- 회사 안에서는 통일하는 것이 좋습니다.

### 패키지와 모듈은 모두 소문자로 쓴다

- 패키지와 모듈은 클래스와 함수보다 더 높은 위치입니다. 그러나 소문자로만 씁니다.
- 이유는 패키지와모듈이 클래스를 모으거나 함수를 담아놓는 통이기 때문입니다.
- 실용적인 이유는 패키지 이름과 클래스 이름을 혼동할 수 있고, 모듈 이름과 함수 이름을 헷갈릴 수 있어서 이가 컨벤션이 되었습니다.

### BEM 표기법

- CSS에서 사용하는 BEM(Block, Element, Modifier) 표기법은 '대상__요소--상태'를 의미합니다.
- 대상의 요소나 부분을 의미할 때는 언더스코어 두 개(__)로 연결합니다.
- 대상이나 요소의 상태나 속성을 의미할 때는 하이픈 두개(--)로 연결합니다.

### 가독성과 소통

- 가장 중요한 것은 가독성과 소통 때문입니다.
- 요즘은 개발 툴이 워낙 발전해서 가독성이 높습니다.
- 가독성이 높다고 소통이 더 잘되는 것은 아닙니다.
- **같은 부서의 개발자, 또는 하나의 프로그램과 관련된 개발자들끼리는 코딩하기 전에 기본적인 컨벤션 규칙을 정하는 것이 중요합니다.**

<br/>

## 2. 변수 이름을 잘 짓는 법

### i는 변수 이름이지만 d는 아니다

- 가장 많이 쓰는 변수 이름은 `i`, `LOG`, `result`입니다.
- 좌푯값으로 `x`, `y`도 괜찮습니다.
- `day`는 일자의 의미를 사용하지만, 임의의 날은 `someday`, 오늘은 `today`, 특정한 날은 `thisDay`, 마지막 날은 `finalDay`를 사용하는 것이 좋습니다.

### 긴 이름? 짧은 이름? 검색 잘 되는 이름!

- 과거에는 헝가리안 표기법이 유익했으나 현재는 변수 타입이 자동이 되었기 때문에 레거시가 되었습니다.

### 복수형을 나타내는 s를 붙일까 말까?

- 배열에 `s`를 붙이는 방법과 `array`와 `list of`를 쓰는 것이 나을 수도 있습니다.

### 약어를 쓰는 것이 좋을가? 안 쓰는 것이 좋을까?

- 약어를 사용하는 기준은 보편성이 되어야 합니다.
- 회사나 업계에서 많이 사용하는 약어라면 코드에 사용하는 것이 좋습니다.

### 중요한 단어를 앞에 쓴다

- 중요한 것이 앞에 와야합니다.
- `int totalVisitor` 보다는 `int visitorTotal`이 맞습니다.

### 함수 이름 짓는 순서

- 불필요한 단어를 제외하는 것이 중요합니다.
- 1함수 1업무 규칙을 적용하고, 묶을 수 있는 것은 묶어야합니다.
- 다음의 순서로 진행할 수 있습니다.

```
1. 사용자 이름을 input 태그에서 가져옵니다.
2. 사용자 이름의 글자 수를 확인합니다.
3. 입력이 안되었으면 input 태그를 활성화합니다.
4. 글자 수가 한글 두 글자 이하면 확인을 요청합니다.
```

```
// 1번과 2번~4번으로 묶을 수 있는 구조입니다.
1. (함수1) 사용자 이름을 input 태그에서 가져옵니다.
2. (함수2) 사용자 이름의 글자 수가 2글자 이하면 다음과 같이 처리합니다.
  - 만약 글자 수가 0이면, input 태그를 활성화합니다.
  - 만약 글자 수가 1 또는 2이면 사용자에게 확인을 요청합니다.
```

```
// 함수 문장을 영어로 바꿉니다.
(함수 1) 사용자 이름을 Input 태그에서 가져옵니다.
- get user's name from the text input field
(함수 2) 사용자의 글자 수가 2글자 이하이면 다음과 같이 처리합니다.
- do something if user's name contains under 2 characters
```

```
// 정관사나 불필요한 단어를 빼고 of는 앞뒤 단어를 바꿉니다. 소유격도 바꿉니다.
// 띄어쓰기도 없애고, 첫 철자를 대문자로 바꿉니다.
// 함수를 사용할 때 의미상 없어도 되는 단어는 없앱니다.
(함수 1) getUserNameFromField()
(함수 2) checkUserNameUnder2Characters()
```

<br/>

## 3. 좋은 이름의 기준, SMART

### 한 번에 좋은 이름을 지을 수도 없다

- 처음 지어졌을 때는 이를 부를 명칭이 없어 좋은 이름을 못지을 수도 있습니다.

### 좋은 이름이 가진 5가지 특징

- 좋은 이름인지를 확인하는 5가지 기준을 SMART라고 합니다.
  - easy to Search: 검색하기 쉽게
  - easy to Mix: 조합하기 쉽게
  - easy to Agree: 수긍하기 쉽게
  - easy to Remember: 기억하기 쉽게
  - easy to Type: 입력하기 쉽게

### easy to Search: 검색하기 쉽게 이름 짓는 법

- 검색하기 쉬운 이름은 고전적 범주화를 이용해 한 단계상위 범주의 이름을 태그처럼 덧붙이면 됩니다.

```
// 나쁜 예
SERVER_TIMEOUT
NO_RESULT
BAD_REQUEST
SERVER_ALLOWED_REQUESTS_EXCESS
```

```
// 좋은 예
ERROR_SERVER_TIMEOUT
ERROR_NO_RESULT
ERROR_BAD_REQUEST
ERROR_SERVER_ALLOWED_REQUESTS_EXCESS

user
userBuyer
userPayer
userRegister
userRegisterButNoPayer
```

- 회사의 네이밍 컨벤션에 위배되지 않는지 먼저 따져 본 뒤 사용해야 합니다.

### easy to Mix: 조합하기 쉽게 이름 짓는 법

```html
<html>
<head>
  <style>
    .title { font-size: 2em... }
  </style>
</head>
<body>
  <div class="title">개발자의 글쓰기</div>
  <div class="subtitle">소프트웨어 엔지니어를 위한 테크니컬 라이팅</div>
  <div class="slogan">개발자라면 이거 모르고 쓰지 마오!</div>
</body>
</html>
```

- 가장 좋은 방법은 개발 언어의 문법과 조합해 이름을 짓는 것입니다.

```html
<html>
<head>
  <style>
    h1.title { font-size: 2em... }
  </style>
</head>
<body>
  <h1 class="title">개발자의 글쓰기</h1>
  <h2 class="title">소프트웨어 엔지니어를 위한 테크니컬 라이팅</h2>
  <p class="title">개발자라면 이거 모르고 쓰지 마오!</p>
</body>
</html>
```

### easy to Agree: 수긍하기 쉽게 이름 짓는 법

- 이름을 쓰는 것이 아무렇지도 않아야 합니다.
- 일을 효율적으로 해야 하는 것처럼 이름 짓기도 효율적으로 해야합니다.

### easy to Remember: 기억하기 쉽게 이름 짓는 법

- 뇌는 감각적인 것을 좋아합니다.
- 약자 등을 쓸 때 시청각적으로 완결시키면 더 잘 기억합니다.
- 이미 널리 알려진 용어는 그냥 쓰는 것이 효율적입니다.

### easy to Type: 입력하기 쉽게 이름 짓는 법

- 자주 쓰거나 중요한 이름이라면 입력하기 쉬운지, 오타를 낼 가능성이 작은지, 다른 사람에게 말로 전달하기 쉬운지 검토해 보는 것이 좋습니다.

<br/>

## 4. 좋은 코드에는 주석이 없다?

### 이름을 잘 지으면 주석을 줄일 수 있다

- 이름을 잘 지으면 주석을 대폭 줄일 수 있습니다.

```java
// 안좋은 예
// 스크린 최대 높이를 480으로 지정함
int h = 480

// 좋은 예
int screenHeightMax = 480
```

```java
// 안좋은 예
// 사용자 유형을 분류해서 등급 값을 리턴함
levelUser()

// 좋은 예
classifyUserAndReturnClass()
```

### 처음부터 주석 없이 코딩하는 연습을 하자.

```json
// 안좋은 예시
"Ok": true

// 좋은 예시
"isRequestSuccess": true
```

```json
// 안좋은 예시
"success": [  구독자 추가 성공  ],
"update": [  이미 있는 구독자, 나머지 필드를 업데이트함  ],
"failDay": [  수신 거부 상태의 구독자, 추가하지 않음  ],
"failWrongEmail": [  잘못된 이메일 주소 형식, 추가하지 않음  ],
"failUnknown": [  알 수 없는 오류로 추가하지 않음  ]

// 좋은 예시
"created": [],
"updatedInformationExceptEmail": [],
"noCreatedBecauseUnsubscriber": [],
"noCreatedBecauseWrongEamil": [],
"noCreatedBecauseUnknownError": []
```

### 주석이 필요한 때도 많다.

```java
checkUserNameUnder3Characters(); // 3글자 이하인지 체크
```

- 영어 실력이 낮으면 한글주석으로 한 번 더 설명함으로써 영작문이나 실수를 줄일 수 있습니다.
- 주석이 코드의 정확성을 높이고 버그를 줄이는 계기가 된다는 얘기입니다.

<br/>

## 5. 다른 개발자를 배려하는 주석 쓰기

### 코드의 의미를, 주석은 의도를

- 주석은 다른 개발자를 배려하는 마음으로 작성합니다.
  - 이유를 알려주는 것
  - 개발자가 새롭게 발견한 것
  - 예상 질문과 답
  - 할 일이나 주의, 개선 아이디어를 주는 것
  - 다른 사람에게보완을 요청하는 것
  - 개발자의속마음을 표현한 것

### 주석의 반복

- 특정 코드를 처음부터 읽지 않고, 필요할 때만 특정 함수를 검색하는 경우도 있으므로 **같은 주석이라도 반복해서 써야합니다.**

### 주석의 발췌와 요약

- 대표적인 예시는 다음과 같습니다.

```js
dependencies {
  // 카카오 로그인 sdk를 사용하기 위해 필요
  compile group: 'com.kakao.sdk', name: 'usermgmt', version: project.KAKAO_SDK_VERSION

  // 카카오링크 sdk를 사용하기 위해 필요
  compile group: 'com.kakao.sdk', name: 'kakaolink', version: project.KAKAO_SDK_VERSION

  // 카카오톡 sdk를 사용하기 위해 필요
  compile group: 'com.kakao.sdk', name: 'kakaotalk', version: project.KAKAO_SDK_VERSION

  // 카카오내비 sdk를 사용하기 위해 필요
  compile group: 'com.kakao.sdk', name: 'kakaonavi', version: project.KAKAO_SDK_VERSION

  // 카카오스토리 sdk를 사용하기 위해 필요
  compile group: 'com.kakao.sdk', name: 'kakaostory', version: project.KAKAO_SDK_VERSION

  // push sdk를 사용하기 위해 필요
  compile group: 'com.kakao.sdk', name: 'push', version: project.KAKAO_SDK_VERSION
}
```

- 이를 수정하면 다음과 같습니다.

```js
dependencies {
  // 카카오 로그인 SDK 사용
  compile group: 'com.kakao.sdk', name: 'usermgmt', version: project.KAKAO_SDK_VERSION

  // push SDK 사용
  compile group: 'com.kakao.sdk', name: 'push', version: project.KAKAO_SDK_VERSION

  // 그 외는 서비스 이름 사용
  compile group: 'com.kakao.sdk', name: 'kakaolink', version: project.KAKAO_SDK_VERSION
  compile group: 'com.kakao.sdk', name: 'kakaotalk', version: project.KAKAO_SDK_VERSION
  compile group: 'com.kakao.sdk', name: 'kakaonavi', version: project.KAKAO_SDK_VERSION
  compile group: 'com.kakao.sdk', name: 'kakaostory', version: project.KAKAO_SDK_VERSION
}
```

- 마찬가지의 예시는 다음과 같습니다.

```java
// before
// 사용자가 레벨업하려면 로그인을 10회 이상하고 게시물을 5개 이상 작성해야 합니다.
if(user.getLoginCount() >= 10 && user.getOwnArticleCount() >= 5) {
  int level = user.getLevel();
  user.setLevel(level++);
}

// after
if(user.enoughToLevelUp()) {
  user.levelUp();
}
```

### 주석도 코드다.

- 잘못 쓴 주석은 개발자가 신경 쓰지 않으면 결코 바로잡을 수 없습니다.
- 주석의 악순환에서 벗어나는 가장 좋은 방법은 주석도 코드라고 생각하는 것입니다.
