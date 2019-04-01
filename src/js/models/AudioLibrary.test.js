import {
    getArtists,
    getAlbums,
    getTracks
} from './AudioLibrary';


const audioData = {
    artists: [
        {
            id: 'artist1',
            albums: [
                {
                    id: 'album1',
                    tracks: {
                        key: {
                            path: '/path1'
                        }
                    }
                }
            ]
        },
        {
            hidden: true,
            id: 'artist2',
            albums: [
                {
                    id: 'album2',
                    tracks: {
                        key: {
                            path: '/path2'
                        }
                    }
                }
            ]
        },
        {
            id: 'artist3',
            albums: [
                {
                    hidden: true,
                    id: 'album3',
                    tracks: {
                        key: {
                            path: '/path3'
                        }
                    }
                }
            ]
        }
    ]
};

const expectedArtists = [
    {
        hidden: undefined,
        id: 'artist1',
        imgPath: '/img/fallback.png',
        albums: [
            {
                artist: {
                    id: 'artist1'
                },
                hidden: undefined,
                id: 'album1',
                imgFolder: undefined,
                imgPath: '/img/fallback.png',
                tracks: [
                    {
                        album: {
                            id: 'album1'
                        },
                        artist: {
                            id: 'artist1'
                        },
                        hidden: undefined,
                        imgPath: '/img/fallback.png',
                        path: '/path1'
                    }
                ]
            }
        ]
    },
    {
        hidden: true,
        id: 'artist2',
        imgPath: '/img/fallback.png',
        albums: [
            {
                artist: {
                    id: 'artist2'
                },
                hidden: true,
                id: 'album2',
                imgFolder: undefined,
                imgPath: '/img/fallback.png',
                tracks: [
                    {
                        album: {
                            id: 'album2'
                        },
                        artist: {
                            id: 'artist2'
                        },
                        hidden: true,
                        imgPath: '/img/fallback.png',
                        path: '/path2'
                    }
                ]
            }
        ]
    },
    {
        hidden: undefined,
        id: 'artist3',
        imgPath: '/img/fallback.png',
        albums: [
            {
                artist: {
                    id: 'artist3'
                },
                hidden: true,
                id: 'album3',
                imgFolder: undefined,
                imgPath: '/img/fallback.png',
                tracks: [
                    {
                        album: {
                            id: 'album3'
                        },
                        artist: {
                            id: 'artist3'
                        },
                        hidden: true,
                        imgPath: '/img/fallback.png',
                        path: '/path3'
                    }
                ]
            }
        ]
    }
];

const expectedAlbums = expectedArtists[0].albums;
const expectedTracks = expectedAlbums[0].tracks;

const artists = getArtists(audioData);
const albums = getAlbums(expectedArtists[0]);
const tracks = getTracks(expectedAlbums[0]);

test('expects artists to equal an object', () => {
    expect(artists).toEqual(expectedArtists);
});

test('expects albums to equal an object', () => {
    expect(albums).toEqual(expectedAlbums);
});

test('expects tracks to equal an object', () => {
    expect(tracks).toEqual(expectedTracks);
});

const expectedAllArtists = [
    {
        hidden: false,
        id: 'artist1',
        imgPath: '/img/fallback.png',
        albums: [
            {
                artist: {
                    id: 'artist1'
                },
                hidden: false,
                id: 'album1',
                imgFolder: undefined,
                imgPath: '/img/fallback.png',
                tracks: [
                    {
                        album: {
                            id: 'album1'
                        },
                        artist: {
                            id: 'artist1'
                        },
                        hidden: false,
                        imgPath: '/img/fallback.png',
                        path: '/path1'
                    }
                ]
            }
        ]
    },
    {
        hidden: false,
        id: 'artist2',
        imgPath: '/img/fallback.png',
        albums: [
            {
                artist: {
                    id: 'artist2'
                },
                hidden: false,
                id: 'album2',
                imgFolder: undefined,
                imgPath: '/img/fallback.png',
                tracks: [
                    {
                        album: {
                            id: 'album2'
                        },
                        artist: {
                            id: 'artist2'
                        },
                        hidden: false,
                        imgPath: '/img/fallback.png',
                        path: '/path2'
                    }
                ]
            }
        ]
    },
    {
        hidden: false,
        id: 'artist3',
        imgPath: '/img/fallback.png',
        albums: [
            {
                artist: {
                    id: 'artist3'
                },
                hidden: false,
                id: 'album3',
                imgFolder: undefined,
                imgPath: '/img/fallback.png',
                tracks: [
                    {
                        album: {
                            id: 'album3'
                        },
                        artist: {
                            id: 'artist3'
                        },
                        hidden: false,
                        imgPath: '/img/fallback.png',
                        path: '/path3'
                    }
                ]
            }
        ]
    }
];

const expectedAllAlbums = expectedAllArtists[0].albums;
const expectedAllTracks = expectedAllAlbums[0].tracks;

const allArtists = getArtists(audioData, true);
const allAlbums = getAlbums(expectedAllArtists[0], true);
const allTracks = getTracks(expectedAllAlbums[0], true);

test('expects allArtists to equal an object', () => {
    expect(allArtists).toEqual(expectedAllArtists);
});

test('expects allAlbums to equal an object', () => {
    expect(allAlbums).toEqual(expectedAllAlbums);
});

test('expects allTracks to equal an object', () => {
    expect(allTracks).toEqual(expectedAllTracks);
});
