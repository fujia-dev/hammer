/*
 * @Author: fujia
 * @Date: 2021-11-16 17:22:29
 * @LastEditTime: 2021-11-16 17:46:17
 * @LastEditors: fujia(as default)
 * @Description: batch the target with specific function
 * @FilePath: /hammer/src/batch.ts
 */
export default function batch(fn: Function) {
  return (target: unknown, ...args: any) => {
    if (typeof fn === 'function') {
      if (Array.isArray(target)) {
        return target.map(t => {
            return fn.call(t, ...args);
        });
      }
      return fn.call(target, ...args);
    }
  }
}
