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

function NfRegistryUsersAdministration(nfRegistryService, ActivatedRoute) {
    this.subscription$;
    this.route = ActivatedRoute;
    this.nfRegistryService = nfRegistryService;
};

NfRegistryUsersAdministration.prototype = {
    constructor: NfRegistryUsersAdministration,
    ngOnInit: function() {
        var self = this;

        /**
         * The switchMap operator maps the id in the Observable route
         * parameters to a new Observable, the result of the
         * this.nfRegistryService.getRegistry() method. If a user re-navigates to this
         * component while a getRegistry request is still processing, switchMap
         * cancels the old request and then calls this.nfRegistryService.getRegistry() again.
         */
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

module.exports = NfRegistryUsersAdministration;
