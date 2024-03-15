import Component from '@glimmer/component';
import { action } from '@ember/object';
import { splitPropSortDirection } from '../../../../utils/emt/split-prop-sort-direction.function';
import { type RowSortingCellSignature } from '../../../../interfaces/components/models-table/themes/default/row-sorting-cell-signature.interface';

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
export default class RowSortingCell extends Component<RowSortingCellSignature> {
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
