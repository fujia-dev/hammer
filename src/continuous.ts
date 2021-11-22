/*
 * @Author: fujia
 * @Date: 2021-11-16 17:36:29
 * @LastEditTime: 2021-11-22 21:17:45
 * @LastEditors: fujia(as default)
 * @Description: it's functionality like reduce but more flexible
 * @FilePath: /hammer/src/continuous.ts
 */
export default function continuous<T>(fn: CallableFunction) {
  return (...args: T[]) => {
    return args.reduce((a, b) => fn(a, b))
  }
}
