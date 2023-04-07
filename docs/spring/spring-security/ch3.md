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