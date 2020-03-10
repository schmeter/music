import {
    isPropTrueAtIndex,
    isSameAlbum,
    getActiveIndex,
    getNextIndex,
    getArtist,
    getArtistAlbums,
    getAlbum,
    getActiveTrack,
    getLibrary,
    getArtists,
    getAlbums,
    getTracks,
    getPlayToggle,
    isPlaying,
} from './audio';

const state = {
    audio: {
        library: {
            tracks: [{
                path: 'test',
                artist: 'test',
                album: 'test',
            }, {
                path: 'test2',
                artist: 'test',
                album: 'test',
            }],
            albums: [{
                id: 'test',
            }],
            artists: [{
                id: 'test',
                albums: [{
                    id: 'test',
                }],
            }],
        },
        activeIndex: 1,
        isPlaying: false,
        playToggle: false,
    },
};

test('expects isPropTrueAtIndex to return correct value', () => {
    expect(isPropTrueAtIndex('test', 1, [{ test: false }, { test: true }])).toBe(true);
});

test('expects isSameAlbum to return correct value', () => {
    expect(isSameAlbum(state.audio.library.tracks[0], state.audio.library.tracks[1])).toBe(true);
});

test('expects getActiveIndex to return correct value', () => {
    expect(getActiveIndex(state)).toBe(1);
});

test('expects getNextIndex to return correct value', () => {
    expect(getNextIndex(state)).toBe(0);
});

test('expects getArtist to return correct value', () => {
    expect(getArtist(state, 'test')).toBe(state.audio.library.artists[0]);
});

test('expects getArtistAlbums to return correct value', () => {
    expect(getArtistAlbums(state, 'test')).toBe(state.audio.library.artists[0].albums);
});

test('expects getAlbum to return correct value', () => {
    expect(getAlbum(state, 'test', 'test')).toBe(state.audio.library.artists[0].albums[0]);
});

test('expects getActiveTrack to return correct value', () => {
    expect(getActiveTrack(state)).toBe(state.audio.library.tracks[1]);
});

test('expects getLibrary to return correct value', () => {
    expect(getLibrary(state)).toBe(state.audio.library);
});

test('expects getArtists to return correct value', () => {
    expect(getArtists(state)).toBe(state.audio.library.artists);
});

test('expects getAlbums to return correct value', () => {
    expect(getAlbums(state)).toBe(state.audio.library.albums);
});

test('expects getTracks to return correct value', () => {
    expect(getTracks(state)).toBe(state.audio.library.tracks);
});

test('expects getPlayToggle to return correct value', () => {
    expect(getPlayToggle(state)).toBe(state.audio.playToggle);
});

test('expects isPlaying to return correct value', () => {
    expect(isPlaying(state)).toBe(state.audio.isPlaying);
});

const stateWrong1 = {
    audio: {
        library: {
            tracks: [{
                path: 'test',
                artist: 'test',
                album: 'test',
            }, {
                skip: true,
                path: 'test2',
                artist: 'test',
                album: 'test2',
            }],
        },
        activeIndex: 0,
    },
};

test('expects getNextIndex to return correct value', () => {
    expect(getNextIndex(stateWrong1)).toBe(0);
});

const stateWrong2 = {
    audio: {
        library: {
            tracks: [{
                path: 'test',
                artist: 'test',
                album: 'test',
            }, {
                hidden: true,
                path: 'test2',
                artist: 'test',
                album: 'test2',
            }],
        },
        activeIndex: 0,
    },
};

test('expects getNextIndex to return correct value', () => {
    expect(getNextIndex(stateWrong2)).toBe(1);
});

const stateWrong3 = {
    audio: {
        library: {
            tracks: [{
                path: 'test',
                artist: 'test',
                album: 'test',
            }, {
                skip: true,
                path: 'test2',
                artist: 'test',
                album: 'test2',
            }, {
                path: 'test3',
                artist: 'test',
                album: 'test',
            }],
        },
        activeIndex: 0,
    },
};

test('expects getNextIndex to return correct value', () => {
    expect(getNextIndex(stateWrong3)).toBe(2);
});

const stateWrong4 = {
    audio: {
        library: {
            tracks: [{
                path: 'test',
                artist: 'test',
                album: 'test',
            }, {
                skip: true,
                loop: true,
                hidden: true,
                path: 'test2',
                artist: 'test',
                album: 'test2',
            }],
        },
        activeIndex: -1,
    },
};

test('expects getNextIndex to return correct value', () => {
    expect(getNextIndex(stateWrong4)).toBe(0);
});

const stateWrong5 = {
    audio: {
        library: {
            artists: [{
                id: 'test',
            }],
        },
    },
};

test('expects getArtistAlbums to return correct value', () => {
    expect(getArtistAlbums(stateWrong5, 'test')).toEqual([]);
});

