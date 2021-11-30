/*
 * @Author: fujia
 * @Date: 2021-11-30 14:12:30
 * @LastEditTime: 2021-11-30 14:39:28
 * @LastEditors: fujia(as default)
 * @Description: Print some information
 * @FilePath: /hammer/src/print.ts
 */

import chalk from 'chalk';

export const infoLog = (msg: string) => {
  if (!msg) return;

  console.log(chalk.yellow(`Info ℹ️: ${msg}`));
}

export const warningLog = (msg: string) => {
  if (!msg) return;

  console.log(chalk.yellow(`Warning ⚠️ : ${msg}`));
}

export const errorLog = (msg: string) => {
  if (!msg) return;

  console.log(chalk.red(`Error ❌: ${msg}`));
}

export const successLog = (msg: string) => {
  if (!msg) return;

  console.log(chalk.green(`Success 🏖: ${msg}`));
}

export const loggerTiming = (str: '', start: true) => {
  if (start) {
    console.time('Timing')
    console.log(`****** ${str} START ******`)
  } else {
    console.log(`****** ${str} END ******`)
    console.timeEnd('Timing')
  }
}
