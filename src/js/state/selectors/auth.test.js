import { isLoggedIn } from './auth';

const state = {
    auth: {
        isLoggedIn: false,
    },
};

test('expects isLoggedIn to return correct value', () => {
    expect(isLoggedIn(state)).toBe(false);
});
