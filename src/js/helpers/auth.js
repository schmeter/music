import { storage } from './storage';

export const isAuthenticated = () => {
  return !!storage.get('auth:isLoggedIn');
};

// expiration in seconds
export const authenticate = (credentials, expiration = 60 * 60) => {
  storage.set('auth:isLoggedIn', true, expiration);
};

export const unauthenticate = () => {
  storage.unset('auth:isLoggedIn');
};
