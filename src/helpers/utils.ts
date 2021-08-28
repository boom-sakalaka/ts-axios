/*
 * @Author: GZH
 * @Date: 2021-08-22 11:41:32
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-28 22:16:27
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

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
