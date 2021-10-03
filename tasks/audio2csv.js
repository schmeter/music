module.exports = function(grunt) {
  grunt.registerTask('audio2csv', function() {
    const { readJSON, write } = grunt.file;
    const { pathOr, flatten } = require('ramda');

    const audioData = readJSON(`${grunt.config('tmpFolder')}/audio.json`);
    const { baseUrl } = readJSON(`${grunt.config('cfgFolder')}/app.json`);

    const showAll = true;

    pathOr([], ['artists'], audioData).filter(artist => showAll || !artist.hidden).forEach(artist => {
      const csvData = flatten(artist.albums.filter(album => showAll || !album.hidden).map(album =>
        Object.values(album.tracks).map(value => '"' + baseUrl + encodeURI(value.path) + '"'))).join('\n');

      write(
        `${grunt.config('tmpFolder')}/csv/audio-${artist.id}.csv`,
        csvData,
      );
    });
  });
};
