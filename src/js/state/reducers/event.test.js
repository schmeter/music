import reducer, { initialState } from './event';

let action;

test('expects reducer to return correct value', () => {
    action = {
        type: 'EVENT_SET_LIBRARY',
        payload: {
            test: 'test',
        },
    };

    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        library: action.payload,
    });

    expect(reducer()).toEqual({});
});
