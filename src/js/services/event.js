import EventLibraryModel from '../models/EventLibrary';
import eventData from '../../../.tmp/event.json';
import { isAuthenticated } from './auth';

export const loadLibrary = (showAll = isAuthenticated()) => new EventLibraryModel(eventData, showAll);
