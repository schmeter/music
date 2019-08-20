import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { initialState as audio } from './state/reducers/audio';
import { initialState as auth } from './state/reducers/auth';
import { initialState as layer } from './state/reducers/layer';
import rootReducer from './state/reducers';
import middlewares from './state/middlewares';

export default createStore(
    rootReducer,
    {
        audio,
        auth,
        layer,
    },
    composeWithDevTools(applyMiddleware(...middlewares()))
);
