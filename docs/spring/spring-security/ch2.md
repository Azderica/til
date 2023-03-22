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