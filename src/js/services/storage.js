const now = () => Math.round(new Date().getTime() / 1000);

const get = (id) => {
    const item = JSON.parse(window.localStorage.getItem(id)) || {};
    if (item.expiration && item.expiration <= now()) {
        return unset(id);
    }
    return item.data;
};

// expiration in seconds
const set = (id, data, expiration) => window.localStorage.setItem(id, JSON.stringify({
    data,
    expiration: expiration
        ? now() + expiration
        : null
}));

const unset = (id) => window.localStorage.removeItem(id);

const clear = () => window.localStorage.clear();

export default {
    get,
    set,
    unset,
    clear
};
