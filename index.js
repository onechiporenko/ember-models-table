'use strict';

const path = require('path');

module.exports = {
  name: require('./package').name,

  included: function () {
    const app = this._findHost.call(this);
    this._super.included.apply(this, arguments);
    app.import(path.join('vendor', 'style.css'));
  },
};
