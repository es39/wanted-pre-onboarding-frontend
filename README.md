## 원티드 프리온보딩 프론트엔드 사전과제

지원자명 : 조은선

프로젝트 실행방법
- 배포 링크로 접속하여 실행<br/>
- 배포링크 : https://wanted-pre-onboarding-frontend-es39.vercel.app <br />

## 주요 페이지
### 1. 메인 페이지<br />
- 회원가입 버튼과 로그인 버튼으로 구성하여, 각 버튼 클릭 시 해당 페이지로 이동하도록 구현<br />
- 경로 : 회원가입('/signup'), 로그인('/signin')<br />
### 2. 회원가입 페이지<br />
- 이메일과 비밀번호를 입력 후, 회원가입 버튼을 클릭하면 회원가입이 진행되도록 구현<br />
- 이메일의 경우 '@'를 포함한 이메일 형식으로 작성했을 경우, 비밀번호는 8자 이상 입력했을 경우에 회원가입이 진행되도록 구현<br />
- LocalStorage에 access token이 있는 경우, 접근할 수 없도록 구현<br />
### 3. 로그인 페이지<br />
- 가입한 이메일과 비밀번호를 입력하여 일치할 경우, 로그인이 되도록 구현<br />
- 로그인 성공 시, LocalStorage에 access token이 저장되도록 구현<br />
- 로그인 성공 시, Todo List 페이지로 이동하도록 구현<br />
- LocalStorage에 access token이 있는 경우, 접근할 수 없도록 구현<br />
### 4. Todo 페이지 <br />
- LocalStorage에 access token이 있는 경우에만 접근할 수 있도록 구현<br />
- Todo List에 대하여 CRUD 기능 구현
- 체크 박스 클릭 시, 체크 여부 기능 구현
