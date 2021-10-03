import configApi from '../../config/api.json';

export const getApiUrl = (id, params = {}) => {
  let url = null;

  if (configApi[id]) {
    url = configApi[id];
    Object.entries(params).forEach(([key, param]) => {
      url = url.replace(`:${key}`, param);
    });
  }
  return url;
};
