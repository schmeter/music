import md5 from 'md5';

import storage from './storage';

export const isAuthenticated = () => {
    return !!storage.get('auth:isLoggedIn');
};

// expiration in seconds
export const authenticate = (credentials, expiration = 60 * 60) => {
    if (credentials.force || md5(credentials.password) === '2f43b42fd833d1e77420a8dae7419000') {
        storage.set('auth:isLoggedIn', true, expiration);
    }
};

export const unauthenticate = () => {
    storage.unset('auth:isLoggedIn');
};
