import {
    joinTitleParts,
    setTitle,
} from './meta';

describe('meta', () => {
    it('expects joinTitleParts to return "t | e | s | t"', () => {
        expect(joinTitleParts('test'.split(''))).toBe('t | e | s | t');
    });

    it('expects setTitle with no params to return undefined', () => {
        expect(setTitle()).toBe(undefined);
    });

    it('expects setTitle with params to return undefined', () => {
        expect(setTitle('test')).toBe(undefined);
    });
});
