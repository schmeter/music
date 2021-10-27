import routes from '../../config/routes.json';

export const getRoute = id => routes[id];

export const getRouteWithParams = (id, params = {}) => {
  let url = getRoute(id);

  if (url) {
    // filter falsy params to be able to unset params explicitly
    Object.entries(params).filter(([key, param]) => param).forEach(([key, param]) => {
      // react router v4+ optional parameters
      url = url.replace(`:${key}?`, param);
      // react router non-optional parameters
      url = url.replace(`:${key}`, param);
    });
    // remove unset parameters
    url = url.split('/').filter(part => !part.includes(':')).join('/');
  }
  return url;
};

export const redirect = route => window.location.assign(route);
