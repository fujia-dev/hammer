/*
 * @Author: fujia
 * @Date: 2021-11-15 15:45:53
 * @LastEditTime: 2021-12-22 17:57:41
 * @LastEditors: fujia(as default)
 * @Description: the entry file of hammer
 * @FilePath: /hammer/src/index.ts
 */
export { default as batch } from './batch';
export { default as cacheStringFunction } from './cacheStringFunction';
export { default as continuous }  from './continuous';
export { default as debounce }  from './debounce';
export { default as intercept }  from './intercept';
export { default as once }  from './once';
export { default as pipe }  from './pipe';
export { default as reverseFuncArgs } from './reverse';
export { default as scrollbarWidth } from './scrollbarWidth';
export { shuffle, shuffleWithGenerator } from './shuffle';
export { default as throttle }  from './throttle';
export { default as wipeEmptyOfObj }  from './wipeEmptyOfObj';
export { default as chain }  from './chain';


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
  isDev,
  isProd,
} from './is';

export {
  toTypeString,
  toRawType,
  toNumber,
} from './to';

export { getDirPath, getCwdPath } from './get';

export {
  infoLog,
  warningLog,
  errorLog,
  successLog,
  loggerTiming,
} from './print';
