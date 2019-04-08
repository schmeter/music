import reduceAudio from './audio';

test('expects reduceAudio to return default state', () => {
    expect(reduceAudio(undefined, {})).toEqual({});
});

test('expects reduceAudio to return object', () => {
    expect(reduceAudio({}, {})).toEqual({});
});

test('expects reduceAudio to return object', () => {
    const action = {
        type: 'AUDIO_SET_LIBRARY',
        payload: {}
    };
    expect(reduceAudio({}, action)).toEqual({
        library: {}
    });
});

test('expects reduceAudio to return object', () => {
    const action = {
        type: 'AUDIO_SET_TRACKS',
        payload: []
    };
    expect(reduceAudio({}, action)).toEqual({
        tracks: []
    });
});

test('expects reduceAudio to return object', () => {
    const action = {
        type: 'AUDIO_SET_ACTIVE_INDEX',
        payload: 0
    };
    expect(reduceAudio({}, action)).toEqual({
        activeIndex: 0
    });
});

test('expects reduceAudio to return object', () => {
    const action = {
        type: 'AUDIO_SET_ACTIVE_TRACK',
        payload: {}
    };
    expect(reduceAudio({}, action)).toEqual({
        activeTrack: {}
    });
});

test('expects reduceAudio to return object', () => {
    const action = {
        type: 'AUDIO_SET_IS_PLAYING',
        payload: false
    };
    expect(reduceAudio({}, action)).toEqual({
        isPlaying: false
    });
});

test('expects reduceAudio to return object', () => {
    const action = {
        type: 'AUDIO_TOGGLE_PLAY',
        payload: false
    };
    expect(reduceAudio({}, action)).toEqual({
        playToggle: true
    });
});
