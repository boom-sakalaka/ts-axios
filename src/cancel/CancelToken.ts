/*
 * @Author: GZH
 * @Date: 2021-09-05 11:15:08
 * @LastEditors: GZH
 * @LastEditTime: 2021-09-05 12:18:08
 * @FilePath: \ts-axios\src\cancel\CancelToken.ts
 * @Description:
 */
import { Canceler, CancelExecutor, CancelTokenSource } from '../type'
import Cancel from './Cancel'

interface ResolvePromise {
  (reason: Cancel): void
}

export default class CancelToken {
  promise: Promise<Cancel>
  reason?: Cancel

  constructor(executor: CancelExecutor) {
    let resolvePromise: ResolvePromise
    this.promise = new Promise<Cancel>(resolve => {
      resolvePromise = resolve
    })

    executor(message => {
      if (this.reason) {
        return
      }
      this.reason = new Cancel(message)
      resolvePromise(this.reason as Cancel)
    })
  }

  throwIfRequested() {
    if (this.reason) {
      throw this.reason
    }
  }

  static source(): CancelTokenSource {
    let cancel!: Canceler
    const token = new CancelToken(c => {
      cancel = c
    })

    return {
      cancel,
      token
    }
  }
}
