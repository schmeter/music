import '@babel/polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import App from './components/App';
import rootReducer from './state/reducers';
import middlewares from './state/middlewares';
import { isAuthenticated } from './services/auth';

const store = createStore(
    rootReducer,
    {
        auth: {
            isLoggedIn: isAuthenticated()
        },
        audio: {
            library: null,
            tracks: [],
            activeIndex: -1,
            activeTrack: null,
            isPlaying: false,
            playToggle: false
        },
        layer: {
            activeId: ''
        }
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
