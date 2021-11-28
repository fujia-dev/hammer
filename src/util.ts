/*
 * @Author: fujia
 * @Date: 2021-11-28 20:19:51
 * @LastEditTime: 2021-11-28 22:12:25
 * @LastEditors: fujia(as default)
 * @Description: basic utility functions
 * @FilePath: /hammer/src/util.ts
 */

export const emptyObject = Object.freeze({});

export const noop = () => {};

const onRE = /^on[^a-z]/;
export const isOn = (val: string) => onRE.test(val);

export const objToString = Object.prototype.toString;

export const toTypeString = (val: unknown): string => objToString.call(val);

export const toRawType = (val: unknown): string => {
  return toTypeString(val).slice(8, -1);
};

export const isPlainObject = (val: unknown): val is object => {
  return toTypeString(val) === '[object Object]';
};

export const isArray = Array.isArray;

export const isMap = (val: unknown): val is Map<any, any> => {
  return toTypeString(val) === '[object Map]';
};

export const isSet = (val: unknown): val is Set<any> => {
  return toTypeString(val) === '[object Set]';
};

export const isDate = (val: unknown): val is Date => val instanceof Date;

export const isFunction = (val: unknown): val is VoidFunction => typeof val === 'function';

export const isString = (val: unknown): val is string => typeof val === 'string';

export const isObject = (val: unknown): val is Record<any, any> => {
  return val !== null && typeof val === 'object';
};

export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

export const isIntegerKey = (key: unknown) => {
  return isString(key)
    && key !== 'NaN'
    && key[0] !== '-'
    && '' + parseInt(key, 10) === key;
};

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

export const toNumber = (val: any): any => {
  const num = parseFloat(val);

  return isNaN(num) ? val : num;
};
