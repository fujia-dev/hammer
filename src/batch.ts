/*
 * @Author: fujia
 * @Date: 2021-11-16 17:22:29
 * @LastEditTime: 2022-05-07 09:36:35
 * @LastEditors: fujia(as default)
 * @Description: batch the target with specific function
 * @FilePath: /hammer/src/batch.ts
 */
export function batch(fn: any) {
  return (target: unknown, ...rest: any[]) => {
    if (typeof fn === 'function') {
      if (Array.isArray(target)) {
        return target.map((t) => {
          return fn.call(t, ...rest);
        });
      }
      return fn.call(target, ...rest);
    }
  };
}
