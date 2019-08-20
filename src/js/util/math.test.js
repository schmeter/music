import {
    getRandom,
} from './math';

test('expects getRandom to return 3', () => {
    expect(getRandom(3, 3)).toBe(3);
});

test('expects getRandom to return value greater than 0 and less than 3', () => {
    const value = getRandom(0, 3);

    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(3);
});

