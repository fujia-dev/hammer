/*
 * @Author: fujia
 * @Date: 2021-11-30 14:42:09
 * @LastEditTime: 2021-11-30 14:46:00
 * @LastEditors: fujia(as default)
 * @Description:
 * @FilePath: /hammer/src/wipeEmptyFromObj.ts
 */
import { isUndef, isObject } from './is';
import { errorLog } from './print';

const wipeEmptyFromObj = <T extends object>(val: T): Pick<T, keyof T> | void => {
  try {
    if (!isObject(val)) throw new TypeError(`${val} must be an plain object.`);

    const ret = {} as Pick<T, keyof T>;
    const valKeys = Object.keys(val) as Array<keyof T>;

    valKeys.forEach(k => {
      if (!isUndef(val[k])) {
        ret[k] = val[k];
      }
    });

    return ret;
  } catch (error) {
    errorLog(`${error}`);
  }
};

export default wipeEmptyFromObj;
