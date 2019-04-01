import {
    fetchJSON
} from './fetch';


window.fetch = (url) => {
    return new Promise((resolve, reject) => {
        resolve({ json: () => ({}) });
    });
};

window.Headers = class Headers {};

window.console.log = () => {};

test('expects fetchJSON to return object', () => {
    expect(typeof fetchJSON()).toBe('object');

    window.fetch = (url) => {
        return new Promise((resolve, reject) => {
            reject(new Error());
        });
    };

    expect(typeof fetchJSON()).toBe('object');

    expect(typeof fetchJSON('', () => {}, () => {})).toBe('object');
});
