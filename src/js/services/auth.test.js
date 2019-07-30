import {
    isAuthenticated,
    authenticate,
    unauthenticate
} from './auth';

test('expects isAuthenticated to return false', () => {
    expect(isAuthenticated()).toBe(false);
});

test('expects isAuthenticated to return true after forced authentication', () => {
    authenticate({
        force: true
    });

    expect(isAuthenticated()).toBe(true);
});

test('expects isAuthenticated to return true after right authentication', () => {
    authenticate({
        password: '...'
    });

    expect(isAuthenticated()).toBe(true);
});

test('expects isAuthenticated to return false after wrong authentication', () => {
    authenticate({
        password: '..'
    });

    expect(isAuthenticated()).toBe(true);
});

test('expects isAuthenticated to return false after unauthentication', () => {
    unauthenticate();

    expect(isAuthenticated()).toBe(false);
});
