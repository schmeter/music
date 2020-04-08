import { getLibrary, getVideos } from './video';

describe('video', () => {
    const state = {
        video: {
            library: {
                videos: [],
            },
        },
    };

    it('expects getLibrary to return correct value', () => {
        expect(getLibrary(state)).toBe(state.video.library);
    });

    it('expects getVideos to return correct value', () => {
        expect(getVideos(state)).toBe(state.video.library.videos);
    });
});
