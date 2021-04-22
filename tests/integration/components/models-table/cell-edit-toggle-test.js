import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { get, set } from '@ember/object';
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

        actions: {
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
            return get(this, 'saveReturn');
          },
          onEdit: () => {
            assert.ok(true, 'onEdit Action was called');
            return get(this, 'editReturn');
          },
          onCancel: () => {
            assert.ok(true, 'onCancel Action was called');
            return get(this, 'cancelReturn');
          },
        },

        // Test Properties
        editReturn: true,
        saveReturn: true,
        cancelReturn: true,
      });

      await render(hbs`<ModelsTable::CellEditToggle
      @themeInstance={{themeInstance}}
      @record={{record}}
      @editRow={{action "editRow"}}
      @cancelEditRow={{action "cancelEditRow"}}
      @saveRow={{action "saveRow"}}
      @isEditRow={{isEditRow}}
      @onSaveRow={{action "onSave"}}
      @onEditRow={{action "onEdit"}}
      @onCancelRow={{action "onCancel"}}
    />`);
    });

    test('Enters / Exits Edit Mode correctly', async function (assert) {
      assert.expect(13);

      let buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Only Edit button is displayed');

      // Click the Edit button to enter Edit Mode
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Only Save Cancel buttons are displayed');

      // Click the Cancel button to exit Edit Mode
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Cancel exited edit mode');

      // Click the Edit button to enter Edit Mode
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Only Save Cancel buttons are displayed');

      // Click the Save button to exit Edit Mode
      await click(buttons[1]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Save exited edit mode');
    });

    test('Action only progress on truthy values', async function (assert) {
      assert.expect(10);

      let buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Only Edit button is displayed');

      // Click the Edit button to enter Edit Mode
      set(this, 'editReturn', false);
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Edit Button did not Progress');

      set(this, 'editReturn', true);
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Edit Button Progresses');

      set(this, 'cancelReturn', false);
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Cancel Button did not progress');

      // Click the Save button to exit Edit Mode
      set(this, 'saveReturn', false);
      await click(buttons[1]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Save Button did not progress');
    });

    test('Action only progress on truthy values', async function (assert) {
      assert.expect(10);

      let buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Only Edit button is displayed');

      // Click the Edit button to enter Edit Mode
      set(this, 'editReturn', false);
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Edit Button did not Progress');

      set(this, 'editReturn', true);
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Edit Button Progresses');

      set(this, 'cancelReturn', false);
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Cancel Button did not progress');

      // Click the Save button to exit Edit Mode
      set(this, 'saveReturn', false);
      await click(buttons[1]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Save Button did not progress');
    });

    test('Actions accept promises', async function (assert) {
      assert.expect(10);

      let buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Only Edit button is displayed');

      // Click the Edit button to enter Edit Mode
      set(this, 'editReturn', resolve(false));
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 1, 'Edit Button did not Progress');

      set(this, 'editReturn', resolve(true));
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Edit Button Progresses');

      set(this, 'cancelReturn', resolve(false));
      await click(buttons[0]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Cancel Button did not progress');

      // Click the Save button to exit Edit Mode
      set(this, 'saveReturn', resolve(false));
      await click(buttons[1]);

      buttons = this.element.querySelectorAll('button');
      assert.equal(buttons.length, 2, 'Save Button did not progress');
    });
  }
);
