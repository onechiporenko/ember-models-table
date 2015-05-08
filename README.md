# Ember-models-table

[![Build Status](https://travis-ci.org/onechiporenko/ember-models-table.svg?branch=master)](https://travis-ci.org/onechiporenko/ember-models-table)
[![Codacy Badge](https://www.codacy.com/project/badge/062ef689838e43dfa46eecd1f74f22af)](https://www.codacy.com/app/cv_github/ember-models-table)
[![Dependency Status](https://www.versioneye.com/user/projects/554b59355d4f9a0b990014f2/badge.svg?style=flat)](https://www.versioneye.com/user/projects/554b59355d4f9a0b990014f2)
[![Dependency Status](https://www.versioneye.com/user/projects/554b59325d4f9a606f001352/badge.svg?style=flat)](https://www.versioneye.com/user/projects/554b59325d4f9a606f001352)
![io.js supported](https://img.shields.io/badge/io.js-supported-green.svg?style=flat)
[![npm version](https://badge.fury.io/js/ember-models-table.png)](http://badge.fury.io/js/ember-models-table)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)

## Install

```bash
ember install ember-models-table
```

## Usage

Layout is designed for use **Twitter Bootstrap 3***.

### Basic
````javascript
App.MyController = Ember.Controller.extend({
  content: [
    {
      prop1: 'value1',
      prop2: 'value2'
    },
    {
      prop1: 'value3',
      prop2: 'value4'
    }
  ],
  columns: [
    {
      propertyName: 'prop1',
      title: 'Title1'
    },
    {
      propertyName: 'prop2',
      title: 'Title2'
    }
  ]
});
````

````handlebars
{{models-table content=content columns=columns}}
````

Output:

| Title1 | Title2 |
| ------ | ------ |
| value1 | value2 |
| value3 | value4 |

### Advanced

**Without table-footer**

````handlebars
{{models-table content=content columns=columns showTableFooter=false}}
````

**With HTML-content**

````javascript
App.MyController = Ember.Controller.extend({
  content: [
    {
      prop1: 'value1',
      prop2: '<i>value2</i>'
    },
    {
      prop1: 'value3',
      prop2: '<i>value4</i>'
    }
  ],
  columns: [
    {
      propertyName: 'prop1',
      title: 'Title1'
    },
    {
      propertyName: 'prop2',
      title: 'Title2',
      isHtml: true
    }
  ]
});
````

````handlebars
{{models-table content=content columns=columns}}
````

| Title1 | Title2   |
| ------ | -------- |
| value1 | *value2* |
| value3 | *value4* |

**With custom sort-field**

````javascript
App.MyController = Ember.Controller.extend({
  content: [
    {
      prop1: 'value1',
      prop2: 'value2',
      prop3: 2
    },
    {
      prop1: 'value3',
      prop2: 'value4',
      prop3: 1
    }
  ],
  columns: [
    {
      propertyName: 'prop1',
      title: 'Title1'
    },
    {
      propertyName: 'prop2',
      title: 'Title2',
      sortedBy: 'prop3'
    }
  ]
});
````

````handlebars
{{models-table content=content columns=columns}}
````

If user clicks on the "Title2", sorting will be done by `prop3`.