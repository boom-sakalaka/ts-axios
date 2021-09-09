/*
 * @Author: GZH
 * @Date: 2021-08-28 20:55:01
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-09 20:59:57
 * @FilePath: \ts-axios\src\axios.ts
 * @Description:
 */

import Axios from './core/Axios'
import { AxiosRequestConfig, AxiosStatic } from './type'
import { extend } from './helpers/utils'
import defaults from './default'
import mergeConfig from './core/mergeConfig'
import CancelToken from './cancel/CancelToken'
import Cancel, { isCancel } from './cancel/Cancel'

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

axios.CancelToken = CancelToken
axios.Cancel = Cancel
axios.isCancel = isCancel

axios.all = function all(promises) {
  return Promise.all(promises)
}

axios.spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr)
  }
}

axios.Axios = Axios

export default axios
