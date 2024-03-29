---
sidebar_position: 8
---

# 8. 통합점: 게이트웨이, 터널, 릴레이

아래에서는 다음의 내용을 다룹니다.

- 게이트웨이 : 서로 다른 프로토콜과 애플리케이션 간의 HTTP 인터페이스입니다.
- 애플리케이션 인터페이스 : 서로 다른 형식의 웹 애플리케이션이 통신하는 데 사용합니다.
- 터널 : HTTP 커넥션을 통해서 HTTP가 아닌 트래픽을 전송하는데 사용합니다.
- 릴레이 : 일종의 단순한 HTTP 프락시로, 한 번에 한 개의 홉에 데이터를 전달하는데 사용합니다.

## 8.1 게이트웨이

- 게이트웨이는 리소스와 애플리케이션을 연결하는 역할을 합니다.
- 게이트웨이는 HTTP 트래픽을 다른 프로토콜로 자동으로 변환하여, HTTP 클라이언트가 다른 프로토콜을 알 필요 없이 서버에 접속할 수 있게도 합니다.
  - 예시 1. HTTP/FTP 서버 측 FTP 게이트웨이
  - 예시 2. HTTP/FTP 클라이언트 측 보안 게이트웨이
  - 예시 3. HTTP/CGI 서버 측 애플리케이션 게이트웨이

### 클라이언트 측 게이트웨이와 서버 측 게이트웨이

- 웹 게이트웨이는 한쪽은 HTTP, 다른 한쪽은 HTTP가 아닌 다른 프로토콜로 통신합니다.
  - ex) `HTTP/NNTP`
- 서버측 게이트웨이는 클라이언트와 HTTP로 통신하고, 서버와는 외래 프로토콜로 통신합니다.
- 클라이언트 측 게이트웨이는 클라이언트와 외래 프로토콜로 통신하고, 서버와는 HTTP로 통신합니다.

<br/>

## 8.2 프로토콜 게이트웨이

### HTTP/\*: 서버측 웹 게이트웨이

- USER와 PASS 명령을 보내서 서버에 로그인합니다.
- 서버에서 적절한 디렉터리로 변경하기 위해 CWD 명령을 내립니다.
- 다운로드 형식을 ASCII로 설정합니다.
- MDTM으로 문서의 최근 수정 시간을 가져옵니다.
- PASV로 서버에게 수동형 데이터 검색을 하겠다고 이야기합니다.
- RETR로 객체를 검색합니다.
- 제어 채널에서 반환된 포트로 FTP 서버에 데이터 커넥션을 맺습니다. 데이터 채널이 열리는 대로, 객체가 게이트웨이로 전송됩니다.

### HTTP/HTTPS: 서버 측 보안 게이트웨이

- 기업 내부의 모든 웹 요청을 암호화함으로써 개인 정보 보호와 보안을 제공하는데 게이트웨이를 사용할 수 있습니다.

### HTTPS/HTTP: 클라이언트 측 보안 가속 게이트웨이

- 일반적으로 보안 가속기로 유명합니다.
- HTTP/HTTPS 게이트웨이는 웹 서버의 앞단에 위치하고, 보이지 않는 인터셉트 게이트웨이나 리버스 프락시 역할을 합니다.
- 게이트웨이는 원 서버보다 더욱 효율적으로 보안 트래픽을 복호화하는 암호화 하드웨어를 내장해서 원 서버의 부하를 줄여주기도 합니다.

<br/>

## 8.3 리소스 게이트웨이

### 공용 게이트웨이 인터페이스

- CGI 애플리케이션이 서버와 분리되면서 다양한 언어로 구현할 수 있습니다.
- CGI가 내부에서 어떤 처리를 하는지 사용자에게 보이지 않습니다.

### 서버 확장 API

- 서버 개발자는 웹 개발자가 자신의 모듈을 HTTP와 직접 연결할 수 있는 강력한 인터페이스인 서버 확장 API를 제공합니다.

<br/>

## 8.4 애플리케이션 인터페이스와 웹 서비스

- 애플리케이션을 연결하면서 생기는 까다로운 이슈 중 하나는 데이터를 교환하려는 두 애플리케이션 사이에서 프로토콜 인터페이스를 맞추는 일입니다.
- 인터넷 커뮤니티는 각 웹 애플리케이션이 서로 통신하는데 사용할 표준과 프로토콜 집합을 개발합니다.
- **SOAP(Simple Object Access Protocol)은 HTTP 메시지에 XML 데이터를 담는 방식에 관한 표준입니다.**

<br/>

## 8.5 터널

- 웹 터널은 HTTP 프로토콜을 지원하지 않는 애플리케이션에 HTTP 애플리켕시녕르 사용해 접근하는 방법을 제공합니다.
- 웹 터널을 사용하면 HTTP 커넥션을 통해서 HTTP가 아닌 트래픽을 전송할 수 있다고, 다른 프로토콜을 HTTP 위에 올릴 수 있습니다.

### CONNECT로 HTTP 터널 커넥션 맺기

- 웹 터널은 HTTP의 CONNECT 메서드를 사용하여 커넥션을 맺습니다.
- CONNECT 메서드는 모든 서버나 프로토콜에 TCP 커넥션을 맺는데 사용할 수 있습니다.

#### CONNECT 요청

```http
CONNECT home.netscape.com:443 HTTP/1.0
User-agent: Mozilla/4.0
```

추가적인 HTTP 요청 헤더 필드가 있거나 없습니다.

#### CONNECT 응답

```http
HTTP/1.0 200 Connection Established
Proxy-agent: Netscape-Proxy/1.1
```

일반적인 HTTP 응답과 달리 Content-Type이 필요가 없습니다. (바이트를 전달하므로)

### 데이터 터널링, 시간, 커넥션 관리

- 터널을 통해 전달되는 데이터는 게이트웨이에서 볼 수 없어서, 게이트웨이는 패킷의 순서나 흐름에 대한 어떤 가정도 할 수 없습니다.
- 클라이언트는 성능을 높이기 위해 CONNECT 요청을 보낸 다음, 응답을 받기 전에 터널 데이터를 요청할 수 있습니다.
- 커넥션이 끊긴 한쪽에 전송하지 않은 데이터는 버려집니다.

### SSL 터널링

![image](https://user-images.githubusercontent.com/42582516/131961105-959f4015-69b7-419e-9025-97ec8995fa75.png)

- 웹 터널은 원래 방화벽을 통해서 암호화된 SSL 트래픽을 전달하려고 개발되었습니다.
- SSL 트래픽이 기존 프락시 방화벽을 통과할 수 있도록 HTTP에 터널링 기능이 추가되었습니다.
- 터널은 HTTP가 아닌 트래픽이 포트를 제한하는 방화벽을 통과할 수 있게 해줍니다.

### SSL 터널링 vs HTTP/HTTPS 게이트웨이

HTTPS 프로토콜은 다른 프로토콜과 같은 방식으로 게이트웨이를 통과할 수 있습니다. 하지만 몇가지 단점이 있습니다.

- 클라이언트-게이트웨이 사이에는 보안이 적용되지 않은 일반 HTTP 커넥션이 맺어져 있습니다.
- 프락시가 인증을 담당하고 있기 때문에, 클라이언트는 원격 서버에 SSL 클라이언트 인증을 할 수 없습니다.
- 게이트웨이는 SSL을 완벽히 지원해야합니다.

이 상황에서 SSL 터널링을 사용하면 프락시에 SSL을 구현할 수 없습니다. 이 경우 프락시 서버는 트랜잭션의 보안에는 관여하지 않고 암호화된 데이터를 그대로 터널링합니다.

### 터널 인증

HTTP의 다른 기능들은 터널과 함께 적절히 사용할 수 있습니다. 특히 프락시 인증 기능은 클라이언트가 터널을 사용할 수 있는 권한을 검사하는 용도로 터널에서 사용할 수 있습니다.

### 터널 보안에 대한 고려사항들

- 터널 게이트웨이는 통신하고 있는 프로토콜이 터널을 올바르게 사용하는지 확인할 수 없습니다.
- 터널의 오용을 최소화하기 위해서 게이트웨이는 HTTPS 전용 포트인 443 같이 잘 알려진 특정 포트만을 터널링할 수 있게 허용해야합니다.

<br/>

## 8.6 릴레이

- HTTP 릴레이는 HTTP 명세를 완전히 준수하지는 않는 간단한 HTTP 프락시입니다.
- HTTP가 복잡할 때, 모든 헤더와 메서드 로직을 수행하지 않고 맹목적으로 트래픽을 전달하는 간단한 프락시를 구현할 때가 유리하기도 합니다.
- 이때, 맹목적 릴레이가 발생해서 `keep-alive` 커넥션이 행에 걸리는 문제가 생깁니다.
- 이러한 문제를 예방하기 위해 HTTP를 제대로 준수하는 프락시를 사용하는 것이 좋습니다.
