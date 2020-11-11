import {
    getUrl,
    redirectToIndex,
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

    it('expects redirectToIndex to call window.location.assign', () => {
        redirectToIndex();
        expect(window.location.assign).toHaveBeenCalledWith(getUrl('index'));

        redirectToIndex(1);
        expect(window.location.assign).toHaveBeenCalledWith(`${getUrl('index')}?1`);
    });
});
