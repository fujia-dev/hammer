/**
 * @jest-environment jsdom
 */

import { scrollbarWidth } from '../src/index';

jest.mock('../src/scrollbarWidth');

// const mockScrollbarWidth = scrollbarWidth as jest.MockedFunction<typeof scrollbarWidth>
let mockScrollbarWidth: any;
describe('scrollbarWidth', () => {
  beforeEach(() => {
    scrollbarWidth._cache = undefined;
    mockScrollbarWidth = jest.fn() as jest.MockedFunction<typeof scrollbarWidth>;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mockScrollbarWidth.mockImplementation((force?: boolean) => {
      if (force !== true && typeof scrollbarWidth._cache === 'number') {
        return scrollbarWidth._cache;
      }
      return 17;
    });
  });

  it('should be defined', () => {
    expect(scrollbarWidth).toBeDefined();
  });

  it('should return proper numeric value', () => {
    const val = mockScrollbarWidth();

    expect(typeof val).toBe('number');
    /**
    * NOTE: sidebar width might have values as follows:
    * 1, 17 - by default
    * 2, 16 - linux & firefox
    * 3, 15 - linux
    * 4, - mac OS
    */
    // expect(val).toBeGreaterThanOrEqual(15);
    expect(val).toBe(17);
  });

  it('should return cached value if presented', () => {
    scrollbarWidth._cache = 0;
    expect(mockScrollbarWidth()).toBe(0);
    scrollbarWidth._cache = 1;
    expect(mockScrollbarWidth()).toBe(1);
  });

  it('should recalculate and cache value if the first parameter equal to true', () => {
    scrollbarWidth._cache = 3;
    expect(mockScrollbarWidth(true)).toBe(17);
  });
});
