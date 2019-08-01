import {
    getRandomIndex,
    loadLibrary,
    loadActiveTrackPath,
    saveActiveTrackPath
} from './audio';

const library = loadLibrary();
const libraryFull = loadLibrary(true);

test('expects loadLibrary to return obect', () => {
    expect(typeof library.artists).toBe('object');
    expect(typeof library.albums).toBe('object');
    expect(typeof library.tracks).toBe('object');
    expect(typeof libraryFull.artists).toBe('object');
    expect(typeof libraryFull.albums).toBe('object');
    expect(typeof libraryFull.tracks).toBe('object');
});

test('expects getRandomIndex to return number', () => {
    expect(typeof getRandomIndex(library.tracks)).toBe('number');
});

test('expects saveActiveTrackPath to save and loadActiveTrackPath to load a string', () => {
    saveActiveTrackPath('test');
    expect(loadActiveTrackPath()).toBe('test');
});
