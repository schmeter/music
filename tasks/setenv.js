module.exports = function(grunt) {
    // determine env by node variable
    grunt.registerTask('setenv', function() {
        grunt.task.run(`env:${(process.env.NODE_ENV || 'development')}`);
    });
};
