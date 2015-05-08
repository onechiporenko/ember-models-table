'use strict';

module.exports = function(environment, appConfig) {

  if (environment === 'production') {
    ENV.baseURL = '/ember-models-table'
  }

  return { };
};
