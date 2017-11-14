import Component from '@ember/component';
import { get, computed } from '@ember/object';
import layout from '../../templates/components/models-table/row';
import HoverSupport from '../../mixins/hover-support';

/**
 * Table body row is used within [models-table/table-body](Components.ModelsTableTableBody.html).
 *
 * Usage example:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.table as |table|}}
 *     {{#table.body as |body|}}
 *       {{#each body.visibleContent as |record index|}}
 *         {{body.row record=record index=index}}
 *       {{/each}}
 *       {{! ... }}
 *     {{/table.header}}
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
 *       {{#each body.visibleContent as |record index|}}
 *         {{#body.row record=record index=index as |row|}}
 *           {{#each row.visibleProcessedColumns as |column|}}
 *             {{row.cell column=column}}
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
 * **Important!** You must bound `record` and `index` to the `row`.
 *
 * ModelsTableTableRow yields references to the following contextual components:
 *
 * * [models-table/cell](Components.ModelsTableCell.html) - component represents each row's cell
 *
 * Check own docs for each component to get detailed info.
 *
 * @class ModelsTableRow
 * @namespace Components
 * @extends Ember.Component
 */
export default Component.extend(HoverSupport, {
  layout,
  classNameBindings: ['rowSelectedClass', 'rowExpandedClass'],
  tagName: 'tr',

  /**
   * @property rowSelectedClass
   * @private
   * @type string
   */
  rowSelectedClass: computed('isSelected', 'themeInstance.selectedRow', function () {
    return get(this, 'isSelected') ? get(this, 'themeInstance.selectedRow') : '';
  }),


  /**
   * @property rowExpandedClass
   * @private
   * @type string
   */
  rowExpandedClass: computed('isExpanded', 'themeInstance.expandedRow', function () {
    return get(this, 'isExpanded') ? get(this, 'themeInstance.expandedRow') : '';
  }),

  /**
   * @property rowspanForFirstCell
   * @type number
   * @private
   */
  rowspanForFirstCell: computed('groupedLength', 'expandedGroupItemsCount', function () {
    return get(this, 'groupedLength') + get(this, 'expandedGroupItemsCount');
  }),

  /**
   * Row's index
   *
   * @property index
   * @type number
   * @default null
   */
  index: null,

  /**
   * One of the {{#crossLink "Components.ModelsTable/data:property"}}data{{/crossLink}}
   *
   * @property record
   * @type object
   * @default null
   */
  record: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @property visibleProcessedColumns
   * @type ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/messages:property"}}ModelsTable.messages{{/crossLink}}
   *
   * @property messages
   * @type object
   * @default null
   */
  messages: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentGroupingPropertyName:property"}}ModelsTable.currentGroupingPropertyName{{/crossLink}}
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  currentGroupingPropertyName: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/collapsedGroupValues:property"}}ModelsTable.collapsedGroupValues{{/crossLink}}
   *
   * @property collapsedGroupValues
   * @type array
   * @default null
   */
  collapsedGroupValues: null,

  /**
   * @type *
   * @property groupedValue
   * @default null
   */
  groupedValue: null,

  /**
   * Rows group size where current row is
   *
   * @type number
   * @property groupedLength
   * @default null
   */
  groupedLength: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.clickOnRow:method"}}ModelsTable.actions.clickOnRow{{/crossLink}}
   *
   * @event clickOnRow
   */
  clickOnRow: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.doubleClickOnRow:method"}}ModelsTable.actions.doubleClickOnRow{{/crossLink}}
   *
   * @event doubleClickOnRow
   */
  doubleClickOnRow: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.hoverOnRow:method"}}ModelsTable.actions.hoverOnRow{{/crossLink}}
   *
   * @event hoverOnRow
   */
  hoverOnRow: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.outRow:method"}}ModelsTable.actions.outRow{{/crossLink}}
   *
   * @event outRow
   */
  outRow: null,

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
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleGroupedRowsSelection:method"}}ModelsTable.actions.toggleGroupedRowsSelection{{/crossLink}}
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.toggleGroupedRowsExpands:method"}}ModelsTable.actions.toggleGroupedRowsExpands{{/crossLink}}
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands: null,

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
  },

  doubleClick() {
    get(this, 'doubleClickOnRow')(get(this, 'index'), get(this, 'record'));
  },

  enter() {
    get(this, 'hoverOnRow')(get(this, 'index'), get(this, 'record'));
  },

  leave() {
    get(this, 'outRow')(get(this, 'index'), get(this, 'record'));
  },

  actions: {
    toggleGroupedRows() {
      get(this, 'toggleGroupedRows')(get(this, 'groupedValue'));
    }
  }

});
