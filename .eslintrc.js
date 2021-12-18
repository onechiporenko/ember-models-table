'use strict';

module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ['ember', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {
    'no-setter-return': 0,
    quotes: [2, 'single'],
    'ember/no-observers': 0,
    'ember/avoid-leaking-state-in-ember-objects': 2,
    'ember/no-jquery': 2,
    'ember/no-get': 2,
    'ember/no-actions-hash': 2,
    'ember/order-in-components': 2,
    'ember/no-test-and-then': 2,
    'ember/no-test-import-export': 2,
    'ember/no-test-module-for': 2,
    'ember/no-test-this-render': 2,
    'ember/no-empty-glimmer-component-classes': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': [1, { ignoreRestArgs: true }],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 2,
        '@typescript-eslint/no-var-requires': 2,
      },
    },
    // node files
    {
      files: [
        './.eslintrc.js',
        './.prettierrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './index.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './tests/dummy/config/**/*.js',
      ],
      excludedFiles: [
        'addon/**',
        'addon-test-support/**',
        'app/**',
        'tests/dummy/app/**',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
    },
    {
      // test files
      files: ['tests/**/*-test.{js,ts}'],
      extends: ['plugin:qunit/recommended'],
      env: {
        embertest: true,
      },
      globals: {
        server: true,
        Prism: true,
      },
      rules: {
        'ember/no-get': 0,
      },
    },
  ],
};
