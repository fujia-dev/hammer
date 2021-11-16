/*
 * @Author: fujia
 * @Date: 2021-11-15 15:45:53
 * @LastEditTime: 2021-11-16 17:59:25
 * @LastEditors: fujia(as default)
 * @Description: the entry file of hammer
 * @FilePath: /hammer/src/index.ts
 */
import batch from './batch';
import continuous from './continuous';
import debounce from './debounce';
import intercept from './intercept';
import once from './once';
import pipe from './pipe';
import { reverseFuncArgs } from './reverse';
import { shuffle, shuffleWithGenerator } from './shuffle';
import throttle from './throttle';

export default {
  batch,
  continuous,
  debounce,
  intercept,
  once,
  pipe,
  reverseFuncArgs,
  shuffle,
  shuffleWithGenerator,
  throttle
};
