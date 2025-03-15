import { SortConstants } from '../../../../../constants/sort-constants';
import DefaultTheme from '../../../../../services/emt-themes/default';
import ModelsTableColumn from '../../../../../utils/emt/emt-column';
import { type SelectOption } from '../../../../select-option.interface';

export interface DataGroupBySelectArgs {
  /**
   * Bound from {@link Core.ModelsTable.currentGroupingPropertyName | ModelsTable.currentGroupingPropertyName}
   */
  value: string;
  /**
   * Bound from {@link Core.ModelsTable.currentGroupingPropertyName | ModelsTable.currentGroupingPropertyName}
   */
  currentGroupingPropertyName: string;
  /**
   * Bound from {@link Core.ModelsTable.themeInstance | ModelsTable.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link Core.ModelsTable.dataGroupOptions | ModelsTable.dataGroupOptions}
   */
  options: SelectOption[];
  /**
   * Bound from {@link Core.ModelsTable.sortByGroupedFieldDirection | ModelsTable.sortByGroupedFieldDirection}
   */
  sortByGroupedFieldDirection: SortConstants;
  /**
   * Bound from {@link Core.ModelsTable.sortByGroupedFieldDirection | ModelsTableDataGroupBySelect.DataGroupBySelect.doSort}
   *
   * @event sort
   */
  sort: (v: ModelsTableColumn) => void;
  /**
   * Bound from {@link Core.ModelsTable.changeGroupingPropertyName | ModelsTable.changeGroupingPropertyName}
   *
   * @event changeGroupingPropertyName
   */
  changeGroupingPropertyName: (v: string) => void;
}
