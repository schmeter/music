import {
    getRandom
} from './math';

test('expects getRandom to return 3', () => {
    expect(getRandom(3, 3)).toBe(3);
});

test('expects getRandom to return value greater than 0', () => {
    expect(getRandom(0, 3)).toBeGreaterThanOrEqual(0);
});

test('expects getRandom to return value less than 3', () => {
    expect(getRandom(3, 0)).toBeLessThanOrEqual(3);
});
