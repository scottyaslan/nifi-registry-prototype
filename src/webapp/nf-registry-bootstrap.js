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
var FdsDemo = require('nifi-registry/dist/webapp/components/fluid-design-system/fds-demo.js');
var NfRegistry = require('nifi-registry/dist/webapp/nf-registry.js');
var NfRegistryService = require('nifi-registry/dist/webapp/services/nf-registry.service.js');
var NfPageNotFoundComponent = require('nifi-registry/dist/webapp/components/page-not-found/nf-registry-page-not-found.js');
var NfRegistryExplorer = require('nifi-registry/dist/webapp/components/explorer/nf-registry-explorer.js');
var NfRegistryExplorerListViewer = require('nifi-registry/dist/webapp/components/explorer/list/nf-registry-explorer-list-viewer.js');
var NfRegistryExplorerGridListViewer = require('nifi-registry/dist/webapp/components/explorer/grid-list/nf-registry-explorer-grid-list-viewer.js');
var NfRegistryBucketPermissionsManager = require('nifi-registry/dist/webapp/components/manage/bucket/nf-registry-bucket-permissions-manager.js');
var NfRegistryBucketUserOrGroupPermissionsViewer = require('nifi-registry/dist/webapp/components/manage/bucket/user-or-group/nf-registry-bucket-user-or-group-permissions-viewer.js');
var NfRegistryBucketUserPermissionsViewer = require('nifi-registry/dist/webapp/components/manage/bucket/user-or-group/nf-registry-bucket-user-permissions-viewer.js');
var NfRegistryBucketGroupPermissionsViewer = require('nifi-registry/dist/webapp/components/manage/bucket/user-or-group/nf-registry-bucket-group-permissions-viewer.js');
var NfRegistrySettings = require('nifi-registry/dist/webapp/components/settings/nf-registry-settings.js');
var NfRegistryAdministration = require('nifi-registry/dist/webapp/components/administration/nf-registry-administration.js');
var NfRegistryGeneralAdministration = require('nifi-registry/dist/webapp/components/administration/general/nf-registry-general-administration.js');
var NfRegistryUsersAdministration = require('nifi-registry/dist/webapp/components/administration/users/nf-registry-users-administration.js');
var NfRegistryAddUser = require('nifi-registry/dist/webapp/components/administration/users/add/nf-registry-add-user.js');
var NfRegistryUserDetails = require('nifi-registry/dist/webapp/components/administration/users/details/nf-registry-user-details.js');
var NfRegistryUserPermissions = require('nifi-registry/dist/webapp/components/administration/users/permissions/nf-registry-user-permissions.js');
var NfRegistryBucketDetails = require('nifi-registry/dist/webapp/components/administration/workflow/buckets/details/nf-registry-bucket-details.js');
var NfRegistryBucketPermissions = require('nifi-registry/dist/webapp/components/administration/workflow/buckets/permissions/nf-registry-bucket-permissions.js');
var NfRegistryWorkflowAdministration = require('nifi-registry/dist/webapp/components/administration/workflow/nf-registry-workflow-administration.js');
var NfRegistryUsersAndGroups = require('nifi-registry/dist/webapp/components/users-and-groups/nf-registry-users-and-groups.js');
var NfRegistryListViewer = require('nifi-registry/dist/webapp/components/explorer/list/registry/nf-registry-list-viewer.js');
var NfRegistryGridListViewer = require('nifi-registry/dist/webapp/components/explorer/grid-list/registry/nf-registry-grid-list-viewer.js');
var NfRegistryBucketListViewer = require('nifi-registry/dist/webapp/components/explorer/list/registry/bucket/nf-registry-bucket-list-viewer.js');
var NfRegistryBucketGridListViewer = require('nifi-registry/dist/webapp/components/explorer/grid-list/registry/bucket/nf-registry-bucket-grid-list-viewer.js');
var NfRegistryDropletListViewer = require('nifi-registry/dist/webapp/components/explorer/list/registry/bucket/droplet/nf-registry-droplet-list-viewer.js');
var NfRegistryDropletGridListViewer = require('nifi-registry/dist/webapp/components/explorer/grid-list/registry/bucket/droplet/nf-registry-droplet-grid-list-viewer.js');
var NfRegistryDetailsViewer = require('nifi-registry/dist/webapp/components/explorer/list/registry/nf-registry-details-viewer.js');
var NfRegistryBucketDetailsViewer = require('nifi-registry/dist/webapp/components/explorer/list/registry/bucket/nf-registry-bucket-details-viewer.js');
var NfRegistryDropletDetailsViewer = require('nifi-registry/dist/webapp/components/explorer/list/registry/bucket/droplet/nf-registry-droplet-details-viewer.js');
var fdsCore = require('@fluid-design-system/core');
var ngCore = require('@angular/core');
var ngRouter = require('@angular/router');
var ngPlatformBrowserDynamic = require('@angular/platform-browser-dynamic');

function NfRegistryAppModule() {};

NfRegistryAppModule.prototype = {
    constructor: NfRegistryAppModule
};

NfRegistryAppModule.annotations = [
    new ngCore.NgModule({
        imports: [
            fdsCore,
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
        providers: [NfRegistryService],
        bootstrap: [NfRegistry]
    })
];

//bootstrap the module
ngPlatformBrowserDynamic.platformBrowserDynamic().bootstrapModule(NfRegistryAppModule).then(function() {});
