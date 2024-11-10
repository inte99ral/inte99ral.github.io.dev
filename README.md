# 평소대로의 세팅

- ### react router 주소 세팅

  1. 빌드 후, 깃 페이지 링크에서 잘 작동하는 지 확인해보자. 그 외에도 직접 분해해서 필요한 데이터만 가져오는 방법, localstorage 를 쓰는 방법 등 본인에게 적합한 방법을 사용하자.

<br />

- ### react 디자인 준비

    <hr />

  - 둘 중 택 1

    - node-sass 적용 `npm install node-sass`
    - dart sass 적용 `npm install -g sass`

    <br />

  - react-icons 적용 `npm install react-icons --save`

    - [react-icons 사이트](https://react-icons.github.io/react-icons/)
    - 아이콘을 매번 직접 찾아서 써도 되나 어지간한건 리액트 아이콘에 다 있다.
    - 사용 예시

      ```javascript
      import { AiFillSetting } from "react-icons/ai";

      export const Sidebar = () => {
        return (
          <>
            <AiFillSetting />
          </>
        );
      };
      ```

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

  - 사이트에 네비게이션 바는 필수이다.<br />
    본 예시에서는 사이드 바를 네비게이션 바 역할로 사용할 것 이다.

  - 사이트에 사용될 icon 들을 위하여 [react-icon 라이브러리](https://react-icons.github.io/react-icons/)를 인스톨한다.<br />

    ```
    npm install react-icons --save
    ```

  - Vue Router 에서 `<router-link>` 를 지원하 듯이 React Router 에서는 `<NavLink>` 를 지원한다.
  - React Router v6 이전에는 activeClassName 으로 클릭된 태그에 클래스 적용이 가능했다.
  - React Router v6 이후로는 isActive 로 클릭 된 태그의 정보를 조작할 수 있다.
    ```html
    <NavLink to="/blog" className={({ isActive }) => (isActive ? 'style-class' : '')}></NavLink>
    ```

<br />

- ### 상태 관리 라이브러리 적용

  <hr />

  - DOM 기반으로 페이지를 형성하는 컴포넌트들을 분리 개발하게 된 덕분에 재사용성이 증가되었지만,
    컴포넌트 간에 상호작용을 필요로 하는 계산이 매우 힘들어졌다. <br />

    일반적인 구현에는 props 로 부모 컴포넌트에서 자식 컴포넌트에게 전달하며,
    emit 이나 hook 을 걸어 자식 쪽에서 부모에게 정보를 전달할 수 있다. <br />

    이 과정이 직접 부모자식 관계가 아닐 경우 상당히 복잡하고 코드가 길어지고
    데이터를 다루는 로직이 복잡해진다.
    상기한 문제를 해결하기 위해 상태 관리 라이브러리`(State Management Library)`를 사용한다.
    여러 컴포넌트에서 데이터를 공유할 수 있도록 중앙 관리하는 방식이라고 대강 이해하면 충분하다.
    <br />

    많은 개발자들이 사용하며 어느 정도 신뢰가 쌓인 Vue의 Vuex,
    Pinia 그리고 React의 Recoil, Redux 가 주로 사용된다.
    React 에서 자체적으로 지원하는 전역 상태 관리 인터페이스 Context API 나,
    Mobx 등 여러 방법들이 있으니 입맛에 맞게 선택하면 된다.
    여기서는 데이터 비동기화 처리가 간편한 recoil 을 채택했다.<br />

  - `npm install recoil`<br/>
    다음의 명령어로 위에서 언급한 패키지들을 내려 받는다.

<br />

### JSON-SERVER

[빌드시엔 미적용](https://donghyun-dev.tistory.com/108)

### Notion API 를 Blog Database 로 쓰기

  <hr />

https://www.notion.so/my-integrations 에서 API 키 받아오기 가능
