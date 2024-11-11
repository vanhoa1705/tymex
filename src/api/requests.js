import axios from 'axios'
import {
  buildKeyGenerator,
  buildStorage,
  defaultKeyGenerator,
  setupCache,
} from 'axios-cache-interceptor'
import { when } from 'mobx'


export default class Request {
  rootStore
  cancelTokenSource
  axiosInstance

  constructor(args) {
    this.rootStore = args.rootStore
    this.cancelTokenSource = axios.CancelToken.source()

    when(
      () => !!this.rootStore?.cachedStore,
      () => this.initAxiosInstance(this.rootStore.cachedStore?.apiCacheStorage),
    )
  }

  initAxiosInstance(cacheStorage) {
    this.axiosInstance = setupCache(axios.create(), {
      cachePredicate: () => false,
      methods: ['get', 'post'],
      storage: buildStorage(cacheStorage),
      generateKey: buildKeyGenerator((request) => {
        const requestId = defaultKeyGenerator(request)

        const requestGroups = (request)?.requestGroups || []

        if (requestGroups?.length) {
          cacheStorage.saveRequestId(requestId, requestGroups)
        }

        return requestId
      }),
    })

    this.axiosInstance.interceptors.response.use(
      (response) => {
        const { data } = response

        return data || response
      },
      error => Promise.reject(error.response),
    )
  }

  getHeaders = (withCredentials = true) => {
    const { profileStore, authStore } = this.rootStore

    let headers = {
      'Content-Type': 'application/json',
    }

    const { auth } = authStore

    if (auth?.accessToken && withCredentials) {
      headers = {
        ...headers,
        Authorization: `${auth.tokenType || 'Bearer'} ${auth.accessToken}`,
        RoleId: profileStore.currentRoleId,
        UserId: profileStore.userId,
      }
    }

    return headers
  }

  requestFactory(
    url,
    method,
    config,
    baseURL,
  ) {
    return new Promise((resolve, reject) => {
      const { configStore } = this.rootStore

      const baseEndpoint =
        baseURL || `${configStore.apiRegionEndpoint}/${configStore.version}`

      this.cancelTokenSource = axios.CancelToken.source()

      const executeRequest = () => {
        const headers = this.getHeaders()

        this.axiosInstance({
          baseURL: baseEndpoint,
          url,
          method,
          headers,
          cancelToken: this.cancelTokenSource.token,
          withCredentials: window.env?.REACT_APP_IS_WITH_CREDENTIALS,
          ...(config || {}),
        })
          .then((response) => {
            const data = response

            if (data.type < 0) {
              const error = {
                title: 'Error',
                description: data.message || 'An unknown error occurred',
                type: data.type,
                code: data.code,
                payload: data.payload,
              }
              reject(error)
            } else {
              resolve(data)
            }
          })
          .catch((err) => {
            if (err?.status === axios.HttpStatusCode.Unauthorized) {
              this.rootStore?.authStore?.logout()

              // eslint-disable-next-line prefer-promise-reject-errors
              return reject(null)
            }

            if (err?.data) {
              const {
                data: {
                  error: errorTitle,
                  error_description: errorDescription,
                },
              } = err

              if (errorTitle && errorDescription) {
                const errorMessage = {
                  status: err.status,
                  title: errorTitle,
                  description: errorDescription,
                }
                reject(errorMessage)
              }
            }

            if (err?.message) {
              const error = {
                status: err.status,
                title: 'Error',
                description: err.message,
              }
              reject(error)
            }

            const defaultError = {
              title: 'Error',
              description: 'An unknown error occurred',
            }
            reject(defaultError)
          })
      }

      if (!this.isPublicAPI({ url, method, config, baseURL })) {
        this.rootStore.authStore.checkTokenValid().then((valid) => {
          if (valid) {
            executeRequest()
          }
        })
      } else {
        executeRequest()
      }
    })
  }

  get = (
    url,
    config = {},
    baseURL = null,
  ) => this.requestFactory(url, 'get', config, baseURL)

  post = (
    url,
    data = {},
    config = {},
    baseURL = null,
  ) =>
    this.requestFactory(url, 'post', { data, ...config }, baseURL)

  put = (
    url,
    data = {},
    config = {},
    baseURL = null,
  ) =>
    this.requestFactory(url, 'put', { data, ...config }, baseURL)

  patch = (
    url,
    data = {},
    config = {},
    baseURL = null,
  ) =>
    this.requestFactory(url, 'patch', { data, ...config }, baseURL)

  del = (
    url,
    data = {},
    config = {},
    baseURL = null,
  ) =>
    this.requestFactory(
      url,
      'delete',
      { data, ...config },
      baseURL,
    )
}
