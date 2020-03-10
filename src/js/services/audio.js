import AudioLibraryModel from '../models/AudioLibrary';
import audioData from '../../../.tmp/audio.json';
import { isAuthenticated } from './auth';
import storage from './storage';
import { getRandom } from '../util/math';

export const getRandomIndex = tracks => {
    const tracksFiltered = tracks.filter(item => !item.hidden);

    return tracks.indexOf(tracksFiltered[getRandom(0, tracksFiltered.length - 1)]);
};

export const loadLibrary = (showAll = isAuthenticated()) => new AudioLibraryModel(audioData, showAll);

export const loadActiveTrackPath = () => storage.get('audio:activeTrackPath');

export const saveActiveTrackPath = activeTrackPath => {
    storage.set('audio:activeTrackPath', activeTrackPath);
};
