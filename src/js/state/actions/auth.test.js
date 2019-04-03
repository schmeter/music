import {
    loginAction,
    logoutAction,
    setLoggedInAction
} from './auth';


test('expects loginAction to return undefined', () => {
    expect(loginAction({ password: '' })(() => {})).toBe(undefined);
});

test('expects logoutAction to return undefined', () => {
    expect(logoutAction()(() => {})).toBe(undefined);
});

test('expects setLoggedInAction to return object', () => {
    expect(setLoggedInAction(true)).toEqual({
        type: 'AUTH_SET_LOGGED_IN',
        payload: true
    });
});
