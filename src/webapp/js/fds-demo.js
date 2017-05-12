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

function FdsDemo(snackBarService, dialog, TdDialogService) {
    this.snackBarService = snackBarService;
    this.dialog = dialog;
    this.dialogService = TdDialogService;
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

    // Autocomplete
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

    /* Expansion Panel */

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

    /* Typeography */

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

    /* Dialogs */

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
    }
};

module.exports = FdsDemo;
