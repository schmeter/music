import { authenticate, unauthenticate, isAuthenticated } from '../../services/auth';

export const loginAction = (credentials, expiration) => (dispatch) => {
    authenticate(credentials, expiration);
    dispatch(setLoggedInAction(isAuthenticated()));
};

export const logoutAction = () => (dispatch) => {
    unauthenticate();
    dispatch(setLoggedInAction(isAuthenticated()));
};

export const setLoggedInAction = (isLoggedIn) => ({
    type: 'AUTH_SET_LOGGED_IN',
    payload: isLoggedIn
});
