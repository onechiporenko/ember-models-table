import Component from '@glimmer/component';
import { action } from '@ember/object';

/**
 * Component with checkbox to select or deselect any single row
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
 * @class ModelsTableRowSelectCheckbox
 * @extends Glimmer.Component
 * @namespace Components
 */
export default class RowSelectCheckboxComponent extends Component {
  /**
   * @event doClickOnRow
   * @protected
   * @param {number} index
   * @param {object} record
   * @param {Event} e
   */
  @action
  doClickOnRow(index, record, e) {
    this.args.clickOnRow(index, record);
    e?.stopPropagation();
    return false;
  }
}
