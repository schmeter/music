import configRoutes from '../../config/routes.json';

export const getUrlRaw = id => configRoutes[id];

export const getUrl = (id, params = {}) => {
  let url = getUrlRaw(id);

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

export const redirectToIndex = searchParam => {
  let route = getUrl('index');

  if (searchParam) {
    route = `${route}?${searchParam}`;
  }

  window.location.assign(route);
};
