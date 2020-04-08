import { loadLibrary } from './event';

jest.mock('../../../.tmp/event.json', () => require('../../../jest/mockups/event.json'), { virtual: true });

describe('event', () => {
    const library = loadLibrary();
    const libraryFull = loadLibrary(true);

    it('expects loadLibrary to return correct value', () => {
        expect(typeof library.artists).toBe('object');
        expect(typeof library.events).toBe('object');
        expect(typeof libraryFull.artists).toBe('object');
        expect(typeof libraryFull.events).toBe('object');
    });
});
