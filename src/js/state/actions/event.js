import {
    loadLibrary,
} from '../../services/event';

export const requestEventLibraryAction = () => dispatch => {
    const library = loadLibrary();

    dispatch(setLibraryAction(library));
};

export const setLibraryAction = library => ({
    type: 'EVENT_SET_LIBRARY',
    payload: library,
});
