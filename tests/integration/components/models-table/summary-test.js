import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import ModelsTableBs from '../../../pages/models-table-bs';
import { startMirage } from 'dummy/initializers/ember-cli-mirage';

import { generateColumns } from '../../../helpers/f';

const {navigation, filters} = ModelsTableBs;

module('Integration | Component | models table/summary', function(hooks) {
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

  test('summary-message is shown', async function(assert) {
    await render(hbs`
    {{#models-table data=data columns=columns as |mt|}}
      {{mt.table}}
      {{#mt.footer as |footer|}}
        {{footer.summary}}
        {{footer.pagination-simple}}
      {{/mt.footer}}
    {{/models-table}}`);

    assert.equal(ModelsTableBs.summary, 'Show 1 - 10 of 100');
    this.set('data', this.server.db.users.slice(0, 50));
    await navigation.goToNextPage();
    assert.equal(ModelsTableBs.summary, 'Show 11 - 20 of 50');
  });

  test('summary-message is shown (2)', async function(assert) {
    await render(hbs`
    {{#models-table data=data columns=columns as |mt|}}
      {{mt.table}}
      {{#mt.footer as |footer|}}
        {{#footer.summary as |s|}}
          {{s.summary}}
        {{/footer.summary}}
        {{footer.pagination-simple}}
      {{/mt.footer}}
    {{/models-table}}`);

    assert.equal(ModelsTableBs.summary, 'Show 1 - 10 of 100');
    this.set('data', this.server.db.users.slice(0, 50));
    await navigation.goToNextPage();
    assert.equal(ModelsTableBs.summary, 'Show 11 - 20 of 50');
  });

  test('summary-message is shown (3)', async function(assert) {
    await render(hbs`
    {{#models-table data=data columns=columns as |mt|}}
      {{mt.table}}
      {{#mt.footer as |footer|}}
        {{#footer.summary as |s|}}
          {{s.firstIndex}}:{{s.lastIndex}}/{{s.recordsCount}}
        {{/footer.summary}}
        {{footer.pagination-simple}}
      {{/mt.footer}}
    {{/models-table}}`);

    assert.equal(ModelsTableBs.summary, '1:10/100');
    this.set('data', this.server.db.users.slice(0, 50));
    await navigation.goToNextPage();
    assert.equal(ModelsTableBs.summary, '11:20/50');
  });

  test('clear-filters button is accessible', async function(assert) {
    await render(hbs`
    {{#models-table data=data columns=columns as |mt|}}
      {{mt.table}}
      {{#mt.footer as |footer|}}
        {{footer.summary}}
      {{/mt.footer}}
    {{/models-table}}`);

    assert.notOk(ModelsTableBs.clearAllFiltersExists);
    await filters.objectAt(0).inputFilter('1');
    assert.ok(ModelsTableBs.clearAllFiltersExists);
    await ModelsTableBs.clearAllFilters();
    assert.notOk(ModelsTableBs.clearAllFiltersExists);
  });

  test('clear-filters button is accessible (2)', async function(assert) {
    await render(hbs`
    {{#models-table data=data columns=columns as |mt|}}
      {{mt.table}}
      {{#mt.footer as |footer|}}
        {{#footer.summary as |s|}}
          {{#if s.anyFilterUsed}}
            <a href="#" {{action s.clearFilters}} class="clearFilters"></a>
          {{/if}}
        {{/footer.summary}}
        {{footer.pagination-simple}}
      {{/mt.footer}}
    {{/models-table}}`);

    assert.notOk(ModelsTableBs.clearAllFiltersExists);
    await filters.objectAt(0).inputFilter('1');
    assert.ok(ModelsTableBs.clearAllFiltersExists);
    await ModelsTableBs.clearAllFilters();
    assert.notOk(ModelsTableBs.clearAllFiltersExists);
  });
});