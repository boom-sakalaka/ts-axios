/*
 * @Author: GZH
 * @Date: 2021-08-22 11:41:32
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-22 19:52:59
 * @FilePath: \ts-axios\src\helpers\utils.ts
 * @Description:
 */

const toString = Object.prototype.toString
export function isData(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
