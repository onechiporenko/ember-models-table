import Component from '@glimmer/component';
import { action } from '@ember/object';
import DefaultTheme from '../../../../services/emt-themes/default';

export interface ExpandAllToggleArgs {
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.themeInstance | TableHeaderArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.expandAllRows | TableHeaderArgs.expandAllRows}
   *
   * @event expandAllRows
   */
  expandAllRows: () => void;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.collapseAllRows | TableHeaderArgs.collapseAllRows}
   *
   * @event collapseAllRows
   */
  collapseAllRows: () => void;
}

/**
 * Component to expand or collapse all rows
 *
 * Usage example:
 *
 * ```js
 * const columns = [
 *   {
 *     component: 'models-table/themes/default/expand-toggle',
 *     componentForFilterCell: 'models-table/expand-all-toggle',
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
 *   @multipleExpand={{true}}
 * />
 * ```
 */
export default class ExpandAllToggle extends Component<ExpandAllToggleArgs> {
  /**
   * @event doCollapseAllRows
   */
  @action
  protected doCollapseAllRows(): boolean {
    this.args.collapseAllRows();
    return false;
  }

  /**
   * @event doExpandAllRows
   */
  @action
  protected doExpandAllRows(): boolean {
    this.args.expandAllRows();
    return false;
  }
}
