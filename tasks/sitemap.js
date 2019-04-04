module.exports = function (grunt) {
    grunt.registerTask('sitemap', function () {
        const { readJSON, write } = grunt.file;
        const { identity, flatten, uniq } = require('ramda');

        const configApp = readJSON(`${grunt.config('cfgFolder')}/app.json`);
        const configRoutes = readJSON(`${grunt.config('cfgFolder')}/routes.json`);
        const configAudio = readJSON(`${grunt.config('cfgFolder')}/audio.json`);
        const artistId = ':artistId';
        const albumId = ':albumId';

        const sitemap = uniq(flatten(Object.values(configRoutes).map(route => {
            // required params or *
            if (!/:|\*/.test(route)) {
                return `${configApp.baseUrl}${route}`;
            // audio routes
            } else if (route.includes(artistId) || route.includes(albumId)) {
                return configAudio.artists
                    .filter(artist => !artist.hidden)
                    .map(artist =>
                        artist.albums
                            .filter(album => !album.hidden)
                            .map(album => `${configApp.baseUrl}${route
                                .replace(artistId, artist.id)
                                .replace(albumId, album.id)}`
                            )
                    );
            // routes with optional params
            } else if (/\/:.+\?/.test(route)) {
                return `${configApp.baseUrl}${route.replace(/\/:.+\?/, '')}`;
            } else {
                return false;
            }
        }))).filter(identity);

        write(`${grunt.config('outFolder')}/sitemap.txt`, sitemap.join('\n'));
    });
};
