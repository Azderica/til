---
sidebar_position: 2
---

# 2. 신속한 코드 분석

## 2.1 코드를 신속하게 빨리 읽기

### 2.1.1 두뇌에서 무슨 일이 일어나는가?

```java
public class InsertionSort {
    public static void main(String[] args) {
        int[] array = {45, 12, ...};
        int temp;
        for(int i = 1; i < array.length; i++) {
            for (int j = i; j > 0 ; j--) {
                if (array[j] < array[j - 1]) {
                    // swap j with j - 1;
                    temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = temp;
                }
            }
        }
        // print array
        for(int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }
    }
}
```

- "프로그램은 사람이 읽을 수 있도록 작성해야만 합니다. 기계가 실행하는 것은 부차적인 일입니다."
- 코드의 읽는 연습이 더 중요하나 일반적으로 작성하는 법을 훨씬 더 많이 연습합니다.
- 코드를 읽는 목적은 다양합니다.
  - 기능을 추가하거나 버그를 발견하기 위해서, 코드가 실행되는 더 큰 시스템을 이해하기 위해서
  - 위의 공통점은 코드를 읽을 때 우리는 코드에 존재하는 특정한 정보를 찾습니다.
- 관련 정보를 신속하게 찾는 능력을 향상시키면 코드를 다시 찾아보는 횟수를 줄일 수 있습니다.

### 2.1.2 재현한 코드 다시 살펴보기

- `삽입 정렬` 코드를 읽는 과정에서 STM과 LTM이 사용됩니다.
  - 첫째, 자바 문법에 대한 지식은 LTM으로부터 가져옵니다.
  - 둘째, 코드가 삽입 정렬을 구현한다는 사실을 알고 있다는 점입니다.
- 위의 경우, 자바가 익숙하다면 로직부분은 LTM에서 가져옵니다.
- 그러나 이름의 경우, array의 값 등은 STM에서 가져옵니다.

### 2.1.3 두 번째 실험 다시 살펴보기

- 그러나 LTM에서 가져오기 어려운 코드를 보면, 기억하기가 어렵습니다.

### 2.1.4 생소한 코드를 읽는 것은 왜 어려운가?

- 익숙하지 않은 코드를 기억하기 어려운 이유는 **STM의 용량에 제한이 있어서**입니다.
- 코드에 있는 정보를 모두 다 STM에 저장하고 처리하는 것은 무리적으로 불가능합니다.
- STM은 정보를 저장하는 시간뿐만 아니라 크기 또한 제한됩니다.
  - 최근 STM의 용량은 2개에서 6개 사이입니다.
- STM의 작은 용량을 극복하기 위해 LTM과 협업하여, 읽거나 기억한 정보를 이해합니다.

<br/>

## 2.2 기억의 크기 제한을 극복

- 그러나 우리는 6개 이상을 기억하고 처리할 수 있습니다.

### 2.2.1 단위로 묶는 것의 위력

- 체스를 예시로 기억할 수 있습니다.

| |체스 전문가|체스 비전문가|
|-|-|-|
|규칙적|기억 O|기억 X|
|비규칙적|기억 X|기억 X|

- 전문가는 LTM의 기억을 많이 사용했습니다.
- 특정한 주제에 대해 두뇌가 더 많은 정보를 저장하고 있다면 입력된 정보들을 효율적으로 청크로 묶는 것이 수월합니다.
- 단어를 기억할 때도 마찬가지로 아는 단어 들을 LTI에서 가져오기 때문에 기억하기 쉽습니다.
- LTM에 지식이 많을 수록 기억을 쉽게합니다. 이는 프로그래밍에서도 동일합니다.

### 2.1.2 전문가는 초보자보다 코드를 더 잘 기억한다

- 섞지 않은 코드에 대해서 숙련된 프로그래머가 중급자보다, 중급자는 초보자보다 더 잘 기억합니다.
- 섞어 놓은 코드에서는 별 차이가 없습니다.
- 초보 프로그래머들이 숙련된 프로그래머보다 훨씬 더 적은 줄을 처리합니다.
  - 새로운 팀원을 교육할 때나 새로운 프로그래밍 언어를 배울 때, 이점을 기억해야 합니다.
  - 다른 프로그래밍 언어를 잘 아는 뛰어난 프로그래머도 LTM에 저장되지 않는 익숙치 않는 키워드, 구조, 도메인 개념을 기억하는데 어려움을 겪습니다.

<br/>

## 2.3 읽는 것보다 보는 것이 더 많다

- 정보는 STM에 도달하기 전에 **감각 기억 공간(sensory memory)**이라는 영역을 통과합니다.
- 이러한 감각 기간 공간에는 시각, 청각, 미각, 후각, 촉각에 대한 임시 저장 공간이 있으나 아래에서는 영상에 관련된 공간만 이야기합니다.

### 2.3.1 영상 기억 공간

- 코드를 읽을 때 눈을 통해 정보가 들어오는데 이 정보는 영상 기억 공간에 잠시 저장됩니다.
- 영상 기억 공간에 저장되어 있는 모든 정보가 STM에서 처리가 될 수 있는 것은 아닙니다.

#### 영상 정보와 코드

- 코드의 어떤 자세한 부분을 놓치는 것이 무의식적으로 일어나며, 이것은 코드에 대해 STM이 처리할 수 있는 것보다 더 많은 정보를 저장하는 것이 이론적으로 가능하다는 것입니다.

### 2.3.2 기억하는 대상이 중요하는 것이 아니고 기억하는 방식이 중요하다

- 코드를 읽고 나서 재현할 때, 기억에 의지해 작성한 코드를 자세히 살펴보면 우리가 무엇을 이해하고 있는지 혹은 무엇을 잘못 이해하고 있는지를 스스로 진단할 수 있습니다.

#### 청크로 묶을 수 있는 코드를 작성하는 방법

- 일상적이고 예상 가능한 상황은 청크로 묶는 것이 쉬워집니다.

#### 디자인 패턴의 사용

- 디자인 패턴에 대한 지식을 갖게 되면 청킹 능력이 향상되고 코드를 더 빠르게 수정할 수 있게 됩니다.

#### 주석문 쓰기

- 코드가 주석문을 포함하면 코드를 읽는 시간이 더 많이 들어간다는 연구 결과가 있습니다.
- 코드에 주석문이 있으면 새로운 팀원이 코드를 쉽게 이해할 수 있습니다.
- 고수준 주석문은 청크 단위로 쪼개는 데 도움이 됩니다. 그러나 반대로 저수준 주석문을 넣는 것은 오히려 청킹 작업에 부담이 됩니다.

#### 표식 남기기

- 코드에 어떤 **표식(beacon)**을 남기면 청크로 쉽게 쪼개는데 도움이 됩니다.
- 표식은 **단순 표식(simple beacon)**과 **복합 표식(compound beacon)** 두 가지 종류가 있습니다.
  - 단순 표식은 의미 있는 변수명같이 코드의 문법을 통한 의미가 자명한 표식입니다.
  - 복합 표식은 단순 표식으로 이루어진 좀 더 큰 단위의 코드로, 단순 표식들이 모여 함께 실행하는 기능입니다.
- 표식은 여러 형태가 될 수 있으며, 변수명이나 클래스명, 메서드명 같은 식별자 역시 표식이 될 수 있습니다.
- 표식을 찾으려면 다음의 스텝으로 진행합니다.
  - 1단계: 코드 선정
  - 2단계: 코드 파악
  - 3단계: 사용하는 표식의 적극적 확인
  - 4단계: 회고
  - 5단계: 코드에 다시 적용(생략 가능)
  - 6단계: 다른 사람과 비교(생략 가능)

### 2.3.3 청킹 연습

- 의도적 연습은 어떤 기술을 향상하기 위해 조금씩 연습하는 것을 의미합니다.
- 청킹을 의도적으로 연습하기 위해서는 적극적으로 코드를 기억해내는 것을 훈련하면 좋습니다.
- 연습은 다음 방법으로 갑니다.
  - 1단계: 코드 선정
  - 2단계: 코드 파악
  - 3단계: 코드 재현
  - 4단계: 회고
  - 5단계: 다른 사람과 비교 (생략 가능)

<br/>

## 요약

- STM은 두 개에서 여섯 개 사이의 항목을 저장할 수 있는 용량을 갖습니다.
- 정보를 기억할 때 STM은 크기에 대한 제약을 극복하기 위해 LTM와 협업합니다.
- 새로운 정보를 읽을 때 우리 두뇌는 그 정보를 청크라는 몇 개의 묶음으로 나눕니다.
- LTM에 지식이 부족하면 코드를 읽을 때 하위 수준의 정보들 이를테면 문자나 키워드 같은 것에 의존해야 합니다. 이럴 때 STM의 공간이 빠르게 소진됩니다.
- LTM이 코드와 관련 있는 지식을 충분히 가지고 있다면 코드의 하위 수준의 요소들은 STM에 저장하는 대신 '자바에서의 for 루프' 혹은 '파이썬으로 된 선택 정렬 알고리즘' 같은 식으로 추상 개념을 기억하기 때문에 STM의 공간을 절약합니다.
- 코드를 읽을 때 그 내용은 우선 영상 기억 공간에 저장됩니다. 그 후 코드 중 아주 적은 일부만이 STM으로 보내집니다.
- 코드를 기억해내는 일은 프로그래밍에 대한 지식이 어느 정도인지 가늠해볼 수 있는 자가 진단 도구로 사용될 수 있습니다. 이미 알고 있는 것을 기억하는 것은 쉽기 때문에 기억해낸 코드는 잣기가 이미 잘 알고 있는 디자인 패턴, 프로그래밍 구성 요소, 도메인 지식 등을 드러내줍니다.
- 코드는 우리 두뇌에서 처리하기 쉽게 만드는 특징들 가령 디자인 패턴, 주석문, 명확한 표식 같은 것들을 가질 수 있습니다.
