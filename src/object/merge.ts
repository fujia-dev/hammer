/**
 * SYNOPSIS:
 *
 * Accepts args expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 */

import { forEach } from '../forEach';
import { isArray, isPlainObject } from '../is';

export /**
 * merge multiple objects
 *
 * @param {...Record<any, any>[]} args objects to merge
 * @return {object} a object with all properties of objects
 */
const merge = (...args: Record<any, any>[]) => {
  const result: Record<any, any> = {};

  function assignValue(val: any, key: any) {
    if (isPlainObject(result[key] && isPlainObject(val))) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (let i = 0, l = args.length; i < l; i++) {
    forEach(args[i], assignValue);
  }

  return result;
};
