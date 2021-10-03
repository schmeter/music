import { requestAudioLibraryAction } from './audio';
import { requestVideoLibraryAction } from './video';
import { requestEventLibraryAction } from './event';

export const requestMediaLibraryAction = () => dispatch => {
  dispatch(requestAudioLibraryAction());
  dispatch(requestVideoLibraryAction());
  dispatch(requestEventLibraryAction());
};
