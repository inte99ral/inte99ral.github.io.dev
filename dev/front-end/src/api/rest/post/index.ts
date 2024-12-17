// # src/api/rest/post/index.tsx

// ## Documentation ==========================================================
/**
 * @description
 *
 * 포스팅 될 글들을 마크다운 양식으로 다루는 함수들 입니다.
 *
 * @author inte99ral
 * @version 2024-12-13
 */

// ## Import Declaration =====================================================

// ### API & Library:

import { AxiosApi } from 'api/axios';

// ## Variable & Constant ====================================================

const postAxios = AxiosApi.getAPI().getInstance('post');

// ## Function ===============================================================

export const getPost = (id: number) => {
  return new Promise<string>((resolve, reject) => {
    postAxios
      ?.get(`/${id}.md`, { responseType: 'text' })
      .then((responce) => {
        resolve(responce.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
