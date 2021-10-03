import reducer, { initialState } from './audio';

describe('audio', () => {
  let action;

  it('expects reducer to return correct value', () => {
    action = {
      type: 'AUDIO_SET_LIBRARY',
      payload: {
        test: 'test',
      },
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      library: action.payload,
    });

    action = {
      type: 'AUDIO_SET_ACTIVE_INDEX',
      payload: 0,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      activeIndex: action.payload,
    });

    action = {
      type: 'AUDIO_SET_IS_PLAYING',
      payload: true,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isPlaying: action.payload,
    });

    action = {
      type: 'AUDIO_TOGGLE_PLAY',
      payload: true,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      playToggle: action.payload,
    });

    action = {
      type: 'AUDIO_SET_CAN_PLAY_MUSIC',
      payload: false,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      canPlayMusic: action.payload,
      isPlaying: action.payload === false ? false : initialState.isPlaying,
    });

    action = {
      type: 'AUDIO_SET_CAN_PLAY_MUSIC',
      payload: true,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      canPlayMusic: action.payload,
      isPlaying: action.payload === false ? false : initialState.isPlaying,
    });

    expect(reducer()).toEqual({});
  });
});
