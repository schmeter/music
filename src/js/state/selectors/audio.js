export const getActiveIndex = (state) => state.audio.activeIndex;

export const getActiveTrack = (state) => getLibrary(state).tracks[getActiveIndex(state)];

export const getLibrary = (state) => state.audio.library;

export const getTracks = (state) => getLibrary(state).tracks;

export const getPlayToggle = (state) => state.audio.playToggle;

export const isPlaying = (state) => state.audio.isPlaying;
