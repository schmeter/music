import md5 from 'md5';

import {
  authenticate,
  unauthenticate,
  isAuthenticated,
} from '../../helpers/auth';

export const loginAction = (credentials, expiration) => dispatch => {
  if (md5(credentials.password) === '2f43b42fd833d1e77420a8dae7419000') {
    authenticate(credentials, expiration);
    dispatch(setLoggedInAction());
  }
};

export const logoutAction = () => dispatch => {
  unauthenticate();
  dispatch(setLoggedInAction());
};

export const setLoggedInAction = (isLoggedIn = isAuthenticated()) => ({
  type: 'AUTH_SET_LOGGED_IN',
  payload: isLoggedIn,
});
