'use strict';

module.exports = function (/* environment, appConfig */) {
  const ENV = {
    APP: {},
  };
  ENV.APP.uiFramework = process?.env.EMT_UI;

  ENV['ember-a11y-testing'] = {
    componentOptions: {
      axeOptions: { rules: {} },
    },
  };
  return ENV;
};
