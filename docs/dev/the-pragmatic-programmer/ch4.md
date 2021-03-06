---
sidebar_position: 4
---

# 4. 실용주의 편집증

> Tip 30. 완벽한 소프트웨어는 만들 수 없다.

## Item 21. 계약에 의한 설계

> 상식과 정직만큼 사람을 놀라게 하는 건 없다.

- 컴퓨터 시스템은 어려우나 사람 문제가 더 어렵습니다.
- 계약은 상대와 나의 권리와 책임을 정의합니다.
- 계약과 마찬가지로 소프트웨어 모듈이 소통하는 것을 돕기 위해 동일 개념을 사용하는 것 또한 가능합니다.

### DBC

- 계약에 의한 설계 개념
- 프로그램의 정확성을 보장하기 위해 소프트웨어 모듈들의 권리와 책임을 문서화하는 데에 초점을 맞춥니다.
- 정확한 프로그램이란 설계한 그대로 그만큼만 하는 프로그램을 말하며 이 주장을 문서화하고 검증하는 것이 계약에 의한 설계(Design By Contract, DBC)의 핵심입니다.
- 다음의 루틴을 준수합니다.
  - **선행조건(precondition)** : 루틴을 호출되기 위해 참이어야 하는 것, 루틴의 요구사항
  - **후행조건(postcondition)** : 루틴이 자기가 할 것이라고 보장하는 것, 루틴이 완료되었을 때 세상의 상태
  - **클래스 불변식(class invariant)** :호출자의 칩장에서 언제나 참임을 클래스가 보장

```java
// DBC를 보여주는 자바 예제.
/**
 * @invariant forall Node n in elements()
 *   n.prev() != null
 *     implies
 *       n.value().compareTo(n.prev().value()) > 0
 */
 public class dbc_list {
   /**
     * @pre contains(aNode) == false
     * @post contains(aNode) == true
     */
   public void insertNode(final Node aNode) {
    //...
   }
 }

```

- 루틴과 루틴의 잠재적 호출자 간의 계약은 다음과 같습니다.
  - _만약 호출자가 루틴의 모든 선행조건을 충족한다면, 해당 루틴은 종료시 모든 후행조건과 불변식이 참이 될 것을 보증해야 합니다._

> Tip 31. 계약에 따른 설계를 해라

- 즉, 직교성에서는 shy 코드를 작성했다면 여기서는 lazy 코드입니다.
- 수용할 것에 대해서는 엄격하게 하고, 내어줄 것에 대해서는 최소한도를 약속하는 것이 중요합니다.
- 상속성과 다형성은 여기서 특히 더 중요합니다. 즉 **리스코드 대체 규칙**을 준수하는 것이 중요합니다.
  - _서브클래스는 사용자가 차이점을 모르고서도 기반 클래스 인터페이스를 통해 사용할 수 있어야 한다._

### DBC 구현

- DBC의 최고 장점은 요구사항과 보증의 문제를 전면으로 내세운다는 것입니다.
- DBC는 결국 설계 기법이며 코드에서 지원하지 않아 자동검사가 안되더라도 주석으로 넣고 문제가 발생했을 때 우선적으로 봐야할 곳이 됩니다.

#### 단정문

다만 컴파일러가 단정문을 검사하는 것은 부분적으로 밖에 되지 않습니다. 그 이유는 아래와 같습니다.

- (1) 단정문이 밑으로 전파되도록 하는 자원이 없습니다.
- (2) 추가적으로 이전이라는 개념이 없습니다.
- (3) 런타임 시스템과 라이브러리가 계약을 지원하도록 설게되지 않았습니다.

#### 언어지원

- DBC 자체를 지원하는 언어는 선, 후행 조건을 컴파일러와 런타임 시스템에서 자동으로 검사합니다.
- 자바의 경우는 **iContract**가 있어서 주석(javadoc)을 통해 개발에 참고하면 좋습니다.

### DBC와 일찍 멈추기

- DBC는 일찍 작동을 멈추게 하라는 개념과 잘 어울립니다.

### 불변식과 일찍 멈추기

이외에도 불변식을 사용하는 다양한 방법이 있습니다.

#### 루프 불변식

- 단순하지 않은 루프에서 경계 조건을 제대로 정하는 것은 어렵습니다.
- 아래의 반복문 불변식을 예시로 들 수 있습니다.

```c++
int m = arr[0];
int i = 1;
// 반복문 불변식: m = max(arr[0:i-1])
while(i < arr.length) {
  m = Math.max(m, arr[i]);
  i = i + 1;
}
```

- 루프 불변식은 단정문을 이용해 명시적으로 코딩하거나 설계와 문서화 도구로도 유용합니다.

> 누구의 책임인가?

- 호출자와 호출되는 루틴 중에 선행조건을 확인하는 것은 그 누구의 책임도 아닙니다.

#### 의미론적 불변식

- 의미론적 불변식을 사용하면 일종의 '철학적 계약'인 불변의 요구사항을 표현할 수 있습니다.
- **고정 불변의 법칙인 요구사항과 단순한 정책을 혼동**하면 안됩니다.
- 자격이 있는 요구사항을 찾았다면 어떤 문서에든 잘 드러나도록 만듭니다.

ex) `오류 발생시 소비자의 입장을 우선하라`

- 이는 시스템의 다른 많은 부분에 적용할 수 있는 분명하고 간략한 진술이며 시스템 사용자와 맺는 계약이며, 작동에 대한 보증입니다.

### 동적 계약과 에이전트

- 자율 에이전트의 경우에는 맞지않는 요구는 거부할 수 있습니다. 그러나, 계약의 합의가 결정적으로 중요합니다.
- **설계를 하게된다면 반드시 계약 또한 하는 것이 중요합니다.**

> DBC가 그렇게 좋다면 왜 더 널리 안쓰이는가?

- DBC는 결국의 주석에 가깝다고 생각이 들며, 주석은 관리가 없으면 레거시가 된다고 생각.
- 현재에 맞지 않는 설계 방식이지 않을까. 코드는 코드로서 읽혀야하며, DBC 보다는 테스트가 엣지 케이스나 그 요구사항에 맞는 경우를 보장하는 경우가 더 많다고 생각합니다.

> 무엇이 훌륭한 계약을 만드는가? 선행조건과 후행조건을 추가하는 것이 반드시 도움이 될까?

- 비관적으로 보인다.

<br/>

## Item 22. 죽은 프로그램은 거짓말을 하지 않는다

- 자기 스스로 문제를 인식하기 전에 다른 사람이 먼저 문제가있는지를 알아채는 일이 있습니다.
- 특히, `그런 일은 절대 일어날 리 없어` 라는 사고 에 빠지기 쉬우나, 결국은 그 일이 발생했기 때문에 결과가 나온 것이다.
- **모든 에러는 정보를 줍니다.** 즉, 에러가 있다면 즉시 이를 해결하는 방향으로 가야합니다.

> Tip 32. 일찍 작동을 멈추게 하라

### 망치지 말고 멈추라

- 가능한 한 빨리 문제를 발견하게 되면 좀 더 일찍 시스템을 멈출 수 있습니다.
- 자바와 라이브러리는 이 철학을 포용했기에 런타임 시스템에서 뭔가 예상하지 못한 것이 발생하면 `RuntimeException`을 던집니다.
- 다른 언어에서도 이는 똑같이 해야합니다.
- 실행중인 프로그램을 그냥 종료하는 것은 적절치 못할 때가 있으나 확실한 것은 불가능한 뭔가가 발생했다는 것을 발견한다면 **프로그램은 더 이상 유효하지 않다고 이야기 할 수 있습니다.**

<br/>

## Item 23. 단정적 프로그래밍

> Tip 33. 단정문을 사용해서 불가능한 상황을 예방하라.

- 절대 일어나지 않을 것이라는 생각이 든다면 이를 확인하는 코드를 추가해야합니다.

### 단정 기능을 켜두라

단정은 코드에 과부하를 준다는 오해가 있습니다. 특히 아래의 내용을 중요하게 생각해야합니다.

- 테스트가 모든 버그를 발견할 수는 없습니다.
- 프로그램은 별에 별 상황에서도 돌아갑니다.

따라서 모든 가능한 에러를 체크하고 놓친 것들을 잡아내기 위한 단정문을 쓰는 것입니다.

> 단정과 그 부작용

에러를 발견하려고 넣은 코드가 새로운 에러를 만드는 것을 피해야합니다.

```java
// 잘못된 코드
while(iter.hasMoreElements()){
  Test.ASSERT(iter.nextElement() != null);
  Object obj = iter.nextElement();
  // ...
}
```

```java
// 올바른 코드
while(iter.hasMoreElements()){
  Object obj = iter.nextElement();
  Test.ASSERT(obj != null);
  // ...
}
```

- 위의 예시의 경우를 디버깅 행위가 디버깅되는 시스템의 행동을 바꿔버리는 일종의 '하이젠버그(Heisenbug)'적인 문제라고 합니다.

<br/>

## Item 24. 언제 예외를 사용할까

- 가능한 모든 에러, 특히 의외인 것들을 체크하는 것이 중요합니다.
- 에러 처리를 한 장소로 모아, 정상적인 컨트롤의 흐름이 명확히 보입니다.

```java
retcode = OK;
try {
  socket.read(name);
  process(name);
  socket.read(address);
  processAddress(address);
  socket.read(telNo);
  // ...
} catch (IOException e) {
  retcode = BAD_READ
  Logger.log("Error reading individual:" + e.getMessage());
}
return retcode;
```

### 무엇이 예외적인가

- 예외에 문제가 있다면 하나는 이걸 언제 사용할지 아는 것입니다.
- 예외가 프로그램의 정상 흐름의 일부로 사용되는 일은 거의 없어야 하며 의외의 상황을 위해 남겨둬야합니다.

> Tip 34. 예외는 예외적인 문제에 사용하라

- 예외를 정상적인 처리 과정의 일부로 사용하는 프로그램은 고전적인 스파게티 코드의 가독성 문제와 관리성 문제를 전부 떠안게 됩니다.
- 이러한 코드는 캡슐화가 깨지고 루틴과 호출자 사이의 결합도가 높아집니다.

### 에러 처리기는 또 다른 대안이다.

- 에러 체러기는 에러가 감지되었을 때 호출되는 루틴입니다.
- 특정 부류의 에러를 처리하기 위해 어떤 루틴을 등록하게 됩니다.

<br/>

## Item 25. 리소스 사용의 균형

- 코딩할 때 우리는 모든 리소스를 관리합니다.
  - 리소스 : 메모리, 트랜잭션, 쓰레드, 파일, 타이머 등 사용에 어떤 제한이 있는 모든 종류의 것

> Tip 35. 시작한 것은 끝내라

- 위의 팁은 리소스를 할당하는 루틴이나 객체가 리소스를 해제하는 책임 역시 져야함을 의미합니다.

다음의 코드 예시를 예로 들 수 있습니다.

```c
void readCustomer(const char *fName, Customer *cRec) {
  cFile = fopen(fName, "r+");
  fread(cRec, sizeof(*cRec), 1, cFile);
}
void writeCustomer(Customer *cRec) {
  rewind(cFile);
  fwrite(cRec, sizeof(*cRec), 1, cFile);
  fclose(cFile);
}
void updateCustomer(const char *fName, double newBalance){
  Customer cRec;
  readCustomer(fName, &cRec);
  cRec.balance = newBalance;
  writeCustomer(&cRec);
}
```

위 코드는 read 루틴과 write 루틴이 긴밀히 결합(coupling) 되어 있으며, 전역 변수인 cFile을 공유합니다.

다음의 경우 명세를 바꿔서 음수가 아닌 경우만 업데이트를 하는 경우, 다음을 수정합니다.

```c
void updateCustomer(const char *fName, double newBalance){
  Customer cRec;
  readCustomer(fName, &cRec);
  if(newBalance >= 0.0) {
    cRec.balance = newBalance;
    writeCustomer(&cRec);
  }
  else
    fclose(cFile);
}
```

위와 같은 구조는 전역 변수인 cFile을 통해 세 개의 루틴이 결합되는 안좋은 코드를 만들게 됩니다.

따라서 아래와 같은 구조를 만들어야 합니다.

```c++
void readCustomer(FILE *cFile, Customer *cRec) {
  fread(cRec, sizeof(*cRec), 1, cFile);
}
void writeCustomer(FILE *cFile, Customer *cRec) {
  rewind(cFile);
  fwrite(cRec, sizeof(*cRec), 1, cFile);
}
void updateCustomer(const char *fName, double newBalance){
  File *cFile;
  Customer cRec;
  cFile = fopen(fName, "r+")
  readCustomer(cFile, &cRec);
  if (newBalance >= 0.0) {
    cRec.balance = newBalance;
    writeCustomer(&cRec);
  }
  fclose(cFile);
}
```

#### 중첩 할당

- 리소스 할당의 기본 패턴을 확장해서 한 번에 하나 이상의 리소스를 필요로 하는 루틴에 적용할 수 있습니다.
  - (1) 리소스를 할당한 순서의 반대로 해제합니다.
  - (2) 코드의 여러 곳에서 동일한 리소스 집합을 할당하는 경우, 할당 순서를 언제나 같게합니다. (deadlock 가능성을 줄여줍니다.)

### 객체와 예외

- 할당과 해제의 균형을 클래스의 생성자와 소멸자와 비슷합니다.
- 객체지향 언어로 프로그래밍을 하는 경우, 리소스를 클래스 안에 캡슐화 하는 것이 유용합니다.

### 균형과 예외

- 예외를 지원하는 언어는 리소스 해제에 복잡한 문제가 있을 수 있습니다.

#### C++에서 예외와 리소스 사용 균형

```c++
void doSomething(void) {
  Node *n = new Node;
  try {
    // do Something
  } catch (...) {
    delete n;
    throw;
  }
  delete n;
}
```

- 위 코드는 DRY 원칙 위반입니다.
- 이를 C++ 작동 방식 중 하나로 지역 객체의 특징을 사용할 수 있습니다.

```c++
void doSomething1(void) {
  Node n;
  try {
    // do Something
  } catch (...) {
    throw;
  }
}
```

- 혹은 아래와 같이 할수도 있습니다.

```c++
class NodeResource {
  Node *n;
public:
  NodeResource() { n = new Node; }
  ~NodeResource() { delete n; }
  Node *operator -> () { return n; }
};
void doSomething2(void) {
  NodeResource n;
  try {

  } catch (...) {
    throw;
  }
}
```

#### 자바에서 리소스 사용의 균형

- 자바는 게으른 방식의 자동 객체 삭제를 사용합니다. (참조가 없으면 삭제됩니다.)
- 위의 코드와 같이 구현은 힘드나 이를 위해 finally를 고안했습니다.

```java
public void doSomething() throws IOException {
  File tmpFile = new File(tmpFileName);
  FileWriter tmp = new FileWriter(tmpFile);
  try {
    // do something
  } finally {
    tmpFile.delete();
  }
}
```

### 리소스 사용의 균형을 잡을 수 없는 경우

- 기본적인 리소스 할당 방식이 아예 적절하지 않는 경우도 있습니다. (ex. 동적 자료구조형)
- 이때는 메모리 할당에 대한 의미론적인 불변식을 정하는 일이 필요합니다.
- 집합적인 자료구조 안에 자료에 대해 책임을 지는 게 누구인지를 정해놓아야 합니다.
- 리소스 사용의 기록을 남기는 것이 까다로워진다면 동적으로 할당된 객체에 일종의 자신만의 gc 기능을 작성할 수도 있습니다.

### 균형을 점검하기

- 실용주의 프로그래머는 자신을 포함해서 아무도 믿지 않기 대문에 정말로 리소스가 적절하게 해제되었는지 실제로 점검하는 코드를 늘 작성하는 것이 좋습니다.
- 자원들이 해당 시점에 반드시 이런 시점에 있어야한다고 판단되는 경우, 래퍼들을 사용해서 점검하는 것또한 좋습니다.
