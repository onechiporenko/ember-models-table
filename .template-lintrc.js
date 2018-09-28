'use strict';

module.exports = {
  extends: 'recommended',
  ignore: ['dummy/**/*.hbs'],
  rules: {
    'no-invalid-interactive': false,
    'attribute-indentation': {
      'element-open-end': 'last-attribute',
      'mustache-open-end': 'last-attribute',
    }
  }
};
