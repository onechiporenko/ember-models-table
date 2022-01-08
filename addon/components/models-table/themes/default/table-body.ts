import Component from '@glimmer/component';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../services/emt-themes/default';
import {
  ColumnComponents,
  EmberNativeArray,
  RowInteractionClb,
  SelectOption,
} from '../../../models-table';

export interface TableBodyArgs {
  /**
   * Bound from `DefaultTheme.TableArgs.processedColumns.length`
   */
  columnsCount: number;
  /**
   * Bound from [[DefaultTheme.TableArgs.visibleContent | TableArgs.visibleContent]]
   */
  visibleContent: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.TableArgs.processedColumns | TableArgs.processedColumns]]
   */
  processedColumns: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.TableArgs.selectedItems | TableArgs.selectedItems]]
   */
  selectedItems: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.TableArgs.expandedItems | TableArgs.expandedItems]]
   */
  expandedItems: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.TableArgs.useDataGrouping | TableArgs.useDataGrouping]]
   */
  useDataGrouping: boolean;
  /**
   * Bound from [[DefaultTheme.TableArgs.groupingRowComponent | TableArgs.groupingRowComponent]]
   */
  groupingRowComponent?: Component;
  /**
   * Bound from [[DefaultTheme.TableArgs.groupSummaryRowComponent | TableArgs.groupSummaryRowComponent]]
   */
  groupSummaryRowComponent?: Component;
  /**
   * Bound from [[DefaultTheme.TableArgs.visibleProcessedColumns | TableArgs.visibleProcessedColumns]]
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from [[DefaultTheme.TableArgs.allColumnsAreHidden | TableArgs.allColumnsAreHidden]]
   */
  allColumnsAreHidden: boolean;
  /**
   * Bound from [[DefaultTheme.TableArgs.themeInstance | TableArgs.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from [[DefaultTheme.TableArgs.data | TableArgs.data]]
   */
  data: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.TableArgs.columnComponents | TableArgs.columnComponents]]
   */
  columnComponents?: ColumnComponents;
  /**
   * Bound from [[DefaultTheme.TableArgs.expandedRowComponent | TableArgs.expandedRowComponent]]
   */
  expandedRowComponent?: Component;
  /**
   * Bound from [[DefaultTheme.TableArgs.collapsedGroupValues | TableArgs.collapsedGroupValues]]
   */
  collapsedGroupValues?: string[];
  /**
   * Bound from [[DefaultTheme.TableArgs.currentGroupingPropertyName | TableArgs.currentGroupingPropertyName]]
   */
  currentGroupingPropertyName?: string;
  /**
   * Bound from [[DefaultTheme.TableArgs.dataGroupOptions | TableArgs.dataGroupOptions]]
   */
  dataGroupOptions?: SelectOption[];
  /**
   * Bound from [[DefaultTheme.TableArgs.groupedVisibleContentValuesOrder | TableArgs.groupedVisibleContentValuesOrder]]
   */
  groupedVisibleContentValuesOrder?: string[];
  /**
   * Bound from [[DefaultTheme.TableArgs.groupedVisibleContent | TableArgs.groupedVisibleContent]]
   */
  groupedVisibleContent?: EmberNativeArray[];
  /**
   * Bound from [[DefaultTheme.TableArgs.groupedArrangedContent | TableArgs.groupedArrangedContent]]
   */
  groupedArrangedContent?: EmberNativeArray[];
  /**
   * Bound from [[DefaultTheme.TableArgs.displayGroupedValueAs | TableArgs.displayGroupedValueAs]]
   */
  displayGroupedValueAs: string;
  /**
   * Bound from [[DefaultTheme.TableArgs.toggleGroupedRows | TableArgs.toggleGroupedRows]]
   *
   * @event toggleGroupedRows
   */
  toggleGroupedRows: (v: string) => void;
  /**
   * Bound from [[DefaultTheme.TableArgs.toggleGroupedRowsSelection | TableArgs.toggleGroupedRowsSelection]]
   *
   * @event toggleGroupedRowsSelection
   */
  toggleGroupedRowsSelection: (v: string) => void;
  /**
   * Bound from [[DefaultTheme.TableArgs.toggleGroupedRowsExpands | TableArgs.toggleGroupedRowsExpands]]
   *
   * @event toggleGroupedRowsExpands
   */
  toggleGroupedRowsExpands: (v: string) => void;
  /**
   * Bound from [[DefaultTheme.TableArgs.doubleClickOnRow | TableArgs.doubleClickOnRow]]
   *
   * @event doubleClickOnRow
   */
  doubleClickOnRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.TableArgs.hoverOnRow | TableArgs.hoverOnRow]]
   *
   * @event hoverOnRow
   */
  hoverOnRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.TableArgs.outRow | TableArgs.outRow]]
   *
   * @event outRow
   */
  outRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.TableArgs.expandRow | TableArgs.expandRow]]
   *
   * @event expandRow
   */
  expandRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.TableArgs.collapseRow | TableArgs.collapseRow]]
   *
   * @event collapseRow
   */
  collapseRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.TableArgs.clickOnRow | TableArgs.clickOnRow]]
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
  /**
   * Bound from [[DefaultTheme.TableArgs.expandAllRows | TableArgs.expandAllRows]]
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from [[DefaultTheme.TableArgs.collapseAllRows | TableArgs.collapseAllRows]]
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
}

/**
 * Table body used within [[DefaultTheme.Table]].
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
 *             {{#if (includes record MT.expandedItems)}} {{! includes can be imported from `ember-composable-helpers` }}
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
 * * [[DefaultTheme.ColumnsHidden | ColumnsHidden]] - component used when all columns are hidden and no data items are shown. Usually it contains a simple message
 * * [[DefaultTheme.Row | Row]] - component represents each table-body row with a single record.
 * * [[DefaultTheme.RowExpand | RowExpand]] - component with extra data shown when selected row is expanded
 * * [[DefaultTheme.RowGrouping | RowGrouping]] - component with grouped property value. Used to toggle row group
 * * [[DefaultTheme.NoData | NoData]] - component used when no data provided to the table. Usually it contains a simple message
 *
 * Check own docs for each component to get detailed info.
 */
export default class TableBody extends Component<TableBodyArgs> {}
