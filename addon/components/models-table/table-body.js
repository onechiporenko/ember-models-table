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
 *       {{#if Body.allColumnsAreHidden}}
 *         <Body.ColumnsHidden />
 *       {{else}}
 *         {{#if Body.visibleContent.length}}
 *           {{#each Body.visibleContent as |record index|}}
 *             <Body.Row @record={{record}} @index={{index}} />
 *             {{#if (exists-in Body.expandedItems record)}}
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
   * Bound from {{#crossLink "Components.ModelsTableTable/columnsCount:property"}}ModelsTable.columnsCount{{/crossLink}}
   *
   * @type number
   * @default null
   */
  columnsCount = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleContent:property"}}ModelsTable.visibleContent{{/crossLink}}
   *
   * @type object[]
   * @default null
   */
  visibleContent = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/selectedItems:property"}}ModelsTable.selectedItems{{/crossLink}}
   *
   * @type object[]
   * @default null
   */
  selectedItems = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/expandedItems:property"}}ModelsTable.expandedItems{{/crossLink}}
   *
   * @type number[]
   * @default null
   */
  expandedItems = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/expandedRowComponent:property"}}ModelsTable.expandedRowComponent{{/crossLink}}
   *
   * @type string
   * @default null
   */
  expandedRowComponent = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupingRowComponent:property"}}ModelsTable.groupingRowComponent{{/crossLink}}
   *
   * @type object
   * @default null
   */
  groupingRowComponent = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupSummaryRowComponent:property"}}ModelsTable.groupSummaryRowComponent{{/crossLink}}
   *
   * @type object
   * @default null
   */
  groupSummaryRowComponent = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @type ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/allColumnsAreHidden:property"}}ModelsTable.allColumnsAreHidden{{/crossLink}}
   *
   * @default null
   */
  allColumnsAreHidden = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/data:property"}}ModelsTable.data{{/crossLink}}
   *
   * @type object[]
   * @default null
   */
  data = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/useDataGrouping:property"}}ModelsTable.useDataGrouping{{/crossLink}}
   *
   * @default null
   */
  useDataGrouping = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/collapsedGroupValues:property"}}ModelsTable.collapsedGroupValues{{/crossLink}}
   *
   * @type array
   * @default null
   */
  collapsedGroupValues = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentGroupingPropertyName:property"}}ModelsTable.currentGroupingPropertyName{{/crossLink}}
   *
   * @type string
   * @default null
   */
  currentGroupingPropertyName = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/dataGroupOptions:property"}}ModelsTable.dataGroupOptions{{/crossLink}}
   *
   * @type object[]
   * @default null
   */
  dataGroupOptions = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupedVisibleContentValuesOrder:property"}}ModelsTable.groupedVisibleContentValuesOrder{{/crossLink}}
   *
   * @type array
   * @default null
   */
  groupedVisibleContentValuesOrder = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupedVisibleContent:property"}}ModelsTable.groupedVisibleContent{{/crossLink}}
   *
   * @type object
   * @default null
   */
  groupedVisibleContent = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupedArrangedContent:property"}}ModelsTable.groupedArrangedContent{{/crossLink}}
   *
   * @type object[]
   * @default null
   */
  groupedArrangedContent = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/displayGroupedValueAs:property"}}ModelsTable.displayGroupedValueAs{{/crossLink}}
   *
   * @type string
   * @default null
   */
  displayGroupedValueAs = null;

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

  @action
  doClickOnRow(index, row) {
    this.clickOnRow(index, row);
  }
}
