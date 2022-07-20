'use strict';

const {
  setupTestHooks,
  emberNew,
  emberGenerate,
} = require('ember-cli-blueprint-test-helpers/helpers');

const { expect } = require('ember-cli-blueprint-test-helpers/chai');

describe('Acceptance: ember generate ember-models-table (ember-cli-build.js)', function () {
  setupTestHooks(this);

  it('ember-models-table', function () {
    const args = ['ember-models-table'];

    return emberNew().then(() =>
      emberGenerate(args, (file) => {
        expect(file('ember-cli-build.js')).to.not.contain(
          'includePlainHtmlThemeCss'
        );
        expect(file('ember-cli-build.js')).to.contain(
          'includeDefaultCss: true'
        );
      })
    );
  });

  it('ember-models-table --idc=false', function () {
    const args = ['ember-models-table', '--idc=false'];

    return emberNew().then(() =>
      emberGenerate(args, (file) => {
        expect(file('ember-cli-build.js')).to.not.contain(
          'includePlainHtmlThemeCss'
        );
        expect(file('ember-cli-build.js')).to.contain(
          'includeDefaultCss: false'
        );
      })
    );
  });

  it('ember-models-table --include-default-css=false', function () {
    const args = ['ember-models-table', '--include-default-css=false'];

    return emberNew().then(() =>
      emberGenerate(args, (file) => {
        expect(file('ember-cli-build.js')).to.not.contain(
          'includePlainHtmlThemeCss'
        );
        expect(file('ember-cli-build.js')).to.contain(
          'includeDefaultCss: false'
        );
      })
    );
  });

  it('ember-models-table --iphtc', function () {
    const args = ['ember-models-table', '--iphtc'];

    return emberNew().then(() =>
      emberGenerate(args, (file) => {
        expect(file('ember-cli-build.js')).to.contain(
          'includeDefaultCss: true'
        );
        expect(file('ember-cli-build.js')).to.contain(
          'includePlainHtmlThemeCss: true'
        );
      })
    );
  });

  it('ember-models-table --include-plain-html-theme-css=true', function () {
    const args = ['ember-models-table', '--include-plain-html-theme-css=true'];

    return emberNew().then(() =>
      emberGenerate(args, (file) => {
        expect(file('ember-cli-build.js')).to.contain(
          'includeDefaultCss: true'
        );
        expect(file('ember-cli-build.js')).to.contain(
          'includePlainHtmlThemeCss: true'
        );
      })
    );
  });
});
