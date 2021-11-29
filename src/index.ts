/*
 * @Author: fujia
 * @Date: 2021-11-15 15:45:53
 * @LastEditTime: 2021-11-29 16:03:08
 * @LastEditors: fujia(as default)
 * @Description: the entry file of hammer
 * @FilePath: /hammer/src/index.ts
 */
import batch from './batch';
import continuous from './continuous';
import debounce from './debounce';
import cacheStringFunction from './cacheStringFunction';
import intercept from './intercept';
import once from './once';
import pipe from './pipe';
import { reverseFuncArgs } from './reverse';
import { shuffle, shuffleWithGenerator } from './shuffle';
import throttle from './throttle';

import {
  emptyObject,
  noop,
  objToString,
  removeItemFromArray,
  capitalizeFirstLetter,
  invokeArrayFns,
  def,
  addListener,
  removeListener,
} from './util';
import {
  isUndef,
  isDef,
  isTrue,
  isFalse,
  isPrimitive,
  isOn,
  isPlainObject,
  isArray,
  isMap,
  isSet,
  isDate,
  isFunction,
  isString,
  isObject,
  isPromise,
  isRegExp,
  isIntegerKey,
  isValidArrayIndex,
  isBrowser,
  isNavigator,
} from './is';
import {
  toTypeString,
  toRawType,
  toNumber,
} from './to';

export default {
  batch,
  continuous,
  debounce,
  cacheStringFunction,
  intercept,
  once,
  pipe,
  reverseFuncArgs,
  shuffle,
  shuffleWithGenerator,
  throttle,
  noop,
  objToString,
  removeItemFromArray,
  capitalizeFirstLetter,
  invokeArrayFns,
  def,
  addListener,
  removeListener,
  toTypeString,
  toRawType,
  toNumber,
  isUndef,
  isDef,
  isTrue,
  isFalse,
  isPrimitive,
  isOn,
  isPlainObject,
  isArray,
  isMap,
  isSet,
  isDate,
  isFunction,
  isString,
  isObject,
  isPromise,
  isRegExp,
  isIntegerKey,
  isValidArrayIndex,
  isBrowser,
  isNavigator,
  emptyObject,
};
