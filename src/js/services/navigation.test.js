import {
  getUrlRaw,
  getUrl,
  redirectToIndex,
} from './navigation';

describe('navigation', () => {
  const { location } = window;

  beforeAll(() => {
    delete window.location;
    window.location = {
      assign: jest.fn(),
    };
  });

  afterAll(() => {
    window.location = location;
  });

  it('expects getUrlRaw to return "/audio/:artistId?/:albumId?"', () => {
    expect(getUrlRaw('audio')).toBe('/audio/:artistId?/:albumId?');
  });

  it('expects getUrl to return undefined', () => {
    expect(getUrl('')).toBe(undefined);
  });

  it('expects getUrl to return "/audio"', () => {
    expect(getUrl('audio', {
      artistId: undefined,
      albumId: undefined,
    })).toBe('/audio');
  });

  it('expects getUrl to return "/audio/artist"', () => {
    expect(getUrl('audio', {
      artistId: 'artist',
      albumId: undefined,
    })).toBe('/audio/artist');
  });

  it('expects getUrl to return "/audio/artist/album"', () => {
    expect(getUrl('audio', {
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
