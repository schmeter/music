import i18n from './i18n';

export const joinTitleParts = (parts) => parts.join(' | ');

export const getTitle = (string) => {
    const title = i18n(`app_title`);

    return string
        ? joinTitleParts([title, string])
        : title;
};
