# 평소대로의 세팅

## VS code Extension

- Auto Rename Tag
- ES7+ React/Redux/React-Native snippets
- ESLint
- Prettier

<br />

## 진행사항

- ### react & typescript 세팅

  <hr />

  - npx create-react-app [PROJECT_NAME] --template typescript

  <br />

  - tsconfig, compilerOptions 안에 baseUrl 설정

    ```json
    "baseUrl": "src",
    ```

    - 베이스 주소가 src로 설정되었기 때문에 앞으로 import 할 때, 뒤에 /../../../ 없이 주소를 적을 경우 src 부터 시작한다.

  <br/>

  - package.json 확인

    - warning 이 뜨고 npm audit (npm 에서 코드 취약점을 파악하는 명령어) 를 쳤을 시에 nth-check 가 나온다면 걱정하지 말자.
    - 경고하자면 `npm audit fix --force` 로는 해결할 수 없다. 오히려 다른 패키지들이 깨질 수 있으니 주의
    - npm 으로 패키지를 다운로드 받고 있다면 원래 나와야 하는 게 맞다.
    - 문제의 원인은 package.json 안에 있는 `"react-scripts"` 이다.
    - npm은 해당 코드로 Node.js 앱을 돌릴 때 생기는 취약점을 경고한다. 하지만 CRA(create-react-app)는 정적 빌드 툴이고, Node.js와 같은 방식으로 작동하지 않으며. npm audit은 CRA의 몇몇 부분을 취약점으로 오탐지한다.
    - 따라서 문제되는 의존성이 npm에 탐지되지 않게하기 위하여 다음의 방법을 사용한다.
    - package.json 안의 "dependencies" 안에 있는 "react-scripts" 을 "devDependencies" 로 이동시킨다.
    - 그 후, npm audit 대신 npm audit --production 을 사용하면된다.

<br/>

- ### eslint & prettier 세팅

  <hr />

  - 앞서서 eslint & prettier 란?
    - eslint 는 현재 개발자들에게 매우 인기있는 JavaScript linter이다, lint 란 소스 코드를 사전 검사하여 버그, 스타일 오류, 의심스러운 구조체들을 파악하여 로직 에러를 사전에 막아주는 도구이다.
    - prettier는 대다수가 쓰는 code formatter로 띄어쓰기, 개행 줄, 따옴표 등의 코드 생김새를 체크하고 강제로 지키도록 만들어 팀 간에 약속한 코드 컨벤션을 유지시켜준다 . eslint 의 스타일 체크보다 훨씬 기능이 다양하며, 자동으로 code format 를 맞춰 변화시켜주기 때문에 매우 편리하다. 한 명이 개발한 것 처럼 이쁜 코드를 만들어주는 도구이다.

  <br />

  - 빌드 시가 아니라 IDE 에서 개발 시 실시간 체크하기 위해서 vscode 의 extension `eslint` 와 `prettier` 를 설치해야한다.

  <br />

  - 프로젝트에 필요한 패키지들을 내려받는다. 필요한 것은 다음과 같다.

    - eslint
    - prettier
    - eslint-config-prettier
      - eslint에서 prettier와 충돌할 수 있는 rule을 꺼버린다.
      - 코드 오류만로 eslint, 코드 포맷팅만 prettier로 잡을 수 있다.
    - eslint-plugin-prettier
      - prettier를 eslint의 rules로써 동작하게 한다.
      - 코드 포맷팅 문제가 사전에 오류 메세지로 출력되서 파악하기 쉬워진다.
      - 단, 오류 메시지가 지나치게 많아져서 느려진다.

    <br />

    - `npm install eslint prettier eslint-config-prettier eslint-plugin-prettier --save-dev`
      - 다음의 명령어로 위에서 언급한 패키지들을 내려 받는다.

  <br />

  - prettier 세팅

    - vscode 설정에서 default editor 를 prettier 로 바꿔줄 것
    - 편하게 쓰기 위해서 editor: format on save 를 true 값으로 해주면 저장 시에 자동으로 코드를 알맞게 바꿔준다.
    - 특수 법칙을 적용할 디렉토리에 `.prettierrc.json` 파일을 생성하고 내부에 법칙을 작성한다.

      ```json
      {
        "singleQuote": true,
        "semi": true,
        "useTabs": false,
        "tabWidth": 2,
        "trailingComma": "all",
        "printWidth": 100,
        "arrowParens": "always",
        "endOfLine": "auto"
      }
      ```

  <br />

  - eslint 세팅

    - npx eslint --init 명령어를 통해 빠른 초기 설정이 가능하다.
    - 예시 프로젝트에서는 react 와 typescript 를 사용한다.
    - javascript module 과 commonjs 중 무엇을 쓰는 지 질문하는데 module 이 더 최신 방식이다. 뭐가 뭔지 모르겠다면 본인이 타 파일의 코드를 불러오는 방법을 보면 안다.

      - commonjs : 가져올 때는 `require` 로, 내보낼때는 `module.exports` 를 쓰는 구 방법

      - javascript module : `import` 와 `export` 을 사용하여 EMCA Script modules(또는 ES modules)를 가져오고 내보내는 방법. JS 코드 패키징의 공식 표준 형식이며 대부분의 최신 웹 브라우저는 기본적으로 모듈을 지원한다.

    - 설정하고 나면, 추가적으로 내려받아야할 설정들까지 자동으로 받아준다. 그 후, .eslintrc 파일이 생성되었을 것이다. 참고로 이 설정파일의 형식을 먼저 묻는데 js 로 선택할 경우, 최상위 디렉토리가 아니면 인식이 안될 수 있다. json 이 무난하다.

    - .eslintrc.json 에 프리티어 설정을 적용한다.

      ```json
      {
        // 상위 폴더에 적용 유뮤.
        "root": false,

        // env 환경변수 적용
        "env": {
          "browser": true,
          "es2021": true
        },

        // 추가한 plugin에서 사용할 규칙을 설정.
        "extends": [
          "eslint:recommended",
          "plugin:react/recommended",
          "plugin:@typescript-eslint/recommended",
          "plugin:prettier/recommended"
        ],

        "overrides": [],

        // 구문 분석을 위해 사용하는 parser 설정
        "parser": "@typescript-eslint/parser",

        // 구문 분석할 언어 옵션 설정
        "parserOptions": {
          // 프로젝트 tsconfig 주소를 못잡을때 명시
          "project": ["front-end/tsconfig.json"],
          "ecmaVersion": "latest",
          "sourceType": "module"
        },

        "plugins": ["react"],

        // 프로젝트에 사용할 규칙을 설정.
        // 규칙에 추가 옵션이 있는 경우 배열로 설정 가능.
        // 참고 : https://eslint.org/docs/latest/rules/
        // off 또는 0 사용시 규칙을 사용하지 않음.
        // warn 또는 1 사용시 규칙을 경고로 사용.
        // error 또는 2 사용시 규칙을 오류로 사용.
        "rules": {},

        // .로 시작하는 설정파일이나 node_modules, 외의 무시할 파일 영역
        "ignorePatterns": ["build", "dist", "public"],

        // 리액트 버전 자동탐지
        "settings": {
          "react": {
            "version": "detect"
          }
        }
      }
      ```

<br />

- ### env 환경 변수 세팅

  <hr />

  - typescript 에서 환경변수의 타입을 미리 명시하여 귀찮은 타입 처리를 피할 수 있다

    - 프로젝트 최상단에 `.env` 생성 후, 환경변수 등록. <br />
      변수 이름이 `REACT_APP_` 으로 시작해야 인식됨 <br />
      **(예시: 현 개발 빌드의 버젼을 환경변수로 등록하여 사용하기)**

      ```
      REACT_APP_VERSION = 0.003v
      ```

    <br />

    - `react-app-env.d.ts` 에 환경변수 타입 명시

      ```typescript
      /// <reference types="react-scripts" />

      declare namespace NodeJS {
        interface ProcessEnv {
          NODE_ENV: "development" | "production";
          REACT_APP_VERSION: string;
        }
      }
      ```

    이후에 `process.env.REACT_APP_VERSION` 의 예시처럼 이름으로 불러와 사용할 수 있음.

<br />

- ### react router 주소 세팅

  <hr />

  - npm install react-router-dom @types/react-router-dom

    - 테스트로 사용할 홈페이지 HomePage.tsx 를 생성

      ```typescript
      // src/components/pages/HomePage/index.tsx
      // API & Library
      import React from "react";

      export const HomePage = () => {
        // Return
        return (
          <>
            <div>홈페이지</div>
          </>
        );
      };
      ```

    <br />

    - 테스트로 사용할 블로그 페이지 BlogPage.tsx 를 생성

      ```typescript
      // src/components/pages/BlogPage/index.tsx
      // API & Library
      import React from "react";

      export const BlogPage = () => {
        // Return
        return (
          <>
            <div>블로그 페이지</div>
          </>
        );
      };
      ```

    <br />

    - 에러 핸들링을 할 페이지 ErrorPage.tsx 를 생성

      ```typescript
      // src/components/pages/ErrorPage/index.tsx
      // API & Library
      import React from "react";

      export const ErrorPage = () => {
        // Return
        return (
          <>
            <div>에러 페이지</div>
          </>
        );
      };
      ```

    <br />

    - 라우터 설정을 정의할 AppRouter.tsx 를 생성

      ```typescript
      // src/AppRouter.tsx
      // API & Library
      import React from "react";
      import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

      // Components
      import { HomePage } from "components/pages/HomePage";
      import { BlogPage } from "components/pages/BlogPage";
      import { ErrorPage } from "components/pages/ErrorPage";

      export const AppRouter = () => {
        // Return
        return (
          <>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home/*" element={<HomePage />} />
                <Route path="/blog/*" element={<BlogPage />} />
                <Route path="/error/*" element={<ErrorPage />} />
                <Route path="/*" element={<Navigate replace to="/error" />} />
              </Routes>
            </BrowserRouter>
          </>
        );
      };
      ```

      <br />

    - App.tsx 에 적용

      ```typescript
      // src/App.tsx
      // API & Library
      import React, { useEffect } from "react";

      // Components
      import { AppRouter } from "AppRouter";

      function App() {
        // LifeCycle
        useEffect(() => {
          console.log("[VERSION]: ", process.env.REACT_APP_VERSION);
        }, []);

        // Return
        return (
          <div className={`App`}>
            <AppRouter />
          </div>
        );
      }

      export default App;
      ```

  - npm start 로 테스트 가능
  - npm run build 로 만들어진 build 폴더 안의 내용물을 최상단, index.html 이 있는 맨 앞으로 복사 붙여넣기한다.
  - 404 에러 발생 시

    - 위의 방법을 똑같이 따라왔다면 새로고침시에 404에러가 발생한다. 이는 React의 SPA 구조를 gitpage가 받아들이지 못해서 발생하는 문제이다.
    - github.io 는 그 밑에 github.io/home 이라는 주소를 이해하지 못하며 그때, 404.html 를 화면에 띄우려고한다.
    - 이 상황을 해결해주기 위해서 404.html 파일을 직접 생성해준 뒤, 입력받은 주소를 데이터로 바꾸어 github.io/ 주소에 넘겨주자
    - 404.html -> index.html 로 정보를 넘겨주는 것은 여러 방법이 있는데, 이번 설명에서는 빠르게 전체주소를 쿼리스트링으로 넘겨주도록 하겠다.

    <br />

    1. 404.html 의 현 주소를 그대로 쿼리스트링에 집어넣고 index.html 로 연결되는 '/' 주소로 가는 javascript 코드를 넣는다

       ```html
       // front-end/public/404.html
       <!DOCTYPE html>
       <html>
         <head>
           <meta charset="utf-8" />
           <title>Integral Blog</title>
           <script type="text/javascript">
             window.location.replace(`/?url=${window.location.href}`);
           </script>
         </head>
         <body></body>
       </html>
       ```

    <br />

    2. index.html 에서 받아온 주소를 window.history.replaceState를 통해 처리한다.

       ```html
       // front-end/public/index.html

       <!DOCTYPE html>
       <html lang="en">
         <head>
           <meta charset="utf-8" />
           <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
           <meta
             name="viewport"
             content="width=device-width, initial-scale=1"
           />
           <meta name="theme-color" content="#000000" />
           <meta
             name="description"
             content="Web site created using create-react-app"
           />
           <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
           <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

           <title>Integral Blog</title>
         </head>
         <body>
           <div id="root"></div>
           <script type="text/javascript">
             if (window.location.search.slice(1, 4) == "url")
               window.history.replaceState(
                 null,
                 null,
                 `${window.location.search.slice(5)}`
               );
           </script>
         </body>
       </html>
       ```

    <br />

    3. 빌드 후, 깃 페이지 링크에서 잘 작동하는 지 확인해보자. 그 외에도 직접 분해해서 필요한 데이터만 가져오는 방법, localstorage 를 쓰는 방법 등 본인에게 적합한 방법을 사용하자.

<br />

- ### react 디자인 준비

  <hr />

  - sass 적용 `npm install node-sass`

  <br />

  - react-icon 적용 `npm install react-icons --save`

  <br />

  - `src/theme.scss` 를 만들어 작성

    - 후에 라이트 모드, 다크 모드를 상정하여 만드는 경우

      ```scss
      :root {
        --color-theme: #009e73;
      }

      .light {
        --color-main: #000000;
        --color-sub: #000000;
        --color-reverse: #000000;
      }

      .dark {
        --color-main: #000000;
        --color-sub: #000000;
        --color-reverse: #000000;
      }
      ```

    - 그 후, 해당 class 나 , id 가 적용되도록 app.tsx 나 그 밑의 컴포넌트에서 사용하면 된다. <br />
      **(예시 : app.tsx 이하에선 라이트모드 다크모드를 적용하기)**

      ```typescript
      // src/App.tsx

      // API & Library
      import React, { useState, useEffect } from "react";

      // Styles
      import "./theme.scss";

      // Components
      import { SideBar } from "components/commons/SideBar";
      import { AppRouter } from "AppRouter";

      function App() {
        // Init
        const [isDark, setIsDark] = useState(localStorage.getItem("isDark"));

        // LifeCycle
        useEffect(() => {
          console.log("[VERSION]: ", process.env.REACT_APP_VERSION);
        }, []);

        // Return
        return (
          <div className={`App ${isDark ? "dark" : "light"}`}>
            <SideBar />
            <AppRouter />
          </div>
        );
      }

      export default App;
      ```

  <br />

  - 스타일 컴포넌트 적용하기

    - **_( 참고: css를 직접 적용하는 것이 더 편하다고 생각한다면 이 과정은 불필요하다. )_**
    - 스타일 컴포넌트 `npm install --save styled-components`
    - 스타일 컴포넌트 타입스크립트 명세서 `npm i --save-dev @types/styled-components`
    - css 관리와 개발 편의성을 위하여 각 컴포넌트의 디렉토리 구조를 데이터 정보를 담은 `index.tsx` 와 스타일을 적용한 `style.tsx` 로 분리하려고 한다.

    - ```typescript
      // src/components/pages/HomePage/style.tsx

      // API & Library
      import styled from "styled-components";

      // Asset
      import test from "asset/image/test.png";

      export const StyledPage = styled.div`
        height: 100vh;
        width: 100vw;

        overflow-y: scroll;

        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url(${test});
        background-repeat: no-repeat;
        background-size: cover;

        &::-webkit-scrollbar {
          width: 10px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: #000000;
          background-clip: padding-box;
          border-radius: 100px;

          border: 2px solid transparent;
        }
      `;
      ```

    - ```typescript
      // src/components/pages/HomePage/index.tsx

      // API & Library
      import React from "react";

      // Styles
      import { StyledPage } from "./style";

      export const HomePage = () => {
        // Return
        return (
          <>
            <StyledPage className="home-page">
              <h1>홈페이지</h1>
            </StyledPage>
          </>
        );
      };
      ```

<br />

- ### 네비게이션 바

  <hr />

  - 사이트에 네비게이션 바는 필수이다. 본 예시에서는 사이드 바를 네비게이션 바 역할로 사용할 것 이다.

  <br />

  - Vue Router 에서 `<router-link>` 를 지원하 듯이 React Router 에서는 `<NavLink>` 를 지원한다.
  - React Router v6 이전에는 activeClassName 으로 클릭된 태그에 클래스 적용이 가능했다.
  - React Router v6 이후로는 isActive 로 클릭 된 태그의 정보를 조작할 수 있다.
    ```html
    <NavLink to="/blog" className={({ isActive }) => (isActive ? 'style-class' : '')}></NavLink>
    ```

- ### Notion API 를 Blog Database 로 쓰기

  <hr />

https://www.notion.so/my-integrations 에서 API 키 받아오기 가능
