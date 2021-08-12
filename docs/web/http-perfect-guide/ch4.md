---
sidebar_position: 4
---

# 4. 커넥션 관리

다음에 대해 정리합니다.

- HTTP는 어떻게 TCP 커넥션을 사용하는지
- TCP 커넥션의 지연, 병목, 막힘
- 병렬 커넥션, keep-alive 커넥션, 커넥션 파이프라인을 활용한 HTTP의 최적화
- 커넥션 관리를 위해 따라야 할 규칙들

## 4.1 TCP 커넥션

![웹 동작 원리](https://user-images.githubusercontent.com/42582516/128624351-6778af45-0567-4633-bb14-9d8a93a8075b.png)

URL을 통해 웹 정보를 가져오는 경우?

1. 브라우저가 `www.목적지.com` 에서 호스트 명을 추출합니다.
2. 브라우저가 이 호스트명에 대한 ip 주소를 찾습니다.
3. 브라우저가 포트 번호를 얻습니다.
4. 브라우저가 해당 ip의 포트 번호로 TCP 커넥션을 생성합니다.
5. 브라우저가 서버로 HTTP GET 요청 메시지를 보냅니다.
6. 브라우저가 서버에서 온 HTTP 응답 메시지를 읽습니다.
7. 브라우저가 커넥션을 끊습니다.

### 신뢰할 수 있는 데이터 전송 통로 TCP

- HTTP는 몇몇 사용 규칙을 제외하고는 TCP 커넥션에 불과합니다.
- HTTP에게 신뢰할 만한 통신 방식을 제공하며 순서에 맞게 정확하게 전달합니다.

### TCP 스트림은 세그먼트로 나뉘어 IP 패킷을 통해 전송합니다.

- TCP는 IP 패킷(혹은 IP 데이터그램)이라고 불리는 작은 조각을 통해 데이터를 전송합니다.
- HTTP는 `IP, TCP, HTTP`로 구성된 `프로토콜 스택`에서 최상위 계층입니다.

![HTTP-HTTPS](https://user-images.githubusercontent.com/42582516/128624857-a78457a9-9d74-4c22-832d-19965c10f447.png)

- HTTP가 메시지를 전송하고자 할 경우, 현재 연결되어 있는 TCP 커넥션을 통해서 메시지 데이터의 내용을 순서대로 보냅니다.
- TCP는 세그먼트라는 단위로 데이터 스크림을 잘게 나누고, 세그먼트를 IP 패킷이라고 불리는 봉투에 담아서 인터넷을 통해 데이터를 전달합니다.
- 일반적으로 IP 패킷들은 각각을 포함합니다.
  - IP 패킷 헤더(보통 20바이트)
  - TCP 세그먼트 헤더(보통 20바이트)
  - TCP 데이터 조각(0 혹은 그 이상의 바이트)

![image](https://user-images.githubusercontent.com/42582516/128624959-5be87ff2-0814-4761-ae0b-50e6ae209564.png)

### TCP 커넥션 유지하기

- 컴퓨터는 항상 TCP 커넥션을 여러 개 가지고 있습니다.
- TCP 커넥션은 다음 4가지 값으로 식별합니다.
  - 발신자 IP 주소, 발신지 포트, 수신지 IP 주소, 수신지 포트
  - 네가지 값을 통해서 유일한 커넥션을 생성합니다.

### TCP 소켓 프로그래밍

- 운영체제는 TCP z커넥션의 생성과 관련된 여러 기능을 제공합니다.
- 소켓 API는 대부분의 OS와 프로그램 언어에서 사용가능합니다.
  - socket, bind, connect, listen, accept, read, write, close 등등이 있습니다.
- 소켓 API를 사용하면 TcP 종단 데이터 구조를 생성하고, 원격 서버의 TCP 종단에 그 종단 데이터 구조를 연결하여 데이터 스트림을 읽고 쓸 수 있습니다.

다음의 진행과정을 거칩니다.

![TCP_Socket_Programming](https://user-images.githubusercontent.com/42582516/128625109-806ee82a-a8ed-4eed-8d11-16ea860b5ff1.png)

<br/>

## 4.2 TCP의 성능에 대한 고려

- HTTP는 TCP 바로 위에 있는 계층이기 때문에 HTTP 트랜잭션의 성능은 그 아래 계층인 TCP 성능에 영향을 받습니다.

### HTTP 트랜잭션 지연

HTTP 트랜잭션을 지연시키는 원인은 여러가지입니다.

- 클라이언트는 URI에서 웹 서버의 IP 주소와 포트 번호를 알아내야 합니다. 호스트를 IP 주소로 변환하는데 시간이 걸립니다.
- 클라이언트는 TCP 커넥션 요청을 서버에게 보내고 서버가 커넥션 허가 응답을 회신하기를 기다립니다. 이러한 트랜잭션이 많아질수록 소요시간이 길어집니다.
- 커넥션이 맺어지면 클라이언트는 HTTP 요청을 새로 생성된 TCP 파이프를 통해 전송되며, 요청 메시지가 인터넷을 통해 전달되고 서버에 의해서 처리되는데까지는 시간이 소요됩니다.
- 웹 서버가 HTTP 응답을 보내는 것 역시 시간이 소요됩니다.

이러한 TCP 네트워크 지연은 하드웨어의 성능, 네트워크와 서버의 전송 속도, 요청과 응답 메시지 크기, 클라이언트와 서버간의 거리에 따라 크게 달라집니다. 또한 TCP 프로토콜의 기술적인 복잡성도 지연에 큰 영향을 끼칩니다.

### 성능 관련 중요 요소

TCP 관련 지연은 다음과 같습니다.

- TCP 커넥션의 핸드셰이크 설정
- 인터넷의 혼잡을 제어하기 위한 TCP의 느린 시작(slow-start)
- 데이터를 한데 모아 한 번에 전송하기 위한 네이글(nagle) 알고리즘
- TCP의 편승(piggyback) 확인응답(acknowledgment)을 위한 확인응답 지연 알고리즘
- TIME_WAIT 지연과 포트 고갈

고성능의 HTTP 소프트웨어 개발시 위 내용을 위하는 것이 좋습니다.

### TCP 커넥션 핸드셰이크 지연

데이터를 전송하기 위해 새로운 TCP 커넥션을 열 때면, TCP 소프트웨어는 커넥션을 맺기 위한 조건을 맞추기 위해 연속으로 IP 패킷을 교환합니다. 작은 크기의 데이터 전송에 커넥션이 사용된다면 이런 패킷 교환은 HTTP 성능을 크게 저하시킬 수 있습니다.

TCP 커넥션이 핸드셰이크 하는 순서는 다음과 같습니다.

1. 클라이언트는 새로운 TCP 커넥션을 생성하기 위해 작은 TCP 패킷을 서버에 보냅니다. 해당 패킷은 `SYN`이라는 특별한 플래그를 가집니다.
2. 서버가 그 커넥션을 받으면 몇 가지 커넥션 매개변수를 산출하고, 커넥션 요청이 받아들여졌음을 의미하는 `SYN`과 `ACK` 플래그를 포함한 TCP 패킷을 클라이언트에게 보냅니다.
3. 마지막으로 클라이언트는 커넥션이 잘 맺어졌음을 알리기 위해서 서버에 다시 확인 응답 신호를 보냅니다.

이때 1번과 2번을 진행하면서 커넥션 핸드셰이크 지연이 발생하고, 일반적으로 크기가 작은 HTTP 트랜잭션은 50% 이상의 시간을 TCP를 구성하는데 쓰게 됩니다.

### 확인응답 지연

- 인터넷 자체는 패킷 전송을 완벽하게 보장하지 않습니다. (라우터 과부하시 패킷을 파기할 수 있습니다.) 따라서 TCP는 성공적인 데이터 전송을 보장하기 위해 자체적인 확인 체계를 가집니다.
- TCP 세그먼트는 순번과 데이터 무결성 체크섬을 가집니다. 각 세그먼트의 수신자는 세그먼트를 온전히 받으며 작은 확인응답 메시지를 받지 못하면 패킷이 파기되었거나 오류가 있는 것으로 판단하고 데이터를 다시 전송합니다.
- 확인 응답은 그 크기가 작기 때문에 TCP는 같은 방향으로 송출되는 데이터 패킷에 확인응답을 편승(piggyback) 시킵니다. 이를 통해서 네트워크를 좀 더 효츌적으로 사용하며, 가는 패킷이 없으면 별도 패킷으로 보냅니다.

### TCP 느린 시작(slow start)

- TCP의 데이터 전송 속도는 TCP 커넥션이 만들어진지 얼마나 지났는지에 따라 달라질 수 있습니다.
- **커넥션의 최대 속도를 제한하고 데이터가 성공적으로 전송되면 속도 제한을 높이는 방법** 을 느린 시작이라고 합니다.
- 느린 시작은 TCP가 한번에 전송할 수 있는 패킷 수를 제한하고, 성공시 패킷 수를 점점 더 추가합니다.
- 혼잡 제어 기능 때문에 새로운 커넥션은 기존 커넥션보다 느립니다.

### 네이글(Nagle) 알고리즘과 TCP_NODELAY

- 애플리케이션이 어떤 크기의 데이터인지 TCP 스택으로 전송할 수 있도록 TCP는 데이터 스트림 인터페이스를 제공합니다.
- 네이글 알고리즘은 네트워크 효율을 위해서 패킷을 전송하기 전에 많은 양의 TCP 데이터를 한 개의 덩어리로 합칩니다.
- 네이글 알고리즘은 세그먼트가 최대 크기(1500바이트)가 되지않으면 전송을 하지 않으나 다른 모든 패킷이 확인 응답을 받았을 경우 최대 크기 보다 작은 패킷 전송이 허락됩니다.
- 네이글 알고리즘은 HTTP 성능과 관련해 여러 문제를 발생합니다.
  - 크기가 작은 HTTP 메시지는 패킷을 채우지 못하기 때문에 추가적인 데이터를 기다리며 지연됩니다.
  - 확인응답 지연과 함께 쓰일 경우 형편없이 돌아갑니다.
- HTTP 애플리케이션은 성능 향상을 위해 HTTP 스택에 TCP_NODELAY 파라미터 값을 설정해서 네이클 알고리즘을 비활성하기도 하며, 이 경우 큰 크기의 데이터 덩어리를 직접 만들도록 하는 것이 좋습니다.

### TIME_WAIT의 누적과 포트 고갈

- TIME_WAIT 포트 고갈은 성능 측정 시에 심각한 성능 저하를 발생하지만 보통 실제 상황에서는 문제가 발생하지 않습니다.
- TCP 커넥션의 종단에서 TCP 커넥션을 끊으면 종단에서는 커넥션의 IP 주소와 포트 번호를 메모리의 작은 제어영역(control block)에 기록해놓습니다.
  - 보통의 세그먼트 최대 생명 주기의 2배 정도의 시간 동안만 유지됩니다. (일반적으로 2MSL, 2분)
  - 이를 통해서 커넥션이 중복으로 생기는 것을 막아줍니다.
- 현대의 빠른 라우터들 덕분에 커넥션이 닫힌 후에 중복되는 패킷이 생기는 경우는 거의 없어졌습니다.

<br/>

## 4.3 HTTP 커넥션 관리

### 흔히 잘못 이해하는 Connection 헤더

- HTTP는 클라이언트와 서버 사이에 프락시 서버, 캐시 서버 등과 같은 중개 서버가 놓이는 것을 허락합니다.
- 때로는 두 개의 인접한 HTTP 애플리케이션이 현재 맺고 있는 커넥션에만 적용될 옵션을 지정해야 하는 경우가 있으며 이때는 쉼표로 구분하며, 그 값들은 다른 커넥션에 전달되지 않습니다.
- HTTP 애플리케이션이 Connection 헤더와 함께 메시지를 전달받으면, 수신자는 송신자에게서 온 요청에 기술되어 있는 모든 옵션을 적용합니다.

### 순차적인 트랜잭선 처리에 의한 지연

커넥션 관리가 제대로 이루어지지 않으면 TCP 성능이 매우 안좋아질 수 있습니다. 예를 들어 순차적인 트랜잭션이 발생하는 경우에는 여러 단점을 가집니다.

- 물리적인 지연으로 인해 하나씩 처리하는 과정이 심리적인 지연으로 다가옵니다.
- 특정 브라우저의 경우, 객체를 화면에 배치하려면 객체의 크기를 알아야 하기 때문에 모든 객체를 내려받기 전까지 텅 빈 화면을 보여줍니다.

HTTP 커넥션을 올리는 성능은 다음과 같습니다.

- 병렬 커넥션 : 여러 개의 TCP 커넥션을 통한 동시 HTTP 요청
- 지속 커넥션 : 커넥션을 맺고 끊는 데서 발생하는 지연을 제거하기 위한 TCP 커넥션의 재활용
- 파이프라인 커넥션 : 공유 TCP 커넥션을 통한 병렬 HTTP 요청
- 다중 커넥션 : 요청과 응답들에 대한 중재 (실험적인 기술)

아래에서는 이러한 커넥션을 하나하나 설명할 예정입니다.

<br/>

## 4.4 병렬 커넥션

앞서 이야기나온 순차적인 트랜잭션 처리는 매우 느리기 때문에 병렬 트랜잭션 처리를 합니다.

### 병렬 커넥션은 페이지를 더 빠르게 내려받습니다.

- 대역폭 제한과 커넥션이 동작하지 않는 시간을 활용하면 객체가 여러개 있는 웹 페이지를 빠르게 받을 수도 있습니다.
- 이렇게 되면, 커넥트 지연이 겹쳐짐으로 총 지연시간이 줄어듭니다.

### 병렬 커넥션이 항상 더 빠르지는 않습니다.

- 일반적으로는 병렬 커넥션이 더 바르기는 하지만 그렇지 않습니다.
- 제한된 대역폭 내에서 각 객체를 전송받는 것은 느리기 때문에 성능상의 장점이 사라집니다.
- 다수의 커넥션은 많은 메모리를 소모하고 자체적인 성능 문제가 발생할 수도 있습니다.
- 일반적으로 적은 수의 병렬 커넥션만 허용합니다.

### 병렬 커넥션은 더 빠르게 느껴질 수 있습니다.

- 화면에 역러 개의 객체가 동시에 보이면서 내려받고 있는 상황을 볼 수 있기에 사용자는 더 빠르게 느낄 수 있습니다.

<br/>

## 4.5 지속 커넥션

일반적으로 웹 클라이언트는 보통 같은 사이트에 여러 개의 커넥션을 맺습니다. 이러한 속성을 **사이트 지역성(site locality)**라 부릅니다.

해당 서버에 이미 맺어져 있는 지속 커넥션을 재사용함으로써 커넥션을 맺기 위한 준비작업에 따르는 시간을 절약할 수 있습니다.

### 지속 커넥션 vs 병렬 커넥션

병렬 커넥션은 다음의 단점을 가집니다.

- 각 트랜잭션마다 새로운 커넥션을 맺고 끊기 때문에 시간과 대역폭이 소요됩니다.
- 각각의 새로운 커넥션은 TCP 느린 시작 때문에 성능이 떨어집니다.
- 실제로 연결할 수 있는 병렬 커넥션의 수에 제한이 있습니다.

지속 커넥션은 병렬 커넥션에 비해 몇 가지 장점이 있습니다.

- 커넥션을 맺기 위한 사전 작업과 지연을 줄여주고 튜닝된 커넥션을 유지하며, 커넥션의 수를 줄여줍니다.

디만 지속된 커넥션을 잘못 관리할 경우 불필요한 커넥션이 쌓이게 됩니다.

일반적으로 지속 커넥션은 병렬 커넥션과 함께 사용될 때가 가장 효과적입니다.

### HTTP/1.0+의 Keep-Alive 커넥션

### Keep-Alive 동작

### Keep-Alive 옵션

### Keep-Alive 커넥션 제한과 규칙

### Keep-Alive와 멍청한(dumb) 프락시

### Proxy-Connection 살펴보기

### HTTP/1.1의 지속 커넥션

### 지속 커넥션의 제한과 규칙

<br/>

## 4.6 파이프라인 커넥션

<br/>

## 4.7 커넥션 끊기에 대한 미스터리

<br/>

## 4.8 추가 정보