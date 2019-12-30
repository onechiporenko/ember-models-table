import {layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {action} from '@ember/object';
import layout from '../../templates/components/models-table/table-body';

/**
 * Table body used within [models-table/table](Components.ModelsTableTable.html).
 *
 * Component contains rows for each record, row expands (if provided) and components for situations with missing data or when all columns are hidden.
 *
 Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * Usage with a block context:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body as |Body|>
 *       {{#if MT.allColumnsAreHidden}}
 *         <Body.ColumnsHidden />
 *       {{else}}
 *         {{#if MT.visibleContent.length}}
 *           {{#each MT.visibleContent as |record index|}}
 *             <Body.Row @record={{record}} @index={{index}} />
 *             {{#if (exists-in MT.expandedItems record)}}
 *               <Body.RowExpand @record={{record}} @index={{index}} />
 *             {{/if}}
 *           {{/each}}
 *         {{else}}
 *           <Body.NoData />
 *         {{/if}}
 *       {{/if}}
 *     </Table.Body>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * ModelsTableTableHeader yields references to the following contextual components:
 *
 * * [models-table/columns-hidden](Components.ModelsTableColumnsHidden.html) - component used when all columns are hidden and no data items are shown. Usually it contains a simple message
 * * [models-table/row](Components.ModelsTableRow.html) - component represents each table-body row with a single record.
 * * [models-table/row-expand](Components.ModelsTableRowExpand.html) - component with extra data shown when selected row is expanded
 * * [models-table/row-grouping](Components.ModelsTableRowGrouping.html) - component with grouped property value. Used to toggle row group
 * * [models-table/no-data](Components.ModelsTableNoData.html) - component used when no data provided to the table. Usually it contains a simple message
 *
 * Check own docs for each component to get detailed info.

 *
 * @namespace Components
 * @class ModelsTableTableBody
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@tagName('tbody')
class TableBodyComponent extends Component {

  /**
   * @property tagName
   * @type string
   * @default 'tbody'
   */

  /**
   * Bound from [ModelsTable.columnsCount](Components.ModelsTableTable.html#property_columnsCount)
   *
   * @property columnsCount
   * @type number
   * @default null
   */
  columnsCount = null;

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
   * Bound from [ModelsTable.expandedRowComponent](Components.ModelsTable.html#property_expandedRowComponent)
   *
   * @property expandedRowComponent
   * @type object
   * @default null
   */
  expandedRowComponent = null;

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
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Bound from [ModelsTable.data](Components.ModelsTable.html#property_data)
   *
   * @property data
   * @type object[]
   * @default null
   */
  data = null;

  /**
   * Bound from [ModelsTable.useDataGrouping](Components.ModelsTable.html#property_useDataGrouping)
   *
   * @property useDataGrouping
   * @type boolean
   * @default null
   */
  useDataGrouping = null;

  /**
   * Bound from [ModelsTable.collapsedGroupValues](Components.ModelsTable.html#property_collapsedGroupValues)
   *
   * @property collapsedGroupValues
   * @type array
   * @default null
   */
  collapsedGroupValues = null;

  /**
   * Bound from [ModelsTable.currentGroupingPropertyName](Components.ModelsTable.html#property_currentGroupingPropertyName)
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  currentGroupingPropertyName = null;

  /**
   * Bound from [ModelsTable.dataGroupOptions](Components.ModelsTable.html#property_dataGroupOptions)
   *
   * @property dataGroupOptions
   * @type SelectOption[]
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
   * Bound from [ModelsTable.displayGroupedValueAs](Components.ModelsTable.html#property_displayGroupedValueAs)
   *
   * @property displayGroupedValueAs
   * @type string
   * @default null
   */
  displayGroupedValueAs = null;

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
