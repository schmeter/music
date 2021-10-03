export const initialState = {
  library: {
    videos: [],
    artists: [],
  },
};

export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'VIDEO_SET_LIBRARY':
      return {
        ...state,
        library: action.payload,
      };
    default:
      return state;
  }
};
