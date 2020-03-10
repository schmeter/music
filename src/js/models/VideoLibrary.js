import { flatten, pick, propOr } from 'ramda';

const getArtists = (videoData, showAll) => {
    return propOr([], 'artists', videoData).map(artist => {
        artist = Object.assign({}, artist, {
            hidden: showAll
                ? false
                : artist.hidden,
        });
        artist.videos = getVideos(artist, showAll);
        return artist;
    });
};

const getVideos = (artist, showAll) => {
    return propOr([], 'videos', artist).map(video => {
        video = Object.assign({}, video, {
            hidden: showAll
                ? false
                : (artist.hidden || video.hidden),
            artist: pick(['id', 'title', 'imgPath'], artist),
        });
        return video;
    });
};

export default class VideoLibraryModel {
    constructor(videoData, showAll) {
        this.artists = getArtists(Object.assign({}, videoData), showAll);
        this.videos = flatten(this.artists.map(artist => artist.videos));
    }
}
