/**
 * Debugging:
 *   https://eslint.org/docs/latest/use/configure/debug
 *  ----------------------------------------------------
 *
 *   Print a file's calculated configuration
 *
 *     npx eslint --print-config path/to/file.js
 *
 *   Inspecting the config
 *
 *     npx eslint --inspect-config
 *
 */
import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import ember from 'eslint-plugin-ember/recommended';
import n from 'eslint-plugin-n';
import qunit from 'eslint-plugin-qunit';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const esmParserOptions = {
  ecmaFeatures: { modules: true },
  ecmaVersion: 'latest',
  requireConfigFile: false,
  babelOptions: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    ],
  },
};

export default tseslint.config(
  js.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
  ember.configs.base,
  ember.configs.gjs,
  /**
   * Ignores must be in their own object
   * https://eslint.org/docs/latest/use/configure/ignore
   */
  {
    ignores: ['dist/', 'docs/', 'node_modules/', 'coverage/', '!**/.*'],
  },
  /**
   * https://eslint.org/docs/latest/use/configure/configuration-files#configuring-linter-options
   */
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      parser: babelParser,
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      parserOptions: esmParserOptions,
      globals: {
        ...globals.browser,
      },
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
  },
  {
    files: ['tests/**/*-test.{ts,js,gjs}'],
    plugins: {
      qunit,
    },
    rules: {
      'ember/no-get': 'off',
    },
  },
  /**
   * CJS node files
   */
  {
    files: [
      '**/*.cjs',
      'config/**/*.js',
      'tests/dummy/config/**/*.js',
      'testem.js',
      'testem*.js',
      'index.js',
      '.prettierrc.js',
      '.stylelintrc.js',
      '.template-lintrc.js',
      'ember-cli-build.js',
      'index.js',
      'tests/**/config/**/*.js',
      'blueprints/**/*.js',
    ],
    plugins: {
      n,
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },

    languageOptions: {
      sourceType: 'script',
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['override-types/**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  // node tests
  {
    files: ['node-tests/**/*.{ts,js}'],
    plugins: {
      n,
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
    languageOptions: {
      sourceType: 'script',
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
    },
  },
  /**
   * ESM node files
   */
  {
    files: ['**/*.mjs'],
    plugins: {
      n,
    },

    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      parserOptions: esmParserOptions,
      globals: {
        ...globals.node,
      },
    },
  },
);
