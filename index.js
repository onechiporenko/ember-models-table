'use strict';

const path = require('path');

const defaultOptions = {
  includeDefaultCss: true,
  includePlainHtmlThemeCss: false,
};

module.exports = {
  name: require('./package').name,

  included: function () {
    const app = this._findHost.call(this);
    this._super.included.apply(this, arguments);
    const options = Object.assign(
      {},
      defaultOptions,
      app.options['ember-models-table'],
    );
    let vendorPath = path.join('vendor', 'ember-models-table');
    if (options.includeDefaultCss) {
      app.import(path.join(vendorPath, 'style.css'));
    }
    if (options.includePlainHtmlThemeCss) {
      app.import(path.join(vendorPath, 'plain-html.css'));
    }
  },
};
