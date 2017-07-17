# core

Core NiFi Registry UI Platform for layouts, icons, custom components and themes. This should be added as a dependency for any project that wants to use layouts, icons and themes for Angular Material or Teradata Covalent.

The core will have custom components that enforce standards and best practices through built-in design patterns.


## Installation

This component can be installed as npm package.

```bash
npm i -save @fluid-design-system/core
```


## Setup

Import the **[FluidDesignSystemModule]** in your NgModule:

```javascript
var fdsCore = require('@fluid-design-system/core');
NfRegistryAppModule.prototype = {
    constructor: NfRegistryAppModule
};

NfRegistryAppModule.annotations = [
    new ngCore.NgModule({
        imports: [
            fdsCore,
    ...
  ],
  ...
})
...
```


## Styles, Icons and Theming

See [theming](https://nifi-registry.github.io) in the docs for more info.

Core NiFi Registry UI Platform comes with a base CSS file `@fluid-design-system/core/common/styles/css/fluid-design-system.css` (includes icons).
