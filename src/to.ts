/*
 * @Author: fujia
 * @Date: 2021-11-29 14:46:34
 * @LastEditTime: 2022-05-07 10:03:01
 * @LastEditors: fujia(as default)
 * @Description: basic utility functions starting with "to"
 * @FilePath: /hammer/src/to.ts
 */

export const toTypeString = (val: unknown): string => Object.prototype.toString.call(val);

export const toRawType = (val: unknown): string => {
  return toTypeString(val).slice(8, -1);
};

export const toNumber = (val: any): any => {
  const num = parseFloat(val);

  return isNaN(num) ? val : num;
};
