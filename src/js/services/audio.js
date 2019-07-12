import AudioLibraryModel from '../models/AudioLibrary';
import audioData from '../../../.tmp/audio.json';
import { isAuthenticated } from './auth';
import storage from './storage';

export const loadLibrary = (showAll = isAuthenticated()) => new AudioLibraryModel(audioData, showAll);

export const loadActiveTrackPath = () => storage.get('audio:activeTrackPath');

export const saveActiveTrackPath = (activeTrackPath) => {
    storage.set('audio:activeTrackPath', activeTrackPath);
};
