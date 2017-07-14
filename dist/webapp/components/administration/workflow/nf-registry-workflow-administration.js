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

function NfRegistryWorkflowAdministration(nfRegistryService, ActivatedRoute, Router) {
    this.subscription$;
    this.route = ActivatedRoute;
    this.nfRegistryService = nfRegistryService;
    this.router = Router;
};

NfRegistryWorkflowAdministration.prototype = {
    constructor: NfRegistryWorkflowAdministration,
    rowAction: function(row, action) {
        row.checked = !row.checked;
        this.router.navigateByUrl('/nifi-registry/administration/' + this.nfRegistryService.registry.id + '/workflow(' + action.type + ':bucket/' + action.name + '/' + row.id + ')');
    },
    ngOnInit: function() {
        var self = this;
        self.subscription$ = self.route.params
            .subscribe(function() {
                self.nfRegistryService.adminPerspective = 'workflow';
                self.nfRegistryService.getCertifications(self.nfRegistryService.registry.id).then(function(certifications) {
                    self.nfRegistryService.certifications = self.nfRegistryService.filteredCertifications = certifications;
                    self.nfRegistryService.filterCertifications();
                });

                self.nfRegistryService.getBuckets(self.nfRegistryService.registry.id).then(function(buckets) {
                    self.nfRegistryService.buckets = self.nfRegistryService.filteredBuckets = buckets;
                    self.nfRegistryService.filterBuckets();
                });

            });

    },
    ngOnDestroy: function() {
        this.nfRegistryService.adminPerspective = '';
        this.subscription$.unsubscribe();
        this.nfRegistryService.certifications = this.nfRegistryService.filteredCertifications = [];
        this.nfRegistryService.buckets = [];
        this.nfRegistryService.filteredBuckets = [];
        this.autoCompleteBuckets = [];
    }
};

NfRegistryWorkflowAdministration.annotations = [
    new ngCore.Component({
        moduleId: __filename,
        templateUrl: 'nf-registry-workflow-administration.html'
    })
];

NfRegistryWorkflowAdministration.parameters = [NfRegistryService, ngRouter.ActivatedRoute, ngRouter.Router];

module.exports = NfRegistryWorkflowAdministration;
