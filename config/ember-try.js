'use strict';
let command = ['ember', 'exam', '--split', '4', '--parallel', '--random'];
const pr = process.env.TRAVIS_PULL_REQUEST;

if (pr) {
  command.push(pr);
}

const getChannelURL = require('ember-source-channel-url');

module.exports = function() {
  return Promise.all([
    getChannelURL('release'),
    getChannelURL('beta'),
    getChannelURL('canary')
  ]).then((urls) => {
    return {
      command: command.join(' '),
      scenarios: [
        {
          name: 'ember-lts-2.8',
          env: {
            EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true }),
          },
          bower: {
            dependencies: {
              'ember': 'components/ember#lts-2-8'
            },
            resolutions: {
              'ember': 'lts-2-8'
            }
          },
          npm: {
            devDependencies: {
              '@ember/jquery': '^0.5.1',
              'ember-source': null
            }
          }
        },
        {
          name: 'ember-lts-2.12',
          env: {
            EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true }),
          },
          npm: {
            devDependencies: {
              '@ember/jquery': '^0.5.1',
              'ember-source': '~2.12.0'
            }
          }
        },
        {
          name: 'ember-lts-2.16',
          env: {
            EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true }),
          },
          npm: {
            devDependencies: {
              '@ember/jquery': '^0.5.1',
              'ember-source': '~2.16.0'
            }
          }
        },
        {
          name: 'ember-lts-2.18',
          env: {
            EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true }),
          },
          npm: {
            devDependencies: {
              '@ember/jquery': '^0.5.1',
              'ember-source': '~2.18.0'
            }
          }
        },
        {
          name: 'ember-release',
          npm: {
            devDependencies: {
              'ember-source': urls[0]
            }
          }
        },
        {
          name: 'ember-beta',
          npm: {
            devDependencies: {
              'ember-source': urls[1]
            }
          }
        },
        {
          name: 'ember-canary',
          npm: {
            devDependencies: {
              'ember-source': urls[2]
            }
          }
        },
        {
          name: 'ember-default',
          npm: {
            devDependencies: {}
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
              '@ember/jquery': '^0.5.1'
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
              'ember-bootstrap': '^2.3.0'
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
              'ember-bootstrap': '^2.3.0'
            }
          }
        },
        {
          name: 'ember-default-with-semantic-ui-ember',
          env: {
            EMT_UI: 'semantic-ui'
          },
          npm: {
            devDependencies: {
              'semantic-ui-ember': '^3.0.0'
            }
          }
        }
      ]
    };
  });
};
