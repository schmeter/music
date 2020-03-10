import {
    loadLibrary,
} from '../../services/video';

export const requestVideoLibraryAction = () => dispatch => {
    const library = loadLibrary();

    dispatch(setLibraryAction(library));
};

export const setLibraryAction = library => ({
    type: 'VIDEO_SET_LIBRARY',
    payload: library,
});
