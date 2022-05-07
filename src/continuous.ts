/*
 * @Author: fujia
 * @Date: 2021-11-16 17:36:29
 * @LastEditTime: 2022-05-07 09:38:05
 * @LastEditors: fujia(as default)
 * @Description: it's functionality like reduce but more flexible
 * @FilePath: /hammer/src/continuous.ts
 */
export function continuous<T>(fn: CallableFunction) {
  return (...args: T[]) => {
    return args.reduce((a, b) => fn(a, b));
  };
}
