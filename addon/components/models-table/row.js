import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { isArray } from '@ember/array';
import { intersection } from '../../utils/emt/array';

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
 * * [models-table/row-select-checkbox](Components.ModelsTableRowSelectCheckbox.html) - component is used to toggle row selection
 * * [models-table/expand-toggle](Components.ModelsTableExpandToggle.html) - component is used to expand or collapse row
 *
 * Check own docs for each component to get detailed info.
 *
 * References to the following properties are yielded:
 *
 * * [isEditRow](Components.ModelsTableRow.html#property_isEditRow) - `true` if row in the Edit-mode
 * * [isFirstGroupedRow](Components.ModelsTableRow.html#property_isFirstGroupedRow) - `true` if row is first in the rows group (flag used when rows grouping is used)
 * * [rowspanForFirstCell](Component.ModelsTablRow.html#property_rowspanForFirstCell)
 *
 * References to the following actions are yielded:
 *
 * * [editRow](Components.ModelsTableRow.html#event_editRow) - action to set row to the Edit-mode
 * * [saveRow](Components.ModelsTableRow.html#event_saveRow) - action to save row and turn off Edit-mode
 * * [cancelEditRow](Components.ModelsTableRow.html#event_cancelEditRow) - action to cancel changes done to the row and turn off Edit-mode
 *
 * @class ModelsTableRow
 * @namespace Components
 * @extends Glimmer.Component
 */
export default class RowComponent extends Component {
  /**
   * @property rowSelectedClass
   * @protected
   * @type string
   * @default ''
   */
  get rowSelectedClass() {
    return this.isSelected ? this.args.themeInstance.selectedRow : '';
  }

  /**
   * @property rowExpandedClass
   * @protected
   * @type string
   * @default ''
   */
  get rowExpandedClass() {
    return this.isExpanded ? this.args.themeInstance.expandedRow : '';
  }

  /**
   * @property rowspanForFirstCell
   * @type number
   * @protected
   */
  get rowspanForFirstCell() {
    const expandedGroupItemsLength = this.expandedGroupItems
      ? this.expandedGroupItems.length
      : 0;
    const rowspan = this.visibleGroupedItems.length + expandedGroupItemsLength;
    return this.args.groupSummaryRowComponent ? rowspan + 1 : rowspan;
  }

  get visibleGroupedItems() {
    return this.args.visibleGroupedItems ?? [];
  }

  /**
   * @protected
   * @property selectedGroupedItems
   * @type object[]
   * @default []
   */
  get selectedGroupedItems() {
    return intersection(this.args.selectedItems, this.args.groupedItems);
  }

  /**
   * @protected
   * @property expandedGroupedItems
   * @type object[]
   * @default []
   */
  get expandedGroupedItems() {
    return intersection(this.args.expandedItems, this.args.groupedItems);
  }

  /**
   * @property expandedGroupItems
   * @protected
   * @type object[]
   * @default []
   */
  get expandedGroupItems() {
    return intersection(this.args.expandedItems, this.visibleGroupedItems);
  }

  /**
   * @property isFirstGroupedRow
   * @protected
   * @type number
   * @default false
   */
  get isFirstGroupedRow() {
    return this.args.index === 0;
  }

  /**
   * @protected
   * @property isSelected
   * @type boolean
   * @default false
   */
  get isSelected() {
    return (
      isArray(this.args.selectedItems) &&
      this.args.selectedItems.includes(this.args.record)
    );
  }

  /**
   * @protected
   * @property isExpanded
   * @type boolean
   * @default false
   */
  get isExpanded() {
    return (
      isArray(this.args.expandedItems) &&
      this.args.expandedItems.includes(this.args.record)
    );
  }

  /**
   * @protected
   * @property shouldShowGroupToggleCell
   * @type boolean
   * @default false
   */
  get shouldShowGroupToggleCell() {
    return (
      this.args.displayGroupedValueAs === 'column' &&
      this.isFirstGroupedRow &&
      this.args.useDataGrouping
    );
  }

  /**
   * Is the row in edit mode
   *
   * @property isEditRow
   * @type boolean
   * @default false
   */
  @tracked
  isEditRow = false;

  @action
  onClick() {
    this.args.clickOnRow(this.args.index, this.args.record);
    return false;
  }

  @action
  onDoubleClick() {
    this.args.doubleClickOnRow(this.args.index, this.args.record);
  }

  @action
  onEnter() {
    this.args.hoverOnRow(this.args.index, this.args.record);
  }

  @action
  onLeave() {
    this.args.outRow(this.args.index, this.args.record);
  }

  /**
   * @protected
   * @event doToggleGroupedRows
   */
  @action
  doToggleGroupedRows() {
    this.args.toggleGroupedRows(this.args.groupedValue);
    return false;
  }

  /**
   * Place a row into edit mode
   *
   * @protected
   * @event editRow
   */
  @action
  editRow() {
    this.isEditRow = true;
  }

  /**
   * Indicate a row has been saved, the row is no longer in edit mode
   *
   * @protected
   * @event saveRow
   */
  @action
  saveRow() {
    this.isEditRow = false;
  }

  /**
   * Indicate the edit on the row has been cancelled, the row is no longer in edit mode
   *
   * @protected
   * @event cancelEditRow
   */
  @action
  cancelEditRow() {
    this.isEditRow = false;
  }
}
