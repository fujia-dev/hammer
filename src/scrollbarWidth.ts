/*
 * @Author: fujia
 * @Date: 2021-12-01 11:56:33
 * @LastEditTime: 2021-12-01 14:18:23
 * @LastEditors: fujia(as default)
 * @Description: Obtain scrollbar width
 * @FilePath: /hammer/src/scrollbarWidth.ts
 */
import { isUndef, isTrue } from './is';

export interface ScrollbarWidth {
  (force?: boolean): number | undefined;
  _cache?: number;
}

const scrollbarWidth: ScrollbarWidth = (force?: boolean): number | undefined => {
  /* istanbul ignore next */
  if (isUndef(document)) return 0;

  /* istanbul ignore next */
  if (!document.body
    || (document.readyState
      && document.readyState === 'loading')) return;

  // return cached value
  if (!isTrue(force) && typeof scrollbarWidth._cache === 'number') {
    return scrollbarWidth._cache;
  }

  const el = document.createElement('div');
  el.style.cssText = `
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    left: -999px;
    top: -999px;
    overflow: scroll;
  `;

  document.body.insertBefore(el, null);

  const { clientWidth } = el;

  // if element still has no width it means DOM is not ready yet
  /* istanbul ignore next */
  if (clientWidth === 0) {
    // remove the element and skip the caching
    document.body.removeChild(el);
    return;
  }

  scrollbarWidth._cache = 100 - clientWidth;

  document.body.removeChild(el);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return scrollbarWidth._cache;
}

export default scrollbarWidth;
