import i18n from '../helpers/i18n';

export const joinTitleParts = parts => parts.join(' | ');

export const setTitle = title => {
  document.title = joinTitleParts([i18n('app_title'), title].filter(item => item));
};
