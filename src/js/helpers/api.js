import { config } from './aggregate';

export const getApiUrl = (id, params = {}) => {
  let url = null;

  if (config.api[id]) {
    url = config.api[id];
    Object.entries(params).forEach(([key, param]) => {
      url = url.replace(`:${key}`, param);
    });
  }
  return url;
};
