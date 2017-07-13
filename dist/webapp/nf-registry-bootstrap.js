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

var switchMap = require('switchMap');
var FdsDemo = require('fds.Demo');
var ngMaterial = require('@angular/material');
var covalentCore = require('@covalent/core');
// var slideInDownAnimation = require('@covalent/core');
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
var NfRegistryAddUser = require('nf.RegistryAddUser');
var NfRegistryUserDetails = require('nf.RegistryUserDetails');
var NfRegistryUserPermissions = require('nf.RegistryUserPermissions');
var NfRegistryBucketDetails = require('nf.RegistryBucketDetails');
var NfRegistryBucketPermissions = require('nf.RegistryBucketPermissions');
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
var fdsCore = require('@fluid-design-system/core');
var ngCore = require('@angular/core');
var ngRouter = require('@angular/router');
var ngPlatformBrowserDynamic = require('@angular/platform-browser-dynamic');

FdsDemo.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/fluid-design-system/fds-demo.html',
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
        templateUrl: 'nifi-registry/dist/webapp/components/explorer/nf-registry-explorer.html'
    })
];

NfRegistryExplorer.parameters = [NfRegistryService];

NfRegistryExplorerListViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/explorer/list/nf-registry-explorer-list-viewer.html'
    })
];

NfRegistryExplorerListViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryExplorerGridListViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/explorer/grid-list/nf-registry-explorer-grid-list-viewer.html'
    })
];

NfRegistryExplorerGridListViewer.parameters = [NfRegistryService];

NfRegistryDetailsViewer.annotations = [
    new ngCore.Component({
        selector: 'nf-registry-details-viewer',
        templateUrl: 'nifi-registry/dist/webapp/components/explorer/list/registry/nf-registry-details-viewer.html'
    })
];

NfRegistryDetailsViewer.parameters = [NfRegistryService];

NfRegistryDropletListViewer.annotations = [
    new ngCore.Component({
        template: ''
    })
];

NfRegistryDropletListViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryDropletGridListViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/explorer/grid-list/registry/bucket/droplet/nf-registry-droplet-grid-list-viewer.html'
    })
];

NfRegistryDropletGridListViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryDropletDetailsViewer.annotations = [
    new ngCore.Component({
        selector: 'nf-registry-droplet-details-viewer',
        templateUrl: 'nifi-registry/dist/webapp/components/explorer/list/registry/bucket/droplet/nf-registry-droplet-details-viewer.html'
    })
];

NfRegistryDropletDetailsViewer.parameters = [NfRegistryService];

NfRegistrySettings.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/settings/nf-registry-settings.html'
    })
];

NfRegistrySettings.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryAdministration.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/administration/nf-registry-administration.html'
    })
];

NfRegistryAdministration.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryGeneralAdministration.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/administration/general/nf-registry-general-administration.html'
    })
];

NfRegistryGeneralAdministration.parameters = [NfRegistryService];

NfRegistryUsersAdministration.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/administration/users/nf-registry-users-administration.html'
    })
];

NfRegistryUsersAdministration.parameters = [NfRegistryService, ngRouter.ActivatedRoute, ngRouter.Router];

NfRegistryAddUser.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/administration/users/add/nf-registry-add-user.html'
    })
];

NfRegistryAddUser.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryUserDetails.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/administration/users/details/nf-registry-user-details.html'
    })
];

NfRegistryUserDetails.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryUserPermissions.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/administration/users/permissions/nf-registry-user-permissions.html'
    })
];

NfRegistryUserPermissions.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryBucketDetails.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/administration/workflow/buckets/details/nf-registry-bucket-details.html'
    })
];

NfRegistryBucketDetails.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryBucketPermissions.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/administration/workflow/buckets/permissions/nf-registry-bucket-permissions.html'
    })
];

NfRegistryBucketPermissions.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryWorkflowAdministration.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/administration/workflow/nf-registry-workflow-administration.html'
    })
];

NfRegistryWorkflowAdministration.parameters = [NfRegistryService, ngRouter.ActivatedRoute, ngRouter.Router];

NfRegistryUsersAndGroups.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/users-and-groups/nf-registry-users-and-groups.html'
    })
];

NfRegistryUsersAndGroups.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryListViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/explorer/list/registry/nf-registry-list-viewer.html'
    })
];

NfRegistryListViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute, covalentCore.TdDataTableService];

NfRegistryGridListViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/explorer/grid-list/registry/nf-registry-grid-list-viewer.html'
    })
];

NfRegistryGridListViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryBucketDetailsViewer.annotations = [
    new ngCore.Component({
        selector: 'nf-registry-bucket-details-viewer',
        templateUrl: 'nifi-registry/dist/webapp/components/explorer/list/registry/bucket/nf-registry-bucket-details-viewer.html'
    })
];

NfRegistryBucketDetailsViewer.parameters = [NfRegistryService];

NfRegistryBucketPermissionsManager.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/manage/bucket/nf-registry-bucket-permissions-manager.html'
    })
];

NfRegistryBucketPermissionsManager.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryBucketListViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/explorer/list/registry/bucket/nf-registry-bucket-list-viewer.html'
    })
];

NfRegistryBucketListViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryBucketGridListViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/explorer/grid-list/registry/bucket/nf-registry-bucket-grid-list-viewer.html'
    })
];

NfRegistryBucketGridListViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryBucketUserOrGroupPermissionsViewer.annotations = [
    new ngCore.Component({
        templateUrl: 'nifi-registry/dist/webapp/components/manage/bucket/user-or-group/nf-registry-bucket-user-or-group-permissions-viewer.html'
    })
];

NfRegistryBucketUserOrGroupPermissionsViewer.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

NfRegistryBucketUserPermissionsViewer.annotations = [
    new ngCore.Component({
        selector: 'nf-registry-bucket-user-permissions-viewer',
        templateUrl: 'nifi-registry/dist/webapp/components/manage/bucket/user-or-group/nf-registry-bucket-user-permissions-viewer.html'
    })
];

NfRegistryBucketUserPermissionsViewer.parameters = [NfRegistryService];

NfRegistryBucketGroupPermissionsViewer.annotations = [
    new ngCore.Component({
        selector: 'nf-registry-bucket-group-permissions-viewer',
        templateUrl: 'nifi-registry/dist/webapp/components/manage/bucket/user-or-group/nf-registry-bucket-group-permissions-viewer.html'
    })
];

NfRegistryBucketGroupPermissionsViewer.parameters = [NfRegistryService];

NfRegistryService.parameters = [covalentCore.TdDataTableService];

NfRegistry.annotations = [
    new ngCore.Component({
        selector: 'nf-registry-app',
        templateUrl: 'nifi-registry/dist/webapp/nf-registry.html',
        queries : {
          sidenav : new ngCore.ViewChild('sidenav')
        }
    })
];

NfRegistry.parameters = [NfRegistryService, ngCore.ChangeDetectorRef];

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
            }, {
                path: 'nifi-registry/fluid-design-system',
                component: FdsDemo
            }, {
                path: 'nifi-registry/settings/:registryId',
                component: NfRegistrySettings
            }, {
                path: 'nifi-registry/administration/:registryId',
                component: NfRegistryAdministration,
                children: [{
                        path: '',
                        redirectTo: 'general',
                        pathMatch: 'full'
                    }, {
                        path: 'general',
                        component: NfRegistryGeneralAdministration
                    }, {
                        path: 'users',
                        component: NfRegistryUsersAdministration,
                    }, {
                        path: 'workflow',
                        component: NfRegistryWorkflowAdministration
                    }]
            }, {
                path: 'nifi-registry/users-and-groups/:registryId',
                component: NfRegistryUsersAndGroups
            }, {
                path: 'nifi-registry',
                redirectTo: '/nifi-registry/fluid-design-system',
                pathMatch: 'full'
            }, {
                path: '',
                redirectTo: '/nifi-registry/fluid-design-system',
                pathMatch: 'full'
            }, {
                path: '**',
                component: NfPageNotFoundComponent
            }, {
                path: 'user/details/:userId',
                component: NfRegistryUserDetails,
                outlet: 'sidenav'
            }, {
                path: 'user/permissions/:userId',
                component: NfRegistryUserPermissions,
                outlet: 'sidenav'
            }, {
                path: 'user/add',
                component: NfRegistryAddUser,
                outlet: 'sidenav'
            }, {
                path: 'bucket/details/:bucketId',
                component: NfRegistryBucketDetails,
                outlet: 'sidenav'
            }, {
                path: 'bucket/permissions/:bucketId',
                component: NfRegistryBucketPermissions,
                outlet: 'sidenav'
            }])
        ],
        declarations: [FdsDemo, NfRegistry, NfRegistryDetailsViewer, NfRegistryExplorer, NfRegistryExplorerListViewer, NfRegistryExplorerGridListViewer, NfRegistryBucketDetailsViewer, NfRegistryBucketPermissionsManager, NfRegistryBucketUserOrGroupPermissionsViewer, NfRegistryBucketUserPermissionsViewer, NfRegistryBucketGroupPermissionsViewer, NfRegistrySettings, NfRegistryAdministration, NfRegistryGeneralAdministration, NfRegistryUsersAdministration, NfRegistryUserDetails, NfRegistryUserPermissions, NfRegistryBucketDetails, NfRegistryBucketPermissions, NfRegistryAddUser, NfRegistryWorkflowAdministration, NfRegistryUsersAndGroups, NfRegistryListViewer, NfRegistryGridListViewer, NfRegistryBucketListViewer, NfRegistryBucketGridListViewer, NfRegistryDropletListViewer, NfRegistryDropletGridListViewer, NfRegistryDropletDetailsViewer, NfPageNotFoundComponent],
        //creates a service singletons to be available to all components of the app.
        providers: [NfRegistryService],
        bootstrap: [NfRegistry]
    })
];

//bootstrap the module
ngPlatformBrowserDynamic.platformBrowserDynamic().bootstrapModule(NfRegistryAppModule).then(function() {});
