
# Ember-models-table

[![Build Status](https://travis-ci.org/onechiporenko/ember-models-table.svg?branch=master)](https://travis-ci.org/onechiporenko/ember-models-table)
[![Coverage Status](https://coveralls.io/repos/github/onechiporenko/ember-models-table/badge.svg?branch=master)](https://coveralls.io/github/onechiporenko/ember-models-table?branch=master)
[![Codacy Badge](https://www.codacy.com/project/badge/062ef689838e43dfa46eecd1f74f22af)](https://www.codacy.com/app/cv_github/ember-models-table)
[![Ember Observer Score](https://emberobserver.com/badges/ember-models-table.svg)](https://emberobserver.com/addons/ember-models-table)
[![npm version](https://badge.fury.io/js/ember-models-table.png)](http://badge.fury.io/js/ember-models-table)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)
[![Downloads](http://img.shields.io/npm/dm/ember-models-table.svg)](https://www.npmjs.com/package/ember-models-table)

## Install

```bash
ember install ember-models-table
```

## Discussion

Join the [official Ember Discord server](https://discord.gg/zT3asNS).

## Usage

Major version 3.x is latest version of `ember-models-table`. 

* Demo for `ember-bootstrap` with Bootstrap v3 - [demo bs3](http://onechiporenko.github.io/ember-models-table/v.3/bs3). Theme `ember-bootstrap-v3` is used here. Add file `app/instance-initializers/emt-inject.js` to your project and table components will use this theme automatically:

```javascript
export function initialize(appInstance) {
  appInstance.inject('component:models-table', 'themeInstance', `theme:ember-bootstrap-v3`);
  appInstance.inject('component:models-table-server-paginated', 'themeInstance', `theme:ember-bootstrap-v3`);
}

export default {
  name: 'emt-inject',
  initialize
};
```

* Demo for `ember-bootstrap` with Bootstrap v4 - [demo bs4](http://onechiporenko.github.io/ember-models-table/v.3/bs4). Theme `ember-bootstrap-v4` is used here. Add file `app/instance-initializers/emt-inject.js` to your project and table components will use this theme automatically:

```javascript
export function initialize(appInstance) {
  appInstance.inject('component:models-table', 'themeInstance', `theme:ember-bootstrap-v4`);
  appInstance.inject('component:models-table-server-paginated', 'themeInstance', `theme:ember-bootstrap-v4`);
}

export default {
  name: 'emt-inject',
  initialize
};
```

* Demo for `semantic-ui-ember` - [demo semantic](http://onechiporenko.github.io/ember-models-table/v.3/semantic). Theme `ember-semanticui` is used here. Add file `app/instance-initializers/emt-inject.js` to your project and table components will use this theme automatically:

```javascript
export function initialize(appInstance) {
  appInstance.inject('component:models-table', 'themeInstance', `theme:ember-semanticui`);
  appInstance.inject('component:models-table-server-paginated', 'themeInstance', `theme:ember-semanticui`);
}

export default {
  name: 'emt-inject',
  initialize
};
```

* Demo for `ember-paper` - [demo paper](http://onechiporenko.github.io/ember-models-table/v.3/paper). Theme `ember-paper` is used here. Add file `app/instance-initializers/emt-inject.js` to your project and table components will use this theme automatically:

```javascript
export function initialize(appInstance) {
  appInstance.inject('component:models-table', 'themeInstance', `theme:ember-paper`);
  appInstance.inject('component:models-table-server-paginated', 'themeInstance', `theme:ember-paper`);
}

export default {
  name: 'emt-inject',
  initialize
};
```

**IMPORTANT** Custom styles for `ember-paper` theme are not included to the `ember-models-table` by default. You can copy it from `dummy` app or create your own styles.

* Demo for `plain-html` - [demo plain html](http://onechiporenko.github.io/ember-models-table/v.3/plain-html). Theme `plain-html` is used here. Add file `app/instance-initializers/emt-inject.js` to your project and table components will use this theme automatically:

```javascript
export function initialize(appInstance) {
  appInstance.inject('component:models-table', 'themeInstance', `theme:plain-html`);
  appInstance.inject('component:models-table-server-paginated', 'themeInstance', `theme:plain-html`);
}

export default {
  name: 'emt-inject',
  initialize
};
```

**IMPORTANT** Custom styles for `plain-html` theme are not included to the `ember-models-table` by default. You can copy it from `dummy` app or create your own styles.

### Old versions

* [Demo for v.1](http://onechiporenko.github.io/ember-models-table/v.1/)
* [Demo for v.2](http://onechiporenko.github.io/ember-models-table/v.2/)
