type Result<T> = [error: Error | undefined, value: T | undefined];

export function tryCatch<T, A extends any[]>(
  fn: (...args: A) => T, 
  ...args: A
): Result<T>;

export function tryCatch<T, A extends any[]>(
  fn: (...args: A) => Promise<T>, 
  ...args: A
): Promise<Result<T>>;

export function tryCatch<T, A extends any[]>(
  fn: (...args: A) => T | Promise<T>, 
  ...args: A
): Result<T> | Promise<Result<T>> {
  
  try {
    const result = fn(...args);

    // If the function returns a Promise
    if (result instanceof Promise) {
      return result.then(
        (value) => [undefined, value],
        (error) => [error instanceof Error ? error : new Error(String(error)), undefined]
      );
    }

    // For synchronous functions
    return [undefined, result];
  } catch (error) {
    // For synchronous functions that throw
    return [
      error instanceof Error ? error : new Error(String(error)), 
      undefined
    ];
  }
}
