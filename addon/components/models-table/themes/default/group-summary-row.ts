import Component from '@glimmer/component';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../services/emt-themes/default';
import { ModelsTableDataItem } from '../../../models-table';

export interface GroupSummaryRowArgs {
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.visibleProcessedColumns | TableBodyArgs.visibleProcessedColumns]]
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.themeInstance | TableBodyArgs.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Subset of [[DefaultTheme.TableBodyArgs.groupedArrangedContent | TableBodyArgs.groupedArrangedContent]] with `currentGroupingPropertyName` equal to `groupedValue`
   */
  groupedItems: ModelsTableDataItem[];
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.selectedItems | TableBodyArgs.selectedItems]]
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.expandedItems | TableBodyArgs.expandedItems]]
   */
  expandedItems: ModelsTableDataItem[];
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.themeInstance | TableBodyArgs.themeInstance]]
   */
  visibleGroupedItems?: ModelsTableDataItem[];
  /**
   * Subset of selected rows related to the current group
   */
  selectedGroupedItems?: ModelsTableDataItem[];
  /**
   * Subset of expanded rows related to the current group
   */
  expandedGroupedItems?: ModelsTableDataItem[];
}

export default class GroupSummaryRow extends Component<GroupSummaryRowArgs> {}
