module.exports = function(grunt) {
  // set env to live explicitly
  grunt.registerTask('setlive', function() {
    process.env.NODE_ENV = 'production';

    console.log(process.env.NODE_ENV, process.env.NODE_ENV === 'production');
  });
};
