import { ComponentLike } from '@glint/template';
import DefaultTheme from 'ember-models-table/services/emt-themes/default';
import { ModelsTableColumnOptions } from 'ember-models-table/utils/emt/emt-column';
import { DisplaySettingsSnapshot } from '../display-settings-snapshot.interface';
import { ColumnVisibilitySnapshot } from '../column-visibility-snapshot.interface';
import { RowInteractionClb } from '../../types/row-interaction-clb.type';
import { ColumnSet } from '../column-set.interface';
import { ColumnComponents } from '../column-components.interface';
import { GroupedHeader } from '../grouped-header.interface';
import { ModelsTableDataItem } from '../../types/models-table-data-item.type';
import { DataGroupProperty } from '../../types/data-group-property.type';

export interface ModelsTableArgs {
  /**
   *
   */
  themeInstance: DefaultTheme;
  /**
   * All table records
   *
   * It's a first of the two attributes you must set to the component
   */
  data: any[];
  /**
   * All table columns
   *
   * It's a second of the two attributes you must set to the component
   */
  columns: ModelsTableColumnOptions[];
  /**
   * Number of records shown on one table-page. 10 rows are shown if `pageSize` is not set
   */
  pageSize?: number;
  /**
   * Currently shown page number. First page is shown if `currentPageNumber` is not set
   */
  currentPageNumber?: number;
  /**
   * Determines if multi-columns sorting should be used.
   *
   * It should if `multipleColumnsSorting` is `true` or `undefined`
   */
  multipleColumnsSorting?: boolean;
  /**
   * Determines if component footer should be shown on the page.
   *
   * It should if `showComponentFooter` is `true` or `undefined`
   */
  showComponentFooter?: boolean;
  /**
   * Determines if dropdown for current page number should be shown near the pagination block.
   *
   * It should if `showCurrentPageNumberSelect` is `true` or `undefined`
   */
  showCurrentPageNumberSelect?: boolean;
  /**
   * Determines if numeric pagination should be used.
   *
   * It should if `useNumericPagination` is `true`
   */
  useNumericPagination?: boolean;
  /**
   * Determines if columns-dropdown should be shown.
   *
   * It should if `showColumnsDropdown` is `true` or `undefined`
   */
  showColumnsDropdown?: boolean;
  /**
   * Determines if filtering by columns should be available to the user
   *
   * It should if `useFilteringByColumns` is `true` or `undefined`
   */
  useFilteringByColumns?: boolean;
  /**
   * Determines if filtering (global and by column) should ignore case
   *
   * It should if `filteringIgnoreCase` is `true` or `undefined`
   */
  filteringIgnoreCase?: boolean;
  /**
   * Determines if filtering should be done by hidden columns
   *
   * It should if `doFilteringByHiddenColumns` is `true` or `undefined`
   */
  doFilteringByHiddenColumns?: boolean;
  /**
   * Determines if 'Global filter'-field should be shown
   *
   * It should if `showGlobalFilter` is `true` or `undefined`
   */
  showGlobalFilter?: boolean;
  /**
   * Determines if focus should be on the 'Global filter'-field on component render
   *
   * It should if `focusGlobalFilter` is `true`
   */
  focusGlobalFilter?: boolean;
  /**
   * Value for development purposes. Used to check translation issues like:
   *
   * * Auto generated titles for columns
   *
   * @ignore
   */
  checkTextTranslations?: boolean;
  /**
   * Determines if rows should be grouped for some property
   *
   * It should if `useDataGrouping` is `true`
   *
   * Grouped value may be shown in the separated row on the top of the group or in the first column (in the cell with rowspan) in the each group (see {@link displayGroupedValueAs})
   *
   * Generally you should not show column with property which is used for grouping (but it's up to you)
   */
  useDataGrouping?: boolean;
  /**
   * Property name used now for grouping rows
   *
   * **IMPORTANT** It should be set initially if {@link useDataGrouping} is set to `true`
   */
  currentGroupingPropertyName?: string;
  /**
   * Global filter value
   */
  filterString?: string;
  /**
   * Determines how grouped value will be displayed - as a row or column
   *
   * Allowed values are `row` and `column`
   *
   * @default `row`
   */
  displayGroupedValueAs?: 'row' | 'column';
  /**
   * Used in numeric pagination. If pages count is less than `collapseNumPaginationForPagesCount`, all pages will be shown.
   *
   * E.g. for `collapseNumPaginationForPagesCount = 4` and `pagesCount = 4` pagination will be `1 2 3 4`, however for
   * `collapseNumPaginationForPagesCount = 1` and `pagesCount = 4` pagination will be `1 2 ... 4`
   *
   * @default 1
   */
  collapseNumPaginationForPagesCount?: number;
  /**
   * Hash of components to be used for columns.
   */
  columnComponents?: ColumnComponents;
  /**
   * Sets of columns that can be toggled together.
   */
  columnSets?: ColumnSet[];

  /**
   * List of the additional headers. Used to group columns
   */
  groupedHeaders?: GroupedHeader[][];
  /**
   * Determines if page size selection dropdown should be shown
   *
   * It's shown when `showPageSize` is `true` or `undefined`
   */
  showPageSize?: boolean;
  /**
   * Initially expanded rows
   */
  expandedItems?: ModelsTableDataItem[];
  /**
   * `true` or `undefined` - allow expanding more than 1 row
   *
   * `false` - only 1 row may be expanded in the same time
   */
  multipleExpand?: boolean;
  /**
   * List of grouped property values where the groups are collapsed
   */
  collapsedGroupValues?: any[];
  /**
   * Allow or disallow to select rows on click.
   *
   * If `falsy` - no row can be selected
   */
  selectRowOnClick?: boolean;
  /**
   * Allow or disallow to select multiple rows.
   *
   * If `falsy` - only one row may be selected in the same time
   */
  multipleSelect?: boolean;
  /**
   * Component used in the 'expanded' row content
   *
   * It will receive several options:
   * * `record` - current row value
   * * `processedColumns` - current column (one of the {@link Core.ModelsTable.processedColumns | processedColumns}
   * * `index` - current row index
   * * `selectedItems` - bound from {@link Core.ModelsTable.selectedItems | selectedItems}
   * * `visibleProcessedColumns` - bound from {@link Core.ModelsTable.visibleProcessedColumns | visibleProcessedColumns}
   * * `themeInstance` - bound from {@link Core.ModelsTable.themeInstance | themeInstance}
   * * `clickOnRow` - closure action {@link Core.ModelsTable.clickOnRow | clickOnRow}
   *
   * @example
   * ```html
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{this.columns}}
   *   @expandedRowComponent={{component "expanded-row"}}
   * />
   * ```
   */
  expandedRowComponent?: ComponentLike | null;
  /**
   * Component used in the row with a grouped value
   *
   * This component won't be used if {@link Core.ModelsTable.useDataGrouping | useDataGrouping} is not `false`
   *
   * Component will receive several options:
   *
   * * `groupedValue` - grouped property value
   * * `currentGroupingPropertyName` - bound from {@link Core.ModelsTable.currentGroupingPropertyName | currentGroupingPropertyName}
   * * `displayGroupedValueAs` - bound from {@link Core.ModelsTable.displayGroupedValueAs | displayGroupedValueAs}
   * * `themeInstance` - bound from {@link Core.ModelsTable.themeInstance | themeInstance}
   * * `visibleProcessedColumns` - bound from {@link Core.ModelsTable.visibleProcessedColumns | visibleProcessedColumns}
   * * `toggleGroupedRows` - closure action {@link Core.ModelsTable.toggleGroupedRows | toggleGroupedRows}
   * * `toggleGroupedRowsExpands` - closure action {@link Core.ModelsTable.toggleGroupedRowsExpands | toggleGroupedRowsExpands}
   * * `toggleGroupedRowsSelection` - closure action {@link Core.ModelsTable.toggleGroupedRowsSelection | toggleGroupedRowsSelection}
   * * `groupedItems` - list of all rows group items
   * * `visibleGroupedItems` - list of rows group items shown on the current table page
   * * `selectedGroupedItems` - list of selected rows group items
   * * `expandedGroupedItems` - list of expanded rows group items
   *
   * @example
   * ```html
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{this.columns}}
   *   @groupingRowComponent={{component "grouping-row"}}
   * />
   * ```
   */
  groupingRowComponent?: ComponentLike;
  /**
   * This component won't be used if {@link useDataGrouping} is not `false`
   *
   * Component will receive several options:
   *
   * * `visibleProcessedColumns` - bound from {@link Core.ModelsTable.visibleProcessedColumns | visibleProcessedColumns}
   * * `themeInstance` - bound from {@link Core.ModelsTable.themeInstance | themeInstance}
   * * `groupedItems` - list of all rows group items
   * * `visibleGroupedItems` - list of rows group items shown on the current table page
   * * `selectedGroupedItems` - list of selected rows group items
   * * `expandedGroupedItems` - list of expanded rows group items
   *
   * @example
   * ```html
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{this.columns}}
   *   @groupSummaryRowComponent={{component "group-summary-row"}}
   * />
   * ```
   */
  groupSummaryRowComponent?: ComponentLike;
  /**
   * Component for header cell for column with grouping value
   *
   * This component won't be used if {@link useDataGrouping} is not `true` and {@link displayGroupedValueAs} is not `columns`
   *
   * @example
   * ```html
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{this.columns}}
   *   @groupHeaderCellComponent={{component "group-header-cell"}}
   * />
   * ```
   *
   * Component will receive such options:
   *
   * * `currentGroupingPropertyName` - property name used to group rows in the current moment
   */
  groupHeaderCellComponent?: ComponentLike;
  /**
   * List of initially selected rows
   *
   * Row may be selected by clicking on it, if {@link selectRowOnClick} is set to `true` or not set
   */
  selectedItems?: any[];
  /**
   * List of possible {@link pageSize} values. Used to change size of {@link Core.ModelsTable.visibleContent | visibleContent}.
   *
   * `[10, 25, 50]` is used by default
   */
  pageSizeValues?: number[];
  /**
   * List of property names can be used for grouping
   *
   * It may be a list of strings of list of objects. In first case label and value in the select-box will be the same.
   * In the second case you must set `label` and `value` properties for each list item
   *
   * **IMPORTANT** {@link useDataGrouping} must be set to `true`
   *
   * **IMPORTANT** It must contain {@link currentGroupingPropertyName} if data grouping is used
   */
  dataGroupProperties?: DataGroupProperty[];
  /**
   * Closure action sent on row out
   *
   * @example
   * ```html
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{this.columns}}
   *   @onRowOut={{this.someAction}}
   * />
   * ```
   *
   * @event onRowOut
   */
  onRowOut?: RowInteractionClb;
  /**
   * Closure action sent on row hover
   *
   * @example
   * ```html
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{this.columns}}
   *   @onRowHover={{this.someAction}}
   * />
   * ```
   *
   * @event onRowHover
   */
  onRowHover?: RowInteractionClb;
  /**
   * Closure action sent on row double-click
   *
   * @example
   * ```html
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{this.columns}}
   *   @onRowDoubleClick={{this.someAction}}
   * />
   * ```
   *
   * @event onRowDoubleClick
   */
  onRowDoubleClick?: RowInteractionClb;
  /**
   * Closure action sent on change of visible columns
   *
   * @example
   * ```html
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{this.columns}}
   *   @onColumnsVisibilityChanged={{this.someAction}}
   * />
   * ```
   *
   * @event onColumnsVisibilityChanged
   */
  onColumnsVisibilityChanged?: (
    columnsVisibility: ColumnVisibilitySnapshot[],
  ) => void;
  /**
   * Closure action sent on user interaction
   *
   * @example
   * ```html
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{this.columns}}
   *   @onDisplayDataChanged={{this.someAction}}
   * />
   * ```
   *
   * @event onDisplayDataChanged
   */
  onDisplayDataChanged?: (displaySettings: DisplaySettingsSnapshot) => void;
  isolated?: boolean;
}
