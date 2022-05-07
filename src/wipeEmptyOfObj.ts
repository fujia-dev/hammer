/*
 * @Author: fujia
 * @Date: 2021-11-30 14:42:09
 * @LastEditTime: 2022-05-07 09:41:00
 * @LastEditors: fujia(as default)
 * @Description:
 * @FilePath: /hammer/src/wipeEmptyOfObj.ts
 */
import { isUndef, isObject } from './is';
import { errorLog } from './print';

export const wipeEmptyOfObj = <T extends object>(val: T): Pick<T, keyof T> | void => {
  try {
    if (!isObject(val)) throw new TypeError(`${val} must be an plain object.`);

    const ret = {} as Pick<T, keyof T>;
    const valKeys = Object.keys(val) as Array<keyof T>;

    valKeys.forEach((k) => {
      if (!isUndef(val[k])) {
        ret[k] = val[k];
      }
    });

    return ret;
  } catch (error) {
    errorLog(`${error}`);
  }
};
