---
sidebar_position: 0
---

# 0. Microservice와 Spring Cloud 소개

## 강의 소개

![image](https://user-images.githubusercontent.com/42582516/235333982-6c678723-1911-47d5-8335-335534c87180.png)

<br/>

## 소프트웨어 아키텍처

- Antifragile
  - Auto scaling
  - Microservices
  - Chaos engineering
  - Continuous deployments

<br/>

## Cloud Native Architecture

- 확장 가능한 아키텍처
  - 시스템의 수평적 확정에 유연
  - 확장된 서버로 시스템의 부하 분산, 가용성 보장
  - 시스템 또는, 서비스 애플리케이션 단위의 패키지
  - 모니터링
- 탄력적 아키텍처
  - 서비스 생성-통합-배포, 비즈니스 환경 변화에 대응 시간 단축
  - 분활된 서비스 구조
  - 무상태 통신 프로토콜
  - 서비스의 추가와 삭제 자동으로 감지
  - 변경된 서비스 요청에 따라 사용자 요청 처리
- 장애 격리 (Fault isolaion)
  - 특정 서비스에 오류가 발생해도 다른 서비스에 영향 주지 않음

<br/>

## Cloud Native Application

- CI/CD
  - 지속적인 통합 (CI)
  - 지속적 배포 (Continuous Delivery)
  - 카나리 배포와 블루 그린 배포
- DevOps
  - Development & QA & Operation
- Containers
  - 가상화
- Microservices

<br/>

## 12 Factors

[12Factors](https://12factor.net/)

- 코드베이스(Codebase)
  - One codebase tracked in revision control, many deploys
- 종속성(Dependencies)
  - Explicitly declare and isolate dependencies
- 구성, Config
  - Store config in the environment
- 백업서비스, Backing services
  - Treat backing services as attached resources
- 빌드, 릴리스, 실행 (Build, release, run)
  - Strictly separate build and run stages
- 프로세스, Processes
  - Execute the app as one or more stateless processes
- 포트 바인딩, Port binding
  - Export services via port binding
- 동시성, Concurrency
  - Scale out via the process model
- 폐기 가능성, Disposability
  - Maximize robustness with fast startup and graceful shutdown
- 개발/프로덕션 패리티, Dev/prod parity
  - Keep development, staging, and production as similar as possible
- 로그, Logs
  - Treat logs as event streams
- 관리 프로세스, Admin processes
  - Run admin/management tasks as one-off processes

<br/>

## Monolithic vs Microservice

- **Monolith** vs **Font & Back** vs **Microservice Architecture**

<br/>

## Microservice Architecture란?

Microservice의 특징

- Challenges
- Small Well Chosen Deployable Units
- Bounded Context
- RESTful
- Configuartion Management
- Cloud Enabled
- Dyanmic Scale Up And Scale Down
- CI/CD
- Visibility

고려 사항

- Multiple Rates of Change
- Independent Life Cycles
- Independent Scalability
- Isolated Failure
- Simplify Interactions with External Dependencies
- Polyglot Technology

<br/>

## SOA vs MSA

- SOA : 재사용을 통한 비용 절감
- MSA : 서비스 간의 결합도를 낮추어 변화에 능동적으로 대응

MSA <-(서비스 공유 최소화)- Service -(서비스 공유 최대화)-> SOA

기술방식
- SOA : 공통의 서비스를 ESB에 모아 사업 측면에서 공통 서비스 형식으로 서비스 제공
- MSA : 각 독립된 서비스가 노출된 REST API를 사용

<br/>

## Microservice Architecture Structures

![Microservice Architecture Structures](https://user-images.githubusercontent.com/42582516/236219460-e15936e8-261c-4a28-9844-e0cc5b10b861.png)

### Service Mesh Capabilites

- MSA 인프라 -> 미들웨어
  - 프록시 역할, 인증, 권한 부여, 암호화, 서비스 검색, 요청 라우팅, 로드 밸런싱
  - 자가 치유 복구 서비스
- 서비스간의 통신과 관련된 기능을 자동화

### CNCF(Cloud Native Computing Foundation)

<br/>

## Spring Cloud란?