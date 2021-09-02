import { AxiosRequestConfig } from './type'

/*
 * @Author: GZH
 * @Date: 2021-09-02 20:05:44
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-02 20:16:53
 * @FilePath: \ts-axios\src\default.ts
 * @Description:
 */
const defaults: AxiosRequestConfig = {
  method: 'get',

  timeout: 0,

  headers: {
    common: {
      Accept: 'application/json, text/plain,*/*'
    }
  }
}

const methodsNoData = ['delete', 'get', 'head', 'options']

methodsNoData.forEach(method => {
  defaults.headers[method] = {}
})

const methodsWithData = ['post', 'put', 'patch']

methodsWithData.forEach(method => {
  defaults.headers[method] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default defaults
