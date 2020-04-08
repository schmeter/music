import reducer, { initialState } from './auth';

describe('auth', () => {
    let action;

    it('expects reducer to return correct value', () => {
        action = {
            type: 'AUTH_SET_LOGGED_IN',
            payload: true,
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            isLoggedIn: action.payload,
        });

        expect(reducer()).toEqual({});
    });
});
