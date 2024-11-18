// API & Library
import { createAxiosApi, setAccessToken } from 'api/axios';

// Init
const authAxios = createAxiosApi('auth-service');

/**
 * @description
 * http://k7b2071.p.ssafy.io/auth-service/ 이하의 url의 요청을 보낼 프라미스 객체를 리턴하는 함수들
 *
 * @example
 * ```
 * // rest 라이브러리 임포트
 * import { auth } from 'api/rest'
 *
 * // IFFE 방식 또는 프라미스 객체를 활용하는 어떤 방법이던 상관없음
 * (async () => { await auth.login})();
 * ```
 *
 * @author inte
 */
export default {
  /**
   * @description
   * 로그인 페이지로 즉시 이동
   *
   * @params {string?} socialLoginType - 로그인 타입
   * @author inte
   */
  login: (socialLoginType: string) => {
    console.log('[로그인 시도] : ', socialLoginType);
    console.log('[이전 주소 저장]', location.pathname);
    localStorage.setItem('URL', location.pathname);
    console.log(authAxios.defaults.baseURL);
    location.href = `${authAxios.defaults.baseURL}/login/${socialLoginType}`;
    return;
  },

  /**
   * @description
   * 로그아웃 후, 랜딩페이지로 이동
   *
   * @author inte
   */
  logout: () => {
    console.log('[로그아웃 시도]');
    localStorage.removeItem('URL');
    localStorage.removeItem('Authorization');
    location.href = `/`;
    return;
  },

  /**
   * @description
   * 구글 로그인 페이지에서 리다이렉트 된 후, 서버에 구글 승인 코드를 전송하는 콜백함수
   *
   * @author inte
   */
  loginCallback: (socialLoginType: string, code: string) => {
    return new Promise((resolve, reject) => {
      authAxios
        .get(`/login/${socialLoginType}/callback?code=${code}`)
        .then(response => {
          const ACCESS_TOKEN = response.headers['authorization'];
          console.log('[받아온 토큰] : ', response.headers['authorization']);
          setAccessToken(ACCESS_TOKEN);
          localStorage.setItem('Authorization', ACCESS_TOKEN || '');
          resolve(ACCESS_TOKEN);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  /**
   * @description
   * 엑세스 토큰을 재발급받는다.
   *
   * @author inte
   */
  tokenRefresh: () => {
    return new Promise((resolve, reject) => {
      authAxios
        .get('/refresh')
        .then(response => {
          console.log('몰랑');
          resolve(response);
          // const ACCESS_TOKEN = response.headers['authorization'];
          // console.log('[받아온 토큰] : ', response.headers['authorization']);
          // setAccessToken(ACCESS_TOKEN);
          // localStorage.setItem('Authorization', ACCESS_TOKEN || '');
          // resolve(ACCESS_TOKEN);
        })
        .catch(error => {
          console.log('진짜안되는건 선넘었지');
          reject(error);
        });
    });
  },

  /**
   * @description auth 서버의 token code 들을 받아옴
   *
   * @author inte
   */
  getTokenCodes: () => {
    interface responseType {
      token_code_id: string;
      token: string;
    }

    return new Promise<responseType[]>((resolve, reject) => {
      authAxios
        .get(`/token-codes`)
        .then(response => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  /**
   * @description
   * 사용자의 토큰들을 받아온다.
   *
   * @author inte
   */
  getTokens: () => {
    interface responseType {
      id: number;
      value: string;
      email: string;
      jiraAccoundId: null | string;
      tokenCodeId: string;
    }

    return new Promise<responseType[]>((resolve, reject) => {
      authAxios
        .get(`/tokens`)
        .then(response => {
          console.log('[사용자 토큰 반환]', response.data);
          resolve(response.data);
        })
        .catch(error => {
          console.log('error');
          reject(error);
        });
    });
  },

  /**
   * @description
   * 사용자의 토큰을 연동하는 API.
   *
   * @author bell
   */
  postLinkageToken: async (tokenCodeId: string, value: string, email?: string) => {
    await authAxios.post('/tokens', {
      email,
      tokenCodeId,
      value,
    });
  },

  /**
   * @description
   * 사용자의 연동한 토큰을 삭제
   *
   * @author bell
   */
  deleteLinkageToken: async (tokenCodeId: string) => {
    await authAxios.delete(`/tokens/${tokenCodeId}`);
  },
};