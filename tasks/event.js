module.exports = function(grunt) {
  grunt.registerTask('event', function() {
    const { readJSON, write } = grunt.file;

    const eventPath = `${grunt.config('datFolder')}/event.json`;
    const imgTreePath = `${grunt.config('tmpFolder')}/flyer.json`;
    const resultPath = `${grunt.config('shdFolder')}/event.json`;
    const eventData = readJSON(eventPath);
    const imgTree = readJSON(imgTreePath);

    const addImgPath = (eventData, imgTree, path) => {
      if (eventData.artists) {
        eventData.artists.forEach(artist => {
          if (imgTree[artist.id]) {
            addImgPath(artist, imgTree[artist.id], `${path}${artist.id}/`);
          }
        });
      } else if (eventData.items) {
        eventData.items.forEach((event, index) => {
          if (imgTree[event.date]) {
            eventData.items[index] = Object.assign({}, event, {
              imgPath: `${path}${event.date}/flyer.jpg`,
            });
          }
        });
      }
    };

    addImgPath(eventData, imgTree, '/img/flyer/');

    write(resultPath, JSON.stringify(eventData, null, 2));
  });
};
