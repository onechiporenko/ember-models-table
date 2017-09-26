import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import ModelsTableBs from '../../../pages/models-table-bs';
import { startMirage } from 'dummy/initializers/ember-cli-mirage';

import { generateColumns } from '../../../helpers/f';

const {navigation} = ModelsTableBs;

moduleForComponent('models-table/pagination-simple', 'Integration | Component | models table/pagination simple', {
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

test('buttons are shown', function (assert) {
  this.render(hbs`
  {{#models-table data=data columns=columns as |mt|}}
    {{#mt.footer as |footer|}}
      {{footer.pagination-simple}}
    {{/mt.footer}}
  {{/models-table}}`);
  check(assert);
});

test('buttons are shown (2)', function (assert) {
  this.render(hbs`
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