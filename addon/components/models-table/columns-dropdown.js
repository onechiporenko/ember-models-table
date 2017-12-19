import Component from '@ember/component';
import { get } from '@ember/object';
import layout from '../../templates/components/models-table/columns-dropdown';

/**
 * Dropdown with list of table's columns used within [models-table](Components.ModelsTable.html).
 *
 * It allows to toggle visibility for column sets or single column.
 *
 * Columns that should not be hidden must have property `canBeHidden` set to `false`.
 *
 * Usage example:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{mt.columns-dropdown}}
 *   {{! .... }}
 * {{/models-table}}
 *
 * @namespace Components
 * @class ModelsTableColumnsDropdown
 * @extends Ember.Component
 */
export default Component.extend({
  layout,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/processedColumns:property"}}ModelsTable.processedColumns{{/crossLink}}
   *
   * @property processedColumns
   * @type object[]
   * @default null
   */
  processedColumns: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/columnDropdownOptions:property"}}ModelsTable.columnDropdownOptions{{/crossLink}}
   *
   * @property columnDropdownOptions
   * @type object[]
   * @default null
   */
  columnDropdownOptions: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.showAllColumns:method"}}ModelsTable.actions.showAllColumns{{/crossLink}}
   *
   * @event showAllColumns
   */
  showAllColumns: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.hideAllColumns:method"}}ModelsTable.actions.hideAllColumns{{/crossLink}}
   *
   * @event hideAllColumns
   */
  hideAllColumns: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.restoreDefaultVisibility:method"}}ModelsTable.actions.restoreDefaultVisibility{{/crossLink}}
   *
   * @event restoreDefaultVisibility
   */
  restoreDefaultVisibility: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleColumnSet:method"}}ModelsTable.actions.toggleColumnSet{{/crossLink}}
   *
   * @event toggleColumnSet
   */
  toggleColumnSet: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleHidden:method"}}ModelsTable.actions.toggleHidden{{/crossLink}}
   *
   * @event toggleHidden
   */
  toggleHidden: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sendAction:method"}}ModelsTable.actions.sendAction{{/crossLink}}
   *
   * @event sendAction
   */
  sendAction: null,

  actions: {
    showAllColumns() {
      get(this, 'showAllColumns')();
    },
    hideAllColumns() {
      get(this, 'hideAllColumns')();
    },
    restoreDefaultVisibility() {
      get(this, 'restoreDefaultVisibility')();
    },
    toggleColumnSet(columnSet) {
      get(this, 'toggleColumnSet')(columnSet);
    },
    toggleHidden(column) {
      get(this, 'toggleHidden')(column);
    }
  }
});
