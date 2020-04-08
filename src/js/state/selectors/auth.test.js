import { isLoggedIn } from './auth';

describe('auth', () => {
    const state = {
        auth: {
            isLoggedIn: false,
        },
    };

    it('expects isLoggedIn to return correct value', () => {
        expect(isLoggedIn(state)).toBe(false);
    });
});
