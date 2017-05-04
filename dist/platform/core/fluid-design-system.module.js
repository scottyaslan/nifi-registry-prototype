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

var ngCore = require('@angular/core');
var ngForms = require('@angular/forms');
var ngMaterial = require('@angular/material');
var ngFlexLayout = require('@angular/flex-layout');
var fdsButtons = require('./buttons/buttons.module.js');
// var covalentCore = require('@covalent/core');
// var covalentForms = require('@covalent/dynamic-forms');
// var covalentHighlight = require('@covalent/highlight');
// var covalentHttp = require('@covalent/http');
// var covalentMarkdown = require('@covalent/markdown');

function FluidDesignSystemModule() {};

FluidDesignSystemModule.prototype = {
    constructor: FluidDesignSystemModule
};

FluidDesignSystemModule.annotations = [
    new ngCore.NgModule({
        imports: [
            ngForms.FormsModule,
            ngMaterial.MaterialModule,
            ngFlexLayout.FlexLayoutModule,
            fdsButtons
            // covalentCore.CovalentCoreModule,
            // covalentHttp.CovalentHttpModule,
            // covalentHighlight.CovalentHighlightModule,
            // covalentMarkdown.CovalentMarkdownModule
        ],
        exports: [
            ngForms.FormsModule,
            ngMaterial.MaterialModule,
            ngFlexLayout.FlexLayoutModule,
            fdsButtons
            // covalentCore.CovalentCoreModule,
            // covalentHttp.CovalentHttpModule,
            // covalentHighlight.CovalentHighlightModule,
            // covalentMarkdown.CovalentMarkdownModule
        ],
    })
];

module.exports = FluidDesignSystemModule;
