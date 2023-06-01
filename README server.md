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

<br/>

- ### server 세팅

  <hr />

  - 서버 예제로 구글 스프레드 시트를 활용할 것