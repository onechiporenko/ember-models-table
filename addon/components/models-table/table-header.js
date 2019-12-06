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

  @className
  @alias('themeInstance.thead') themeTheadClass;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/noHeaderFilteringAndSorting:property"}}ModelsTable.noHeaderFilteringAndSorting{{/crossLink}}
   *
   * @default null
   */
  @className('table-header-no-filtering-and-sorting')
  noHeaderFilteringAndSorting = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupedHeaders:property"}}ModelsTable.groupedHeaders{{/crossLink}}
   *
   * @type groupedHeader[][]
   * @default null
   */
  groupedHeaders = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @type ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/processedColumns:property"}}ModelsTable.processedColumns{{/crossLink}}
   *
   * @type ModelsTableColumn[]
   * @default null
   */
  processedColumns = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/useFilteringByColumns:property"}}ModelsTable.useFilteringByColumns{{/crossLink}}
   *
   * @default null
   */
  useFilteringByColumns = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/useDataGrouping:property"}}ModelsTable.useDataGrouping{{/crossLink}}
   *
   * @default null
   */
  useDataGrouping = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/displayGroupedValueAs:property"}}ModelsTable.displayGroupedValueAs{{/crossLink}}
   *
   * @type string
   * @default null
   */
  displayGroupedValueAs = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentGroupingPropertyName:property"}}ModelsTable.currentGroupingPropertyName{{/crossLink}}
   *
   * @type string
   * @default null
   */
  currentGroupingPropertyName = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupHeaderCellComponent:property"}}ModelsTable.groupHeaderCellComponent{{/crossLink}}
   *
   * @type object
   * @default null
   */
  groupHeaderCellComponent = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sort:method"}}ModelsTable.actions.sort{{/crossLink}}
   *
   * @event sort
   */
  sort = null;

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
   * Bound from {{#crossLink "Components.ModelsTable/expandedItems:property"}}ModelsTable.data{{/crossLink}}
   *
   * @default null
   * @type object[]
   */
  data = null;

  @action
  doSort(column) {
    this.sort(column);
  }
}
