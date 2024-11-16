import { RootStore } from "@/stores";
import { StoreValue } from "antd/es/form/interface";
import axios, { AxiosInstance, CancelTokenSource } from "axios";

const BASE_URL = "http://localhost:5005/";

export default class Request {
  rootStore: RootStore;
  cancelTokenSource: CancelTokenSource;
  axiosInstance: AxiosInstance;

  constructor(args: { rootStore: RootStore }) {
    this.rootStore = args.rootStore;
    this.cancelTokenSource = axios.CancelToken.source();
  }

  getHeaders = () => {
    return {
      "Content-Type": "application/json",
    };
  };

  requestFactory(
    url: string,
    method: string,
    config: StoreValue,
    baseURL: string
  ) {
    return new Promise((resolve, reject) => {
      const baseEndpoint = baseURL || BASE_URL;
      this.cancelTokenSource = axios.CancelToken.source();

      const executeRequest = () => {
        const headers = this.getHeaders();

        axios({
          baseURL: baseEndpoint,
          url,
          method,
          headers,
          cancelToken: this.cancelTokenSource.token,
          ...(config || {}),
        })
          .then((response) => {
            const data = response;
            resolve(data);
          })
          .catch((err) => {
            if (err?.message) {
              const error = {
                title: "Error",
                description: err.message,
              };
              reject(error);
            }

            const defaultError = {
              title: "Error",
              description: "An unknown error occurred",
            };
            reject(defaultError);
          });
      };

      executeRequest();
    });
  }

  get = (url: string, config: StoreValue = {}, baseURL: string = null) =>
    this.requestFactory(url, "get", config, baseURL);

  post = (
    url: string,
    data = {},
    config: StoreValue = {},
    baseURL: string = null
  ) => this.requestFactory(url, "post", { data, ...config }, baseURL);

  put = (
    url: string,
    data = {},
    config: StoreValue = {},
    baseURL: string = null
  ) => this.requestFactory(url, "put", { data, ...config }, baseURL);

  patch = (
    url: string,
    data = {},
    config: StoreValue = {},
    baseURL: string = null
  ) => this.requestFactory(url, "patch", { data, ...config }, baseURL);

  del = (
    url: string,
    data = {},
    config: StoreValue = {},
    baseURL: string = null
  ) => this.requestFactory(url, "delete", { data, ...config }, baseURL);
}
