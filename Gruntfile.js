module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),
        'gh-pages': {
            options: {
                base: '../gen'
            },
            src: ['**']
        }
    });

    grunt.loadNpmTasks('grunt-gh-pages');



};