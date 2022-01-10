module.exports = function(grunt) {
  grunt.registerTask('video', function() {
    const { readJSON, write } = grunt.file;

    const videoPath = `${grunt.config('datFolder')}/video.json`;
    const resultPath = `${grunt.config('shdFolder')}/video.json`;
    const videoData = readJSON(videoPath);

    write(resultPath, JSON.stringify(videoData, null, 2));
  });
};
