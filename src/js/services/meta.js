import i18n from './i18n';


export const joinTitleParts = (parts) => parts.join(' | ');

export const setTitle = (string) => {
    const title = i18n(`app_title`);
    document.title = string
        ? joinTitleParts([title, string])
        : title;
};
