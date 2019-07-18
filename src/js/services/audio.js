import AudioLibraryModel from '../models/AudioLibrary';
import audioData from '../../../.tmp/audio.json';
import { isAuthenticated } from './auth';
import storage from './storage';
import { getRandom } from '../util/math';

export const getRandomIndex = (tracks) => {
    const filterList = tracks.filter((item) => !item.hidden);

    return tracks.indexOf(filterList[getRandom(0, filterList.length - 1)]);
};

export const loadLibrary = (showAll = isAuthenticated()) => new AudioLibraryModel(audioData, showAll);

export const loadActiveTrackPath = () => storage.get('audio:activeTrackPath');

export const saveActiveTrackPath = (activeTrackPath) => {
    storage.set('audio:activeTrackPath', activeTrackPath);
};
