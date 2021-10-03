module.exports = function(grunt) {
  grunt.registerTask('audio', function() {
    const { readJSON, read, write } = grunt.file;
    const { path, pathOr, pickAll } = require('ramda');
    const ID3 = require('id3-parser');
    const marked = require('marked');

    const mp3Folder = 'mp3';
    const assetFolder = 'assets';
    const coverImage = 'folder.jpg';
    const coverFolder = 'folder';
    const mdFolder = 'md';

    const audioPath = `${grunt.config('datFolder')}/audio.json`;
    const mp3Path = `${grunt.config('tmpFolder')}/mp3.json`;
    const imgPath = `${grunt.config('tmpFolder')}/cover.json`;
    const mdPath = `${grunt.config('tmpFolder')}/md.json`;
    const resultPath = `${grunt.config('shdFolder')}/audio.json`;

    const configAudio = readJSON(audioPath);
    const mp3Data = readJSON(mp3Path);
    const imgData = readJSON(imgPath);
    const mdData = readJSON(mdPath);

    pathOr([], ['artists'], configAudio).forEach(artist => {
      // add artist image
      if (path([artist.id, coverImage], imgData)) {
        artist.imgPath = `/${mp3Folder}/${artist.id}/${coverImage}`;
      }
      pathOr([], ['items'], artist).forEach(album => {
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

          const tag = pickAll([
            'title',
            'artist',
            'album',
            'year',
            'track',
          ], fileTag);

          // set file lyrics
          let lyrics = '';
          const mdFileName = fileName.replace(/\.mp3/g, '.md');

          // try filenames with leading numbers and without
          [
            mdFileName,
            mdFileName.replace(/[0-9]+ /g, ''),
          ]
            .filter(mdFileName => path([artist.id, album.id, mdFileName], mdData))
            .forEach(mdFileName => {
              const mdFilePath = `${mdFolder}/${artist.id}/${album.id}/${mdFileName}`;
              const mdSrcPath = `${grunt.config('srcFolder')}/${mdFilePath}`;
              const md = read(mdSrcPath, 'utf8');

              lyrics = marked(md);
            });

          // add data to track
          album.tracks[fileName] = {
            path: `/${mp3FilePath}`,
            tag,
            lyrics,
          };
        });
      });
    });

    write(resultPath, JSON.stringify(configAudio, null, 2));
  });
};
