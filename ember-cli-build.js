'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let options = {
    'ember-composable-helpers': {
      only: ['intersect', 'filter-by', 'object-at', 'map-by']
    }
  };
  switch(process.env.EMT_UI) {
    case 'bs3': {
      options['ember-bootstrap'] = {
        bootstrapVersion: 3,
        importBootstrapCSS: true,
        importBootstrapFont: true
      };
      break;
    }
    case 'bs4': {
      options['ember-bootstrap'] = {
        bootstrapVersion: 4,
        importBootstrapCSS: true
      };
      break;
    }
  }
  let app = new EmberAddon(defaults, options);

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
