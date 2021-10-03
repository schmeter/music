import { getLibrary, getEvents } from './event';

describe('event', () => {
  const state = {
    event: {
      library: {
        events: [],
      },
    },
  };

  it('expects getLibrary to return correct value', () => {
    expect(getLibrary(state)).toBe(state.event.library);
  });

  it('expects getEvents to return correct value', () => {
    expect(getEvents(state)).toBe(state.event.library.events);
  });
});
