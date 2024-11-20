// # src/api/rest/test/index.tsx
// ## API & Library ==================================================

import { AxiosApi } from 'api/axios';

// ## Variable & Constant ============================================

const testAxios = AxiosApi.getAPI().getInstance('default');

// ## Function =======================================================

const testOn = async () => {
  return new Promise((resolve, reject) => {
    testAxios
      ?.get(`/data.json`)
      .then((response) => {
        console.log('테스트 1:', response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.error('에러 1:', error);
        reject(error);
      });
  });
};

const testLocal = async () => {
  return new Promise((resolve, reject) => {
    // fetch 옵션의 상세 설명 https://developer.mozilla.org/ko/docs/Web/API/Window/fetch
    fetch('server/data.json', {
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
        console.log('JSON 데이터 로드 완료:', data);
        resolve(data);
      })
      .catch((error) => {
        console.error('JSON 파일 로드 중 오류 발생:', error);
        reject(error);
      });
  });
};

// ## Output =========================================================

export default { testLocal, testOn };
