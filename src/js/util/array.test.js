import {
    isPropTrueAtIndex
} from './array';


test('expects isPropTrueAtIndex to return true', () => {
    expect(isPropTrueAtIndex('hidden', 0, [{ hidden: true }])).toBe(true);
});
