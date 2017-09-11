import Ember from 'ember';
import layout from '../../templates/components/models-table/table';

const {get, computed} = Ember;

/**
 * Table with data used within [models-table](Components.ModelsTable.html).
 *
 * Usage example:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{mt.table}}
 *   {{! ... }}
 * {{/models-table}}
 * ```
 *
 * Usage example with a block context:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{table.header}}
 *     {{table.body}}
 *     {{table.footer}}
 *   {{/mt.table}}
 * {{/models-table}}
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
export default Ember.Component.extend({
  layout,
  tagName: 'table',
  classNameBindings: ['themeInstance.table'],

  /**
   * Bound from {{#crossLink "Components.ModelsTable/noHeaderFilteringAndSorting:property"}}ModelsTable.noHeaderFilteringAndSorting{{/crossLink}}
   *
   * @property noHeaderFilteringAndSorting
   * @type boolean
   * @default null
   */
  noHeaderFilteringAndSorting: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/groupedHeaders:property"}}ModelsTable.groupedHeaders{{/crossLink}}
   *
   * @property groupedHeaders
   * @type groupedHeader[][]
   * @default null
   */
  groupedHeaders: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/processedColumns:property"}}ModelsTable.processedColumns{{/crossLink}}
   *
   * @property processedColumns
   * @type object[]
   * @default null
   */
  processedColumns: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sort:method"}}ModelsTable.actions.sort{{/crossLink}}
   *
   * @event sort
   */
  sort: null,

  /**
   * @property columnsCount
   * @type number
   * @default null
   */
  columnsCount: computed.alias('processedColumns.length'),

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleContent:property"}}ModelsTable.visibleContent{{/crossLink}}
   *
   * @property visibleContent
   * @type object[]
   * @default null
   */
  visibleContent: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/_selectedItems:property"}}ModelsTable._selectedItems{{/crossLink}}
   *
   * @property selectedItems
   * @type object[]
   * @default null
   */
  selectedItems: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/_expandedRowIndexes:property"}}ModelsTable._expandedRowIndexes{{/crossLink}}
   *
   * @property expandedRowIndexes
   * @type number[]
   * @default null
   */
  expandedRowIndexes: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @property visibleProcessedColumns
   * @type object[]
   * @default null
   */
  visibleProcessedColumns: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/allColumnsAreHidden:property"}}ModelsTable.allColumnsAreHidden{{/crossLink}}
   *
   * @property allColumnsAreHidden
   * @type boolean
   * @default null
   */
  allColumnsAreHidden: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/data:property"}}ModelsTable.data{{/crossLink}}
   *
   * @property data
   * @type object[]
   * @default null
   */
  data: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/useFilteringByColumns:property"}}ModelsTable.useFilteringByColumns{{/crossLink}}
   *
   * @property useFilteringByColumns
   * @type boolean
   * @default null
   */
  useFilteringByColumns: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.clickOnRow:method"}}ModelsTable.actions.clickOnRow{{/crossLink}}
   *
   * @event clickOnRow
   */
  clickOnRow: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.expandRow:method"}}ModelsTable.actions.expandRow{{/crossLink}}
   *
   * @event expandRow
   */
  expandRow: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.collapseRow:method"}}ModelsTable.actions.collapseRow{{/crossLink}}
   *
   * @event collapseRow
   */
  collapseRow: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.expandAllRows:method"}}ModelsTable.actions.expandAllRows{{/crossLink}}
   *
   * @event expandAllRows
   */
  expandAllRows: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.collapseAllRows:method"}}ModelsTable.actions.collapseAllRows{{/crossLink}}
   *
   * @event collapseAllRows
   */
  collapseAllRows: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sendAction:method"}}ModelsTable.actions.sendAction{{/crossLink}}
   *
   * @event sendAction
   */
  sendAction: null,

  actions: {
    sort(column) {
      get(this, 'sort')(column);
    },
    clickOnRow(index, row) {
      get(this, 'clickOnRow')(index, row);
    }
  }
});
