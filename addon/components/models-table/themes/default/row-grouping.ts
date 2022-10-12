import { ensureSafeComponent } from '@embroider/util';
import Component from '@glimmer/component';
import { intersection } from '../../../../utils/emt/array';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import { ColumnComponents, ModelsTableDataItem } from '../../../models-table';
import DefaultTheme from '../../../../services/emt-themes/default';

export interface RowGroupingArgs {
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.groupingRowComponent | TableBodyArgs.groupingRowComponent}
   */
  groupingRowComponent?: Component;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.currentGroupingPropertyName | TableBodyArgs.currentGroupingPropertyName}
   */
  currentGroupingPropertyName?: string;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.visibleProcessedColumns | TableBodyArgs.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.displayGroupedValueAs | TableBodyArgs.displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.columnComponents | TableBodyArgs.columnComponents}
   */
  columnComponents: ColumnComponents;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.selectedItems | TableBodyArgs.selectedItems}
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.expandedItems | TableBodyArgs.expandedItems}
   */
  expandedItems: ModelsTableDataItem[];
  /**
   * Subset of {@link DefaultTheme.TableBodyArgs.groupedArrangedContent | TableBodyArgs.groupedArrangedContent} with `currentGroupingPropertyName` equal to `groupedValue`
   */
  groupedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.themeInstance | TableBodyArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Additional colspan needed in some cases. Value is set in the parent component's template
   */
  additionalColspan?: number;
  /**
   * Length of `groupedItems`
   */
  groupedLength: number;
  /**
   * Subset of {@link DefaultTheme.TableBodyArgs.groupedVisibleContent | TableBodyArgs.groupedVisibleContent}
   */
  visibleGroupedItems: any[];
  /**
   * `true` if group with `groupedValue` is collapsed
   */
  groupIsCollapsed?: boolean;
  /**
   * Value of `currentGroupingPropertyName` for current group
   */
  groupedValue: string;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.toggleGroupedRows | TableBodyArgs.toggleGroupedRows}
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows: (v: string) => void;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.toggleGroupedRowsSelection | TableBodyArgs.toggleGroupedRowsSelection}
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection: (v: string) => void;
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.toggleGroupedRowsExpands | TableBodyArgs.toggleGroupedRowsExpands}
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands: (v: string) => void;
}

/**
 * Component-row with grouped property value. Used to toggle rows group with needed property value equal to the grouping value.
 *
 * You must not override this component and should use {@link Core.ModelsTable.groupingRowComponent | ModelsTable.groupingRowComponent}.
 *
 * By default {@link DefaultTheme.RowGroupToggle} is used
 */
export default class RowGrouping extends Component<RowGroupingArgs> {
  protected get cellColspan(): number {
    return (
      this.args.visibleProcessedColumns.length +
      (this.args.displayGroupedValueAs === 'row' ? 0 : 1) +
      Number(this.args.additionalColspan || 0)
    );
  }

  protected get selectedGroupedItems(): any[] {
    return intersection(this.args.selectedItems, this.args.groupedItems);
  }

  protected get expandedGroupedItems(): any[] {
    return intersection(this.args.expandedItems, this.args.groupedItems);
  }

  protected get rowGroupToggleComponent(): unknown {
    return this.args.groupingRowComponent
      ? ensureSafeComponent(this.args.groupingRowComponent, this)
      : ensureSafeComponent(
          this.args.themeInstance.rowGroupToggleComponent,
          this
        );
  }
}
