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

function NfRegistryDropletListViewer(nfRegistryService, ActivatedRoute) {
    this.subscription$;
    this.route = ActivatedRoute;
    this.nfRegistryService = nfRegistryService;
};

NfRegistryDropletListViewer.prototype = {
    constructor: NfRegistryDropletListViewer,
    ngOnInit: function() {
        var self = this;
        this.subscription$ = this.route.params
            .switchMap(function(params) {
                return self.nfRegistryService.getDroplets(self.nfRegistryService.registry.id, self.nfRegistryService.bucket.id, params['dropletId']);
            })
            .subscribe(function(droplets) {
                    self.nfRegistryService.droplet = droplets[0];
                });
    },
    ngOnDestroy: function() {
        this.subscription$.unsubscribe();
        this.nfRegistryService.droplet = {};
    }
};

module.exports = NfRegistryDropletListViewer;
