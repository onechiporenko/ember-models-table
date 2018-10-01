import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import ModelsTableBs from '../../../pages/models-table-bs';
import {startMirage} from 'dummy/initializers/ember-cli-mirage';

import {generateColumns} from '../../../helpers/f';

const {sorting, columnsDropDown} = ModelsTableBs;

module('Integration | Component | models table/columns dropdown', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    ModelsTableBs.setContext(this);
    this.server = startMirage();
    this.server.createList('user', 100);
    this.setProperties({
      data: this.server.db.users,
      columns: generateColumns(['index', 'firstName', 'lastName']),
      columnSets: [
        {
          label: 'Name',
          showColumns: ['firstName', 'lastName']
        }
      ]
    });
  });

  hooks.afterEach(function() {
    this.server.shutdown();
    ModelsTableBs.removeContext();
  });

  test('dropdown is shown', async function(assert) {
    await render(hbs`
    {{#models-table data=data columns=columns columnSets=columnSets as |mt|}}
      {{#mt.columns-dropdown as |cd|}}
        <ul class="columns-dropdown">
          <li><a {{action cd.showAllColumns}} href="#"></a></li>
          <li><a {{action cd.hideAllColumns}} href="#"></a></li>
          <li><a {{action cd.restoreDefaultVisibility}} href="#"></a></li>
          {{#each cd.columnDropdownOptions.columnSets as |columnSet|}}
            <li><a {{action cd.toggleColumnSet columnSet}} href="#">{{columnSet.label}}</a></li>
          {{/each}}
          {{#each cd.processedColumns as |column|}}
            {{#if column.mayBeHidden}}
              <li><a {{action cd.toggleHidden column}} href="#"><span class="{{if column.isVisible cd.themeInstance.column-visible cd.themeInstance.column-hidden}}"></span> {{column.title}}</a></li>
            {{/if}}
          {{/each}}
        </ul>
      {{/mt.columns-dropdown}}
      {{mt.table}}
    {{/models-table}}`);
    assert.deepEqual(sorting.mapBy('text'), ['index', 'firstName', 'lastName'], 'all columns are shown');
    await columnsDropDown.objectAt(1).click(); // hide all
    assert.equal(sorting.length, 0, 'all columns are hidden');
    await columnsDropDown.objectAt(3).click(); // columns set
    assert.deepEqual(sorting.mapBy('text'), ['firstName', 'lastName'], 'firstName, lastName are shown');
    await columnsDropDown.objectAt(5).click(); // firstName
    assert.deepEqual(sorting.mapBy('text'), ['lastName'], 'lastName is shown');
    await columnsDropDown.objectAt(2).click(); // restore
    assert.deepEqual(sorting.mapBy('text'), ['index', 'firstName', 'lastName'], 'all columns are shown');
  });
});