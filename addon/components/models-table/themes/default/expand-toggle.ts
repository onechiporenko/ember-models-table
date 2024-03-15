import Component from '@glimmer/component';
import { action } from '@ember/object';
import { type ExpandToggleSignature } from '../../../../interfaces/components/models-table/themes/default/expand-toggle-signature.interface';

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
export default class ExpandToggle extends Component<ExpandToggleSignature> {
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
