import { path } from 'ramda';

import strings from '../../data/i18n.json';

import storage from './storage';


export default (id) => {
    const language = getAppLanguage();
    return path([language, id], strings)
        || path(['generic', id], strings)
        || `{{${language}:${id}}}`;
};

export const getAppLanguage = () => storage.get('language:key') || getLanguages()[0];

export const getLanguages = () => Object.keys(strings).filter((key) => key !== 'generic');

export const setAppLanguage = (key) => {
    storage.set('language:key', key);
};
