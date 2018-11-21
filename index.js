'use strict';

const path = require('path');

// From https://github.com/kaliber5/ember-bootstrap/blob/master/index.js
//
// For ember-cli < 2.7 findHost doesn't exist so we backport from that version
// for earlier version of ember-cli.
// https://github.com/ember-cli/ember-cli/blame/16e4492c9ebf3348eb0f31df17215810674dbdf6/lib/models/addon.js#L533
function findHostShim() {
  let current = this;
  let app;
  do {
    app = current.app || app;
  } while (current.parent.parent && (current = current.parent));
  return app;
}

module.exports = {
  name: require('./package').name,

  included: function() {
    this._super.included.apply(this, arguments);

    let findHost = this._findHost || findHostShim;
    let app = findHost.call(this);
    app.import(path.join('vendor', 'style.css'));
    app.import(path.join('vendor', 'ember-models-table', 'register-version.js'));
  }

};
