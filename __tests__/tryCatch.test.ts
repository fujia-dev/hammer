import { tryCatch } from '../src/tryCatch';

describe('tryCatch', () => {
  // Synchronous function tests
  describe('Synchronous Function Handling', () => {
    test('should return result for successful synchronous function', () => {
      const syncFunc = () => 42;
      const [ error, value ] = tryCatch(syncFunc);
      
      expect(error).toBeUndefined();
      expect(value).toBe(42);
    });

    test('should return error for synchronous function that throws', () => {
      const syncErrorFunc = () => {
        throw new Error('Sync Error');
      };
      const [ error, value ] = tryCatch(syncErrorFunc);
      
      expect(error).toBeInstanceOf(Error);
      expect(error?.message).toBe('Sync Error');
      expect(value).toBeUndefined();
    });

    test('should handle function with arguments', () => {
      const addFunc = (a: number, b: number) => a + b;
      const [error, value ] = tryCatch(addFunc, 5, 7);
      
      expect(error).toBeUndefined();
      expect(value).toBe(12);
    });
  });

  // Asynchronous function tests
  describe('Asynchronous Function Handling', () => {
    test('should return result for successful async function', async () => {
      const asyncFunc = async () => 'Success';
      const [error, value] = await tryCatch(asyncFunc);
      
      expect(error).toBeUndefined();
      expect(value).toBe('Success');
    });

    test('should return error for rejected async function', async () => {
      const asyncErrorFunc = async () => {
        throw new Error('Async Error');
      };
      const [error, value] = await tryCatch(asyncErrorFunc);
      
      expect(error).toBeInstanceOf(Error);
      expect(error?.message).toBe('Async Error');
      expect(value).toBeUndefined();
    });

    test('should handle async function with arguments', async () => {
      const asyncAddFunc = async (a: number, b: number) => a + b;
      const [error, value ] = await tryCatch(asyncAddFunc, 10, 20);
      
      expect(error).toBeUndefined();
      expect(value).toBe(30);
    });
  });

  // Object return type test
  describe('Object Return Type', () => {
    test('should handle function returning an object', () => {
      const objFunc = () => ({ name: 'Test', value: 123 });
      const [ error, value ] = tryCatch(objFunc);
      
      expect(error).toBeUndefined();
      expect(value).toEqual({ name: 'Test', value: 123 });
    });
  });
});