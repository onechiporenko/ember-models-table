import {set} from '@ember/object';
import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

module('Unit | Component | models-table-server-paginated', function (hooks) {
  setupTest(hooks);

  test('#filteringIgnoreCase cannot be used', async function (assert) {
    const component = this.owner.lookup('component:models-table-server-paginated');
    assert.expectAssertion(() => set(component, 'filteringIgnoreCase', true),
      '"filteringIgnoreCase" can\'t be used with "models-table-server-paginated"');
  });

  test('#doFilteringByHiddenColumns cannot be used', async function (assert) {
    const component = this.owner.lookup('component:models-table-server-paginated');
    assert.expectAssertion(() => set(component, 'doFilteringByHiddenColumns', true),
      '"doFilteringByHiddenColumns" can\'t be used with "models-table-server-paginated"');
  });
});