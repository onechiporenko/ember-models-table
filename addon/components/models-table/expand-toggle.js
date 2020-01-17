import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action} from '@ember/object';
import layout from '../../templates/components/models-table/expand-toggle';

/**
 * Component to expand or collapse any single row
 *
 * Usage example:
 *
 * ```js
 * const columns = [
 *   {
 *     component: 'models-table/expand-toggle',
 *     mayBeHidden: false
 *   },
 *   {propertyName: 'firstName'},
 *   {propertyName: 'lastName'}
 * ];
 *
 * const data = [ ... ];
 * ```
 *
 * ```hbs
 * <ModelsTable
 *   @data={{data}}
 *   @columns={{columns}}
 *   @expandedRowComponent={{component "path/to/your-component"}}
 * />
 * ```
 *
 * @class ModelsTableExpandToggle
 * @extends Ember.Component
 * @namespace Components
 */
export default
@templateLayout(layout)
class ExpandToggleComponent extends Component {

  /**
   * One of the [data](Components.ModelsTable.html#property_data)
   *
   * @default null
   * @property record
   * @type object
   */
  record = null;

  /**
   * Row's index where current cell is
   *
   * @property index
   * @default null
   * @type number
   */
  index = null;

  /**
   * @property column
   * @default null
   * @type Utils.ModelsTableColumn
   */
  column = null;

  /**
   * @property isEditRow
   * @default null
   * @protected
   * @type boolean
   */
  isEditRow = null;

  /**
   * @property groupedLength
   * @type number
   * @default null
   */
  groupedLength = null;

  /**
   * Closure action [ModelsTable.expandRow](Components.ModelsTable.html#event_expandRow)
   *
   * @event expandRow
   */
  expandRow = null;

  /**
   * Closure action [ModelsTable.collapseRow](Components.ModelsTable.html#event_collapseRow)
   *
   * @event collapseRow
   */
  collapseRow = null;

  /**
   * Closure action [ModelsTable.expandAllRows](Components.ModelsTable.html#event_expandAllRows)
   *
   * @event expandAllRows
   */
  expandAllRows = null;

  /**
   * Closure action [ModelsTable.collapseAllRows](Components.ModelsTable.html#event_collapseAllRows)
   *
   * @event collapseAllRows
   */
  collapseAllRows = null;

  /**
   * Closure action [ModelsTableRow.editRow](Components.ModelsTableRow.html#event_editRow)
   *
   * @event editRow
   */
  editRow = null;

  /**
   * Closure action [ModelsTableRow.saveRow](Components.ModelsTableRow.html#event_saveRow)
   *
   * @event saveRow
   */
  saveRow = null;

  /**
   * Closure action [ModelsTableRow.cancelEditRow](Components.ModelsTableRow.html#event_cancelEditRow)
   *
   * @event cancelEditRow
   */
  cancelEditRow = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Is current row expanded or not
   *
   * @default null
   * @property isExpanded
   * @type boolean
   */
  isExpanded = null;

  /**
   * Is current row selected or not
   *
   * @default null
   * @property isSelected
   * @type boolean
   */
  isSelected = null;

  /**
   * @property isColumnEditable
   * @type boolean
   * @default false
   */
  isColumnEditable = false;

  /**
   * @event doCollapseRow
   * @param {number} index
   * @param {object} record
   * @protected
   */
  @action
  doCollapseRow(index, record) {
    this.collapseRow(index, record);
    return false;
  }

  /**
   * @event doExpandRow
   * @param {number} index
   * @param {object} record
   * @protected
   */
  @action
  doExpandRow(index, record) {
    this.expandRow(index, record);
    return false;
  }
}
