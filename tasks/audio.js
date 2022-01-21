module.exports = function(grunt) {
  grunt.registerTask('audio', function() {
    const { readJSON, read, write } = grunt.file;
    const { path, pathOr, pickAll } = require('ramda');
    const ID3 = require('id3-parser');
    const { marked } = require('marked');

    const assetFolder = 'assets';
    const musicFolder = 'mp3/music';
    const coverImage = 'cover.jpg';
    const coverFolder = 'covers';
    const mdFolder = 'md';
    const configAudioPath = `${grunt.config('datFolder')}/audio.json`;
    const musicSourcePath = `${grunt.config('tmpFolder')}/mp3.json`;
    const imgSourcePath = `${grunt.config('tmpFolder')}/cover.json`;
    const mdSourcePath = `${grunt.config('tmpFolder')}/md.json`;
    const audioResultPath = `${grunt.config('shdFolder')}/audio.json`;
    const configAudio = readJSON(configAudioPath);
    const { music: musicTree } = readJSON(musicSourcePath);
    const { music: coverTree } = readJSON(imgSourcePath);
    const mdTree = readJSON(mdSourcePath);

    write(audioResultPath, JSON.stringify({
      artists: pathOr([], ['artists'], configAudio).map(
        artist => ({
          ...artist,
          // add artist image
          ...(path([artist.id, coverImage], coverTree) && {
            imgPath: `/${musicFolder}/${artist.id}/${coverImage}`,
          }),
          items: pathOr([], ['items'], artist).map(item => {
            const itemImgPath = `/${musicFolder}/${artist.id}/${item.id}/${coverImage}`;

            return {
              ...item,
              // add album image
              ...(path([artist.id, item.id, coverImage], coverTree)) && {
                imgPath: itemImgPath,
              },
              // add album image folder
              ...(path([artist.id, item.id, coverFolder], coverTree)) && {
                imgFolder: `/${musicFolder}/${artist.id}/${item.id}/${coverFolder}`,
                imgItems: Object.keys(coverTree[artist.id][item.id][coverFolder]),
              },
              tracks: Object.keys(pathOr({}, [artist.id, item.id], musicTree)).map(fileName => {
                // read file id3
                const mp3FilePath = `${musicFolder}/${artist.id}/${item.id}/${fileName}`;
                const mp3SrcPath = `${grunt.config('srcFolder')}/${assetFolder}/${mp3FilePath}`;
                const fileBuffer = read(mp3SrcPath, { encoding: null });
                const fileTag = ID3.parse(fileBuffer);

                // read file lyrics
                let lyrics = '';
                const mdFileName = fileName.replace(/\.mp3/g, '.md');

                // try filenames with leading numbers and without
                [
                  mdFileName,
                  mdFileName.replace(/[0-9]+ /g, ''),
                ]
                  .filter(mdFileName => path([artist.id, item.id, mdFileName], mdTree))
                  .forEach(mdFileName => {
                    const mdFilePath = `${mdFolder}/${artist.id}/${item.id}/${mdFileName}`;
                    const mdSrcPath = `${grunt.config('srcFolder')}/${mdFilePath}`;
                    const md = read(mdSrcPath, 'utf8');

                    lyrics = marked(md);
                  });

                return {
                  path: `/${mp3FilePath}`,
                  imgPath: itemImgPath,
                  tag: pickAll([
                    'title',
                    'artist',
                    'album',
                    'year',
                    'track',
                  ], fileTag),
                  lyrics,
                };
              }),
            };
          }),
        }),
      ),
    }, null, 2));
  });
};
