import {
    getUrl,
} from './navigation';

describe('navigation', () => {
    it('expects getUrl to return null', () => {
        expect(getUrl('')).toBe(null);
    });

    it('expects getUrl to return "/audio/artist/album"', () => {
        expect(getUrl('audio:artistId:albumId', {
            artistId: 'artist',
            albumId: 'album',
        })).toBe('/audio/artist/album');
    });
});
