import { propOr } from 'ramda';

import AudioLibraryModel from '../models/AudioLibrary';

import audioData from '../../../.tmp/audio.json';

import { isAuthenticated } from './auth';
import storage from './storage';

import { getRandom } from '../util/math';
import { isPropTrueAtIndex } from '../util/array';

export const getLibrary = (showAll = isAuthenticated()) => new AudioLibraryModel(audioData, showAll);

export const getRandomIndex = (tracks) => {
    const filterList = tracks.filter((item) => !item.hidden);

    return tracks.indexOf(filterList[getRandom(0, filterList.length - 1)]);
};

export const getActiveIndex = (tracks) => {
    const activeIndex = tracks.findIndex(track => track.path === loadActiveTrackPath());

    return activeIndex !== -1 ? activeIndex : getRandomIndex(tracks);
};

export const getNextIndex = (activeIndex, tracks) => {
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

export const isSameAlbum = (track, nextTrack) =>
    (track && nextTrack) &&
    (track.artist && nextTrack.artist && track.album && nextTrack.album) &&
    (track.artist.id === nextTrack.artist.id) && (track.album.id === nextTrack.album.id);

export const getArtist = (library, artistId) => library.artists.find((artist) => artist.id === artistId);

export const getAlbum = (library, artistId, albumId) =>
    propOr([], 'albums', getArtist(library, artistId)).find((album) => album.id === albumId);

export const loadActiveTrackPath = () => storage.get('audio:activeTrackPath');

export const saveActiveTrackPath = (activeTrackPath) => {
    storage.set('audio:activeTrackPath', activeTrackPath);
};
