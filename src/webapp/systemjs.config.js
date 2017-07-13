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
            'app': 'dist/webapp',

            // jquery
            'jquery': 'npm:jquery/dist/jquery.min.js',

            // Angular
            '@angular/cdk': 'npm:@angular/cdk/bundles/cdk.umd.js',
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

            // Covalent
            '@covalent/core': 'npm:@covalent/core/core.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'switchMap': 'npm:rxjs/add/operator/switchMap',
            'hammerjs': 'npm:hammerjs/hammer.min.js',

            // Fluid Design System
            '@fluid-design-system/core': 'nifi-registry/dist/platform/core/fluid-design-system.module.js',

            // Nifi Registry
            'fds.Demo': 'nifi-registry/dist/webapp/components/fluid-design-system/fds-demo.js',
            'nf.Registry': 'nifi-registry/dist/webapp/nf-registry.js',
            'nf.RegistryService': 'nifi-registry/dist/webapp/services/nf-registry.service.js',
            'nf.PageNotFoundComponent': 'nifi-registry/dist/webapp/components/page-not-found/nf-registry-page-not-found.js',
            'nf.RegistryExplorer': 'nifi-registry/dist/webapp/components/explorer/nf-registry-explorer.js',
            'nf.RegistryExplorerListViewer': 'nifi-registry/dist/webapp/components/explorer/list/nf-registry-explorer-list-viewer.js',
            'nf.RegistryExplorerGridListViewer': 'nifi-registry/dist/webapp/components/explorer/grid-list/nf-registry-explorer-grid-list-viewer.js',
            'nf.RegistryBucketPermissionsManager': 'nifi-registry/dist/webapp/components/manage/bucket/nf-registry-bucket-permissions-manager.js',
            'nf.RegistryBucketUserOrGroupPermissionsViewer': 'nifi-registry/dist/webapp/components/manage/bucket/user-or-group/nf-registry-bucket-user-or-group-permissions-viewer.js',
            'nf.RegistryBucketUserPermissionsViewer': 'nifi-registry/dist/webapp/components/manage/bucket/user-or-group/nf-registry-bucket-user-permissions-viewer.js',
            'nf.RegistryBucketGroupPermissionsViewer': 'nifi-registry/dist/webapp/components/manage/bucket/user-or-group/nf-registry-bucket-group-permissions-viewer.js',
            'nf.RegistrySettings': 'nifi-registry/dist/webapp/components/settings/nf-registry-settings.js',
            'nf.RegistryAdministration': 'nifi-registry/dist/webapp/components/administration/nf-registry-administration.js',
            'nf.RegistryGeneralAdministration': 'nifi-registry/dist/webapp/components/administration/general/nf-registry-general-administration.js',
            'nf.RegistryUsersAdministration': 'nifi-registry/dist/webapp/components/administration/users/nf-registry-users-administration.js',
            'nf.RegistryAddUser': 'nifi-registry/dist/webapp/components/administration/users/add/nf-registry-add-user.js',
            'nf.RegistryUserDetails': 'nifi-registry/dist/webapp/components/administration/users/details/nf-registry-user-details.js',
            'nf.RegistryUserPermissions': 'nifi-registry/dist/webapp/components/administration/users/permissions/nf-registry-user-permissions.js',
            'nf.RegistryBucketDetails': 'nifi-registry/dist/webapp/components/administration/workflow/buckets/details/nf-registry-bucket-details.js',
            'nf.RegistryBucketPermissions': 'nifi-registry/dist/webapp/components/administration/workflow/buckets/permissions/nf-registry-bucket-permissions.js',
            'nf.RegistryWorkflowAdministration': 'nifi-registry/dist/webapp/components/administration/workflow/nf-registry-workflow-administration.js',
            'nf.RegistryUsersAndGroups': 'nifi-registry/dist/webapp/components/users-and-groups/nf-registry-users-and-groups.js',
            'nf.RegistryListViewer': 'nifi-registry/dist/webapp/components/explorer/list/registry/nf-registry-list-viewer.js',
            'nf.RegistryGridListViewer': 'nifi-registry/dist/webapp/components/explorer/grid-list/registry/nf-registry-grid-list-viewer.js',
            'nf.RegistryBucketListViewer': 'nifi-registry/dist/webapp/components/explorer/list/registry/bucket/nf-registry-bucket-list-viewer.js',
            'nf.RegistryBucketGridListViewer': 'nifi-registry/dist/webapp/components/explorer/grid-list/registry/bucket/nf-registry-bucket-grid-list-viewer.js',
            'nf.RegistryDropletListViewer': 'nifi-registry/dist/webapp/components/explorer/list/registry/bucket/droplet/nf-registry-droplet-list-viewer.js',
            'nf.RegistryDropletGridListViewer': 'nifi-registry/dist/webapp/components/explorer/grid-list/registry/bucket/droplet/nf-registry-droplet-grid-list-viewer.js',
            'nf.RegistryDetailsViewer': 'nifi-registry/dist/webapp/components/explorer/list/registry/nf-registry-details-viewer.js',
            'nf.RegistryBucketDetailsViewer': 'nifi-registry/dist/webapp/components/explorer/list/registry/bucket/nf-registry-bucket-details-viewer.js',
            'nf.RegistryDropletDetailsViewer': 'nifi-registry/dist/webapp/components/explorer/list/registry/bucket/droplet/nf-registry-droplet-details-viewer.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: 'nifi-registry/dist/webapp/nf-registry-bootstrap.js',
                defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'nifi-registry/dist/webapp/systemjs-angular-loader.js'
                    }
                }
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
