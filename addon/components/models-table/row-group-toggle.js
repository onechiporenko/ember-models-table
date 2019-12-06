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
   */
  stopEventsPropagation = true;

  /**
   * Bound from {{#crossLink "Components.ModelsTableRowGrouping/groupIsCollapsed:property"}}groupIsCollapsed{{/crossLink}}
   *
   * @default null
   */
  groupIsCollapsed = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTableRowGrouping/groupedValue:property"}}groupedValue{{/crossLink}}
   *
   * @type *
   * @default null
   */
  groupedValue = null;

  /**
   * List of all rows group items
   *
   * If rows group is last on the page, not all it's items may be shown. Use `visibleGroupedItems` to get rows group items shown on the current table's page
   *
   * @type object[]
   * @default null
   */
  groupedItems = null;

  /**
   * List of rows group items shown on the current table page
   *
   * @type object[]
   * @default null
   */
  visibleGroupedItems = null;

  /**
   * List of selected rows group items
   *
   * @type object[]
   * @default null
   */
  selectedGroupedItems = null;

  /**
   * List of expanded rows group items
   *
   * @type object[]
   * @default null
   */
  expandedGroupedItems = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentGroupingPropertyName:property"}}ModelsTable.currentGroupingPropertyName{{/crossLink}}
   *
   * @type string
   * @default null
   */
  currentGroupingPropertyName = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/displayGroupedValueAs:property"}}ModelsTable.displayGroupedValueAs{{/crossLink}}
   *
   * @type string
   * @default null
   */
  displayGroupedValueAs = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @type ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleGroupedRows:method"}}ModelsTable.actions.toggleGroupedRows{{/crossLink}}
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleGroupedRowsSelection:method"}}ModelsTable.actions.toggleGroupedRowsSelection{{/crossLink}}
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleGroupedRowsExpands:method"}}ModelsTable.actions.toggleGroupedRowsExpands{{/crossLink}}
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands = null;

  /**
   * Calls passed `toggleGroupedRows`
   *
   * @method actions.toggleGroupedRows
   * @param {Event} e user-interaction event
   * @returns {undefined}
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
   * @method actions.toggleGroupedRowsSelection
   * @param {Event} e user-interaction event
   * @returns {undefined}
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
   * @method actions.toggleGroupedRowsExpands
   * @param {Event} e user-interaction event
   * @returns {undefined}
   */
  @action
  doToggleGroupedRowsExpands(e) {
    this.toggleGroupedRowsExpands(this.groupedValue);
    if (e && this.stopEventsPropagation) {
      e.stopPropagation();
    }
  }
}
