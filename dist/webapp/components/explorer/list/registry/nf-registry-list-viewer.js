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

function NfRegistryListViewer(nfRegistryService, ActivatedRoute) {
    this.subscription$;
    this.route = ActivatedRoute;
    this.nfRegistryService = nfRegistryService;

    this.columns = [
        { name: 'name', label: 'Name', sortable: true }
    ];

    this.allRowsSelected = false;
    this.selectedRows = [];
};

NfRegistryListViewer.prototype = {
    constructor: NfRegistryListViewer,
    ngOnInit: function() {
        var self = this;
        self.nfRegistryService.explorerViewType = 'list';
        self.subscription$ = self.route.params
        .switchMap(function(params) {
            return self.nfRegistryService.getRegistry(params['registryId']);
        })
        .subscribe(function(registry) {
            self.nfRegistryService.registry = registry;
            self.nfRegistryService.getBuckets(self.nfRegistryService.registry.id).then(function(buckets) {
                self.nfRegistryService.buckets = buckets;
                self.nfRegistryService.getDroplets(self.nfRegistryService.registry.id, self.nfRegistryService.bucket.id).then(function(droplets) {
                    self.nfRegistryService.droplets = droplets;
                });
            })
        });
    },
    ngOnDestroy: function() {
        this.subscription$.unsubscribe();
        this.nfRegistryService.registry = {};
        this.nfRegistryService.buckets = [];
        this.nfRegistryService.droplets = [];
    }
};

module.exports = NfRegistryListViewer;
