import i18n, {
    getAppLanguage,
    getLanguages,
    setAppLanguage
} from './i18n';

test('expects i18n to return "{{de:}}"', () => {
    expect(i18n('')).toBe('{{de:}}');
});

test('expects getAppLanguage to return "de"', () => {
    expect(getAppLanguage()).toBe('de');
});

test('expects getLanguages to return ["de", "en"]', () => {
    expect(getLanguages()).toEqual(['de', 'en']);
});

test('expects setAppLanguage to return undefined', () => {
    expect(setAppLanguage()).toEqual(undefined);
});
