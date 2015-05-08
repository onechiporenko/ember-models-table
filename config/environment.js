'use strict';

module.exports = function(environment) {

  var ENV = {};

  if (environment === 'production') {
    ENV.baseURL = '/ember-models-table'
  }

  return ENV;
};
