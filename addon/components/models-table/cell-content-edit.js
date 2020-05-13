import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/cell-content-edit';
import { set } from '@ember/object';

/**
 * Component for cells in the edit-mode.
 *
 * Properties and event-handlers from [models-table/cell](Components.ModelsTableCell.html) are bound here
 *
 * @namespace Components
 * @class ModelsTableCellContentEdit
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class CellContentEditComponent extends Component {

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

  init() {
    set(this, 'tagName', this.themeInstance.cellContentTagName);
    super.init(...arguments);
  }
}
