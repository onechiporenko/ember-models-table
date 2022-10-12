import Component from '@glimmer/component';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../services/emt-themes/default';
import { ModelsTableDataItem } from '../../../models-table';

export interface GroupSummaryRowArgs {
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.visibleProcessedColumns | TableBodyArgs.visibleProcessedColumns}
   */
  visibleProcessedColumns: ModelsTableColumn[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.themeInstance | TableBodyArgs.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Subset of {@link DefaultTheme.TableBodyArgs.groupedArrangedContent | TableBodyArgs.groupedArrangedContent} with `currentGroupingPropertyName` equal to `groupedValue`
   */
  groupedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.selectedItems | TableBodyArgs.selectedItems}
   */
  selectedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.expandedItems | TableBodyArgs.expandedItems}
   */
  expandedItems: ModelsTableDataItem[];
  /**
   * Bound from {@link DefaultTheme.TableBodyArgs.themeInstance | TableBodyArgs.themeInstance}
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
