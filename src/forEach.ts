import { isArray, isUndef } from './is';

/**
 * SYNOPSIS:
 *
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 */
export const forEach = (val: any, fn: (...arg: any[]) => void) => {
  if (isUndef(val)) return;

  // convert to an array if not already something iterable.
  if (typeof val !== 'object') {
    val = [val];
  }

  if (isArray(val)) {
    // iterate over array values
    for (let i = 0, l = val.length; i < l; i++) {
      fn.call(null, val[i], i, val);
    }
  } else {
    // iterate over object keys
    for (const key in val) {
      if (Object.prototype.hasOwnProperty.call(val, key)) {
        fn.call(null, val[key], key, val);
      }
    }
  }
};
