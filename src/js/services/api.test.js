import {
    getApiUrl,
} from './api';

describe('navigation', () => {
    it('expects getApiUrl to return null', () => {
        expect(getApiUrl('')).toBe(null);
    });

    it('expects getApiUrl to return "https://www.google.de/maps/dir/here/there"', () => {
        expect(getApiUrl('googleRoute', {
            from: 'here',
            to: 'there',
        })).toBe('https://www.google.de/maps/dir/here/there');
    });
});
