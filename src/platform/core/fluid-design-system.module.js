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

var $ = require('jquery');
var ngCore = require('@angular/core');
var ngCommon = require('@angular/common');
var ngForms = require('@angular/forms');
var ngHttp = require('@angular/http');
var ngPlatformBrowser = require('@angular/platform-browser');
var ngAnimations = require('@angular/platform-browser/animations');
var covalentCore = require('@covalent/core');

//add fds attr to body tag to allow fine grain style overrides
document.body.setAttribute('fds', '');

//override the hover styles for checkbox borders
$(document.body).on('mouseenter', '.mat-checkbox-inner-container', function() {
    $(this).find('.mat-checkbox-frame').css('border-color', '#1491C1');
});
$(document.body).on('mouseleave', '.mat-checkbox-inner-container', function() {
    $(this).find('.mat-checkbox-frame').css('border-color', '#DDDDDD');
});

function FluidDesignSystemModule() {};

FluidDesignSystemModule.prototype = {
    constructor: FluidDesignSystemModule
};

FluidDesignSystemModule.annotations = [
    new ngCore.NgModule({
        imports: [
            ngAnimations.BrowserAnimationsModule,
            ngCommon.CommonModule,
            ngForms.FormsModule,
            ngPlatformBrowser.BrowserModule,
            ngHttp.HttpModule,
            ngHttp.JsonpModule,
            covalentCore.CovalentCoreModule
        ],
        exports: [
            ngAnimations.BrowserAnimationsModule,
            ngCommon.CommonModule,
            ngForms.FormsModule,
            ngPlatformBrowser.BrowserModule,
            ngHttp.HttpModule,
            ngHttp.JsonpModule,
            covalentCore.CovalentCoreModule
        ],
    })
];

module.exports = FluidDesignSystemModule;
