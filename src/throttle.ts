/*
 * @Author: fujia
 * @Date: 2021-11-16 15:57:31
 * @LastEditTime: 2022-05-07 09:46:28
 * @LastEditors: fujia(as default)
 * @Description: To make a function invoked one time in specific time.
 * @FilePath: /hammer/src/throttle.ts
 */
export function throttle(fn: any, ms = 100) {
  let throttleTimer: unknown = null;

  return (...args: any) => {
    if (!throttleTimer && typeof fn === 'function') {
      const ret = fn.apply(args);
      throttleTimer = setTimeout(() => {
        throttleTimer = null;
      }, ms);

      return ret;
    }
  };
}
