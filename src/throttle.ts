/*
 * @Author: fujia
 * @Date: 2021-11-16 15:57:31
 * @LastEditTime: 2021-11-16 17:48:01
 * @LastEditors: fujia(as default)
 * @Description: To make a function invoked one time in specific time. 
 * @FilePath: /hammer/src/throttle.ts
 */
export default function throttle(fn: Function, ms = 100) {
  let throttleTimer: unknown = null;

  return (...args: any) => {
    if (!throttleTimer && typeof fn === 'function') {
      const ret = fn.apply(args);
      throttleTimer = setTimeout(() => {
        throttleTimer = null;
      }, ms);

      return ret;
    }
  }
}