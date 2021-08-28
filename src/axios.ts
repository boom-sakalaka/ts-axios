/*
 * @Author: GZH
 * @Date: 2021-08-28 20:55:01
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-28 22:25:28
 * @FilePath: \ts-axios\src\axios.ts
 * @Description:
 */

import Axios from './core/Axios'
import { AxiosInstance } from './type'
import { extend } from './helpers/utils'

function creataInstance(): AxiosInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = creataInstance()

export default axios
