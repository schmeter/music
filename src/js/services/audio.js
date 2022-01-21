import AudioLibraryModel from '../models/AudioLibrary';
import { data } from '../helpers/aggregate';
import { isAuthenticated } from '../helpers/auth';
import { storage } from '../helpers/storage';
import { getRandom } from '../helpers/math';

export const getRandomIndex = tracks => {
  const tracksFiltered = tracks.filter(item => !item.hidden);

  return tracks.indexOf(tracksFiltered[getRandom(0, tracksFiltered.length - 1)]);
};

export const loadLibrary = (showAll = isAuthenticated()) => new AudioLibraryModel(data.audio, showAll);

export const loadActiveTrackPath = () => storage.get('audio:activeTrackPath');

export const saveActiveTrackPath = activeTrackPath => {
  storage.set('audio:activeTrackPath', activeTrackPath);
};
