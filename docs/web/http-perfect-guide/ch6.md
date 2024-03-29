---
sidebar_position: 6
---

# 6. 프락시

웹 프락시는 서버 중개자입니다. 이러한 프락시는 클라이언트와 서버 사이에 위치하여 그들 사이의 HTTP 메시지를 정리하는 중개인처럼 동작합니다.

아래에서는 다음의 내용을 설명합니다.

- HTTP 프락시와 웹 게이트웨이를 비교하고 HTTP 프락시가 어떻게 배치되는지 그림으로 보여주며 설명합니다.
- 몇가지 유용한 활용방법을 보여줍니다.
- 프락시가 실제 네트워크에 어떻게 배치되어 있는지, 그리고 트래픽이 어ㄸ허게 프락시 서버로 가게 되는지 설명합니다.
- 브라우저에서 프락시를 사용하려면 어떻게 설정해야 하는지 보여줍니다.
- HTTP 프락시 요청이 서버 요청과 어떻게 다른지, 그리고 프락시가 어떻게 브라우저의 동작을 미묘하게 바꾸는지 보여줍니다.
- 일련의 프락시 서버들을 통과하는 메시지의 경로를 Via 헤더와 TRACE 메서드를 이용해 기록하는 방법을 설명합니다.
- 프락시에 기반한 HTTP 접근 제어를 설명합니다.
- 어떻게 프락시가 클라이언트와 서버 사이에서 각각의 다른 기능과 버전 들을 지원하면서 상호작용 할 수 있는지 설명합니다.

## 6.1 웹 중개자

- 웹 프락시 서버는 클라이언트의 입장에서 트랜잭션을 수행하는 중개인입니다.
- HTTP 프락시 서버는 웹 서버이기도 하고 웹 클라리언트이기도 합니다.

### 개인 프락시와 공유 프락시

- 프락시 서버는 하나의 클라이언트가 독점적으로 사용하거나 혹은 여러 클라이언트가 공유할 수도 있습니다.
- 하나의 클라이언트만을 위한 프락시를 개인 프락시라고 부릅니다.
- 여러 클라이언트가 함께 사용하는 프락시는 공용 프락시라 부릅니다.

> 공유 프락시

- 대부분의 프락시는 공용이며 공유된 프락시입니다.
- 중앙 집중형 프락시가 일반적으로 비용과 효율이 높습니다.
- 캐시 프락시 서버와 같은 경우도 사용자가 많을수록 유리하며, 여러 사용자들의 공통된 요청에서 이득을 취할 수 있습니다.

> 개인 프락시

- 개인 전용 프락시는 흔하지는 않지만 꾸준히 사용됩니다.
- 어떤 브라우저 보조 제품들은 ISP 서비스와 마찬가지로 브라우저의 기능을 확장하거나 성능을 개선할 때 사용되는 경우가 있습니다.

### 프락시 대 게이트웨이

- 프락시는 **같은 프로토콜**을 사용하는 둘 이상의 애플리케이션을 연결합니다.
- 게이트웨이는 **서로 다른 프로토콜**을 사용하는 둘 이상을 연결합니다.
  - 게이트웨이는 클라이언트와 서버가 서로 다른 프로토콜을 말하더라도 서로 간의 트랜잭션을 완료할 수 있는 프로토콜 변환기처럼 묘사합니다.
- 다만 이 실질적인 차이는 모호합니다.

<br/>

## 6.2 왜 프락시를 사용하는가

- 보안을 개선하고 성능을 높여주며, 비용을 절약합니다.
- 부가적인 가치를 주는 여러 유용한 웹 서비스를 구현하기 위해 트래픽을 감시하고 수정할 수 있습니다.

> 어린이 필터

- 교육사이트를 제공하며, 성인 콘텐츠를 차단하는 필터링 프락시를 사용 가능

> 문서 접근 제어자

- 많은 웹 서버들과 웹 리소스에 대한 단일 한 접근 제어 전략을 구현하고 감사 추적을 하기 위해 사용 가능
- 대기업이나 분산 조직에서 유용합니다.
- 중앙 프락시 서버에서 접근 제어를 설정할 수 있습니다.

> 보안 방화벽

- 보안 강화의 목적입니다.
- 조직 안에 들어오거나 나가는 응용 레벨 프로토콜의 흐름을 통제합니다.

> 웹 캐시

- 인기 있는 문서의 로컬 사본을 관리하고, 해당 문서에 대한 요청이 오면 빠르게 제공합니다.

> 대리 프락시

- 웹 서버인 것처럼 위장하여, 실제 요청을 받지만 몬텐츠를 찾기위해 다른 서버와 커뮤니케이션을 시작합니다.
- 이러한 대리 프락시를 서버 가속기라 부르며, 복제 콘텐츠의 분산 네트워크를 만들기 위해 사용될 수 있습니다.

> 콘텐츠 라우터

- 인터넷 프래픽 조건과 콘텐츠의 종류에 따라 요청을 특정 웹 서버로 유도하는 콘텐츠 라우터로 동작가능합니다.
- 여러 서비스를 구현하는 경우에 장점이 있습니다.

> 트랜스코더

- 콘텐츠를 클라이언트에게 전달하기 전에 본문 포맷을 수정할 수 있으며 이를 트랜스코딩이라 부릅니다.
- 대표적인 예시로 GIF 이미지를 JPEG로 변환해서 크기를 줄이는 예시가 있습니다.

> 익명화 프락시(Anonymizer)

- HTTP 메시지에서 신원을 식별할 수 있는 특성(IP주소, From헤더, Referer 헤더, 쿠키, Url세션아이디)를 적극적으로 제거함으로 개인 정보 보호와 익병성 보장에 기여합니다.

<br/>

## 6.3 프락시는 어디에 있는가

아래의 내용을 다룹니다.

- 어떻게 프락시가 네트워크에 배치되는지
- 어떻게 프락시의 연쇄가 계층을 이루는지
- 어떻게 트래픽이 올바르게 프락시를 찾아가는 지

### 프락시 서버 배치

- 출구 프락시
  - 로컬 네트워크와 더 큰 인터넷 사이를 오가는 트래픽을 제어하기 위해 프락시를 로컬 네트워크의 출구에 박아 넣을 수 있습니다.
- 접근 프락시
  - 인터넷 대역폭 비용을 줄이기 위해 캐시 프락시를 사용해 많이 찾는 문서들의 사본들을 저장합니다.
- 대리 프락시
  - 네트워크의 가장 끝에 있는 웹 서버들의 바로 앞에 위치하여 웹 서버로 향하는 모든 요청을 처리하고 필요할 때만 웹 서버에게 자원을 요청할 수 있습니다.
- 네트워크 프락시
  - 캐시를 이용해 인터넷 교차로의 혼잡을 완화하고 트래픽 흐름을 감시하기 위해 충분한 처리 능력을 갖춘 프락시가 네트워크 사이의 인터넷 피어링 교환 지점들에 놓을 수 있습니다.

### 프락시 계층

- 프락시 계층에서 프라시 서버들은 부모와 자식의 관계를 갖습니다.
- 인바운드 프락시(서버에 가까운쪽)을 부모라 부르고 아웃바운드 프락시(클라이언트에 가까운 쪽)을 자식이라고 부릅니다.

#### 프락시 계층 콘텐츠 라우팅

프락시 서버는 여러 가지 판단 근거에 맞게 부모 프락시나 원 서버에 라우팅을 합니다.

- 부하 균형 : 자식 프락시는 부하를 분산하기 위해 현재 부모들의 작업량 수준에 근거하여 부모 프락시를 고릅니다.
- 지리적 인접성에 근거한 라우팅 : 자식 프락시는 원 서버의 지역을 담당하는 부모를 선택할 수도 있습니다.
- 프로토콜/타입 라우팅 : 자식 프락시는 URI에 근거하여 다른 부모나 원 서버로 라우팅 할 수 있습니다.
- 유료 서비스 가입자를 위한 라우팅 : 캐시나 성능 개선을 위한 압축 엔진으로 라우팅 됩니다.

### 어떻게 프락시가 트래픽을 처리하는지

클라이언트 트래픽이 프락시로 가도록 만드는 방법에는 다음 네가지가 있습니다.

- 클라이언트를 수정합니다. : 많은 웹 클라이언트들은 수동 혹은 자동 프락시 설정을 지원합니다.
- 네트워크를 수정합니다. : 인터셉트 프락시, 클라이언트 모르게 트래픽을 프락시로 보냅니다.
- DNS 이름공간을 수정합니다. : 대리 프락시는 웹 서버의 이름과 IP 주소를 자신이 직접 사용하고 이를 이용해 DNS 서버를 이용해서 조정할 수 있습니다.
- 웹 서버를 수정합니다. : 몇몇 웹 서버는 HTTP 리다이렉션 명령을 클라이언트에게 돌려줌으로써 클라이언트의 요청을 프락시로 리다이렉트 하도록 설정 가능합니다.

<br/>

## 6.4 클라이언트 프락시 설정

많은 브라우저가 프락시를 설정하는 여러 가지 방법을 제공합니다.

- 수동 설정 : 프락시를 사용하겠다고 명시적으로 설정합니다.
- 브라우저 기본 설정 : 브라우저 기본 프락시를 미리 설정해 놓을 수 있습니다.
- 프락시 자동 설정 : JS 프락시 자동 설정 PAC 파일에 대한 URI를 제공할 수 있습니다.
- WPAD 프락시 발견 : 대부분의 브라우저는 자동설정 파일을 다운받을 수 있는 설정 서버를 자동으로 찾아주는 웹 프락시 자동발견 프로토콜을 제공합니다.

### 클라이언트 프락시 설정 : 수동

- 많은 웹 클라이언트가 프락시를 수동으로 설정할 수 있도록 합니다.

### 클라이언트 프락시 설정 : PAC 파일

- 수동 프락시 설정은 단순하지만 유연하지 못합니다.
- 프락시 자동 설정(PAC) 파일은 프락시 설정에 대한 동적인 해결책이며, 상황에 맞게 계산해주는 작은 자바스크립트 프로그램입니다.
- 각 PAC는 반드시 URI에 접근할 때 사용할 적절한 프락시 서버를 계산해주는 `FindProxyForUrl(url,host)`라는 함수를 정의해야합니다.

### 클라이언트 프락시 설정 : WPAD

- 여러 발견 메커니즘들의 상승 전략을 이용해 브라우저에게 알맞은 PAC 파일을 자동으로 찾아주는 알고리즘입니다.
- WPAD는 올바른 pAC 파일을 알아내기 위해 일련의 리소스 발견 기법을 사용합니다.

<br/>

## 6.5 프락시 요청의 미묘한 특징들

프락시에 대해서 오해하기 쉬운 부분도 있습니다.

### 프락시 URI는 서버 URI와 다릅니다.

- 클라이언트가 프락시 대신 서버로 요청을 보내면 요청의 URI가 달라집니다.
- 과거 클라이언트는 불필요한 정보를 서버에 보내는 것을 피하기 위해서 스킴과 호스트가 없는 부분만 호출했습니다. 그러나 프락시가 등장하면서 완전한 URI를 보낼 필요가 있습니다.
- 즉, 클라이언트가 프락시를 사용하지 않는 경우는 부분 URI이고 클라이언트가 프락시를 사용하는 경우 완전한 URI를 보냅니다.

### 가상 호스팅에서 일어나는 같은 문제

- 프락시가 스킴/호스트/포트번호 누락된 문제와 비슷합니다.
- 명시적인 프락시는 요청 메시지가 완전한 URI를 갖도록 함으로 문제를 해결합니다.
- 가상으로 호스팅 되는 웹 서버는 호스트와 포트에 대한 정보가 담겨 있는 Host 헤더를 요구받습니다.

### 인터셉트 프락시는 부분 URI를 받습니다.

- 몇몇 프락시는 클라이언트에게 보이지 않을 수 있어서 문제가 발생할 수 있습니다.
- 인터셉트 프락시를 통해서 클라이언트에서 서버로 가는 트래픽을 가로채기 때문에 웹 서버로 보내는 부분 URI를 얻을 수 있습니다.

### 프락시는 프락시 요청과 서버 요청을 모두 다룰 수 있습니다.

- 다목적 프락시 서버는 요청 메시지의 완전한 URI와 부분 URI를 모두 지원해야합니다.
- 완전한 URI와 부분 URI는 앞서 나온 내용대로 진행하면 되나, Host 헤더가 없다면 대리 프락시의 정보나 인터셉터 프락시가 가져온 트래픽을 참고합니다. (이 경우에 없는 경우, 에러를 보냅니다.)

### 전송 중 URI 변경

- 프락시 서버는 요청 URI의 변경을 신경써야합니다.
- 일반적으로 프락시 서버는 가능한 관대하도록 해야합니다.
- 특히, 일반적인 인터셉트 프락시가 URI를 전달할 때 절대 경로로 고쳐 쓰는 것을 금지합니다.

### URI 클라이언트 자동확장과 호스트 명 분석(Hostname Resolution)

- 브라우저는 프락시의 존재 여부에 따라 요청 URI를 다르게 분석해야합니다.
- 프락시가 없는 경우, 사용자가 타이핑한 URI를 가지고 그에 대응하는 IP를 찾으며 호스트명이 발견될 시 대응하는 IP주소들을 연결에 성공할 때까지 시도합니다.

### 프락시 없는 URI 분석(URI Resolution)

- 브라우저는 유효한 호스트 명이 발견될 때까지 다양한 호스트 명의 가능성들을 검색합니다.

![image](https://user-images.githubusercontent.com/42582516/130802970-d6932f7e-8ed0-400b-8a8a-b455121d1fb5.png)

### 명시적인 프락시를 사용할 때의 URI 분석

- 위의 과정에서 찾는 과정이 없이 호스트를 자동확정하지 않습니다.

### 인터셉트 프락시를 이용한 URI 분석

- 클라이언트의 입장에서는 프락시가 존재하지 않는다고 보기 때문에 DNS가 성공할 때까지 호스트 명을 자동확장하는 브라우저를 사용할 때, 동작은 프락시가 아닌 서버의 경우에 별 차이가 없습니다.
- 그러나, 서버로의 커넥션을 만들었을 때는 분명한 차이가 생깁니다.
- 인터셉트 프락시를 통해 죽은 서버의 DNS 분석을 할 수 있고, 역방향 DNS 룩업 작업을 통해서 살아있는 IP를 찾을 수 있습니다.

<br/>

## 6.6 메시지 추적

요즘에는 여러 프락시를 통과하는 일이 흔해지고 있습니다. 프락시는 여러 벤더에 의해 개발되며 다른 기능과 다른 버그가 있습니다. 이에 따라서 추적을 하는 부분은 어려워졌습니다.

### Via 패턴

Via 헤더 필드는 메시지가 지나는 각 중간 노드의 정보를 나열합니다.

- 일반적으로 `,`로 구별합니다.

다음의 via waypoint 구성요소를 담을 수 있습니다.

- 프로토콜 이름 : http이면 생략 가능, 프로토콜 이름은 버전 앞 '/'이 붙습니다.
- 프로토콜 버전 : http 1.0 / http 1.1 등
- 노드 이름 : 중개자의 호스트와 포트 번호
- 노드 코멘트 : 선택적인 코멘트나 벤더 정보등을 포함시킵니다.

#### Via 요청과 응답 경로

- 요청 메서드와 응답 메시지 모두 프락시를 지나므로 둘 모두 Via 헤더를 가집니다.

#### Via와 게이트웨이

- 몇몇 프락시는 서버에게 비 HTTP 프로토콜을 사용할 수 있는 게이트웨이 기능을 제공합니다.

#### Server 헤더와 Via 헤더

- Server 응답 헤더 필드는 원 서버에 의해 사용되는 소프트웨어를 알려줍니다.
- 응답 메시지가 프락시를 통과할 때, 프락시는 Server 헤더를 수정하면 안됩니다.

#### Via가 개인정보 보호와 보안에 미치는 영향

- 악의적인 집단에 의해 이용될 수 있습니다.
- 이러한 문제를 위하 적당한 가명으로 교체하는 방법을 씁니다.

### TRACE 메서드

- 프락시 서버는 메시지가 전달될 때 메시지를 바꿀 수 있습니다.
- TRACE 메서드는 요청 메세지를 관찰/추적하고 흐름을 디버깅하는데 유용합니다.

### Max-Forwards

- 프락시 홉(hop) 개수를 제한하기 위해 사용할 수 있습니다.

<br/>

## 6.7 프락시 인증

- 프락시는 접근 제어 장치로 제공할 수 있습니다. 이를 통해 프락시 인증 메커니즘을 구현할 수 있습니다.
- 대표적인 예시로 407(Proxy Authorization Required)를 줘서 자격을 검증할 수 있습니다.

<br/>

## 6.8 프락시 상호운용성

클라이언트, 서버, 프락시는 HTTP 명세의 여러 버전에 대해 여러 벤더에 의해 만들어집니다.

### 지원하지 않는 헤더와 메서드 다루기

- 프락시는 이해할 수 없는 헤더 필드는 반드시 그대로 전달해야합니다.
- 일반적인 헤더의 상대적인 순서도 반드시 유지해야합니다.

### OPTIONS: 어떤 기능을 지원하는지 알아보기

- 서버나 웹 서버의 특정 리소스가 어떤 기능을 지원하는지 클라이언트가 알아볼 수 있게 해줍니다.

### ALLOW 헤더

- 요청 URI에 의해 식별되는 자원에 대해 지원되는 메서드를 열거합니다.
- 예시 : `Allow: GET, HEAD, PUT`
- 서버는 추천 받은 메서드를 모두 지원해야 할 의무는 없으나 요청을 받으면 실제로 지원하는 메서드들을 열거하는 Allow 헤더를 포함시켜야합니다.

<br/>

## 6.9 추가정보

- [리버스 프록시와 로드밸런스](https://forteleaf.tistory.com/entry/Reverse-Proxy-%EC%99%80-Load-Balencer)
