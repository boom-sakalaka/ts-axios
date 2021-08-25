/*
 * @Author: GZH
 * @Date: 2021-08-22 10:57:25
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-25 21:07:22
 * @FilePath: \ts-axios\src\xhr.ts
 * @Description:
 */
import { parseHeaders } from './helpers/headers'
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from './type'
import { createError } from './helpers/error'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout } = config
    // 创XMLHttpRequest 对象
    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }

    // 设置超时
    if (timeout) {
      request.timeout = timeout
    }

    // 请求超时后的回调
    request.ontimeout = function handleTimeout() {
      reject(createError(`Timeout of ${timeout} ms exceeded`, config, 'ECONNABORTED', request))
    }
    // 请求报错
    request.onerror = function handleError() {
      reject(createError('Network Error', config, null, request))
    }
    request.open(method.toUpperCase(), url, true)
    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }

      if (request.status === 0) {
        return
      }

      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      // 处理不同status 状况
      handleResponse(response)
    }

    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })
    request.send(data)

    function handleResponse(response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(
          createError(
            `Request failed with status code ${response.status}`,
            config,
            null,
            request,
            response
          )
        )
      }
    }
  })
}
