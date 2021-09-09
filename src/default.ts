import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'
import { AxiosRequestConfig } from './type'

/*
 * @Author: GZH
 * @Date: 2021-09-02 20:05:44
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-09 20:35:43
 * @FilePath: \ts-axios\src\default.ts
 * @Description:
 */
const defaults: AxiosRequestConfig = {
  method: 'get',

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',

  xsrfHeaderName: 'X-XSRF-TOKEN',

  headers: {
    common: {
      Accept: 'application/json, text/plain,*/*'
    }
  },

  // 请求数据默认修改配置
  transformRequest: [
    function(data: any, headers: any): any {
      processHeaders(headers, data)
      return transformRequest(data)
    }
  ],

  // 获取数据默认修改配置
  transformResponse: [
    function(data: any): any {
      return transformResponse(data)
    }
  ],

  validateStatus(status: number): boolean {
    return status >= 200 && status < 300
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
