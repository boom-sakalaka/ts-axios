/*
 * @Author: GZH
 * @Date: 2021-08-28 20:55:01
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-02 22:20:17
 * @FilePath: \ts-axios\src\axios.ts
 * @Description:
 */

import Axios from './core/Axios'
import { AxiosRequestConfig, AxiosStatic } from './type'
import { extend } from './helpers/utils'
import defaults from './default'
import mergeConfig from './core/mergeConfig'

function creataInstance(config: AxiosRequestConfig): AxiosStatic {
  const context = new Axios(config)
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosStatic
}

const axios = creataInstance(defaults)

axios.create = function create(config) {
  return creataInstance(mergeConfig(defaults, config))
}

export default axios
