export default (state = {}, action) => {
    switch (action.type) {
        case 'LAYER_OPEN':
            return {
                ...state,
                activeId: action.payload
            };
        case 'LAYERS_CLOSE':
            return {
                ...state,
                activeId: ''
            };
        default:
            return state;
    }
};
