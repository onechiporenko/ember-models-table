import Component from '@glimmer/component';
import { action } from '@ember/object';
import DefaultTheme from '../../../../services/emt-themes/default';
import { EmberNativeArray } from '../../../models-table';

export interface RowSelectAllCheckboxArgs {
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.themeInstance | TableHeaderArgs.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.selectedItems | TableHeaderArgs.selectedItems]]
   */
  selectedItems: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.data | TableHeaderArgs.data]]
   */
  data: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.TableHeaderArgs.toggleAllSelection | TableHeaderArgs.toggleAllSelection]]
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
}

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
export default class RowSelectAllCheckbox extends Component<RowSelectAllCheckboxArgs> {
  /**
   * @event doToggleAllSelection
   */
  @action
  protected doToggleAllSelection(): boolean {
    this.args.toggleAllSelection();
    return false;
  }
}
