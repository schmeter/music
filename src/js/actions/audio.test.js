import {
    initAudioAction,
    setLibraryAction,
    setTracksAction,
    setActiveIndexAction,
    setActiveTrackAction,
    setIsPlayingAction,
    togglePlayAction
} from './audio';

test('expects initAudioAction to return undefined', () => {
    expect(initAudioAction()(() => {})).toBe(undefined);
});

test('expects setLibraryAction to return object', () => {
    expect(setLibraryAction({})).toEqual({
        type: 'AUDIO_SET_LIBRARY',
        payload: {}
    });
});

test('expects setTracksAction to return object', () => {
    expect(setTracksAction([])).toEqual({
        type: 'AUDIO_SET_TRACKS',
        payload: []
    });
});

test('expects setActiveIndexAction to return object', () => {
    expect(setActiveIndexAction(0)).toEqual({
        type: 'AUDIO_SET_ACTIVE_INDEX',
        payload: 0
    });
});

test('expects setActiveTrackAction to return object', () => {
    expect(setActiveTrackAction({})).toEqual({
        type: 'AUDIO_SET_ACTIVE_TRACK',
        payload: {}
    });
});

test('expects setIsPlayingAction to return object', () => {
    expect(setIsPlayingAction(false)).toEqual({
        type: 'AUDIO_SET_IS_PLAYING',
        payload: false
    });
});

test('expects togglePlayAction to return object', () => {
    expect(togglePlayAction({})).toEqual({
        type: 'AUDIO_TOGGLE_PLAY'
    });
});
