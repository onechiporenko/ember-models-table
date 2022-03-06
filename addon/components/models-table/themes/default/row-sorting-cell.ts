import Component from '@glimmer/component';
import { action } from '@ember/object';
import DefaultTheme from '../../../../services/emt-themes/default';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import { EmberNativeArray } from '../../../models-table';
import { splitPropSortDirection } from '../../../../utils/emt/string';

export interface RowSortingCellArgs {
  /**
   * Bound from [[DefaultTheme.RowSortingArgs.themeInstance | RowSortingArgs.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from [[DefaultTheme.RowSortingArgs.selectedItems | RowSortingArgs.selectedItems]]
   */
  selectedItems: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.RowSortingArgs.expandedItems | RowSortingArgs.expandedItems]]
   */
  expandedItems: EmberNativeArray;
  /**
   * Bound from [[Core.ModelsTable.sortProperties | ModelsTable.sortProperties]]
   */
  sortProperties: string[];
  /**
   * Bound from [[DefaultTheme.RowSortingArgs.data | RowSortingArgs.data]]
   */
  data: EmberNativeArray;
  /**
   * Current column. One item from [[Core.ModelsTable.processedColumns | ModelsTable.processedColumns]]
   */
  column: ModelsTableColumn;
  /**
   * Bound from [[DefaultTheme.RowSortingArgs.sort | RowSortingArgs.sort]]
   *
   * @event sort
   */
  sort: (c: ModelsTableColumn) => void;
  /**
   * Bound from [[DefaultTheme.RowSortingArgs.expandAllRows | RowSortingArgs.expandAllRows]]
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from [[DefaultTheme.RowSortingArgs.collapseAllRows | RowSortingArgs.collapseAllRows]]
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from [[DefaultTheme.RowSortingArgs.toggleAllSelection | RowSortingArgs.toggleAllSelection]]
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
}

/**
 * Sort-row cell used within [[DefaultTheme.RowSorting]].
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
 * If [[Core.ModelsTableColumn.componentForSortCell]] is provided it is yielded with next properties and actions:
 *
 * * `column` - [[DefaultTheme.RowSortingCellArgs.column]]
 * * `selectedItems` - [[DefaultTheme.RowSortingCellArgs.selectedItems]]
 * * `expandedItems` - [[DefaultTheme.RowSortingCellArgs.expandedItems]]
 * * `data` - [[DefaultTheme.RowSortingCellArgs.data]]
 * * `themeInstance` - [[DefaultTheme.RowSortingCellArgs.themeInstance]]
 * * `expandAllRows` - [[DefaultTheme.RowSortingCellArgs.expandAllRows]]
 * * `collapseAllRows` - [[DefaultTheme.RowSortingCellArgs.collapseAllRows]]
 * * `sortColumn` - [[onClick]]
 * * `toggleAllSelection` - [[DefaultTheme.RowSortingCellArgs.toggleAllSelection]]
 *
 * References to the following actions are yielded:
 *
 * * [[onClick | sortColumn]] - sort column asc or desc
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
