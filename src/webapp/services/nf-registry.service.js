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
    this.registries = [];
    this.registry = {};
    this.bucket = {};
    this.buckets = [];
    this.droplet = {};
    this.droplets = [];
    this.certifications = [];
    this.user = {};
    this.users = [];
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

    this.filteredUsers = [];

    this.userColumns = [
        { name: 'status', label: 'Status', sortable: true, tooltip: 'User Status.', width: 18 },
        { name: 'name', label: 'Name', sortable: true, tooltip: 'User name.', width: 30 },
        { name: 'provider', label: 'Provider', sortable: true, tooltip: 'Authentication provider.', width: 30 }
    ];

    this.allUsersSelected = false;
    this.autoCompleteUsers = [];
    this.selectedUsers = [];

    this.usersSearchTerms = [];
    this.usersFromRow = 1;
    this.usersCurrentPage = 1;
    this.usersPageSize = 1;
    this.usersPageCount = 0;

    this.filteredBuckets = [];

    this.bucketColumns = [
        { name: 'name', label: 'Bucket Name', sortable: true, tooltip: 'Sort Buckets by name.' }
    ];

    this.allBucketsSelected = false;
    this.autoCompleteBuckets = [];
    this.bucketsSearchTerms = [];

    this.filteredCertifications = [];

    this.certificationColumns = [
        { name: 'name', label: 'Label Name', sortable: true, tooltip: 'Sort Certifications by name.', width: 40 },
        { name: 'usage', label: 'Usage', sortable: true, tooltip: 'Sort Certifications by usage.', width: 30 },
        { name: 'badge', label: 'Badge Design', sortable: false, tooltip: 'Certification badge.', width: 30 }
    ];

    this.autoCompleteCertifications = [];
    this.certificationsSearchTerms = [];

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
                users: [{
                    id: '23f6cc59-0156-1000-06b4-2b0810089090',
                    name: 'Scotty 2 Hotty',
                    status: 'authorized',
                    provider: 'Friendly LDAP Provider',
                    type: 'user',
                    actions: [{
                        'name': 'details',
                        'icon': 'fa fa-info-circle',
                        'tooltip': 'User Details'
                    }, {
                        'name': 'manage',
                        'icon': 'fa fa-key',
                        'tooltip': 'Manage User Policies'
                    }, {
                        'name': 'Delete',
                        'icon': 'fa fa-trash',
                        'tooltip': 'Delete User'
                    }, {
                        'name': 'Suspend',
                        'icon': 'fa fa-ban',
                        'tooltip': 'Suspend User'
                    }]
                }, {
                    id: '25fd6vv87-3249-0001-05g6-4d4767890765',
                    name: 'Group 1',
                    status: 'suspended',
                    provider: 'IOAT',
                    type: 'group',
                    actions: [{
                        'name': 'details',
                        'icon': 'fa fa-info-circle',
                        'tooltip': 'User Details'
                    }, {
                        'name': 'manage',
                        'icon': 'fa fa-key',
                        'tooltip': 'Manage User Policies'
                    }, {
                        'name': 'Delete',
                        'icon': 'fa fa-trash',
                        'tooltip': 'Delete User'
                    }, {
                        'name': 'Reauthorize',
                        'icon': 'fa fa-check-circle',
                        'tooltip': 'Reauthorize User'
                    }]
                }, {
                    id: '98f6cc59-0156-1000-06b4-2b0810089090',
                    name: 'G$',
                    status: 'authorized',
                    provider: 'Friendly LDAP Provider',
                    type: 'user',
                    actions: [{
                        'name': 'details',
                        'icon': 'fa fa-info-circle',
                        'tooltip': 'User Details'
                    }, {
                        'name': 'manage',
                        'icon': 'fa fa-key',
                        'tooltip': 'Manage User Policies'
                    }, {
                        'name': 'Delete',
                        'icon': 'fa fa-trash',
                        'tooltip': 'Delete User'
                    }, {
                        'name': 'Suspend',
                        'icon': 'fa fa-ban',
                        'tooltip': 'Suspend User'
                    }]
                }, {
                    id: '65fd6vv87-3249-0001-05g6-4d4767890765',
                    name: 'Group 2',
                    status: 'suspended',
                    provider: 'IOAT',
                    type: 'group',
                    actions: [{
                        'name': 'details',
                        'icon': 'fa fa-info-circle',
                        'tooltip': 'User Details'
                    }, {
                        'name': 'manage',
                        'icon': 'fa fa-key',
                        'tooltip': 'Manage User Policies'
                    }, {
                        'name': 'Delete',
                        'icon': 'fa fa-trash',
                        'tooltip': 'Delete User'
                    }, {
                        'name': 'Reauthorize',
                        'icon': 'fa fa-check-circle',
                        'tooltip': 'Reauthorize User'
                    }]
                }],
                certifications: [{
                    id: '34fd6vv87-3549-0001-05g6-4d4567890765',
                    name: "Compliant",
                    usage: true,
                    badge: {
                        background: '#728E9B',
                        color: 'white',
                        tooltip: 'Whatever',
                        icon: 'fa fa-plus'
                    },
                    actions: [{
                        'name': 'edit',
                        'icon': 'fa fa-pencil',
                        'tooltip': 'Edit Certification Settings'
                    }, {
                        'name': 'delete',
                        'icon': 'fa fa-trash',
                        'tooltip': 'Delete Certificate'
                    }]
                }, {
                    id: '43fd6vv87-3549-0001-05g6-4d4567890765',
                    name: "Fleet",
                    usage: false,
                    badge: {
                        background: '#3FAE2A',
                        color: 'white',
                        tooltip: 'Whatever',
                        icon: 'fa fa-code-fork'
                    },
                    actions: [{
                        'name': 'edit',
                        'icon': 'fa fa-pencil',
                        'tooltip': 'Edit Certification Settings'
                    }, {
                        'name': 'delete',
                        'icon': 'fa fa-trash',
                        'tooltip': 'Delete Certificate'
                    }]
                }, {
                    id: '94fd6vv87-3549-0001-05g6-4d4567890765',
                    name: "Production Ready",
                    usage: false,
                    badge: {
                        background: '#E98A40',
                        color: 'black',
                        tooltip: 'Whatever',
                        icon: 'fa fa-product-hunt'
                    },
                    actions: [{
                        'name': 'edit',
                        'icon': 'fa fa-pencil',
                        'tooltip': 'Edit Certification Settings'
                    }, {
                        'name': 'delete',
                        'icon': 'fa fa-trash',
                        'tooltip': 'Delete Certificate'
                    }]
                }],
                buckets: [{
                        id: '25fd6vv87-3549-0001-05g6-4d4567890765',
                        name: "My Flows",
                        actions: [{
                            'name': 'details',
                            'icon': 'fa fa-info-circle',
                            'tooltip': 'Bucket Details'
                        }, {
                            'name': 'manage',
                            'icon': 'fa fa-key',
                            'tooltip': 'Manage Bucket Policies'
                        }, {
                            'name': 'Delete',
                            'icon': 'fa fa-trash',
                            'tooltip': 'Delete User'
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
                        actions: [{
                            'name': 'details',
                            'icon': 'fa fa-info-circle',
                            'tooltip': 'Bucket Details'
                        }, {
                            'name': 'manage',
                            'icon': 'fa fa-key',
                            'tooltip': 'Manage Bucket Policies'
                        }, {
                            'name': 'Delete',
                            'icon': 'fa fa-trash',
                            'tooltip': 'Delete User'
                        }]
                    }] // some data model for the contents of a registry
            }, {
                id: '25fd6vv87-3249-0001-05g6-4d4567890763',
                name: "Variable Registry",
                certifications: [],
                users: [],
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
    getBucket: function(registryId, bucketId) {
        return this.getBuckets(registryId, bucketId).then(
            function(buckets) {
                return buckets[0];
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
    getCertification: function(registryId, certificatonId) {
        return this.getCertifications(registryId, certificatonId).then(
            function(certificatons) {
                return certificatons[0];
            });
    },
    getCertifications: function(registryIds, certificatonIds) {
        var self = this;
        return this.getRegistries().then(
            function(registries) {
                var certificatons = [];

                registries.find(
                    function(registry) {
                        if ((registryIds === undefined || registryIds.length === 0) || registryIds.indexOf(registry.id) >= 0) {
                            registry.certifications.find(
                                function(certificaton) {
                                    if ((certificatonIds === undefined || certificatonIds.length === 0) || certificatonIds.indexOf(certificaton.id) >= 0) {
                                        certificatons.push(certificaton);
                                    }
                                });
                        }
                    });

                return certificatons;
            });

    },
    getDroplet: function(registryId, bucketId, dropletId) {
        return this.getDroplets(registryId, bucketId, dropletId).then(
            function(droplets) {
                return droplets[0];
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
    getUser: function(registryId, userId) {
        return this.getCertifications(registryId, userId).then(
            function(users) {
                return users[0];
            });
    },
    getUsers: function(registryIds, userIds) {
        var self = this;
        return this.getRegistries().then(
            function(registries) {
                var users = [];

                registries.find(
                    function(registry) {
                        if ((registryIds === undefined || registryIds.length === 0) || registryIds.indexOf(registry.id) >= 0) {
                            registry.users.find(
                                function(user) {
                                    if ((userIds === undefined || userIds.length === 0) || userIds.indexOf(user.id) >= 0) {
                                        users.push(user);
                                    }
                                });
                        }
                    });

                return users;
            });

    },
    getExplorerViewRouterLink: function(viewType) {
        var routerLink = '/nifi-registry/explorer/' + viewType;
        if (this.registry.id) {
            routerLink += '/' + this.registry.id;
        }
        if (this.bucket.id) {
            routerLink += '/' + this.bucket.id;
        }
        if (this.droplet.id) {
            routerLink += '/' + this.droplet.id;
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
            this.activeDropletColumn = column;
            //only one column can be actively sorted so we reset all to inactive
            this.dropletColumns.forEach(c => c.active = false);
            //and set this column as the actively sorted column
            column.active = true;
        }
    },

    dropletsSearchRemove: function(searchTerm) {
        this.filterDroplets(this.activeDropletColumn.name, this.activeDropletColumn.sortOrder);
    },

    dropletsSearchAdd: function(searchTerm) {
        this.filterDroplets(this.activeDropletColumn.name, this.activeDropletColumn.sortOrder);
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

        this.filterDroplets(this.activeDropletColumn.name, this.activeDropletColumn.sortOrder);
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
        // if `sortOrder` is `undefined` then use 'ASC'
        if (sortOrder === undefined) {
            sortOrder = 'ASC'
        }
        // if `sortBy` is `undefined` then find the first sortable column in this.dropletColumns
        if (sortBy === undefined) {
            var arrayLength = this.dropletColumns.length;
            for (var i = 0; i < arrayLength; i++) {
                if (this.dropletColumns[i].sortable === true) {
                    sortBy = this.dropletColumns[i].name;
                    this.activeDropletColumn = this.dropletColumns[i];
                    //only one column can be actively sorted so we reset all to inactive
                    this.dropletColumns.forEach(c => c.active = false);
                    //and set this column as the actively sorted column
                    this.dropletColumns[i].active = true;
                    this.dropletColumns[i].sortOrder = sortOrder;
                    break;
                }
            }
        }

        var newData = this.droplets;

        for (var i = 0; i < this.dropletsSearchTerms.length; i++) {
            newData = this.filterData(newData, this.dropletsSearchTerms[i], true, this.activeDropletColumn.name);
        }

        newData = this.dataTableService.sortData(newData, sortBy, sortOrder);
        this.filteredDroplets = newData;
        this.getAutoCompleteDroplets();
    },

    getAutoCompleteDroplets: function() {
        this.autoCompleteDroplets = [];
        this.dropletColumns.forEach(c => this.filteredDroplets.forEach(r => (r[c.name.toLowerCase()]) ? this.autoCompleteDroplets.push(r[c.name.toLowerCase()].toString()) : ''));
    },

    filterBuckets: function(sortBy, sortOrder) {
        // if `sortOrder` is `undefined` then use 'ASC'
        if (sortOrder === undefined) {
            sortOrder = 'ASC'
        }

        // if `sortBy` is `undefined` then find the first sortable column in this.bucketColumns
        if (sortBy === undefined) {
            var arrayLength = this.bucketColumns.length;
            for (var i = 0; i < arrayLength; i++) {
                if (this.bucketColumns[i].sortable === true) {
                    sortBy = this.bucketColumns[i].name;
                    this.activeBucketColumn = this.bucketColumns[i];
                    //only one column can be actively sorted so we reset all to inactive
                    this.bucketColumns.forEach(c => c.active = false);
                    //and set this column as the actively sorted column
                    this.bucketColumns[i].active = true;
                    this.bucketColumns[i].sortOrder = sortOrder;
                    break;
                }
            }
        }

        var newData = this.buckets;

        for (var i = 0; i < this.bucketsSearchTerms.length; i++) {
            newData = this.filterData(newData, this.bucketsSearchTerms[i], true, this.activeBucketColumn.name);
        }

        newData = this.dataTableService.sortData(newData, sortBy, sortOrder);
        this.filteredBuckets = newData;
        this.getAutoCompleteBuckets();
    },

    getAutoCompleteBuckets: function() {
        this.autoCompleteBuckets = [];
        this.bucketColumns.forEach(c => this.filteredBuckets.forEach(r => (r[c.name.toLowerCase()]) ? this.autoCompleteBuckets.push(r[c.name.toLowerCase()].toString()) : ''));
    },

    sortBuckets: function(sortEvent, column) {
        if (column.sortable === true) {
            // toggle column sort order
            var sortOrder = column.sortOrder = (column.sortOrder === 'ASC') ? 'DESC' : 'ASC';
            this.filterBuckets(column.name, sortOrder);
            this.activeBucketsColumn = column;
            //only one column can be actively sorted so we reset all to inactive
            this.bucketColumns.forEach(c => c.active = false);
            //and set this column as the actively sorted column
            column.active = true;
        }
    },

    bucketsSearchRemove: function(searchTerm) {
        this.filterDroplets(this.activeBucketsColumn.name, this.activeBucketsColumn.sortOrder);
    },

    bucketsSearchAdd: function(searchTerm) {
        this.filterDroplets(this.activeBucketsColumn.name, this.activeBucketsColumn.sortOrder);
    },
    allFilteredBucketsSelected: function() {
        this.filteredBuckets.forEach(function(c) {
            if (c.checked === undefined || c.checked === false) {
                return false;
            }
        });

        return true;
    },
    toggleBucketSelect: function(row) {
        if (this.allFilteredBucketsSelected()) {
            this.allBucketsSelected = true;
        } else {
            this.allBucketsSelected = false;
        }
    },
    filterCertifications: function(sortBy, sortOrder) {
        // if `sortOrder` is `undefined` then use 'ASC'
        if (sortOrder === undefined) {
            sortOrder = 'ASC'
        }

        // if `sortBy` is `undefined` then find the first sortable column in this.bucketColumns
        if (sortBy === undefined) {
            var arrayLength = this.bucketColumns.length;
            for (var i = 0; i < arrayLength; i++) {
                if (this.bucketColumns[i].sortable === true) {
                    sortBy = this.bucketColumns[i].name;
                    this.activeBucketColumn = this.bucketColumns[i];
                    //only one column can be actively sorted so we reset all to inactive
                    this.bucketColumns.forEach(c => c.active = false);
                    //and set this column as the actively sorted column
                    this.bucketColumns[i].active = true;
                    this.bucketColumns[i].sortOrder = sortOrder;
                    break;
                }
            }
        }

        var newData = this.certifications;

        for (var i = 0; i < this.certificationsSearchTerms.length; i++) {
            newData = this.filterData(newData, this.certificationsSearchTerms[i], true, this.activeBucketColumn.name);
        }

        newData = this.dataTableService.sortData(newData, sortBy, sortOrder);
        this.filteredCertifications = newData;
        this.getAutoCompleteCertifications();
    },
    getAutoCompleteCertifications: function() {
        this.autoCompleteCertifications = [];
        this.bucketColumns.forEach(c => this.filteredCertifications.forEach(r => (r[c.name.toLowerCase()]) ? this.autoCompleteCertifications.push(r[c.name.toLowerCase()].toString()) : ''));
    },
    sortCertifications: function(sortEvent, column) {
        if (column.sortable === true) {
            // toggle column sort order
            var sortOrder = column.sortOrder = (column.sortOrder === 'ASC') ? 'DESC' : 'ASC';
            this.filterCertifications(column.name, sortOrder);
            this.activeCertificationsColumn = column;
            //only one column can be actively sorted so we reset all to inactive
            this.bucketColumns.forEach(c => c.active = false);
            //and set this column as the actively sorted column
            column.active = true;
        }
    },

    certificationsSearchRemove: function(searchTerm) {
        this.filterDroplets(this.activeCertificationsColumn.name, this.activeCertificationsColumn.sortOrder);
    },

    certificationsSearchAdd: function(searchTerm) {
        this.filterDroplets(this.activeCertificationsColumn.name, this.activeCertificationsColumn.sortOrder);
    },

    sortUsers: function(sortEvent, column) {
        if (column.sortable) {
            var sortBy = column.name;
            var sortOrder = column.sortOrder = (column.sortOrder === 'ASC') ? 'DESC' : 'ASC';
            this.filterUsers(sortBy, sortOrder);

            //only one column can be actively sorted so we reset all to inactive
            this.userColumns.forEach(c => c.active = false);
            //and set this column as the actively sorted column
            column.active = true;
        }
    },

    usersSearchRemove: function(searchTerm) {
        //only remove the first occurrence of the search term
        var index = this.usersSearchTerms.indexOf(searchTerm);
        if (index !== -1) {
            this.usersSearchTerms.splice(index, 1);
        }
        this.usersCurrentPage = 1;
        this.usersFromRow = 1;
        this.usersPageSize = 1;
        this.filterUsers();
    },

    usersSearchAdd: function(searchTerm) {
        this.usersSearchTerms.push(searchTerm);
        this.usersCurrentPage = 1;
        this.usersFromRow = 1;
        this.usersPageSize = 1;
        this.filterUsers();
    },

    pageUsers: function(pagingEvent) {
        this.usersFromRow = pagingEvent.fromRow;
        this.usersCurrentPage = pagingEvent.page;
        this.usersPageSize = pagingEvent.pageSize;
        this.filterUsers();
    },

    filterUsers: function(sortBy, sortOrder) {
        if (this.allUsersSelected) {
            this.toggleUsersSelectAll();
        }
        this.deselectAllUsers();
        var newData = this.users;

        for (var i = 0; i < this.usersSearchTerms.length; i++) {
            newData = this.filterData(newData, this.usersSearchTerms[i], true);
        }
        newData = this.dataTableService.sortData(newData, sortBy, sortOrder);
        this.usersPageCount = newData.length;
        newData = this.dataTableService.pageData(newData, this.usersFromRow, this.usersCurrentPage * this.usersPageSize);
        this.filteredUsers = newData;
        this.getAutoCompleteUsers();
    },

    toggleUserSelect: function(row) {
        if (this.allFilteredUsersSelected()) {
            this.allUsersSelected = true;
        } else {
            this.allUsersSelected = false;
        }
    },

    toggleUsersSelectAll: function() {
        if (this.allUsersSelected) {
            this.selectAllUsers();
        } else {
            this.deselectAllUsers();
        }
    },

    selectAllUsers: function() {
        this.filteredUsers.forEach(c => c.checked = true);
    },

    deselectAllUsers: function() {
        this.filteredUsers.forEach(c => c.checked = false);
    },
    allFilteredUsersSelected: function() {
        var allFilteredUsersSelected = true;
        this.filteredUsers.forEach(function(c) {
            if (c.checked === undefined || c.checked === false) {
                allFilteredUsersSelected = false;
            }
        });

        return allFilteredUsersSelected;
    },

    getAutoCompleteUsers: function() {
        this.autoCompleteUsers = [];
        this.userColumns.forEach(c => this.filteredUsers.forEach(r => (r[c.name.toLowerCase()]) ? this.autoCompleteUsers.push(r[c.name.toLowerCase()].toString()) : ''));
    }

    //</editor-fold>
};

module.exports = NfRegistryService;
