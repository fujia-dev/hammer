import { trim } from '../src';

const TEST_STR = " It's takes  guts to make change  .  ";
const NO_SPACE_ENDS_STR = "It's takes  guts to make change  .";
const NO_SPACE_STR = "It'stakesgutstomakechange.";

describe('trim function', () => {
  it('trim excess whitespace off the ends of string', () => {
    expect(trim(TEST_STR)).toBe(NO_SPACE_ENDS_STR);
  });

  it('trim all whitespace off string', () => {
    expect(trim(TEST_STR, true)).toBe(NO_SPACE_STR);
  });
});
