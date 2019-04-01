import {
    getUrl
} from './navigation';


test('expects getUrl to return null', () => {
    expect(getUrl('')).toBe(null);
});

test('expects getUrl to return "/audio/artist/album"', () => {
    expect(getUrl('audio:artistId:albumId', {
        artistId: 'artist',
        albumId: 'album'
    })).toBe('/audio/artist/album');
});
