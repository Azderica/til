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

- JPA의 `orderBy`, JPQL의 `order by` 절을 사용하면 됩니다.

```java
TypedQuery<Order> query = entityManager.createQuery(
    "select o from Order o " + 
            "where o.orderer.memberId,id = :ordererId " +
            "order by o.number.number desc",
    Order.class);
)
```

- 다음과 같은 방법도 있습니다.
  - `orderRepository.findAll(someSpec, "number.number desc");`

<br/>

## 페이징과 개수 구하기 구현

- JPA 쿼리는 `setFirstResult()`와 `setMaxResults()` 메서드를 제공하고 있는데 이 두 메서드를 이용해서 페이징을 구현할 수 있습니다.

```java
@Override
public List<Order> findByOrdererId(String ordererId, int startRaw, int fetchSize) {
    TypedQueryOrder<Order> query = entityManager.createQuery(
    "select o from Order o " +
            "where o.orderer.memberid.id = :ordererId " +
            "order by o.number.number desc"),
    Order.class);
    query.setParameter("ordererId", ordererId);
    query.setFirstResult(startRaw);
    query.setMaxResult(fetchSize);
    return query.getResultList();
}
```

- `setFirstResult()` 메서드는 읽어올 첫 번째 행 번호를 지정하고, `setMaxResults()` 메서드는 읽어올 행 개수를 지정합니다.
- 보여줄 행 개수가 15개이고, 보여줄 페이지 번호가 4인 경우 `findByOrdererId("madvirus", 45, 15)` 의 순서가 됩니다.

<br/>

## 조회 전용 기능 구현

- 리포지터리는 애그리거트의 저장소를 표현하는 것으로서 다음 용도로 리포지터리를 사용하는 것은 적합하지 않습니다.
  - 여러 애그리거트를 조합해서 한 화면에 보여주는 데이터 제공
    - 지연 로딩과 즉시 로딩 설정, 연관 매핑으로 머리가 아픈 이슈이기에 ID 참조의 장점을 활용할 수 없습니다.
  - 각종 통계 데이터 제공
    - 다양한 테이블을 조회하거나 DBMS 전용 기능을 사용해야 구할 수 있는데 이는 JPQL이나 Criteria로 처리하기 힘듭니다.

### 동적 인스턴스 생성

- JPA는 쿼리 결과에서 임의의 객체를 동적으로 생성할 수 있는 기능을 제공합니다.

```java
@Repository
public class JpaOrderViewDao implements OrderViewDao {
    @PersistenceContext
    private EntityManager em;

    @Override
    public List<Overview> selectByOrderer(String ordererId) {
        String selectQuery =
                "select new com.myshop.order.application.dto.OrderView(o, m,. p) " +
                "from Order o join o.orderLines ol, Member m, Product p " +
                "where o.orderer.memberId.id = :ordererId " +
                "and o.orderer.memberId = m.id " +
                "and index(ol) = 0 " +
                "and ol.productId = p.id " +
                "order by o.number.number desc";
        TypedQuery<OrderView> query = em.createQuery(selectQuery, OrderView.class);
        query.setParameter("ordererId", ordererId);
        return query.getResultList();
    }
}
```

```java
public class OrderView {
    private String number;
    private long totalAmounts;
    ...
    private String productName;

    ... // consturctor

    ... // get method
}
```

- 동적 인스턴스의 장점은 JPQL을 그대로 사용하므로 객체 기준으로 쿼리를 작성하면서도 동시에 지연/즉시 로딩과 같은 고민 없이 원하는 모습으로 데이터를 조회할 수 있습니다.


### 하이버네이트 @Subselect 사용

- 하이버네이트는 JPA 확장 기능으로 `@Subselect`를 제공합니다.
- `@Subselect` 는 쿼리 결과를 `@Entity`로 매핑할 수 있는 유용한 기능입니다.

```java
@Entity
@Immutable
@Subselect("select o.order_number as number, " + 
        "o.orderer_id, o.orderer_name, o.total_amounts, " +
        "o.receiver_name, o.state, o.order_date, " +
        "p.product_id, p.name as product_name " +
        "from purchase_order o inner join order_line ol " +
        "   on o.order_number = ol.order_number " +
        "   cross join product p " + 
        "where ol.line_idx = 0 and ol.product_id = p.product_id"
)
@Synchronize({"purchase_order", "order_line", "product"})
public class OrderSummary {
    @Id
    private String number;
    private String ordererId;
    private String ordererName;
    private int totalAmounts;
    private String receiverName;
    private String state;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "oderDate")
    private Date orderDate;
    private String productId;
    private String productName;

    ...
}
```


- 위의 어노테이션을 통해 테이블이 아닌 쿼리 결과를 @Entity로 매핑할 수 있습니다.
- 뷰를 수정할 수 없듯이 조회된 @Entity 역시 수정할 수 없습니다.
- `@Synchronize` 를 통해 변경사항이 발생하면 플러시를 합니다.
- `@Subselect`을 사용해도 일반 `@Entity`와 같기 때문에 JPQL등을 사용할 수 있는 것이 장점 입니다.