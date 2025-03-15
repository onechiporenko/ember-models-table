import { setApplication } from '@ember/test-helpers';
import Application from 'dummy/app';
import config from 'dummy/config/environment';
import {
  setRunOptions,
  setupGlobalA11yHooks,
} from 'ember-a11y-testing/test-support';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import { loadTests } from 'ember-qunit/test-loader';
import { start, setupEmberOnerrorValidation } from 'ember-qunit';

setApplication(Application.create(config.APP));
setupGlobalA11yHooks(() => true);

setRunOptions({
  rules: {
    'aria-allowed-role': {
      enabled: false,
    },
  },
});

setup(QUnit.assert);
setupEmberOnerrorValidation();
loadTests();
start();
