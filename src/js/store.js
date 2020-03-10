import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { initialState as auth } from './state/reducers/auth';
import { initialState as audio } from './state/reducers/audio';
import { initialState as video } from './state/reducers/video';
import { initialState as event } from './state/reducers/event';
import { initialState as layer } from './state/reducers/layer';
import rootReducer from './state/reducers';
import middlewares from './state/middlewares';

export default createStore(
    rootReducer,
    {
        auth,
        audio,
        video,
        event,
        layer,
    },
    composeWithDevTools(applyMiddleware(...middlewares())),
);
