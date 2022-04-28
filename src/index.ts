/*
 * @Author: fujia
 * @Date: 2021-11-15 15:45:53
 * @LastEditTime: 2022-04-28 13:15:48
 * @LastEditors: fujia(as default)
 * @Description: the entry file of hammer
 * @FilePath: /hammer/src/index.ts
 */

export { reverse, isPalindrome, truncate } from './string';

export { flatten, drop, dropRight, unique, uniqueBySet, diff, chunk } from './array';
export { clone, deepClone, deepCloneByJson } from './object';

export { default as batch } from './batch';
export { default as cacheStringFunction } from './cacheStringFunction';
export { localeCompareSupportsLocales } from './canISee';
export { default as continuous } from './continuous';
export { default as debounce } from './debounce';
export { default as EventBus } from './EventBus';
export { default as intercept } from './intercept';
export { default as once } from './once';
export { default as pipe } from './pipe';
export { default as PubSub } from './PubSub';
export { default as reverseFuncArgs } from './reverse';
export { default as scrollbarWidth } from './scrollbarWidth';
export { shuffle, shuffleWithGenerator } from './shuffle';
export { default as throttle } from './throttle';
export { default as wipeEmptyOfObj } from './wipeEmptyOfObj';
export { default as chain } from './chain';

export {
  noop,
  objToString,
  removeItemFromArray,
  capitalizeFirstLetter,
  invokeArrayFns,
  def,
  addListener,
  removeListener,
  spreadObjToString,
  emptyObject,
} from './util';

export {
  isUndef,
  isChinese,
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
  isNumber,
  isObject,
  isPromise,
  isRegExp,
  isIntegerKey,
  isValidArrayIndex,
  isBrowser,
  isNavigator,
  isDev,
  isProd,
} from './is';

export { toTypeString, toRawType, toNumber } from './to';

export { infoLog, warningLog, errorLog, successLog, loggerTiming } from './print';
