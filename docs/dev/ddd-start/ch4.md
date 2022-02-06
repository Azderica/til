---
sidebar_position: 4
---

# 4. 리포지터리와 모델구현 (JPA 중심)

## JPA를 이용한 리포지터리 기능 구현

- 애그리거트를 어떤 저장소에 저장하느냐에 따라 리포지터리를 구현하는 방법이 다릅니다.
- 대표적인 예시로 도메인 모델과 리포지터리를 구현할 때 선호하는 기술은 JPA이며, 데이터 보관소로 RDBMS를 사용할 때 객체 기반의 도메인 모델과 관계형 데이터 모델 간의 매피ㅇ을 처리하는 기술로 ORM 만한 것이 없습니다.

### 모듈 위치

- 인터페이스는 애그리거트와 같이 도메인 영역에 속하고, 리포지터리를 구현한 클래스는 인프라스트럭처 영역에 속합니다.

[그림  4.1]

### 리포지터리 기본 기능 구현

리포지터리의 기본 기능은 다음의 두가지입니다.

- 아이디로 애그리거트 조회하기
- 애그리거트 저장하기

```java
public interface OrderRepository {
    public Order findById(OrderNo no);
    public void save(Order order);
}
```

- 아이디가 아닌 다른 조건으로 애그리거트를 조회하는 경우는 findBy 뒤에 조건 대상이 되는 프로퍼티 이름을 붙입니다.

```java
public interface OrderRepository {
    ...
    public List<Order> findByOrdererId(String orderId, int startRow, int size);
    ...
}
```

- JPQL을 사용하는 것도 좋은 방법이 될 수 있습니다.

<br/>

## 매핑 구현

### 엔티티와 밸류 기본 매핑 구현

### 기본 생성자

### 필드 접근 방식 사용

### AttributeConverter를 이용한 밸류 매핑 처리

### 밸류 컬렉션: 별도 테이블 매핑

### 별도 테이블에 저장하는 밸류 매핑

### 밸류 컬렉션을 @Entity로 매핑하기

### ID 참조와 조인 테이블을 이용한 단방향 M-N 매핑

<br/>

## 애그리거트 로딩 전략

<br />

## 애그리거트의 영속성 전파

<br/>

## 식별자 생성 기능