import Component from '@glimmer/component';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../services/emt-themes/default';
import {
  ColumnComponents,
  ModelsTableDataItem,
  RowInteractionClb,
  SelectOption,
} from '../../../models-table';

export interface TableBodyArgs {
  /**
   * Bound from `DefaultTheme.TableArgs.processedColumns.length`
   */
  columnsCount: number;
  /**
   * Bound from {@link DefaultTheme.TableArgs.visibleContent | TableArgs.visibleContent}
   */
  visibleContent: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.processedColumns | TableArgs.processedColumns}
   */
  processedColumns: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.selectedItems | TableArgs.selectedItems}
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.expandedItems | TableArgs.expandedItems}
   */
  expandedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.useDataGrouping | TableArgs.useDataGrouping}
   */
  useDataGrouping: boolean;
  /**
   * Bound from {@link DefaultTheme.TableArgs.groupingRowComponent | TableArgs.groupingRowComponent}
   */
  groupingRowComponent?: Component;
  /**
   * Bound from {@link DefaultTheme.TableArgs.groupSummaryRowComponent | TableArgs.groupSummaryRowComponent}
   */
  groupSummaryRowComponent?: Component;
  /**
   * Bound from {@link DefaultTheme.TableArgs.visibleProcessedColumns | TableArgs.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.allColumnsAreHidden | TableArgs.allColumnsAreHidden}
   */
  allColumnsAreHidden: boolean;
  /**
   * Bound from {@link DefaultTheme.TableArgs.themeInstance | TableArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link DefaultTheme.TableArgs.data | TableArgs.data}
   */
  data: any[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.columnComponents | TableArgs.columnComponents}
   */
  columnComponents?: ColumnComponents;
  /**
   * Bound from {@link DefaultTheme.TableArgs.expandedRowComponent | TableArgs.expandedRowComponent}
   */
  expandedRowComponent?: Component;
  /**
   * Bound from {@link DefaultTheme.TableArgs.collapsedGroupValues | TableArgs.collapsedGroupValues}
   */
  collapsedGroupValues?: string[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.currentGroupingPropertyName | TableArgs.currentGroupingPropertyName}
   */
  currentGroupingPropertyName?: string;
  /**
   * Bound from {@link DefaultTheme.TableArgs.dataGroupOptions | TableArgs.dataGroupOptions}
   */
  dataGroupOptions?: SelectOption[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.groupedVisibleContentValuesOrder | TableArgs.groupedVisibleContentValuesOrder}
   */
  groupedVisibleContentValuesOrder?: string[];
  /**
   * Bound from {@link DefaultTheme.TableArgs.groupedVisibleContent | TableArgs.groupedVisibleContent}
   */
  groupedVisibleContent?: any[][];
  /**
   * Bound from {@link DefaultTheme.TableArgs.groupedArrangedContent | TableArgs.groupedArrangedContent}
   */
  groupedArrangedContent?: any[][];
  /**
   * Bound from {@link DefaultTheme.TableArgs.displayGroupedValueAs | TableArgs.displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Bound from {@link DefaultTheme.TableArgs.toggleGroupedRows | TableArgs.toggleGroupedRows}
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows: (v: string) => void;
  /**
   * Bound from {@link DefaultTheme.TableArgs.toggleGroupedRowsSelection | TableArgs.toggleGroupedRowsSelection}
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection: (v: string) => void;
  /**
   * Bound from {@link DefaultTheme.TableArgs.toggleGroupedRowsExpands | TableArgs.toggleGroupedRowsExpands}
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands: (v: string) => void;
  /**
   * Bound from {@link DefaultTheme.TableArgs.doubleClickOnRow | TableArgs.doubleClickOnRow}
   *
   * @event doubleClickOnRow
   */
  doubleClickOnRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableArgs.hoverOnRow | TableArgs.hoverOnRow}
   *
   * @event hoverOnRow
   */
  hoverOnRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableArgs.outRow | TableArgs.outRow}
   *
   * @event outRow
   */
  outRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableArgs.expandRow | TableArgs.expandRow}
   *
   * @event expandRow
   */
  expandRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableArgs.collapseRow | TableArgs.collapseRow}
   *
   * @event collapseRow
   */
  collapseRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableArgs.clickOnRow | TableArgs.clickOnRow}
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.TableArgs.expandAllRows | TableArgs.expandAllRows}
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.TableArgs.collapseAllRows | TableArgs.collapseAllRows}
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
}

/**
 * Table body used within {@link DefaultTheme.Table}.
 *
 * Component contains rows for each record, row expands (if provided) and components for situations with missing data or when all columns are hidden.
 *
 Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Body>
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
 *       {{#if MT.allColumnsAreHidden}}
 *         <Body.ColumnsHidden />
 *       {{else}}
 *         {{#if MT.visibleContent.length}}
 *           {{#each MT.visibleContent as |record index|}}
 *             <Body.Row @record={{record}} @index={{index}} />
 *             {{#if (contains record MT.expandedItems)}} {{! contains can be imported from `ember-composable-helpers` }}
 *               <Body.RowExpand @record={{record}} @index={{index}} />
 *             {{/if}}
 *           {{/each}}
 *         {{else}}
 *           <Body.NoData />
 *         {{/if}}
 *       {{/if}}
 *     </Table.Body>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * `TableBody` yields references to the following contextual components:
 *
 * * {@link DefaultTheme.ColumnsHidden | ColumnsHidden} - component used when all columns are hidden and no data items are shown. Usually it contains a simple message
 * * {@link DefaultTheme.Row | Row} - component represents each table-body row with a single record.
 * * {@link DefaultTheme.RowExpand | RowExpand} - component with extra data shown when selected row is expanded
 * * {@link DefaultTheme.RowGrouping | RowGrouping} - component with grouped property value. Used to toggle row group
 * * {@link DefaultTheme.NoData | NoData} - component used when no data provided to the table. Usually it contains a simple message
 *
 * Check own docs for each component to get detailed info.
 */
export default class TableBody extends Component<TableBodyArgs> {}
