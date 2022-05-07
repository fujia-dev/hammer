/*
 * @Author: fujia
 * @Date: 2021-11-15 15:45:53
 * @LastEditTime: 2022-05-07 12:26:44
 * @LastEditors: fujia(as default)
 * @Description: the entry file of hammer
 * @FilePath: /hammer/src/index.ts
 */

export { reverse, isPalindrome, truncate } from './string';

export { flatten, drop, dropRight, unique, uniqueBySet, diff, chunk } from './array';

export { clone, deepClone, deepCloneByJson } from './object';

export { merge } from './object/merge';

export { batch } from './batch';

export { cacheStringFunction } from './cacheStringFunction';

export { localeCompareSupportsLocales } from './canISee';

export { continuous } from './continuous';

export { debounce } from './debounce';

export { EventBus } from './EventBus';

export { forEach } from './forEach';

export { intercept } from './intercept';

export { once } from './once';

export { pipe } from './pipe';

export { PubSub } from './PubSub';

export { reverseFuncArgs } from './reverse';

export { scrollbarWidth } from './scrollbarWidth';

export { shuffle, shuffleWithGenerator } from './shuffle';

export { throttle } from './throttle';

export { trim } from './trim';

export { wipeEmptyOfObj } from './wipeEmptyOfObj';

export { chain } from './chain';

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
  isOn,
  isUndef,
  isDef,
  isTrue,
  isFalse,
  isPrimitive,
  isPlainObject,
  isArray,
  isMap,
  isSet,
  isRegExp,
  isDate,
  isFunction,
  isString,
  isNumber,
  isInteger,
  isObject,
  isPromise,
  isArrayBuffer,
  isBuffer,
  isIntegerKey,
  isArrayBufferView,
  isValidArrayIndex,
  isFile,
  isBlob,
  isFileList,
  isURLSearchParams,
  isFormData,
  isTypedArray,
  isStandardBrowserEn,
  isBrowser,
  isNavigator,
  isDev,
  isProd,
} from './is';

export { toTypeString, toRawType, toNumber } from './to';

export { infoLog, warningLog, errorLog, successLog, loggerTiming } from './print';
