import { flatten, pick, propOr } from 'ramda';

import { config } from '../helpers/aggregate';

const getArtists = (audioData, showAll) => propOr([], 'artists', audioData).map(
  artist => {
    artist = {
      ...artist,
      hidden: showAll
        ? false
        : artist.hidden,
      imgPath: artist.imgPath || config.app.fallbackImage,
    };
    return {
      ...artist,
      albums: getAlbums(artist, showAll),
    };
  },
);

const getAlbums = (artist, showAll) => propOr([], 'items', artist).map(
  album => {
    album = {
      ...album,
      hidden: showAll
        ? false
        : (artist.hidden || album.hidden),
      loop: (artist.loop || album.loop),
      skip: (artist.skip || album.skip),
      imgPath: album.imgPath || config.app.fallbackImage,
      artist: pick(['id', 'title', 'imgPath'], artist),
    };
    return {
      ...album,
      tracks: getTracks(album, showAll),
    };
  },
);

const getTracks = (album, showAll) => propOr([], 'tracks', album).map(
  track => ({
    ...track,
    hidden: showAll
      ? false
      : album.hidden,
    loop: album.loop,
    skip: album.skip,
    artist: album.artist,
    album: pick(['id', 'title', 'imgPath'], album),
  }),
);

export default class AudioLibraryModel {
  constructor(audioData, showAll) {
    this.artists = getArtists(Object.assign({}, audioData), showAll);
    this.albums = flatten(this.artists.map(artist => artist.albums));
    this.tracks = flatten(this.albums.map(album => album.reverse ? album.tracks.reverse() : album.tracks));
  }
}
