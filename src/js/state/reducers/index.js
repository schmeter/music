import { combineReducers } from 'redux';

import auth from './auth';
import audio from './audio';
import video from './video';
import event from './event';
import layer from './layer';

export default combineReducers({
  auth,
  audio,
  video,
  event,
  layer,
});
