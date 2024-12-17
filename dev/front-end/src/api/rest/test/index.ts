// # src/api/rest/test/index.tsx
/**
 * @description
 * 모든 Axios 객체를 중앙통제하는 싱글턴 API 인스턴스 입니다.
 *
 * 다른 api 주소에서 받아올 경우에는 Axios 객체를 새로 만들어 지정해줄 수 있습니다.
 *
 * @example
 * ```
 * // * rest 라이브러리 임포트하여 사용합니다.
 * import {『AXIOS_FUNCTION』} from 'api/rest/『AXIOS_OBJECT_NAME』'
 *
 * // * IFFE 방식 또는 프라미스 객체를 활용하는 어떤 방법이던 상관없습니다.
 * (async () => { const responceData = await 『AXIOS_FUNCTION』(); })();
 * ```
 *
 * @author inte99ral
 * @version 2024-11-18
 */

// ## API & Library ==================================================

import { AxiosApi } from 'api/axios';

// ## Interface & Type ===============================================

export interface TestData {
  [key: string]: string | number | boolean; // 인덱스 시그니처 - 동적 키 접근 허용
  id: number;
  name: string;
}

// ## Variable & Constant ============================================

const testAxios = AxiosApi.getAPI().getInstance('test');

// ## Function =======================================================

export const getTestData = () => {
  return new Promise<TestData[]>((resolve, reject) => {
    testAxios
      ?.get(`/test-data.json`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getTestDataByFetch = () => {
  return new Promise((resolve, reject) => {
    // fetch 옵션의 상세 설명 https://developer.mozilla.org/ko/docs/Web/API/Window/fetch
    fetch('server/test/data.json', {
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

// ## Output =========================================================

// export default { getData, Data: {} as Data };
