(function(NfRegistryComponent, ngCore, ngPlatformBrowser, ngPlatformBrowserDynamic) {
    'use strict';

    NfRegistryComponent
        .annotations = [
            new ngCore.Component({
                selector: 'hello-app',
                template: '<h1>Hello {{title}}!</h1>'
            })
        ];

    function AppModule() {};

    AppModule.prototype = {
        constructor: AppModule
    };

    AppModule.annotations = [
        new ngCore.NgModule({
            imports: [ngPlatformBrowser.BrowserModule],
            declarations: [NfRegistryComponent],
            bootstrap: [NfRegistryComponent]
        })
    ];

    ngPlatformBrowserDynamic.platformBrowserDynamic().bootstrapModule(AppModule);
}(require('nf.RegistryComponent'), require('@angular/core'), require('@angular/platform-browser'), require('@angular/platform-browser-dynamic')));
