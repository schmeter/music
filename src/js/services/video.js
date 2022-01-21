import VideoLibraryModel from '../models/VideoLibrary';
import { data } from '../helpers/aggregate';
import { isAuthenticated } from '../helpers/auth';

export const loadLibrary = (showAll = isAuthenticated()) => new VideoLibraryModel(data.video, showAll);
