import Component from '@ember/component';
import layout from '../../templates/components/models-table/cell';

/**
 * Table cell used within [models-table/table-row](Components.ModelsTableTableRow.html).
 *
 * Cell types:
 *
 * * Text. Shows some property value
 * * Route link with record id
 * * Route link with record property value
 * * Custom component
 *
 * See properties [routeName](Utils.ModelsTableColumn.html#property_routeName), [propertyName](Utils.ModelsTableColumn.html#property_propertyName), [component](Utils.ModelsTableColumn.html#property_component) for ModelsTableColumn.
 *
 * Usage example:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{#table.body as |body|}}
 *       {{#each body.visibleContent as |record index|}}
 *         {{#body.row record=record index=index as |row|}}
 *           {{#each row.visibleProcessedColumns as |column|}}
 *             {{#row.cell column=column as |cell|}}
 *               {{! ... }}
 *             {{/row.cell}}
 *           {{/each}}
 *         {{/body.row}}
 *       {{/each}}
 *       {{! ... }}
 *     {{/table.header}}
 *     {{! ... }}
 *   {{/mt.table}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * @namespace Components
 * @class ModelsTableCell
 * @extends Ember.Component
 */
export default Component.extend({
  layout,
  tagName: 'td',
  classNameBindings: ['column.className'],

  /**
   * Bound from {{#crossLink "Components.ModelsTable/data:property"}}ModelsTable.data{{/crossLink}}
   *
   * @property data
   * @default null
   * @type object[]
   */
  data: null,

  /**
   * One of the {{#crossLink "Components.ModelsTableCell/data:property"}}data{{/crossLink}}
   * @property record
   * @default null
   */
  record: null,

  /**
   * Row's index where current cell is
   *
   * @property index
   * @default null
   * @type number
   */
  index: null,

  /**
   * @property column
   * @default null
   * @type ModelsTableColumn
   */
  column: null,

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

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/_expandedItems:property"}}ModelsTable._expandedItems{{/crossLink}}
   *
   * @property expandedRowIndexes
   * @default null
   * @type number[]
   */
  expandedRowIndexes: null,

  /**
   * Is current row expanded or not
   *
   * @type boolean
   * @default null
   * @property isExpanded
   */
  isExpanded: null
});
