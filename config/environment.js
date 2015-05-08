'use strict';

module.exports = function(environment) {

  var ENV = {
    environment: environment
  };

  if (environment === 'production') {
    ENV.baseURL = '/ember-models-table'
  }

  return ENV;
};
