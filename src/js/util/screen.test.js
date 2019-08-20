import {
    scrollTop,
    isTouch,
} from './screen';

test('expects scrollTop to return undefined', () => {
    document.querySelector('body').scrollTop = 2000;
    scrollTop('body');

    expect(document.querySelector('body').scrollTop).toBe(0);
});

test('expects isTouch to return false', () => {
    expect(isTouch()).toBe(false);
});
