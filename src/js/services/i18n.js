import { path } from 'ramda';

import configI18n from '../../config/i18n.json';
import storage from './storage';

export default id => {
    const language = getAppLanguage();

    return (
        path([language, id], configI18n) ||
        path(['generic', id], configI18n) ||
        `{{${language}:${id}}}`
    );
};

export const getAppLanguage = () =>
    storage.get('language:key') || getLanguages()[0];

export const getLanguages = () =>
    Object.keys(configI18n).filter(key => key !== 'generic');

export const setAppLanguage = key => {
    storage.set('language:key', key);
};
