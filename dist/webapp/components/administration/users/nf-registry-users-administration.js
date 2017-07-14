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
var ngCore = require('@angular/core');
var NfRegistryService = require('nifi-registry/dist/webapp/services/nf-registry.service.js');
var ngRouter = require('@angular/router');

function NfRegistryUsersAdministration(nfRegistryService, ActivatedRoute, Router) {
    this.subscription$;
    this.route = ActivatedRoute;
    this.nfRegistryService = nfRegistryService;
    this.router = Router;
};

NfRegistryUsersAdministration.prototype = {
    constructor: NfRegistryUsersAdministration,
    rowAction: function(row, action) {
        row.checked = !row.checked;
        this.router.navigateByUrl('/nifi-registry/administration/' + this.nfRegistryService.registry.id + '/users(' + action.type + ':user/' + action.name + '/' + row.id + ')');
    },
    addUser: function() {
        this.router.navigateByUrl('/nifi-registry/administration/' + this.nfRegistryService.registry.id + '/users(sidenav:user/add)');
    },
    ngOnInit: function() {
        var self = this;
        self.subscription$ = self.route.params
        .switchMap(function(params) {
            self.nfRegistryService.adminPerspective = 'users';
            return self.nfRegistryService.getUsers(self.nfRegistryService.registry.id);
        })
        .subscribe(function(users) {
                self.nfRegistryService.users = self.nfRegistryService.filteredUsers = users;
                self.nfRegistryService.filterUsers();
            });
    },
    ngOnDestroy: function() {
        this.nfRegistryService.adminPerspective = '';
        this.subscription$.unsubscribe();
        this.nfRegistryService.users = this.nfRegistryService.filteredUsers = [];
    }
};

NfRegistryUsersAdministration.annotations = [
    new ngCore.Component({
        moduleId: __filename,
        templateUrl: 'nf-registry-users-administration.html'
    })
];

NfRegistryUsersAdministration.parameters = [NfRegistryService, ngRouter.ActivatedRoute, ngRouter.Router];

module.exports = NfRegistryUsersAdministration;
