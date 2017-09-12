import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import ModelsTableBs from '../../../pages/models-table-bs';
import { startMirage } from 'dummy/initializers/ember-cli-mirage';

import { generateColumns } from '../../../helpers/f';

const {numericNavigation} = ModelsTableBs;

moduleForComponent('models-table/pagination-numeric', 'Integration | Component | models table/pagination numeric', {
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

test('buttons are shown', function (assert) {
  this.render(hbs`
  {{#models-table data=data columns=columns as |mt|}}
    {{#mt.footer as |footer|}}
      {{footer.pagination-numeric}}
    {{/mt.footer}}
  {{/models-table}}`);
  assert.deepEqual(numericNavigation().mapBy('text'), ['1', '2', '...', '10']);
  numericNavigation(1).click();
  assert.deepEqual(numericNavigation().mapBy('text'), ['1', '2', '3', '...', '10']);
});

test('buttons are shown (2)', function (assert) {
  this.render(hbs`
  {{#models-table data=data columns=columns as |mt|}}
    {{#mt.footer as |footer|}}
      {{#footer.pagination-numeric as |pn|}}
        {{#each pn.visiblePageNumbers as |page|}}
          {{#if page.isLink}}
            <button type="button" class="{{if page.isActive "active"}}"
            {{action pn.gotoCustomPage page.label}}>{{page.label}}</button>
          {{else}}
            <button disabled="disabled" type="button" 
              {{action pn.gotoCustomPage page.label}}>{{page.label}}</button>
          {{/if}}
        {{/each}}
      {{/footer.pagination-numeric}}
    {{/mt.footer}}
  {{/models-table}}`);
  assert.deepEqual(numericNavigation().mapBy('text'), ['1', '2', '...', '10']);
  numericNavigation(1).click();
  assert.deepEqual(numericNavigation().mapBy('text'), ['1', '2', '3', '...', '10']);
});
