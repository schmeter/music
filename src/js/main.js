import '@babel/polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { initialState as audio } from './state/reducers/audio';
import { initialState as auth } from './state/reducers/auth';
import { initialState as layer } from './state/reducers/layer';
import App from './components/App';
import rootReducer from './state/reducers';
import middlewares from './state/middlewares';

const store = createStore(
    rootReducer,
    {
        audio,
        auth,
        layer
    },
    composeWithDevTools(applyMiddleware(...middlewares()))
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);
