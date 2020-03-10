import reducer, { initialState } from './video';

let action;

test('expects reducer to return correct value', () => {
    action = {
        type: 'VIDEO_SET_LIBRARY',
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
