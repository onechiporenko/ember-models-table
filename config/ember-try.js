'use strict';

const getChannelURL = require('ember-source-channel-url');

module.exports = async function () {
  return {
    scenarios: [
      {
        name: 'ember-lts-3.16',
        npm: {
          devDependencies: {
            'ember-source': '~3.16.0',
          },
        },
      },
      {
        name: 'ember-lts-3.20',
        npm: {
          devDependencies: {
            'ember-source': '~3.20.5',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
          },
        },
      },
      {
        name: 'ember-default-with-jquery',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'jquery-integration': true,
          }),
        },
        npm: {
          devDependencies: {
            '@ember/jquery': '^1.1.0',
          },
        },
      },
      {
        name: 'ember-classic',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'application-template-wrapper': true,
            'default-async-observers': false,
            'template-only-glimmer-components': false,
          }),
        },
        npm: {
          ember: {
            edition: 'classic',
          },
        },
      },
      {
        name: 'ember-default-with-ember-bootstrap-v3',
        env: {
          EMT_UI: 'bs3',
        },
        npm: {
          devDependencies: {
            'bootstrap-sass': '3.4.1',
            bootstrap: '3.4.1',
            'ember-bootstrap': '^4.6.3',
          },
        },
      },
      {
        name: 'ember-default-with-ember-bootstrap-v4',
        env: {
          EMT_UI: 'bs4',
        },
        npm: {
          devDependencies: {
            'bootstrap-sass': '3.4.1',
            bootstrap: '4.4.1',
            'ember-bootstrap': '^4.6.3',
          },
        },
      },
      {
        name: 'ember-default-with-ember-paper',
        env: {
          EMT_UI: 'paper',
        },
        npm: {
          devDependencies: {
            'ember-paper': '1.0.0-beta.35',
            'ember-href-to': '3.1.0',
            'ember-power-select': '^3.0.6',
          },
        },
      },
      {
        name: 'ember-default-with-plain-html',
        env: {
          EMT_UI: 'plain-html',
        },
      },
    ],
  };
};
