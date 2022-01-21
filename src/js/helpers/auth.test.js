import {
  isAuthenticated,
  authenticate,
  unauthenticate,
} from './auth';

describe('auth', () => {
  it('expects isAuthenticated to return false', () => {
    expect(isAuthenticated()).toBe(false);
  });

  it('expects isAuthenticated to return true after right authentication', () => {
    authenticate();

    expect(isAuthenticated()).toBe(true);
  });

  it('expects isAuthenticated to return false after unauthentication', () => {
    unauthenticate();

    expect(isAuthenticated()).toBe(false);
  });
});
