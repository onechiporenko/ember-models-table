import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import ModelsTableBs from '../../../pages/models-table-bs';
import { startMirage } from 'dummy/initializers/ember-cli-mirage';

import { generateColumns } from '../../../helpers/f';

const {navigation} = ModelsTableBs;

module('Integration | Component | models table/pagination simple', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    ModelsTableBs.setContext(this);
    this.server = startMirage();
    this.server.createList('user', 100);
    this.setProperties({
      data: this.server.db.users,
      columns: generateColumns(['index'])
    });
  });

  hooks.afterEach(function() {
    this.server.shutdown();
    ModelsTableBs.removeContext();
  });

  function check(assert) {
    assert.ok(navigation.goToFirstPageDisabled);
    assert.ok(navigation.goToPrevPageDisabled);
    assert.notOk(navigation.goToNextPageDisabled);
    assert.notOk(navigation.goToLastPageDisabled);
    navigation.goToLastPage();
    assert.notOk(navigation.goToFirstPageDisabled);
    assert.notOk(navigation.goToPrevPageDisabled);
    assert.ok(navigation.goToNextPageDisabled);
    assert.ok(navigation.goToLastPageDisabled);
  }

  test('buttons are shown', async function(assert) {
    await render(hbs`
    {{#models-table data=data columns=columns as |mt|}}
      {{#mt.footer as |footer|}}
        {{footer.pagination-simple}}
      {{/mt.footer}}
    {{/models-table}}`);
    check(assert);
  });

  test('buttons are shown (2)', async function(assert) {
    await render(hbs`
    {{#models-table data=data columns=columns as |mt|}}
      {{#mt.footer as |footer|}}
        {{#footer.pagination-simple as |ps|}}
          <a href="#" {{action ps.gotoFirst}} class="{{if ps.gotoBackEnabled "enabled" "disabled"}}"></a>
          <a href="#" {{action ps.gotoPrev}} class="{{if ps.gotoBackEnabled "enabled" "disabled"}}"></a>
          <a href="#" {{action ps.gotoNext}} class="{{if ps.gotoForwardEnabled "enabled" "disabled"}}"></a>
          <a href="#" {{action ps.gotoLast}} class="{{if ps.gotoForwardEnabled "enabled" "disabled"}}"></a>
        {{/footer.pagination-simple}}
      {{/mt.footer}}
    {{/models-table}}`);
    check(assert);
  });
});