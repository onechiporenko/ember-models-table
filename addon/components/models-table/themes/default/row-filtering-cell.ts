import Component from '@glimmer/component';
import { action } from '@ember/object';
import DefaultTheme from '../../../../services/emt-themes/default';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import { EmberNativeArray } from '../../../models-table';

export interface RowFilteringCellArgs {
  /**
   * Bound from [[DefaultTheme.RowFilteringArgs.themeInstance | RowFilteringArgs.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Current column. One item from [[Core.ModelsTable.processedColumns | ModelsTable.processedColumns]]
   */
  column: ModelsTableColumn;
  /**
   * Bound from [[DefaultTheme.RowFilteringArgs.data | RowFilteringArgs.data]]
   */
  data: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.RowFilteringArgs.selectedItems | RowFilteringArgs.selectedItems]]
   */
  selectedItems: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.RowFilteringArgs.expandedItems | RowFilteringArgs.expandedItems]]
   */
  expandedItems: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.RowFilteringArgs.expandAllRows | RowFilteringArgs.expandAllRows]]
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from [[DefaultTheme.RowFilteringArgs.collapseAllRows | RowFilteringArgs.collapseAllRows]]
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
  /**
   * Bound from [[DefaultTheme.RowFilteringArgs.toggleAllSelection | RowFilteringArgs.toggleAllSelection]]
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
  /**
   * Bound from [[DefaultTheme.RowFilteringArgs.changeColumnFilter | RowFilteringArgs.changeColumnFilter]]
   *
   * @event changeColumnFilter
   */
  changeColumnFilter: (v: string, column: ModelsTableColumn) => void;
}

/**
 * Filter-row cell used within [[DefaultTheme.RowFiltering]].
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       <Header.RowFiltering as |RF|>
 *         {{#each MT.visibleProcessedColumns as |column|}}
 *           <RF.RowFilteringCell @column={{column}} />
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
 * If [[Core.ModelsTableColumn.componentForFilterCell]] is provided it is yielded with next properties and actions:
 *
 * * `column` - [[DefaultTheme.RowFilteringCellArgs.column]]
 * * `selectedItems` - [[DefaultTheme.RowFilteringCellArgs.selectedItems]]
 * * `expandedItems` - [[DefaultTheme.RowFilteringCellArgs.expandedItems]]
 * * `data` - [[DefaultTheme.RowFilteringCellArgs.data]]
 * * `themeInstance` - [[DefaultTheme.RowFilteringCellArgs.themeInstance]]
 * * `expandAllRows` - [[DefaultTheme.RowFilteringCellArgs.expandAllRows]]
 * * `collapseAllRows` - [[DefaultTheme.RowFilteringCellArgs.collapseAllRows]]
 * * `toggleAllSelection` - [[DefaultTheme.RowFilteringCellArgs.toggleAllSelection]]
 * * `updateColumnFilter` - [[updateColumnFilter]]
 * * `clearColumnFilter` - [[clearColumnFilter]]
 *
 * References to the following actions are yielded:
 *
 * * [[updateColumnFilter]] - update filter for current column
 * * [[clearColumnFilter]] - clear filter for current column
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Table as |Table|>
 *     <Table.Header as |Header|>
 *       <Header.RowFiltering as |RF|>
 *         {{#each MT.visibleProcessedColumns as |column|}}
 *           <RF.RowFilteringCell @column={{column}} as |RFC|>
 *             <RFC.CellContent/>
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
 */
export default class RowFilteringCell extends Component<RowFilteringCellArgs> {
  protected get filteringClassName(): string {
    return this.args.column.useFilter
      ? ''
      : this.args.themeInstance.theadCellNoFiltering;
  }

  protected getNewFilterValueFromEvent(e: Event | string): string {
    return typeof e === 'object' ? (<HTMLInputElement>e.target).value : e;
  }

  /**
   * @event noop
   */
  @action
  protected noop(e: Event): void {
    e?.stopPropagation?.();
  }

  /**
   * @event updateColumnFilter
   */
  @action
  updateColumnFilter(e: Event | string): boolean {
    const newFilterValue = this.getNewFilterValueFromEvent(e);
    this.args.changeColumnFilter(newFilterValue, this.args.column);
    return false;
  }

  /**
   * @event clearColumnFilter
   */
  @action
  clearColumnFilter(e: Event): boolean {
    e?.stopPropagation?.();
    this.args.changeColumnFilter('', this.args.column);
    return false;
  }
}
