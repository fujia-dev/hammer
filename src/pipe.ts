/*
 * @Author: fujia
 * @Date: 2021-11-16 17:55:53
 * @LastEditTime: 2022-05-07 09:41:06
 * @LastEditors: fujia(as default)
 * @Description: Using pipe, the value is handled by the list of functions and return the result
 * @FilePath: /hammer/src/pipe.ts
 */
import { continuous } from './continuous';

export const /**
   * @description Combine with function of continuous to implement the pipe function
   *
   * @param {Function} prev
   * @param {Function} next
   * @return {*}
   */
  pipeByContinuous = continuous((prev: any, next: any) => {
    return (value: unknown) => {
      if (typeof prev === 'function' && typeof next === 'function') {
        return next.call(prev.call(value));
      }
    };
  });

export function pipe(...fns: any[]) {
  return (value: unknown) => {
    if (Array.isArray(fns)) {
      return fns.reduce((a, b) => {
        return b.call(a);
      }, value);
    }
  };
}
