export const isPropTrueAtIndex = (prop, index, array) =>
  array?.[index]?.[prop];

export const isSameAlbum = (track, nextTrack) =>
  (track && nextTrack) &&
    (track.artist && nextTrack.artist && track.album && nextTrack.album) &&
    (track.artist.id === nextTrack.artist.id) && (track.album.id === nextTrack.album.id);

export const getActiveIndex = state => state.audio.activeIndex;

export const getNextIndex = state => {
  const tracks = getTracks(state);

  let activeIndex = getActiveIndex(state);

  if (!tracks[activeIndex]) {
    activeIndex = 0;
  }

  let nextIndex = activeIndex + 1;

  if (!tracks[nextIndex]) {
    nextIndex = 0;
  }

  if (
    isPropTrueAtIndex('skip', nextIndex, tracks)
        || (
          isPropTrueAtIndex('hidden', nextIndex, tracks)
            && !isSameAlbum(tracks[activeIndex], tracks[nextIndex])
        )
  ) {
    for (let index = 0; index < tracks.length; index++) {
      if (!tracks[nextIndex]) {
        nextIndex = 0;
      } else if (
        !isPropTrueAtIndex('skip', nextIndex, tracks)
                && !isPropTrueAtIndex('hidden', nextIndex, tracks)
      ) {
        break;
      } else {
        nextIndex += 1;
      }
    }
  }

  return nextIndex;
};

export const getArtist = (state, artistId) =>
  getArtists(state).find(artist => artist.id === artistId);

export const getArtistAlbums = (state, artistId) =>
  getArtist(state, artistId)?.albums || [];

export const getAlbum = (state, artistId, albumId) =>
  getArtistAlbums(state, artistId).find(album => album.id === albumId);

export const getActiveTrack = state =>
  getLibrary(state).tracks[getActiveIndex(state)];

export const getLibrary = state => state.audio.library;

export const getArtists = state =>
  getLibrary(state).artists;

export const getAlbums = state =>
  getLibrary(state).albums;

export const getTracks = state =>
  getLibrary(state).tracks;

export const getPlayToggle = state => state.audio.playToggle;

export const isPlaying = state => state.audio.isPlaying;
