/*
 * @Author: GZH
 * @Date: 2021-08-25 20:59:56
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-25 21:03:34
 * @FilePath: \ts-axios\src\helpers\error.ts
 * @Description:
 */
import { AxiosRequestConfig, AxiosResponse } from '../type'

export class AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse

  /* istanbul ignore next */
  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message)

    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true

    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
): AxiosError {
  const error = new AxiosError(message, config, code, request, response)

  return error
}
