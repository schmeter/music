const shelljs = require('shelljs');
const sass = require('node-sass');
const nodeSassGlobbing = require('node-sass-globbing');
const historyApiFallback = require('connect-history-api-fallback');

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    // load tasks from "tasks"-folder
    grunt.loadTasks('tasks');

    grunt.initConfig({
        modFolder: 'node_modules',
        srcFolder: 'src',
        cfgFolder: 'src/config',
        outFolder: 'public',
        tmpFolder: '.tmp',

        pkg: grunt.file.readJSON('package.json'),

        rev: shelljs.exec(
            'bash -c \'echo -n `git rev-parse --short HEAD || date +%s`\'', {
                silent: true,
            }
        ).stdout,

        time: new Date().getTime(),

        env: {
            development: {
                NODE_ENV: 'development',
            },
            staging: {
                NODE_ENV: 'staging',
            },
            production: {
                NODE_ENV: 'production',
            },
        },

        clean: {
            src: [
                '<%= srcFolder %>/sass/lib/reset-css/**/*',
                '<%= srcFolder %>/sass/lib/font-awesome/**/*',
                '<%= srcFolder %>/assets/js/**/*',
                '<%= srcFolder %>/assets/fonts/**/*',
            ],
            out: ['<%= outFolder %>/**/*'],
            tmp: ['<%= tmpFolder %>/**/*'],
        },

        copy: {
            'reset-css': {
                expand: true,
                cwd: '<%= modFolder %>/reset-css/sass',
                src: ['_reset.scss'],
                dest: '<%= srcFolder %>/sass/lib/reset-css',
            },
            'font-awesome-scss': {
                expand: true,
                cwd: '<%= modFolder %>/font-awesome/scss',
                src: ['*.*'],
                dest: '<%= srcFolder %>/sass/lib/font-awesome',
            },
            'font-awesome-fonts': {
                expand: true,
                cwd: '<%= modFolder %>/font-awesome/fonts',
                src: ['*.*'],
                dest: '<%= srcFolder %>/assets/fonts',
            },
            assets: {
                expand: true,
                cwd: '<%= srcFolder %>/assets',
                src: ['**/*.*'],
                dest: '<%= outFolder %>',
            },
            html: {
                expand: true,
                cwd: '<%= srcFolder %>',
                src: ['*.html', '*.txt', '.htaccess'],
                dest: '<%= outFolder %>',
                options: {
                    process: function(content) {
                        return grunt.template.process(content);
                    },
                },
            },
        },

        browserify: {
            options: {
                watch: true,
                browserifyOptions: {
                    debug: true,
                },
            },
            dev: {
                files: {
                    '<%= outFolder %>/js/<%= pkg.name %>.js': [
                        '<%= srcFolder %>/js/main.js',
                    ],
                },
            },
            prod: {
                options: {
                    watch: false,
                    browserifyOptions: {
                        debug: true,
                        fullPaths: false,
                    },
                },
                files: {
                    '<%= outFolder %>/js/<%= pkg.name %>.js': [
                        '<%= srcFolder %>/js/main.js',
                    ],
                },
            },
        },

        uglify: {
            dist: {
                options: {
                    sourceMap: true,
                },
                files: {
                    '<%= outFolder %>/js/<%= pkg.name %>.js': [
                        '<%= outFolder %>/js/<%= pkg.name %>.js',
                    ],
                },
            },
        },

        exorcise: {
            dist: {
                files: {
                    '<%= outFolder %>/js/<%= pkg.name %>.js.map': [
                        '<%= outFolder %>/js/<%= pkg.name %>.js',
                    ],
                },
            },
        },

        sass: {
            options: {
                sourceMap: true,
                implementation: sass,
                importer: nodeSassGlobbing,
            },
            dist: {
                files: {
                    '<%= outFolder %>/css/<%= pkg.name %>.css': [
                        '<%= srcFolder %>/sass/main.scss',
                    ],
                },
            },
        },

        tree: {
            mp3: {
                options: {
                    prettify: true,
                    type: ['mp3'],
                },
                files: [{
                    src: ['<%= srcFolder %>/assets/mp3'],
                    dest: '<%= tmpFolder %>/mp3.json',
                }],
            },
            cover: {
                options: {
                    prettify: true,
                    type: ['jpg'],
                },
                files: [{
                    src: ['<%= srcFolder %>/assets/mp3'],
                    dest: '<%= tmpFolder %>/cover.json',
                }],
            },
            md: {
                options: {
                    prettify: true,
                    type: ['md'],
                },
                files: [{
                    src: ['<%= srcFolder %>/md'],
                    dest: '<%= tmpFolder %>/md.json',
                }],
            },
        },

        browserSync: {
            bsFiles: {
                src: '<%= outFolder %>/**/*.*',
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: './<%= outFolder %>',
                    middleware: [historyApiFallback()],
                },
            },
        },

        watch: {
            assets: {
                files: ['<%= srcFolder %>/assets/**/*.*'],
                tasks: ['copy:assets', 'scanConfig'],
            },
            md: {
                files: ['<%= srcFolder %>/md/**/*.md'],
                tasks: ['scanConfig'],
            },
            sass: {
                files: ['<%= srcFolder %>/sass/**/*.scss'],
                tasks: ['sass'],
            },
            html: {
                files: [
                    '<%= srcFolder %>/*.html',
                    '<%= srcFolder %>/*.txt',
                    '<%= srcFolder %>/.htaccess',
                ],
                tasks: ['copy:html'],
            },
            config: {
                files: ['<%= cfgFolder %>/**/*.*'],
                tasks: ['scanConfig'],
            },
        },
    });

    grunt.registerTask('scanConfig', [
        'tree',
        'audio',
        'sitemap',
        'version',
    ]);

    grunt.registerTask('build', [
        'clean',
        'setenv',
        'copy',
        'scanConfig',
        'sass',
    ]);

    grunt.registerTask('build:dev', [
        'build',
        'browserify:dev',
    ]);

    grunt.registerTask('build:release', [
        'build',
        'browserify:prod',
        'exorcise',
        'uglify',
    ]);

    grunt.registerTask('build:prod', [
        'setlive',
        'build:release',
    ]);

    grunt.registerTask('server', [
        'browserSync',
        'watch',
    ]);

    grunt.registerTask('default', [
        'build:dev',
        'server',
    ]);
};
