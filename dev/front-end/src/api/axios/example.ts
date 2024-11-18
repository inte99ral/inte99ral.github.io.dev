import axios, { AxiosInstance } from 'axios';

const customAxiosArr: AxiosInstance[] = [];

/**
 * @description
 * Custom Axios 를 생성하여 배열에 저장하고 리턴한다.
 * 생성된 시점에 로컬스토리지를 확인하고 access token 이 존재할 경우 헤더에 넣는다.
 *
 * @author inte
 */
const createAxiosApi = (url?: string) => {
  const AxiosApi = axios.create({
    baseURL: process.env.REACT_APP_SERVER + (url ? url : ''),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  customAxiosArr.push(AxiosApi);
  if (localStorage.getItem('Authorization')) {
    AxiosApi.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
      'Authorization',
    )}`;
  }
  return AxiosApi;
};

/**
 * @description
 * 생성된 Custom Axios 들에 accessToken 정보를 기입한다.
 *
 * @author inte
 */
const setAccessToken = (accessToken?: string) => {
  if (accessToken) {
    customAxiosArr.map((customAxios: AxiosInstance) => {
      customAxios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    });
  }
};

/**
 * @description
 * 미완성 코드 - 생성된 Custom Axios 들에 Intercept 조건을 기입한다.
 *
 * @author inte
 */
const setInterceptor = () => {
  customAxiosArr.map((customAxios: AxiosInstance) => {
    customAxios.interceptors.request.use(
      config => {
        // if 문에 조건 집어넣기
        return config;
      },
      error => {
        Promise.reject(error);
      },
    );
  });
};

export { createAxiosApi, setAccessToken, setInterceptor };