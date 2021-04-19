import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import ModelsTableBs from 'ember-models-table/test-support/pages/models-table-bs';
import { setupMirage } from 'ember-cli-mirage/test-support';

import { generateColumns } from '../../../helpers/f';

const { numericNavigation } = ModelsTableBs;

module(
  'Integration | Component | models table/pagination numeric',
  function (hooks) {
    setupRenderingTest(hooks);
    setupMirage(hooks);

    hooks.beforeEach(function () {
      this.server.createList('user', 100);
      this.setProperties({
        data: this.server.db.users,
        columns: generateColumns(['index']),
        themeInstance: this.owner.lookup('service:fw').themeInstance,
      });
    });

    hooks.afterEach(function () {
      this.server.shutdown();
    });

    test('buttons are shown', async function (assert) {
      await render(hbs`
    <ModelsTable @data={{data}} @columns={{columns}} @themeInstance={{themeInstance}} as |MT|>
      <MT.Footer as |Footer|>
        <Footer.PaginationNumeric />
      </MT.Footer>
    </ModelsTable>`);
      assert.deepEqual(numericNavigation.mapBy('text'), [
        '1',
        '2',
        '...',
        '10',
      ]);
      await numericNavigation.objectAt(1).click();
      assert.deepEqual(numericNavigation.mapBy('text'), [
        '1',
        '2',
        '3',
        '...',
        '10',
      ]);
    });

    test('buttons are shown (2)', async function (assert) {
      await render(hbs`
    <ModelsTable @data={{data}} @columns={{columns}} @themeInstance={{themeInstance}} as |MT|>
      <MT.Footer as |Footer|>
        <Footer.PaginationNumeric as |PN|>
          {{#each PN.visiblePageNumbers as |page|}}
            {{#if page.isLink}}
              <button type="button" class="{{if page.isActive "active"}}"
              {{action MT.goToPage page.label}}>{{page.label}}</button>
            {{else}}
              <button disabled="disabled" type="button">{{page.label}}</button>
            {{/if}}
          {{/each}}
        </Footer.PaginationNumeric>
      </MT.Footer>
    </ModelsTable>`);
      assert.deepEqual(numericNavigation.mapBy('text'), [
        '1',
        '2',
        '...',
        '10',
      ]);
      await numericNavigation.objectAt(1).click();
      assert.deepEqual(numericNavigation.mapBy('text'), [
        '1',
        '2',
        '3',
        '...',
        '10',
      ]);
    });
  }
);
