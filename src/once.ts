/*
 * @Author: fujia
 * @Date: 2021-11-16 15:21:13
 * @LastEditTime: 2021-11-16 17:47:10
 * @LastEditors: fujia(as default)
 * @Description: A function decorator that focus a function only invoked one time.
 * @FilePath: /hammer/src/once.ts
 */

export default function once(fn: Function | null, replacer: Function): () => void  {
  return (...args) => {
    if (typeof fn === 'function') {
      const ret = fn.apply(args);
      fn = null;
      return ret;
    }

    if (typeof replacer === 'function') {
      return replacer.apply(args);
    }
  }
}
