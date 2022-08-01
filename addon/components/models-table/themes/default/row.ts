import { ensureSafeComponent } from '@embroider/util';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { isArray } from '@ember/array';
import { TrackedArray } from 'tracked-built-ins';
import { intersection } from '../../../../utils/emt/array';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import {
  ColumnComponents,
  ModelsTableDataItem,
  RowInteractionClb,
} from '../../../models-table';
import DefaultTheme from '../../../../services/emt-themes/default';

export interface RowArgs {
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.visibleProcessedColumns | TableBodyArgs.visibleProcessedColumns]]
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.groupingRowComponent | TableBodyArgs.groupingRowComponent]]
   */
  groupingRowComponent?: Component;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.groupSummaryRowComponent | TableBodyArgs.groupSummaryRowComponent]]
   */
  groupSummaryRowComponent?: Component;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.collapsedGroupValues | TableBodyArgs.collapsedGroupValues]]
   */
  collapsedGroupValues?: string[];
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.currentGroupingPropertyName | TableBodyArgs.currentGroupingPropertyName]]
   */
  currentGroupingPropertyName?: string;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.columnComponents | TableBodyArgs.columnComponents]]
   */
  columnComponents: ColumnComponents;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.themeInstance | TableBodyArgs.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.selectedItems | TableBodyArgs.selectedItems]]
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.expandedItems | TableBodyArgs.expandedItems]]
   */
  expandedItems: ModelsTableDataItem[];
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.useDataGrouping | TableBodyArgs.useDataGrouping]]
   */
  useDataGrouping: boolean;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.displayGroupedValueAs | TableBodyArgs.displayGroupedValueAs]]
   */
  displayGroupedValueAs: string;
  /**
   * Subset of [[DefaultTheme.TableBodyArgs.groupedVisibleContent | TableBodyArgs.groupedVisibleContent]]
   */
  visibleGroupedItems?: ModelsTableDataItem[];
  /**
   * Subset of [[DefaultTheme.TableBodyArgs.groupedArrangedContent | TableBodyArgs.groupedArrangedContent]] with `currentGroupingPropertyName` equal to `groupedValue`
   */
  groupedItems: ModelsTableDataItem[];
  /**
   * Value of `currentGroupingPropertyName` for current group
   */
  groupedValue: string;
  /**
   * One item of [[Core.ModelsTable.data | ModelsTable.data]]
   */
  record: ModelsTableDataItem;
  /**
   * Row index (1 ... rows count on the page)
   */
  index: number;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.doubleClickOnRow | TableBodyArgs.doubleClickOnRow]]
   *
   * @event doubleClickOnRow
   */
  doubleClickOnRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.hoverOnRow | TableBodyArgs.hoverOnRow]]
   *
   * @event hoverOnRow
   */
  hoverOnRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.outRow | TableBodyArgs.outRow]]
   *
   * @event outRow
   */
  outRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.expandRow | TableBodyArgs.expandRow]]
   *
   * @event expandRow
   */
  expandRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.collapseRow | TableBodyArgs.collapseRow]]
   *
   * @event collapseRow
   */
  collapseRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.clickOnRow | TableBodyArgs.clickOnRow]]
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.expandAllRows | TableBodyArgs.expandAllRows]]
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.collapseAllRows | TableBodyArgs.collapseAllRows]]
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.toggleGroupedRows | TableBodyArgs.toggleGroupedRows]]
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows: (v: string) => void;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.toggleGroupedRowsSelection | TableBodyArgs.toggleGroupedRowsSelection]]
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection: (v: string) => void;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.toggleGroupedRowsExpands | TableBodyArgs.toggleGroupedRowsExpands]]
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands: (v: string) => void;
}

/**
 * Table body row is used within [[DefaultTheme.TableBody | TableBody]].
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
 * * [[DefaultTheme.Cell]] - component represents each row's cell
 * * [[DefaultTheme.RowGroupToggle]] - component is used to toggle rows group visibility
 * * [[DefaultTheme.RowSelectCheckbox]] - component is used to toggle row selection
 * * [[DefaultTheme.ExpandToggle]] - component is used to expand or collapse row
 *
 * Check own docs for each component to get detailed info.
 *
 * References to the following properties are yielded:
 *
 * * [[isEditRow]] - `true` if row in the Edit-mode
 * * [[isFirstGroupedRow]] - `true` if row is first in the rows group (flag used when rows grouping is used)
 * * [[rowspanForFirstCell]]
 * * [[shouldShowGroupToggleCell]]
 *
 * References to the following actions are yielded:
 *
 * * [[editRow]] - action to set row to the Edit-mode
 * * [[saveRow]] - action to save row and turn off Edit-mode
 * * [[cancelEditRow]] - action to cancel changes done to the row and turn off Edit-mode
 */
export default class Row extends Component<RowArgs> {
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

  get visibleGroupedItems(): any[] {
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

  protected get rowGroupToggleComponent(): unknown {
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
    this.args.toggleGroupedRows(this.args.groupedValue);
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
