import Component from '@glimmer/component';
import { action } from '@ember/object';
import DefaultTheme from '../../../../services/emt-themes/default';
import { ModelsTableDataItem, RowInteractionClb } from '../../../models-table';

export interface RowSelectCheckboxArgs {
  /**
   * Bound from [[DefaultTheme.RowArgs.themeInstance | RowArgs.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Row index (1 ... row count on the page)
   */
  index: number;
  /**
   * One item of [[Core.ModelsTable.data | ModelsTable.data]]
   */
  record: ModelsTableDataItem;
  /**
   * Bound from [[DefaultTheme.RowArgs.clickOnRow | RowArgs.clickOnRow]]
   *
   * @event clickOnRow
   */
  clickOnRow: RowInteractionClb;
}

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
export default class RowSelectCheckbox extends Component<RowSelectCheckboxArgs> {
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
