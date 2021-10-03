import VideoLibraryModel from '../models/VideoLibrary';
import videoData from '../../../shared/video.json';
import { isAuthenticated } from './auth';

export const loadLibrary = (showAll = isAuthenticated()) => new VideoLibraryModel(videoData, showAll);
