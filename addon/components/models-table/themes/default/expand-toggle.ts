import Component from '@glimmer/component';
import { action } from '@ember/object';
import DefaultTheme from '../../../../services/emt-themes/default';
import { ModelsTableDataItem, RowInteractionClb } from '../../../models-table';

export interface ExpandToggleArgs {
  /**
   * Bound from {@link DefaultTheme.RowArgs.themeInstance | RowArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Row index (1 ... row count on the page)
   */
  index: number;
  /**
   * One item of {@link Core.ModelsTable.data | ModelsTable.data}
   */
  record: ModelsTableDataItem;
  /**
   * Bound from {@link DefaultTheme.Row.isExpanded | Row.isExpanded}
   */
  isExpanded: boolean;
  /**
   * Bound from {@link DefaultTheme.RowArgs.collapseRow | RowArgs.collapseRow}
   *
   * @event collapseRow
   */
  collapseRow: RowInteractionClb;
  /**
   * Bound from {@link DefaultTheme.RowArgs.expandRow | RowArgs.expandRow}
   *
   * @event expandRow
   */
  expandRow: RowInteractionClb;
}

/**
 * Component to expand or collapse any single row
 *
 * Usage example:
 *
 * ```js
 * const columns = [
 *   {
 *     component: 'models-table/themes/default/expand-toggle',
 *     mayBeHidden: false
 *   },
 *   {propertyName: 'firstName'},
 *   {propertyName: 'lastName'}
 * ];
 *
 * const data = [ ... ];
 * ```
 *
 * ```html
 * <ModelsTable
 *   @data={{this.data}}
 *   @columns={{this.columns}}
 *   @expandedRowComponent={{component "path/to/your-component"}}
 * />
 * ```
 */
export default class ExpandToggle extends Component<ExpandToggleArgs> {
  /**
   * @event doCollapseRow
   */
  @action
  protected doCollapseRow(e: Event): boolean {
    this.args.collapseRow(this.args.index, this.args.record);
    e?.stopPropagation?.();
    return false;
  }

  /**
   * @event doExpandRow
   */
  @action
  protected doExpandRow(e: Event): boolean {
    this.args.expandRow(this.args.index, this.args.record);
    e?.stopPropagation?.();
    return false;
  }
}
