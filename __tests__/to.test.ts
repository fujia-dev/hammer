import * as util from '../src/to';

describe('to-* utilities', () => {
  it('toTypeString', () => {
    expect(util.toTypeString(null)).toBe('[object Null]');
    expect(util.toTypeString('prototype')).toBe('[object String]');
  });

  it('toRawType', () => {
    expect(util.toRawType(3)).toBe('Number');
    expect(util.toRawType('prototype')).toBe('String');
  });

  it('toNumber', () => {
    expect(util.toNumber('a')).toBe('a');
    expect(util.toNumber('8')).toBe(8);
  });
});
