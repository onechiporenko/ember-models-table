import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/row-group-toggle';
import {action} from '@ember/object';

/**
 * Component is used to toggle rows group visibility
 *
 * Don't override this component. Use [groupingRowComponent](Components.ModelsTable.html#property_groupingRowComponent) (it may extend this one)
 *
 * @namespace Components
 * @class ModelsTableRowGroupToggle
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class RowGroupToggleComponent extends Component {

  /**
   * Determines if `stopPropagation` should be called for event-handlers in the current component
   *
   * @property stopEventsPropagation
   * @type boolean
   * @default true
   */
  stopEventsPropagation = true;

  /**
   * Bound from [groupIsCollapsed](Components.ModelsTableRowGrouping.html#property_groupIsCollapsed)
   *
   * @property groupIsCollapsed
   * @type boolean
   * @default null
   */
  groupIsCollapsed = null;

  /**
   * Bound from [groupedValue](Components.ModelsTableRowGrouping.html#property_groupedValue)
   *
   * @property groupedValue
   * @type *
   * @default null
   */
  groupedValue = null;

  /**
   * List of all rows group items
   *
   * If rows group is last on the page, not all it's items may be shown. Use `visibleGroupedItems` to get rows group items shown on the current table's page
   *
   * @property groupedItems
   * @type object[]
   * @default null
   */
  groupedItems = null;

  /**
   * List of rows group items shown on the current table page
   *
   * @property visibleGroupedItems
   * @type object[]
   * @default null
   */
  visibleGroupedItems = null;

  /**
   * List of selected rows group items
   *
   * @property selectedGroupedItems
   * @type object[]
   * @default null
   */
  selectedGroupedItems = null;

  /**
   * List of expanded rows group items
   *
   * @property expandedGroupedItems
   * @type object[]
   * @default null
   */
  expandedGroupedItems = null;

  /**
   * Bound from [ModelsTable.currentGroupingPropertyName](Components.ModelsTable.html#property_currentGroupingPropertyName)
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  currentGroupingPropertyName = null;

  /**
   * Bound from [ModelsTable.displayGroupedValueAs](Components.ModelsTable.html#property_displayGroupedValueAs)
   *
   * @property displayGroupedValueAs
   * @type string
   * @default null
   */
  displayGroupedValueAs = null;

  /**
   * Bound from [ModelsTable.visibleProcessedColumns](Components.ModelsTable.html#property_visibleProcessedColumns)
   *
   * @property visibleProcessedColumns
   * @type Utils.ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Closure action [ModelsTable.toggleGroupedRows](Components.ModelsTable.html#event_toggleGroupedRows)
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows = null;

  /**
   * Closure action [ModelsTable.toggleGroupedRowsSelection](Components.ModelsTable.html#event_toggleGroupedRowsSelection)
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection = null;

  /**
   * Closure action [ModelsTable.toggleGroupedRowsExpands](Components.ModelsTable.html#event_toggleGroupedRowsExpands)
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands = null;

  /**
   * Calls passed `toggleGroupedRows`
   *
   * @event toggleGroupedRows
   * @param {Event} e user-interaction event
   */
  @action
  doToggleGroupedRows(e) {
    this.toggleGroupedRows(this.groupedValue);
    if (e && this.stopEventsPropagation) {
      e.stopPropagation();
    }
  }

  /**
   * Calls passed `toggleGroupedRowsSelection`
   *
   * @event toggleGroupedRowsSelection
   * @param {Event} e user-interaction event
   */
  @action
  doToggleGroupedRowsSelection(e) {
    this.toggleGroupedRowsSelection(this.groupedValue);
    if (e && this.stopEventsPropagation) {
      e.stopPropagation();
    }
  }

  /**
   * Calls passed `toggleGroupedRowsExpands`
   *
   * @event toggleGroupedRowsExpands
   * @param {Event} e user-interaction event
   */
  @action
  doToggleGroupedRowsExpands(e) {
    this.toggleGroupedRowsExpands(this.groupedValue);
    if (e && this.stopEventsPropagation) {
      e.stopPropagation();
    }
  }
}
