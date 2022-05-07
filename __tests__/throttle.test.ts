import { throttle } from '../src/throttle';

const fn = jest.fn();

describe('throttle function', () => {
  it('invoked once over a period of time', () => {
    const throttleFn = throttle(fn, 500);

    throttleFn();
    throttleFn();
    throttleFn();
    throttleFn();

    expect(fn).toBeCalledTimes(1);
  });
});
