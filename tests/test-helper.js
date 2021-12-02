import Application from 'dummy/app';
import config from 'dummy/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import {
  setupGlobalA11yHooks,
  setRunOptions,
} from 'ember-a11y-testing/test-support';
import { start } from 'ember-qunit';

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

start();
