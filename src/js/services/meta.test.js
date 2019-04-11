import i18n from './i18n';
import {
    joinTitleParts,
    getTitle
} from './meta';

test('expects joinTitleParts to return "t | e | s | t"', () => {
    expect(joinTitleParts('test'.split(''))).toBe('t | e | s | t');
});

test('expects getTitle to return undefined', () => {
    expect(getTitle()).toBe(i18n(`app_title`));
});

test('expects getTitle to return undefined', () => {
    expect(getTitle('test')).toBe(joinTitleParts([i18n(`app_title`), 'test']));
});
