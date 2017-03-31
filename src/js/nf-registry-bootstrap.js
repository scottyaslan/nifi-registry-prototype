(function(NfRegistry, NfRegistryExplorer, NfRegistryManager, NfRegistrySettings, NfRegistryUsers, NfPageNotFoundComponent, ngCore, ngPlatformBrowser, ngPlatformBrowserDynamic, ngMaterialModule, ngRouter, ngAnimations, ngFlexLayout) {
    'use strict';

    NfPageNotFoundComponent.annotations = [
        new ngCore.Component({
            template: '<h1>Hello {{title}}!</h1>'
        })
    ];

    NfRegistryExplorer.annotations = [
        new ngCore.Component({
            template: '<h1>Hello {{title}}!</h1>'
        })
    ];

    NfRegistryManager.annotations = [
        new ngCore.Component({
            template: '<h1>Hello {{title}}!</h1>'
        })
    ];

    NfRegistrySettings.annotations = [
        new ngCore.Component({
            template: '<h1>Hello {{title}}!</h1>'
        })
    ];

    NfRegistryUsers.annotations = [
        new ngCore.Component({
            template: '<h1>Hello {{title}}!</h1>'
        })
    ];

    NfRegistry.annotations = [
        new ngCore.Component({
            selector: 'nf-registry-app',
            templateUrl: `nifi-registry/src/views/nf-registry.html`,
            directives: [
                ngRouter.ROUTER_DIRECTIVES
            ]

        })
    ];

    function NfRegistryCoreModule() {};

    NfRegistryCoreModule.prototype = {
        constructor: NfRegistryCoreModule
    };

    NfRegistryCoreModule.annotations = [
        new ngCore.NgModule({
            imports: [ngPlatformBrowser.BrowserModule,
                ngMaterialModule.MaterialModule,
                ngAnimations.BrowserAnimationsModule,
                ngFlexLayout.FlexLayoutModule,
                new ngRouter.RouterModule.forRoot([{
                        path: 'nifi-registry/explorer',
                        component: NfRegistryExplorer
                            // as: "registry-explorer",
                            // canActivate: [AuthGuard] //https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router
                    }, {
                        path: 'nifi-registry/manager',
                        component: NfRegistryManager
                            // as: "registry-manager",
                            // canActivate: [AuthGuard] //https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router
                    }, {
                        path: 'nifi-registry/settings',
                        component: NfRegistrySettings
                            // as: "registry-settings",
                            // canActivate: [AuthGuard] //https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router
                    }, {
                        path: 'nifi-registry/users',
                        component: NfRegistryUsers
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
            declarations: [NfRegistry, NfRegistryExplorer, NfRegistryManager, NfRegistrySettings, NfRegistryUsers, NfPageNotFoundComponent],
            bootstrap: [NfRegistry]
        })
    ];

    ngPlatformBrowserDynamic.platformBrowserDynamic().bootstrapModule(NfRegistryCoreModule);
}(require('nf.Registry'), require('nf.RegistryExplorer'), require('nf.RegistryManager'), require('nf.RegistrySettings'), require('nf.RegistryUsers'), require('nf.PageNotFoundComponent'), require('@angular/core'), require('@angular/platform-browser'), require('@angular/platform-browser-dynamic'), require('@angular/material'), require('@angular/router'), require('@angular/platform-browser/animations'), require('@angular/flex-layout')));
