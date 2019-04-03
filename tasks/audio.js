module.exports = function (grunt) {
    grunt.registerTask('audio', function () {
        const { readJSON, read, write } = grunt.file;
        const { path, pathOr, pickAll } = require('ramda');
        const ID3 = require('id3-parser');
        const markdown = require('markdown');

        const mp3Folder = 'mp3';
        const assetFolder = 'assets';
        const coverImage = 'folder.jpg';
        const coverFolder = 'folder';
        const mdFolder = 'md';

        const configAudio = readJSON(`${grunt.config('cfgFolder')}/audio.json`);
        const mp3Data = readJSON(`${grunt.config('tmpFolder')}/mp3.json`);
        const imgData = readJSON(`${grunt.config('tmpFolder')}/cover.json`);
        const mdData = readJSON(`${grunt.config('tmpFolder')}/md.json`);

        pathOr([], ['artists'], configAudio).forEach(artist => {
            // add artist image
            if (path([artist.id, coverImage], imgData)) {
                artist.imgPath = `/${mp3Folder}/${artist.id}/${coverImage}`;
            }
            pathOr([], ['albums'], artist).forEach(album => {
                // add album image
                if (path([artist.id, album.id, coverImage], imgData)) {
                    album.imgPath = `/${mp3Folder}/${artist.id}/${album.id}/${coverImage}`;
                }
                // add album image folder
                if (path([artist.id, album.id, coverFolder], imgData)) {
                    album.imgFolder = `/${mp3Folder}/${artist.id}/${album.id}/${coverFolder}`;
                    album.imgItems = Object.keys(imgData[artist.id][album.id][coverFolder]);
                }
                // add album tracks
                album.tracks = pathOr({}, [artist.id, album.id], mp3Data);
                Object.keys(album.tracks).forEach(fileName => {
                    // set file id3
                    const mp3FilePath = `${mp3Folder}/${artist.id}/${album.id}/${fileName}`;
                    const mp3SrcPath = `${grunt.config('srcFolder')}/${assetFolder}/${mp3FilePath}`;
                    const fileBuffer = read(mp3SrcPath, { encoding: null });
                    const fileTag = ID3.parse(fileBuffer);
                    let tag = pickAll([
                        'title',
                        'artist',
                        'album',
                        'year',
                        'track'
                    ], fileTag);
                    // set file lyrics
                    const mdFileName = fileName.replace(/\.mp3/g, '.md');
                    let lyrics = '';
                    if (path([artist.id, album.id, mdFileName], mdData)) {
                        const mdFilePath = `${mdFolder}/${artist.id}/${album.id}/${mdFileName}`;
                        const mdSrcPath = `${grunt.config('srcFolder')}/${mdFilePath}`;
                        const md = read(mdSrcPath, 'utf8');
                        lyrics = markdown.parse(md);
                    }
                    // add data to track
                    album.tracks[fileName] = {
                        path: `/${mp3FilePath}`,
                        tag,
                        lyrics
                    };
                });
            });
        });

        write(`${grunt.config('tmpFolder')}/audio.json`, JSON.stringify(configAudio, null, 4));
    });
};
