---
sidebar_position: 3
---

# 3부 웹 애플리케이션 시큐리티

## 21. 스프링 시큐리티 ignoring() 1부

WebSecurity의 ignoring()을 사용해서 시큐리티 필터 적용을 제외할 요청을 설정할 수 있습니다.

```java
@Override
public void configure(WebSecurity web) throws Exception {
  web.ignoring().requestMatchers(PathRequest.toStaticResources().atCommonLocations()); 
}
```

- 스프링 부트가 제공하는 PathRequest를 사용해서 정적 자원 요청을 스프링 시큐리티 필터를 적용하지 않도록 설정합니다.

<br/>

## 22. 스프링 시큐리티 ignoring() 2부 

- `http.authorizeRequests()`
- `.requestMatchers(PathRequest.toStaticResources().atCommonLocations()).permitAll()`

이런 설정으로도 같은 결과를 볼 수는 있지만 스프링 시큐리티 필터가 적용된다는 차이가 있습니다.
- 동적 리소스는 `http.authorizeRequests()`에서 처리하는 것을 권장합니다.
- 정적 리소스는 `WebSecurity.ignore()`를 권장하며 예외적인 정적 자원 (인증이 필요한 정적자원이 있는 경우)는 `http.authorizeRequests()`를 사용할 수 있습니다.

<br/>

## 23. Async 웹 MVC를 지원하는 필터: WebAsyncManagerIntegrationFilter

스프링 MVC의 Async 기능(핸들러에서 Callable을 리턴할 수 있는 기능)을 사용할 때에도 SecurityContext를 공유하도록 도와주는 필터입니다.

- PreProcess: SecurityContext를 설정한다.
- Callable: 비록 다른 쓰레드지만 그 안에서는 동일한 SecurityContext를 참조할 수 있다.
- PostProcess: SecurityContext를 정리(clean up)한다.

<br/>

## 24. 스프링 시큐리티와 @Async

`@Async`를 사용한 서비스를 호출하는 경우

- 쓰레드가 다르기 때문에 SecurityContext를 공유받지 못한다.

```java
SecurityContextHolder.setStrategyName(SecurityContextHolder.MODE_INHERITABLETHRE ADLOCAL);
```

- SecurityContext를 자식 쓰레드에도 공유하는 전략.
- `@Async`를 처리하는 쓰레드에서도 SecurityContext를 공유받을 수 있다.

참고
- [InheritableThreadLocal](https://docs.oracle.com/javase/7/docs/api/java/lang/InheritableThreadLocal.html)

<br/>

## 25. SecurityContext 영속화 필터: SecurityContextPersistenceFilter

SecurityContextRepository를 사용해서 기존의 SecurityContext를 읽어오거나 초기화 합니다.
- 기본으로 사용하는 전략은 HTTP Session을 사용합니.
- Spring-Session과 연동하여 세션 클러스터를 구현할 수 있습니다.

<br/>

## 26. 시큐리티 관련 헤더 추가하는 필터: HeaderWriterFilter 

응답 헤더에 시큐리티 관련 헤더를 추가해주는 필터

- XContentTypeOptionsHeaderWriter : 마임 타입 스니핑 방어.
- XXssProtectionHeaderWriter : 브라우저에 내장된 XSS 필터 적용
- CacheControlHeadersWriter : 캐시 히스토리 취약점 방어
- HstsHeaderWriter : HTTPS로만 소통하도록 강제.
- XFrameOptionsHeaderWriter: clickjacking 방어.

``` 
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
Content-Language: en-US
Content-Type: text/html;charset=UTF-8 
Date: Sun, 04 Aug 2019 16:25:10 GMT
Transfer-Encoding: chunked
Expires: 0
Pragma: no-cache
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

참고
- [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-O)
- [Cache-Control](https://www.owasp.org/index.php/Testing_for_Browser_cache_weakness_(OTG-AUTHN-006))
- [X-XSS-Protection - 1](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)
- [X-XSS-Protection - 2](https://github.com/naver/lucy-xss-filter)
- [HSTS](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
- [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
- [웹 보안, 웹 취약점을 간단한 설정으로 막자](https://cyberx.tistory.com/171)

<br/>

27. CSRF 어택 방지 필터: CsrfFilter

CSRF
- 원치않는 공격

CSRF 어택 방지 필터
- 인증된 유저의 계정을 사용해 악의적인 변경 요청을 만들어 보내는 기법.
- [CSRF](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)) 
- [CSRF](https://namu.wiki/w/CSRF)
- CORS를사용할때특히주의해야함.
  - 타 도메인에서 보내오는 요청을 허용하기 때문에...
  - [Cross-origin](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)

![CSRF](https://user-images.githubusercontent.com/42582516/230754312-f40e3948-3d4b-45b1-9df3-2a37b265f28e.png)


의도한 사용자만 리소스를 변경할 수 있도록 허용하는 필터 
- CSRF 토큰을 사용하여 방지.
 
 ![CsrfFilter](https://user-images.githubusercontent.com/42582516/230754323-8428da98-07c5-43c9-b2d8-df5ad1c7cf34.png)

<br/>

## 28. CSRF 토큰 사용 예제

JSP에서 스프링 MVC가 제공하는 `<form:form>` 태그 또는 타임리프 2.1+ 버전을 사용할 때 폼에 CRSF 히든 필드가 기본으로 생성 됨.

Signup.html
```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org"> <head>
  <meta charset="UTF-8">
  <title>SignUp</title> 
</head>
<body>
  <h1>Sign Up</h1>
  <form action="/signup" th:action="@{/signup}" th:object="${account}" method="post">
    <p>Username: <input type="text" th:field="*{username}" /></p> 
    <p>Password: <input type="text" th:field="*{password}" /></p> 
    <p><input type="submit" value="Submit" /></p>
  </form> 
</body>
</html>
```

SignUpController
```java
package me.whiteship.demospringsecurityform.account;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping; 
import org.springframework.web.bind.annotation.ModelAttribute; 
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class SignUpController {

  @Autowired
  AccountService accountService;

  @GetMapping("/signup")
  public String signUpForm(Model model) {
    model.addAttribute("account", new Account());
    return "signup"; 
  }

  @PostMapping("/signup")
  public String processSignUp(@ModelAttribute Account account) {
    account.setRole("USER"); 
    accountService.createNew(account); 
    return "redirect:/";
  } 
}
```

SignUpControllerTest
```java
@RunWith(SpringRunner.class) 
@SpringBootTest 
@AutoConfigureMockMvc
public class SignUpControllerTest {

  @Autowired 
  MockMvc mockMvc;

  @Test
  public void signUpForm() throws Exception {
    mockMvc.perform(get("/signup")) 
      .andDo(print())
      .andExpect(content().string(containsString("_csrf")));
  }

  @Test
  public void procesSignUp() throws Exception {
    mockMvc.perform(post("/signup") 
      .param("username", "keesun") 
      .param("password", "123") 
      .with(csrf()))
        .andExpect(status().is3xxRedirection()); 
  }
}
```

<br/>

## 29. 로그아웃 처리 필터: LogoutFilter

여러 LogoutHandler를 사용하여 로그아웃시 필요한 처리를 하며 이후에는 LogoutSuccessHandler를 사용하여 로그아웃 후처리를 합니다.

LogoutHandler
- CsrfLogoutHandler
- SecurityContextLogoutHandler

LogoutSuccessHandler
- SimplUrlLogoutSuccessHandler

로그아웃 필터 설정
```java
http.logout() 
  .logoutUrl("/logout")
  .logoutSuccessUrl("/") 
  .logoutRequestMatcher() 
  .invalidateHttpSession(true) 
  .deleteCookies() 
  .addLogoutHandler() 
  .logoutSuccessHandler();
```

![logout-filter](https://user-images.githubusercontent.com/42582516/231175495-3918c89f-5054-4ac2-871b-fa0772fce781.png)

<br/>

## 30. 폼 인증 처리 필터: UsernamePasswordAuthenticationFilter

폼 로그인을 처리하는 인증 필터
- 사용자가 폼에 입력한 username과 password로 Authentcation을 만들고 AuthenticationManager를 사용하여 인증을 시도한다.
- AuthenticationManager (ProviderManager)는 여러 AuthenticationProvider를 사용하여 인증을 시도하는데, 그 중에 DaoAuthenticationProvider는 UserDetailsServivce를 사용하여 UserDetails 정보를 가져와 사용자가 입력한 password와 비교합니다.

![UsernamePasswordAuthenticationFilter](https://user-images.githubusercontent.com/42582516/231177042-885a7a60-03e7-4bcc-8f88-209ad5ee24a3.png)

<br/>

## 31. DefaultLoginPageGeneratingFilter

기본 로그인 폼 페이지를 생성해주는 필터 
- GET /login 요청을 처리하는 필터.

로그인 폼 커스터마이징

```java
http.formLogin() 
  .usernameParameter("my-username") 
  .passwordParameter("my-password");
```

![로그인 폼 커스터마이징](https://user-images.githubusercontent.com/42582516/231498172-34ea75d2-16c5-4090-b039-9139c16d17b9.png)

<br/>

## 32. 로그인/로그아웃 폼 커스터마이징 

[jc-form](https://docs.spring.io/spring-security/site/docs/current/reference/html5/#jc-form)

Signin.html
```html 
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org"> 
<head>
  <meta charset="UTF-8">
  <title>SignIn</title> 
</head>
<body>
  <h1>Sign In</h1>
  <div th:if="${param.error}">
    <div class="alert alert-danger"> 
      Invalid username or password.
    </div> 
  </div>
  <form action="/signin" th:action="@{/signin}" method="post"> 
    <p>Username: <input type="text" name="username" /></p> 
    <p>Password: <input type="password" name="password" /></p> 
    <p><input type="submit" value="SignIn" /></p>
  </form> 
</body>
</html>
```

Logout.html
```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org"> 
<head>
  <meta charset="UTF-8">
  <title>SignIn</title> 
</head>
<body>
  <h1>Logout</h1>
  <form action="/logout" th:action="@{/logout}" method="post">
    <p><input type="submit" value="Logout" /></p> 
  </form>
</body> 
</html>
```

시큐리티 설정
```java
http.formLogin()
  .loginPage("/signin") 
  .permitAll();
```
 
<br/>

## 33. Basic 인증 처리 필터: BasicAuthenticationFilter

Basic 인증이란?
- https://tools.ietf.org/html/rfc7617
- 요청 헤더에 username와 password를 실어 보내면 브라우저 또는 서버가 그 값을 읽어서 인증하는 방식. 예) Authorization: Basic QWxhZGRpbjpPcGVuU2VzYW1l (keesun:123 을 BASE 64)
- 보통, 브라우저 기반 요청이 클라이언트의 요청을 처리할 때 자주 사용.
- 보안에 취약하기 때문에 반드시 HTTPS를 사용할 것을 권장.

<br/>

## 34. 요청 캐시 필터: RequestCacheAwareFilter

현재 요청과 관련 있는 캐시된 요청이 있는지 찾아서 적용하는 필터.
- 캐시된 요청이 없다면, 현재 요청 처리
- 캐시된 요청이 있다면, 해당 캐시된 요청 처리

<br/>

## 35. 시큐리티 관련 서블릿 스팩 구현 필터: SecurityContextHolderAwareRequestFilter

시큐리티 관련 서블릿 API를 구현해주는 필터
- `HttpServletRequest#authenticate(HttpServletResponse)`
- `HttpServletRequest#login(String, String)`
- `HttpServletRequest#logout()`
- `AsyncContext#start(Runnable)`

![SecurityContextHolderAwareRequestFilter](https://user-images.githubusercontent.com/42582516/232069691-5338cb98-f15d-474a-beb1-622d8265ffa1.png)

<br/>

## 36. 익명 인증 필터: AnonymousAuthenticationFilter 

[anonymous](https://docs.spring.io/spring-security/site/docs/5.1.5.RELEASE/reference/htmlsingle/#anonymous)

현재 SecurityContext에 Authentication이 null이면 “익명 Authentication”을 만들어 넣어주고, null이 아니면 아무일도 하지 않습니다.

기본으로 만들어 사용할 “익명 Authentication” 객체를 설정할 수 있다.

```java
http.anonymous() 
  .principal()
  .authorities() 
  .key()
```

참고
- https://en.wikipedia.org/wiki/Null_object_pattern

<br/>

## 37. 세션 관리 필터: SessionManagementFilter 

[session-mgmt](https://docs.spring.io/spring-security/site/docs/5.1.5.RELEASE/reference/htmlsingle/#session-mgmt)

세션 변조 방지 전략 설정: sessionFixation
- 세션 변조: https://www.owasp.org/index.php/Session_fixation
- none
- newSession
- migrateSession (서블릿 3.0- 컨테이너 사용시 기본값)
- changeSessionId (서브릿 3.1+ 컨테이너 사용시 기본값)
- [nsa-session-management-attributes](https://docs.spring.io/spring-security/site/docs/5.1.5.RELEASE/reference/htmlsingle/#nsa-session-management-attributes)

유효하지 않은 세션을 리다이렉트 시킬 URL 설정 
- invalidSessionUrl

동시성 제어: maximumSessions
- 추가 로그인을 막을지 여부 설정 (기본값, false)
- [nsa-concurrency-control](https://docs.spring.io/spring-security/site/docs/5.1.5.RELEASE/reference/htmlsingle/#nsa-concurrency-control)

세션 생성 전략: sessionCreationPolicy 
- IF_REQUIRED
- NEVER
- STATELESS
- ALWAYS