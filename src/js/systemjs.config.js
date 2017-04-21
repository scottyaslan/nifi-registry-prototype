/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'nifi-registry/node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'app': 'src/js',

            // jquery bundles
            'jquery': 'npm:jquery/dist/jquery.min.js',

            // angular bundles
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
            '@angular/flex-layout': 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'switchMap': 'npm:rxjs/add/operator/switchMap',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'hammerjs': 'npm:hammerjs/hammer.min.js',

            // Nifi Registry Core
            'nf.Registry': 'nifi-registry/src/js/nf-registry.js',
            'nf.RegistryService': 'nifi-registry/src/js/nf-registry.service.js',
            'nf.PageNotFoundComponent': 'nifi-registry/src/js/nf-registry-page-not-found.js',
            'nf.RegistryExplorer': 'nifi-registry/src/js/nf-registry-explorer.js',
            'nf.RegistryBucketPermissionsManager': 'nifi-registry/src/js/nf-registry-bucket-permissions-manager.js',
            'nf.RegistryBucketPermissionsManagerUserViewer': 'nifi-registry/src/js/nf-registry-bucket-manager-user-viewer.js',
            'nf.RegistrySettings': 'nifi-registry/src/js/nf-registry-settings.js',
            'nf.RegistryUsersAndGroups': 'nifi-registry/src/js/nf-registry-users-and-groups.js',
            'nf.RegistryViewer': 'nifi-registry/src/js/nf-registry-viewer.js',
            'nf.RegistryBucketViewer': 'nifi-registry/src/js/nf-registry-bucket-viewer.js',
            'nf.RegistryDropletViewer': 'nifi-registry/src/js/nf-registry-droplet-viewer.js',
            'nf.RegistryDetailsViewer': 'nifi-registry/src/js/nf-registry-details-viewer.js',
            'nf.RegistryBucketDetailsViewer': 'nifi-registry/src/js/nf-registry-bucket-details-viewer.js',
            'nf.RegistryDropletDetailsViewer': 'nifi-registry/src/js/nf-registry-droplet-details-viewer.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: 'nifi-registry/src/js/nf-registry-bootstrap.js',
                defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'nifi-registry/src/js/systemjs-angular-loader.js'
                    }
                }
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
