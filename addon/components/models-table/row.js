import {className, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, computed, get, set} from '@ember/object';
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
@templateLayout(layout)
@tagName('tr')
export default class RowComponent extends Component.extend(HoverSupport) { // eslint-disable-line ember-es6-class/no-object-extend
  /**
   * @property rowSelectedClass
   * @private
   * @type string
   */
  @className
  @computed('isSelected', 'themeInstance.selectedRow')
  get rowSelectedClass() {
    return get(this, 'isSelected') ? get(this, 'themeInstance.selectedRow') : '';
  }

  /**
   * @property rowExpandedClass
   * @private
   * @type string
   */
  @className
  @computed('isExpanded', 'themeInstance.expandedRow')
  get rowExpandedClass() {
    return get(this, 'isExpanded') ? get(this, 'themeInstance.expandedRow') : '';
  }

  /**
   * @property rowspanForFirstCell
   * @type number
   * @private
   */
  @computed('visibleGroupedItems.length', 'expandedGroupItemsCount', 'groupSummaryRowComponent')
  get rowspanForFirstCell() {
    const rowspan = get(this, 'visibleGroupedItems.length') + get(this, 'expandedGroupItemsCount');
    return get(this, 'groupSummaryRowComponent') ? rowspan + 1 : rowspan;
  }

  /**
   * Row's index
   *
   * @property index
   * @type number
   * @default null
   */
  index = null;

  /**
   * One of the {{#crossLink "Components.ModelsTable/data:property"}}data{{/crossLink}}
   *
   * @property record
   * @type object
   * @default null
   */
  record = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/visibleProcessedColumns:property"}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   *
   * @property visibleProcessedColumns
   * @type ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentGroupingPropertyName:property"}}ModelsTable.currentGroupingPropertyName{{/crossLink}}
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  currentGroupingPropertyName = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/collapsedGroupValues:property"}}ModelsTable.collapsedGroupValues{{/crossLink}}
   *
   * @property collapsedGroupValues
   * @type array
   * @default null
   */
  collapsedGroupValues = null;

  /**
   * @type object[]
   * @property groupedItems
   * @default null
   * @private
   */
  groupedItems = null;

  /**
   * @type object[]
   * @property visibleGroupedItems
   * @default null
   * @private
   */
  visibleGroupedItems = null;

  /**
   * @type object[]
   * @property selectedGroupedItems
   * @default null
   * @private
   */
  selectedGroupedItems = null;

  /**
   * @type object[]
   * @property expandedGroupedItems
   * @default null
   * @private
   */
  expandedGroupedItems = null;

  /**
   * @type *
   * @property groupedValue
   * @default null
   */
  groupedValue = null;

  /**
   * Rows group size where current row is
   *
   * @type number
   * @property groupedLength
   * @default null
   */
  groupedLength = null;

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
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Is the row in edit mode
   *
   * @property isEditRow
   * @type boolean
   * @default false
   */
  isEditRow = false;

  click() {
    get(this, 'clickOnRow')(get(this, 'index'), get(this, 'record'));
  }

  doubleClick() {
    get(this, 'doubleClickOnRow')(get(this, 'index'), get(this, 'record'));
  }

  enter() {
    get(this, 'hoverOnRow')(get(this, 'index'), get(this, 'record'));
  }

  leave() {
    get(this, 'outRow')(get(this, 'index'), get(this, 'record'));
  }

  @action
  doToggleGroupedRows() {
    get(this, 'toggleGroupedRows')(get(this, 'groupedValue'));
  }

  /**
   * Place a row into edit mode
   *
   * @returns {undefined}
   * @method actions.editRow
   */
  @action
  editRow() {
    set(this, 'isEditRow', true);
  }

  /**
   * Indicate a row has been saved, the row is no longer in edit mode
   *
   * @returns {undefined}
   * @method actions.saveRow
   */
  @action
  saveRow() {
    set(this, 'isEditRow', false);
  }

  /**
   * Indicate the edit on the row has been cancelled, the row is no longer in edit mode
   *
   * @returns {undefined}
   * @method actions.cancelEditRow
   */
  @action
  cancelEditRow() {
    set(this, 'isEditRow', false);
  }
}
