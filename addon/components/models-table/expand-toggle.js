import Component from '@glimmer/component';
import { action } from '@ember/object';

/**
 * Component to expand or collapse any single row
 *
 * Usage example:
 *
 * ```js
 * const columns = [
 *   {
 *     component: 'models-table/expand-toggle',
 *     mayBeHidden: false
 *   },
 *   {propertyName: 'firstName'},
 *   {propertyName: 'lastName'}
 * ];
 *
 * const data = [ ... ];
 * ```
 *
 * ```hbs
 * <ModelsTable
 *   @data={{data}}
 *   @columns={{columns}}
 *   @expandedRowComponent={{component "path/to/your-component"}}
 * />
 * ```
 *
 * @class ModelsTableExpandToggle
 * @extends Glimmer.Component
 * @namespace Components
 */
export default class ExpandToggleComponent extends Component {
  /**
   * @event doCollapseRow
   * @param {Event} e
   * @protected
   */
  @action
  doCollapseRow(e) {
    this.args.collapseRow(this.args.index, this.args.record);
    e?.stopPropagation?.();
    return false;
  }

  /**
   * @event doExpandRow
   * @param {Event} e
   * @protected
   */
  @action
  doExpandRow(e) {
    this.args.expandRow(this.args.index, this.args.record);
    e?.stopPropagation?.();
    return false;
  }
}
