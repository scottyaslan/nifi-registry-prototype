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
            'app': 'src/webapp/js',

            // jquery bundles
            'jquery': 'npm:jquery/dist/jquery.min.js',

            // Angular bundles
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

            // Covalent bundles
            '@covalent/core': 'npm:@covalent/core/core.umd.js',
            '@covalent/dynamic-forms': 'npm:@covalent/dynamic-forms/dynamic-forms.umd.js',
            '@covalent/highlight': 'npm:@covalent/highlight/highlight.umd.js',
            '@covalent/http': 'npm:@covalent/http/http.umd.js',
            '@covalent/markdown': 'npm:@covalent/markdown/markdown.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'switchMap': 'npm:rxjs/add/operator/switchMap',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'hammerjs': 'npm:hammerjs/hammer.min.js',

            // Fluid Design System bundles
            '@fluid-design-system/core': 'npm:@fluid-design-system/dist/platform/core/fluid-design-system.module.js',

            // Nifi Registry
            'fds.Demo': 'nifi-registry/src/webapp/js/fds-demo.js',
            'nf.Registry': 'nifi-registry/src/webapp/js/nf-registry.js',
            'nf.RegistryService': 'nifi-registry/src/webapp/js/nf-registry.service.js',
            'nf.PageNotFoundComponent': 'nifi-registry/src/webapp/js/nf-registry-page-not-found.js',
            'nf.RegistryExplorer': 'nifi-registry/src/webapp/js/nf-registry-explorer.js',
            'nf.RegistryExplorerListViewer': 'nifi-registry/src/webapp/js/nf-registry-explorer-list-viewer.js',
            'nf.RegistryExplorerGridListViewer': 'nifi-registry/src/webapp/js/nf-registry-explorer-grid-list-viewer.js',
            'nf.RegistryBucketPermissionsManager': 'nifi-registry/src/webapp/js/nf-registry-bucket-permissions-manager.js',
            'nf.RegistryBucketUserOrGroupPermissionsViewer': 'nifi-registry/src/webapp/js/nf-registry-bucket-user-or-group-permissions-viewer.js',
            'nf.RegistryBucketUserPermissionsViewer': 'nifi-registry/src/webapp/js/nf-registry-bucket-user-permissions-viewer.js',
            'nf.RegistryBucketGroupPermissionsViewer': 'nifi-registry/src/webapp/js/nf-registry-bucket-group-permissions-viewer.js',
            'nf.RegistrySettings': 'nifi-registry/src/webapp/js/nf-registry-settings.js',
            'nf.RegistryUsersAndGroups': 'nifi-registry/src/webapp/js/nf-registry-users-and-groups.js',
            'nf.RegistryListViewer': 'nifi-registry/src/webapp/js/nf-registry-list-viewer.js',
            'nf.RegistryGridListViewer': 'nifi-registry/src/webapp/js/nf-registry-grid-list-viewer.js',
            'nf.RegistryBucketListViewer': 'nifi-registry/src/webapp/js/nf-registry-bucket-list-viewer.js',
            'nf.RegistryDropletListViewer': 'nifi-registry/src/webapp/js/nf-registry-droplet-list-viewer.js',
            'nf.RegistryDetailsViewer': 'nifi-registry/src/webapp/js/nf-registry-details-viewer.js',
            'nf.RegistryBucketDetailsViewer': 'nifi-registry/src/webapp/js/nf-registry-bucket-details-viewer.js',
            'nf.RegistryDropletDetailsViewer': 'nifi-registry/src/webapp/js/nf-registry-droplet-details-viewer.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: 'nifi-registry/src/webapp/js/nf-registry-bootstrap.js',
                defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'nifi-registry/src/webapp/js/systemjs-angular-loader.js'
                    }
                }
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
