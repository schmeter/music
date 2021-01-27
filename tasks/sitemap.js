module.exports = function(grunt) {
    grunt.registerTask('sitemap', function() {
        const { readJSON, write } = grunt.file;
        const { identity, flatten, uniq } = require('ramda');

        const { baseUrl } = readJSON(`${grunt.config('cfgFolder')}/app.json`);
        const routes = readJSON(`${grunt.config('cfgFolder')}/routes.json`);
        const { artists } = readJSON(`${grunt.config('datFolder')}/audio.json`);
        const artistParam = ':artistId';
        const albumParam = ':albumId?';

        const sitemap = uniq(flatten(Object.values(routes).map(route => {
            // audio routes
            if (route.includes('audio') && (route.includes(artistParam) || route.includes(albumParam))) {
                return artists
                    .filter(artist => !artist.hidden)
                    .map(artist => [`${baseUrl}${route
                        .replace(artistParam, artist.id)
                        .replace(`/${albumParam}`, '')}`]
                        .concat(artist.albums
                            .filter(album => !album.hidden)
                            .map(album => `${baseUrl}${route
                                .replace(artistParam, artist.id)
                                .replace(albumParam, album.id)}`,
                            )));
            // routes with required params or *
            } else if (!/:|\*/.test(route)) {
                return `${baseUrl}${route}`;
            // routes with optional params
            } else if (/\/:.+\?/.test(route)) {
                return `${baseUrl}${route.replace(/\/:.+\?/, '')}`;
            } else {
                return false;
            }
        }))).filter(identity);

        write(`${grunt.config('outFolder')}/sitemap.txt`, sitemap.join('\n'));
    });
};
