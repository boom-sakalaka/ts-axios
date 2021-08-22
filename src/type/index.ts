/*
 * @Author: GZH
 * @Date: 2021-08-22 10:12:17
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-22 10:57:11
 * @FilePath: \Project+++++++++++++++++++++++++++++++\ts-axios\src\type\index.ts
 * @Description:
 */

export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  param?: any
}
