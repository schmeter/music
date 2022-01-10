module.exports = function(grunt) {
  grunt.registerTask('audio', function() {
    const { readJSON, read, write } = grunt.file;
    const { path, pathOr, pickAll } = require('ramda');
    const ID3 = require('id3-parser');
    const { marked } = require('marked');

    const mp3Folder = 'mp3';
    const assetFolder = 'assets';
    const coverImage = 'cover.jpg';
    const coverFolder = 'covers';
    const mdFolder = 'md';
    const configAudioPath = `${grunt.config('datFolder')}/audio.json`;
    const mp3TreePath = `${grunt.config('tmpFolder')}/mp3.json`;
    const imgTreePath = `${grunt.config('tmpFolder')}/cover.json`;
    const mdTreePath = `${grunt.config('tmpFolder')}/md.json`;
    const resultPath = `${grunt.config('shdFolder')}/audio.json`;
    const configAudio = readJSON(configAudioPath);
    const mp3Tree = readJSON(mp3TreePath);
    const imgTree = readJSON(imgTreePath);
    const mdTree = readJSON(mdTreePath);

    write(resultPath, JSON.stringify({
      artists: pathOr([], ['artists'], configAudio).map(
        artist => ({
          ...artist,
          // add artist image
          ...(path([artist.id, coverImage], imgTree) && {
            imgPath: `/${mp3Folder}/${artist.id}/${coverImage}`,
          }),
          items: pathOr([], ['items'], artist).map(item => {
            const itemImgPath = `/${mp3Folder}/${artist.id}/${item.id}/${coverImage}`;

            return {
              ...item,
              // add album image
              ...(path([artist.id, item.id, coverImage], imgTree)) && {
                imgPath: itemImgPath,
              },
              // add album image folder
              ...(path([artist.id, item.id, coverFolder], imgTree)) && {
                imgFolder: `/${mp3Folder}/${artist.id}/${item.id}/${coverFolder}`,
                imgItems: Object.keys(imgTree[artist.id][item.id][coverFolder]),
              },
              tracks: Object.keys(pathOr({}, [artist.id, item.id], mp3Tree)).map(fileName => {
                // read file id3
                const mp3FilePath = `${mp3Folder}/${artist.id}/${item.id}/${fileName}`;
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
