/*global module*/

var bbcms = require('./index');
var path = require('path');

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['*.js', './lib/**/*.js', './test/**/*.js'],
            options: {
                browser: true,
                smarttabs: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: false,
                boss: true,
                eqnull: true,
                node: true,
                expr: true,
                globals: {
                    'it': true,
                    'xit': true,
                    'describe': true,
                    'before': true,
                    'after': true,
                    'done': true
                }
            }
        },
        jsbeautifier: {
            beautify: {
                src: ['Gruntfile.js', 'lib/**/*.js', 'test/*.js', '*.js'],
                options: {
                    config: '.jsbeautifyrc'
                }
            },
            check: {
                src: ['Gruntfile.js', 'lib/*.js', 'test/*.js', '*.js'],
                options: {
                    mode: 'VERIFY_ONLY',
                    config: '.jsbeautifyrc'
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    timeout: '10000',
                    recursive: true
                },
                src: ['test/*.js']
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '127.0.0.1'
                }
            }
        },
        mocha_istanbul: {
            coverage: {
                src: 'test', // a folder works nicely
                options: {
                    mask: '*.js'
                }
            },
            coveralls: {
                src: ['test'], // multiple folders also works
                options: {
                    coverage: true, // this will make the grunt.event.on('coverage') event listener to be triggered
                    check: {
                        lines: 75,
                        statements: 75
                    },
                    root: './lib', // define where the cover task should consider the root of libraries that are covered by tests
                    reportFormats: ['cobertura', 'lcovonly']
                }
            }
        },
        istanbul_check_coverage: {
            default: {
                options: {
                    coverageFolder: 'coverage*', // will check both coverage folders and merge the coverage results
                    check: {
                        lines: 80,
                        statements: 80
                    }
                }
            }
        }
    });

    grunt.event.on('coverage', function (lcovFileContents, done) {
        require('coveralls').handleInput(lcov, function (err) {
            if (err) {
                return done(err);
            }
            done();
        });
    });

    grunt.registerTask('coveralls', ['mocha_istanbul:coveralls']);
    grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
    grunt.registerTask('beautify', ['jsbeautifier:beautify']);
    grunt.registerTask('mocha', ['mochaTest']);

    grunt.registerTask('default', ['beautify', 'jshint', 'mocha', 'coverage']);

    grunt.registerTask('commit', ['jshint', 'mocha']);
    grunt.registerTask('timestamp', function () {
        grunt.log.subhead(new Date());
    });
};
