---
sidebar_position: 1
---

# 1장. 폼 인증 예제 살펴보기


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

참고할 사이트

- [PasswordEncoder](https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/password-encoder.html)
- [PasswordEncoder](https://velog.io/@corgi/Spring-Security-PasswordEncoder%EB%9E%80-4kkyw8gi)