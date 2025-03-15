'use strict';

module.exports = function (/* environment, appConfig */) {
  const ENV = {
    APP: {},
  };
  ENV.APP.uiFramework = process?.env.EMT_UI;

  return ENV;
};
