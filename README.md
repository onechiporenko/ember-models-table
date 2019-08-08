# Ember-models-table

[![Build Status](https://travis-ci.org/onechiporenko/ember-models-table.svg?branch=master)](https://travis-ci.org/onechiporenko/ember-models-table)
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

### Old versions

* [Demo for v.1](http://onechiporenko.github.io/ember-models-table/v.1/)
* [Demo for v.2](http://onechiporenko.github.io/ember-models-table/v.2/)

More complex usage-examples:

* [Nested tables](https://ember-twiddle.com/77fea628f5ea99e88203dbba977c92db?fileTreeShown=false&numColumns=0)
* [Server paginated table](https://ember-twiddle.com/3177ccf0b6c8a4656c9724cd8aa4f83a?fileTreeShown=false&numColumns=0)
* [Table settings from query params](https://ember-twiddle.com/918153a68f768b7a17c97ddd849dcd61?fileTreeShown=false&numColumns=0&route=%2Ftable%3Ffilters%3D2%253Astars%253A%253E0%26hidden%3D4%26page%3D3%26per_page%3D25%26search%3Dember%26sort%3Dstars%26sorted%3D2)
* [Rows Grouping](https://ember-twiddle.com/66f10ab6621a16e41887c39a2c649ce1?fileTreeShown=false&numColumns=0)
* [Inline edit and columns summary](https://ember-twiddle.com/99e1630b806bd4bd6edb5682429079a8?fileTreeShown=false&numColumns=0)
* [Colspan and custom filter ](https://ember-twiddle.com/cfd701072eb69fa17722dbe973e15cfe)
* [Keyboard navigation demo](https://ember-twiddle.com/d0d21f6c374804d51186ce0cde736ff7)
* [Filters with server-side data loading](https://ember-twiddle.com/42f47e96e6de69c0405d441d228307f8)

## Requirements

* Twitter Bootstrap should be installed for Bootstrap Themes
* SemanticUI should be installed for SemanticUI Theme
