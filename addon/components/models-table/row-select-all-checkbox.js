import Component from '@glimmer/component';
import { action } from '@ember/object';

/**
 * Component with checkbox to select or deselect all rows
 *
 * Usage example:
 *
 * ```js
 * const columns = [
 *   {
 *     component: 'models-table/row-select-checkbox',
 *     disableFiltering: true,
 *     mayBeHidden: false,
 *     componentForSortCell: 'models-table/row-select-all-checkbox'
 *   },
 *   {propertyName: 'firstName'},
 *   {propertyName: 'lastName'}
 * ];
 * const data = [ ... ];
 * ```
 *
 * ```hbs
 * <ModelsTable
 *   @data={{data}}
 *   @columns={{columns}}
 *   @multipleSelect={{true}}
 * />
 * ```
 *
 * @class ModelsTableRowSelectAllCheckbox
 * @extends Glimmer.Component
 * @namespace Components
 */
export default class RowSelectAllCheckboxComponent extends Component {
  /**
   * @event doToggleAllSelection
   * @protected
   */
  @action
  doToggleAllSelection() {
    this.args.toggleAllSelection();
    return false;
  }
}
