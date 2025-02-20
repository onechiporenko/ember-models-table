import { action } from '@ember/object';
import Component from '@glimmer/component';

import { type RowSelectAllCheckboxSignature } from '../../../../interfaces/components/models-table/themes/default/row-select-all-checkbox-signature.interface';

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
 * ```html
 * <ModelsTable
 *   @data={{this.data}}
 *   @columns={{this.columns}}
 *   @multipleSelect={{true}}
 * />
 * ```
 */
export default class RowSelectAllCheckbox extends Component<RowSelectAllCheckboxSignature> {
  /**
   * @event doToggleAllSelection
   */
  @action
  protected doToggleAllSelection(): boolean {
    this.args.toggleAllSelection();
    return false;
  }
}
