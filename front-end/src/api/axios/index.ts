import axios, { AxiosInstance } from 'axios';

export class AxiosApi {
  private static instance: AxiosApi;
  private axiosObj: AxiosInstance;

  private constructor() {
    this.axiosObj = axios.create({
      baseURL: process.env.REACT_APP_SERVER,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  }

  public getAxios() {
    return this.axiosObj;
  }

  public setToken(token: string) {
    this.axiosObj.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return;
  }

  public setInterceptor() {
    this.axiosObj.interceptors.request.use(
      (config) => {
        // if intercept 조건
        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );
    return;
  }

  public static getInstance() {
    if (!AxiosApi.instance) AxiosApi.instance = new AxiosApi();
    return AxiosApi.instance;
  }
}
