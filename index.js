'use strict';

module.exports = {
  name: 'ember-models-table',

  included: function() {
    this._super.included.apply(this, arguments);

    this.import('vendor/style.css');
    this.import('vendor/ember-models-table/register-version.js');
  }

};
