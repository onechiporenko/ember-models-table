import { ComponentLike } from '@glint/template';
import { ensureSafeComponent } from '@embroider/util';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { isArray } from '@ember/array';
import { TrackedArray } from 'tracked-built-ins';
import { intersection } from '../../../../utils/emt/array';
import { RowSignature } from '../../../../interfaces/components/models-table/themes/default/row-signature.interface';
import { RowGroupToggleSignature } from '../../../../interfaces/components/models-table/themes/default/row-group-toggle-signature.interface';
import { ModelsTableDataItem } from 'ember-models-table/types/models-table-data-item.type';

/**
 * Table body row is used within {@link DefaultTheme.TableBody | TableBody}.
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
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
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
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
 * `ModelsTableTableRow` yields references to the following contextual components:
 *
 * * {@link DefaultTheme.Cell} - component represents each row's cell
 * * {@link DefaultTheme.RowGroupToggle} - component is used to toggle rows group visibility
 * * {@link DefaultTheme.RowSelectCheckbox} - component is used to toggle row selection
 * * {@link DefaultTheme.ExpandToggle} - component is used to expand or collapse row
 *
 * Check own docs for each component to get detailed info.
 *
 * References to the following properties are yielded:
 *
 * * {@link isEditRow} - `true` if row in the Edit-mode
 * * {@link isFirstGroupedRow} - `true` if row is first in the rows group (flag used when rows grouping is used)
 * * {@link rowspanForFirstCell}
 * * {@link shouldShowGroupToggleCell}
 *
 * References to the following actions are yielded:
 *
 * * {@link editRow} - action to set row to the Edit-mode
 * * {@link saveRow} - action to save row and turn off Edit-mode
 * * {@link cancelEditRow} - action to cancel changes done to the row and turn off Edit-mode
 */
export default class Row extends Component<RowSignature> {
  /**
   * @default ''
   */
  protected get rowSelectedClass(): string {
    return this.isSelected ? this.args.themeInstance.selectedRow : '';
  }

  /**
   * @default ''
   */
  protected get rowExpandedClass(): string {
    return this.isExpanded ? this.args.themeInstance.expandedRow : '';
  }

  get rowspanForFirstCell(): number {
    const expandedGroupItemsLength = this.expandedGroupItems
      ? this.expandedGroupItems.length
      : 0;
    const rowspan = this.visibleGroupedItems.length + expandedGroupItemsLength;
    return this.args.groupSummaryRowComponent ? rowspan + 1 : rowspan;
  }

  get visibleGroupedItems(): ModelsTableDataItem[] {
    return this.args.visibleGroupedItems ?? new TrackedArray([]);
  }

  /**
   * @default []
   */
  get selectedGroupedItems(): any[] {
    return intersection(this.args.selectedItems, this.args.groupedItems);
  }

  /**
   * @default []
   */
  get expandedGroupedItems(): any[] {
    return intersection(this.args.expandedItems, this.args.groupedItems);
  }

  /**
   * @default []
   */
  get expandedGroupItems(): any[] {
    return intersection(this.args.expandedItems, this.visibleGroupedItems);
  }

  /**
   * @default false
   */
  get isFirstGroupedRow(): boolean {
    return this.args.index === 0;
  }

  /**
   * @default false
   */
  get isSelected(): boolean {
    return (
      isArray(this.args.selectedItems) &&
      this.args.selectedItems.includes(this.args.record)
    );
  }

  /**
   * @default false
   */
  get isExpanded(): boolean {
    return (
      isArray(this.args.expandedItems) &&
      this.args.expandedItems.includes(this.args.record)
    );
  }

  /**
   * @default false
   */
  get shouldShowGroupToggleCell(): boolean {
    return (
      this.args.displayGroupedValueAs === 'column' &&
      this.isFirstGroupedRow &&
      this.args.useDataGrouping
    );
  }

  protected get rowGroupToggleComponent():
    | ComponentLike<RowGroupToggleSignature>
    | ComponentLike {
    return this.args.groupingRowComponent
      ? ensureSafeComponent(this.args.groupingRowComponent, this)
      : ensureSafeComponent(
          this.args.themeInstance.rowGroupToggleComponent,
          this
        );
  }

  /**
   * Is the row in edit mode
   *
   * @default false
   */
  @tracked
  isEditRow = false;

  /**
   * @event onClick
   */
  @action
  protected onClick(): boolean {
    this.args.clickOnRow(this.args.index, this.args.record);
    return false;
  }

  /**
   * @event onDoubleClick
   */
  @action
  protected onDoubleClick(): void {
    this.args.doubleClickOnRow(this.args.index, this.args.record);
  }

  /**
   * @event onEnter
   */
  @action
  protected onEnter(): void {
    this.args.hoverOnRow(this.args.index, this.args.record);
  }

  /**
   * @event onLeave
   */
  @action
  protected onLeave(): void {
    this.args.outRow(this.args.index, this.args.record);
  }

  /**
   * @event doToggleGroupedRows
   */
  @action
  doToggleGroupedRows(): boolean {
    this.args.toggleGroupedRows(this.args.groupedValue ?? '');
    return false;
  }

  /**
   * Place a row into edit mode
   *
   * @event editRow
   */
  @action
  editRow(): void {
    this.isEditRow = true;
  }

  /**
   * Indicate a row has been saved, the row is no longer in edit mode
   *
   * @event saveRow
   */
  @action
  saveRow(): void {
    this.isEditRow = false;
  }

  /**
   * Indicate the edit on the row has been cancelled, the row is no longer in edit mode
   *
   * @event cancelEditRow
   */
  @action
  cancelEditRow(): void {
    this.isEditRow = false;
  }
}
