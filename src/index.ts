/*
 * @Author: fujia
 * @Date: 2021-11-15 15:45:53
 * @LastEditTime: 2021-11-28 22:12:22
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
  isOn,
  objToString,
  toTypeString,
  toRawType,
  isPlainObject,
  isArray,
  isMap,
  isSet,
  isDate,
  isFunction,
  isString,
  isObject,
  isPromise,
  isIntegerKey,
  removeItemFromArray,
  capitalizeFirstLetter,
  invokeArrayFns,
  def,
  toNumber,
} from './util';

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
  isOn,
  objToString,
  toTypeString,
  toRawType,
  isPlainObject,
  isArray,
  isMap,
  isSet,
  isDate,
  isFunction,
  isString,
  isObject,
  isPromise,
  isIntegerKey,
  removeItemFromArray,
  capitalizeFirstLetter,
  invokeArrayFns,
  def,
  toNumber,
  emptyObject,
};
