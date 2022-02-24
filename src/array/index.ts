import { isArray } from '../is';

export /**
 * @desc flatten the array.
 *
 * @template T
 * @param {T[]} arr
 * @return {*}
 */
const flatten = <T = any>(arr: T[]) => {
  let result: T[] = [];

  arr.forEach((item) => {
    if (isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result = result.concat(item);
    }
  });

  return result;
};

export /**
 * @desc drop elements which index less than the size.
 *
 * @template T
 * @param {T[]} arr
 * @param {number} size
 */
const drop = <T = any>(arr: T[], size: number) => arr.filter((_, index) => index >= size);

export /**
 * @desc drop elements which index great than or equal to the size.
 *
 * @template T
 * @param {T[]} arr
 * @param {number} size
 */
const dropRight = <T = any>(arr: T[], size: number) =>
  arr.filter((_, index) => index < arr.length - size);

export /**
 * @desc remove duplicate element in the array.
 *
 * @template T
 * @param {T[]} arr
 * @return {*}
 */
const unique = <T = any>(arr: T[]) => {
  const result: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];

    if (!result.includes(cur)) {
      result.push(cur);
    }
  }

  return result;
};

export /**
 * @desc remove duplicate element by Set data structure in the array.
 *
 * @template T
 * @param {T[]} arr
 */
const uniqueBySet = <T>(arr: T[]) => [...new Set(arr)];

export /**
 * @desc filter the elements which in the arr and not in the compareArr.
 *
 * @template T
 * @param {T[]} arr
 * @param {T[]} compareArr
 * @return {T[]}
 */
const diff = <T>(arr: T[], compareArr: T[]) => {
  if (arr.length === 0) {
    return [];
  }

  if (compareArr.length === 0) {
    return arr.slice();
  }

  return arr.filter((item) => !compareArr.includes(item));
};

export /**
 * @desc split the array by the size.
 *
 * @template T
 * @param {T[]} arr
 * @param {number} [size=1]
 * @return {Array<Array<T>>}
 */
const chunk = <T>(arr: T[], size = 1) => {
  if (arr.length === 0) return [];

  const result = [];
  let tmp = [];

  for (let i = 0; i < arr.length; i++) {
    if (tmp.length === 0) {
      result.push(tmp);
    }

    tmp.push(arr[i]);

    if (tmp.length === size) {
      tmp = [];
    }
  }

  return result;
};
