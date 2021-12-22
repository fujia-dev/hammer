/*
 * @Author: fujia
 * @Date: 2021-11-28 20:19:51
 * @LastEditTime: 2021-12-22 17:56:01
 * @LastEditors: fujia(as default)
 * @Description: basic utility functions
 * @FilePath: /hammer/src/util.ts
 */
import { isPlainObject } from './is';

export const emptyObject = Object.freeze({});

export const noop = () => {};

export const objToString = Object.prototype.toString;

const hasOwnProperty = Object.prototype.hasOwnProperty;
export const hasOwn = (
  val: object,
  key: string | symbol
): key is keyof typeof val => hasOwnProperty.call(val, key);

export const removeItemFromArray = <T>(arr: T[], item: T) => {
  const i = arr.indexOf(item);

  if (i > -1) {
    arr.splice(i, 1);
  }
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const invokeArrayFns = (fns: CallableFunction[], arg?: any) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg)
  }
}

export const def = (obj: object, key: string | symbol, value: any) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};

export const addListener = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, VoidFunction | null, ...any]
): void => {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
  }
};

export const removeListener = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, VoidFunction | null, ...any]
): void => {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
  }
};

export const spreadObjToString = (val: Record<string, unknown>, prefix?: string) => {
  if (!isPlainObject(val)) return prefix;

  let str = prefix ? `${prefix}: ` : '';
  const keys = Object.keys(val);
  keys.forEach(k => {
    str += `\n\t${k}: ${val[k]}`
  });

  return str;
};
