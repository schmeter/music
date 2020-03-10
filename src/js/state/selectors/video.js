export const getLibrary = state => state.video.library;

export const getVideos = state =>
    getLibrary(state).videos;

