/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var FdsDemo = require('fds.Demo');
var ngMaterial = require('@angular/material');
var covalentCore = require('@covalent/core');
// var slideInDownAnimation = require('@covalent/core');
var ngForms = require('@angular/forms');
var NfRegistry = require('nf.Registry');
var NfRegistryDetailsViewer = require('nf.RegistryDetailsViewer');
var NfRegistryService = require('nf.RegistryService');
var NfRegistryExplorer = require('nf.RegistryExplorer');
var NfRegistryExplorerListViewer = require('nf.RegistryExplorerListViewer');
var NfRegistryExplorerGridListViewer = require('nf.RegistryExplorerGridListViewer');
var NfRegistryBucketDetailsViewer = require('nf.RegistryBucketDetailsViewer');
var NfRegistryBucketPermissionsManager = require('nf.RegistryBucketPermissionsManager');
var NfRegistryBucketUserOrGroupPermissionsViewer = require('nf.RegistryBucketUserOrGroupPermissionsViewer');
var NfRegistryBucketUserPermissionsViewer = require('nf.RegistryBucketUserPermissionsViewer');
var NfRegistryBucketGroupPermissionsViewer = require('nf.RegistryBucketGroupPermissionsViewer');
var NfRegistryAdministration = require('nf.RegistryAdministration');
var NfRegistryGeneralAdministration = require('nf.RegistryGeneralAdministration');
var NfRegistryUsersAdministration = require('nf.RegistryUsersAdministration');
var NfRegistryWorkflowAdministration = require('nf.RegistryWorkflowAdministration');
var NfRegistrySettings = require('nf.RegistrySettings');
var NfRegistryUsersAndGroups = require('nf.RegistryUsersAndGroups');
var NfRegistryListViewer = require('nf.RegistryListViewer');
var NfRegistryGridListViewer = require('nf.RegistryGridListViewer');
var NfRegistryBucketListViewer = require('nf.RegistryBucketListViewer');
var NfRegistryBucketGridListViewer = require('nf.RegistryBucketGridListViewer');
var NfRegistryDropletListViewer = require('nf.RegistryDropletListViewer');
var NfRegistryDropletGridListViewer = require('nf.RegistryDropletGridListViewer');
var NfRegistryDropletDetailsViewer = require('nf.RegistryDropletDetailsViewer');
var NfPageNotFoundComponent = require('nf.PageNotFoundComponent');
// var $ = require('jquery');
var fdsCore = require('@fluid-design-system/core');
var ngCore = require('@angular/core');
var ngRouter = require('@angular/router');
var ngPlatformBrowserDynamic = require('@angular/platform-browser-dynamic');
var switchMap = require('switchMap');

FdsDemo.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/fluid-design-system/fds-demo.html',
        // animations: [slideInDownAnimation],
        // host: {
        //   '[@routeAnimation]': 'routeAnimation',
        //   '[class.heading]': 'headingClass'
        // }
    })
];

FdsDemo.parameters = [ngMaterial.MdSnackBar, ngMaterial.MdDialog, covalentCore.TdDialogService, covalentCore.TdDataTableService];

NfPageNotFoundComponent.annotations = [
    new ngCore.Component({
        template: '<h1>Hello {{title}}!</h1>'
    })
];

NfRegistryExplorer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/explorer/nf-registry-explorer.html'
    })
];

// inject the NfRegistryService
NfRegistryExplorer.parameters = [NfRegistryService];

NfRegistryExplorerListViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/explorer/list/nf-registry-explorer-list-viewer.html'
    })
];

// inject the NfRegistryService
NfRegistryExplorerListViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryExplorerGridListViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/explorer/grid-list/nf-registry-explorer-grid-list-viewer.html'
    })
];

// inject the NfRegistryService
NfRegistryExplorerGridListViewer.parameters = [NfRegistryService];

NfRegistryDetailsViewer.annotations = [
    new ngCore.Component({
        selector: 'nf-registry-details-viewer',
        templateUrl: 'nifi-registry/src/webapp/components/explorer/list/registry/nf-registry-details-viewer.html'
    })
];

// inject the NfRegistryService
NfRegistryDetailsViewer.parameters = [NfRegistryService];

NfRegistryDropletListViewer.annotations = [
    new ngCore.Component({
        template: ''
    })
];

// inject services
NfRegistryDropletListViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryDropletGridListViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/explorer/grid-list/registry/bucket/droplet/nf-registry-droplet-grid-list-viewer.html'
    })
];

// inject services
NfRegistryDropletGridListViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryDropletDetailsViewer.annotations = [
    new ngCore.Component({
        selector: 'nf-registry-droplet-details-viewer',
        templateUrl: 'nifi-registry/src/webapp/components/explorer/list/registry/bucket/droplet/nf-registry-droplet-details-viewer.html'
    })
];

// inject the NfRegistryService
NfRegistryDropletDetailsViewer.parameters = [NfRegistryService];

NfRegistrySettings.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/settings/nf-registry-settings.html'
    })
];

// inject the NfRegistryService
NfRegistrySettings.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryAdministration.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/administration/nf-registry-administration.html'
    })
];

// inject the NfRegistryService
NfRegistryAdministration.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryGeneralAdministration.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/administration/general/nf-registry-general-administration.html'
    })
];

// inject the NfRegistryService
NfRegistryGeneralAdministration.parameters = [NfRegistryService];

NfRegistryUsersAdministration.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/administration/users/nf-registry-users-administration.html'
    })
];

// inject the NfRegistryService
NfRegistryUsersAdministration.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryWorkflowAdministration.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/administration/workflow/nf-registry-workflow-administration.html'
    })
];

// inject the NfRegistryService
NfRegistryWorkflowAdministration.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryUsersAndGroups.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/users-and-groups/nf-registry-users-and-groups.html'
    })
];

// inject the NfRegistryService
NfRegistryUsersAndGroups.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryListViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/explorer/list/registry/nf-registry-list-viewer.html'
    })
];

// inject services
NfRegistryListViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute, covalentCore.TdDataTableService];

NfRegistryGridListViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/explorer/grid-list/registry/nf-registry-grid-list-viewer.html'
    })
];

// inject services
NfRegistryGridListViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryBucketDetailsViewer.annotations = [
    new ngCore.Component({
        selector: 'nf-registry-bucket-details-viewer',
        templateUrl: 'nifi-registry/src/webapp/components/explorer/list/registry/bucket/nf-registry-bucket-details-viewer.html'
    })
];

// inject the NfRegistryService
NfRegistryBucketDetailsViewer.parameters = [NfRegistryService];

NfRegistryBucketPermissionsManager.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/manage/bucket/nf-registry-bucket-permissions-manager.html'
    })
];

// inject the NfRegistryService
NfRegistryBucketPermissionsManager.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryBucketListViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/explorer/list/registry/bucket/nf-registry-bucket-list-viewer.html'
    })
];

// inject services
NfRegistryBucketListViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryBucketGridListViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/explorer/grid-list/registry/bucket/nf-registry-bucket-grid-list-viewer.html'
    })
];

// inject services
NfRegistryBucketGridListViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryBucketUserOrGroupPermissionsViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/src/webapp/components/manage/bucket/user-or-group/nf-registry-bucket-user-or-group-permissions-viewer.html'
    })
];

// inject services
NfRegistryBucketUserOrGroupPermissionsViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryBucketUserPermissionsViewer.annotations = [
    new ngCore.Component({
        selector: 'nf-registry-bucket-user-permissions-viewer',
        templateUrl: 'nifi-registry/src/webapp/components/manage/bucket/user-or-group/nf-registry-bucket-user-permissions-viewer.html'
    })
];

// inject services
NfRegistryBucketUserPermissionsViewer.parameters = [NfRegistryService];

NfRegistryBucketGroupPermissionsViewer.annotations = [
    new ngCore.Component({
        selector: 'nf-registry-bucket-group-permissions-viewer',
        templateUrl: 'nifi-registry/src/webapp/components/manage/bucket/user-or-group/nf-registry-bucket-group-permissions-viewer.html'
    })
];

// inject services
NfRegistryBucketGroupPermissionsViewer.parameters = [NfRegistryService];

NfRegistryService.parameters = [covalentCore.TdDataTableService];

NfRegistry.annotations = [
    new ngCore.Component({
        selector: 'nf-registry-app',
        templateUrl: 'nifi-registry/src/webapp/nf-registry.html'
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
        imports: [
            fdsCore,
            //setting routes
            new ngRouter.RouterModule.forRoot([{
                path: 'nifi-registry/explorer',
                component: NfRegistryExplorer,
                children: [{
                        path: 'list',
                        component: NfRegistryExplorerListViewer,
                        children: [{
                            path: ':registryId',
                            component: NfRegistryListViewer,
                            children: [{
                                path: ':bucketId',
                                component: NfRegistryBucketListViewer,
                                children: [{
                                    path: ':dropletId',
                                    component: NfRegistryDropletListViewer
                                }]
                            }]
                        }]
                    }, {
                        path: 'grid-list',
                        component: NfRegistryExplorerGridListViewer,
                        children: [{
                            path: ':registryId',
                            component: NfRegistryGridListViewer,
                            children: [{
                                path: ':bucketId',
                                component: NfRegistryBucketGridListViewer,
                                children: [{
                                    path: ':dropletId',
                                    component: NfRegistryDropletGridListViewer
                                }]
                            }]
                        }]
                    }]
                    // as: "registry-explorer",
                    // canActivate: [AuthGuard] //https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router
            }, {
                path: 'nifi-registry/manage/:registryId/:bucketId',
                component: NfRegistryBucketPermissionsManager,
                children: [{
                        path: ':userOrGroupId',
                        component: NfRegistryBucketUserOrGroupPermissionsViewer
                    }]
                    // as: "registry-manager",
                    // canActivate: [AuthGuard] //https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router
            }, {
                path: 'nifi-registry/fluid-design-system',
                component: FdsDemo
            }, {
                path: 'nifi-registry/settings/:registryId',
                component: NfRegistrySettings
                    // as: "registry-settings",
                    // canActivate: [AuthGuard] //https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router
            }, {
                path: 'nifi-registry/administration/:registryId',
                component: NfRegistryAdministration,
                children: [{
                        path: '',
                        redirectTo: 'general',
                        pathMatch: 'full'
                    }, {
                        path: 'general',
                        component: NfRegistryGeneralAdministration,
                        // children: [{
                        //     path: ':registryId',
                        //     component: NfRegistryListViewer,
                        //     children: [{
                        //         path: ':bucketId',
                        //         component: NfRegistryBucketListViewer,
                        //         children: [{
                        //             path: ':dropletId',
                        //             component: NfRegistryDropletListViewer
                        //         }]
                        //     }]
                        // }]
                    }, {
                        path: 'users',
                        component: NfRegistryUsersAdministration,
                        // children: [{
                        //     path: ':registryId',
                        //     component: NfRegistryGridListViewer,
                        //         children: [{
                        //             path: ':bucketId',
                        //             component: NfRegistryBucketGridListViewer,
                        //             children: [{
                        //                 path: ':dropletId',
                        //                 component: NfRegistryDropletGridListViewer
                        //             }]
                        //         }]
                        // }]
                    }, {
                        path: 'workflow',
                        component: NfRegistryWorkflowAdministration,
                        // children: [{
                        //     path: ':registryId',
                        //     component: NfRegistryGridListViewer,
                        //         children: [{
                        //             path: ':bucketId',
                        //             component: NfRegistryBucketGridListViewer,
                        //             children: [{
                        //                 path: ':dropletId',
                        //                 component: NfRegistryDropletGridListViewer
                        //             }]
                        //         }]
                        // }]
                    }]
                    // as: "registry-administration",
                    // canActivate: [AuthGuard] //https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router
            }, {
                path: 'nifi-registry/users-and-groups/:registryId',
                component: NfRegistryUsersAndGroups
                    // as: "users",
                    // canActivate: [AuthGuard] //https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router
            }, {
                path: 'nifi-registry',
                redirectTo: '/nifi-registry/fluid-design-system',
                pathMatch: 'full'
                    // as: "registry",
                    // canActivate: [AuthGuard] //https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router
            }, {
                path: '',
                redirectTo: '/nifi-registry/fluid-design-system',
                pathMatch: 'full'
                    // as: "registry",
                    // canActivate: [AuthGuard] //https://scotch.io/tutorials/routing-angular-2-single-page-apps-with-the-component-router
            }, { path: '**', component: NfPageNotFoundComponent }])
        ],
        declarations: [FdsDemo, NfRegistry, NfRegistryDetailsViewer, NfRegistryExplorer, NfRegistryExplorerListViewer, NfRegistryExplorerGridListViewer, NfRegistryBucketDetailsViewer, NfRegistryBucketPermissionsManager, NfRegistryBucketUserOrGroupPermissionsViewer, NfRegistryBucketUserPermissionsViewer, NfRegistryBucketGroupPermissionsViewer, NfRegistrySettings, NfRegistryAdministration, NfRegistryGeneralAdministration, NfRegistryUsersAdministration, NfRegistryWorkflowAdministration, NfRegistryUsersAndGroups, NfRegistryListViewer, NfRegistryGridListViewer, NfRegistryBucketListViewer, NfRegistryBucketGridListViewer, NfRegistryDropletListViewer, NfRegistryDropletGridListViewer, NfRegistryDropletDetailsViewer, NfPageNotFoundComponent],
        //creates a service singletons to be available to all components of the app.
        providers: [NfRegistryService],
        bootstrap: [NfRegistry]
    })
];

//bootstrap the module
ngPlatformBrowserDynamic.platformBrowserDynamic().bootstrapModule(NfRegistryAppModule).then(function() {});
