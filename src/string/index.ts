export /**
 * @desc reverse a string.
 *
 * @param {string} val
 * @return {string}
 */
const reverse = (val: string) => {
  const toArr = val.split('');
  toArr.reverse();

  return toArr.join('');
};

export /**
 * @desc to judge a string is palindrome.
 *
 * @param {string} val
 * @return {boolean}
 */
const isPalindrome = (val: string) => {
  return reverse(val) === val;
};

export /**
 * @desc truncate a string.
 *
 * @param {string} val
 * @param {number} size
 * @param {string} [tail]
 * @return {string}
 */
const truncate = (val: string, size: number, tail?: string) => {
  const sub = val.slice(0, size);

  if (tail) {
    return `${sub}${tail}`;
  }

  return sub;
};
