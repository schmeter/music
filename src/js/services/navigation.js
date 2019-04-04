import configRoutes from '../../config/routes.json';


export const getUrl = (id, params = {}) => {
    let url = null;
    if (configRoutes[id]) {
        url = configRoutes[id];
        Object.entries(params).forEach(([key, param]) => {
            // react router v4 optional parameters
            url = url.replace(`:${key}?`, param);
            url = url.replace(`:${key}`, param);
        });
    }
    return url;
};
