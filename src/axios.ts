/*
 * @Author: GZH
 * @Date: 2021-08-28 20:55:01
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-02 20:20:14
 * @FilePath: \ts-axios\src\axios.ts
 * @Description:
 */

import Axios from './core/Axios'
import { AxiosInstance, AxiosRequestConfig } from './type'
import { extend } from './helpers/utils'
import defaults from './default'

function creataInstance(config: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(config)
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = creataInstance(defaults)

export default axios
