/*
 * @Author: fujia
 * @Date: 2021-12-07 14:08:06
 * @LastEditTime: 2022-05-07 09:40:53
 * @LastEditors: fujia(as default)
 * @Description: A promise chain
 * @FilePath: /hammer/src/chain.ts
 */
import { isFunction } from './is';

export const chain = (fns: VoidFunction[], errCallback: VoidFunction) => {
  const len = fns?.length;
  if (!Array.isArray(fns) || fns.length < 1) return;

  return new Promise(() => {
    let chain = Promise.resolve();

    for (let i = 0; i++; i < len - 1) {
      chain = chain.then(() => {
        if (isFunction(fns[i])) {
          fns[i]();
        }
      });
    }

    chain.catch((err) => {
      if (isFunction(errCallback)) {
        errCallback();
      }
      console.error(err?.message);
    });
  });
};
