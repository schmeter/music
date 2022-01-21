import EventLibraryModel from '../models/EventLibrary';
import { data } from '../helpers/aggregate';
import { isAuthenticated } from '../helpers/auth';

export const loadLibrary = (showAll = isAuthenticated()) => new EventLibraryModel(data.event, showAll);

export const getEventId = event => `${event.artist.title} ${event.date} ${event.title}`;
