export default (state = {}, action) => {
    switch (action.type) {
        case 'AUTH_SET_LOGGED_IN':
            return {
                ...state,
                isLoggedIn: action.payload
            };
        default:
            return state;
    }
};
