import Component from '@glimmer/component';
import { action } from '@ember/object';
import DefaultTheme from '../../../../services/emt-themes/default';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import { splitPropSortDirection } from '../../../../utils/emt/string';
import { ModelsTableDataItem } from '../../../models-table';

export interface RowSortingCellArgs {
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.themeInstance | RowSortingArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.selectedItems | RowSortingArgs.selectedItems}
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.expandedItems | RowSortingArgs.expandedItems}
   */
  expandedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link Core.ModelsTable.sortProperties | ModelsTable.sortProperties}
   */
  sortProperties: string[];
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.data | RowSortingArgs.data}
   */
  data: ModelsTableDataItem[];
  /**
   * Current column. One item from {@link Core.ModelsTable.processedColumns | ModelsTable.processedColumns}
   */
  column: ModelsTableColumn;
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.sort | RowSortingArgs.sort}
   *
   * @event sort
   */
  sort: (c: ModelsTableColumn) => void;
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.expandAllRows | RowSortingArgs.expandAllRows}
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.collapseAllRows | RowSortingArgs.collapseAllRows}
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.RowSortingArgs.toggleAllSelection | RowSortingArgs.toggleAllSelection}
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
}

/**
 * Sort-row cell used within {@link DefaultTheme.RowSorting}.
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       <Header.RowSorting as |RS|>
 *         {{#each MT.visibleProcessedColumns as |column|}}
 *           <RS.RowSortingCell @column={{column}} />
 *         {{/each}}
 *       </Header.RowSorting>
 *       {{! ... }}
 *     </Table.Header>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 * If {@link Core.ModelsTableColumn.componentForSortCell} is provided it is yielded with next properties and actions:
 *
 * * `column` - {@link DefaultTheme.RowSortingCellArgs.column}
 * * `selectedItems` - {@link DefaultTheme.RowSortingCellArgs.selectedItems}
 * * `expandedItems` - {@link DefaultTheme.RowSortingCellArgs.expandedItems}
 * * `data` - {@link DefaultTheme.RowSortingCellArgs.data}
 * * `themeInstance` - {@link DefaultTheme.RowSortingCellArgs.themeInstance}
 * * `expandAllRows` - {@link DefaultTheme.RowSortingCellArgs.expandAllRows}
 * * `collapseAllRows` - {@link DefaultTheme.RowSortingCellArgs.collapseAllRows}
 * * `sortColumn` - {@link onClick}
 * * `toggleAllSelection` - {@link DefaultTheme.RowSortingCellArgs.toggleAllSelection}
 *
 * References to the following actions are yielded:
 *
 * * {@link onClick | sortColumn} - sort column asc or desc
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       <Header.RowSorting as |RS|>
 *         {{#each MT.visibleProcessedColumns as |column|}}
 *           <RS.RowSortingCell @column={{column}} as |RowSortingCellContent|>
 *             <RowSortingCellContent/>
 *           </RS.RowSortingCell>
 *         {{/each}}
 *       </Header.RowSorting>
 *       {{! ... }}
 *     </Table.Header>
 *     {{! ... }}
 *   </MT.Table>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 */
export default class RowSortingCell extends Component<RowSortingCellArgs> {
  get sortingIndex(): number {
    const {
      args: {
        column: { sortField },
      },
    } = this;
    if (!sortField) {
      return -1;
    }
    return (
      this.args.sortProperties.findIndex((sortProp) => {
        const propName = splitPropSortDirection(sortProp)[0];
        return propName === sortField;
      }) + 1
    );
  }

  @action
  onClick(): boolean {
    if (this.args.column.useSorting) {
      this.args.sort(this.args.column);
    }
    return false;
  }
}
