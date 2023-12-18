import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ApiResponse } from "./types";

class BasicRequest {
  config: AxiosRequestConfig;
  instance: AxiosInstance;
  // interceptorHooks?: InterceptorHooks;

  constructor(options: AxiosRequestConfig) {
    this.config = options;
    this.instance = axios.create(options);
    this._setupInterceptor();
  }

  // 配置拦截器
  private _setupInterceptor(): void {}

  private _request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, ApiResponse<T>>(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this._request({ ...config, method: "GET" });
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this._request({ ...config, method: "POST" });
  }

  delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this._request({ ...config, method: "DELETE" });
  }

  patch<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this._request({ ...config, method: "PATCH" });
  }
}

export default BasicRequest;
