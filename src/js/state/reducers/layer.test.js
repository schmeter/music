import reducer, { initialState } from './layer';

let action;

test('expects reducer to return correct value', () => {
    action = {
        type: 'LAYER_OPEN',
        payload: {
            activeId: 'test',
        },
    };

    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        activeId: action.payload,
    });

    action = {
        type: 'LAYERS_CLOSE',
    };

    expect(reducer(initialState, action)).toEqual({
        ...initialState,
    });

    expect(reducer()).toEqual({});
});
