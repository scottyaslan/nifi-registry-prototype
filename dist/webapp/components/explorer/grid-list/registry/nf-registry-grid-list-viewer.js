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

function NfRegistryGridListViewer(nfRegistryService, ActivatedRoute) {
    this.subscription$;
    this.route = ActivatedRoute;
    this.nfRegistryService = nfRegistryService;
};

NfRegistryGridListViewer.prototype = {
    constructor: NfRegistryGridListViewer,

    ngOnInit: function() {
        var self = this;
        self.nfRegistryService.explorerViewType = 'grid-list';
        self.subscription$ = self.route.params
        .switchMap(function(params) {
            return self.nfRegistryService.getRegistry(params['registryId']);
        })
        .subscribe(function(registry) {
            self.nfRegistryService.registry = registry;
            self.nfRegistryService.getBuckets(self.nfRegistryService.registry.id).then(function(buckets) {
                self.nfRegistryService.buckets = buckets;
                self.nfRegistryService.getDroplets(self.nfRegistryService.registry.id, self.nfRegistryService.bucket.id, self.nfRegistryService.droplet.id).then(function(droplets) {
                    self.nfRegistryService.droplets = self.nfRegistryService.filteredDroplets = droplets;
                    self.nfRegistryService.filterDroplets();
                });
            })
        });
    },
    ngOnDestroy: function() {
        this.subscription$.unsubscribe();
        this.nfRegistryService.registry = {};
        this.nfRegistryService.buckets = [];
        this.nfRegistryService.droplets = [];
        this.nfRegistryService.filteredDroplets = [];
    }
};

module.exports = NfRegistryGridListViewer;
