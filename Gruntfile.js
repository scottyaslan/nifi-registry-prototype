module.exports = function(grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dev: {
                files: {
                    'src/css/nifi-registry.css': 'src/sass/nifi-registry.scss'
                }
            },
            release: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'src/css/nifi-registry.min.css': 'src/sass/nifi-registry.scss'
                }
            }
        }
    });
    grunt.registerTask('dev', ['sass:dev']);
    grunt.registerTask('release', ['sass:dev', 'sass:release']);
};
