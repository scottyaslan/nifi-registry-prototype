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

var NUMBER_FORMAT = v => v;
var DECIMAL_FORMAT = v => v.toFixed(2);

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

        /**
         * The switchMap operator maps the id in the Observable route
         * parameters to a new Observable, the result of the
         * this.nfRegistryService.getRegistry() method. If a user re-navigates to this
         * component while a getRegistry request is still processing, switchMap
         * cancels the old request and then calls this.nfRegistryService.getRegistry() again.
         */
        self.subscription$ = self.route.params
        .switchMap(function(params) {
            self.nfRegistryService.selectedRegistryId = params['registryId'];
            return self.nfRegistryService.getRegistry(params['registryId']);
        })
        .subscribe(function(registry) {
            self.nfRegistryService.registry = registry;
            self.nfRegistryService.getBuckets(self.nfRegistryService.selectedRegistryId).then(function(buckets) {
                self.nfRegistryService.buckets = buckets;
                self.nfRegistryService.getDroplets(self.nfRegistryService.selectedRegistryId, self.nfRegistryService.selectedBucketId, self.nfRegistryService.selectedDropletId).then(function(droplets) {
                    self.nfRegistryService.droplets = self.nfRegistryService.filteredDroplets = droplets;
                    self.nfRegistryService.filterDroplets();
                });
            })
        });
    },
    ngOnDestroy: function() {
        this.subscription$.unsubscribe();
        this.nfRegistryService.selectedRegistryId = '';
        this.nfRegistryService.registry = {};
        this.nfRegistryService.buckets = [];
        this.nfRegistryService.droplets = [];
        this.nfRegistryService.filteredDroplets = [];
    }
};

module.exports = NfRegistryGridListViewer;
