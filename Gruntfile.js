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
            install: { //simulates an npm installed fluid-design-system package
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
                    'src/platform/core/common/styles/css/fluid-design-system.css': ['src/platform/core/common/styles/fluid-design-system.scss'],
                    'src/webapp/css/nifi-registry.css': ['src/webapp/theming/nifi-registry.scss']
                }]
            }
        }
    });
    grunt.registerTask('release', ['sass:dev', 'copy:main']);
};
