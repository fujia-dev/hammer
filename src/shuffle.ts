/*
 * @Author: fujia
 * @Date: 2021-11-15 15:46:18
 * @LastEditTime: 2021-11-22 21:55:19
 * @LastEditors: fujia(as default)
 * @Description: A function that implements the shuffle algorithm
 * @FilePath: /hammer/src/shuffle.ts
 */

export const shuffle = <T>(items: T[]) => {
  const cloneItems = [...items];

  for(let i = cloneItems.length; i > 0; i--) {
    // NOTE: it don't take into account the self's randomness of Math.random
    const idx = Math.floor(Math.random() * i);
    [cloneItems[idx], cloneItems[i - 1]] = [cloneItems[i - 1], cloneItems[idx]];
  }

  return cloneItems;
};

export function* shuffleWithGenerator<T>(items: T[]) {
  const cloneItems = [...items];

  for(let i = cloneItems.length; i > 0; i--) {
    // NOTE: it don't take into account the self's randomness of Math.random
    const idx = Math.floor(Math.random() * i);
    [cloneItems[idx], cloneItems[i - 1]] = [cloneItems[i - 1], cloneItems[idx]];
    yield cloneItems[i - 1];
  }
}
