import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { get, set } from '@ember/object';
import { resolve } from 'rsvp';


moduleForComponent('models-table/cell-edit-toggle', 'Integration | Component | models table/cell edit toggle', {
  integration: true,
  beforeEach(assert) {
    this.setProperties({
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
        }
      },

      // Test Properties
      editReturn: true,
      saveReturn: true,
      cancelReturn: true
    });

    this.render(hbs`{{models-table/cell-edit-toggle
    record=record
    editRow=(action "editRow")
    cancelEditRow=(action "cancelEditRow")
    saveRow=(action "saveRow")
    isEditRow=isEditRow
    saveRowAction=(action "onSave")
    editRowAction=(action "onEdit")
    cancelRowAction=(action "onCancel")
    }}`);

  }
});

test('Enters / Exits Edit Mode correctly', function(assert) {

  assert.expect(13);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  let buttons = this.$('button');
  assert.equal(buttons.length, 1, 'Only Edit button is displayed');

  // Click the Edit button to enter Edit Mode
  buttons.click();

  buttons = this.$('button');
  assert.equal(buttons.length, 2, 'Only Save Cancel buttons are displayed');

  // Click the Cancel button to exit Edit Mode
  buttons[0].click();

  buttons = this.$('button');
  assert.equal(buttons.length, 1, 'Cancel exited edit mode');

  // Click the Edit button to enter Edit Mode
  buttons.click();

  buttons = this.$('button');
  assert.equal(buttons.length, 2, 'Only Save Cancel buttons are displayed');

  // Click the Save button to exit Edit Mode
  buttons[1].click();

  buttons = this.$('button');
  assert.equal(buttons.length, 1, 'Save exited edit mode');

});

test('Action only progress on truthy values', function(assert) {

  assert.expect(10);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  let buttons = this.$('button');
  assert.equal(buttons.length, 1, 'Only Edit button is displayed');

  // Click the Edit button to enter Edit Mode
  set(this, 'editReturn', false);
  buttons.click();

  buttons = this.$('button');
  assert.equal(buttons.length, 1, 'Edit Button did not Progress');

  set(this, 'editReturn', true);
  buttons[0].click();

  buttons = this.$('button');
  assert.equal(buttons.length, 2, 'Edit Button Progresses');

  set(this, 'cancelReturn', false);
  buttons[0].click();

  buttons = this.$('button');
  assert.equal(buttons.length, 2, 'Cancel Button did not progress');

  // Click the Save button to exit Edit Mode
  set(this, 'saveReturn', false);
  buttons[1].click();

  buttons = this.$('button');
  assert.equal(buttons.length, 2, 'Save Button did not progress');

});

test('Action only progress on truthy values', function(assert) {

  assert.expect(10);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  let buttons = this.$('button');
  assert.equal(buttons.length, 1, 'Only Edit button is displayed');

  // Click the Edit button to enter Edit Mode
  set(this, 'editReturn', false);
  buttons.click();

  buttons = this.$('button');
  assert.equal(buttons.length, 1, 'Edit Button did not Progress');

  set(this, 'editReturn', true);
  buttons[0].click();

  buttons = this.$('button');
  assert.equal(buttons.length, 2, 'Edit Button Progresses');

  set(this, 'cancelReturn', false);
  buttons[0].click();

  buttons = this.$('button');
  assert.equal(buttons.length, 2, 'Cancel Button did not progress');

  // Click the Save button to exit Edit Mode
  set(this, 'saveReturn', false);
  buttons[1].click();

  buttons = this.$('button');
  assert.equal(buttons.length, 2, 'Save Button did not progress');

});

test('Actions accept promises', function(assert) {

  assert.expect(10);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  let buttons = this.$('button');
  assert.equal(buttons.length, 1, 'Only Edit button is displayed');

  // Click the Edit button to enter Edit Mode
  set(this, 'editReturn', resolve(false));
  buttons.click();

  buttons = this.$('button');
  assert.equal(buttons.length, 1, 'Edit Button did not Progress');

  set(this, 'editReturn', resolve(true));
  buttons[0].click();

  buttons = this.$('button');
  assert.equal(buttons.length, 2, 'Edit Button Progresses');

  set(this, 'cancelReturn', resolve(false));
  buttons[0].click();

  buttons = this.$('button');
  assert.equal(buttons.length, 2, 'Cancel Button did not progress');

  // Click the Save button to exit Edit Mode
  set(this, 'saveReturn', resolve(false));
  buttons[1].click();

  buttons = this.$('button');
  assert.equal(buttons.length, 2, 'Save Button did not progress');

});

