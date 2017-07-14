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

function NfRegistryAdministration(nfRegistryService, ActivatedRoute) {
    this.subscription$;
    this.route = ActivatedRoute;
    this.nfRegistryService = nfRegistryService;
};

NfRegistryAdministration.prototype = {
    constructor: NfRegistryAdministration,
    ngOnInit: function() {
        var self = this;
        self.nfRegistryService.perspective = 'administration';
        self.subscription$ = self.route.params
        .switchMap(function(params) {
            return self.nfRegistryService.getRegistry(params['registryId']);
        })
        .subscribe(function(registry) {
            self.nfRegistryService.registry = registry;
        });
    },
    ngOnDestroy: function() {
        this.nfRegistryService.perspective = '';
        this.subscription$.unsubscribe();
        this.nfRegistryService.registry = {};
    }
};

NfRegistryAdministration.annotations = [
    new ngCore.Component({
        moduleId: __filename,
        templateUrl: 'nf-registry-administration.html'
    })
];

NfRegistryAdministration.parameters = [NfRegistryService, ngRouter.ActivatedRoute];

module.exports = NfRegistryAdministration;
