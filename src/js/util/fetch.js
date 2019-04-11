export const fetchJSON = (url, ignoreError = false) => new Promise((resolve, reject) => {
    fetch(url, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(`${res.status} ${res.statusText}`);
        })
        .then(resolve)
        .catch(ignoreError ? console.error : reject); // eslint-disable-line no-console
});
