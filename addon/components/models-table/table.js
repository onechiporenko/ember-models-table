import {className, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, computed} from '@ember/object';
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

  /**
   * @property themeTableClass
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.table') themeTableClass;

  /**
   * Bound from [ModelsTable.noHeaderFilteringAndSorting](Components.ModelsTable.html#property_noHeaderFilteringAndSorting)
   *
   * @property noHeaderFilteringAndSorting
   * @type boolean
   * @default null
   */
  noHeaderFilteringAndSorting = null;

  /**
   * Bound from [ModelsTable.groupedHeaders](Components.ModelsTable.html#property_groupedHeaders)
   *
   * @property groupedHeaders
   * @type GroupedHeader[][]
   * @default null
   */
  groupedHeaders = null;

  /**
   * Bound from [ModelsTable.processedColumns](Components.ModelsTable.html#property_processedColumns)
   *
   * @property processedColumns
   * @type Utils.ModelsTableColumn[]
   * @default null
   */
  processedColumns = null;

  /**
   * Closure action [ModelsTable.sort](Components.ModelsTable.html#event_sort)
   *
   * @event sort
   */
  sort = null;

  /**
   * @property columnsCount
   * @type number
   * @default 0
   * @protected
   */
  @alias('processedColumns.length') columnsCount;

  /**
   * Bound from [ModelsTable.visibleContent](Components.ModelsTable.html#property_visibleContent)
   *
   * @property visibleContent
   * @type object[]
   * @default null
   */
  visibleContent = null;

  /**
   * Bound from [ModelsTable.selectedItems](Components.ModelsTable.html#property_selectedItems)
   *
   * @property selectedItems
   * @type object[]
   * @default null
   */
  selectedItems = null;

  /**
   * Bound from [ModelsTable.expandedItems](Components.ModelsTable.html#property_expandedItems)
   *
   * @property expandedItems
   * @type number[]
   * @default null
   */
  expandedItems = null;

  /**
   * Bound from [ModelsTable.visibleProcessedColumns](Components.ModelsTable.html#property_visibleProcessedColumns)
   *
   * @property visibleProcessedColumns
   * @type Utils.ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Bound from [ModelsTable.allColumnsAreHidden](Components.ModelsTable.html#property_allColumnsAreHidden)
   *
   * @property allColumnsAreHidden
   * @type boolean
   * @default null
   */
  allColumnsAreHidden = null;

  /**
   * Bound from [ModelsTable.data](Components.ModelsTable.html#property_data)
   *
   * @property data
   * @type object[]
   * @default null
   */
  data = null;

  /**
   * Bound from [ModelsTable.useFilteringByColumns](Components.ModelsTable.html#property_useFilteringByColumns)
   *
   * @property useFilteringByColumns
   * @type boolean
   * @default null
   */
  useFilteringByColumns = null;

  /**
   * Bound from [ModelsTable.groupingRowComponent](Components.ModelsTable.html#property_groupingRowComponent)
   *
   * @property groupingRowComponent
   * @type object
   * @default null
   */
  groupingRowComponent = null;

  /**
   * Bound from [ModelsTable.groupSummaryRowComponent](Components.ModelsTable.html#property_groupSummaryRowComponent)
   *
   * @property groupSummaryRowComponent
   * @type object
   * @default null
   */
  groupSummaryRowComponent = null;

  /**
   * Bound from [ModelsTable.displayGroupedValueAs](Components.ModelsTable.html#property_displayGroupedValueAs)
   *
   * @property displayGroupedValueAs
   * @type string
   * @default null
   */
  displayGroupedValueAs = null;

  /**
   * Bound from [ModelsTable.currentGroupingPropertyName](Components.ModelsTable.html#property_currentGroupingPropertyName)
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  currentGroupingPropertyName = null;

  /**
   * Bound from [ModelsTable._collapsedGroupValues](Components.ModelsTable.html#property__collapsedGroupValues)
   *
   * @property collapsedGroupValues
   * @type array
   * @default null
   */
  collapsedGroupValues = null;

  /**
   * Bound from [ModelsTable.dataGroupOptions](Components.ModelsTable.html#property_dataGroupOptions)
   *
   * @property dataGroupOptions
   * @type object[]
   * @default null
   */
  dataGroupOptions = null;

  /**
   * Bound from [ModelsTable.groupedVisibleContentValuesOrder](Components.ModelsTable.html#property_groupedVisibleContentValuesOrder)
   *
   * @property groupedVisibleContentValuesOrder
   * @type array
   * @default null
   */
  groupedVisibleContentValuesOrder = null;

  /**
   * Bound from [ModelsTable.groupedVisibleContent](Components.ModelsTable.html#property_groupedVisibleContent)
   *
   * @property groupedVisibleContent
   * @type object[]
   * @default null
   */
  groupedVisibleContent = null;

  /**
   * Bound from [ModelsTable.groupedArrangedContent](Components.ModelsTable.html#property_groupedArrangedContent)
   *
   * @property groupedArrangedContent
   * @type object[]
   * @default null
   */
  groupedArrangedContent = null;

  /**
   * Bound from [ModelsTable.useDataGrouping](Components.ModelsTable.html#property_useDataGrouping)
   *
   * @property useDataGrouping
   * @type boolean
   * @default null
   */
  useDataGrouping = null;

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
   * Closure action [ModelsTable.clickOnRow](Components.ModelsTable.html#event_clickOnRow)
   *
   * @event clickOnRow
   */
  clickOnRow = null;

  /**
   * Closure action [ModelsTable.doubleClickOnRow](Components.ModelsTable.html#event_doubleClickOnRow)
   *
   * @event doubleClickOnRow
   */
  doubleClickOnRow = null;

  /**
   * Closure action [ModelsTable.hoverOnRow](Components.ModelsTable.html#event_hoverOnRow)
   *
   * @event hoverOnRow
   */
  hoverOnRow = null;

  /**
   * Closure action [ModelsTable.outRow](Components.ModelsTable.html#event_outRow)
   *
   * @event outRow
   */
  outRow = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Bound from [ModelsTable.groupHeaderCellComponent](Components.ModelsTable.html#property_groupHeaderCellComponent)
   *
   * @property groupHeaderCellComponent
   * @type object
   * @default null
   */
  groupHeaderCellComponent = null;

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
   * Closure action [ModelsTable.toggleAllSelection](Components.ModelsTable.html#event_toggleAllSelection)
   *
   * @event toggleAllSelection
   */
  toggleAllSelection = null;

  /**
   * @property showTableFooter
   * @type boolean
   * @default false
   * @protected
   */
  @computed('visibleProcessedColumns.@each.componentForFooterCell')
  get showTableFooter() {
    return A(this.visibleProcessedColumns).isAny('componentForFooterCell');
  }

  /**
   * @event doSort
   * @param {Utils.ModelsTableColumn} column
   * @protected
   */
  @action
  doSort(column) {
    this.sort(column);
  }

  /**
   * @event doClickOnRow
   * @param {number} index
   * @param {object} row
   * @protected
   */
  @action
  doClickOnRow(index, row) {
    this.clickOnRow(index, row);
  }
}
