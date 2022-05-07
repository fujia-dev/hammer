import * as util from '../src/is';

describe('is-* utilities', () => {
  it('isDef', () => {
    expect(util.isDef(undefined)).toBeFalsy();
  });
});
