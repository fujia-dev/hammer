export function tryCatch<T = any>(fn: CallableFunction, ...args: any[]) {
  try {
    const result = fn(...args);

    if (result.then) {
      return new Promise((resolve) => {
        result.then((v: T) => resolve([undefined, v])).catch((e: any) => resolve([e, undefined]));
      });
    }

    return [undefined, result];
  } catch (e) {
    return [e, undefined];
  }
}
