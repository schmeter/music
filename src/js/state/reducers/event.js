export const initialState = {
    library: {
        events: [],
        artists: [],
    },
};

export default (state = {}, action = {}) => {
    switch (action.type) {
        case 'EVENT_SET_LIBRARY':
            return {
                ...state,
                library: action.payload,
            };
        default:
            return state;
    }
};
