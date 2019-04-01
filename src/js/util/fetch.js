export const fetchJSON = (url, resolve, reject) => {
    return fetch(url, {
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8'
        })
    })
        .then(res => res.json())
        .then(resolve)
        .catch(e => reject ? reject() : console.log(e));
};
