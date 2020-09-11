'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let options = {
    babel: {
      sourceMaps: 'inline'
    },

    sourcemaps: {
      enabled: true,
      extensions: ['js']
    },
    snippetSearchPaths: ['app', 'addon', 'tests/dummy/app'],
    'ember-prism': {
      theme: 'tomorrow',
      components: ['scss', 'javascript', 'handlebars', 'markup-templating']
    },
    outputPaths: {
      app: {
        css: {
          app: '/assets/app.css'
        }
      }
    },
    'ember-composable-helpers': {
      only: ['intersect', 'filter-by', 'object-at', 'map-by', 'inc', 'contains', 'keys']
    },
    'ember-cli-string-helpers': {
      only: ['html-safe']
    }
  };
  if (process.env.EMT_UI === 'paper') {
    options.outputPaths.app.css.paper = '/assets/paper.css';
  }
  if (process.env.EMT_UI === 'plain-html') {
    options.outputPaths.app.css['plain-html'] = '/assets/plain-html.css';
  }
  switch(process.env.EMT_UI) {
    case 'bs3': {
      options.outputPaths.app.css['bs'] = '/assets/bs.css';
      options['ember-bootstrap'] = {
        bootstrapVersion: 3,
        importBootstrapCSS: true,
        importBootstrapFont: true
      };
      break;
    }
    case 'bs4': {
      options.outputPaths.app.css['bs'] = '/assets/bs.css';
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
