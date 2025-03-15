import { TrackedArray } from 'tracked-built-ins';

import { type ModelsTableDataItem } from '../types/models-table-data-item.type';
import { type DisplaySettingsColumnStateSnapshot } from './display-settings-column-state-snapshot.interface';

export interface DisplaySettingsSnapshot {
  /**
   * List with sort value `propertyName:sortDirection`
   */
  sort: TrackedArray<string>;
  /**
   * Same as {@link Core.ModelsTable.currentPageNumber | currentPageNumber}
   */
  currentPageNumber: number;
  /**
   * Same as {@link Core.ModelsTable.pageSize | pageSize}
   */
  pageSize: number;
  /**
   * Same as {@link Core.ModelsTable.filterString | filterString}
   */
  filterString: string;
  /**
   * Same as {@link Core.ModelsTable.filteredContent | filteredContent}
   */
  filteredContent: TrackedArray<ModelsTableDataItem>;
  /**
   * Same as {@link Core.ModelsTable.selectedItems | selectedItems}
   */
  selectedItems: any[];
  /**
   * Same as {@link Core.ModelsTable.expandedItems | expandedItems}
   */
  expandedItems: any[];
  /**
   * Same as {@link Core.ModelsTable.currentGroupingPropertyName | currentGroupingPropertyName}
   */
  currentGroupingPropertyName: string;
  /**
   * Same as {@link Core.ModelsTable.displayGroupedValueAs | displayGroupedValueAs}
   */
  displayGroupedValueAs: string;
  /**
   * Current columns state
   */
  columns?: DisplaySettingsColumnStateSnapshot[];
  /**
   * Map with filters
   *
   * Each key is a `filterField` from column, each value is a current filter value for `filterField`
   */
  columnFilters: { [key: string]: string };
}
