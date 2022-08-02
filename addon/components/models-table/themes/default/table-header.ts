import Component from '@glimmer/component';
import {
  ColumnComponents,
  GroupedHeader,
  ModelsTableDataItem,
} from '../../../models-table';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../services/emt-themes/default';

export interface TableHeaderArgs {
  /**
   * Bound from [[DefaultTheme.TableArgs.noHeaderFilteringAndSorting | TableArgs.noHeaderFilteringAndSorting]]
   */
  noHeaderFilteringAndSorting: boolean;
  /**
   * Bound from [[DefaultTheme.TableArgs.groupedHeaders | TableArgs.groupedHeaders]]
   */
  groupedHeaders: GroupedHeader[][];
  /**
   * Bound from [[DefaultTheme.TableArgs.processedColumns | TableArgs.processedColumns]]
   */
  processedColumns: ModelsTableColumn[];
  /**
   * Bound from [[DefaultTheme.TableArgs.visibleProcessedColumns | TableArgs.visibleProcessedColumns]]
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from [[DefaultTheme.TableArgs.useFilteringByColumns | TableArgs.useFilteringByColumns]]
   */
  useFilteringByColumns: boolean;
  /**
   * Bound from [[DefaultTheme.TableArgs.themeInstance | TableArgs.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from [[DefaultTheme.TableArgs.data | TableArgs.data]]
   */
  data: ModelsTableDataItem[];
  /**
   * Bound from [[DefaultTheme.TableArgs.columnComponents | TableArgs.columnComponents]]
   */
  columnComponents?: ColumnComponents;
  /**
   * Bound from [[DefaultTheme.TableArgs.selectedItems | TableArgs.selectedItems]]
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from [[DefaultTheme.TableArgs.expandedItems | TableArgs.expandedItems]]
   */
  expandedItems: ModelsTableDataItem[];
  /**
   * Bound from [[Core.ModelsTable.sortProperties | ModelsTable.sortProperties]]
   */
  sortProperties: string[];
  /**
   * Bound from [[DefaultTheme.TableArgs.groupHeaderCellComponent | TableArgs.groupHeaderCellComponent]]
   */
  groupHeaderCellComponent?: Component;
  /**
   * Bound from [[DefaultTheme.TableArgs.useDataGrouping | TableArgs.useDataGrouping]]
   */
  useDataGrouping: boolean;
  /**
   * Bound from [[DefaultTheme.TableArgs.displayGroupedValueAs | TableArgs.displayGroupedValueAs]]
   */
  displayGroupedValueAs: string;
  /**
   * Bound from [[DefaultTheme.TableArgs.currentGroupingPropertyName | TableArgs.currentGroupingPropertyName]]
   */
  currentGroupingPropertyName?: string;
  /**
   * Bound from [[DefaultTheme.TableArgs.sort | TableArgs.sort]]
   *
   * @event sort
   */
  sort: (c: ModelsTableColumn) => void;
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
  /**
   * Bound from [[DefaultTheme.TableArgs.toggleAllSelection | TableArgs.toggleAllSelection]]
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
  /**
   * Bound from [[DefaultTheme.TableArgs.changeColumnFilter | TableArgs.changeColumnFilter]]
   *
   * @event changeColumnFilter
   */
  changeColumnFilter: (v: string, column: ModelsTableColumn) => void;
}

/**
 * Table header used within [[DefaultTheme.Table]].
 *
 * Component contains grouped headers (if provided) bound from [[DefaultTheme.TableArgs.groupedHeaders | TableArgs.groupedHeaders]], row with sorting buttons (usually this row also contains column headers) and row with filter boxes.
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header />
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
 *     <Table.Header as |Header|>
 *       {{#each groupedHeaders as |groupedHeader|}}
 *         <Header.GroupedHeader @groupedHeader={{groupedHeader}} as |GroupedHeader|>
 *           {{#each GroupedHeader.groupedHeader as |cell|}}
 *             <th colspan={{cell.colspan}} rowspan={{cell.rowspan}}>{{cell.title}}</th>
 *           {{/each}}
 *         </Header.GroupedHeader>
 *       {{/each}}
 *       <Header.RowSorting />
 *       <Header.RowFiltering />
 *     </Table.Header>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * `TableHeader` yields references to the following contextual components:
 *
 * * [[DefaultTheme.GroupedHeader | GroupedHeader]] - component for groupedHeaders. It should be used for each groupedHeaders item
 * * [[DefaultTheme.RowSorting | RowSorting]] - row with columns titles. Click on every cell will sort table data by selected column
 * * [[DefaultTheme.RowFiltering | RowFiltering]] - row with filter items. Every cell contains input or select-box
 * * [[DefaultTheme.RowSelectAllCheckbox | SelectAllRowsCheckbox]] - checkbox to select or deselect all rows
 * * [[DefaultTheme.ExpandAllToggle | ExpandAllRowsToggleCheckbox]] - buttons to expand and collapse all rows
 *
 * Check own docs for each component to get detailed info.
 */
export default class TableHeader extends Component<TableHeaderArgs> {}
