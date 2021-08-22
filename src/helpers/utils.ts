/*
 * @Author: GZH
 * @Date: 2021-08-22 11:41:32
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-22 11:54:32
 * @FilePath: \ts-axios\src\helpers\utils.ts
 * @Description:
 */

const toString = Object.prototype.toString
export function isData(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is object {
  return val !== null && typeof val === 'object'
}
