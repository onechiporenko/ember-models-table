'use strict';
let command = ['ember', 'exam', '--split=4', '--parallel', '--random'];
const pr = process.env.TRAVIS_PULL_REQUEST;

if (pr) {
  command.push(pr);
}

const getChannelURL = require('ember-source-channel-url');

module.exports = async function() {
  return {
    command: command.join(' '),
    scenarios: [
      {
        name: 'ember-lts-3.4',
        npm: {
          devDependencies: {
            'ember-native-class-polyfill': '^1.0.6',
            'ember-source': '~3.4.0'
          },
          dependencies: {
            'ember-composable-helpers': '^2.4.0'
          }
        }
      },
      {
        name: 'ember-lts-3.8',
        npm: {
          devDependencies: {
            'ember-source': '~3.8.0'
          },
          dependencies: {
            'ember-composable-helpers': '^2.4.0'
          }
        }
      },
      {
        name: 'ember-lts-3.12',
        npm: {
          devDependencies: {
            'ember-source': '~3.12.0'
          },
          dependencies: {
            'ember-composable-helpers': '^2.4.0'
          }
        }
      },
      {
        name: 'ember-lts-3.16',
        npm: {
          devDependencies: {
            'ember-source': '~3.16.0'
          }
        }
      },
      {
        name: 'ember-lts-3.20',
        npm: {
          devDependencies: {
            'ember-source': '~3.20.5'
          }
        }
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release')
          }
        }
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta')
          }
        }
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary')
          }
        }
      },
      {
        name: 'ember-default-with-jquery',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'jquery-integration': true
          })
        },
        npm: {
          devDependencies: {
            '@ember/jquery': '^1.1.0'
          }
        }
      },
      {
        name: 'ember-classic',
        env: {
          EMBER_OPTIONAL_FEATURES: JSON.stringify({
            'application-template-wrapper': true,
            'default-async-observers': false,
            'template-only-glimmer-components': false
          })
        },
        npm: {
          ember: {
            edition: 'classic'
          }
        }
      },
      {
        name: 'ember-default-with-ember-bootstrap-v3',
        env: {
          EMT_UI: 'bs3'
        },
        npm: {
          devDependencies: {
            'bootstrap-sass': '3.4.1',
            'bootstrap': '3.4.1',
            'ember-bootstrap': '^3.1.3'
          }
        }
      },
      {
        name: 'ember-default-with-ember-bootstrap-v4',
        env: {
          EMT_UI: 'bs4'
        },
        npm: {
          devDependencies: {
            'bootstrap-sass': '3.4.1',
            'bootstrap': '4.4.1',
            'ember-bootstrap': '^3.1.3'
          }
        }
      },
      {
        name: 'ember-default-with-ember-paper',
        env: {
          EMT_UI: 'paper'
        },
        npm: {
          devDependencies: {
            'ember-paper': '1.0.0-beta.26',
            'ember-href-to': '3.1.0',
            'ember-basic-dropdown': 'onechiporenko/ember-basic-dropdown#1.X'
          }
        }
      },
      {
        name: 'ember-default-with-plain-html',
        env: {
          EMT_UI: 'plain-html'
        }
      }
    ]
  };
};
