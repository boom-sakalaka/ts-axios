/*
 * @Author: GZH
 * @Date: 2021-08-22 10:57:25
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-22 11:00:48
 * @FilePath: \Project+++++++++++++++++++++++++++++++\ts-axios\src\xhr.ts
 * @Description:
 */
import { AxiosRequestConfig } from './type'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config
  // 创XMLHttpRequest 对象
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
