import Component from '@ember/component';
import layout from '../../templates/components/models-table/table-footer';

/**
 * Table footer used within [models-table/table](Components.ModelsTableTable.html).
 *
 * By default it's an empty component. It should be used with a block context:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{#table.footer as |footer|}}
 *       {{! ... }}
 *     {{/table.footer}}
 *     {{! ... }}
 *   {{/mt.table}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * @class ModelsTableTableFooter
 * @extends Ember.Component
 * @namespace Components
 */
export default Component.extend({
  layout,
  tagName: 'tfoot',

  /**
   * Bound from {{#crossLink "Components.ModelsTable/data:property"}}ModelsTable.data{{/crossLink}}
   *
   * @property data
   * @type object[]
   * @default null
   */
  data: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/processedColumns:property"}}ModelsTable.processedColumns{{/crossLink}}
   *
   * @property processedColumns
   * @type ModelsTableColumn[]
   * @default null
   */
  processedColumns: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/messages:property"}}ModelsTable.messages{{/crossLink}}
   *
   * @property messages
   * @type object[]
   * @default null
   */
  messages: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.goToPage:method"}}ModelsTable.actions.goToPage{{/crossLink}}
   *
   * @event goToPage
   */
  goToPage: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.clearFilters:method"}}ModelsTable.actions.clearFilters{{/crossLink}}
   *
   * @event clearFilters
   */
  clearFilters: null,

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
});
