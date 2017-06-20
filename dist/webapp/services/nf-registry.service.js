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

function NfRegistryService(TdDataTableService) {
    this.selectedRegistryId = '';
    this.selectedBucketId = '';
    this.selectedDropletId = '';
    this.selectedUserId = '';
    this.registries = [];
    this.registry = {};
    this.bucket = {};
    this.buckets = [];
    this.droplet = {};
    this.droplets = [];
    this.user = {};
    this.alerts = [];
    this.explorerViewType = '';

    //<editor-fold desc="Data Tables">

    this.dataTableService = TdDataTableService;

    this.filteredDroplets = [];

    this.dropletColumns = [
        { name: 'id', label: 'ID', sortable: true },
        { name: 'name', label: 'Name', sortable: true },
        { name: 'displayName', label: 'Display Name', sortable: true },
        { name: 'sublabel', label: 'Label', sortable: true },
        { name: 'type', label: 'Type', sortable: true }
    ];

    this.autoCompleteDroplets = [];
    this.dropletsSearchTerms = [];

    //</editor-fold>
};

NfRegistryService.prototype = {
    constructor: NfRegistryService,
    getRegistries: function() {
        //TODO: leverage $http service to make call to nifi registry api. For now
        //just return mock data...
        var date = new Date();
        return new Promise(resolve =>
            setTimeout(() => resolve(this.registries = [{
                id: '23f6cc59-0156-1000-06b4-2b0810089090',
                name: "Flow Registry",
                buckets: [{
                        id: '25fd6vv87-3549-0001-05g6-4d4567890765',
                        name: "My Flows",
                        actions: [{
                            'name': 'Delete',
                            'icon': 'fa fa-close',
                            'tooltip': 'Delete User'
                        }, {
                            'name': 'Manage',
                            'icon': 'fa fa-user',
                            'tooltip': 'Manage User'
                        }, {
                            'name': 'Action 3',
                            'icon': 'fa fa-question',
                            'tooltip': 'Whatever else we want to do...'
                        }],
                        droplets: [{
                            id: '23f6cc59-0156-1000-09b4-2b0610089090',
                            name: "Decompression_Circular_Flow",
                            displayName: 'Decompressed Circular flow',
                            type: 'flow',
                            sublabel: 'A sublabel',
                            compliant: {
                                id: '25fd6vv87-3549-0001-05g6-4d4567890765',
                                label: 'Compliant',
                                type: 'certification'
                            },
                            fleet: {
                                id: '23f6cc59-3549-0001-05g6-4d4567890765',
                                label: 'Fleet',
                                type: 'certification'
                            },
                            prod: {
                                id: '52fd6vv87-3549-0001-05g6-4d4567890765',
                                label: 'Production Ready',
                                type: 'certification'
                            },
                            secure: {
                                id: '32f6cc59-3549-0001-05g6-4d4567890765',
                                label: 'Secure',
                                type: 'certification'
                            },
                            versions: [{
                                id: '23f6cc59-0156-1000-06b4-2b0810089090',
                                revision: '1',
                                dependentFlows: [{
                                    id: '25fd6vv87-3549-0001-05g6-4d4567890765'
                                }],
                                created: date.setDate(date.getDate() - 1),
                                updated: new Date()
                            }, {
                                id: '25fd6vv87-3549-0001-05g6-4d4567890765',
                                revision: '2',
                                dependentFlows: [{
                                    id: '23f6cc59-0156-1000-06b4-2b0810089090'
                                }],
                                created: new Date(),
                                updated: new Date()
                            }],
                            flows: [],
                            extensions: [],
                            assets: [],
                            actions: [{
                                'name': 'Delete',
                                'icon': 'fa fa-close',
                                'tooltip': 'Delete User'
                            }, {
                                'name': 'Manage',
                                'icon': 'fa fa-user',
                                'tooltip': 'Manage User'
                            }, {
                                'name': 'Action 3',
                                'icon': 'fa fa-question',
                                'tooltip': 'Whatever else we want to do...'
                            }]
                        }, {
                            id: '25fd6vv87-3249-0001-05g6-4d4767890765',
                            name: "DateConversion",
                            displayName: 'Date conversion',
                            type: 'asset',
                            sublabel: 'A sublabel',
                            compliant: {
                                id: '25fd6vv34-3549-0001-05g6-4d4567890765',
                                label: 'Compliant',
                                type: 'certification'
                            },
                            prod: {
                                id: '52vn6vv87-3549-0001-05g6-4d4567890765',
                                label: 'Production Ready',
                                type: 'certification'
                            },
                            versions: [{
                                id: '23f6ic59-0156-1000-06b4-2b0810089090',
                                revision: '1',
                                dependentFlows: [{
                                    id: '23f6cc19-0156-1000-06b4-2b0810089090'
                                }],
                                created: new Date(),
                                updated: new Date()
                            }],
                            flows: [],
                            extensions: [],
                            assets: [],
                            actions: [{
                                'name': 'Delete',
                                'icon': 'fa fa-close',
                                'tooltip': 'Delete User'
                            }]
                        }, {
                            id: '52fd6vv87-3294-0001-05g6-4d4767890765',
                            name: "nifi-email-bundle",
                            displayName: 'nifi-email-bundle',
                            type: 'extension',
                            sublabel: 'A sublabel',
                            compliant: {
                                id: '33fd6vv87-3549-0001-05g6-4d4567890765',
                                label: 'Compliant',
                                test: {
                                    label: 'test'
                                },
                                type: 'certification'
                            },
                            versions: [{
                                id: '23d3cc59-0156-1000-06b4-2b0810089090',
                                revision: '1',
                                dependentFlows: [{
                                    id: '23f6cc89-0156-1000-06b4-2b0810089090'
                                }],
                                created: new Date(),
                                updated: new Date()
                            }],
                            flows: [],
                            extensions: [],
                            assets: [],
                            actions: [{
                                'name': 'Delete',
                                'icon': 'fa fa-close',
                                'tooltip': 'Delete User'
                            }, {
                                'name': 'Manage',
                                'icon': 'fa fa-user',
                                'tooltip': 'Manage User'
                            }]
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
                        droplets: [{
                            id: '23f6cc59-0156-1000-09b4-2b0610089090',
                            name: "Flow Master",
                            displayName: 'Flow Master',
                            type: 'flow',
                            sublabel: 'A sublabel',
                            compliant: {
                                id: '25fd6vv87-3549-0001-05g6-4d4567890765',
                                label: 'Compliant',
                                type: 'certification'
                            },
                            fleet: {
                                id: '23f6cc59-3549-0001-05g6-4d4567890765',
                                label: 'Fleet',
                                type: 'certification'
                            },
                            prod: {
                                id: '52fd6vv87-3549-0001-05g6-4d4567890765',
                                label: 'Production Ready',
                                type: 'certification'
                            },
                            secure: {
                                id: '32f6cc59-3549-0001-05g6-4d4567890765',
                                label: 'Secure',
                                type: 'certification'
                            },
                            versions: [{
                                id: '23f6cc59-0156-1000-06b4-2b0810089090',
                                revision: '1',
                                dependentFlows: [{
                                    id: '25fd6vv87-3549-0001-05g6-4d4567890765'
                                }],
                                created: date.setDate(date.getDate() - 1),
                                updated: new Date()
                            }, {
                                id: '25fd6vv87-3549-0001-05g6-4d4567890765',
                                revision: '2',
                                dependentFlows: [{
                                    id: '23f6cc59-0156-1000-06b4-2b0810089090'
                                }],
                                created: new Date(),
                                updated: new Date()
                            }],
                            flows: [],
                            extensions: [],
                            assets: [],
                            actions: [{
                                'name': 'Delete',
                                'icon': 'fa fa-close',
                                'tooltip': 'Delete User'
                            }, {
                                'name': 'Manage',
                                'icon': 'fa fa-user',
                                'tooltip': 'Manage User'
                            }, {
                                'name': 'Action 3',
                                'icon': 'fa fa-question',
                                'tooltip': 'Whatever else we want to do...'
                            }]
                        }],
                        actions: [],
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
                        if (registryId === registry.id) {
                            return registry;
                        }
                    });
            });
    },
    getBuckets: function(registryIds, bucketIds) {
        var self = this;
        return this.getRegistries().then(
            function(registries) {
                var buckets = [];

                registries.find(
                    function(registry) {
                        if ((registryIds === undefined || registryIds.length === 0) || registryIds.indexOf(registry.id) >= 0) {
                            registry.buckets.find(
                                function(bucket) {
                                    if ((bucketIds === undefined || bucketIds.length === 0) || bucketIds.indexOf(bucket.id) >= 0) {
                                        buckets.push(bucket);
                                    }
                                });
                        }
                    });

                return buckets;
            });

    },
    getDroplets: function(registryIds, bucketIds, dropletIds) {
        var self = this;
        return this.getRegistries().then(
            function(registries) {
                var buckets = [];

                registries.find(
                    function(registry) {
                        if ((registryIds === undefined || registryIds.length === 0) || registryIds.indexOf(registry.id) >= 0) {
                            registry.buckets.find(
                                function(bucket) {
                                    if ((bucketIds === undefined || bucketIds.length === 0) || bucketIds.indexOf(bucket.id) >= 0) {
                                        buckets.push(bucket);
                                    }
                                });
                        }
                    });

                var droplets = [];

                buckets.find(
                    function(bucket) {
                        bucket.droplets.find(
                            function(droplet) {
                                if ((dropletIds === undefined || dropletIds.length === 0) || dropletIds.indexOf(droplet.id) >= 0) {
                                    droplets.push(droplet);
                                }
                            });
                    });

                return droplets;
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
            routerLink += '/' + this.selectedRegistryId;
        }
        if (this.selectedBucketId) {
            routerLink += '/' + this.selectedBucketId;
        }
        if (this.selectedDropletId) {
            routerLink += '/' + this.selectedDropletId;
        }

        return routerLink;
    },

    //<editor-fold desc="Searchable Expansion Panels">

    isDropletFilterChecked: function(term) {
        return (this.dropletsSearchTerms.indexOf(term) > -1);
    },

    getDropletTypeCount: function(type) {
        return this.filteredDroplets.filter(function(droplet) {
            return droplet.type === type;
        }).length;
    },

    getDropletCertificationCount: function(certification) {
        return this.filteredDroplets.filter(droplet => {
            return Object.keys(droplet).find((key) => {
                if (key === certification && droplet[certification].type === 'certification') {
                    return droplet;
                }
            });
        }).length;
    },

    getSortBy: function() {
        var sortByColumnLabel;
        var arrayLength = this.dropletColumns.length;
        for (var i = 0; i < arrayLength; i++) {
            if (this.dropletColumns[i].active === true) {
                sortByColumnLabel = this.dropletColumns[i].label;
                break;
            }
        }
        return sortByColumnLabel;
    },

    sortDroplets: function(sortEvent, column) {
        if (column.sortable === true) {
            // toggle column sort order
            var sortOrder = column.sortOrder = (column.sortOrder === 'ASC') ? 'DESC' : 'ASC';
            this.filterDroplets(column.name, sortOrder);
            this.activeColumn = column;
            //only one column can be actively sorted so we reset all to inactive
            this.dropletColumns.forEach(c => c.active = false);
            //and set this column as the actively sorted column
            column.active = true;
        }
    },

    dropletsSearchRemove: function(searchTerm) {
        this.filterDroplets(this.activeColumn.name, this.activeColumn.sortOrder);
    },

    dropletsSearchAdd: function(searchTerm) {
        this.filterDroplets(this.activeColumn.name, this.activeColumn.sortOrder);
    },

    toggleDropletsFilter: function(searchTerm) {
        var applySearchTerm = true;
        // check if the search term is already applied and remove it if true
        if (this.dropletsSearchTerms.length > 0) {
            var arrayLength = this.dropletsSearchTerms.length;
            for (var i = 0; i < arrayLength; i++) {
                var index = this.dropletsSearchTerms.indexOf(searchTerm);
                if (index > -1) {
                    this.dropletsSearchTerms.splice(index, 1);
                    applySearchTerm = false;
                }
            }
        }

        // if we just removed the search term do NOT apply it again
        if (applySearchTerm) {
            this.dropletsSearchTerms.push(searchTerm);
        }

        this.filterDroplets(this.activeColumn.name, this.activeColumn.sortOrder);
    },

    filterData: function(data, searchTerm, ignoreCase) {
        var field = '';
        if (searchTerm.indexOf(":") > -1) {
            field = searchTerm.split(':')[0].trim();
            searchTerm = searchTerm.split(':')[1].trim();
        }
        var filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';

        if (filter) {
            data = data.filter(item => {
                var res = Object.keys(item).find((key) => {
                    if (field.indexOf(".") > -1) {
                        var objArray = field.split(".");
                        var obj = item;
                        var arrayLength = objArray.length;
                        for (var i = 0; i < arrayLength; i++) {
                            try {
                                obj = obj[objArray[i]];
                            } catch (e) {
                                return false;
                            }
                        }
                        var preItemValue = ('' + obj);
                        var itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                        return itemValue.indexOf(filter) > -1;
                    } else {
                        if (key !== field && field !== '') {
                            return false;
                        }
                        var preItemValue = ('' + item[key]);
                        var itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                        return itemValue.indexOf(filter) > -1;
                    }
                });
                return !(typeof res === 'undefined');
            });
        }
        return data;
    },

    filterDroplets: function(sortBy, sortOrder) {
        // if `sortBy` is `undefined` then find the first sortable column in this.dropletColumns
        if (sortBy === undefined) {
            var arrayLength = this.dropletColumns.length;
            for (var i = 0; i < arrayLength; i++) {
                if (this.dropletColumns[i].sortable === true) {
                    sortBy = this.dropletColumns[i].name;
                    this.activeColumn = this.dropletColumns[i];
                    //only one column can be actively sorted so we reset all to inactive
                    this.dropletColumns.forEach(c => c.active = false);
                    //and set this column as the actively sorted column
                    this.dropletColumns[i].active = true;
                    break;
                }
            }
        }

        // if `sortOrder` is `undefined` then use 'ASC'
        if (sortOrder === undefined) {
            sortOrder = 'ASC'
        }

        var newData = this.droplets;

        for (var i = 0; i < this.dropletsSearchTerms.length; i++) {
            newData = this.filterData(newData, this.dropletsSearchTerms[i], true, this.activeColumn.name);
        }

        newData = this.dataTableService.sortData(newData, sortBy, sortOrder);
        this.filteredDroplets = newData;
        this.getAutoCompleteDroplets();
    },

    getAutoCompleteDroplets: function() {
        this.autoCompleteDroplets = [];
        this.dropletColumns.forEach(c => this.filteredDroplets.forEach(r => (r[c.name.toLowerCase()]) ? this.autoCompleteDroplets.push(r[c.name.toLowerCase()].toString()) : ''));
    },

    //</editor-fold>
};

module.exports = NfRegistryService;
