---
sidebar_position: 1
---

# 1부 스프링 시큐리티: 폼 인증

## 1. 폼 인증 예제 살펴보기

앞으로 차근 차근 만들고 또 다음어 갈 예제가 어떻게 동작하는지 먼저 살펴보겠습니다.

이 애플리케이션에는 다음과 같은 총 4개의 뷰가 있습니다.

- 홈 페이지
  - `/`
  - 인증된 사용자도 접근할 수 있으며 인증하지 않은 사용자도 접근할 수 있습니다.
  - 인증된 사용자가 로그인 한 경우에는 이름을 출력할 것.
- 정보
  -  `/info`
  - 이 페이지는 인증을 하지 않고도 접근할 수 있으며, 인증을 한 사용자도 접근할 수 있습니다.
- 대시보드
  - `/dashboard`
  - 이 페이지는 반드시 로그인 한 사용자만 접근할 수 있습니다.
  - 인증하지 않은 사용자가 접근할 시 로그인 페이지로 이동합니다.
- 어드민
  - `/admin`
  - 이 페이지는 반드시 ADMIN 권한을 가진 사용자만 접근할 수 있습니다.
  - 인증하지 않은 사용자가 접근할 시 로그인 페이지로 이동합니다.
  - 인증은 거쳤으나, 권한이 충분하지 않은 경우 에러 메시지를 출력합니다.

<br/>

## 2. 스프링 웹 프로젝트 만들기

- 스프링 부트와 타임리프(Thymeleaf)를 사용해서 간단한 웹 애플리케이션 만들기
  - https://start.spring.io
  - web-start와 thymeleaf 추가
  - `/, /info, /dashboard, /admin` 페이지와 핸들러 만들기
- 타임리프
  - `xmlns:th=”http://www.thymeleaf.org”` 네임스페이스를 html 태그에 추가.
  - `th:text=”${message}”` 사용해서 Model에 들어있는 값 출력 가능.
- 현재 문제
  - 로그인 할 방법이 없음
  - 현재 사용자를 알아낼 방법이 없음

<br/>

## 3. 스프링 시큐리티 연동

- 스프링 시큐리티 의존성 추가하기
  - 스프링 부트 도움 받아 추가하기
    - 스타터(Starter) 사용
    - 버전 생략 - 스프링 부트의 의존성 관리 기능 사용

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

- 스프링 시큐리티 의존성을 추가하고 나면
  - 모든 요청은 인증을 필요로 합니다.
  - 기본 유저가 생성됩니다.
    - Username: user
    - Password: 콘솔에 출력된 문자열 확인
- 해결된 문제
  - 인증을 할 수 있다.
  - 현재 사용자 정보를 알 수 있다.
- 새로운 문제
  - 인증없이 접근 가능한 URL을 설정하고 싶다.
  - 이 애플리케이션을 사용할 수 있는 유저 계정이 그럼 하나 뿐인가?
  - 비밀번호가 로그에 남는다고?

<br/>

## 4. 스프링 시큐리티 설정하기

- 스프링 웹 시큐리티 설정 추가

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .mvcMatchers("/", "/info").permitAll()
                .mvcMatchers("/admin").hasRole("ADMIN")
                .anyRequest().authenticated();

        http.formLogin();
        http.httpBasic();
    }
}
```

- 해결한 문제
  - 요청 URL별 인증 설정
- 남아있는 문제
  - 여전히 계정은 하나 뿐. 
  - ADMIN 계정도 없음.
  - 비밀번호도 여전히 로그에 남는다.

<br/>

## 5. 스프링 시큐리티 커스터마이징: 인메모리 유저 추가

- 지금까지 스프링 부트가 만들어 주던 유저 정보는?
  - UserDetailsServiceAutoConfiguration
  - SecurityProperties
- SecurityProperties를 사용해서 기본 유저 정보 변경할 수 있긴 하지만...
- SecurityConfig에 다음 설정 추가

```java
@Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth.inMemoryAuthentication()
            .withUser("keesun").password("{noop}123").roles("USER").and()
            .withUser("admin").password("{noop}!@#").roles("ADMIN");
}

@Bean
@Override
public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
}
```

- 인메모리 사용자 추가
  - 로컬 AuthenticationManager를 빈으로 노출
- 해결한 문제
  - 계정 여러개 사용할 수 있음.
  - ADMIN 계정도 있음
- 남아있는 문제
  - 비밀번호가 코드에 보인다. 
  - 데이터베이스에 들어있는 유저 정보를 사용하고 싶다.

<br/>

## 참고할 사이트

- [PasswordEncoder](https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/password-encoder.html)
- [PasswordEncoder](https://velog.io/@corgi/Spring-Security-PasswordEncoder%EB%9E%80-4kkyw8gi)

<br/>

## 시프링 시큐리티 테스트

- 두 가지 방법
  - 코드 mocking
  - annotation 을 통한 방법