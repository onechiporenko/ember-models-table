'use strict';

module.exports = function(/* environment, appConfig */) {
  const ENV = {
    APP: {}
  };

  ENV['ember-a11y-testing'] = {
    componentOptions: {
      axeOptions: {rules: {}}
    }
  };
  return ENV;
};
