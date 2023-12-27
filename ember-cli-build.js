'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  const options = {
    babel: {
      sourceMaps: 'inline',
    },
    'bundle-analyzer': {
      ignoreTestFiles: false,
    },
    sourcemaps: {
      enabled: true,
      extensions: ['js'],
    },
    snippetSearchPaths: ['app', 'addon', 'tests/dummy/app'],
    'ember-prism': {
      theme: 'tomorrow',
      components: ['scss', 'javascript', 'handlebars', 'markup-templating'],
    },
    outputPaths: {
      app: {
        css: {
          app: '/assets/app.css',
        },
      },
    },
    'ember-composable-helpers': {
      only: [
        'intersect',
        'filter-by',
        'object-at',
        'map-by',
        'inc',
        'includes',
        'keys',
      ],
    },
    'ember-cli-string-helpers': {
      only: ['html-safe'],
    },
  };
  switch (process.env.EMT_UI) {
    case 'plain-html': {
      options.outputPaths.app.css['plain-html'] = '/assets/plain-html.css';
      options['ember-models-table-floating-filter'] = {
        includePlainHtmlThemeCss: true,
      };
      break;
    }
    case 'bs4': {
      options.outputPaths.app.css['bs'] = '/assets/bs.css';
      options['ember-bootstrap'] = {
        bootstrapVersion: 4,
        importBootstrapCSS: true,
      };
      options['ember-models-table-floating-filter'] = {
        includeBs4ThemeCss: true,
      };
      break;
    }
    case 'bs5': {
      options.outputPaths.app.css['bs'] = '/assets/bs.css';
      options['ember-bootstrap'] = {
        bootstrapVersion: 5,
        importBootstrapCSS: true,
      };
      options['ember-models-table-floating-filter'] = {
        includeBs5ThemeCss: true,
      };
      break;
    }
  }
  let app = new EmberAddon(defaults, options);
  if (process.env.EMT_UI === 'plain-html') {
    app.import('vendor/ember-models-table/plain-html.css');
  }
  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
