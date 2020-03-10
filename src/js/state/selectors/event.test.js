import { getLibrary, getEvents } from './event';

const state = {
    event: {
        library: {
            events: [],
        },
    },
};

test('expects getLibrary to return correct value', () => {
    expect(getLibrary(state)).toBe(state.event.library);
});

test('expects getEvents to return correct value', () => {
    expect(getEvents(state)).toBe(state.event.library.events);
});
