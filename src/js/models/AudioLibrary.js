import { flatten, pick, propOr } from 'ramda';

import configApp from '../../data/app.json';


export const getArtists = (audioData, showAll) => {
    return propOr([], 'artists', audioData).map((artist) => {
        artist = Object.assign({}, artist, {
            hidden: showAll
                ? false
                : artist.hidden,
            loop: artist.loop,
            skip: artist.skip,
            imgPath: artist.imgPath || configApp.fallbackImage
        });
        artist.albums = getAlbums(artist, showAll);
        return artist;
    });
};

export const getAlbums = (artist, showAll) => {
    return propOr([], 'albums', artist).map((album) => {
        album = Object.assign({}, album, {
            hidden: showAll
                ? false
                : (artist.hidden || album.hidden),
            loop: (artist.loop || album.loop),
            skip: (artist.skip || album.skip),
            imgPath: album.imgPath || configApp.fallbackImage,
            imgFolder: album.imgFolder,
            artist: pick(['id', 'title'], artist)
        });
        album.tracks = getTracks(album, showAll);
        return album;
    });
};

export const getTracks = (album, showAll) => {
    return Object.values(propOr({}, 'tracks', album)).map((track) => {
        track = Object.assign({}, track, {
            hidden: showAll
                ? false
                : album.hidden,
            loop: album.loop,
            skip: album.skip,
            path: track.path,
            imgPath: album.imgPath,
            artist: album.artist,
            album: pick(['id', 'title'], album)
        });
        return track;
    });
};

export default class AudioLibraryModel {
    constructor(audioData, showAll) {
        this.artists = getArtists(Object.assign({}, audioData), showAll);
        this.albums = flatten(this.artists.map((artist) => artist.albums));
        this.tracks = flatten(this.albums.map((album) => album.tracks));
    }
}
