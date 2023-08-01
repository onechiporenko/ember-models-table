import DefaultTheme from '../../../../../services/emt-themes/default';
import { ModelsTableDataItem } from '../../../../../types/models-table-data-item.type';

export interface RowSelectAllCheckboxArgs {
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.themeInstance | TableHeaderArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.selectedItems | TableHeaderArgs.selectedItems}
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.data | TableHeaderArgs.data}
   */
  data: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableHeaderArgs.toggleAllSelection | TableHeaderArgs.toggleAllSelection}
   *
   * @event toggleAllSelection
   */
  toggleAllSelection: () => void;
}
