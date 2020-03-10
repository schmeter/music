import VideoLibraryModel from '../models/VideoLibrary';
import videoData from '../../config/video.json';
import { isAuthenticated } from './auth';

export const loadLibrary = (showAll = isAuthenticated()) => new VideoLibraryModel(videoData, showAll);
