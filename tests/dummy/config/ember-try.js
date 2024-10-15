'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    usePnpm: true,
    scenarios: [
      {
        name: 'ember-lts-4.4',
        npm: {
          devDependencies: {
            'ember-source': '~4.4.0',
            'ember-resolver': '^11.0.1',
          },
        },
      },
      {
        name: 'ember-lts-4.8',
        npm: {
          devDependencies: {
            'ember-source': '~4.8.0',
            'ember-resolver': '^11.0.1',
          },
        },
      },
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-lts-5.4',
        npm: {
          devDependencies: {
            'ember-source': '~5.4.0',
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
      embroiderSafe(),
      embroiderOptimized(),
      {
        name: 'ember-default-with-plain-html',
        env: {
          EMT_UI: 'plain-html',
        },
      },
      {
        name: 'ember-beta-with-plain-html',
        env: {
          EMT_UI: 'plain-html',
        },
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
          },
        },
      },
      {
        name: 'ember-lts-4.4-with-plain-html',
        env: {
          EMT_UI: 'plain-html',
        },
        npm: {
          devDependencies: {
            'ember-source': '~4.4.0',
            'ember-resolver': '^11.0.1',
          },
        },
      },
      {
        name: 'ember-lts-4.8-with-plain-html',
        env: {
          EMT_UI: 'plain-html',
        },
        npm: {
          devDependencies: {
            'ember-source': '~4.8.0',
            'ember-resolver': '^11.0.1',
          },
        },
      },
      {
        name: 'ember-lts-4.12-with-plain-html',
        env: {
          EMT_UI: 'plain-html',
        },
        npm: {
          devDependencies: {
            'ember-source': '~4.12.0',
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
            'ember-bootstrap': '^5.0.0',
          },
        },
      },
      {
        name: 'ember-beta-with-ember-bootstrap-v4',
        env: {
          EMT_UI: 'bs4',
        },
        npm: {
          devDependencies: {
            'bootstrap-sass': '3.4.1',
            bootstrap: '4.4.1',
            'ember-bootstrap': '^5.0.0',
            'ember-source': await getChannelURL('beta'),
          },
        },
      },
      {
        name: 'ember-lts-4.4-with-ember-bootstrap-v4',
        env: {
          EMT_UI: 'bs4',
        },
        npm: {
          devDependencies: {
            'bootstrap-sass': '3.4.1',
            bootstrap: '4.4.1',
            'ember-bootstrap': '^5.0.0',
            'ember-source': '~4.4.0',
            'ember-resolver': '^11.0.1',
          },
        },
      },
      {
        name: 'ember-lts-4.8-with-ember-bootstrap-v4',
        env: {
          EMT_UI: 'bs4',
        },
        npm: {
          devDependencies: {
            'bootstrap-sass': '3.4.1',
            bootstrap: '4.4.1',
            'ember-bootstrap': '^5.0.0',
            'ember-source': '~4.8.0',
            'ember-resolver': '^11.0.1',
          },
        },
      },
      {
        name: 'ember-lts-4.12-with-ember-bootstrap-v4',
        env: {
          EMT_UI: 'bs4',
        },
        npm: {
          devDependencies: {
            'bootstrap-sass': '3.4.1',
            bootstrap: '4.4.1',
            'ember-bootstrap': '^5.0.0',
            'ember-source': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-default-with-ember-bootstrap-v5',
        env: {
          EMT_UI: 'bs5',
        },
        npm: {
          devDependencies: {
            'bootstrap-sass': '3.4.1',
            bootstrap: '5.1.3',
            'ember-bootstrap': '^5.0.0',
          },
        },
      },
      {
        name: 'ember-lts-4.4-with-ember-bootstrap-v5',
        env: {
          EMT_UI: 'bs5',
        },
        npm: {
          devDependencies: {
            'bootstrap-sass': '3.4.1',
            bootstrap: '5.1.3',
            'ember-bootstrap': '^5.0.0',
            'ember-source': '~4.4.0',
            'ember-resolver': '^11.0.1',
          },
        },
      },
      {
        name: 'ember-lts-4.8-with-ember-bootstrap-v5',
        env: {
          EMT_UI: 'bs5',
        },
        npm: {
          devDependencies: {
            'bootstrap-sass': '3.4.1',
            bootstrap: '5.1.3',
            'ember-bootstrap': '^5.0.0',
            'ember-source': '~4.8.0',
            'ember-resolver': '^11.0.1',
          },
        },
      },
      {
        name: 'ember-lts-4.12-with-ember-bootstrap-v5',
        env: {
          EMT_UI: 'bs5',
        },
        npm: {
          devDependencies: {
            'bootstrap-sass': '3.4.1',
            bootstrap: '5.1.3',
            'ember-bootstrap': '^5.0.0',
            'ember-source': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-beta-with-ember-bootstrap-v5',
        env: {
          EMT_UI: 'bs5',
        },
        npm: {
          devDependencies: {
            'bootstrap-sass': '3.4.1',
            bootstrap: '5.1.3',
            'ember-bootstrap': '^5.0.0',
            'ember-source': await getChannelURL('beta'),
          },
        },
      },
    ],
  };
};
