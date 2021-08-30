/*
 * @Author: GZH
 * @Date: 2021-08-30 20:17:55
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-30 20:26:43
 * @FilePath: \ts-axios\src\core\interceptorManager.ts
 * @Description:
 */

import { RejectedFn, ResolvedFn } from '../type'

interface Interceptor<T> {
  resolved: ResolvedFn<T>
  rejected?: RejectedFn
}

export default class InterceptorManager<T> {
  private interceptors: Array<Interceptor<T> | null>

  constructor() {
    this.interceptors = []
  }

  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number {
    this.interceptors.push({
      resolved,
      rejected
    })
    return this.interceptors.length - 1
  }

  forEach(fn: (interceptor: Interceptor<T>) => void): void {
    this.interceptors.forEach(interceptor => {
      if (interceptor !== null) {
        fn(interceptor)
      }
    })
  }

  eject(id: number): void {
    if (this.interceptors[id]) {
      this.interceptors[id] = null
    }
  }
}
