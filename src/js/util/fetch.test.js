import {
    fetchJSON
} from './fetch';


window.fetch = (url) => {
    return new Promise((resolve, reject) => {
        resolve({ ok: true, json: () => ({}) });
    });
};

window.console.error = () => {};

test('expects fetchJSON to return object', () => {
    expect(typeof fetchJSON()).toBe('object');

    window.fetch = (url) => {
        return new Promise((resolve, reject) => {
            reject(new Error());
        });
    };

    expect(typeof fetchJSON('test', true)).toBe('object');

    window.fetch = (url) => {
        return new Promise((resolve, reject) => {
            resolve({ ok: false, json: () => ({}) });
        });
    };

    expect(typeof fetchJSON('', true).then(data => data, (e) => e)).toBe('object');
});
