import thunk from 'redux-thunk';

import logger from './logger';

export default (env = process.env.NODE_ENV) => {
    let middlewares = [thunk];

    if (env !== 'production') {
        middlewares = [
            ...middlewares,
            logger(),
        ];
    }
    return middlewares;
};
