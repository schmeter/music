import i18n, {
    getAppLanguage,
    getLanguages,
    setAppLanguage,
} from './i18n';

describe('i18n', () => {
    it('expects i18n to return "{{de:}}"', () => {
        expect(i18n('')).toBe('{{de:}}');
    });

    it('expects getAppLanguage to return "de"', () => {
        expect(getAppLanguage()).toBe('de');
    });

    it('expects getAppLanguage to return "en" after setAppLanguage', () => {
        setAppLanguage('en');

        expect(getAppLanguage()).toBe('en');
    });

    it('expects getLanguages to return ["de", "en"]', () => {
        expect(getLanguages()).toEqual(['de', 'en']);
    });
});
