import Component from '@glimmer/component';
import { shownColumnsBody } from '../../../../utils/emt/macros';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../services/emt-themes/default';
import { ColumnComponents, ModelsTableDataItem } from '../../../models-table';

export interface RowFilteringArgs {
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.processedColumns | ModelsTableTableHeader.processedColumns}
   */
  processedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.visibleProcessedColumns | ModelsTableTableHeader.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.themeInstance | ModelsTableTableHeader.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.selectedItems | ModelsTableTableHeader.selectedItems}
   */
  selectedItems: any[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.expandedItems | ModelsTableTableHeader.expandedItems}
   */
  expandedItems: any[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.useDataGrouping | ModelsTableTableHeader.useDataGrouping}
   */
  useDataGrouping: boolean;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.displayGroupedValueAs | ModelsTableTableHeader.displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.columnComponents | ModelsTableTableHeader.columnComponents}
   */
  columnComponents?: ColumnComponents;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.data | ModelsTableTableHeader.data}
   */
  data: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.expandAllRows | ModelsTableTableHeader.expandAllRows}
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.collapseAllRows | ModelsTableTableHeader.collapseAllRows}
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.toggleAllSelection | ModelsTableTableHeader.toggleAllSelection}
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.changeColumnFilter | ModelsTableTableHeader.changeColumnFilter}
   *
   * @event changeColumnFilter
   */
  changeColumnFilter: (v: string, column: ModelsTableColumn) => void;
}

/**
 * Table header item used within {@link DefaultTheme.TableHeader | TableHeader}.
 *
 * Component generates tr with filter inputs in the separated cells. Filter for column may be as an input or select. Second one may have predefined set of options or may calculate list of options from table data. Last scenario doesn't work with {@link Core.ModelsTableServerPaginated}. Check properties {@link Core.ModelsTableColumn.disableFiltering}, {@link Core.ModelsTableColumn.filteredBy}, {@link Core.ModelsTableColumn.filterFunction}, {@link Core.ModelsTableColumn.filterPlaceholder}, {@link Core.ModelsTableColumn.filterWithSelect}, {@link Core.ModelsTableColumn.predefinedFilterOptions}.
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       <Header.RowFiltering>
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
 *     <Table.Header as |Header|>
 *       <Header.RowFiltering as |RF|>
 *         {{#each MT.visibleProcessedColumns as |column|}}
 *           <RF.RowFilteringCell @column={{column}} as |RowFilteringCellContent|>
 *             <RowFilteringCellContent/>
 *           </RF.RowFilteringCell>
 *         {{/each}}
 *       </Header.RowFiltering>
 *       {{! ... }}
 *     </Table.Header>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * ModelsTableRowFiltering yields references to the following contextual components:
 *
 * * {@link DefaultTheme.RowFilteringCell | RowFilteringCell} - component used as filter row cell. It shows input or select or custom component. Check filter-options for columns
 *
 * Check own docs for each component to get detailed info.
 *
 * References to the following properties are yielded:
 *
 * * {@link shouldAddExtraColumn} - determines if extra column should be added to the row in the `thead`. It happens when rows grouping is used and extra column with group values exists
 */
export default class RowFiltering extends Component<RowFilteringArgs> {
  protected get shownColumns(): ModelsTableColumn[] {
    return shownColumnsBody(this.args.processedColumns, 'colspanForFilterCell');
  }

  /**
   * @default false
   */
  get shouldAddExtraColumn(): boolean {
    return (
      this.args.displayGroupedValueAs === 'column' &&
      this.args.useDataGrouping &&
      !!this.args.visibleProcessedColumns.length
    );
  }
}
