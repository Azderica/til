---
sidebar_position: 4
---

# 4. 리포지터리와 모델구현 (JPA 중심)

## JPA를 이용한 리포지터리 기능 구현

- 애그리거트를 어떤 저장소에 저장하느냐에 따라 리포지터리를 구현하는 방법이 다릅니다.
- 대표적인 예시로 도메인 모델과 리포지터리를 구현할 때 선호하는 기술은 JPA이며, 데이터 보관소로 RDBMS를 사용할 때 객체 기반의 도메인 모델과 관계형 데이터 모델 간의 매피ㅇ을 처리하는 기술로 ORM 만한 것이 없습니다.

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

### 별도 테이블에 저장하는 밸류 매핑

### 밸류 컬렉션을 @Entity로 매핑하기

### ID 참조와 조인 테이블을 이용한 단방향 M-N 매핑

<br/>

## 애그리거트 로딩 전략

<br />

## 애그리거트의 영속성 전파

<br/>

## 식별자 생성 기능
