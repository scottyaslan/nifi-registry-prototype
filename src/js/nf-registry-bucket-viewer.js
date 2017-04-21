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

function NfRegistryBucketViewer(nfRegistryService, ActivatedRoute) {
    this.subscription$;
    this.route = ActivatedRoute;
    this.nfRegistryService = nfRegistryService;
};

NfRegistryBucketViewer.prototype = {
    constructor: NfRegistryBucketViewer,
    ngOnInit: function() {
        var self = this;
        /**
         * The switchMap operator maps the id in the Observable route
         * parameters to a new Observable, the result of the
         * this.nfRegistryService.getBucket() method. If a user re-navigates to this
         * component while a getBucket request is still processing, switchMap
         * cancels the old request and then calls this.nfRegistryService.getBucket() again.
         */
        this.subscription$ = this.route.params
            .switchMap(function(params) {
                self.nfRegistryService.selectedBucketId = params['bucketId'];
                return self.nfRegistryService.getBucket(self.nfRegistryService.selectedRegistryId, params['bucketId']);
            })
            .subscribe(bucket => this.nfRegistryService.bucket = bucket);
    },
    ngOnDestroy: function() {
        this.subscription$.unsubscribe();
        delete this.nfRegistryService.selectedBucketId;
    }
};

module.exports = NfRegistryBucketViewer;
