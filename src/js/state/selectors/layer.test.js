import { getActiveId } from './layer';

describe('layer', () => {
    const state = {
        layer: {
            activeId: 'test',
        },
    };

    it('expects getActiveId to return correct value', () => {
        expect(getActiveId(state)).toBe('test');
    });
});
