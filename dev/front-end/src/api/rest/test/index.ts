// # src/api/rest/test/index.tsx
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

export const test0 = async () => {
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
