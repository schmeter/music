import { getActiveId } from './layer';

const state = {
    layer: {
        activeId: 'test',
    },
};

test('expects getActiveId to return correct value', () => {
    expect(getActiveId(state)).toBe('test');
});
