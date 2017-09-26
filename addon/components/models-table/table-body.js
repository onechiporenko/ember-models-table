import Component from '@ember/component';
import { get } from '@ember/object';
import layout from '../../templates/components/models-table/table-body';

/**
 * Table body used within [models-table/table](Components.ModelsTableTable.html).
 *
 * Component contains rows for each record, row expands (if provided) and components for situations with missing data or when all columns are hidden.
 *
 Usage example:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{table.body}}
 *     {{! ... }}
 *   {{/mt.table}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * Usage with a block context:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{#table.body as |body|}}
 *       {{#if body.allColumnsAreHidden}}
 *         {{body.columns-hidden}}
 *       {{else}}
 *         {{#if body.visibleContent.length}}
 *           {{#each body.visibleContent as |record index|}}
 *             {{body.row record=record index=index}}
 *             {{#if (exists-in body.expandedItems record)}}
 *               {{body.row-expand record=record index=index}}
 *             {{/if}}
 *           {{/each}}
 *         {{else}}
 *           {{body.no-data}}
 *         {{/if}}
 *       {{/if}}
 *     {{/table.header}}
 *     {{! ... }}
 *   {{/mt.table}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * ModelsTableTableHeader yields references to the following contextual components:
 *
 * * [models-table/columns-hidden](Components.ModelsTableColumnsHidden.html) - component used when all columns are hidden and no data items are shown. Usually it contains a simple message
 * * [models-table/row](Components.ModelsTableRow.html) - component represents each table-body row with a single record.
 * * [models-table/row-expand](Components.ModelsTableRowExpand.html) - component with extra data shown when selected row is expanded
 * * [models-table/no-data](Components.ModelsTableNoData.html) - component used when no data provided to the table. Usually it contains a simple message
 *
 * Check own docs for each component to get detailed info.

 *
 * @namespace Components
 * @class ModelsTableTableBody
 * @extends Ember.Component
 */
export default Component.extend({
  layout,
  tagName: 'tbody',

  /**
   * Bound from {{#crossLink "Components.ModelsTableTable/columnsCount:property"}}ModelsTable.columnsCount{{/crossLink}}
   *
   * @property columnsCount
   * @type number
   * @default null
   */
  columnsCount: null,

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
   * Bound from {{#crossLink "Components.ModelsTable/_expandedItems:property"}}ModelsTable.expandedItems{{/crossLink}}
   *
   * @property expandedItems
   * @type number[]
   * @default null
   */
  expandedItems: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/expandedRowComponent:property"}}ModelsTable.expandedRowComponent{{/crossLink}}
   *
   * @property expandedRowComponent
   * @type string
   * @default null
   */
  expandedRowComponent: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @property visibleProcessedColumns
   * @type ModelsTableColumn[]
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
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/data:property"}}ModelsTable.data{{/crossLink}}
   *
   * @property data
   * @type object[]
   * @default null
   */
  data: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/messages:property"}}ModelsTable.messages{{/crossLink}}
   *
   * @property messages
   * @type object
   * @default null
   */
  messages: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.clickOnRow:method"}}ModelsTable.actions.clickOnRow{{/crossLink}}
   *
   * @event clickOnRow
   */
  clickOnRow: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sendAction:method"}}ModelsTable.actions.sendAction{{/crossLink}}
   *
   * @event sendAction
   */
  sendAction: null,

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

  actions: {
    clickOnRow(index, row) {
      get(this, 'clickOnRow')(index, row);
    }
  }
});
