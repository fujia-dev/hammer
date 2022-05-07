/*
 * @Author: fujia
 * @Date: 2021-11-16 15:21:13
 * @LastEditTime: 2022-05-07 09:41:07
 * @LastEditors: fujia(as default)
 * @Description: A function decorator that focus a function only invoked one time.
 * @FilePath: /hammer/src/once.ts
 */

import { isFunction } from './is';

export function once(fn: VoidFunction | null, replacer?: VoidFunction): VoidFunction {
  return (...args) => {
    if (isFunction(fn)) {
      const ret = fn.apply(args);
      fn = null;
      return ret;
    }

    if (isFunction(replacer)) {
      return replacer.apply(args);
    }
  };
}
