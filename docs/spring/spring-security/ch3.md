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

- 스프링 부트가 제공하는 PathRequest를 사용해서 정적 자원 요청을 스프링 시큐리티 필터를 적용하지 않도록 설정.