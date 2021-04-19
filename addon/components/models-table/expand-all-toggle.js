import Component from '@glimmer/component';
import { action } from '@ember/object';

/**
 * Component to expand or collapse all rows
 *
 * Usage example:
 *
 * ```js
 * const columns = [
 *   {
 *     component: 'models-table/expand-toggle',
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
 * ```hbs
 * <ModelsTable
 *   @data={{data}}
 *   @columns={{columns}}
 *   @multipleExpand={{true}}
 *   @expandedRowComponent={{component "path/to/your-component"}}
 * />
 * ```
 *
 * @class ModelsTableExpandAllToggle
 * @extends Glimmer.Component
 * @namespace Components
 */
export default class ExpandAllToggleComponent extends Component {
  /**
   * @event doCollapseAllRows
   * @protected
   */
  @action
  doCollapseAllRows() {
    this.args.collapseAllRows();
    return false;
  }

  /**
   * @event doExpandAllRows
   * @protected
   */
  @action
  doExpandAllRows() {
    this.args.expandAllRows();
    return false;
  }
}
