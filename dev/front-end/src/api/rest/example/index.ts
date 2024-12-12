// # src/api/rest/『RESTFUL_ID』/index.tsx

// ## Documentation ==========================================================
/**
 * @description
 * REST API 에 맞게 통신 요청/응답 처리를 함수화 한 파일 입니다.
 *
 * base url, 즉 REST 통신의 자원 ID 와 객체명을 통일하는 것을 권장합니다.
 *
 * @example
 * ```
 * // * rest 라이브러리 임포트하여 사용합니다.
 * import {『RESTFUL_FUNCTION』} from 'api/rest/『RESTFUL_ID』'
 *
 * // * 요청/응답은 프라미스 객체로 처리되므로 동기적으로 처리하는 것은 불가능하며 비동기 처리를 해야합니다.
 * // 1. IFFE 방식
 * (async () => { const responceData = await 『RESTFUL_FUNCTION』(); })();
 *
 * // 2. Promise 체이닝
 * 『RESTFUL_FUNCTION』().then((data) => { const responceData = data; });
 * ```
 *
 * @author inte99ral
 * @version 2024-11-18
 */

// ## API & Library ==========================================================

import { AxiosApi } from 'api/axios';

// ## Interface & Class ======================================================

/**
 * @description
 *
 * 응답 데이터의 Interface & Type 입니다.
 *
 * typescript 에서는 응답 데이터의 Type 을 반드시 알아야하는 경우가 있습니다.
 *
 * @example
 * ```
 * // * rest 라이브러리 임포트하여 사용합니다.
 * import {『RESTFUL_FUNCTION』,『RESPONCE_TYPE』} from 'api/rest/『AXIOS_OBJECT_NAME』'
 *
 * // * useState 에 대한 예시는 다음과 같습니다.
 * const [『SETTER』,『GETTER』] = useState<『RESPONCE_TYPE』[]>();
 *
 * (async () => {
 *  『GETTER』(await 『RESTFUL_FUNCTION』());
 * })();
 * ```
 *
 * @author inte99ral
 * @version 2024-11-18
 */
export interface ExampleUser {
  [key: string]: string | number | boolean; // 인덱스 시그니처 - 동적 키 접근 허용
  id: number;
  name: string;
}

// ## Variable & Constant ====================================================

const exampleAxios = AxiosApi.getAPI().getInstance('example');

// ## Function ===============================================================

export const getExampleUserlist = () => {
  return new Promise<ExampleUser[]>((resolve, reject) => {
    exampleAxios
      ?.get(`/user.json`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * @description Axios 객체가 아닌 fetch를 사용한 예시 입니다.
 * @author inte99ral
 * @version 2024-11-18
 */
export const getTestDataByFetch = () => {
  return new Promise((resolve, reject) => {
    // fetch 옵션의 상세 설명 https://developer.mozilla.org/ko/docs/Web/API/Window/fetch
    fetch('server/example/user.json', {
      method: 'GET', // { GET | POST | PUT | DELETE }
      mode: 'cors', // { no-cors | cors "교차 출처(cross-origin) 허용" | same-origin "동일출처만 허용" }
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        // console.log('JSON 데이터 로드 완료:', data);
        resolve(data);
      })
      .catch((error) => {
        // console.error('JSON 파일 로드 중 오류 발생:', error);
        reject(error);
      });
  });
};
