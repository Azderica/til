---
sidebar_position: 4
---

# 4. 리포지터리와 모델구현 (JPA 중심)

## JPA를 이용한 리포지터리 기능 구현

- 애그리거트를 어떤 저장소에 저장하느냐에 따라 리포지터리를 구현하는 방법이 다릅니다.
- 대표적인 예시로 도메인 모델과 리포지터리를 구현할 때 선호하는 기술은 JPA이며, 데이터 보관소로 RDBMS를 사용할 때 객체 기반의 도메인 모델과 관계형 데이터 모델 간의 매핑을 처리하는 기술로 ORM 만한 것이 없습니다.

### 모듈 위치

- 인터페이스는 애그리거트와 같이 도메인 영역에 속하고, 리포지터리를 구현한 클래스는 인프라스트럭처 영역에 속합니다.

![DIP에 따른 리포지터리 구현](https://user-images.githubusercontent.com/42582516/152886207-cad43503-ffec-43be-a2b8-faf4a834b752.png)

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

애그리거트와 JPA 매핑을 위한 기본 규칙은 다음과 같습니다.

- 애그리거트 루트는 엔티티이므로 @Entity로 매핑 설정합니다.
- 한 테이블에 엔티티와 밸류 데이터가 같이 있다면,
  - 밸류는 @Embeddable로 매핑 설정합니다.
  - 밸류 타입 프로퍼티는 @Embedded로 매핑 설정합니다.

![엔티티와 밸류가 한 테이블로 매핑](https://user-images.githubusercontent.com/42582516/152887046-8700a2d6-1b65-4cdb-83b6-5959ead5ffcd.png)

- 주문 애그리거트의 경우, 루트 엔티티는 Order이고 이에 속한 Orderer와 ShippingInfo는 밸류입니다. 이를 표현하면 다음과 같습니다.

```java
@Entity
@Table(name = "purchase_order")
public class Order {
  ...
}
```

```java
@Embeddable
public class Orderer {
  @Embedded
  @AttributeOverrides(
    @AttributeOverride(name = "id", column = @Column(name = "orderer_id"))
  )
  private MemberId memberId;

  @Column(name = "orderer_name")
  private String name;
}
```

```java
@Embeddable
public class MemberId implements Serializable {
  @Column(name = "member_id")
  private String id;
  ...
}
```

- JPA 2부터 @Embeddable은 중첩을 허용하므로 밸류인 Orderer가 또 다른 밸류인 MemberId를 포함할 수 도 있습니다.
- 이때는 @AttributeOverride 애노테이션을 사용할 수 있습니다.

```java
@Embeddable
public class ShippingInfo {
  @Embedded
  @AttributeOverrides ({
    @AttributeOverride(name = "zipCode", column = @Column(name = "shipping_zipcode"));
    @AttributeOverride(name = "address1", column = ....)
    ...
  })
  private Address address;

  @Column(name = "shipping_message")
  private String message;

  @Embedded
  private Receiver receiver;
}
```

```java
@Entity
public class Order {
  ...
  @Embedded
  private Orderer orderer;

  @Embedded
  private ShippingInfo shippingInfo;

  ...
}
```

### 기본 생성자

- Receiver가 불변 타입이면 생성 시점에 필요한 값을 모두 전달받으므로 값을 변경할 set 메서드가 필요없습니다.
- 그러나, JPA의 @Entity와 @Embeddable로 클래스를 매핑하려면 기본 생성자를 제공해야 합니다. (기술적 제약)

하이버네이트는 클래스를 상속한 프록시 객체를 이용해서 지연 로딩을 구현합니다 이 경우 프록시 클래스에서 상위 클래스의 기본 생성자를 호출할 수 있어야 하므로 지연 로딩 대상이 되는 @Entity와 @Embeddable의 기본 생성자는 private이 아닌 protected로 지정해야 합니다.

### 필드 접근 방식 사용

- JPA는 필드와 메서드의 두 가지 방식으로 매핑을 처리할 수 있습니다.

```java
@Entity
@Access(AccessType.PROPERTY)
public class Order {
  @Column(name = "state")
  @Enumerated(EnumType.STRING)
  public OrderState getState() {
    return state;
  }

  public void setState(OrderState state) {
    this.state = state;
  }

  ...
}
```

- 엔티티가 객체로서 제 역할을 하려면 외부에 set 메서드 대신 의도가 잘 드러나는 기능을 제공해야 합니다.
- 따라서 다음과 같이 프로퍼티가 아닌 필드 방식을 선택하여 get/set 메서드를 구현하지 말아야합니다.

```java
@Entity
@Access(AccessType.FIELD)
public class Order {
  @EmbeddedId
  private OrderNo number;

  @Column(name = "state")
  @Enumerated(EnumType.STRING)
  private OrderState state;

  ...
}
```

### AttributeConverter를 이용한 밸류 매핑 처리

- int, long, String, LocalDate와 같은 타입은 DB 테이블의 한 개 칼럼과 매핑됩니다.
- AttributeConverter는 JPA 2.1에 추가된 인터페이스로 다음과 같이 밸류 타입과 칼럼 데이터 간의 변환 처리를 위한 기능을 정의하고 있습니다.

```java
package javax.persistence;

public interface AttributeConverter<X,Y> {
  public Y convertToDatabaseColumn (X attribute);
  public X convertToEntityAttribute (Y dbData);
}
```

```java
import ...

@Converter(autoApply = true)
public class MoneyConverter implements AttributeConverter<Money, Integer> {

  @Override
  public integer convertToDatabaseColumn(Money money) {
    if(money == null) return null;
    else return money.getValue();
  }

  @Override
  public Money convertToEntityAttribute(Integer value) {
    if(value == null) return null;
    else return new Money(value);
  }
}
```

- `@Conveter`의 autoApply 속성이 false인 경우, 프로퍼티 값을 변환할 때 사용할 컨버터를 직접 지정할 수 있습니다.

```java
public class Order {
  @Column(name = "total_amounts")
  @Convert(converter = MoneyConverter.class)
  private Money totalAmounts;

  ...
}
```

### 밸류 컬렉션: 별도 테이블 매핑

- Order 엔티티는 한 개 이상의 OrderLine을 가질 수 있으면 아래처럼 구성할 수 있습니다.

```java
public Order {

  private List<OrderLine> orderLines;
}
```

- 밸류 컬렉션을 별도 테이블로 매핑할 때는 `@ElementCollection`과 `@CollectionTable` 을 함께 사용합니다.

```java
import ...

@Entity
@Table(name = "purchase_order")
public class Order {
  ...
  @ElementCollection
  @CollectionTable(name = "order_line", joinColumns = @JoinColumn(name = "order_number"))
  @OrderColumn(name = "line_idx")
  private List<OrderLine> orderLines;

  ...
}

@Embeddable
public class OrderLine {
  @Embedded
  private ProductId productId;

  @Column(name = "price")
  private Money price;

  @Column(name = "quantity")
  private int quantity;

  @Column(name = "amounts")
  private Money amounts;

  ...
}
```

- `@CollectionTable`은 밸류를 저장할 테이블을 지정할 때 사용합니다.

### 뺄류 컬렉션: 한 개 칼럼 매핑

- 밸류 컬렉션을 별도 테이블이 아닌 한 개 칼럼에 저장해야 할 때가 있습니다.
- AttributeConverter를 사용하면 배률 컬렉션을 한 개 칼럼에 쉽게 매핑할 수 있습니다.

### 밸류를 이용한 아이디 매핑

- 식별자는 최종적으로 문자열이나 숫자와 같은 기본 타입이기 때문에 String이나 Long 타입을 이용해서 식별자를 매칭합니다.

```java
public class Article {
  @Id
  private Long id;
  ...
}
```

- 밸류 타입을 식별자로 매핑하면 `@Id` 대신 `@EmbeddedId` 애노테이션을 사용합니다.

```java
@Entity
@Table(name = "purchase_order")
public class Order {
  @EmbeddedId
  private OrderNo number;
  ...
}

@Embeddable
public class OrderNo implements Serializable {
  @Column(name="order_number")
  private String number;
  ...
}
```

- 밸류 타입으로 식별자를 구현할 때 얻을 수 있는 장점은 식별자에 기능을 추가할 수 있습니다.

### 별도 테이블에 저장하는 밸류 매핑

- 애그리거트에서 루트 엔티티를 뺀 나머지 구성요소는 대부분 밸류입니다.
- 밸류가 아니라 엔티티가 확실하다면 다른 애그리거트는 아닌지 확인해야 합니다.
- 애그리거트에 속한 객체가 밸류인지 엔티티인지 구분하는 방법은 고유 식별자를 갖는지 여부를 확인하는 것 입니다.

```java
import ...

@Entity
@Table(name = "article")
@SecondaryTable(
  name = "article_content",
  pkJoinColumns = @PrimaryKeyJoinColumn(name = "id")
)
public class Article {
  @Id
  private Long id;
  private String title;
  ...
  @AttributeOverrides({
    @AttributeOverride(name = "content", column = @Column(table = "article_content")),
    @AttributeOverride(name = "contentType", column = @Column(table = "article_content"))
  })
  private ArticleContent content;
}
```

- `@SecondaryTable` 을 통해 테이블을 조인해서 조회할 수 있습니다.

```java
// @SecondaryTable로 매핑된 article_content 테이블을 조인
Article article = entityManager.find(Article.class, 1L);
```

- 이 문제를 해소하고자 ArticleContent를 엔티티로 매핑하고 Article에서 ArticleContent로의 로딩을 지연 로딩 방식으로 설정할 수도 있습니다.

### 밸류 컬렉션을 @Entity로 매핑하기

- 개념적으로 밸류이나 구현 기술의 한계나 팀 표준 때문에 @Entity를 사용할 경우가 있습니다.
- JPA는 @Embeddable 타입의 클래스 상속 매핑을 지원하지 않습니다.
- 코드 유지보수와 성능의 두 가지 측면을 고려해서 구현 방식을 선택해야 합니다.

### ID 참조와 조인 테이블을 이용한 단방향 M-N 매핑

- 애그리거트 간 집합 연관은 성능상의 이유로 피해야 하나, 요구사항을 구현하는데 유리하다면 ID 참조를 이용한 단방향 집합 연관 적용이 가능합니다.

```java
@Entity
@Table(name = "product")
public class Product {
  @EmbeddedId
  private ProductId id;

  @ElementCollection
  @CollectionTable(name = "product_category" joinColumns = @JoinColumn(name = "product_id"))
  private Set<CategoryId> categoryIds;
}
```

- 위 코드는 Product에서 Category로의 단방향 M:N 연관을 ID 참조 방식으로 구현한 것입니다.
- 애그리거트를 직접 참조하는 방식을 사용하면 영속성 전파나 로딩 전략을 고민해야 하지만 ID 탐조 방식은 이를 고민할 필요가 없습니다.

<br/>

## 애그리거트 로딩 전략

- JPA 매핑을 설정할 때 기억해야 할 점은 애그리거트에 속한 객체가 모두 모여야 완전한 하나가 된다는 것입니다.

```java
Product product = productRepository.findById(id);
```

- 조회 시점에서 애그리거트를 완전한 상태가 되도록 하려면 애그리거트 루트에서 연관 매핑의 조회 방식을 즉시 로딩(FetchType.EAGER)으로 설정하면 됩니다.

```java
// @Entity 컬렉션에 대한 즉시 로딩 설정
@OneToMany(cascade = {CascadeType.PERSIST, CascadeType.REMOVE}, orphanRemoval = true, fetch = FetchType.EAGER)
@JoinColumn(name = "product_id")
@OrderColumn(name = "list_idx")
private List<Image> images = new ArrayList<>();

// @Embeddable 컬렉션에 대한 즉시 로딩 설정
@ElementCollection(fetch = FetchType.EAGER)
@CollectionTable(name = "order_line", joinColumns = @JoinColumn(name = "order_number"))
@OrderColumn(name = "line_idx")
private List<OrderLine> orderLines;
```

- 즉시 로딩 방식으로 설정하면 애그리거트 루트를 로딩하는 시점에 애그리거트에 속한 모든 객체를 함께 로딩할 수 있는 장점이 있습니다.
- 그러나 컬렉션에 대한 로딩 전략을 EAGER로 설정하면 문제가 될 수 있습니다. (중복 등의 이슈)
- 애그리거트는 개념적으로 하나여야 합니다. 하지만 루트 엔티티를 로딩하는 시점에 애그리거트에 속한 객체를 모두 로딩해야 하는 것은 아닙니다.
- 애그리거트가 완전해야하는 이유는 크게 두가지 입니다.
  - 상태를 변경하는 기능을 실행할 때 애그리거트 상태가 완전해야 함
  - 표현 영역에서 애그리거트의 상태 정보를 보여줄 때 필요합니다.
- 상태 변화는 필요한 구성요소만 로딩해도 문제가 되지 않습니다.

```java
@Transactional
public void removeOptions(ProductId id, int optIdxToBeDeleted) {
  Product product = productRepository.findById(id);
  product.removeOption(optIdxToBeDeleted);
}
```

```java
@Entity
public class Product {
  @ElementCollection(fetch = FetchType.LAZY)
  @CollectionTable(name = "production_option", joinColumns = @JoinColumn(name = "product_id"))
  @OrderColumn(name = "list_idx")
  private List<Option> options = new ArrayList<>();

  public void removeOption(int optIdx) {
    this.options.remove(optIdx);
  }
}
```

- 일반적인 애플리케이션은 상태 변경보다는 조회 기능 실행 빈도가 높으므로, 추가 쿼리로 인한 실행 속도 저하는 문제가 되지 않습니다.
- 애그리거트 내의 모든 연관을 즉시 로딩으로 설정할 필요는 없습니다.
- 따라서, **애그리거트에 맞게 즉시 로딩과 지연 로딩을 선택해야 합니다.**

<br />

## 애그리거트의 영속성 전파

애그리거트가 완전한 상태여야 한다는 것은 애그리거트 루트를 조회할 때뿐만 아니라 저장하고 삭제할 때도 하나로 처리해야 함을 의미합니다.

- 저장 메서드는 애그리거트 루트만 저장하면 안 되고 애그리거트에 속한 모든 객체를 저장해야 합니다.
- 삭제 메서드는 애그리거트 루트뿐만 아니라 애그리거트에 속한 모든 객체를 삭제해야 합니다.

```java
@OneToMany(cascade = {CascadeType.PERSIST, CascadeType.REMOVE}, orphanRemoval = true)
@JoinColumn(name = "product_id")
@OrderColumn(name = "list_idx")
private List<Image> images = new ArrayList<>();
```

<br/>

## 식별자 생성 기능

식별자는 크게 세 가지 방식 중 하나로 생성합니다.

- 사용자가 직접 생성
- 도메인 로직으로 생성
- DB를 이용한 일련번호 사용

```

```
