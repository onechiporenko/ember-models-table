import Component from '@glimmer/component';
import { action } from '@ember/object';
import { ModelsTableDataItem } from '../../../../types/models-table-data-item.type';
import { RowSelectCheckboxSignature } from '../../../../interfaces/components/models-table/themes/default/row-select-checkbox-signature.interface';

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
 * ```html
 * <ModelsTable
 *   @data={{this.data}}
 *   @columns={{this.columns}}
 *   @multipleSelect={{true}}
 * />
 * ```
 */
export default class RowSelectCheckbox extends Component<RowSelectCheckboxSignature> {
  /**
   * @event doClickOnRow
   */
  @action
  protected doClickOnRow(
    index: number,
    record: ModelsTableDataItem,
    e: Event
  ): boolean {
    this.args.clickOnRow(index, record);
    e?.stopPropagation?.();
    return false;
  }
}
