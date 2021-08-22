/*
 * @Author: GZH
 * @Date: 2021-08-22 10:08:08
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-22 20:12:34
 * @FilePath: \ts-axios\src\index.ts
 * @Description:
 */
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'
import { buildURL } from './helpers/url'
import { AxiosRequestConfig } from './type'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  precessCofig(config)
  xhr(config)
}

function precessCofig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeader(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeader(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default axios
