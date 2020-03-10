export const getLibrary = state => state.event.library;

export const getEvents = state =>
    getLibrary(state).events;

