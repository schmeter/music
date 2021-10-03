import storage from './storage';

describe('storage', () => {
  it('expects storage to work', () => {
    storage.set('first', true);
    storage.set('second', true, 60);
    storage.set('third', true, -1);

    expect(storage.get('first')).toBe(true);
    expect(storage.get('second')).toBe(true);
    expect(storage.get('third')).toBe(undefined);

    storage.unset('first');
    expect(storage.get('first')).toBe(undefined);

    storage.clear();
    expect(storage.get('second')).toBe(undefined);
  });
});
