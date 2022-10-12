import Component from '@glimmer/component';
import {
  ColumnComponents,
  GroupedHeader,
  ModelsTableDataItem,
  RowInteractionClb,
  SelectOption,
} from '../../../models-table';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../services/emt-themes/default';

export interface TableArgs {
  /**
   * Bound from {@link Core.ModelsTable.noHeaderFilteringAndSorting | ModelsTable.noHeaderFilteringAndSorting}
   */
  noHeaderFilteringAndSorting: boolean;
  /**
   * Bound from {@link Core.ModelsTable.groupedHeaders | ModelsTable.groupedHeaders}
   */
  groupedHeaders?: GroupedHeader[][];
  /**
   * Bound from {@link Core.ModelsTable.visibleContent | ModelsTable.visibleContent}
   */
  visibleContent: ModelsTableDataItem[];
  /**
   * Bound from {@link Core.ModelsTable.selectedItems | ModelsTable.selectedItems}
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link Core.ModelsTable.expandedItems | ModelsTable.expandedItems}
   */
  expandedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link Core.ModelsTable.expandedRowComponent | ModelsTable.expandedRowComponent}
   */
  expandedRowComponent?: Component;
  /**
   * Bound from {@link Core.ModelsTable.processedColumns | ModelsTable.processedColumns}
   */
  processedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link Core.ModelsTable.visibleProcessedColumns | ModelsTable.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link Core.ModelsTable.useFilteringByColumns | ModelsTable.useFilteringByColumns}
   */
  useFilteringByColumns: boolean;
  /**
   * Bound from {@link Core.ModelsTable.allColumnsAreHidden | ModelsTable.allColumnsAreHidden}
   */
  allColumnsAreHidden: boolean;
  /**
   * Bound from {@link Core.ModelsTable.displayGroupedValueAs | ModelsTable.displayGroupedValueAs}
   */
  displayGroupedValueAs?: string;
  /**
   * Bound from {@link Core.ModelsTable.collapsedGroupValues | ModelsTable.collapsedGroupValues}
   */
  collapsedGroupValues?: string[];
  /**
   * Bound from {@link Core.ModelsTable.currentGroupingPropertyName | ModelsTable.currentGroupingPropertyName}
   */
  currentGroupingPropertyName?: string;
  /**
   * Bound from {@link Core.ModelsTable.groupingRowComponent | ModelsTable.groupingRowComponent}
   */
  groupingRowComponent?: Component;
  /**
   * Bound from {@link Core.ModelsTable.groupSummaryRowComponent | ModelsTable.groupSummaryRowComponent}
   */
  groupSummaryRowComponent?: Component;
  /**
   * Bound from {@link Core.ModelsTable.dataGroupOptions | ModelsTable.dataGroupOptions}
   */
  dataGroupOptions?: SelectOption[];
  /**
   * Bound from {@link Core.ModelsTable.groupedVisibleContentValuesOrder | ModelsTable.groupedVisibleContentValuesOrder}
   */
  groupedVisibleContentValuesOrder?: string[];
  /**
   * Bound from {@link Core.ModelsTable.groupedVisibleContent | ModelsTable.groupedVisibleContent}
   */
  groupedVisibleContent?: ModelsTableDataItem[][];
  /**
   * Bound from {@link Core.ModelsTable.groupedArrangedContent | ModelsTable.groupedArrangedContent}
   */
  groupedArrangedContent?: ModelsTableDataItem[][];
  /**
   * Bound from {@link Core.ModelsTable.groupHeaderCellComponent | ModelsTable.groupHeaderCellComponent}
   */
  groupHeaderCellComponent?: Component;
  /**
   * Bound from {@link Core.ModelsTable.useDataGrouping | ModelsTable.useDataGrouping}
   */
  useDataGrouping: boolean;
  /**
   * Bound from {@link Core.ModelsTable.sortProperties | ModelsTable.sortProperties}
   */
  sortProperties: string[];
  /**
   * Bound from {@link Core.ModelsTable.toggleGroupedRowsSelection | ModelsTable.toggleGroupedRowsSelection}
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection: (v: string) => void;
  /**
   * Bound from {@link Core.ModelsTable.toggleGroupedRowsExpands | ModelsTable.toggleGroupedRowsExpands}
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands: (v: string) => void;
  /**
   * Bound from {@link Core.ModelsTable.toggleGroupedRows | ModelsTable.toggleGroupedRows}
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows: (v: string) => void;
  /**
   * Bound from {@link Core.ModelsTable.clickOnRow | ModelsTable.clickOnRow}
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
  /**
   * Bound from {@link Core.ModelsTable.doubleClickOnRow | ModelsTable.doubleClickOnRow}
   *
   * @event doubleClickOnRow
   */
  doubleClickOnRow: RowInteractionClb;
  /**
   * Bound from {@link Core.ModelsTable.hoverOnRow | ModelsTable.hoverOnRow}
   *
   * @event hoverOnRow
   */
  hoverOnRow: RowInteractionClb;
  /**
   * Bound from {@link Core.ModelsTable.outRow | ModelsTable.outRow}
   *
   * @event outRow
   */
  outRow: RowInteractionClb;
  /**
   * Bound from {@link Core.ModelsTable.expandRow | ModelsTable.expandRow}
   *
   * @event expandRow
   */
  expandRow: RowInteractionClb;
  /**
   * Bound from {@link Core.ModelsTable.collapseRow | ModelsTable.collapseRow}
   *
   * @event collapseRow
   */
  collapseRow: RowInteractionClb;
  /**
   * Bound from {@link Core.ModelsTable.data | ModelsTable.data}
   */
  data: ModelsTableDataItem[];
  /**
   * Bound from {@link Core.ModelsTable.themeInstance | ModelsTable.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link Core.ModelsTable.columnComponents | ModelsTable.columnComponents}
   */
  columnComponents?: ColumnComponents;
  /**
   * Bound from {@link Core.ModelsTable.expandAllRows | ModelsTable.expandAllRows}
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from {@link Core.ModelsTable.collapseAllRows | ModelsTable.collapseAllRows}
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from {@link Core.ModelsTable.toggleAllSelection | ModelsTable.toggleAllSelection}
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
  /**
   * Bound from {@link Core.ModelsTable.changeColumnFilter | ModelsTable.changeColumnFilter}
   *
   * @event changeColumnFilter
   */
  changeColumnFilter: (v: string, column: ModelsTableColumn) => void;
  /**
   * Bound from {@link Core.ModelsTable.sort | ModelsTable.sort}
   *
   * @event sort
   */
  sort: (v: ModelsTableColumn) => void;
}

/**
 * Table with data used within {@link Core.ModelsTable | ModelsTable}.
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
 * * {@link DefaultTheme.TableHeader | Header} - table header. Component contains several rows like grouped headers, row with sorting buttons (usually with column titles) and row with filters for each column
 * * {@link DefaultTheme.TableBody | Body} - table body with data. Component contains current page with a subset or rows
 * * {@link DefaultTheme.TableFooter | Footer} - table footer. It's empty by default
 *
 * Check own docs for each component to get detailed info.
 */
export default class Table extends Component<TableArgs> {
  /**
   * @default false
   */
  protected get showTableFooter(): boolean {
    return this.args.visibleProcessedColumns.some(
      (pc) => !!pc.componentForFooterCell
    );
  }
}
