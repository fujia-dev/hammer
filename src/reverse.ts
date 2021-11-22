/*
 * @Author: fujia
 * @Date: 2021-11-16 17:49:44
 * @LastEditTime: 2021-11-22 21:55:06
 * @LastEditors: fujia(as default)
 * @Description:
 * @FilePath: /hammer/src/reverse.ts
 */

export function reverseFuncArgs(fn: any) {
  return (...args: any) => {
    if (typeof fn === 'function') {
      return fn.apply(args.reverse());
    }
  }
}
