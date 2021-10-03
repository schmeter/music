export const initialState = {
  library: {
    tracks: [],
    albums: [],
    artists: [],
  },
  activeIndex: -1,
  isPlaying: false,
  canPlayMusic: true,
  playToggle: false,
};

export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'AUDIO_SET_LIBRARY':
      return {
        ...state,
        library: action.payload,
      };
    case 'AUDIO_SET_ACTIVE_INDEX':
      return {
        ...state,
        activeIndex: action.payload,
      };
    case 'AUDIO_SET_IS_PLAYING':
      return {
        ...state,
        isPlaying: action.payload,
      };
    case 'AUDIO_TOGGLE_PLAY':
      return {
        ...state,
        playToggle: !state.playToggle,
      };
    case 'AUDIO_SET_CAN_PLAY_MUSIC':
      return {
        ...state,
        canPlayMusic: action.payload,
        isPlaying: action.payload === false ? false : state.isPlaying,
      };
    default:
      return state;
  }
};
