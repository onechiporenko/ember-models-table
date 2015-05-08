'use strict';

module.exports = function(environment, appConfig) {

  var ENV = {};

  if (environment === 'production') {
    ENV.baseURL = '/ember-models-table'
  }

  return { };
};
