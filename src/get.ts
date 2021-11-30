/*
 * @Author: fujia
 * @Date: 2021-11-30 14:29:33
 * @LastEditTime: 2021-11-30 14:40:40
 * @LastEditors: fujia(as default)
 * @Description:
 * @FilePath: /hammer/src/get.ts
 */
import { resolve } from 'path';

// get local path
export const getDirPath = (relPath = '') => {
  return resolve(__dirname, relPath)
}

// get run path
export const getCwdPath = (relPath = '') => {
  return resolve(process.cwd(), relPath)
}
