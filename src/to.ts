/*
 * @Author: fujia
 * @Date: 2021-11-29 14:46:34
 * @LastEditTime: 2021-11-29 14:50:53
 * @LastEditors: fujia(as default)
 * @Description: basic utility functions starting with "to"
 * @FilePath: /hammer/src/to.ts
 */
import { objToString } from './util';

export const toTypeString = (val: unknown): string => objToString.call(val);

export const toRawType = (val: unknown): string => {
  return toTypeString(val).slice(8, -1);
};

export const toNumber = (val: any): any => {
  const num = parseFloat(val);

  return isNaN(num) ? val : num;
};

