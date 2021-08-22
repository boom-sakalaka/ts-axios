/*
 * @Author: GZH
 * @Date: 2021-08-22 10:08:08
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-22 12:11:04
 * @FilePath: \ts-axios\src\index.ts
 * @Description:
 */
import { buildURL } from './helpers/url'
import { AxiosRequestConfig } from './type'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  precessCofig(config)
  xhr(config)
}

function precessCofig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

export default axios
