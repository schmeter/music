import {
    requestLibrary,
    getActiveIndex,
    getNextIndex,
    isSameAlbum,
    getAlbum,
    getArtist

} from './audio';

const audioLibrary = requestLibrary(true);
const tracks = audioLibrary.tracks;
const activeIndex = getActiveIndex(tracks);
const nextIndex = getNextIndex(activeIndex, tracks);
const activeTrack = tracks[activeIndex];
const nextTrack = tracks[nextIndex];

test('expects tracks to have length greater than 0', () => {
    expect(tracks.length).toBeGreaterThan(0);
});

test('expects activeIndex to be greater or equal than 0', () => {
    expect(activeIndex).toBeGreaterThanOrEqual(0);
});

test('expects nextIndex to be greater or equal than 0', () => {
    expect(nextIndex).toBeGreaterThanOrEqual(0);
});

test('expects activeTrack to be an object', () => {
    expect(typeof activeTrack).toBe('object');
});

test('expects nextTrack to be an object', () => {
    expect(typeof nextTrack).toBe('object');
});

test('expects isSameAlbum to return a boolean', () => {
    expect(typeof isSameAlbum(tracks[0], tracks[1])).toBe('boolean');
});

test('expects nextIndex for tracks.length to be greater or equal than 0', () => {
    expect(getNextIndex(tracks.length, tracks)).toBeGreaterThanOrEqual(0);
});

test('expects nextIndex for tracks.length - 1 to be greater or equal than 0', () => {
    expect(getNextIndex(tracks.length - 1, tracks)).toBeGreaterThanOrEqual(0);
});

const mockTracks = [
    {
        album: {
            id: 'album1'
        },
        artist: {
            id: 'artist1'
        },
        skip: false,
        hidden: false,
        imgPath: '/img/fallback.png',
        path: '/path1'
    },
    {
        album: {
            id: 'album2'
        },
        artist: {
            id: 'artist2'
        },
        skip: false,
        hidden: true,
        imgPath: '/img/fallback.png',
        path: '/path2'
    },
    {
        album: {
            id: 'album3'
        },
        artist: {
            id: 'artist3'
        },
        skip: true,
        hidden: false,
        imgPath: '/img/fallback.png',
        path: undefined
    }
];

test('expects nextIndex for 0 to be greater or equal than 0', () => {
    expect(getNextIndex(0, mockTracks)).toBeGreaterThanOrEqual(0);
});

test('expects nextIndex for 1 to be greater or equal than 0', () => {
    expect(getNextIndex(1, mockTracks)).toBeGreaterThanOrEqual(0);
});

test('expects getActiveIndex to be -1', () => {
    expect(getActiveIndex(mockTracks)).toBe(2);
});

const mockLibrary = {
    artists:
        [
            {
                id: 'artist1',
                albums: [
                    {
                        id: 'album1'
                    }
                ]
            },
            {
                skip: true,
                id: 'artist2',
                albums: [
                    {
                        id: 'album2'
                    }
                ]
            }
        ]
};

test('expects getAlbum to return specific object', () => {
    expect(getAlbum(mockLibrary, 'artist1', 'album1')).toEqual(mockLibrary.artists[0].albums[0]);
});

test('expects getArtist to return specific object', () => {
    expect(getArtist(mockLibrary, 'artist1')).toEqual(mockLibrary.artists[0]);
});
