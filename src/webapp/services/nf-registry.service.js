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

function NfRegistryService() {
    this.selectedRegistryId = '';
    this.selectedBucketId = '';
    this.selectedDropletId = '';
    this.selectedUserId = '';
    this.registries = [];
    this.registry = {};
    this.bucket = {};
    this.droplet = {};
    this.user = {};
    this.explorerViewType = '';
};

NfRegistryService.prototype = {
    constructor: NfRegistryService,
    getRegistries: function() {
        //TODO: leverage $http service to make call to nifi registry api. For now
        //just return mock data...
        return new Promise(resolve =>
            setTimeout(() => resolve([{
                id: '23f6cc59-0156-1000-06b4-2b0810089090',
                name: "Flow Registry",
                buckets: [{
                        id: '25fd6vv87-3549-0001-05g6-4d4567890765',
                        name: "My Flows",
                        droplets: [{
                            id: '23f6cc59-0156-1000-09b4-2b0610089090',
                            name: "Decompression_Circular_Flow",
                            versions: [{
                                id: '23f6cc59-0156-1000-06b4-2b0810089090',
                                revision: '1',
                                dependentFlows: [{
                                    id: '23f6cc59-0156-1000-06b4-2b0810089090',
                                    name: 'Decompression_Circular_Flow Dependent Flow'
                                }]
                            }]
                        }, {
                            id: '25fd6vv87-3249-0001-05g6-4d4767890765',
                            name: "DateConversion",
                            versions: []
                        }],
                        users: [{
                            id: '23f6cc59-0156-1000-06b4-2b0810089090',
                            name: 'Scotty 2 Hotty',
                            type: 'user'
                        }, {
                            id: '25fd6vv87-3249-0001-05g6-4d4767890765',
                            name: 'Group 1',
                            type: 'group'
                        }]
                    }, {
                        id: '23f6cc59-0156-1000-09b4-2b0810089080',
                        name: "Development Flows",
                        droplets: [],
                        users: []
                    }] // some data model for the contents of a registry
            }, {
                id: '25fd6vv87-3249-0001-05g6-4d4567890763',
                name: "Variable Registry",
                buckets: [] // some data model for the contents of a registry
            }]), 6)
        );
    },
    getRegistry: function(registryId) {
        return this.getRegistries().then(
            function(registries) {
                return registries.find(
                    function(registry) {
                        if (registry.id === registryId) {
                            return registry;
                        }
                    });
            });
    },
    getAllBuckets: function() {
        return this.getRegistries().then(
            function(registries) {
                var allBuckets = [];

                registries.find(
                    function(registry) {
                        registry.buckets.find(
                            function(bucket) {
                                allBuckets.push(bucket);
                            });
                    });

                return allBuckets;
            });
    },
    getBucket: function(registryId, bucketId) {
        var self = this;
        return this.getRegistry(registryId).then(
            function(registry) {
                return registry.buckets.find(
                    function(bucket) {
                        if (bucket.id === bucketId) {
                            return bucket;
                        }
                    });
            });
    },
    getDroplet: function(registryId, bucketId, dropletId) {
        var self = this;
        return this.getBucket(registryId, bucketId).then(
            function(bucket) {
                return bucket.droplets.find(
                    function(droplet) {
                        if (droplet.id === dropletId) {
                            return droplet;
                        }
                    });
            });
    },
    getUser: function(registryId, bucketId, userId) {
        var self = this;
        return this.getBucket(registryId, bucketId).then(
            function(bucket) {
                return bucket.users.find(
                    function(user) {
                        if (user.id === userId) {
                            return user;
                        }
                    });
            });
    },
    getUserCount: function() {
        var authUserCount = 0;
        if (this.registry) {
            for (var i = 0; i < this.registry.buckets.length; i++) {
                for (var j = 0; j < this.registry.buckets[i].users; j++) {
                    if (this.registry.buckets[i].users[j].type === 'user') {
                        ++authUserCount;
                    }
                }
            }
        }
        return authUserCount;
    },
    getExplorerViewRouterLink: function(viewType) {
        var routerLink = '/nifi-registry/explorer/' + viewType;
        if (this.selectedRegistryId) {
            routerLink += '/' + this.registry.id;
        }
        if (this.selectedBucketId) {
            routerLink += '/' + this.bucket.id;
        }
        if (this.selectedDropletId) {
            routerLink += '/' + this.droplet.id;
        }

        return routerLink;
    }
};

module.exports = NfRegistryService;
