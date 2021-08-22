/*
 * @Author: GZH
 * @Date: 2021-08-22 19:49:10
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-22 20:58:15
 * @FilePath: \ts-axios\src\helpers\data.ts
 * @Description:
 */
import { isPlainObject } from './utils'

export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothing
    }
  }
  return data
}
