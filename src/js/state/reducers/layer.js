export const initialState = {
  activeId: '',
};

export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'LAYER_OPEN':
      return {
        ...state,
        activeId: action.payload,
      };
    case 'LAYERS_CLOSE':
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
