import Component from '@glimmer/component';
import { action } from '@ember/object';
import { ExpandAllToggleSignature } from '../../../../interfaces/components/models-table/themes/default/expand-all-toggle-signature.interface';

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
export default class ExpandAllToggle extends Component<ExpandAllToggleSignature> {
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
