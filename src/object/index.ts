import { isPlainObject } from '../is';

export /**
 * @desc shallow clone an object.
 *
 * @param {Record<any, any>} val
 * @return {object}
 */
const clone = (val: Record<any, any>) => {
  if (isPlainObject(val)) {
    return Object.assign({}, val);
  }

  return val;
};

export /**
 * @desc deep clone an object by recursion.
 *
 * @param {Record<any, any>} val
 * @return {object}
 */
const deepClone = (val: Record<any, any>) => {
  if (isPlainObject(val)) {
    const result: Record<any, any> = {};

    for (const key in val) {
      // eslint-disable-next-line no-prototype-builtins
      if (val.hasOwnProperty(key)) {
        result[key] = deepClone(val[key]);
      }
    }

    return result;
  }

  return val;
};

export /**
 * @desc deep clone an object by JSON.
 *
 * @param {Record<any, any>} val
 * @return {object}
 */
const deepCloneByJson = (val: Record<any, any>) => {
  try {
    const tmp = JSON.stringify(val);

    return JSON.parse(tmp);
  } catch (err: any) {
    console.error(err);
    return val;
  }
};
