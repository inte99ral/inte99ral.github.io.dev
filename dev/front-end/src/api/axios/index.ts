import axios, { AxiosInstance } from 'axios';

/**
 * @description
 * 모든 Axios 객체를 중앙통제하는 싱글턴 API 인스턴스 입니다.
 * 다른 api 주소에서 받아올 경우에는 Axios 객체를 새로 만들어 지정해줄 수 있습니다.
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
 * @author inte99ral
 * @version 2024-11-18
 */
export class AxiosApi {
  // ## Private ==================================================
  private static apiInstance: AxiosApi;
  private axiosMap: Map<string, AxiosInstance>;

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

  // ## Public ===================================================
  public static getAPI = () => {
    if (!AxiosApi.apiInstance) AxiosApi.apiInstance = new AxiosApi();
    return AxiosApi.apiInstance;
  };

  public getInstance = (url: string = 'default', isBaseUrl: boolean = true) => {
    if (!this.axiosMap.has(url)) {
      this.axiosMap.set(
        'url',
        axios.create({
          baseURL: (isBaseUrl ? process.env.REACT_APP_SERVER : '') + url,
          headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        }),
      );
    }

    return this.axiosMap.get(url);
  };

  /**
   *
   * @param accessToken axios에 입력할 엑세스토큰
   * @param axiosUrlArr 대상 axios의 url, 값이 없다면 모든 axios를 대상으로 합니다.
   */
  public setAccessToken = (accessToken: string, ...axiosUrlArr: string[]) => {
    this.axiosMap.forEach((axiosInstance: AxiosInstance, axiosUrl: string) => {
      if (axiosUrlArr.length != 0 || !axiosUrlArr.includes(axiosUrl)) return;
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    });
  };

  /**
   *
   * @param interceptFunction axios에 입력할 인터셉터 함수
   * @param axiosUrlArr 대상 axios의 url, 값이 없다면 모든 axios를 대상으로 합니다.
   */
  public setRequestInterceptor = (interceptFunction: boolean, ...axiosUrlArr: string[]) => {
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
  };
}
