---
sidebar_position: 4
---

# 4. 부호화와 발전

> 만물은 변한다. 그대로 있는 것은 아무것도 없다.

- 애플리케이션은 필연적으로 시간이 지남에 따라 변합니다. 새로운 제품이 출시하거나 요구사항을 잘 이해 혹은 환경이 변함에 따라 기능이 추가되거나 변경됩니다.
- 이러한 경우, 애플리케이션 기능을 변경하려면 저장하는 데이터도 변경해야합니다. 다만 스키마가 변경될 수도 있기 때문에 이전 데이터 타입과 새로운 데이터 타입이 섞여 포함될 수 있습니다.
- 대규모 애플리케이션에서 코드 변경은 즉시 반영이 힘듭니다.
  - 서버측에서는 rolling upgrade, 혹은 staged rollout 이라고 불리는 순회식 업그레이드를 진행합니다.
  - 클라이언트 측은 애플리케이션에 의해 전적으로 좌우되며 업데이트를 설치하지 않을 수도 있습니다.
- 즉, 예전 버전의 코드와 새로운 버전의 코드가 공존할 수 있다는 이야기입니다.
  - **하위 호환성** : 새로운 코드는 예전 코드가 기록한 데이터를 읽을 수 있어야 합니다.
  - **상위 호환성** : 예전 코드는 새로운 코드가 기록한 데이터를 읽을 수 있어야 합니다.
  - 하위 호환성은 일반적으로 어렵지 않으나 상위 호환성은 어렵습니다.
- 아래의 챔터에서는 JSON, XML, Protocol Buffers등의 데이터 부호화를 위한 다양한 형식을 살펴봅니다.

## 데이터 부호화 형식

- 프로그램은 보통 두가지 형태로 표현된 데이터를 사용해 동작합니다.
  - object, struct, list, array, hash, tree 등의 데이터 구조, **인메모리**
  - 일련의 **바이트**열(ex, JSON 문서)
  - 인메모리 표현에서 바이트열로의 전환을 **부호화(직렬화나 마샬링)**이라고 하며 반대를 **복호화(파싱, 역직렬화, 언마샬링)**이라고 합니다.

> 직렬화는 트랜잭션에서도 사용되기 때문에 이 책에서는 부호화라고 합니다.

### 언어별 형식

- 많은 프로그래밍 언어는 인메모리 객체를 바이트열로 부호화하는 기능을 제공합니다.
  - ex) 자바의 `java.io.Serializable`, 루비의 `Marshal`, 파이썬의 `pickle` 등
- 프로그래밍 언어에 내장된 부호화 라이브러리는 최소한의 추가 코드로 인메모리 객체를 저장하고 복원할 수 있기 때문에 매우 편리하나 심각한 문제점 또한 많습니다.
  - 부호화는 보통 특정 프로그래밍 언어와 묶여 있는 경우가 많습니다.
  - 동일한 객체 유형의 데이터를 복원하려면 복호화 과정이 임의의 클래스를 인스턴스화할 수 있어야 합니다. 이는 보안에서의 문제가 될 수도 있습니다.
  - 데이터 버전 관리는 보통 부호화 라이브러리에서는 나중에 생각하게 됩니다. 위에 언급된 상위, 하위 호환성의 불편만 문제가 등한시 됩니다.
  - 효율성도 종종 나중에 생각하게 됩니다. (자바가 그런 경우의 대표라고 합니다.)
- 매우 일시적인 목적 외에는 언어에 내장된 부호화를 사용하는 방식은 일반적으로 좋지 않습니다.

### JSON과 XML, 이진 변형

- 많은 프로그래밍에서 읽고 쓸 수 있는 표준화 부호화로 JSON과 XML이 있습니다. 그외에도 CSV가 있습니다.
- JSON, XML, CSV는 텍스트 형식이라 어느 정도 사람이 읽을 수 있습니다. 그러나 몇 가지 문제점이 있습니다.
  - XML과 CSV에서는 수와 digit를 구분할 수 없습니다.
  - 큰 수를 다룰 때, 부동소수점 수를 사용하는 js 언어에서 파싱할 때 부정확해질 수 있습니다.
  - JSON과 XML은 유니코드 문자열을 잘 지원하나 이진 문자열을 지원하지 않습니다.
- JSON, XNL, CSV는 다양한 용도에서 장점을 가지며 특히 데이터 교환 형식에서 매우 좋습니다.
- 특히 이러한 상황에서는 다른 조직의 동의를 얻는 작업이 어렵습니다.

#### 이진 부호화

- 조직 내에서 사용하는 경우, 최소공통분모 부호화 형식을 사용해야 하는 부담감이 덜합니다. 즉, 더 간편하고 파싱이 빠른 형식을 쓸 수 있습니다.
- 데이터 셋의 크기는 용량이 커질 수록 이득이 커집니다.
- JSON과 XML은 이진 형식에 비교하면 둘 다 훨씬 많은 공간을 사용합니다.
- 메시지팩이 대표적인 예시며 JSON용 이진 부호화 형식입니다.

![json-messagepack](https://user-images.githubusercontent.com/42582516/137404707-6841c1b9-2f6e-4235-adf1-4b48eaa41548.png)

### 스리프트와 프로토콜 버퍼

- 아파치 스리프트(Apache Thrift)와 프로토콜 버퍼(Protocol Buffers)는 같은 원리를 기반으로 한 이진ㄷ 부호화 라이브러리입니다.
- 스리프트와 프로토콜 버퍼 모두 부호화할 데이터를 위한 스키마가 필요합니다.

스리프트 예제

```json
struct Person {
  1: required string    userName,
  2: optional i64       favoriteNumber;
  3: optional list<string> interests
}
```

프로토콜 예제

```json
message Person {
  required string user_name      = 1;
  optional int64 favorite_number = 2;
  repeated string interests      = 3;
}
```

- 스리프트와 프로토콜 버퍼는 각각 여기서 본 것처럼 스키마 정의를 사용해 코드를 생성하는 도구가 있습니다.
  - 이 도구를 통해서 다양한 프로그래밍 언어로 스키마를 구현한 클래스를 생성합니다.
  - 애플리케이션 코드는 생성된 코드를 호출해 스키마의 레코드를 부호화하고 복호화합니다.
- 스리프트는 **바이너리프로토콜(BinaryProtocol)** 과 **컴팩트프로토콜(CompactProtocol)** 이라는 두 가지 이진 부호화 형식이 있습니다.
  - 바이너리프로토콜은 필드 이름 대신 **필드 태그(field tag)** 를 포함합니다.
  - 컴팩트프로토콜은 의미는 같으나 동일한 정보를 34바이트로 줄여서 부호화합니다. (필드 타입과 태그 숫자를 단일 바이트로 줄이고, 가변 길이 변수를 사용합니다.)
- 프로토콜 버퍼는 스리프트의 컴팩트프로토콜과 비슷하며 같은 데이터를 33바이트로 만듭니다.

#### 필드 태그와 스키마 발전

- 스키마는 필연적으로 시간이 지남에 따라 변하는 것을 **스키마 발전(schema evolution)** 이라고 부릅니다.
- 스리프트와 프로토콜 버퍼는 하위 호환성과 상위 호환성을 유지하기 위해서는 다음의 기능을 제공하빈다.
  - 상위 호환성의 경우, 필드에 새로운 태그 번호를 줌으로서 예전 코드가 새로운 코드를 읽을 수 있습니다.
  - 하위 호환성의 경우, 각 필드에 고유한 태그 번호가 있는 동안에는 같은 의미를 가지고 있기 때문에 예전 데이터를 항상 볼 수 있습니다.
  - 삭제의 경우, 하위 호환성과 상위 호환성 문제를 해결하는 방식과 반대로 하면 됩니다.

#### 데이터타입과 스키마 발전

- 필드의 데이터타입을 변경하는 경우는 값이 정확하지 않거나 잘릴 위험이 있습니다.
- 프로토콜 버퍼의 기능으로 필드에 repeated 표시자와 optional 필드가 있는데, optional 필드를 repeated 필드로 변경해도 상관이 없습니다.
  - 이전 데이터를 읽는 새로운 코드는 0이나 1개의 엘리먼트가 있는 목록으로 봅니다.
  - 새로운 데이터를 읽는 예전 코드는 목록의 마지막 엘리먼트만 보게 됩니다.
- 스리프트는 전용 목록 데이터타입이 있으며 목록 데이터타입은 목록 엘리먼트의 데이터타입을 매개변수로 받으며 중첩된 목록을 지원한다는 장점이 있습니다.

### 아브로

- **아파치 아브로**는 프로토콜 버퍼와 스리프트와는 다른 또 하나의 이진 부호화 형식입니다.
- 아브로의 예제 스키마는 다음과 같습니다.

```json
record Person {
  string             userName;
  union {null, long} favoriteNumber = null;
  array<string>      interests;
}
```

- 바이트열에 필드나 데이터타입을 식별하기 위한 정보가 없습니다.
- 아브로를 통해 이진 데이터를 파싱하려면 스키마에 나타난 순서대로 필드를 살펴보고 스키마를 이용해 각 필드의 데이터타입을 미리 파악해야합니다.
  - 정확히 같은 스키마를 사용하는 경우에만 이진 데이터를 올바르게 복호화할 수 있습니다.

#### 쓰기 스키마와 읽기 스키마

- 애플리케이션이 파일인 데이터베이스에 쓰거나 전송 등의 목적으로 어떤 데이터를 아브로로 부호화하길 원한다면 알고 있는 스키마 버전을 사용해 데이터를 부호화합니다. 이 스키마를 **쓰기 스키마(writer's schema)** 라고 합니다.
- 애플리케이션이 파일이나 데이터베이스에서 또는 네트워크로부터 수신 등으로 읽은 어떤 데이터를 복호화하길 원한다면 데이터가 특정 스키마로 복호화하기를 기대합니다. 이 스키마를 **읽기 스키마(reader's schema)** 라고 합니다.
- 아브리의 핵심 아이디어는 쓰기 스키마와 읽기 스키마가 동일하지 않아도 되며 **단지 호환가능하면 된다는 것**입니다.

#### 스키마 발전 규칙

- 아브로에서 상위 호환성은 새로운 버전의 쓰기 스키마와 예전 버전의 읽기 스키마를 가질 수 있음을 의미합니다.
- 호환성을 유지하기 위해서는 기본 값이 있는 필드만 추가하거나 삭제할 수 있습니다.
- 기본값이 없는 필드를 추가하면 새로운 읽기는 예전 쓰기가 기롭된 데이터를 읽을 수 없기 때문에 하위 호환성이 깨집니다.
- 아브로에서는 널을 허용하기 위해 **유니온 타입(union type)** 을 사용해야 합니다.
- 아브로는 프로토콜 버퍼, 스리프트와 동일한 방식의 optional과 required 표시자를 가지고 있지 않습니다.
- 아브로는 타입을 변환할 수 있으므로 필드의 데이터타입 변경이 가능합니다. 필드 이름 변경도 가능하지만 조금 까다롭습니다.

#### 그러면 쓰기 스키마는 무엇인가

- 모든 레코드에 전체 스키마를 포함시킬 수는 없습니다. 왜냐하면 스키마는 부호화된 데이터보다 훨씬 클 가능성이 있습니다.
- 아브로를 사용하는 상황에 따라 다릅니다.
  - (1) 많은 레코드가 있는 대용량 파일
    - 아브로의 일반적인 용도, 쓰기 시작 부분에 한번만 쓰기 스키마를 포함시키면 됩니다.
  - (2) 개별적으로 기록된 레코드를 가진 데이터베이스
    - 레코드의 시작 부분에 버전 번호를 포함하고 데이터베이스에 스키마 버전 목록을 유지합니다.
  - (3) 네트워크 연결을 통해 레코드 보내기
    - 두 프로세스가 양방향 네트워크 연결을 통해 통신할 때 연결 설정에서 스키마 버전 합의를 할 수 있습니다.

#### 동적 생성 스키마

- 아브로는 스키마에 **태그 번호가 포함되어 있지 않는 다는 장점**을 가집니다.
- 이는 아브로가 동적 생성 스키마에 더 친숙하다는 장점을 가집니다. 이를 통해 상당히 쉽게 스키마를 생성할 수 있습니다.
- 데이터베이스 스키마가 변경될 때도 유연함을 가집니다. 스리프트나 프로토콜 버퍼는 필드 태그를 수동으로 할당해야합니다.

#### 코드 생성과 동적 타입 언어

- 스리프트와 프로토콜 버퍼는 코드 생성에 의존합니다. 자바, C++, C# 같은 정적 타입언어에서 유용합니다.
- 자바 스크립트, 루비, 파이썬 같은 동적 타입 프로그래밍 언어에서는 타입 검사기가 없으므로 코드 생성은 데이터를 가져오는데 불필요합니다.
- 아브로는 정적 타입 프로그래밍 언어를 위해 코드 생성을 선택적으로 제공합니다.
- 객체 컨테이너 파일이 있다면 아브로 라이브러리를 사용해 간단히 열어 JSON 파일을 보는 것과 같이 데이터를 볼 수 있으며 이를 **자기 기술(self-describing)** 이라고 합니다.
- 특성은 아파치 피그 같은 동적 타입 데이터 처리 언어와 함께 사용할 때 특히 유용합니다. 피그에서는 아브로 파일만 있으면 즉시 열어 분석을 시작할 수 있으며 스키마를 생각하지 않고도 아브로 형식으로 출력 파일에 파생 데이터를 기록할 수 있습니다.

### 스키마의 장점

- 위의 프로토콜 버퍼, 스리프트, 아브로는 스키마를 통해 이진 부호화 형식을 가지며 XML 스키마나 JSON 스키마보다 훨씬 간단하며 더 자세한 유효성 검사를 지원합니다.
- 많은 데이터 시스템이 이진 부호화를 독자적으로 구현하기도 합니다. (ex. ODBC, JDBC API)
- 이진 부호화에는 좋은 속성이 많이 있습니다.
  - 부호화된 데이터에서 필드 이름을 생략할 수 있기 때문에 다양한 "이진 JSON" 변형보다 크기가 더 작을 수 있습니다.
  - 스키마는 유용한 문서화 형식이므로 복호화시 스키마가 최신 상태인지를 확인할 수 있습니다.
  - 스키마 데이터베이스를 유지하며 스키마 변경이 적용되기 전에 상위 호환성과 하위 호환성을 확인할 수 있습니다.
  - 정적 타입 프로그래밍 언어 사용자에게 스키마로부터 코드를 생성하는 기능은 유용합니다. 컴파일 시점에 타입 체크를 할 수 있습니다.
- 즉, 스키마 발전은 schemaless 또는 읽기 스키마(schema-on-read) JSON 데이터베이스가 제공하는 것과 동일한 종류의 유연성을 제공하며 데이터나 도구 지원도 더 잘 보장합니다.

<br/>

## 데이터플로 모드

데이터플로는 매우 추장적인 개념이며 하나의 프로세스에서 다른 프로세스로 데이터를 전달하는 방법입니다.

아래는 보편화 방법입니다.

- 데이터베이스를 통한 데이터플로
- 서비스 호출을 통한 데이터플로
- 비동기 메시지 전달을 통한 데이터플로

### 데이터베이스를 통한 데이터 플로

- 데이터베이스에 기록하는 프로세스는 데이터를 부호화하고 데이터베이스에서 읽는 프로세스는 데이터를 복호화합니다.
- 데이터베이스에 뭔가를 저장하는 일을 **미래의 자신에게 메시지를 보내는 일**처럼 생각할 수 있습니다.
  - 이때 하위 호환성은 반드시 필요합니다. (이전 기록 내용을 복호화할 수 있어야하기 때문에)
- 동시에 다양한 프로세스가 데이터베이스를 접근하는 일은 흔합니다.
  - 이는 데이터베이스 내 값이 **새로운** 버전의 코드로 기록된 다음 현재 수행 중인 **예전 버전**의 코드로 그 값을 읽을 가능성이 있음을 의미합니다.
- 애플리케이션에서 데이터베이스 값을 모델 객체로 복호화하고 나중에 이 모델 객체를 다시 재부호화하면 변환 과정에서 **알지 못하는 필드가 유실될 수 있습니다.**

#### 다양한 시점에 기록된 다양한 값

- 데이터베이스는 일반적으로 언제나 값을 갱신할 수 있습니다.
- 데이터는 다시 기록하지 않는 한, 원래의 부호화 상태로 있기 때문에 이를 **데이터가 코드보다 더 오래 산다(data outlives code)** 라고 합니다.
- 데이터를 새로운 스키마로 다시 기록(rewriting, 마이그레이션) 하는 작업은 가능하나 비용이 매우 비쌉니다.
- 따라서 대부분의 관계형 데이터베이스는 기존 데이터를 다시 기록하지 않고 **널을 기본값으로 갖는 새로운 칼럼**을 추가하는 간단한 스키마 변경을 허용합니다.

이러한 스키마의 발전은 기본 저장소가 여러 가지 버전의 스키마로 부호화된 레코드를 포함해도 전체 데이터베이스가 단일 스키마로 부호화된 것처럼 보이게 합니다.

#### 보관 저장소

- 백업 목적이나 데이터 웨어하우스로 적재하기 위해 데이터베이스의 스냅샷을 만들때는 **최신 스키마를 사용해 부호화합니다.**
- 데이터 덤프는 한 번에 기록하고 이후에는 변하지 않으므로 아브로 객체 컨테이너 파일과 같은 형식이 적합합니다.

### 서비스를 통한 데이터플로: REST와 RPC

- 네트워크를 통해 통신해야 하는 프로세스가 있을 때 해당 통신을 배치하는 몇 가지 방법이 있습니다.
- 가장 일반적인 방법으로 **클라이언트**와 **서버**의 두 역할로 배치합니다.
  - 서버는 네트워크를 통해 API를 공개하고 클라이언트는 이 API로 요청을 만들어 서버에 연결할 수 있습니다.
  - 서버가 공개한 API를 **서비스**라고 합니다.
- API는 표준화된 프로토콜과 데이터 타입(HTTP, URL, SSL/TLS, HTML 등)으로 구성됩니다.
- 서비스 지향 및 마이크로서비스 아키텍처의 핵심 설계 목표는 서비스를 배포와 변경에 독립적으로 만들어 **애플리케이션 변경과 유지보수를 더 쉽게 할 수 있게 만드는 것**입니다.
- **서버와 클라이언트가 사용하는 데이터 부호화는 서비스 API의 버전 간 호환이 가능**해야 합니다.

#### 웹 서비스

- 서비스와 통신하기 위한 기본 프로토콜로 HTTP를 사용할 때 이를 **웹 서비스**라고 합니다.
  - 사용자 띠바이스에서 실행하며 HTTP를 통해 서비스에 요청하는 클라이언트 애플리케이션
  - 서비스 지향/마이크로서비스 아키텍처의 일부인 경우
  - 보통의 인터넷을 통해 다른 조직의 서비스에 요청하는 서비스
- 웹 서비스에는 대중적인 두 가지 방법인 **REST**와 **SOAP**가 있습니다.
- REST는 프로토콜이 아니라 HTTP의 원칙을 토대로 한 설계 철학입니다.
  - REST는 간단한 데이터 타입을 강조하며 URL을 사용해 리소스를 식별하고 캐시 제어, 인증, 콘텐츠 유형 협상에 HTP 기능을 사용합니다.
- SOAP는 네트워크 API 요청을 위한 XML 기반 프로토콜입니다.
  - SOAP는 HTTP 상에서 가장 일반적으로 사용되지만 HTTP와 독립적이며 대부분의 HTTP 기능을 사용하지 않습니다.
  - 다양한 기능을 추가한 광범위하고 복잡한 여러 관련 표준(WS, 웹 서비스 프레임워크)을 제공합니다.
  - SOAP 웹 서비스의 API는 웹 서비스 기술 언어(Web Services Description Language) 또는 WSDL이라고 부르는 XML 기반 언어를 사용해 기술합니다.
  - WSDL은 사람이 읽을 수 있게 설계하지 않았고 대개 SOAP 메시지를 수동으로 구성하기에 너무 복잡합니다.
- RESTful API는 간단한 접근 방식을 선호합니다.
  - 일반적으로 코드 생성과 자동화된 도구와 관련되지 않은 접근 방식을 의미합니다.

#### 원격 프로시저 호출(RPC) 문제

- 웹 서비스는 네트워크 상에서 API 요청을 하기 위한 여러 기술 중 가장 최신 형상일 뿐입니다.
- 웹 서비스는 **원격 프로시저 호출(remote procedure call, RPC)** 의 아이디어를 기반으로 합니다.
- RPC 모델은 원격 네트워크 서비스 요청을 같은 프로세스 안에서 특정 프로그래밍 언어의 함수나 메서드를 호출하는 것과 동일하게 사용 가능하게 해줍니다.(이러한 추상화를 **위치 투명성(location transparency)** 라고 합니다.)
- 로컬 함수 호출은 예측이 가능하지만 네트워크 요청은 예측이 어렵습니다.
  - 로컬 함수 호출은 결과를 반환하거나 예외, 반환을 하지 않는 결과라면 네트워크는 타임아웃으로 결과 없이 반환도 가능합니다.
  - 실패한 네트워크 요청을 다시 시도할 때 요청이 실제로 처리되고 응답만 유실될 수 있습니다.
  - 로컬 함수를 호출할 때마다 보통 거의 같은 실행 시간이 소요되나 네트워크 요청은 훨씬 느리고 지연 시간이 매우 다양합니다.
  - 로컬 함수를 호출하는 경우, 참조를 로컬 메모리의 객체에 효율적으로 전달하며 네트워크로 요청하는 경우에는 모든 매개변수는 네트워크를 통해 전송할 수 있게끔 바이트열로 부호화해야 합니다.
  - 클라이언트와 서비스는 다른 프로그래밍 언어로 구현할 수 있으므로 따라서 RPC 프레임워크는 하나의 언어에서 다른 언어로 데이터타입을 변환해야합니다.

#### RPC의 현재 방향

- RPC에는 이러한 문제가 있어서 차세대 RPC 프레임워크는 원격 요청이 로컬 함수 호출과 다르다는 사실을 더 분명히 합니다.
- 실패할지도 모르는 비동기 작업을 캡슐화하기 위해 퓨처(promise)를 사용합니다.
- 퓨처는 병렬로 여러 서비스에 요청을 보내야 하는 상황을 간소화하고 요청 결과를 취합합니다.
- 이런 프레임워크 중 일부는 **서비스 찾기(service discovery)** 를 제공합니다.
- REST 상에서 이진 부호화 형식이 우수한 성능을 제공할지도 모르나 RESTful API는 실험과 디버깅에 적합합니다.
- 이러한 이유로 REST는 공개 API의 주요한 방식입니다.

#### 데이터 부호화와 RPC의 발전

- 발전성이 있으려면 RPC 클라이언트와 서버를 독립적으로 변경하고 배포할 수 있어야합니다.
- 데이터베이스를 통한 데이터플로에 비해 서비스를 통한 데이터플오의 발전성을 가정을 단순화할 수 있습니다.
- RPC 스키마의 상하위 호환 속성은 사용된 모든 부호화로부터 상속됩니다.
  - 스리프트, gRPC는 각 부호화 형식의 호환성 규칙에 따라 발전할 수 있습니다.
  - SOAP에서 요청과 응답은 XML 스키마로 지정됩니다.
  - RESTful API는 응답에 JSON을 가장 일반적으로 사용합니다.
- RPC가 조직 경계를 넘나드는 통신에 사용되면 이는 서비스 호환성 유지를 어렵게 합니다.
- API 버전 관리가 반드시 어떤 방식으로 동작해야하는 협의는 없습니다.
  - RESTful API는 URL이나 HTTP Accept 헤더에 버전 번호를 사용하는 방식이 일반적입니다.

### 메시지 전달 데이터플로

아래에서는 RPC와 데이터베이스 간 비동기 메시지 전달 시스템(asynchronous message passing system)을 간단히 살펴봅니다.

- 이 시스템은 클라이언트 요청(보통 메시지)을 낮은 지연 시간으로 다른 프로세스에 전달하는 점에서는 RPC와 비슷합니다.
- 메시지를 직접 네트워크 연결로 전송하지 않고 임시로 메시지를 저장하는 메시지 브로커(message broker, 또는 메시지큐나 메시지 지향 미들웨어)라는 중간 단계를 거치는 것은 데이터베이스와 유사합니다.

메시지 브로커를 사용하는 방식은 직접 RPC를 사용하는 방식과 비교했을 때 여러 장점이 있습니다.

- 수신자가 사용 불가능하거나 과부하 상태라면 메시지 브로커가 버퍼처럼 동작할 수 있기 때문에 시스템 안전성이 향상됩니다.
- 죽었던 프로세스에 메시지를 다시 전달할 수 있기 때문에 메시지 유실을 방지할 수 있습니다.
- 송신자가 수신자의 IP주소나 포트 번호를 알 필요가 없습니다.
- 하나의 메시지를 여러 수신자로 전송할 수 있습니다.
- 논리적으로 송신자는 수신자와 분리됩니다.

메시지 전달 통신은 일반적으로 단방향이라는 점이 RPC와 다릅니다. 즉, 이러한 통신 패턴은 비동기입니다.

#### 메시지 브로커

- 대표적인 예시는 아파치 카프카와 같습니다.
- 일반적으로 메시지 브로커는 다음과 같이 사용합니다.
  - 프로세스 하나가 메시지를 이름이 지정된 큐나 토픽으로 전송하고 브로커는 해당 **큐**나 **토픽**으로 전송하고 브로커는 해당 큐나 토픽 하나 이상의 **소비자(consumer)** 또는 **구독자(subscriber)** 에게 메시지를 전달합니다.
  - 동일한 토픽에 여러 생산자(producer)와 소비자가 있을 수 있습니다.
- 토픽은 단방향 데이터플로만 제공합니다.
- 메시지 브로커는 보통 특정 데이터 모델을 강요하지 않습니다.

#### 분산 액터 프레임워크

**액터 모델(actor model)** 은 단일 프로세스 안에서 동시성을 위한 프로그래밍 모델입니다.

- 스레드(경쟁 조건, 잠금, 교착 상태와 연관된 문제들)을 직접 처리하는 대신 로직이 **액터**에 캡슐화 됩니다.
- 보통 각 액터는 하나의 클라이언트나 엔티티를 나타냅니다.
- 액터는 비동기 메시지의 송수신으로 다른 액터와 통신하며 액터는 메시지 전달을 보장하지 않습니다.
- 각 액터는 한 번에 하나의 메시지만 처리하므로 스레드에 대해 걱정할 필요가 없으며 프레임워크와 독집적으로 실행합니다.

**분산 액터 프레임워크**에서 이 프로그래밍 모델은 여러 노드 간의 애플리케이션 확장에 사용됩니다.

- 송신자와 수신자가 같은 노드에 있는지 다른 노드에 있는지 관계없이 동일한 메시지 전달 구조를 사용합니다.
- 다른 노드에 있는 경우 메시지를 부호화되고 네트워크를 통해 전송된 후 복호화됩니다.
- 액터 모델을 사용하는 경우 로컬과 원격 통신 간 근본적인 불일치가 적습니다.
- 분산 액터 프레임워크는 기본적으로 메시지 브로커와 액터 프로그래밍 모델을 단일 프레임워크에 통합합니다.
- 터터 기반 애플리케이션의 순회식 업그레이드은 상하위 호환성에 주의해야 합니다.
- 인기 있는 분산 액터 프레임워크 세 가지는 다음과 같이 메시지 부호화를 처리합니다.
  - **아카(Akka)** 는 기본적으로 자바의 내장 직렬화를 사용합니다. 이는 상위 호환성이나 하위 호환성을 제공하지 않으나 프로토콜 버퍼와 같은 부호화 형식으로 대체할 수 있습니다.
    - [아카 개념 간단 정리](https://azderica.github.io/00-akka-starter/)
  - **올리언스(Orleans)** 는 기본적으로 사용자 정의 데이터 부호화 형식을 사용합니다.
  - **얼랭(erlang)** 에서는 순회식 업그레이드는 가능하지만 신중하게 계획해야합니다. (어려움)

<br/>

## 정리

- 해당 내용에서는 데이터 구조를 네트워크나 디스크 상의 바이트로 변환하는 다양한 방법에 대해 이야기 합니다.
- 많은 서비스가 새로운 버전의 서비스를 동시에 모든 노드에 배포하는 방식보다 서서히 배포하는 순회식 업그레이드가 필요합니다. 이는 변경을 쉽게 할 수 있는 발전성에 도움이 많이 됩니다.
- 다양한 노드에서 다른 버전의 애플리케이션이 돌아가므로 시스템을 흐르는 모든 데이터는 **하위 호환성(새로운 코드가 예전 데이터를 읽을 수 있음)** 과 **상위 호환성(예전 코드가 새로운 데이터를 읽을 수 있음)** 을 제공하는 방식으로 부호화 해야합니다.
- 다양한 데이터 부호화 형식과 호환성 속성이 있습니다.
  - 프로그래밍 언어에 특화된 부호화는 단일 프로그래밍 언어로 제한되며 상위, 하위 호환성을 제공하지 못하는 경우가 종종 있습니다.
  - JSON, XML, CSV 같은 테스트 형식은 널리 사용되며 이들 간 호환성은 이 형식들을 사용하는 방법에 달려있습니다.
  - 스리프트, 프로토콜 버퍼, 아브로 같은 이진 스키마 기반 형식은 짧은 길이로 부호화되며 명확하게 정의된 상위 호환성과 하위 호환성의 맥악에서 효율적인 부호화를 지원합니다.
- 데이터 부호화의 중요성에 대한 여러 시나리오를 보여주는 다양한 데이터플로 모드를 설명합니다.
  - 데이터베이스에 기록하는 프로세스가 부호화하고 데이터베이스에서 읽는 프로세스가 복호화하는 데이터베이스
  - 클라이언트가 요청을 부호화하고 서버는 요청을 복호화하고 응답을 부호화하고 최종적으로 클라이언트가 응답을 복호화하는 RPC와 REST API
  - 송신자가 부호화하고 수신자가 복호화하는 메시지를 서로 전송해서 노드 간 통신하는 비동기 메시지 전달(메시지 브로커나 액터를 이용)
- 약간의 주의를 통해 상하위 호환성과 순회식 업그레이드가 가능하며 애플리케이션의 발전은 더욱 빨라지고 배포 빈도도 높아집니다.