import { set } from '@ember/object';
import { click, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';
import { resolve } from 'rsvp';

module(
  'Integration | Component | models table/cell edit toggle',
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.beforeEach(async function (assert) {
      this.setProperties({
        themeInstance: this.owner.lookup('service:fw').themeInstance,
        record: {},
        isEditRow: false,
        // methods provided by the grid
        editRow: () => {
          set(this, 'isEditRow', true);
          assert.ok(true, 'Edit Row Action was called');
        },
        cancelEditRow: () => {
          set(this, 'isEditRow', false);
          assert.ok(true, 'Cancel Edit Row Action was called');
        },
        saveRow: () => {
          set(this, 'isEditRow', false);
          assert.ok(true, 'Save Row Action was called');
        },
        // methods provided by user of component
        onSave: () => {
          assert.ok(true, 'onSave Action was called');
          return this.saveReturn;
        },
        onEdit: () => {
          assert.ok(true, 'onEdit Action was called');
          return this.editReturn;
        },
        onCancel: () => {
          assert.ok(true, 'onCancel Action was called');
          return this.cancelReturn;
        },
        // Test Properties
        editReturn: true,
        saveReturn: true,
        cancelReturn: true,
      });

      await render(hbs`<ModelsTable::Themes::Default::CellEditToggle
        @themeInstance={{this.themeInstance}}
        @record={{this.record}}
        @editRow={{this.editRow}}
        @cancelEditRow={{this.cancelEditRow}}
        @saveRow={{this.saveRow}}
        @isEditRow={{this.isEditRow}}
        @onSaveRow={{this.onSave}}
        @onEditRow={{this.onEdit}}
        @onCancelRow={{this.onCancel}}
      />`);
    });

    test('Enters / Exits Edit Mode correctly', async function (assert) {
      let buttons = this.element.querySelectorAll('button');
      assert.strictEqual(buttons.length, 1, 'Only Edit button is displayed');

      // Click the Edit button to enter Edit Mode
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.strictEqual(
        buttons.length,
        2,
        'Only Save Cancel buttons are displayed',
      );

      // Click the Cancel button to exit Edit Mode
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.strictEqual(buttons.length, 1, 'Cancel exited edit mode');

      // Click the Edit button to enter Edit Mode
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.strictEqual(
        buttons.length,
        2,
        'Only Save Cancel buttons are displayed',
      );

      // Click the Save button to exit Edit Mode
      await click(buttons[1]);

      buttons = this.element.querySelectorAll('button');
      assert.strictEqual(buttons.length, 1, 'Save exited edit mode');
    });

    test('Action only progress on truthy values', async function (assert) {
      let buttons = this.element.querySelectorAll('button');
      assert.strictEqual(buttons.length, 1, 'Only Edit button is displayed');

      // Click the Edit button to enter Edit Mode
      set(this, 'editReturn', false);
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.strictEqual(buttons.length, 1, 'Edit Button did not Progress');

      set(this, 'editReturn', true);
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.strictEqual(buttons.length, 2, 'Edit Button Progresses');

      set(this, 'cancelReturn', false);
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.strictEqual(buttons.length, 2, 'Cancel Button did not progress');

      // Click the Save button to exit Edit Mode
      set(this, 'saveReturn', false);
      await click(buttons[1]);

      buttons = this.element.querySelectorAll('button');
      assert.strictEqual(buttons.length, 2, 'Save Button did not progress');
    });

    test('Actions accept promises', async function (assert) {
      let buttons = this.element.querySelectorAll('button');
      assert.strictEqual(buttons.length, 1, 'Only Edit button is displayed');

      // Click the Edit button to enter Edit Mode
      set(this, 'editReturn', resolve(false));
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.strictEqual(buttons.length, 1, 'Edit Button did not Progress');

      set(this, 'editReturn', resolve(true));
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.strictEqual(buttons.length, 2, 'Edit Button Progresses');

      set(this, 'cancelReturn', resolve(false));
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.strictEqual(buttons.length, 2, 'Cancel Button did not progress');

      // Click the Save button to exit Edit Mode
      set(this, 'saveReturn', resolve(false));
      await click(buttons[1]);

      buttons = this.element.querySelectorAll('button');
      assert.strictEqual(buttons.length, 2, 'Save Button did not progress');
    });
  },
);
