import { combineReducers } from 'redux';

import auth from './auth';
import audio from './audio';
import layer from './layer';

export default combineReducers({
    auth,
    audio,
    layer
});
