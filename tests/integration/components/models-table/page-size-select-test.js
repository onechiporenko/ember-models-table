import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { startMirage } from 'dummy/initializers/ember-cli-mirage';

import { generateColumns } from '../../../helpers/f';
import getPageObject from '../../../helpers/get-page-object';

module('Integration | Component | models table/page size select', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.ModelsTablePageObject = getPageObject(this);
    this.server = startMirage();
    this.server.createList('user', 100);
    this.setProperties({
      data: this.server.db.users,
      columns: generateColumns(['index'])
    });
  });

  hooks.afterEach(function() {
    this.server.shutdown();
  });

  test('dropdown is shown', async function(assert) {
    await render(hbs`
    {{#models-table data=data columns=columns as |mt|}}
      {{mt.table}}
      {{#mt.footer as |footer|}}
        {{footer.size-select}}
      {{/mt.footer}}
    {{/models-table}}`);

    assert.equal(this.ModelsTablePageObject.pageSize, '10');
    await this.ModelsTablePageObject.changePageSize(25);
    assert.equal(this.ModelsTablePageObject.rows.length, 25);
    this.set('data', this.server.db.users.slice(0, 15));
    assert.equal(this.ModelsTablePageObject.pageSize, '25');
    assert.equal(this.ModelsTablePageObject.rows.length, 15);
  });

  test('dropdown is shown (2)', async function(assert) {
    await render(hbs`
    {{#models-table data=data columns=columns as |mt|}}
      {{mt.table}}
      {{#mt.footer as |footer|}}
        {{#footer.size-select as |s|}}
          {{s.select}}
        {{/footer.size-select}}
      {{/mt.footer}}
    {{/models-table}}`);

    assert.equal(this.ModelsTablePageObject.pageSize, '10');
    await this.ModelsTablePageObject.changePageSize(25);
    assert.equal(this.ModelsTablePageObject.rows.length, 25);
    this.set('data', this.server.db.users.slice(0, 15));
    assert.equal(this.ModelsTablePageObject.pageSize, '25');
    assert.equal(this.ModelsTablePageObject.rows.length, 15);
  });
});
