import { flatten, pick, propOr } from 'ramda';

const getArtists = (eventData, showAll) => {
    return propOr([], 'artists', eventData).map(artist => {
        artist = Object.assign({}, artist, {
            hidden: showAll
                ? false
                : artist.hidden,
        });
        artist.events = getEvents(artist, showAll);
        return artist;
    });
};

const getEvents = (artist, showAll) => {
    return propOr([], 'events', artist).map(event => {
        event = Object.assign({}, event, {
            hidden: showAll
                ? false
                : (artist.hidden || event.hidden),
            artist: pick(['id', 'title'], artist),
        });
        return event;
    });
};

export default class EventLibraryModel {
    constructor(eventData, showAll) {
        this.artists = getArtists(Object.assign({}, eventData), showAll);
        this.events = flatten(this.artists.map(artist => artist.events));
    }
}
