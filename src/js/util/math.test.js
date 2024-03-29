import {
  getRandom,
} from './math';

describe('math', () => {
  it('expects getRandom to return 3', () => {
    expect(getRandom(3, 3)).toBe(3);
  });

  it('expects getRandom to return value greater than -1 and less than 4', () => {
    const value = getRandom(0, 3);

    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(3);
  });
});

