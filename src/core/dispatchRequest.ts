/*
 * @Author: GZH
 * @Date: 2021-08-22 10:08:08
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-02 21:03:34
 * @FilePath: \ts-axios\src\core\dispatchRequest.ts
 * @Description:
 */
import { transformRequest, transformResponse } from '../helpers/data'
import { flattenHeaders, processHeaders } from '../helpers/headers'
import { buildURL } from '../helpers/url'
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from '../type'
import xhr from './xhr'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  precessCofig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function precessCofig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeader(config)
  config.data = transformRequestData(config)
  config.headers = flattenHeaders(config.headers, config.method!)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url!, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeader(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
