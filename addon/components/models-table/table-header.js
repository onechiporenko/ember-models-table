import {className, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {action} from '@ember/object';
import {alias} from '@ember/object/computed';
import layout from '../../templates/components/models-table/table-header';

/**
 * Table header used within [models-table/table](Components.ModelsTableTable.html).
 *
 * Component contains grouped headers (if provided) bound from [ModelsTable.groupedHeaders](Components.ModelsTable.html#property_groupedHeaders), row with sorting buttons (usually this row also contains column headers) and row with filter boxes.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header />
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
 *     <Table.Header as |Header|>
 *       {{#each Header.GroupedHeaders as |GroupedHeader|}}
 *         <GroupedHeader @groupedHeader={{groupedHeader}} />
 *       {{/each}}
 *       <Header.RowSorting />
 *       <Header.RowFiltering />
 *     </Table.Header>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * ModelsTableTableHeader yields references to the following contextual components:
 *
 * * [models-table/grouped-header](Components.ModelsTableGroupedHeader.html) - component for groupedHeaders. It should be used for each groupedHeaders item
 * * [models-table/row-sorting](Components.ModelsTableRowSorting.html) - row with columns titles. Click on every cell will sort table data by selected column
 * * [models-table/row-filtering](Components.ModelsTableRowFiltering.html) - row with filter items. Every cell contains input or select-box
 *
 * Check own docs for each component to get detailed info.
 *
 * @namespace Components
 * @class ModelsTableTableHeader
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@tagName('thead')
class TableHeaderComponent extends Component {

  /**
   * @property tagName
   * @type string
   * @default 'thead'
   */

  /**
   * @property themeTheadClass
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.thead') themeTheadClass;

  /**
   * Bound from [ModelsTable.noHeaderFilteringAndSorting](Components.ModelsTable.html#property_noHeaderFilteringAndSorting)
   *
   * @property noHeaderFilteringAndSorting
   * @type string
   * @default null
   * @protected
   */
  @className('table-header-no-filtering-and-sorting')
  noHeaderFilteringAndSorting = null;

  /**
   * Bound from [ModelsTable.groupedHeaders](Components.ModelsTable.html#property_groupedHeaders)
   *
   * @property groupedHeaders
   * @type GroupedHeader[]
   * @default null
   */
  groupedHeaders = null;

  /**
   * Bound from [ModelsTable.visibleProcessedColumns](Components.ModelsTable.html#property_visibleProcessedColumns)
   *
   * @property visibleProcessedColumns
   * @type Utils.ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Bound from [ModelsTable.processedColumns](Components.ModelsTable.html#property_processedColumns)
   *
   * @property processedColumns
   * @type Utils.ModelsTableColumn[]
   * @default null
   */
  processedColumns = null;

  /**
   * Bound from [ModelsTable.useFilteringByColumns](Components.ModelsTable.html#property_useFilteringByColumns)
   *
   * @property useFilteringByColumns
   * @type boolean
   * @default null
   */
  useFilteringByColumns = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Bound from [ModelsTable.useDataGrouping](Components.ModelsTable.html#property_useDataGrouping)
   *
   * @property useDataGrouping
   * @type boolean
   * @default null
   */
  useDataGrouping = null;

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
   * Bound from [ModelsTable.groupHeaderCellComponent](Components.ModelsTable.html#property_groupHeaderCellComponent)
   *
   * @property groupHeaderCellComponent
   * @type object
   * @default null
   */
  groupHeaderCellComponent = null;

  /**
   * Closure action [ModelsTable.sort](Components.ModelsTable.html#event_sort)
   *
   * @event sort
   */
  sort = null;

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
   * Bound from [ModelsTable.data](Components.ModelsTable.html#property_data)
   *
   * @property data
   * @default null
   * @type object[]
   */
  data = null;

  /**
   * @event doSort
   * @param {Utils.ModelsTableColumn} column
   * @protected
   */
  @action
  doSort(column) {
    this.sort(column);
  }
}
