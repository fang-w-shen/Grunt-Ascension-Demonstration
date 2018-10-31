module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                predef: [ "console" ],
                esnext: true,
                globalstrict: false,
            },
            files: ["../js/site.js"]
        },
        uglify: {
            my_target: {
                files: {
                    '../js/output.min.js': ['../js/site.js']
                }
            }
        },
        sass: {
            dist: {
                files: {
                    "../css/site.css":"../sass/main.scss"
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ["../../**/*.cshtml"]
            },
            javascripts: {
                files: ["../js/*.js"],
                tasks: ['jshint','uglify']
            },
            sass: {
                files: ["../sass/*.scss"],
                tasks: ['sass']
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint','uglify', 'sass', 'watch']);
};