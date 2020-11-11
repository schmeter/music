import {
    fetchJSON,
} from './fetch';

describe('fetch', () => {
    it('expects fetchJSON to return object', () => {
        const windowConsole = window.console;
        const windowFetch = window.fetch;

        delete window.console;
        delete window.fetch;

        window.console = { error: () => {} };
        window.fetch = url => {
            return new Promise((resolve, reject) => {
                reject(new Error());
            });
        };

        expect(typeof fetchJSON('test', true)).toBe('object');

        window.fetch = url => {
            return new Promise((resolve, reject) => {
                resolve({ ok: true, json: () => ({}) });
            });
        };

        expect(typeof fetchJSON()).toBe('object');

        window.fetch = url => {
            return new Promise((resolve, reject) => {
                resolve({ ok: false });
            });
        };

        expect(typeof fetchJSON('', true).then(data => data, e => e)).toBe('object');

        window.console = windowConsole;
        window.fetch = windowFetch;
    });
});
