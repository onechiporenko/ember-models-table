'use strict';

module.exports = {
  extends: 'recommended',
  rules: {
    'table-groups': false,
    'require-presentational-children': false,
  },
  overrides: [
    {
      files: 'tests/dummy/app/**/*.hbs',
      rules: {
        'no-builtin-form-components': false,
      },
    },
  ],
};
