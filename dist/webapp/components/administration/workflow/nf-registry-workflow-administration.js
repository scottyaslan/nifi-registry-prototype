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

function NfRegistryWorkflowAdministration(nfRegistryService, ActivatedRoute) {
    this.subscription$;
    this.route = ActivatedRoute;
    this.nfRegistryService = nfRegistryService;
};

NfRegistryWorkflowAdministration.prototype = {
    constructor: NfRegistryWorkflowAdministration,
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

module.exports = NfRegistryWorkflowAdministration;
