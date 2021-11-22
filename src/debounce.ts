/*
 * @Author: fujia
 * @Date: 2021-11-16 16:07:07
 * @LastEditTime: 2021-11-22 21:54:11
 * @LastEditors: fujia(as default)
 * @Description: A function will be executed one time in specific time.
 * @FilePath: /hammer/src/debounce.ts
 */
export default function debounce(fn: any, ms = 100) {
  let debounceTimer: any;

  return (...args: any[]) => {
    if (debounceTimer) clearTimeout(debounceTimer);

    if (typeof fn === 'function') {
      debounceTimer = setTimeout(() => {
        fn.apply(...args);
      }, ms);
    }
  }
}
