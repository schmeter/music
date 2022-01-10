import EventLibraryModel from '../models/EventLibrary';
import eventData from '../../../src/shared/event.json';
import { isAuthenticated } from './auth';

export const loadLibrary = (showAll = isAuthenticated()) => new EventLibraryModel(eventData, showAll);

export const getEventId = event => `${event.artist.title} ${event.date} ${event.title}`;
