module.exports = function(grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'src/', src:'**', dest: 'dist', filter: 'isFile' }
                ],
            },
            install: {
                files: [
                    { expand: true, src: ['dist/platform/**'], dest: 'node_modules/@fluid-design-system/', filter: 'isFile' }
                ],
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dev: {
                files: [{
                    'dist/webapp/css/nifi-registry.css': ['src/webapp/sass/nifi-registry.scss'],
                    'dist/platform/core/common/styles/css/fluid-design-system.css': ['src/platform/core/common/styles/fluid-design-system.scss'],
                    'dist/platform/core/buttons/primary/button.component.css': ['src/platform/core/buttons/primary/button.component.scss']
                }]
            },
            release: {
                options: {
                    outputStyle: 'compressed'
                },
                files: [{
                    'dist/webapp/css/nifi-registry.min.css': ['src/webapp/sass/nifi-registry.scss'],
                    'dist/platform/core/common/styles/css/fluid-design-system.min.css': ['src/platform/core/common/styles/fluid-design-system.scss']
                }]
            }
        }
    });
    grunt.registerTask('dev', ['sass:dev', 'copy:main', 'copy:install']);
    grunt.registerTask('release', ['sass:dev', 'copy:main', 'copy:install', 'sass:release']);
};
