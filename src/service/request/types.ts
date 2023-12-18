import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

/**
 * 接口通用返回参数
 */
export interface ApiResponse<T> {
  code: number;
  msg: string;
  data: T;
}

/**
 * 请求配置属性
 */
export interface RequestOptions {
  showLoading?: boolean; // 是否展示 Loading 动画
  showErrorMessage?: boolean; // 是否弹窗展示异常信息
  transform?: boolean; // 是否进行数据转换
}

/**
 * 拦截器钩子
 */
export interface InterceptorHooks {
  beforeRequestCallback?: (request: ExpandAxiosRequestConfig) => void;
  beforeResponseCallback?: (response: ExpandAxiosResponse) => void;
}

/**
 * 拓展自定义请求配置
 */
export interface ExpandAxiosRequestConfig<D = any> extends AxiosRequestConfig<D> {
  interceptorHooks?: InterceptorHooks;
  requestOptions?: RequestOptions;
}

/**
 * 拓展 axios 请求配置
 */
export interface ExpandInternalAxiosRequestConfig<D = any> extends InternalAxiosRequestConfig<D> {
  interceptorHooks?: InterceptorHooks;
  requestOptions?: RequestOptions;
}

/**
 * 拓展 axios 响应配置
 */
export interface ExpandAxiosResponse<T = any, D = any> extends AxiosResponse<T, D> {
  config: ExpandInternalAxiosRequestConfig<D>;
}
