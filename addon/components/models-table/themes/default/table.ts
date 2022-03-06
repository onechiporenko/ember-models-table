import Component from '@glimmer/component';
import { A } from '@ember/array';
import {
  ColumnComponents,
  GroupedHeader,
  EmberNativeArray,
  RowInteractionClb,
  SelectOption,
} from '../../../models-table';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../services/emt-themes/default';

export interface TableArgs {
  /**
   * Bound from [[Core.ModelsTable.noHeaderFilteringAndSorting | ModelsTable.noHeaderFilteringAndSorting]]
   */
  noHeaderFilteringAndSorting: boolean;
  /**
   * Bound from [[Core.ModelsTable.groupedHeaders | ModelsTable.groupedHeaders]]
   */
  groupedHeaders?: GroupedHeader[][];
  /**
   * Bound from [[Core.ModelsTable.visibleContent | ModelsTable.visibleContent]]
   */
  visibleContent: EmberNativeArray;
  /**
   * Bound from [[Core.ModelsTable.selectedItems | ModelsTable.selectedItems]]
   */
  selectedItems: EmberNativeArray;
  /**
   * Bound from [[Core.ModelsTable.expandedItems | ModelsTable.expandedItems]]
   */
  expandedItems: EmberNativeArray;
  /**
   * Bound from [[Core.ModelsTable.expandedRowComponent | ModelsTable.expandedRowComponent]]
   */
  expandedRowComponent?: Component;
  /**
   * Bound from [[Core.ModelsTable.processedColumns | ModelsTable.processedColumns]]
   */
  processedColumns: ModelsTableColumn[];
  /**
   * Bound from [[Core.ModelsTable.visibleProcessedColumns | ModelsTable.visibleProcessedColumns]]
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from [[Core.ModelsTable.useFilteringByColumns | ModelsTable.useFilteringByColumns]]
   */
  useFilteringByColumns: boolean;
  /**
   * Bound from [[Core.ModelsTable.allColumnsAreHidden | ModelsTable.allColumnsAreHidden]]
   */
  allColumnsAreHidden: boolean;
  /**
   * Bound from [[Core.ModelsTable.displayGroupedValueAs | ModelsTable.displayGroupedValueAs]]
   */
  displayGroupedValueAs?: string;
  /**
   * Bound from [[Core.ModelsTable.collapsedGroupValues | ModelsTable.collapsedGroupValues]]
   */
  collapsedGroupValues?: string[];
  /**
   * Bound from [[Core.ModelsTable.currentGroupingPropertyName | ModelsTable.currentGroupingPropertyName]]
   */
  currentGroupingPropertyName?: string;
  /**
   * Bound from [[Core.ModelsTable.groupingRowComponent | ModelsTable.groupingRowComponent]]
   */
  groupingRowComponent?: Component;
  /**
   * Bound from [[Core.ModelsTable.groupSummaryRowComponent | ModelsTable.groupSummaryRowComponent]]
   */
  groupSummaryRowComponent?: Component;
  /**
   * Bound from [[Core.ModelsTable.dataGroupOptions | ModelsTable.dataGroupOptions]]
   */
  dataGroupOptions?: SelectOption[];
  /**
   * Bound from [[Core.ModelsTable.groupedVisibleContentValuesOrder | ModelsTable.groupedVisibleContentValuesOrder]]
   */
  groupedVisibleContentValuesOrder?: string[];
  /**
   * Bound from [[Core.ModelsTable.groupedVisibleContent | ModelsTable.groupedVisibleContent]]
   */
  groupedVisibleContent?: EmberNativeArray[];
  /**
   * Bound from [[Core.ModelsTable.groupedArrangedContent | ModelsTable.groupedArrangedContent]]
   */
  groupedArrangedContent?: EmberNativeArray[];
  /**
   * Bound from [[Core.ModelsTable.groupHeaderCellComponent | ModelsTable.groupHeaderCellComponent]]
   */
  groupHeaderCellComponent?: Component;
  /**
   * Bound from [[Core.ModelsTable.useDataGrouping | ModelsTable.useDataGrouping]]
   */
  useDataGrouping: boolean;
  /**
   * Bound from [[Core.ModelsTable.sortProperties | ModelsTable.sortProperties]]
   */
  sortProperties: string[];
  /**
   * Bound from [[Core.ModelsTable.toggleGroupedRowsSelection | ModelsTable.toggleGroupedRowsSelection]]
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection: (v: string) => void;
  /**
   * Bound from [[Core.ModelsTable.toggleGroupedRowsExpands | ModelsTable.toggleGroupedRowsExpands]]
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands: (v: string) => void;
  /**
   * Bound from [[Core.ModelsTable.toggleGroupedRows | ModelsTable.toggleGroupedRows]]
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows: (v: string) => void;
  /**
   * Bound from [[Core.ModelsTable.clickOnRow | ModelsTable.clickOnRow]]
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
  /**
   * Bound from [[Core.ModelsTable.doubleClickOnRow | ModelsTable.doubleClickOnRow]]
   *
   * @event doubleClickOnRow
   */
  doubleClickOnRow: RowInteractionClb;
  /**
   * Bound from [[Core.ModelsTable.hoverOnRow | ModelsTable.hoverOnRow]]
   *
   * @event hoverOnRow
   */
  hoverOnRow: RowInteractionClb;
  /**
   * Bound from [[Core.ModelsTable.outRow | ModelsTable.outRow]]
   *
   * @event outRow
   */
  outRow: RowInteractionClb;
  /**
   * Bound from [[Core.ModelsTable.expandRow | ModelsTable.expandRow]]
   *
   * @event expandRow
   */
  expandRow: RowInteractionClb;
  /**
   * Bound from [[Core.ModelsTable.collapseRow | ModelsTable.collapseRow]]
   *
   * @event collapseRow
   */
  collapseRow: RowInteractionClb;
  /**
   * Bound from [[Core.ModelsTable.data | ModelsTable.data]]
   */
  data: EmberNativeArray;
  /**
   * Bound from [[Core.ModelsTable.themeInstance | ModelsTable.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from [[Core.ModelsTable.columnComponents | ModelsTable.columnComponents]]
   */
  columnComponents?: ColumnComponents;
  /**
   * Bound from [[Core.ModelsTable.expandAllRows | ModelsTable.expandAllRows]]
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from [[Core.ModelsTable.collapseAllRows | ModelsTable.collapseAllRows]]
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from [[Core.ModelsTable.toggleAllSelection | ModelsTable.toggleAllSelection]]
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
  /**
   * Bound from [[Core.ModelsTable.changeColumnFilter | ModelsTable.changeColumnFilter]]
   *
   * @event changeColumnFilter
   */
  changeColumnFilter: (v: string, column: ModelsTableColumn) => void;
  /**
   * Bound from [[Core.ModelsTable.sort | ModelsTable.sort]]
   *
   * @event sort
   */
  sort: (v: ModelsTableColumn) => void;
}

/**
 * Table with data used within [[Core.ModelsTable | ModelsTable]].
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table />
 *   {{! ... }}
 * </ModelsTable>
 * ```
 *
 * Usage example with a block context:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header />
 *     <Table.Body />
 *     <Table.Footer />
 *   </MT.Table>
 * </ModelsTable>
 * ```
 *
 * ModelsTableTable yields references to the following contextual components:
 *
 * * [[DefaultTheme.TableHeader | Header]] - table header. Component contains several rows like grouped headers, row with sorting buttons (usually with column titles) and row with filters for each column
 * * [[DefaultTheme.TableBody | Body]] - table body with data. Component contains current page with a subset or rows
 * * [[DefaultTheme.TableFooter | Footer]] - table footer. It's empty by default
 *
 * Check own docs for each component to get detailed info.
 */
export default class Table extends Component<TableArgs> {
  /**
   * @default false
   */
  protected get showTableFooter(): boolean {
    return A(this.args.visibleProcessedColumns).isAny('componentForFooterCell');
  }
}
