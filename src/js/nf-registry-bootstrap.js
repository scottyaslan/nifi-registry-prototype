(function(NfRegistry, NfRegistryDetailsViewer, NfRegistryService, NfRegistryExplorer, NfRegistryBucketDetailsViewer, NfRegistryBucketPermissionsManager, NfRegistryBucketPermissionsManagerUserViewer, NfRegistrySettings, NfRegistryUsersAndGroups, NfRegistryViewer, NfRegistryBucketViewer, NfRegistryDropletViewer, NfRegistryDropletDetailsViewer, NfPageNotFoundComponent, $, ngCore, ngCommon, ngPlatformBrowser, ngPlatformBrowserDynamic, ngMaterialModule, ngFormsModule, ngRouter, ngAnimations, ngFlexLayout, switchMap) {
    'use strict';

    NfPageNotFoundComponent.annotations = [
        new ngCore.Component({
            template: '<h1>Hello {{title}}!</h1>'
        })
    ];

    NfRegistryExplorer.annotations = [
        new ngCore.Component({
            templateUrl: `nifi-registry/src/views/nf-registry-explorer.html`
        })
    ];

    // inject the NfRegistryService
    NfRegistryExplorer.parameters = [NfRegistryService];

    NfRegistryDetailsViewer.annotations = [
        new ngCore.Component({
            selector: 'nf-registry-details-viewer',
            templateUrl: `nifi-registry/src/views/nf-registry-details-viewer.html`
        })
    ];

    // inject the NfRegistryService
    NfRegistryDetailsViewer.parameters = [NfRegistryService];

    NfRegistryDropletDetailsViewer.annotations = [
        new ngCore.Component({
            selector: 'nf-registry-droplet-details-viewer',
            templateUrl: `nifi-registry/src/views/nf-registry-droplet-details-viewer.html`
        })
    ];

    // inject the NfRegistryService
    NfRegistryDropletDetailsViewer.parameters = [NfRegistryService];

    NfRegistrySettings.annotations = [
        new ngCore.Component({
            templateUrl: `nifi-registry/src/views/nf-registry-settings.html`
        })
    ];

    // inject the NfRegistryService
    NfRegistrySettings.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

    NfRegistryUsersAndGroups.annotations = [
        new ngCore.Component({
            templateUrl: `nifi-registry/src/views/nf-registry-users-and-groups.html`
        })
    ];

    // inject the NfRegistryService
    NfRegistryUsersAndGroups.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

    NfRegistryViewer.annotations = [
        new ngCore.Component({
            templateUrl: `nifi-registry/src/views/nf-registry-viewer.html`
        })
    ];

    // inject services
    NfRegistryViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

    NfRegistryBucketDetailsViewer.annotations = [
        new ngCore.Component({
            selector: 'nf-registry-bucket-details-viewer',
            templateUrl: `nifi-registry/src/views/nf-registry-bucket-details-viewer.html`
        })
    ];

    // inject the NfRegistryService
    NfRegistryBucketDetailsViewer.parameters = [NfRegistryService];

    NfRegistryBucketPermissionsManager.annotations = [
        new ngCore.Component({
            templateUrl: `nifi-registry/src/views/nf-registry-bucket-permissions-manager.html`
        })
    ];

    // inject the NfRegistryService
    NfRegistryBucketPermissionsManager.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

    NfRegistryBucketViewer.annotations = [
        new ngCore.Component({
            templateUrl: `nifi-registry/src/views/nf-registry-bucket-viewer.html`
        })
    ];

    // inject services
    NfRegistryBucketViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

    NfRegistryBucketPermissionsManagerUserViewer.annotations = [
        new ngCore.Component({
            templateUrl: `nifi-registry/src/views/nf-registry-bucket-users-and-groups-manager.html`
        })
    ];

    // inject services
    NfRegistryBucketPermissionsManagerUserViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

    NfRegistryDropletViewer.annotations = [
        new ngCore.Component({
            template: ``
        })
    ];

    // inject services
    NfRegistryDropletViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

    NfRegistry.annotations = [
        new ngCore.Component({
            selector: 'nf-registry-app',
            templateUrl: `nifi-registry/src/views/nf-registry.html`
        })
    ];

    // inject the NfRegistryService
    NfRegistry.parameters = [NfRegistryService];

    function NfRegistryAppModule() {};

    NfRegistryAppModule.prototype = {
        constructor: NfRegistryAppModule
    };

    NfRegistryAppModule.annotations = [
        new ngCore.NgModule({
            imports: [ngPlatformBrowser.BrowserModule,
                ngMaterialModule.MaterialModule,
                ngAnimations.BrowserAnimationsModule,
                ngFlexLayout.FlexLayoutModule,
                ngFormsModule.FormsModule,
                //setting routes
                new ngRouter.RouterModule.forRoot([{
                        path: 'nifi-registry/explorer',
                        component: NfRegistryExplorer,
                        children: [{
                                path: ':registryId',
                                component: NfRegistryViewer,
                                children: [{
                                    path: ':bucketId',
                                    component: NfRegistryBucketViewer,
                                    children: [{
                                        path: ':dropletId',
                                        component: NfRegistryDropletViewer
                                    }]
                                }]
                            }]
                            // as: "registry-explorer",
                            // canActivate: [AuthGuard] //https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router
                    }, {
                        path: 'nifi-registry/manage/:registryId/:bucketId',
                        component: NfRegistryBucketPermissionsManager,
                        children: [{
                                path: ':userId',
                                component: NfRegistryBucketPermissionsManagerUserViewer
                            }]
                            // as: "registry-manager",
                            // canActivate: [AuthGuard] //https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router
                    }, {
                        path: 'nifi-registry/settings/:registryId',
                        component: NfRegistrySettings
                            // as: "registry-settings",
                            // canActivate: [AuthGuard] //https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router
                    }, {
                        path: 'nifi-registry/users-and-groups/:registryId',
                        component: NfRegistryUsersAndGroups
                            // as: "users",
                            // canActivate: [AuthGuard] //https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router
                    }, {
                        path: 'nifi-registry',
                        redirectTo: '/nifi-registry/explorer',
                        pathMatch: 'full'
                            // as: "registry",
                            // canActivate: [AuthGuard] //https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router
                    },
                    { path: '**', component: NfPageNotFoundComponent }
                ])
            ],
            declarations: [NfRegistry, NfRegistryDetailsViewer, NfRegistryExplorer, NfRegistryBucketDetailsViewer, NfRegistryBucketPermissionsManager, NfRegistryBucketPermissionsManagerUserViewer, NfRegistrySettings, NfRegistryUsersAndGroups, NfRegistryViewer, NfRegistryBucketViewer, NfRegistryDropletViewer, NfRegistryDropletDetailsViewer, NfPageNotFoundComponent],
            //creates a service singletons to be available to all components of the app.
            providers: [NfRegistryService],
            bootstrap: [NfRegistry]
        })
    ];

    //bootstrap the module
    ngPlatformBrowserDynamic.platformBrowserDynamic().bootstrapModule(NfRegistryAppModule).then(function() {
        // add hover styles for checkboxes
        $(document.body).on('mouseenter', '.mat-checkbox-inner-container', function() {
            $(this).find('.mat-checkbox-frame').css('border-color', '#1491C1');
        });
        $(document.body).on('mouseleave', '.mat-checkbox-inner-container', function() {
            $(this).find('.mat-checkbox-frame').css('border-color', '#DDDDDD');
        });
    });
}(require('nf.Registry'), require('nf.RegistryDetailsViewer'), require('nf.RegistryService'), require('nf.RegistryExplorer'), require('nf.RegistryBucketDetailsViewer'), require('nf.RegistryBucketPermissionsManager'), require('nf.RegistryBucketPermissionsManagerUserViewer'), require('nf.RegistrySettings'), require('nf.RegistryUsersAndGroups'), require('nf.RegistryViewer'), require('nf.RegistryBucketViewer'), require('nf.RegistryDropletViewer'), require('nf.RegistryDropletDetailsViewer'), require('nf.PageNotFoundComponent'), require('jquery'), require('@angular/core'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/platform-browser-dynamic'), require('@angular/material'), require('@angular/forms'), require('@angular/router'), require('@angular/platform-browser/animations'), require('@angular/flex-layout')), require('switchMap'));
