import {
    requestLibrary,
    getActiveIndex
} from '../../services/audio';

export const requestAudioDataAction = () => (dispatch) => {
    const library = requestLibrary();

    dispatch(setLibraryAction(library));
    dispatch(setActiveIndexAction(getActiveIndex(library.tracks)));
};

export const setLibraryAction = (library) => ({
    type: 'AUDIO_SET_LIBRARY',
    payload: library
});

export const setActiveIndexAction = (activeIndex) => ({
    type: 'AUDIO_SET_ACTIVE_INDEX',
    payload: activeIndex
});

export const setIsPlayingAction = (isPlaying) => ({
    type: 'AUDIO_SET_IS_PLAYING',
    payload: isPlaying
});

export const togglePlayAction = () => ({
    type: 'AUDIO_TOGGLE_PLAY'
});
