const { DEFAULT_IGNORED_PROPERTIES } = require('eslint-plugin-ember/lib/rules/avoid-leaking-state-in-ember-objects');

module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'quotes': [2, 'single'],
    'valid-jsdoc': [2, {
      'prefer': {
        'return': 'returns',
      },
      'requireParamDescription': false,
      'requireReturnDescription': false
    }],
    'ember/no-observers': 0,
    'ember/avoid-leaking-state-in-ember-objects': [2, [
      ...DEFAULT_IGNORED_PROPERTIES,
      'components', 'tagNames', 'messages'
    ]]
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js'
      ],
      excludedFiles: [
        'addon/**',
        'addon-test-support/**',
        'app/**',
        'tests/dummy/app/**'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here
      })
    },
    // test files
    {
      files: ['tests/**/*.js'],
      excludedFiles: ['tests/dummy/**/*.js'],
      env: {
        embertest: true
      }
    }
  ]
};
