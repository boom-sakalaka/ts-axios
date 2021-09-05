/*
 * @Author: GZH
 * @Date: 2021-09-05 12:04:20
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-05 12:05:22
 * @FilePath: \ts-axios\src\cancel\Cancel.ts
 * @Description:
 */
export default class Cancel {
  message?: string

  constructor(message?: string) {
    this.message = message
  }
}

export function isCancel(value: any): boolean {
  return value instanceof Cancel
}
