import { isString } from './is';

export /**
 * Trim excess whitespace of a string
 *
 * @param {string} str The string to trim
 * @param {boolean} [greed=false] whether to trim all whitespace of the string
 * @return {string} The string freed of excess whitespace
 */
const trim = (str: string, greed = false) => {
  if (!isString) return str;

  if (greed) {
    return str.replace(/\s/g, '');
  }

  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
