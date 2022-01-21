import {
  getRoute,
  getRouteWithParams,
  redirect,
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

  it('expects getRoute to return "/audio/:artistId?/:albumId?"', () => {
    expect(getRoute('audio')).toBe('/audio/:artistId?/:albumId?');
  });

  it('expects getRouteWithParams to return undefined', () => {
    expect(getRouteWithParams('')).toBe(undefined);
  });

  it('expects getRouteWithParams to return "/audio"', () => {
    expect(getRouteWithParams('audio', {
      artistId: undefined,
      albumId: undefined,
    })).toBe('/audio');
  });

  it('expects getRouteWithParams to return "/audio/artist"', () => {
    expect(getRouteWithParams('audio', {
      artistId: 'artist',
      albumId: undefined,
    })).toBe('/audio/artist');
  });

  it('expects getRouteWithParams to return "/audio/artist/album"', () => {
    expect(getRouteWithParams('audio', {
      artistId: 'artist',
      albumId: 'album',
    })).toBe('/audio/artist/album');
  });

  it('expects redirect to call window.location.assign', () => {
    redirect('test');
    expect(window.location.assign).toHaveBeenCalledWith('test');
  });
});
