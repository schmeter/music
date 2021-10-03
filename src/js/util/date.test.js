import { getTimestamp } from './date';

describe('date', () => {
  it('expects getTimestamp to return number', () => {
    expect(typeof getTimestamp()).toBe('number');
  });
});
