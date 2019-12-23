import {layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, computed} from '@ember/object';
import layout from '../../templates/components/models-table/row-sorting';
import {shownColumns} from '../../utils/macros';
import {propertyNameToTitle} from '../../utils/column';

/**
 * Table header item used within [models-table/table-header](Components.ModelsTableTableHeader.html).
 *
 * Component generates tr with column titles in the separated cells. Click by each cell will sort table data by selected field. Check properties [disableSorting](Utils.ModelsTableColumn.html#property_disableSorting), [sortedBy](Utils.ModelsTableColumn.html#property_sortedBy) for ModelsTableColumn.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       <Header.RowSorting />
 *       {{! ... }}
 *     </Table.Header>
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
 *       <Header.RowSorting as |RS|>
 *         {{#each RS.visibleProcessedColumns as |column|}}
 *           <td>{{column.title}}</td>
 *         {{/each}}
 *       </Header.RowSorting>
 *       {{! ... }}
 *     </Table.Header>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * ModelsTableRowSorting yields references to the following contextual components:
 *
 * * [models-table/row-sorting-cell](Components.ModelsTableRowSortingCell.html) - component used as sorting row cell. Clicking on it causes column sorting
 *
 * Check own docs for each component to get detailed info.
 *
 * @namespace Components
 * @class ModelsTableRowSorting
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@tagName('tr')
class RowSortingComponent extends Component {

  /**
   * @property tagName
   * @type string
   * @default 'tr'
   */

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
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Bound from [ModelsTable.selectedItems](Components.ModelsTable.html#property_selectedItems)
   *
   * @property selectedItems
   * @default null
   * @type object[]
   */
  selectedItems = null;

  /**
   * Bound from [ModelsTable.expandedItems](Components.ModelsTable.html#property_expandedItems)
   *
   * @property expandedItems
   * @default null
   * @type object[]
   */
  expandedItems = null;

  /**
   * Bound from [ModelsTable.data](Components.ModelsTable.html#property_data)
   *
   * @property data
   * @default null
   * @type object[]
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
   * Bound from [ModelsTable.displayGroupedValueAs](Components.ModelsTable.html#property_displayGroupedValueAs)
   *
   * @property displayGroupedValueAs
   * @default null
   * @type string
   */
  displayGroupedValueAs = null;

  /**
   * Bound from [ModelsTable.groupHeaderCellComponent](Components.ModelsTable.html#property_groupHeaderCellComponent)
   *
   * @property groupHeaderCellComponent
   * @default null
   * @type object
   */
  groupHeaderCellComponent = null;

  /**
   * Bound from [ModelsTable.currentGroupingPropertyName](Components.ModelsTable.html#property_currentGroupingPropertyName)
   *
   * @property currentGroupingPropertyName
   * @default null
   * @type object
   */
  currentGroupingPropertyName = null;

  /**
   * Closure action [ModelsTable.sort](Components.ModelsTable.html#event_sort)
   *
   * @event sort
   */
  sort = null;

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
   * @property shownColumns
   * @type Utils.ModelsTableColumn[]
   * @protected
   */
  @shownColumns('colspanForSortCell') shownColumns;

  /**
   * @property shouldAddExtraColumn
   * @type boolean
   * @default false
   * @protected
   */
  @computed('displayGroupedValueAs', 'useDataGrouping', 'visibleProcessedColumns.[]')
  get shouldAddExtraColumn () {
    return this.displayGroupedValueAs === 'column' && this.useDataGrouping && !!this.visibleProcessedColumns.length;
  }

  /**
   * @property currentGroupingPropertyNameTitlelized
   * @type string
   * @protected
   */
  @computed('currentGroupingPropertyName')
  get currentGroupingPropertyNameTitlelized() {
    return propertyNameToTitle(this.currentGroupingPropertyName);
  }

  /**
   * @event doSort
   * @param {Utils.ModelsTableColumn} column
   */
  @action
  doSort(column) {
    this.sort(column);
  }
}
