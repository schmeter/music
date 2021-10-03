import {
  authenticate,
  unauthenticate,
  isAuthenticated,
} from '../../services/auth';

export const loginAction = (credentials, expiration) => dispatch => {
  authenticate(credentials, expiration);
  dispatch(setLoggedInAction());
};

export const logoutAction = () => dispatch => {
  unauthenticate();
  dispatch(setLoggedInAction());
};

export const setLoggedInAction = (isLoggedIn = isAuthenticated()) => ({
  type: 'AUTH_SET_LOGGED_IN',
  payload: isLoggedIn,
});
