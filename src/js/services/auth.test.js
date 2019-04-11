import {
    isAuthenticated,
    authenticate,
    unauthenticate
} from './auth';

test('expects isAuthenticated to return false', () => {
    expect(isAuthenticated()).toBe(false);
});

test('expects authenticate to return undefined', () => {
    expect(authenticate({
        force: true
    })).toBe(undefined);
});

test('expects unauthenticate to return undefined', () => {
    expect(unauthenticate()).toBe(undefined);
});
