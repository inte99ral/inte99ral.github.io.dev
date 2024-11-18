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
