import {
    loadLibrary,
    saveActiveTrackPath,
    loadActiveTrackPath,
    getRandomIndex,
} from '../../services/audio';

export const requestAudioLibraryAction = () => dispatch => {
    const library = loadLibrary();
    const activeIndex = library.tracks.findIndex(track => track.path === loadActiveTrackPath());

    dispatch(setLibraryAction(library));
    dispatch(setActiveIndexAction(activeIndex > -1 ? activeIndex : getRandomIndex(library.tracks)));
};

export const setLibraryAction = library => ({
    type: 'AUDIO_SET_LIBRARY',
    payload: library,
});

export const setActiveIndexAction = activeIndex => ({
    type: 'AUDIO_SET_ACTIVE_INDEX',
    payload: activeIndex,
});

export const setIsPlayingAction = isPlaying => ({
    type: 'AUDIO_SET_IS_PLAYING',
    payload: isPlaying,
});

export const togglePlayAction = () => ({
    type: 'AUDIO_TOGGLE_PLAY',
});

export const saveActiveTrackAction = track => () => {
    saveActiveTrackPath(track.path);
};
