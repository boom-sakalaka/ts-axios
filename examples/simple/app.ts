/*
 * @Author: GZH
 * @Date: 2021-08-22 11:25:53
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-22 11:25:54
 * @FilePath: \ts-axios\examples\simple\app.ts
 * @Description:
 */
import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
