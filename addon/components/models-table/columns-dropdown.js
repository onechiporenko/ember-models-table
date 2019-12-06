import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action} from '@ember/object';
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
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.ColumnsDropdown />
 *   {{! .... }}
 * </ModelsTable>
 *
 * @namespace Components
 * @class ModelsTableColumnsDropdown
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class ColumnsDropdownComponent extends Component {
  /**
   * Bound from {{#crossLink "Components.ModelsTable/processedColumns:property"}}ModelsTable.processedColumns{{/crossLink}}
   *
   * @type object[]
   * @default null
   */
  processedColumns = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/columnDropdownOptions:property"}}ModelsTable.columnDropdownOptions{{/crossLink}}
   *
   * @type object[]
   * @default null
   */
  columnDropdownOptions = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.showAllColumns:method"}}ModelsTable.actions.showAllColumns{{/crossLink}}
   *
   * @event showAllColumns
   */
  showAllColumns = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.hideAllColumns:method"}}ModelsTable.actions.hideAllColumns{{/crossLink}}
   *
   * @event hideAllColumns
   */
  hideAllColumns = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.restoreDefaultVisibility:method"}}ModelsTable.actions.restoreDefaultVisibility{{/crossLink}}
   *
   * @event restoreDefaultVisibility
   */
  restoreDefaultVisibility = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleColumnSet:method"}}ModelsTable.actions.toggleColumnSet{{/crossLink}}
   *
   * @event toggleColumnSet
   */
  toggleColumnSet = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleHidden:method"}}ModelsTable.actions.toggleHidden{{/crossLink}}
   *
   * @event toggleHidden
   */
  toggleHidden = null;


  @action
  doShowAllColumns() {
    this.showAllColumns();
  }

  @action
  doHideAllColumns() {
    this.hideAllColumns();
  }

  @action
  doRestoreDefaultVisibility() {
    this.restoreDefaultVisibility();
  }

  @action
  doToggleColumnSet(columnSet) {
    this.toggleColumnSet(columnSet);
  }

  @action
  doToggleHidden(column) {
    this.toggleHidden(column);
  }

}
