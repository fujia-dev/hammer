/*
 * @Author: fujia
 * @Date: 2021-11-28 21:54:51
 * @LastEditTime: 2021-11-28 22:02:06
 * @LastEditors: fujia(as default)
 * @Description:
 * @FilePath: /hammer/src/cacheStringFunction.ts
 */
const cacheStringFunction = <T extends (str: string) => string>(fn: T): T => {
  const cache: Record<string, string> = Object.create(null);

  return ((str: string) => {
    const hit = cache[str];

    return hit || (cache[str] = fn(str));
  }) as any;
}

export default cacheStringFunction;
