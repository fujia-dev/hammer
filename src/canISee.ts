/**
 * @desc check browser support for extended arguments.
 * @export
 * @return {boolean}
 */
export function localeCompareSupportsLocales() {
  try {
    'foo'.localeCompare('bar', 'i');
  } catch (e: any) {
    return e.name === 'RangeError';
  }
  return false;
}
