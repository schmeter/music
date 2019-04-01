import routes from '../../data/routes.json';


export const getUrl = (id, params = {}) => {
    let url = null;
    if (routes[id]) {
        url = routes[id];
        Object.entries(params).forEach(([key, param]) => {
            // react router v4 optional parameters
            url = url.replace(`:${key}?`, param);
            url = url.replace(`:${key}`, param);
        });
    }
    return url;
};
