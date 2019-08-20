import {
    joinTitleParts,
    setTitle,
} from './meta';

test('expects joinTitleParts to return "t | e | s | t"', () => {
    expect(joinTitleParts('test'.split(''))).toBe('t | e | s | t');
});

test('expects setTitle to return undefined', () => {
    expect(setTitle()).toBe(undefined);
});

test('expects setTitle to return undefined', () => {
    expect(setTitle('test')).toBe(undefined);
});
