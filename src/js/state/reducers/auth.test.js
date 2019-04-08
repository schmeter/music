import reduceAuth from './auth';

test('expects reduceAuth to return default state', () => {
    expect(reduceAuth(undefined, {})).toEqual({});
});

test('expects reduceAuth to return object', () => {
    expect(reduceAuth({}, {})).toEqual({});
});

test('expects reduceAuth to return object', () => {
    const action = {
        type: 'AUTH_SET_LOGGED_IN',
        payload: false
    };
    expect(reduceAuth({}, action)).toEqual({
        isLoggedIn: false
    });
});
