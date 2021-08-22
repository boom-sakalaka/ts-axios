/*
 * @Author: GZH
 * @Date: 2021-08-22 19:49:10
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-22 19:54:01
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
