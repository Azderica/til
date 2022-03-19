---
sidebar_position: 8
---

# 8. 애그리거트 트랜잭션 관리

## 애그리거트와 트랜잭션

- 한 애그리거트를 두 사용자가 거의 동시에 변경할 때 트랜잭션이 필요합니다.
- 운영자는 기본 배송지 정보를 이용해서 배송 상태로 변경했는데 그 사이 고객은 배송지 정보를 변경했습니다. 즉, 애그리거트의 일관성이 깨집니다. 이런 문제가 발생하지 않도록 하려면 다음의 두 가지 중 하나를 해야 한다.
  - 운영자가 배송지 정보를 조회하고 상태를 변경하는 동안 고객이 애그리거트를 수정하지 못하게 막는다.
  - 운영자가 배송지 정보를 조회한 이후에 고객이 정보를 변경하면 운영자가 애그리거트를 다시 조회한 뒤 수정하도록 합니다.
- 이 두가지는 애그리거트 자체의 트랜잭션과 관련이 있습니다.
- 대표적인 트랜잭션 처리 방식에는 **선점(Perssimistic) 잠금**과 **비선점(Optimistic) 잠금**의 두 가지 방식이 있습니다.

<br/>

## 선점 잠금

- 선점 잠금(Pessimistic Lock)은 먼저 애그리거트를 구한 스레드가 애그리거트 사용이 끝날 때까지 다른 스레드가 해당 애그리거트를 수정하는 것을 막는 방식입니다.
- 한 스레드가 애그리거트를 구하고 수정하는 동안 다른 스레드가 수정할 수 없으므로 동시에 애그리거트를 수정할 때 발생하는 데이터 충돌 문제를 해소할 수 있습니다.
- 선점 잠금은 보통 DBMS가 제공하는 행 단위 잠금을 사용해서 구현합니다.

### 선점 잠금과 교착 상태

- 선점 잠금 기능을 사용할 때는 잠금 순서에 따한 교착 상태(deadlock)가 발생하지 않도록 주의해야 합니다.
- 선점 잠금에 따른 교착 상태는 상대적으로 사용자 수가 많을 때 발생할 가능성이 높고, 사용자 수가 많아지면 교착 상태에 빠지는 스레드가 더 빠르게 증가합니다.
  - 더 많은 스레드가 교착 상태에 빠질수록 시스템은 점점 아무것도 할 수 없는 상황에 이르게 된다.

<br/>

## 비선점 잠금

- ex) 운영자가 배송지 정보를 조회하고 배송 상태로 변경하는사이에 고객이 배송지를 변경하면, 운영자는 고객이 변경하기 전의 배송지 정보를 이용해서 배송 준비를 하고 배송 상태로 변경하게 됩니다.
- 위의 문제는 선점 잠금 방식으로 해결할 수 없으므로, 비선점 잠금(Optimistic Lock)이 필요합니다.

```sql
UPDATE aggtable SET version = version + 1, colx = ?, coly = ?
WHERE aggid = ? and version = 현재버전
```

- 위 쿼리는 애그리거트 버전과 동일한 경우에만 데이터를 수정합니다.
- 즉, 다른 트랜잭션이 먼저 데이터를 수정해서 버전 값이 바뀌면 데이터 수정에 실패하게 됩니다.
- JPA에서는 버전을 이용한 비선점 잠금 기능을 지원합니다.

```java
@Entity
@Table(name = "purchase_order")
@Access(AccessType.FIELD)
public class Order {
  @EmbeddedId
  private OrderNo number;

  @Version
  private long version;
}
```

- 표현 영역의 코드는 이 익셉션의 발생 여부에 따라 트랜잭션 충돌이 일어났는지 확인할 수 있습니다.

```java
@Controller
public class OrderController {
  private ChangeShippingService service;

  @RequestMapping(...)
  public String changeShipping(Request req) {
    try {
      service.changeShipping(req);
      return "success";
    } catch(OptimisticLockingFailureException ex) {
      return "conflicts";
    }
  }
}
```

- 위처럼 버전이 동일한 경우에만 수정 가능을 수행하도록 함으로써 트랜잭션 충돌 문제를 해결할 수 있습니다.
- 표현 계층은 버전 충돌 익셉션이 발생하면 버전 충돌을 사용자에게 알려주고 사용자가 알맞은 후속 처리를 할 수 있도록 합니다.
- 버전 충돌 상황에 대한 구분이 명시적으로 필요없다면 응용 서비스에서 프레임워크 익셉션을 발생시키도록 구현해도 됩니다.

### 강제 버전 증가

- JPA는 루트 엔티티의 버전 값을 증가하지 않는 문제가 있어 이를 처리할 수 있도록 EntityManager#find() 메서드로 엔티티를 구할 때 강제로 버전 값을 증가시키는 잠금 모드를 지원합니다.
- `LockModeType.OPTIMISTIC_FORCE_INCREMENT` 을 사용하면 해당 엔티티의 상태가 변경되었는지 여부에 상관없이 트랜잭션 종료 시점에 버전 값 증가 처리를 합니다.
- 이를 통해 비선점 잠금 기능을 안전하게 적용할 수 있습니다.

<br/>

## 오프라인 선점 잠금

- Jira로 유명한 아틀라시안의 컨플루언스 위키는 사전에 충돌 여부를 알려주시만 수정을 막지는 않습니다.
- 단일 트랜잭션에서 동시 변경을 막는 선점 잠금 방식과 달리 오프라인 선점 잠금은 여러 트랜잭션에 걸쳐 동시 변경을 막습니다.

### 오프라인 선점 잠금을 위한 LockManager 인터페이스와 관련 클래스

- 오프라인 선점 잠금은 크게 잠금 선점 시도, 잠금 확인, 잠금 해제, 락 유효 시간 연장의 네가지 기능을 제공합니다.

```java
public interface LockManager {
  LockId tryLock(String type, String id) throws LockException;  // 잠금 선점 시도
  void checkLock(LockId lockId) throws LockException;   // 잠금 확인
  void releaseLock(LockId lockId) throws LockException;   // 잠금 해제
  void extendLockExpiration(LockId lockId, long inc) throws LockException;  // 락 유효 시간 연장
}
```

- 잠금이 유효한지 검사는 다음을 체크합니다.
  - 잠금의 유효 시간이 지났으면 이마 다른 사용자가 잠금을 선점합니다.
  - 잠금을 선점하지 않은 사용자가 기능을 실행했다면 기능 실행을 막아야합니다.

### DB를 이용한 LockManager 구현

- 코드 생략. (책 참고)
