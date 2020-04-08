import { loadLibrary } from './video';

jest.mock('../../config/video.json', () => require('../../../jest/mockups/video.json'), { virtual: true });

describe('video', () => {
    const library = loadLibrary();
    const libraryFull = loadLibrary(true);

    it('expects loadLibrary to return correct value', () => {
        expect(typeof library.artists).toBe('object');
        expect(typeof library.videos).toBe('object');
        expect(typeof libraryFull.artists).toBe('object');
        expect(typeof libraryFull.videos).toBe('object');
    });
});
