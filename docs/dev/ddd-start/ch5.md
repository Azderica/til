---
sidebar_position: 5
---

# 리포지터리의 조회 기능(JPA 중심)

<br/>

## 검색을 위한 스팩

- 리포지터리는 애그리거트의 저장소입니다.
- 애그리거트를 저장하고 찾고 삭제하는 것이 리포지터리의 기본 기능입니다.
- 스펙(Specification)은 애그리거트가 특정 조건을 충족하는지 여부를 검사합니다.

### 스펙 조합

- 스펙의 장점은 조합에 있습니다.

<br/>

## JPA를 위한 스펙 구현

- 리포지터리 코드는 모든 애그리거트를 조회한 다음에 스펙을 이용해 방식을 사용했으나 이는 성능을 느리게 합니다.
- 실제 구현에서는 쿼리의 where 절에 조건을 붙여서 필요한 데이터를 걸러야 합니다.

### JPA 스펙 구현

- 응용 서비스는 원하는 스펙을 생성하고 리포지터리에 전달해서 필요한 애그리거트를 검색하면 됩니다.

```java
Specification<Order> ordererSpec = new OrdererSpec("madvirus");
List<Order> orders = orderRepository.findAll(ordererSpec)
```

- 스펙 생성이 필요한 코드는 스펙 생성 기능을 제공하는 클래스를이용해서 조금 더 간결하게 스펙을 생성할 수 있습니다.

```java
Specification<Order> betweenSpec = orderSpecs.between(fromTime, toTime);
```

### AND/OR 스펙 조합을 위한 구현

- AND를 위한 JPA 스펙

```java
...
Predicate[] predicates = specs.stream()
        .map(spec -> spec.toPredicate(root, cb))
        .toArray(size -> new Predicate[size]);
return cb.and(predicates);
...
```

- OR을 위한 JPA 스펙

```java
Predicate[] predicates = specs.stream()
        .map(spec -> spec.toPredicate(root, cb))
        .toArray(Predicate[]::new);
return cb.or(predicates);
```

### 스펙을 사용하는 JPA 리포지터리 구현

- 스펙을 사용한 리포지터리 구현은 스펙을 사용하는 메서드를 제공합니다.

> 리포지터리 구현 기술 의존

- 도메인 모델은 구현 기술에 의존하지 않아야합니다.
  - 다만, 완전 중립적인 형태로 할 노력까지는 없습니다.
- 스펙 구현을 추상화하기 위해 많은 노력을 기울이는 것에 비해 실제 얻는 이점은 크지 않습니다.

<br/>

## 정렬 구현

<br/>

## 페이징과 개수 구하기 구현

<br/>

## 조회 전용 기능 구현

### 동적 인스턴스 생성

### 하이버네이트 @Subselect 사용
