/*
 * @Author: fujia
 * @Date: 2021-11-16 16:07:07
 * @LastEditTime: 2022-05-07 09:38:18
 * @LastEditors: fujia(as default)
 * @Description: A function will be executed one time in specific time.
 * @FilePath: /hammer/src/debounce.ts
 */
export function debounce(fn: any, ms = 100) {
  let debounceTimer: any;

  return (...args: any[]) => {
    if (debounceTimer) clearTimeout(debounceTimer);

    if (typeof fn === 'function') {
      debounceTimer = setTimeout(() => {
        fn.apply(...args);
      }, ms);
    }
  };
}
