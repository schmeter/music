import {
    scrollTop,
    isTouch
} from './browser';


test('expects scrollTop to return undefined', () => {
    expect(scrollTop()).toBe(undefined);
    expect(scrollTop('body')).toBe(undefined);
});

test('expects isTouch to return false', () => {
    expect(isTouch()).toBe(false);
});
