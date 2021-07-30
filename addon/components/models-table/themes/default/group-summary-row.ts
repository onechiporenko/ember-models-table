import Component from '@glimmer/component';
import ModelsTableColumn from '../../../../utils/emt/emt-column';
import DefaultTheme from '../../../../services/emt-themes/default';
import { EmberNativeArray } from '../../../models-table';

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
  groupedItems: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.selectedItems | TableBodyArgs.selectedItems]]
   */
  selectedItems: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.expandedItems | TableBodyArgs.expandedItems]]
   */
  expandedItems: EmberNativeArray;
  /**
   * Bound from [[DefaultTheme.TableBodyArgs.themeInstance | TableBodyArgs.themeInstance]]
   */
  visibleGroupedItems?: EmberNativeArray;
  /**
   * Subset of selected rows related to the current group
   */
  selectedGroupedItems?: EmberNativeArray;
  /**
   * Subset of expanded rows related to the current group
   */
  expandedGroupedItems?: EmberNativeArray;
}

export default class GroupSummaryRow extends Component<GroupSummaryRowArgs> {}
