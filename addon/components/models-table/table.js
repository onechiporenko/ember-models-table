import {className, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, computed, get} from '@ember/object';
import {alias} from '@ember/object/computed';
import {A} from '@ember/array';
import layout from '../../templates/components/models-table/table';

/**
 * Table with data used within [models-table](Components.ModelsTable.html).
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table />
 *   {{! ... }}
 * </ModelsTable>
 * ```
 *
 * Usage example with a block context:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header />
 *     <Table.Body />
 *     <Table.Footer />
 *   </MT.Table>
 * </ModelsTable>
 * ```
 *
 * ModelsTableTable yields references to the following contextual components:
 *
 * * [models-table/table-header](Components.ModelsTableTableHeader.html) - table header. Component contains several rows like grouped headers, row with sorting buttons (usually with column titles) and row with filters for each column
 * * [models-table/table-body](Components.ModelsTableTableBody.html) - table body with data. Component contains current page with a subset or rows
 * * [models-table/table-footer](Components.ModelsTableTableFooter.html) - table footer. It's empty by default
 *
 * Check own docs for each component to get detailed info.
 *
 * @namespace Components
 * @class ModelsTableTable
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@tagName('table')
class TableComponent extends Component {

  @className
  @alias('themeInstance.table') themeTableClass;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/noHeaderFilteringAndSorting:property"}}ModelsTable.noHeaderFilteringAndSorting{{/crossLink}}
   *
   * @property noHeaderFilteringAndSorting
   * @type boolean
   * @default null
   */
  noHeaderFilteringAndSorting = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupedHeaders:property"}}ModelsTable.groupedHeaders{{/crossLink}}
   *
   * @property groupedHeaders
   * @type groupedHeader[][]
   * @default null
   */
  groupedHeaders = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/processedColumns:property"}}ModelsTable.processedColumns{{/crossLink}}
   *
   * @property processedColumns
   * @type object[]
   * @default null
   */
  processedColumns = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sort:method"}}ModelsTable.actions.sort{{/crossLink}}
   *
   * @event sort
   */
  sort = null;

  /**
   * @property columnsCount
   * @type number
   * @default null
   */
  @alias('processedColumns.length') columnsCount;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleContent:property"}}ModelsTable.visibleContent{{/crossLink}}
   *
   * @property visibleContent
   * @type object[]
   * @default null
   */
  visibleContent = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/selectedItems:property"}}ModelsTable.selectedItems{{/crossLink}}
   *
   * @property selectedItems
   * @type object[]
   * @default null
   */
  selectedItems = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/expandedItems:property"}}ModelsTable.expandedItems{{/crossLink}}
   *
   * @property expandedItems
   * @type number[]
   * @default null
   */
  expandedItems = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @property visibleProcessedColumns
   * @type object[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/allColumnsAreHidden:property"}}ModelsTable.allColumnsAreHidden{{/crossLink}}
   *
   * @property allColumnsAreHidden
   * @type boolean
   * @default null
   */
  allColumnsAreHidden = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/data:property"}}ModelsTable.data{{/crossLink}}
   *
   * @property data
   * @type object[]
   * @default null
   */
  data = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/useFilteringByColumns:property"}}ModelsTable.useFilteringByColumns{{/crossLink}}
   *
   * @property useFilteringByColumns
   * @type boolean
   * @default null
   */
  useFilteringByColumns = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupingRowComponent:property"}}ModelsTable.groupingRowComponent{{/crossLink}}
   *
   * @property groupingRowComponent
   * @type object
   * @default null
   */
  groupingRowComponent = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupSummaryRowComponent:property"}}ModelsTable.groupSummaryRowComponent{{/crossLink}}
   *
   * @property groupSummaryRowComponent
   * @type object
   * @default null
   */
  groupSummaryRowComponent = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/displayGroupedValueAs:property"}}ModelsTable.displayGroupedValueAs{{/crossLink}}
   *
   * @property displayGroupedValueAs
   * @type string
   * @default null
   */
  displayGroupedValueAs = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentGroupingPropertyName:property"}}ModelsTable.currentGroupingPropertyName{{/crossLink}}
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  currentGroupingPropertyName = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/_collapsedGroupValues:property"}}ModelsTable._collapsedGroupValues{{/crossLink}}
   *
   * @property collapsedGroupValues
   * @type array
   * @default null
   */
  collapsedGroupValues = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/dataGroupOptions:property"}}ModelsTable.dataGroupOptions{{/crossLink}}
   *
   * @property dataGroupOptions
   * @type object[]
   * @default null
   */
  dataGroupOptions = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupedVisibleContentValuesOrder:property"}}ModelsTable.groupedVisibleContentValuesOrder{{/crossLink}}
   *
   * @property groupedVisibleContentValuesOrder
   * @type array
   * @default null
   */
  groupedVisibleContentValuesOrder = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupedVisibleContent:property"}}ModelsTable.groupedVisibleContent{{/crossLink}}
   *
   * @property groupedVisibleContent
   * @type {}
   * @default null
   */
  groupedVisibleContent = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupedArrangedContent:property"}}ModelsTable.groupedArrangedContent{{/crossLink}}
   *
   * @property groupedArrangedContent
   * @type object[]
   * @default null
   */
  groupedArrangedContent = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/useDataGrouping:property"}}ModelsTable.useDataGrouping{{/crossLink}}
   *
   * @property useDataGrouping
   * @type boolean
   * @default null
   */
  useDataGrouping = null;

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
   * Closure action {{#crossLink "Components.ModelsTable/actions.clickOnRow:method"}}ModelsTable.actions.clickOnRow{{/crossLink}}
   *
   * @event clickOnRow
   */
  clickOnRow = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.doubleClickOnRow:method"}}ModelsTable.actions.doubleClickOnRow{{/crossLink}}
   *
   * @event doubleClickOnRow
   */
  doubleClickOnRow = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.hoverOnRow:method"}}ModelsTable.actions.hoverOnRow{{/crossLink}}
   *
   * @event hoverOnRow
   */
  hoverOnRow = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.outRow:method"}}ModelsTable.actions.outRow{{/crossLink}}
   *
   * @event outRow
   */
  outRow = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupHeaderCellComponent:property"}}ModelsTable.groupHeaderCellComponent{{/crossLink}}
   *
   * @property groupHeaderCellComponent
   * @type object
   * @default null
   */
  groupHeaderCellComponent = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.expandRow:method"}}ModelsTable.actions.expandRow{{/crossLink}}
   *
   * @event expandRow
   */
  expandRow = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.collapseRow:method"}}ModelsTable.actions.collapseRow{{/crossLink}}
   *
   * @event collapseRow
   */
  collapseRow = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.expandAllRows:method"}}ModelsTable.actions.expandAllRows{{/crossLink}}
   *
   * @event expandAllRows
   */
  expandAllRows = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.collapseAllRows:method"}}ModelsTable.actions.collapseAllRows{{/crossLink}}
   *
   * @event collapseAllRows
   */
  collapseAllRows = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleAllSelection:method"}}ModelsTable.actions.toggleAllSelection{{/crossLink}}
   *
   * @event toggleAllSelection
   */
  toggleAllSelection = null;

  /**
   * @property showTableFooter
   * @type boolean
   * @default false
   * @readonly
   */
  @computed('visibleProcessedColumns.@each.componentForFooterCell')
  get showTableFooter() {
    return A(get(this, 'visibleProcessedColumns')).isAny('componentForFooterCell');
  }

  @action
  doSort(column) {
    get(this, 'sort')(column);
  }

  @action
  doClickOnRow(index, row) {
    get(this, 'clickOnRow')(index, row);
  }
}
