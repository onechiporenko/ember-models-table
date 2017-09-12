import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import ModelsTableBs from '../../../pages/models-table-bs';
import { startMirage } from 'dummy/initializers/ember-cli-mirage';

import { generateColumns } from '../../../helpers/f';

const {navigation, filters} = ModelsTableBs;

moduleForComponent('models-table/summary', 'Integration | Component | models table/summary', {
  integration: true,
  beforeEach() {
    ModelsTableBs.setContext(this);
    this.server = startMirage();
    this.server.createList('user', 100);
    this.setProperties({
      data: this.server.db.users,
      columns: generateColumns(['index'])
    });
  },
  afterEach() {
    this.server.shutdown();
    ModelsTableBs.removeContext();
  }
});

test('summary-message is shown', function (assert) {
  this.render(hbs`
  {{#models-table data=data columns=columns as |mt|}}
    {{mt.table}}
    {{#mt.footer as |footer|}}
      {{footer.summary}}
      {{footer.pagination-simple}}
    {{/mt.footer}}
  {{/models-table}}`);

  assert.equal(ModelsTableBs.summary, 'Show 1 - 10 of 100');
  this.set('data', this.server.db.users.slice(0, 50));
  navigation.goToNextPage();
  assert.equal(ModelsTableBs.summary, 'Show 11 - 20 of 50');
});

test('summary-message is shown (2)', function (assert) {
  this.render(hbs`
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
  navigation.goToNextPage();
  assert.equal(ModelsTableBs.summary, 'Show 11 - 20 of 50');
});

test('summary-message is shown (3)', function (assert) {
  this.render(hbs`
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
  navigation.goToNextPage();
  assert.equal(ModelsTableBs.summary, '11:20/50');
});

test('clear-filters button is accessible', function (assert) {
  this.render(hbs`
  {{#models-table data=data columns=columns as |mt|}}
    {{mt.table}}
    {{#mt.footer as |footer|}}
      {{footer.summary}}
    {{/mt.footer}}
  {{/models-table}}`);

  assert.notOk(ModelsTableBs.clearAllFiltersVisible);
  filters(0).inputFilter('1');
  assert.ok(ModelsTableBs.clearAllFiltersVisible);
  ModelsTableBs.clearAllFilters();
  assert.notOk(ModelsTableBs.clearAllFiltersVisible);
});

test('clear-filters button is accessible (2)', function (assert) {
  this.render(hbs`
  {{#models-table data=data columns=columns as |mt|}}
    {{mt.table}}
    {{#mt.footer as |footer|}}
      {{#footer.summary as |s|}}
        <a href="#" {{action s.clearFilters}} class="clearFilters {{unless s.anyFilterUsed "invisible"}}"></a>
      {{/footer.summary}}
      {{footer.pagination-simple}}
    {{/mt.footer}}
  {{/models-table}}`);

  assert.notOk(ModelsTableBs.clearAllFiltersVisible);
  filters(0).inputFilter('1');
  assert.ok(ModelsTableBs.clearAllFiltersVisible);
  ModelsTableBs.clearAllFilters();
  assert.notOk(ModelsTableBs.clearAllFiltersVisible);
});