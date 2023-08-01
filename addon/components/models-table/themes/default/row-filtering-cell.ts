import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import { RowFilteringCellSignature } from '../../../../interfaces/components/models-table/themes/default/row-filtering-cell-signature.interface';

/**
 * Filter-row cell used within {@link DefaultTheme.RowFiltering}.
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
 * If {@link Core.ModelsTableColumn.componentForFilterCell} is provided it is yielded with next properties and actions:
 *
 * * `column` - {@link DefaultTheme.RowFilteringCellArgs.column}
 * * `selectedItems` - {@link DefaultTheme.RowFilteringCellArgs.selectedItems}
 * * `expandedItems` - {@link DefaultTheme.RowFilteringCellArgs.expandedItems}
 * * `data` - {@link DefaultTheme.RowFilteringCellArgs.data}
 * * `themeInstance` - {@link DefaultTheme.RowFilteringCellArgs.themeInstance}
 * * `expandAllRows` - {@link DefaultTheme.RowFilteringCellArgs.expandAllRows}
 * * `collapseAllRows` - {@link DefaultTheme.RowFilteringCellArgs.collapseAllRows}
 * * `toggleAllSelection` - {@link DefaultTheme.RowFilteringCellArgs.toggleAllSelection}
 * * `updateColumnFilter` - {@link updateColumnFilter}
 * * `clearColumnFilter` - {@link clearColumnFilter}
 *
 * References to the following actions are yielded:
 *
 * * {@link updateColumnFilter} - update filter for current column
 * * {@link clearColumnFilter} - clear filter for current column
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
export default class RowFilteringCell extends Component<RowFilteringCellSignature> {
  protected elementId = guidFor(this);

  protected get filteringClassName(): string {
    return this.args.column.useFilter
      ? ''
      : this.args.themeInstance.theadCellNoFiltering;
  }

  protected get inputId(): string {
    return `${this.elementId}-column-filter`;
  }

  protected getNewFilterValueFromEvent(e: Event | number | string): string {
    return typeof e === 'object'
      ? ((e as Event).target as HTMLInputElement).value
      : `${e}`;
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
  updateColumnFilter(e: Event | number | string): boolean {
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
