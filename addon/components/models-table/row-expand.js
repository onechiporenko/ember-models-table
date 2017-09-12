import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from '../../templates/components/models-table/row-expand';

/**
 * Extra row with additional information for original row. Component used within [models-table/table-body](Components.ModelsTableTableBody.html).
 *
 * Row expand is a table-row with a single cell. This cell has a `colspan` equal to the shown columns count. You should provide an [ModelsTable.expandedRowComponent](Components.ModelsTable.html#property_expandedRowComponent). It will be rendered inside ModelsTableRowExpand.
 *
 * Usage example:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{#table.body as |body|}}
 *       {{#each body.visibleContent as |record index|}}
 *         {{body.row record=record index=index}}
 *         {{#if (exists-in body.expandedRowIndexes index)}}
 *           {{body.row-expand record=record index=index}}
 *         {{/if}}
 *       {{/each}}
 *     {{/table.header}}
 *     {{! ... }}
 *   {{/mt.table}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * @class ModelsTableRowExpand
 * @namespace Components
 * @extends Ember.Component
 */
export default Component.extend({
  layout,
  tagName: 'tr',
  classNames: ['expand-row'],
  classNameBindings: ['indexedClass', 'isSelected:selected-expand'],

  /**
   * @property indexedClass
   * @type string
   * @default ''
   */
  indexedClass: computed('index', function () {
    return `expand-${get(this, 'index')}`;
  }),

  /**
   * @property isSelected
   * @type boolean
   * @default false
   */
  isSelected: computed('selectedItems.[]', 'record', function () {
    return get(this, 'selectedItems').indexOf(get(this, 'record')) !== -1;
  }),

  /**
   * Bound from {{#crossLink "Components.ModelsTable/expandedRowComponent:property"}}ModelsTable.expandedRowComponent{{/crossLink}}
   *
   * @property expandedRowComponent
   * @type string
   * @default null
   */
  expandedRowComponent: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/processedColumns:property"}}ModelsTable.processedColumns{{/crossLink}}
   *
   * @property processedColumns
   * @type ModelsTableColumn[]
   * @default null
   */
  processedColumns: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/messages:property"}}ModelsTable.messages{{/crossLink}}
   *
   * @property messages
   * @type object
   * @default null
   */
  messages: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/messages:property"}}ModelsTable.selectedItems{{/crossLink}}
   *
   * @property selectedItems
   * @type object[]
   * @default null
   */
  selectedItems: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @property visibleProcessedColumns
   * @type ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns: null,

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
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance: null,

  click() {
    get(this, 'clickOnRow')(get(this, 'index'), get(this, 'record'));
  }
});
