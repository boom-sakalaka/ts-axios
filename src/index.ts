/*
 * @Author: GZH
 * @Date: 2021-08-22 10:08:08
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-22 11:01:20
 * @FilePath: \Project+++++++++++++++++++++++++++++++\ts-axios\src\index.ts
 * @Description:
 */
import { AxiosRequestConfig } from './type'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  xhr(config)
}

export default axios
