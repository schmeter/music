import { getLibrary, getActiveIndex } from '../services/audio';


export const initAudioAction = () => (dispatch) => {
    const library = getLibrary();
    dispatch(setLibraryAction(library));
    dispatch(setTracksAction(library.tracks));
    dispatch(setActiveIndexAction(getActiveIndex(library.tracks)));
};

export const setLibraryAction = (library) => ({
    type: 'AUDIO_SET_LIBRARY',
    payload: library
});

export const setTracksAction = (tracks) => ({
    type: 'AUDIO_SET_TRACKS',
    payload: tracks
});

export const setActiveIndexAction = (activeIndex) => ({
    type: 'AUDIO_SET_ACTIVE_INDEX',
    payload: activeIndex
});

export const setActiveTrackAction = (activeTrack) => ({
    type: 'AUDIO_SET_ACTIVE_TRACK',
    payload: activeTrack
});

export const setIsPlayingAction = (isPlaying) => ({
    type: 'AUDIO_SET_IS_PLAYING',
    payload: isPlaying
});

export const togglePlayAction = () => ({
    type: 'AUDIO_TOGGLE_PLAY'
});
