/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-models-table',

  included: function(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/style.css');
    app.import('vendor/ember-models-table/register-version.js');
  }

};
