module.exports = function(grunt) {
    grunt.registerTask('version', function() {
        const { write } = grunt.file;

        write(
            `${grunt.config('outFolder')}/version.json`,
            JSON.stringify(
                {
                    rev: grunt.config.data.rev,
                    time: grunt.config.data.time,
                },
                null,
                4
            )
        );
    });
};
