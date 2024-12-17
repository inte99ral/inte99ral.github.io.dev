// # src/api/axios/index.tsx

// ## Documentation ==========================================================
/**
 * @description
 *
 * 모든 Axios 객체를 중앙통제하는 싱글턴 API 인스턴스 입니다.
 *
 * 다른 api 주소에서 받아올 경우에는 Axios 객체를 새로 만들어 지정해줄 수 있습니다.
 *
 * @author inte99ral
 * @version 2024-11-18
 */

// ## Import Declaration =====================================================

// ### API & Library:

import axios, { AxiosInstance } from 'axios';

// ## Interface & Class ======================================================

// ### AxiosApi
/**
 * @description
 * 모든 Axios 객체를 중앙통제하는 싱글턴 API 인스턴스 입니다.
 *
 * 다른 api 주소에서 받아올 경우에는 Axios 객체를 새로 만들어 지정해줄 수 있습니다.
 *
 * @example
 * ```
 * // * Axios API 임포트하여 사용합니다.
 * import { AxiosApi } from 'api/axios';
 *
 * // * 다음과 같이 객체를 받아옵니다. base url 과 객체명을 통일하는 것을 권장합니다.
 * const『AXIOS_INSTANCE_NAME』 = AxiosApi.getAPI().getInstance('『BASE_URL』');
 *
 * // * 엑시오스 인스턴스 객체에서는 다음과 같이 url 요청을 보낼 수 있습니다.
 * 『AXIOS_INSTANCE_NAME』.get(`『REQUEST_URL』`)
 * ```
 *
 * @author inte99ral
 * @version 2024-11-18
 */
export class AxiosApi {
  // #### Private:
  // ##### Private > Field

  private static apiInstance: AxiosApi;
  private axiosMap: Map<string, AxiosInstance>;

  // ##### Private > Method

  private constructor() {
    this.axiosMap = new Map<string, AxiosInstance>();
    this.axiosMap.set(
      'default',
      axios.create({
        baseURL: process.env.REACT_APP_SERVER,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      }),
    );
  }

  // #### Public:

  // ##### Public > Method

  // ###### Public > Method > getAPI

  public static getAPI() {
    if (!AxiosApi.apiInstance) AxiosApi.apiInstance = new AxiosApi();
    return AxiosApi.apiInstance;
  }

  // ###### Public > Method > getInstance

  public getInstance(url = 'default', isBaseUrl = true) {
    if (!this.axiosMap.has(url)) {
      this.axiosMap.set(
        url,
        axios.create({
          baseURL: (isBaseUrl ? process.env.REACT_APP_SERVER : '') + url,
          headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        }),
      );
    }
    return this.axiosMap.get(url);
  }

  // ###### Public > Method > setAccessToken
  /**
   *
   * @param accessToken axios에 입력할 엑세스토큰
   * @param axiosUrlArr 대상 axios의 url, 값이 없다면 모든 axios를 대상으로 합니다.
   */
  public setAccessToken(accessToken: string, ...axiosUrlArr: string[]) {
    this.axiosMap.forEach((axiosInstance: AxiosInstance, axiosUrl: string) => {
      if (axiosUrlArr.length != 0 || !axiosUrlArr.includes(axiosUrl)) return;
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    });
  }

  // ###### Public > Method > setRequestInterceptor
  /**
   *
   * @param interceptFunction axios에 입력할 인터셉터 함수
   * @param axiosUrlArr 대상 axios의 url, 값이 없다면 모든 axios를 대상으로 합니다.
   */
  public setRequestInterceptor(interceptFunction: boolean, ...axiosUrlArr: string[]) {
    this.axiosMap.forEach((axiosInstance: AxiosInstance, axiosUrl: string) => {
      if (axiosUrlArr.length != 0 || !axiosUrlArr.includes(axiosUrl)) return;
      axiosInstance.interceptors.request.use(
        (config) => {
          if (interceptFunction) throw new Error('Error');
          return config;
        },
        (error) => {
          Promise.reject(error);
        },
      );
    });
  }
}
