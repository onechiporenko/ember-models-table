import {className, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, computed, get, set} from '@ember/object';
import {intersect, equal} from '@ember/object/computed';
import {isArray} from '@ember/array';
import layout from '../../templates/components/models-table/row';

/**
 * Table body row is used within [models-table/table-body](Components.ModelsTableTableBody.html).
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body as |Body|>
 *       {{#each Body.visibleContent as |record index|}}
 *         <Body.Row @record={{record}} @index={{index}} />
 *       {{/each}}
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
 *     <Table.Body as |Body|>
 *       {{#each Body.visibleContent as |record index|}}
 *         <Body.Row @record={{record}} @index={{index}} as |Row|>
 *           {{#each MT.visibleProcessedColumns as |column|}}
 *             <Row.Cell @column={{column}} @index={{index}} />
 *           {{/each}}
 *         </Body.Row>
 *       {{/each}}
 *       {{! ... }}
 *     </Table.Body>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * **Important!** You must bound `record` and `index` to the `row`.
 *
 * ModelsTableTableRow yields references to the following contextual components:
 *
 * * [models-table/cell](Components.ModelsTableCell.html) - component represents each row's cell
 * * [models-table/row-group-toggle](Components.ModelsTableRowGroupToggle.html) - component is used to toggle rows group visibility
 *
 * Check own docs for each component to get detailed info.
 *
 * References to the following properties are yielded:
 *
 * * [isEditRow](Components.ModelsTableRow.html#property_isEditRow) - `true` if row in the Edit-mode
 * * [isFirstGroupedRow](Components.ModelsTableRow.html#property_isFirstGroupedRow) - `true` if row is first in the rows group (flag used when rows grouping is used)
 *
 * References to the following actions are yielded:
 *
 * * [editRow](Components.ModelsTableRow.html#event_editRow) - action to set row to the Edit-mode
 * * [saveRow](Components.ModelsTableRow.html#event_saveRow) - action to save row and turn off Edit-mode
 * * [cancelEditRow](Components.ModelsTableRow.html#event_cancelEditRow) - action to cancel changes done to the row and turn off Edit-mode
 *
 * @class ModelsTableRow
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@tagName('tr')
class RowComponent extends Component {

  /**
   * @property tagName
   * @type string
   * @default 'tr'
   */

  /**
   * @property rowSelectedClass
   * @protected
   * @type string
   * @default ''
   */
  @className
  @computed('isSelected', 'themeInstance.selectedRow')
  get rowSelectedClass() {
    return this.isSelected ? get(this, 'themeInstance.selectedRow') : '';
  }

  /**
   * @property rowExpandedClass
   * @protected
   * @type string
   * @default ''
   */
  @className
  @computed('isExpanded', 'themeInstance.expandedRow')
  get rowExpandedClass() {
    return this.isExpanded ? get(this, 'themeInstance.expandedRow') : '';
  }

  /**
   * @property rowspanForFirstCell
   * @type number
   * @protected
   */
  @computed('visibleGroupedItems.length', 'expandedGroupItems.length', 'groupSummaryRowComponent')
  get rowspanForFirstCell() {
    const rowspan = get(this, 'visibleGroupedItems.length') + get(this, 'expandedGroupItems.length');
    return this.groupSummaryRowComponent ? rowspan + 1 : rowspan;
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
   * One of the [data](Components.ModelsTable.html#property_data)
   *
   * @property data
   * @type object
   * @default null
   */
  record = null;

  /**
   * Bound from [ModelsTable.visibleProcessedColumns](Components.ModelsTable.html#property_visibleProcessedColumns)
   *
   * @property visibleProcessedColumns
   * @type Utils.ModelsTableColumn[]
   * @default null
   */
  visibleProcessedColumns = null;

  /**
   * Bound from [ModelsTable.currentGroupingPropertyName](Components.ModelsTable.html#property_currentGroupingPropertyName)
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  currentGroupingPropertyName = null;

  /**
   * Bound from [ModelsTable.collapsedGroupValues](Components.ModelsTable.html#property_collapsedGroupValues)
   *
   * @property collapsedGroupValues
   * @type array
   * @default null
   */
  collapsedGroupValues = null;

  /**
   * @property groupedItems
   * @type object[]
   * @default null
   * @private
   */
  groupedItems = null;

  /**
   * @property visibleGroupedItems
   * @type object[]
   * @default null
   * @private
   */
  visibleGroupedItems = null;

  /**
   * Bound from [ModelsTable.useDataGrouping](Components.ModelsTable.html#property_useDataGrouping)
   *
   * @property useDataGrouping
   * @type boolean
   * @default null
   */
  useDataGrouping = null;

  /**
   * @protected
   * @property selectedGroupedItems
   * @type object[]
   * @default []
   */
  @intersect('selectedItems', 'groupedItems')
  selectedGroupedItems;

  /**
   * @protected
   * @property expandedGroupedItems
   * @type object[]
   * @default []
   */
  @intersect('expandedItems', 'groupedItems')
  expandedGroupedItems;

  /**
   * @property expandedGroupItems
   * @protected
   * @type object[]
   * @default []
   */
  @intersect('expandedItems', 'visibleGroupedItems')
  expandedGroupItems;

  /**
   * @property isFirstGroupedRow
   * @protected
   * @type number
   * @default false
   */
  @equal('index', 0)
  isFirstGroupedRow;

  /**
   * @protected
   * @property isSelected
   * @type boolean
   * @default false
   */
  @computed('selectedItems.[]', 'record')
  get isSelected() {
    return isArray(this.selectedItems) && this.selectedItems.includes(this.record);
  }

  /**
   * @protected
   * @property isExpanded
   * @type boolean
   * @default false
   */
  @computed('expandedItems.[]', 'record')
  get isExpanded() {
    return isArray(this.expandedItems) && this.expandedItems.includes(this.record);
  }

  /**
   * @property groupedValue
   * @type *
   * @default null
   */
  groupedValue = null;

  /**
   * Rows group size where current row is
   *
   * @property groupedLength
   * @type number
   * @default null
   */
  groupedLength = null;

  /**
   * Closure action [ModelsTable.clickOnRow](Components.ModelsTable.html#event_clickOnRow)
   *
   * @event clickOnRow
   */
  clickOnRow = null;

  /**
   * Closure action [ModelsTable.doubleClickOnRow](Components.ModelsTable.html#event_doubleClickOnRow)
   *
   * @event doubleClickOnRow
   */
  doubleClickOnRow = null;

  /**
   * Closure action [ModelsTable.hoverOnRow](Components.ModelsTable.html#event_hoverOnRow)
   *
   * @event hoverOnRow
   */
  hoverOnRow = null;

  /**
   * Closure action [ModelsTable.outRow](Components.ModelsTable.html#event_outRow)
   *
   * @event outRow
   */
  outRow = null;

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
   * Closure action [ModelsTable.toggleGroupedRows](Components.ModelsTable.html#event_toggleGroupedRows)
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows = null;

  /**
   * Closure action [ModelsTable.toggleGroupedRowsSelection](Components.ModelsTable.html#event_toggleGroupedRowsSelection)
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection = null;

  /**
   * Closure action [ModelsTable.toggleGroupedRowsExpands](Components.ModelsTable.html#event_toggleGroupedRowsExpands)
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
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
    this.clickOnRow(this.index, this.record);
  }

  doubleClick() {
    this.doubleClickOnRow(this.index, this.record);
  }

  enter() {
    this.hoverOnRow(this.index, this.record);
  }

  leave() {
    this.outRow(this.index, this.record);
  }

  didInsertElement() {
    this.element.addEventListener('mouseenter', this.handleMouseEnter);
    this.element.addEventListener('mouseleave', this.handleMouseLeave);
    super.didInsertElement(...arguments);
  }

  willDestroyElement() {
    this.element.removeEventListener('mouseenter', this.handleMouseEnter);
    this.element.removeEventListener('mouseleave', this.handleMouseLeave);
    super.willDestroyElement(...arguments);
  }

  /**
   * @protected
   * @event handleMouseEnter
   */
  @action
  handleMouseEnter() {
    this.enter();
  }

  /**
   * @protected
   * @event handleMouseLeave
   */
  @action
  handleMouseLeave() {
    this.leave();
  }

  /**
   * @protected
   * @event doToggleGroupedRows
   */
  @action
  doToggleGroupedRows() {
    this.toggleGroupedRows(this.groupedValue);
  }

  /**
   * Place a row into edit mode
   *
   * @protected
   * @event editRow
   */
  @action
  editRow() {
    set(this, 'isEditRow', true);
  }

  /**
   * Indicate a row has been saved, the row is no longer in edit mode
   *
   * @protected
   * @event saveRow
   */
  @action
  saveRow() {
    set(this, 'isEditRow', false);
  }

  /**
   * Indicate the edit on the row has been cancelled, the row is no longer in edit mode
   *
   * @protected
   * @event cancelEditRow
   */
  @action
  cancelEditRow() {
    set(this, 'isEditRow', false);
  }
}
