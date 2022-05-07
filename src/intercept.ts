/*
 * @Author: fujia
 * @Date: 2021-11-16 16:39:28
 * @LastEditTime: 2022-05-07 09:38:46
 * @LastEditors: fujia(as default)
 * @Description: A function intercept(er)
 * @FilePath: /hammer/src/intercept.ts
 */

/**
 * @description A function intercepter
 *
 * @export
 * @param {Function} fn the called function
 * @param {{
 *   beforeCall: Function,
 *   afterCall: Function
 * }} {
 *   beforeCall, a prepositive intercept(er), if exist and return false, the fn will not be executed.
 *   afterCall, if exit, can instead of the fn's return value
 * }
 * @return {*}
 */
export function intercept(
  fn: any,
  {
    beforeCall,
    afterCall,
  }: {
    beforeCall: any;
    afterCall: any;
  }
) {
  return (...args: any[]) => {
    if (!beforeCall || (typeof beforeCall === 'function' && beforeCall.call(args) !== false)) {
      // if beforeCall is called and return false, don't continue executed
      if (typeof fn !== 'function') return;

      const ret = fn.apply(args);

      if (typeof afterCall === 'function') {
        return afterCall.call(ret);
      }

      return ret;
    }
  };
}
