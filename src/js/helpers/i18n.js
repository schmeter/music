import { path } from 'ramda';

import { config } from './aggregate';
import { storage } from './storage';

export default id => {
  const language = getAppLanguage();

  return path([language, id], config.i18n)
        || path(['generic', id], config.i18n)
        || `{{${language}:${id}}}`;
};

export const getAppLanguage = () => storage.get('language:key') || getLanguages()[0];

export const getLanguages = () => Object.keys(config.i18n).filter(key => key !== 'generic');

export const setAppLanguage = key => {
  storage.set('language:key', key);
};
