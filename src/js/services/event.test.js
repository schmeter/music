import { getEventId, loadLibrary } from './event';

describe('event', () => {
  const library = loadLibrary();
  const libraryFull = loadLibrary(true);

  it('expects loadLibrary to return correct value', () => {
    expect(typeof library.artists).toBe('object');
    expect(typeof library.events).toBe('object');
    expect(typeof libraryFull.artists).toBe('object');
    expect(typeof libraryFull.events).toBe('object');
  });

  it('expects getEventId to return correct value', () => {
    expect(getEventId({
      title: 'test',
      date: '2020-02-02',
      artist: {
        title: 'test',
      },
      imgPath: 'test',
    })).toBe('test 2020-02-02 test');
  });
});
