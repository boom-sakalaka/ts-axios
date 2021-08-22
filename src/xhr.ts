/*
 * @Author: GZH
 * @Date: 2021-08-22 10:57:25
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-22 20:15:11
 * @FilePath: \ts-axios\src\xhr.ts
 * @Description:
 */
import { AxiosRequestConfig } from './type'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', headers } = config
  // 创XMLHttpRequest 对象
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach(name => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })
  request.send(data)
}
