/*
 * @Author: fujia
 * @Date: 2021-11-29 14:44:31
 * @LastEditTime: 2021-11-29 16:02:15
 * @LastEditors: fujia(as default)
 * @Description: basic utility functions starting with "is"
 * @FilePath: /hammer/src/is.ts
 */

import { toTypeString } from './to';

const onRE = /^on[^a-z]/;
export const isOn = (val: string) => onRE.test(val);

export const isUndef = (val: unknown): val is null | undefined => {
  return val === undefined || val === null;
};

export const isDef = (val: unknown): boolean => {
  return val !== undefined && val !== null;
};

export const isTrue = (val: unknown): val is true => {
  return val === true;
};

export const isFalse = (val: unknown): val is false => {
  return val === false;
};

export function isPrimitive (val: unknown): boolean {
  return (
    typeof val === 'string' ||
    typeof val === 'number' ||
    typeof val === 'symbol' ||
    typeof val === 'boolean'
  )
}

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

export const isRegExp = (val: unknown): val is RegExp => {
  return toTypeString(val) === '[object RegExp]';
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

export const isValidArrayIndex = (val: unknown): boolean => {
  const num = parseFloat(String(val));

  return num >= 0 && Math.floor(num) === num && isFinite(num);
};

export const isBrowser = typeof window !== 'undefined';

export const isNavigator = typeof navigator !== 'undefined';
