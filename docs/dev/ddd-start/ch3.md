---
sidebar_position: 3
---

# 3. 애그리거트

## 애그리거트

- 상위 수준의 모델을 정리하여 복잡한 도메인 모델의 관계를 이해하는 데 도움이 됩니다.

![상위 수준의 모델을 정리하여 복잡한 도메인 모델의 관계를 이해할 수 있습니다.](https://user-images.githubusercontent.com/42582516/150660303-25e073f8-f103-4046-bc4d-c193b34251e9.png)

- 이를 개별 객체 수준으로 보면 다음과 같이 정리할 수 있습니다.

![개별 객체 수준에서 모델은 상위 수준에서 관계 파악이 어렵습니다.](https://user-images.githubusercontent.com/42582516/150660427-866da8dd-e986-4fd0-b39b-68c179d72e10.png)

- 개별 객체 수준에서 모델은 상위 수준에서 관계 파악이 어렵습니다.
- 주요 도메인 개념 간의 관계를 파악하기 어렵다는 것은 곧 코드를 변경하고 확장하는 것이 어려워짐을 의미합니다.
- 복잡한 도메인을 이해하고 관리하기 쉬운 단위로 만들려면 상위 수준에서 모델을 조망할 수 있는 방법이 필요하며, 그 방법이 바로 애그리거트입니다.

![애그리거트는 복잡한 모델을 관리하는 기준을 제공합니다.](https://user-images.githubusercontent.com/42582516/150660566-f6ed55db-7b57-408e-b624-ddf3c87d9552.png)

- 애그리거트는 모델을 이해하는 데 도움을 줄 뿐만 아니라 일관성을 관리하는 기준이 됩니다.
  - 복잡도가 낮아지므로 도메인 기능을 확장하고 변경하는 데 필요한 노력도 줄어듭니다.
- 애그리거트는 관련된 모델을 하나로 모든 것이기 때문에 한 애그리거트에 속한 객체는 유사하거나 동일한 라이프사이클을 갖습니다.
- 경계를 설정할 때 기본이 되는 것은 도메인 규칙과 요구사항입니다.
- 다만, 'A가 B를 갖는다'로 설계할 수 있는 요구사항이 있다면 A와 B를 한 애그리거트로 묶어서 생각하기 쉬우나 이는 아닙니다.
  - 대표적인 예시로, 상품과 리뷰입니다.
  - 상품의 변경 주체는 상품 담당자고 리뷰를 생산하고 변경하는 주체는 고객이며, 또한 둘은 서로에게 영향을 주지 않습니다.
- 처음 도메인 모델을 만들기 시작할 때는 큰 애그리거트로 보이는 것들이 많지만 도메인에 대한 경험과 규칙을 통해 실제 애그리거트의 크기는 줄어들게 됩니다.
  - 대부분 애그리거트는 한 개의 엔티티 객체만 가지며, 일부만 두 개 이상의 엔티티로 구성됩니다.

<br/>

## 애그리거트 루트

- 주문 애그리거트는 다음을 포함합니다.
  - 총 금액인 totalAmounts를 갖고 있는 Order 엔티티
  - 개별 구매 상품으 개수인 quantity와 금액인 price를 갖고 있는 OrderLine 밸류
- 애그리거트는 여러 객체로 구성되기 때문에 한 객체만 상태가 정상이어서는 안됩니다.
- 애그리거트에 속한 모든 객체가 일관된 상태를 유지하려면 애그리거크 전체를 관리할 주체가 필요하며, 이 책임을 지는 것이 바로 루트 엔티티입니다.

### 도메인 규칙과 일관성

- 애그리거트 루트의 핵심 역할은 애그리거트의 일관성이 깨지지 않도록 하는 것입니다.
- 애그리거트 루트가 제공하는 메서드는 도메인 규칙에 따라 애그리거트에 속한 객체의 일관성이 깨지지 않도록 구현해야 합니다.

```java
public class Order {
  public void changeShippingInfo(ShippingInfo newShippingInfo) {
    verifyNotYetShipped();
    setShippingInfo(newShippingInfo);
  }

  private void verifyNotYetShipped() {
    // ...
  }
}
```

- 애그리거트 루트가 아닌 다른 객체가 애그리거트에 속한 객체를 직접 변경하면 안됩니다.
  - 이는 논리적인 데이터 일관성이 깨지게 됩니다.
- 불필요한 중복을 피하고 애그리거트 루트를 통해서만 도메인 로직을 구현하게 만들려면 도메인 모델에 대해 다음의 두 가지를 습관적으로 적용해야 합니다.
  - 단순히 필드를 변경하는 set 메서드를 공개(public) 범위로 만들지 않습니다.
  - 밸류 타입은 불변으로 구현합니다.
- 도메인 모델의 엔티티나 밸류에 공개 set 만 넣지 않아도 일관성이 깨질 가능성이 줄어듭니다.
- 공개 set 메서드를 만들지 않는 것의 연장으로 밸류는 불변 타입으로 구현합니다.
- 애그리거트 외부에서 내부 상태를 함부로 바꾸지 못하므로 애그리거트의 일관성이 깨질 가능성이 줄어듭니다.
- 밸류 타입의 내부 상태를 변경하려면 애그리거트 루트를 통해서만 가능합니다.

### 애그리거트 루트의 기능 구현

- 애그리거트 루트가 구성요소의 상태만 참조하는 것은 아니며, 기능 실행을 위임하기도 합니다.
- 팀 표준이나 구현의 기술의 제약이 존재한다면 패키니나 protected 범위로 한정해서 외부에서 실행할 수 없도록 제한하는 방법이 있습니다.

### 트랜잭션 범위

- 트랜잭션 범위는 작을수록 좋습니다.
- 동일하게 한 트랜잭션에서는 한 개의 애그리거트만 수정해야 합니다.
  - 두 개 이상의 애그리거트를 수정하면 트랜잭션 충돌이 발생할 가능성이 더 높아집니다.
- 한 트랜잭션에서 한 애그리거트만 수정한다는 것은 애그리거트에서 다른 애그리거트를 변경하지 않는다는 것을 의미합니다.
- 부득이하게 한 트랜잭션으로 두 개 이상의 애그리거트를 수정해야 한다면 애그리거트에서 다른 애그리거트를 직접 수정하지 말고 응용 서비스에서 두 애그리거트를 수정하도록 구현해야 합니다.
- 한 트랜잭션에서 한 개의 애그리거트를 변경하는 것을 권장하지만 아래의 경우에는 두 개 이상의 애그리거트를 변경하는 것을 고려할 수 있습니다.
  - 팀 표준 : 팀이나 조직의 표준에 따라 사용자 유스케이스와 관련된 응용 서비스의 기능을 한 트랜잭션으로 실행해야 하는 경우가 있습니다.
  - 기술 제약 : 이벤트 방식을 도입할 수 없는 경우.
  - UI 구현의 편리 : 운영자의 편리함을 위해서

<br/>

## 리포지터리와 애그리거트

- 애그리거트는 개념상 완전한 한 개의 도메인 모델을 표현하므로 객체의 영속성을 처리하는 리포지터리는 애그리거트 단위로 존재합니다.
- 새로운 애그리거트를 만들면 저장소에 애그리거트를 영속화하고 애그리거트를 사용하려면 저장소에서 애그리거트를 읽어야하므로 적어도 다음의 두 메서드를 제공해야합니다.
  - save
  - findById
  - 위의 두 메서드 외에 필요에 따라 다양한 조건으로 애그리거트를 검색하는 메서드나 애그리거트를 삭제하는 메서드를 추가할 수 있습니다.
- 어떤 기술을 이용해서 리포지터리를 구현하느냐에 따라 애그리거트의 구현도 영향을 받습니다.
- 애그리거트는 개념적으로 하나이므로 리포지너리는 애그리거트 전체를 저장소에 영속화해야 합니다.

```java
// 애그리거트 전체를 영속화
orderRepository.save(order);

// 리포지터리는 완전한 order를 제공합니다.
Order order = orderRepository.findById(orderId);
```

<br/>

## ID를 이용한 애그리거트 참조

- 한 객체가 다른 객체를 참조하는 것처럼 애그리거트로 다른 애그리거트를 참조합니다.
- 애그리거트 간의 참조는 필드를 통해 쉽게 구현할 수 있습니다.
- JPA를 사용하면 @ManyToOne, @OneToOne 과 같은 애노테이션을 이용해서 연관된 객체를 로딩하는 기능을 제공하고 있으므로 필드를 이용해서 다른 애그리거트를 쉽게 참조할 수 있습니다.
- 필드를 이용한 애그리거트 참조는 다음의 문제를 야기할 수 있습니다.
  - 편한 탐색 오용
  - 성능에 대한 고민
  - 확장 어려움
- 애그리거트를 직접 참조할 때 발생할 수 있는 가장 큰 문제는 편리함을 오용할 수 있다는 것입니다.

```java
public class Order {
  private Orderer orderer;

  public void changeShippingInfo(ShippingInfo newShippingInfo, boolean useNewShippingAddrAsMemberAddr) {
    ...
    if(useNewShippingAddrAsMemberAddr) {
      // 다른 애그리거트에 접근할 수 있으면, 다른 애그리거트의 상태를 변경하는 유혹에 빠지기 쉽습니다.
      orderer.getCustomer().changeAddress(newShippingInfo.getAddress());
    }
  }

  ...
}
```

- 두 번째 문제는 애그리거트를 직접 참조하면 성능과 관련된 여러 가지 고민을 해야합니다.
- 세 번째 문제는 확장입니다.

위의 세 가지 문제를 완화할 때 사용할 수 있는 것이 ID를 이용해서 다른 애그리거트를 참조하는 것입니다.

- ID를 이용한 참조는 DB 테이블에서의 외래키를 사용해서 참조하는 것과 비슷하게 다른 애그리거트를 참조할 때 ID 참조를 사용한다는 점입니다.
- ID 참조를 사용하려면 모든 객체가 참조로 연결되지 않고 한 애그리거트에 속한 객체들만 참조로 연결됩니다.
- 구현 복잡도도 낮아집니다.

```java
public class ChangeOrderService {
  @Transactional
  public void changeShippingInfo(OrderId id, ShippingInfo newShippingInfo, boolean useNewShippingAddrAsMemberAddr) {
    Order order = orderRepository.findById(id);
    if(order == null) throw new OrderNotFoundException();
    order.changeShippingInfo(newShippingInfo);
    if(useNewShippingAddrAsMemberAddr) {
      Customer customer = customerRepository.findById(order.getOrderer().getCustomerId());
      customer.changeAddress(newShippingInfo.getAddress());
    }
  }
}
```

- ID를 이용한 참조 방식을 사용하면 복잠도를 낮추는 것과 함께한 애그리거트에서 다른 애그리거트를 수정하는 문제를 원천적으로 방지할 수 있습니다.
- 애그리거트별로 닫른 구현 기술을 사용하는 것도 가능합니다.

### ID를 이용한 참조와 조회 성능

- 다른 애그리거트를 ID로 참조하면 참조하는 여러 애그리거트를 읽어야 할 때 조회 속도가 문제가 될 수 있습니다.
- 이때는 전용 조회 쿼리를 사용하는 것이 방법 중 하나입니다.
- 애그리거트마다 서로 다른 저장소를 사용하는 경우에는 하나의 쿼리로 관련 애그리거트를 조회할 수 없습니다. 이때는 조회 성능을 위해 캐시를 적용하거나 조회 전용 저장소를 따로 구성합니다.

<br/>

## 애그리거트 간 집합 연관

- 애그리거트 간 1:N 과 M:N 연관도 있습니다.
- 1:N 연관을 이용한 구현 방식은 다음과 같습니다.

```java
public class Category {
  private Set<Product> products;  // 다른 애그리거트에 대한 1:N 연관

  public List<Product> getProducts(int page, int size) {
    List<Product> sortedProducts = sortById(products);
    return sortedProducts.subList((page - 1) * size, page * size);
  }
}
```

- RDBMS를 이용해서 M:N 연관을 구현하려면 조인 테이블을 사용합니다.

```java
@Entity
@Table(name = "product")
public class Product {
  @EmbeddedId
  private ProductId id;

  @ElementCollection
  @CollectionTable(name = "product_category", joinColumns = @JoinColumn(name = "product_id"))
  private Set<CategoryId> categoryIds;

  ...
}
```

```java
@Repository
public class JpaProductRepository implements ProductRepository {
  @PersistenceContext
  private EntityManager entityManager;

  @Override
  public List<Product> findByCategoryId(CategoryId categoryId, int page, int size) {
    TypedQuery<Product> query = entityManager.createQuery(
      "select p form Product p " +
      "where : cateId member of p.categoryIds order by p.id.id desc",
      Product.class);
    query.setParameter("catId", categoryId);
    query.setFirstResult((page - 1) * size);
    query.setMaxResults(size);
    return query.getResultList();
  }
  ...
}
```

<br/>

## 애그리거트를 팩토리로 사용하기

- 온라인 쇼핑몰에 특정 상품이 차단된 상태인 경우를 구현한 서비스는 다음과 같습니다.

```java
public class RegisterProductService {
  public ProductId registerNewProduct(NewProductRequest req) {
    Store account = accountRepository.findStoreById(req.getStoredId());
    checkNull(account);
    if(account.isBlocked()) { throw new StoreBlockedException(); }
    ...
  }
}
```

- 이코드는 나빠보이지 않을 수도 있지만 도메인 로직 처리가 응용 서비스에 노출된 경우입니다.
- 이를 좀 더 잘표현하는 것은 Store 애그리거트입니다.

```java
public class Store extends Member {
  public Product createProduct(ProductId newProductId, ...생략) {
    if(account.isBlocked()) { throw new StoreBlockedException(); }
    return new Product(newProductId, getId(), ... 생략);
  }
}
```

```java
public class RegisterProductService {
  public ProductId registerNewProduct(NewProductRequest req) {
    Store account = accountRepository.findStoreById(req.getStoredId());
    checkNull(account);
    ...
  }
}
```

- 애그리거트가 갖고 있는 데이터를 이용해서 다른 애그리거트를 생성해야 한다면 애그리거트에 팩토리 메서드를 구현하는 것을 고려하는 것도 좋은 방법입니다.
