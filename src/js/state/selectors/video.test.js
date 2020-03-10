import { getLibrary, getVideos } from './video';

const state = {
    video: {
        library: {
            videos: [],
        },
    },
};

test('expects getLibrary to return correct value', () => {
    expect(getLibrary(state)).toBe(state.video.library);
});

test('expects getVideos to return correct value', () => {
    expect(getVideos(state)).toBe(state.video.library.videos);
});
