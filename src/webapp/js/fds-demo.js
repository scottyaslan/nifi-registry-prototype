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

var NfRegistryExplorer = require('nf.RegistryExplorer');

var NUMBER_FORMAT = v => v;
var DECIMAL_FORMAT = v => v.toFixed(2);

function FdsDemo(snackBarService, dialog, TdDialogService, TdDataTableService) {
    this.snackBarService = snackBarService;
    this.dialog = dialog;
    this.dialogService = TdDialogService;

    //<editor-fold desc="Data Tables">

    this.dataTableService = TdDataTableService;

    this.data = [{
        'id': 1,
        'name': 'Frozen yogurt',
        'type': 'Ice cream',
        'calories': 159.0,
        'fat': 6.0,
        'carbs': 24.0,
        'protein': 4.0,
        'sodium': 87.0,
        'calcium': 14.0,
        'iron': 1.0,
        'comments': 'I love froyo!',
        'actions': [{
            'name': 'Action 1',
            'icon': 'fa fa-user',
            'tooltip': 'Manage Users'
        }, {
            'name': 'Action 2',
            'icon': 'fa fa-key',
            'tooltip': 'Manage Permissions'
        }]
    }, {
        'id': 2,
        'name': 'Ice cream sandwich',
        'type': 'Ice cream',
        'calories': 237.0,
        'fat': 9.0,
        'carbs': 37.0,
        'protein': 4.3,
        'sodium': 129.0,
        'calcium': 8.0,
        'iron': 1.0,
        'actions': [{
            'name': 'Action 1',
            'icon': 'fa fa-user',
            'tooltip': 'Manage Users'
        }, {
            'name': 'Action 2',
            'icon': 'fa fa-key',
            'tooltip': 'Manage Permissions'
        }, {
            'name': 'Action 3',
            'tooltip': 'Action 3'
        }, {
            'name': 'Action 4',
            'disabled': true,
            'tooltip': 'Action 4'
        }, {
            'name': 'Action 5',
            'tooltip': 'Action 5'
        }]
    }, {
        'id': 3,
        'name': 'Eclair',
        'type': 'Pastry',
        'calories': 262.0,
        'fat': 16.0,
        'carbs': 24.0,
        'protein': 6.0,
        'sodium': 337.0,
        'calcium': 6.0,
        'iron': 7.0,
        'actions': [{
            'name': 'Action 1',
            'icon': 'fa fa-user',
            'tooltip': 'Manage Users'
        }, {
            'name': 'Action 2',
            'icon': 'fa fa-key',
            'tooltip': 'Manage Permissions'
        }, {
            'name': 'Action 3',
            'tooltip': 'Action 3'
        }, {
            'name': 'Action 4',
            'disabled': true,
            'tooltip': 'Action 4'
        }, {
            'name': 'Action 5',
            'tooltip': 'Action 5'
        }],
    }, {
        'id': 4,
        'name': 'Cupcake',
        'type': 'Pastry',
        'calories': 305.0,
        'fat': 3.7,
        'carbs': 67.0,
        'protein': 4.3,
        'sodium': 413.0,
        'calcium': 3.0,
        'iron': 8.0,
        'actions': [{
            'name': 'Action 1',
            'icon': 'fa fa-user',
            'tooltip': 'Manage Users'
        }, {
            'name': 'Action 2',
            'icon': 'fa fa-key',
            'tooltip': 'Manage Permissions'
        }, {
            'name': 'Action 3',
            'tooltip': 'Action 3'
        }, {
            'name': 'Action 4',
            'disabled': true,
            'tooltip': 'Action 4'
        }, {
            'name': 'Action 5',
            'tooltip': 'Action 5'
        }],
    }, {
        'id': 5,
        'name': 'Jelly bean',
        'type': 'Candy',
        'calories': 375.0,
        'fat': 0.0,
        'carbs': 94.0,
        'protein': 0.0,
        'sodium': 50.0,
        'calcium': 0.0,
        'iron': 0.0,
    }, {
        'id': 6,
        'name': 'Lollipop',
        'type': 'Candy',
        'calories': 392.0,
        'fat': 0.2,
        'carbs': 98.0,
        'protein': 0.0,
        'sodium': 38.0,
        'calcium': 0.0,
        'iron': 2.0,
    }, {
        'id': 7,
        'name': 'Honeycomb',
        'type': 'Other',
        'calories': 408.0,
        'fat': 3.2,
        'carbs': 87.0,
        'protein': 6.5,
        'sodium': 562.0,
        'calcium': 0.0,
        'iron': 45.0,
    }, {
        'id': 8,
        'name': 'Donut',
        'type': 'Pastry',
        'calories': 452.0,
        'fat': 25.0,
        'carbs': 51.0,
        'protein': 4.9,
        'sodium': 326.0,
        'calcium': 2.0,
        'iron': 22.0,
    }, {
        'id': 9,
        'name': 'KitKat',
        'type': 'Candy',
        'calories': 518.0,
        'fat': 26.0,
        'carbs': 65.0,
        'protein': 7.0,
        'sodium': 54.0,
        'calcium': 12.0,
        'iron': 6.0,
    }, {
        'id': 10,
        'name': 'Chocolate',
        'type': 'Candy',
        'calories': 518.0,
        'fat': 26.0,
        'carbs': 65.0,
        'protein': 7.0,
        'sodium': 54.0,
        'calcium': 12.0,
        'iron': 6.0,
    }, {
        'id': 11,
        'name': 'Chamoy',
        'type': 'Candy',
        'calories': 518.0,
        'fat': 26.0,
        'carbs': 65.0,
        'protein': 7.0,
        'sodium': 54.0,
        'calcium': 12.0,
        'iron': 6.0,
    }, ];

    this.filteredData = this.data;
    this.filteredTotal = this.data.length;

    this.columns = [
        { name: 'comments', label: 'Comments' },
        { name: 'name', label: 'Dessert (100g serving)', sortable: true },
        { name: 'type', label: 'Type', sortable: true },
        { name: 'calories', label: 'Calories', numeric: true, format: NUMBER_FORMAT, sortable: true },
        { name: 'fat', label: 'Fat (g)', numeric: true, format: DECIMAL_FORMAT, sortable: true },
        { name: 'carbs', label: 'Carbs (g)', numeric: true, format: NUMBER_FORMAT, sortable: true },
        { name: 'protein', label: 'Protein (g)', numeric: true, format: DECIMAL_FORMAT, sortable: true },
        { name: 'sodium', label: 'Sodium (mg)', numeric: true, format: NUMBER_FORMAT, sortable: true },
        { name: 'calcium', label: 'Calcium (%)', numeric: true, format: NUMBER_FORMAT, sortable: true },
        { name: 'iron', label: 'Iron (%)', numeric: true, format: NUMBER_FORMAT },
    ];

    this.allRowsSelected = false;
    this.autoCompleteData = [];
    this.selectedRows = [];

    this.searchTerm = [];
    this.fromRow = 1;
    this.currentPage = 1;
    this.pageSize = 5;

    //</editor-fold>

    //<editor-fold desc="Chips $ Autocomplete">

    this.readOnly = false;

    this.items = [
        'stepper',
        'expansion-panel',
        'markdown',
        'highlight',
        'loading',
        'media',
        'chips',
        'http',
        'json-formatter',
        'pipes',
        'need more?',
    ];

    this.itemsRequireMatch = this.items.slice(0, 6);

    //</editor-fold>
};

FdsDemo.prototype = {
    constructor: FdsDemo,
    isDisabled: false,
    isIndeterminate: false,
    favoriteSeason: 'Autumn',
    selectedValue: '',
    color: '',
    alwaysVisible: false,

    chips: [
        { name: 'Default', color: '', selected: false },
        { name: 'Default (selected)', color: '', selected: true },
        { name: 'Primary (selected)', color: 'primary', selected: true },
        { name: 'Accent (selected)', color: 'accent', selected: true },
        { name: 'Warn (selected)', color: 'warn', selected: true },
    ],

    foods: [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
    ],

    seasonOptions: [
        'Winter',
        'Spring',
        'Summer',
        'Autumn',
    ],
    user: {
        agreesToTOS: false
    },

    groceries: [{
        bought: true,
        name: 'Seitan',
    }, {
        bought: false,
        name: 'Almond Meal Flour',
    }, {
        bought: false,
        name: 'Organic Eggs',
    }, ],

    todos: [{
        finished: true,
        name: 'Learn Angular',
    }, {
        finished: true,
        name: 'Learn Angular Material',
    }, {
        finished: false,
        name: 'Build examples',
    }, {
        finished: false,
        name: 'Documentation',
    }, {
        finished: false,
        name: 'Write about your findings',
    }, {
        finished: false,
        name: 'Contribute back to the community',
    }, ],

    messages: [{
        from: 'Ali Connors',
        message: 'I will be in your neighborhood',
        photo: 'https://api.adorable.io/avatars/40/1.png',
        subject: 'Brunch this weekend?',
    }, {
        from: 'Trevor Hansen',
        message: 'Wish I could but we have plans',
        photo: 'https://api.adorable.io/avatars/40/2.png',
        subject: 'Re: Brunch this weekend?',
    }, {
        from: 'Sandra Adams',
        message: 'Do you have Paris recommendations instead?',
        photo: 'https://api.adorable.io/avatars/40/3.png',
        subject: 'Re: Brunch this weekend?',
    }, ],

    systems: [{
        name: 'Lights',
        on: false,
        color: 'primary',
    }, {
        name: 'Surround Sound',
        on: true,
        color: 'accent',
    }, {
        name: 'T.V.',
        on: true,
        color: 'warn',
    }, ],

    house: {
        lockHouse: false,
    },

    //</editor-fold>

    //<editor-fold desc="Autocomplete">

    currentState: '',

    reactiveStates: '',
    tdStates: [],

    tdDisabled: false,

    states: [
        { code: 'AL', name: 'Alabama' },
        { code: 'AK', name: 'Alaska' },
        { code: 'AZ', name: 'Arizona' },
        { code: 'AR', name: 'Arkansas' },
        { code: 'CA', name: 'California' },
        { code: 'CO', name: 'Colorado' },
        { code: 'CT', name: 'Connecticut' },
        { code: 'DE', name: 'Delaware' },
        { code: 'FL', name: 'Florida' },
        { code: 'GA', name: 'Georgia' },
        { code: 'HI', name: 'Hawaii' },
        { code: 'ID', name: 'Idaho' },
        { code: 'IL', name: 'Illinois' },
        { code: 'IN', name: 'Indiana' },
        { code: 'IA', name: 'Iowa' },
        { code: 'KS', name: 'Kansas' },
        { code: 'KY', name: 'Kentucky' },
        { code: 'LA', name: 'Louisiana' },
        { code: 'ME', name: 'Maine' },
        { code: 'MD', name: 'Maryland' },
        { code: 'MA', name: 'Massachusetts' },
        { code: 'MI', name: 'Michigan' },
        { code: 'MN', name: 'Minnesota' },
        { code: 'MS', name: 'Mississippi' },
        { code: 'MO', name: 'Missouri' },
        { code: 'MT', name: 'Montana' },
        { code: 'NE', name: 'Nebraska' },
        { code: 'NV', name: 'Nevada' },
        { code: 'NH', name: 'New Hampshire' },
        { code: 'NJ', name: 'New Jersey' },
        { code: 'NM', name: 'New Mexico' },
        { code: 'NY', name: 'New York' },
        { code: 'NC', name: 'North Carolina' },
        { code: 'ND', name: 'North Dakota' },
        { code: 'OH', name: 'Ohio' },
        { code: 'OK', name: 'Oklahoma' },
        { code: 'OR', name: 'Oregon' },
        { code: 'PA', name: 'Pennsylvania' },
        { code: 'RI', name: 'Rhode Island' },
        { code: 'SC', name: 'South Carolina' },
        { code: 'SD', name: 'South Dakota' },
        { code: 'TN', name: 'Tennessee' },
        { code: 'TX', name: 'Texas' },
        { code: 'UT', name: 'Utah' },
        { code: 'VT', name: 'Vermont' },
        { code: 'VA', name: 'Virginia' },
        { code: 'WA', name: 'Washington' },
        { code: 'WV', name: 'West Virginia' },
        { code: 'WI', name: 'Wisconsin' },
        { code: 'WY', name: 'Wyoming' },
    ],

    displayFn: function(value) {
        return value && typeof value === 'object' ? value.name : value;
    },

    filterStates: function(val) {
        return val ? this.states.filter((s) => s.name.match(new RegExp(val, 'gi'))) : this.states;
    },

    showSnackBar: function() {
        var snackBarRef = this.snackBarService.open('Message', 'Action', { duration: 3000 });
    },

    openDialog: function() {
        this.dialog.open(NfRegistryExplorer, {
            height: '50%', // can be px or %
            width: '60%', // can be px or %
        });
    },

    //</editor-fold>

    //<editor-fold desc="Expansion Panel">

    expansionAttrs: [{
        description: 'Sets label of [TdExpansionPanelComponent] header. Defaults to "Click to expand"',
        name: 'label?',
        type: 'string',
    }, {
        description: 'Sets sublabel of [TdExpansionPanelComponent] header.',
        name: 'sublabel?',
        type: 'string',
    }, {
        description: 'Toggles [TdExpansionPanelComponent] between expand/collapse.',
        name: 'expand?',
        type: 'boolean',
    }, {
        description: `Hides icon and disables header, blocks click event and sets [TdExpansionPanelComponent]
                  to collapse if "true".`,
        name: 'disabled?',
        type: 'boolean',
    }, {
        description: 'Event emitted when [TdExpansionPanelComponent] is expanded.',
        name: 'expanded?',
        type: 'function()',
    }, {
        description: 'Event emitted when [TdExpansionPanelComponent] is collapsed.',
        name: 'collapsed?',
        type: 'function()',
    }, {
        description: `Toggle active state of [TdExpansionPanelComponent]. Retuns "true" if successful, else "false".
                  Can be accessed by referencing element in local variable.`,
        name: 'toggle',
        type: 'function()',
    }, {
        description: `Opens [TdExpansionPanelComponent]. Retuns "true" if successful, else "false".
                  Can be accessed by referencing element in local variable.`,
        name: 'open',
        type: 'function()',
    }, {
        description: `Closes [TdExpansionPanelComponent]. Retuns "true" if successful, else "false".
                  Can be accessed by referencing element in local variable.`,
        name: 'close',
        type: 'function()',
    }],

    expandCollapseExpansion1Msg: 'No expanded/collapsed detected yet',
    expansion1: false,
    disabled: false,

    toggleExpansion1: function() {
        if (!this.disabled) {
            this.expansion1 = !this.expansion1;
        }
    },

    toggleDisabled: function() {
        this.disabled = !this.disabled;
    },

    expandExpansion1Event: function() {
        this.expandCollapseExpansion1Msg = 'Expand event emitted.';
    },

    collapseExpansion1Event: function() {
        this.expandCollapseExpansion1Msg = 'Collapse event emitted.';
    },

    //</editor-fold>

    //<editor-fold desc="Typeography">

    colors: [
        'red',
        'pink',
        'purple',
        'deep-purple',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'deep-orange',
    ],

    neutrals: [
        'brown',
        'grey',
        'blue-grey',
    ],

    //</editor-fold>

    //<editor-fold desc="Dialogs">

    dialogServiceMethods: [{
        description: `Opens an alert dialog with the provided config.`,
        name: 'openAlert',
        type: 'function(IAlertConfig): MdDialogRef<TdAlertDialogComponent>',
    }, {
        description: `Opens a confirm dialog with the provided config.`,
        name: 'openConfirm',
        type: 'function(IConfirmConfig): MdDialogRef<TdConfirmDialogComponent>',
    }, {
        description: `Opens a prompt dialog with the provided config.`,
        name: 'openPrompt',
        type: 'function(IPromptConfig): MdDialogRef<TdPromptDialogComponent>',
    }, {
        description: `Wrapper function over the open() method in MdDialog.
                  Opens a modal dialog containing the given component.`,
        name: 'open',
        type: 'function<T>(component: ComponentType<T>, config: MdDialogConfig): MdDialogRef<T>',
    }, {
        description: `Wrapper function over the closeAll() method in MdDialog.
                  Closes all of the currently-open dialogs.`,
        name: 'closeAll',
        type: 'function()',
    }],

    openAlert: function() {
        this.dialogService.openAlert({
            title: 'Alert',
            disableClose: true,
            message: 'This is how simple it is to create an alert with this wrapper service.',
        });
    },

    openConfirm: function() {
        this.dialogService.openConfirm({
            title: 'Confirm',
            message: 'This is how simple it is to create a confirm with this wrapper service. Do you agree?',
            cancelButton: 'Disagree',
            acceptButton: 'Agree',
        });
    },

    openPrompt: function() {
        this.dialogService.openPrompt({
            title: 'Prompt',
            message: 'This is how simple it is to create a prompt with this wrapper service. Prompt something.',
            value: 'Populated value',
            cancelButton: 'Cancel',
            acceptButton: 'Ok',
        });
    },

    //</editor-fold>

    //<editor-fold desc="Data Tables">

    sort: function(sortEvent, column) {
        if (column.sortable) {
            var sortBy = column.name;
            var sortOrder = column.sortOrder = (column.sortOrder === 'ASC') ? 'DESC' : 'ASC';
            this.filter(sortBy, sortOrder);

            //only one column can be actively sorted so we reset all to inactive
            this.columns.forEach(c => c.active = false);
            //and set this column as the actively sorted column
            column.active = true;
        }
    },

    searchRemove: function(searchTerm) {
        //only remove the first occurrence of the search term
        var index = this.searchTerm.indexOf(searchTerm);
        if (index !== -1) {
            this.searchTerm.splice(index, 1);
        }
        this.filter();
    },

    searchAdd: function(searchTerm) {
        this.searchTerm.push(searchTerm);
        this.filter();
    },

    page: function(pagingEvent) {
        this.fromRow = pagingEvent.fromRow;
        this.currentPage = pagingEvent.page;
        this.pageSize = pagingEvent.pageSize;
        this.filter();
    },

    filterData: function(data, searchTerm, ignoreCase, columnName) {
        var filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
        var field = columnName ? (ignoreCase ? columnName.toLowerCase() : columnName) : '';
        if (filter) {
            data = data.filter(item => {
                var res = Object.keys(item).find((key) => {
                    if (key !== field && field !== '') {
                        return false;
                    }
                    var preItemValue = ('' + item[key]);
                    var itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                    return itemValue.indexOf(filter) > -1;
                });
                return !(typeof res === 'undefined');
            });
        }
        return data;
    },

    filter: function(sortBy, sortOrder) {
        if (this.allRowsSelected) {
            this.toggleSelectAll();
        }
        this.deselectAll();
        var newData = this.data;

        if (this.searchTerm.length > 0) {
            for (var i = 0; i < this.searchTerm.length; i++) {
                //account for column/field name specific search syntax
                if (this.searchTerm[i].indexOf(":") > -1) {
                    newData = this.filterData(newData, this.searchTerm[i].split(':')[1].trim(), true, this.searchTerm[i].split(':')[0].trim());
                } else { //otherwise search all cells
                    newData = this.filterData(newData, this.searchTerm[i], true);
                }
            }
        } else {
            newData = this.dataTableService.filterData(newData, '', true);
        }
        this.filteredTotal = newData.length;
        newData = this.dataTableService.sortData(newData, sortBy, sortOrder);
        newData = this.dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
        this.filteredData = newData;
        this.getAutoCompleteData();
    },

    toggleSelect: function(row) {
        if (!row.checked) {
            this.allRowsSelected = false;
        } else {
            if (this.allFilteredRowsSelected()) {
                this.allRowsSelected = true;
            } else {
                this.allRowsSelected = false;
            }
        }
    },

    toggleSelectAll: function() {
        this.allRowsSelected = !this.allRowsSelected;
        if (this.allRowsSelected) {
            this.selectAll();
        } else {
            this.deselectAll();
        }
    },

    selectAll: function() {
        this.filteredData.forEach(c => c.checked = true);
    },

    deselectAll: function() {
        this.filteredData.forEach(c => c.checked = false);
    },

    allFilteredRowsSelected: function() {
        var allFilteredRowsSelected = true;
        this.filteredData.forEach(function(c) {
            if (c.checked === undefined || c.checked === false) {
                allFilteredRowsSelected = false;
            }
        });

        return allFilteredRowsSelected;
    },

    areTooltipsOn: function() {
        return this.columns[0].hasOwnProperty('tooltip');
    },

    toggleTooltips: function() {
        if (this.columns[0].tooltip) {
            this.columns.forEach(c => delete c.tooltip);
        } else {
            this.columns.forEach(c => c.tooltip = `This is ${c.label}!`);
        }
    },

    openDataTablePrompt: function(row, name) {
        this.dialogService.openPrompt({
            message: 'Enter comment?',
            value: row[name],
        }).afterClosed().subscribe(value => {
            if (value !== undefined) {
                row[name] = value;
            }
        })
    },

    getAutoCompleteData: function() {
        this.autoCompleteData = [];
        this.columns.forEach(c => this.filteredData.forEach(r => (r[c.name.toLowerCase()]) ? this.autoCompleteData.push(r[c.name.toLowerCase()].toString()):''));
    },

    //</editor-fold>

    //<editor-fold desc="Chips $ Autocomplete">

    toggleReadOnly: function() {
        this.readOnly = !this.readOnly;
    },

    //</editor-fold>

    //<editor-fold desc="Life Cycle Listeners">

    ngOnInit: function() {
        this.filter();
        this.getAutoCompleteData();
    }

    //</editor-fold>
};

module.exports = FdsDemo;
