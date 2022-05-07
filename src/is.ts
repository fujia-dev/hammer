/*
 * @Author: fujia
 * @Date: 2021-11-29 14:44:31
 * @LastEditTime: 2022-05-07 12:24:52
 * @LastEditors: fujia(as default)
 * @Description: basic utility functions starting with "is"
 * @FilePath: /hammer/src/is.ts
 */

import { toRawType } from './to';

const onRE = /^on[A-Z]/;
export const isOn = (val: string) => onRE.test(val);

type UndefType = null | undefined;
export const isUndef = (val: unknown): val is UndefType => {
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

export function isPrimitive(val: unknown): boolean {
  return (
    typeof val === 'string' ||
    typeof val === 'number' ||
    typeof val === 'symbol' ||
    typeof val === 'boolean'
  );
}

export /**
 * Determine a value is a plain object.
 *
 * @param {unknown} val the value to test
 * @return {boolean} true if value is an ArrayBuffer, otherwise false
 */
const isPlainObject = (val: unknown): val is Record<any, any> => {
  if (toRawType(val) !== 'Object') return false;

  const prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
};

export const isArray = (val: unknown): val is Array<any> => Array.isArray(val);

export const isMap = (val: unknown): val is Map<any, any> => {
  return toRawType(val) === 'Map';
};

export const isSet = (val: unknown): val is Set<any> => {
  return toRawType(val) === 'Set';
};

export const isRegExp = (val: unknown): val is RegExp => {
  return toRawType(val) === 'RegExp';
};

export const isDate = (val: unknown): val is Date => val instanceof Date;

export const isFunction = (val: unknown): val is VoidFunction => typeof val === 'function';

export const isString = (val: unknown): val is string => typeof val === 'string';

export const isNumber = (val: unknown): val is number => typeof val === 'number';

export const isInteger = (val: unknown): val is number =>
  isNumber(val) && parseInt(val.toFixed(1), 10) === val;

export const isObject = (val: unknown): val is Record<any, any> => {
  return val !== null && typeof val === 'object';
};

export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

export /**
 * Check a value is an ArrayBuffer
 *
 * @param {unknown} val the value to test
 * @return {boolean} true if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = (val: unknown): val is ArrayBuffer => toRawType(val) === 'ArrayBuffer';

export /**
 * Check a value is an ArrayBuffer
 *
 * @param {any} val the value to test
 * @return {boolean} true if value is an ArrayBuffer, otherwise false
 */
const isBuffer = (val: any): val is Buffer => {
  return (
    isDef(val) &&
    isDef(val.constructor) &&
    isFunction(val.constructor.isBuffer) &&
    val.constructor.isBuffer(val)
  );
};

export const isIntegerKey = (key: unknown) => {
  return isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;
};

export /**
 * Determine a value is a view on an ArrayBuffer
 *
 * @param {any} val the value to test
 * @return {boolean} true if value is a view on an ArrayBuffer, otherwise false
 */
const isArrayBufferView = (val: any): val is ArrayBufferView => {
  let result = false;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }

  return result;
};

export const isValidArrayIndex = (val: unknown): boolean => {
  const num = parseFloat(String(val));

  return num >= 0 && Math.floor(num) === num && isFinite(num);
};

export /**
 * Determine if a value is a File
 *
 * @param {unknown} val the value to test
 * @return {*} true if value is a File, otherwise false
 */
const isFile = (val: unknown): val is File => toRawType(val) === 'File';

export /**
 * Determine if a value is a Blob
 *
 * @param {unknown} val the value to test
 * @return {*} true if value is a Blob, otherwise false
 */
const isBlob = (val: unknown): val is Blob => toRawType(val) === 'Blob';

export /**
 * Determine if a value is a FileList
 *
 * @param {unknown} val the value to test
 * @return {*} true if value is a FileList, otherwise false
 */
const isFileList = (val: unknown): val is FileList => toRawType(val) === 'FileList';

export /**
 * Determine if a value is a URLSearchParams
 *
 * @param {unknown} val the value to test
 * @return {*}  true if value is a URLSearchParams, otherwise false
 */
const isURLSearchParams = (val: unknown): val is URLSearchParams =>
  toRawType(val) === 'URLSearchParams';

export /**
 * Determine if a val is a FormData
 *
 * @param {*} val the value to test
 * @return {*} true if value is a FileList, otherwise false
 */
const isFormData = (val: any): val is FormData => {
  const pattern = 'FormData';

  return (
    val &&
    ((typeof FormData === 'function' && val instanceof FormData) ||
      toRawType(val) === pattern ||
      (isFunction(val.toString) && val.toString === pattern))
  );
};

export const isTypedArray = () =>
  (function (TypedArray: any) {
    return (val: unknown): boolean => TypedArray && val instanceof TypedArray;
  })(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));

/**
 * Check the running context is a standard browser environment
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript:
 *  navigator.product -> 'NativeScript' or 'NS'
 */
export const isStandardBrowserEn = (): boolean => {
  if (
    typeof navigator !== 'undefined' &&
    (navigator.product === 'ReactNative' ||
      navigator.product === 'NativeScript' ||
      navigator.product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
};

export const isBrowser = typeof window !== 'undefined';

export const isNavigator = typeof navigator !== 'undefined';

export const isDev = process.env.NODE_ENV === 'development';

export const isProd = process.env.NODE_ENV === 'production';

export const isChinese = (val: string): boolean => {
  const RE = /[\u4e00-\u9f5a]+/g;

  return RE.test(val);
};
