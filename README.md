# 원티드 프리온보딩 프론트엔드 챌린지 8월

## 1) 프로젝트 비디오

<img src="https://user-images.githubusercontent.com/41880220/185695111-876c2192-f914-40b5-81f1-6d35f0599f69.gif"/>

<img src="https://user-images.githubusercontent.com/41880220/185695421-67b037bd-f80e-4b34-a099-b31fdfed4d8a.gif"/>

## 2) 설치, 환경설정 및 실행방법

```
git clone https://github.com/threeveisgood/wanted-pre-onboarding-challenge-fe-1.git
cd wanted-pre-onboarding-challenge-fe-1
yarn
yarn start
```

## 3) 구현 요구 사항 목록

1. 로그인 / 회원가입 기능

- [x] 이메일, 비밀번호 input, 제출 button 구성
- [x] 이메일 조건 @,. 포함
- [x] 비밀번호 8자 이상 입력
- [x] 이메일과 비밀번호 모두 입력과 조건 만족시 제출 활성화
- [x] 응답으로 받은 토큰 로컬 스토리지 저장
- [x] 로그인 시 토큰이 존재하면 루트 경로로 리다이렉트
- [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트

2. Todo List

- [x] 목록 / 상세 영역으로 나누어 구현하기
- [x] Todo 목록 보기 가능
- [x] Todo 추가버튼 누를 시 할 일 추가
- [x] Todo 수정 버튼 클릭 시 수정 모드 활성화, 수정 내용 제출, 취소 가능
- [x] Todo 삭제 버튼 클릭 시 해당 Todo 삭제
- [x] 새로고침 시 현재 상태 유지
- [x] 개별 Todo 조회 순서에 따라 페이지 뒤로 가기로 조회 가능 여부
- [x] 수정되는 Todo 목록 실시간 반영

## 사용한 프레임워크 및 라이브러리 설명

```
  "dependencies": {
    "@reduxjs/toolkit": "^1.8.3",
    "@tanstack/react-query": "^4.0.10",
    "axios": "^0.27.2",
    "dayjs": "^1.11.4",
    "formik": "^2.2.9",
    "react-hot-toast": "^2.3.0",
    "react-icons": "^4.4.0",
    "react-quill": "^2.0.0",
    "react-redux": "^8.0.2",
    "react-router-dom": "6",
    "redux": "^4.2.0",
    "redux-persist": "^6.0.0",
    "styled-components": "^5.3.5",
    "typescript": "^4.7.4",
    "yup": "^0.32.11"
  }
```

- 리덕스를 사용할때 @reduxjs/toolkit이 유행한다하여 사용하게 되었습니다. 처음에 적용할 때 문법에 익숙하지 못해서 시간을 많이 낭비하였습니다.
- todo 내용에서 마크업 문법을 사용한 상태로 업로드 하고 싶었기 때문에 react-quill을 사용하였습니다.
- 과제 요구사항에 새로고침 시 데이터 유지가 있었기 때문에 예전부터 궁금했던 Redux-persist를 사용하게 되었습니다. localStorage를 사용해서 저장하는 것이 신기했는데 수업에서 평상시 편하게 쓰는 코드를 까보는 습관이 필요하단 말씀을 듣고 관점이 바뀐 것 같습니다.
- css-in-js가 매우 편하다 생각해왔기 때문에 styled-components를 사용하였습니다.
- formik은 유일하게 사용할줄 아는 form 관련 프레임워크라 사용하게 되었습니다. yup으로 schema validation까지 가능해서 익히기만 하면 편리한 것 같습니다. tkdodo의 블로그를 공부하면서 react hook form에 알게 되었는데 기회가 된다면 해보고 싶습니다!
- dayjs는 요즘 앱에서 글 작성 된지 '몇 분전'이 있는 기능을 빠르게 구현하고 싶어서 사용하였습니다.
- react query는 api 연동 부분에서 타입스크립트에 미숙했기 때문에 any 타입을 거둬내는 것이 겁났는데
  수업, tkdodo의 블로그를 읽어보고 나름 감을 잡기 시작한 것 같아 좋았습니다. 아직도 가장 마법같다 생각되는 라이브러리인데 언젠가 코드를 분석해서 원리를 이해하는 날이 왔으면 좋겠습니다.

## 폴더 구조 설명

- components 폴더는 소규모 프로젝트 특성상 별도의 페이지 없이 index 파일로 간략화하면서 분리하였습니다.
- style 폴더는 styled-components의 스타일 부분 코드만 모아두었습니다. 컴포넌트 경로와 비슷한 형태를 이루어져 있습니다.
- hooks 폴더는 기본적으로 react-query 관련 Hook들을 보관하며 State에는 리덕스 관련 상태를 모아두었습니다.
- api 폴더에는 Axios 코드들을 모아놓았습니다.
- lib 폴더에는 따로 폴더를 만들어 보관하기 애매한 파일들을 모아두었습니다. 그래도 redux와 react-query는 중요하기 때문에 별도의 폴더로 분리하였습니다.
- slices 폴더는 redux toolkit 관련 코드들을 별도로 분리하였습니다.
- styled 폴더는 styled-components의 전역 파일들을 분리하였습니다.
- types 폴더는 일회용 type을 제외한 type들을 모아두었습니다.

```
│  index.tsx
│  react-app-env.d.ts
│  reportWebVitals.ts
│  setupTests.ts
│
├─api
│      auth.ts
│      client.ts
│      createTodo.ts
│      deleteTodo.ts
│      rewriteTodo.ts
│      todo.ts
│      todos.ts
│
├─components
│  │  404.tsx
│  │  LoadingSpinner.tsx
│  │
│  ├─auth
│  │      AuthForm.tsx
│  │      index.tsx
│  │
│  ├─layout
│  │      Header.tsx
│  │      index.tsx
│  │
│  ├─style
│  │  │  LoadingSpinner.tsx
│  │  │
│  │  ├─auth
│  │  ├─common
│  │  │      Button.tsx
│  │  │      Form.tsx
│  │  │      Link.tsx
│  │  │
│  │  ├─layout
│  │  │      Header.tsx
│  │  │      index.tsx
│  │  │
│  │  └─todos
│  │          index.tsx
│  │          List.tsx
│  │          ListItem.tsx
│  │          todo.tsx
│  │          Write.tsx
│  │          WriteActionsButtons.tsx
│  │
│  └─todos
│      │  index.tsx
│      │  [id].tsx
│      │
│      ├─list
│      │      index.tsx
│      │      ListItem.tsx
│      │
│      └─write
│              index.tsx
│              WriteActionButtons.tsx
│
├─hooks
│  │  useCreateTodo.ts
│  │  useDeleteTodo.ts
│  │  useLogIn.ts
│  │  useRegister.ts
│  │  useRewriteTodo.ts
│  │  useTodo.ts
│  │  useTodos.ts
│  │
│  └─state
│          useAuth.tsx
│          useTodosState.ts
│          useTodosStateActions.ts
│
├─lib
│  │  dayjs.ts
│  │  quill.ts
│  │  token.ts
│  │  yup.ts
│  │
│  ├─redux
│  │      store.ts
│  │
│  └─tanstack
│          query-client.ts
│
├─routes
│      ProtectedRoute.tsx
│      Router.tsx
│
├─slices
│      index.ts
│      todos.ts
│
├─styled
│      globalStyles.ts
│      styled.d.ts
│      theme.ts
│
└─types
        auth.ts
        todos.ts

```

## 과제 진행 시 주안점

코드의 재사용성을 높이기 위해서 hooks 폴더에 모든 react-query 관련 코드들을 분리하며

hooks/state와 slices에는 리덕스 관련 코드들을 분리하면서 client와 server state를 확실히 구분해두고 싶었습니다.

평소에 타입스크립트를 사용할 때 any 타입으로 어중간하게 넘어가는 경우를 배제하고 싶었습니다.

## 한계점 및 개선사항

-error handling 부분에서 매우 미숙해서 유연한 대처가 안되는 앱으로 생각됩니다.

-redux router dom을 잘못 다뤄서 다른 분들의 코드를 많이 참고하고 구현하였습니다.

-그 과정에서 layout 컴포넌틀르 전역으로 두는 것을 선호하는 편인데 layout을 여러 군데 호출하게 된 것이 아쉬웠습니다.
