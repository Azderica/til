---
sidebar_position: 2
---

# 2부 스프링 시큐리티: 아키텍처

## 10. SecurityContextHolder와 Authentication

[core-comp](https://docs.spring.io/spring-security/site/docs/5.1.5.RELEASE/reference/htmlsingle/#core-components)

SecurityContextHolder
- SecurityContext 제공, 기본적으로 ThreadLocal을 사용한다.

SecuuryContext
- Authentication 제공.

Authentication
- Principal과 GrantAuthority 제공.

Principal
- "누구"에 해당하는 정보.
- **UserDetailsService**에서 리턴한 그 객체.
- 객체는 UserDetails 타입.

GrantAuthority:
- "ROLE_USER", "ROLE_ADMIN"등 Principal이 가지고 있는 "권한"을 나타낸다. 
- 인증이후,인가및권한확인할때이정보를참조한다.

UserDetails
- 애플리케이션이 가지고 있는 유저 정보와 스프링 시큐리티가 사용하는 Authentication

UserDetailsService
- 유저 정보를 UserDetails 타입으로 가져오는 DAO (Data Access Object) 인터페이스.

객체 사이의 어댑터   
- 구현은 마음대로! (우리는 스프링 데이터 JPA를 사용했습니다.)

<br/>

## 11. AuthenticationManager와 Authentication

스프링 시큐리티에서 인증(Authentication)은 AuthenticationManager가 한다.

```java
Authentication authenticate(Authentication authentication) throws AuthenticationException;
```

- 인자로 받은 Authentication이 유효한 인증인지 확인하고 Authentication 객체를 리턴합니다.
- 인증을 확인하는 과정에서 비활성 계정, 잘못된 비번 , 잠긴 계정 등의 에러를 던질 수 있다.

인즈로 받은 Authentication
- 사용자가 입력한 인증에 필요한 정보(username, password)로 만든 객체. (폼 인증인 경우)
- Authentication
  - Principal: “keesun”
  - Credentials: “123”

유효한 인증인지 확인
- 사용자가 입력한 password가 UserDetailsService를 통해 읽어온 UserDetails 객체에 들어있는 password와 일치하는지 확인
- 해당 사용자 계정이 잠겨 있진 않은지, 비활성 계정은 아닌지 등 확인

Authentication 객체를 리턴 
- Authentication
  - Principal: UserDetailsService에서 리턴한 그 객체 (User)
  - Credentials:
  - GrantedAuthorities

<br/>

## 12. ThreadLocal

Java.lang 패키지에서 제공하는 쓰레드 범위 변수. 즉, 쓰레드 수준의 데이터 저장소.
- 같은 쓰레드 내에서만 공유.
- 따라서 같은 쓰레드라면 해당 데이터를 메소드 매개변수로 넘겨줄 필요 없음.
- SecurityContextHolder의 기본 전략.

```java
public class AccountContext {
  private static final ThreadLocal<Account> ACCOUNT_THREAD_LOCAL = new ThreadLocal<>();

  public static void setAccount(Account account) {
    ACCOUNT_THREAD_LOCAL.set(account);
  }

  public static Account getAccount() {
    return ACCOUNT_THREAD_LOCAL.get();
  }
}
```

