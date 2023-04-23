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