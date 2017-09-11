import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import ModelsTableBs from '../../../pages/models-table-bs';
import {startMirage} from 'dummy/initializers/ember-cli-mirage';

import {generateColumns} from '../../../helpers/f';

const {rows} = ModelsTableBs;

moduleForComponent('models-table/page-size-select', 'Integration | Component | models table/page size select', {
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

test('dropdown is shown', function (assert) {
  this.render(hbs`
  {{#models-table data=data columns=columns as |mt|}}
    {{mt.table}}
    {{#mt.footer as |footer|}}
      {{footer.size-select}}
    {{/mt.footer}}
  {{/models-table}}`);

  assert.equal(ModelsTableBs.pageSize, '10');
  ModelsTableBs.changePageSize(25);
  assert.equal(rows().count, 25);
  this.set('data', this.server.db.users.slice(0, 15));
  assert.equal(ModelsTableBs.pageSize, '25');
  assert.equal(rows().count, 15);
});

test('dropdown is shown (2)', function (assert) {
  this.render(hbs`
  {{#models-table data=data columns=columns as |mt|}}
    {{mt.table}}
    {{#mt.footer as |footer|}}
      {{#footer.size-select as |s|}}
        {{s.select}}
      {{/footer.size-select}}
    {{/mt.footer}}
  {{/models-table}}`);

  assert.equal(ModelsTableBs.pageSize, '10');
  ModelsTableBs.changePageSize(25);
  assert.equal(rows().count, 25);
  this.set('data', this.server.db.users.slice(0, 15));
  assert.equal(ModelsTableBs.pageSize, '25');
  assert.equal(rows().count, 15);
});

test('dropdown is shown (3)', function (assert) {
  this.render(hbs`
  {{#models-table data=data columns=columns as |mt|}}
    {{mt.table}}
    {{#mt.footer as |footer|}}
      {{#footer.size-select as |s|}}
        {{models-table/select
          options=s.pageSizeOptions
          value=s.pageSize
          themeInstance=s.themeInstance
          sendAction=s.sendAction
          class="changePageSize"
        }}
      {{/footer.size-select}}
    {{/mt.footer}}
  {{/models-table}}`);

  assert.equal(ModelsTableBs.pageSize, '10');
  ModelsTableBs.changePageSize('25');
  assert.equal(rows().count, 25);
  this.set('data', this.server.db.users.slice(0, 15));
  assert.equal(ModelsTableBs.pageSize, '25');
  assert.equal(rows().count, 15);
});