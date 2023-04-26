---
sidebar_position: 4
---

# 4부. 스프링 시큐리티 그 밖에

[thymeleaf-extras-springsecurity](https://github.com/thymeleaf/thymeleaf-extras-springsecurity/blob/3.0-master/README.markdown)

## 42. 타임리프 스프링 시큐리티 확장팩 

의존성 추가

```xml
<dependency>
  <groupId>org.thymeleaf.extras</groupId> <artifactId>thymeleaf-extras-springsecurity5</artifactId>
</dependency>
```

Authentication과 Authorization참조
 
```html
<div th:if="${#authorization.expr('isAuthenticated()')}"> 
  <h2 th:text="${#authentication.name}"></h2>
  <a href="/logout" th:href="@{/logout}">Logout</a>
</div>
<div th:unless="${#authorization.expr('isAuthenticated()')}">
  <a href="/login" th:href="@{/login}">Login</a> 
</div>
```

<br/>

## 43. sec 네임스페이스 

Sec 네임스페이스 등록

```xml
xmlns:sec="http://www.thymeleaf.org/extras/spring-security"
```
 
Sec 네임스페이스 사용하기
```html
<div sec:authorize="isAuthenticated()">
  <h2 sec:authentication="name">Name</h2>
  <a href="/logout" th:href="@{/logout}">Logout</a>
</div>
<div sec:authorize="!isAuthenticated()">
  <a href="/login" th:href="@{/login}">Login</a> 
</div>
```

<br/>

## 44. 메소드 시큐리티 

- [jc-method](https://docs.spring.io/spring-security/site/docs/5.1.5.RELEASE/reference/htmlsingle/#jc-method)
- [spring-security-method-security](https://www.baeldung.com/spring-security-method-security)

`@EnableGlobalMethodSecurity`

```java
@EnableGlobalMethodSecurity(jsr250Enabled = true, prePostEnabled = true, securedEnabled = true)
```

`@Secured`와 `@RollAllowed`
- 메소드 호출 이전에 권한을 확인한다.
- 스프링 EL을 사용하지 못한다.

`@PreAuthorize`와 `@PostAuthorize`
- 메소드 호출 이전 @있다.

MethodSecurityConfig.java
     
```java 
@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true, jsr250Enabled = true)
public class MethodSecurityConfig extends GlobalMethodSecurityConfiguration {

  @Override
  protected AccessDecisionManager accessDecisionManager() {
    RoleHierarchyImpl roleHierarchy = new RoleHierarchyImpl(); roleHierarchy.setHierarchy("ROLE_ADMIN > ROLE_USER"); 
    AffirmativeBased accessDecisionManager = (AffirmativeBased)
    super.accessDecisionManager(); accessDecisionManager.getDecisionVoters().add(new
    RoleHierarchyVoter(roleHierarchy)); return accessDecisionManager;
  } 
}
```

<br/>

## 45. @AuthenticationPrincipal

[mvc-authentication-principal](https://docs.spring.io/spring-security/site/docs/5.1.5.RELEASE/reference/htmlsingle/#mvc-authentication-principal)

웹 MVC 핸들러 아규먼트로 Principal 객체를 받을 수 있습니다.

커스텀 유저 클래스 구현하기

```java
public class UserAccount extends User {
  private Account account;

  public UserAccount(Account account) { 
    super(account.getUsername(), account.getPassword(), List.of(new
SimpleGrantedAuthority("ROLE_" + account.getRole()))); 
    this.account = account;
  }

  public Account getAccount() { 
    return account;
  } 
}
```

AccountService 수정

```java
@Override
public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
  Account account = accountRepository.findByUsername(username); 
  if (account == null) {
    throw new UsernameNotFoundException(username); 
  }
  
  return new UserAccount(account);
}
```

`@AuthenticationPrincipal` 애노테이션 적용 예제 1

```java
@AuthenticationPrincipal UserAccount userAccount
```

- UserDetailsService 구현체에서 리턴하는 객체를 매개변수로 받을 수 있다.
- 그 안에 들어있는 Account객체를 getter를 통해 참조할 수 있다. 

`@AuthenticationPrincipal` 애노테이션 적용 예제 2
   
```java
@AuthenticationPrincipal(expression = "#this == 'anonymousUser' ? null : account") Account account
```
 
- 익명 Authentication인 경우 (“anonymousUser”)에는 null 아닌 경우에는 account 필드를 사용한다.
- Account를 바로 참조할 수 있다. 

`@AuthenticationPrincipal` 애노테이션 적용 예제 3

```java
@CurrentUser Account account
```

- @AP를 메타 애노테이션으로 사용하여 커스텀 애노테이션을 만들어 쓸 수 있다. 
 
`@CurrentUser`

```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.PARAMETER)
@AuthenticationPrincipal(expression = "#this == 'anonymousUser' ? null : account") public @interface CurrentUser { }
```

<br/>

## 46. 스프링 데이터 연동 

[html5-data](https://docs.spring.io/spring-security/site/docs/current/reference/html5/#data)

`@Query` 애노테이션에서 SpEL로 principal 참조할 수 있는 기능 제공. 스프링 

시큐리티 데이터 의존성 추가

```xml
<dependency> 
  <groupId>org.springframework.security</groupId> <artifactId>spring-security-data</artifactId> 
  <version>${spring-security.version}</version>
</dependency>
```

`@Query`에서 principal 사용하기

```java
@Query("select b from Book b where b.author.id = ?#{principal.account.id}") List<Book> findCurrentUserBooks();
```

타임리프 리스트 참조
 
```html
<tr th:each="book : ${books}">
  <td><span th:text="${book.title}"> Title </span></td>
</tr>
```