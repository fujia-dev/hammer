/*
 * @Author: fujia
 * @Date: 2021-11-16 17:49:44
 * @LastEditTime: 2021-11-16 17:51:20
 * @LastEditors: fujia(as default)
 * @Description: 
 * @FilePath: /hammer/src/reverse.ts
 */

export function reverseFuncArgs(fn: Function) {
  return (...args: any) => {
    if (typeof fn === 'function') {
      return fn.apply(args.reverse());
    }
  }
}
