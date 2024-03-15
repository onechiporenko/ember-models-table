import type { ComponentLike } from '@glint/template';
import { compare, isBlank, isNone, typeOf } from '@ember/utils';
import { next, once, run } from '@ember/runloop';
import Component from '@glimmer/component';
import { assert, warn } from '@ember/debug';
import { action, get, set } from '@ember/object';
import { isArray } from '@ember/array';
import { guidFor } from '@ember/object/internals';
import { SortConstants } from '../constants/sort-constants';
import { tracked, TrackedArray } from 'tracked-built-ins';
import ModelsTableColumn, {
  propertyNameToTitle,
  type ModelsTableColumnOptions,
} from '../utils/emt/emt-column';
import DefaultTheme from '../services/emt-themes/default';

import { type ModelsTableArgs } from '../interfaces/components/models-table-args.interface';
import { type ModelsTableSignature } from '../interfaces/components/models-table-signature.interface';
import { type DisplaySettingsSnapshot } from '../interfaces/display-settings-snapshot.interface';
import { type ColumnDropdownOptions } from '../interfaces/column-dropdown-options.interface';
import { type ColumnSet } from '../interfaces/column-set.interface';
import { type SelectOption } from '../interfaces/select-option.interface';
import { type ModelsTableDataItem } from '../types/models-table-data-item.type';
import { type ColumnComponents } from '../interfaces/column-components.interface';
import { type GroupedHeader } from '../interfaces/grouped-header.interface';
import { chunkBy } from '../utils/emt/chunk-by.function';
import { type SortMap } from '../interfaces/sort-map.interface';
import { type DataGroupProperty } from '../types/data-group-property.type';
import { isSelectOption } from '../utils/emt/is-select-option.function';
import {
  isSortedByDefault,
  NOT_SORTED,
} from '../utils/emt/is-sorted-by-default.function';
import { optionStrToObj } from '../utils/emt/option-str-to-obj.function';
import { type ColumnCustomSortFn } from '../types/column-custom-sort-fn.type';
import { splitPropSortDirection } from '../utils/emt/split-prop-sort-direction.function';
import { defaultFilter } from '../utils/default-filter.function';
import betterCompare from '../utils/emt/better-compare.function';

const {
  keys,
  prototype: { hasOwnProperty },
} = Object;

/**
 * Table-component with pagination, sorting and filtering.
 *
 * It should be used when whole dataset is already loaded. For server-side pagination, filtering and sorting
 * {@link ModelsTableServerPaginated} should be used.
 *
 * Basic usage example:
 *
 * ```html
 * <ModelsTable @data={{model}} @columns={{this.columns}} @themeInstance={{this.themeInstance}} />
 * ```
 *
 * Usage with block context:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} @themeInstance={{this.themeInstance}} as |MT|>
 *   <MT.GlobalFilter />
 *   <MT.DataGroupBySelect />
 *   <MT.ColumnsDropdown />
 *   <MT.Table />
 *   <MT.Footer />
 * </ModelsTable>
 * ```
 *
 * Usage with block content 2:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} @themeInstance={{this.themeInstance}} as |MT|>
 *   <MT.GlobalFilter />
 *   <MT.DataGroupBySelect />
 *   <MT.ColumnsDropdown />
 *   <MT.Table />
 *   <MT.PaginationNumeric />
 *   <MT.PaginationSimple />
 *   <MT.Summary />
 *   <MT.PageSizeSelect />
 * </ModelsTable>
 * ```
 *
 * ModelsTable yields references to the following contextual components:
 *
 * * {@link DefaultTheme.GlobalFilter | GlobalFilter} - global filter used for table data
 * * {@link DefaultTheme.ColumnsDropdown | ColumnsDropdown} - dropdown with list of options to toggle columns and column-sets visibility
 * * {@link DefaultTheme.DataGroupBySelect | DataGroupBySelect} - dropdown to select property for table-rows grouping
 * * {@link DefaultTheme.Table | Table} - table with a data
 * * {@link DefaultTheme.Footer | Footer} - summary and pagination
 * * {@link DefaultTheme.Summary | Summary} - component with summary info about table data. It also contains button to clear all filters applied to the table
 * * {@link DefaultTheme.PageSizeSelect | PageSizeSelect} - component with a page sizes dropdown. It allows to select number if records shown on page
 * * {@link DefaultTheme.PaginationNumeric | PaginationNumeric} - component with a table navigation. It allows to move to the page by its number
 * * {@link DefaultTheme.PaginationSimple | PaginationSimple} - component with a table navigation. It allows to move to the first, last, prev and next pages (this four buttons are shown always)
 *
 * Check own docs for each component to get detailed info.
 *
 * References to the following properties are yielded:
 *
 * * {@link processedColumns} - list of columns in the table
 * * {@link visibleProcessedColumns} - list of currently visible columns in the table
 * * {@link visibleContent} - list of records shown in the current table's page
 * * {@link groupedHeaders} - extra headers for table's header. DOESN'T work properly with visibility toggle for columns
 * * {@link groupedVisibleContent} - list of records shown in the current table's page when rows grouping is enabled
 * * {@link groupedVisibleContentValuesOrder} - list of values for property used to group rows
 * * {@link groupedArrangedContent} - list of all filtered and sorted records in the table used when rows grouping is enabled
 * * {@link displayGroupedValueAs} - determines how value for grouping is shown. Can "row" and "column"
 * * {@link sortByGroupedFieldDirection} - sorting order for property used to group rows
 * * {@link useDataGrouping} - flag to turn on/off rows grouping
 * * {@link globalFilterUsed} - `true` if global filter is used
 * * {@link filterString | globalFilter} - value of global filter
 * * {@link anyFilterUsed} - `true` when any filter (global or for column) is used. `false` when no filters are used
 * * {@link useFilteringByColumns} - determines if columns filtering should be used. By default if it's `false` header's row with filter input/select fields is not shown
 * * {@link collapsedGroupValues} - list of values for property used to group rows. Row group with this value are collapsed
 * * {@link pagesCount} - number of pages in the table
 * * {@link arrangedContentLength | recordsCount} - number of records in the table
 * * {@link firstIndex} - first row's index in the current page
 * * {@link lastIndex} - last row's index in the current page
 * * {@link currentPageNumber} - current page
 * * {@link currentPageNumberOptions} - list of options for current page
 * * {@link pageSizeOptions} - list of options for page size select
 * * {@link pageSize} - number of rows shown in the table's page
 * * {@link columnDropdownOptions} - list of options for columns dropdown
 * * {@link allColumnsAreHidden} - `true` if all columns are hidden. `false` if at least one column is visible
 * * {@link dataGroupOptions} - list of property names used for rows grouping
 * * {@link currentGroupingPropertyName} - property name used now for grouping rows
 * * {@link themeInstance} - theme instance used in the table
 * * {@link expandedItems} - list of expanded rows
 * * {@link selectedItems} - list of selected rows
 * * {@link sortProperties} - list of data-properties used to sort table rows
 * * {@link Core.ModelsTableServerPaginated.isLoading | isLoading} - `true` when data for table is loading (used only for {@link ModelsTableServerPaginated})
 * * {@link Core.ModelsTableServerPaginated.isError | isError} - `true` when request for data loading failed (used only for {@link ModelsTableServerPaginated})
 *
 * References to the following actions are yielded:
 *
 * * {@link showAllColumns} - show all columns in the table (by default used in the columns dropdown)
 * * {@link hideAllColumns} - hide all column in the table (by default used in the columns dropdown)
 * * {@link restoreDefaultVisibility} - show columns visible initially (by default used in the columns dropdown)
 * * {@link toggleColumnSetVisibility} - toggle visibility for columns in the custom columns set (by default used in the columns dropdown)
 * * {@link toggleColumnVisibility} - toggle visibility for column (by default used in the columns dropdown)
 * * {@link expandRow} - expand or collapse row to show details
 * * {@link collapseRow} - select or deselect row
 * * {@link expandAllRows} - expand all rows
 * * {@link collapseAllRows} - collapse all rows
 * * {@link toggleAllSelection} - select or deselect all rows
 * * {@link goToPage} - change table's page (by default used in the pagination)
 * * {@link clearFilters} - clear all filters (by default used in the summary)
 * * {@link sort} - sort provided column
 * * {@link toggleGroupedRowsSelection} - select or deselect all rows in the group (for cases when rows grouping is used)
 * * {@link toggleGroupedRowsExpands} - expand or collapse all rows in the group (for cases when rows grouping is used)
 * * {@link toggleGroupedRows} - toggle rows group (for cases when rows grouping is used)
 * * {@link clickOnRow}
 * * {@link doubleClickOnRow}
 * * {@link hoverOnRow}
 * * {@link outRow}
 * * {@link changePageSize} - set number of rows on the page
 * * {@link changeGlobalFilter} - change global filter value
 * * {@link changeColumnFilter} - change filter value for column
 * * {@link changeGroupingPropertyName} - change property used to group rows
 *
 * ModelsTable has a lot of options you may configure, but there are two required properties called `data` and `columns`.
 * First one contains data (e.g. list of records from the store).
 * Second one is a list of table's columns (check {@link Core.ModelsTableColumnOptions | ModelsTableColumnOptions} for available options).
 *
 * @class ModelsTable
 */
export default class ModelsTableComponent<T> extends Component<
  ModelsTableSignature<T>
> {
  /**
   * True if data is currently being loaded from the server.
   * Can be used in the template to e.g. display a loading spinner.
   *
   * Used only for {@link ModelsTableServerPaginated}
   */
  @tracked
  isLoading = false;

  /**
   * True if last data query promise has been rejected.
   * Can be used in the template to e.g. indicate stale data or to e.g. show error state.
   *
   * Used only for {@link ModelsTableServerPaginated}
   */
  @tracked
  isError = false;

  @tracked
  protected _id = guidFor(this);

  @tracked
  protected _showColumnsDropdown = true;

  protected get themeInstance(): DefaultTheme {
    return this.args.themeInstance || ({} as DefaultTheme);
  }

  @tracked
  protected _pageSize = 10;
  get pageSize(): number {
    return this.args.pageSize ?? this._pageSize;
  }
  set pageSize(v: number) {
    this._pageSize = v;
  }

  @tracked
  protected _currentPageNumber = 1;
  get currentPageNumber(): number {
    const currentPageNumber =
      this.args.currentPageNumber ?? this._currentPageNumber;
    return this.arrangedContentLength <= (currentPageNumber - 1) * this.pageSize
      ? 1
      : currentPageNumber;
  }
  set currentPageNumber(currentPageNumber: number) {
    this._currentPageNumber = currentPageNumber;
  }

  @tracked
  protected _isolated = false;
  /**
   * Flag to determine if component should bubble inner `click` action handler
   *
   * It's useful when `models-table` is used inside the row-expand
   *
   * @default false
   */
  protected get isolated(): boolean {
    return this.args.isolated ?? this._isolated;
  }
  protected set isolated(isolated: boolean) {
    this._isolated = isolated;
  }

  /**
   * Order of sorting for each column. Unsorted column firstly become sorted asc, then desc, then sorting is dropped again
   */
  protected sortMap = {
    [SortConstants.none]: SortConstants.asc,
    [SortConstants.asc]: SortConstants.desc,
    [SortConstants.desc]: SortConstants.none,
  } as SortMap;

  /**
   * List of properties to sort table rows
   *
   * Each value is like 'propertyName:sortDirection'
   */
  @tracked
  protected sortProperties: TrackedArray<string> = new TrackedArray<string>([]);

  /**
   * Hash of custom functions to sort table rows
   */
  @tracked
  protected sortFunctions: {
    [key: string]: ColumnCustomSortFn;
  } = Object.create(null);

  @tracked
  protected _multipleColumnsSorting = true;
  protected get multipleColumnsSorting(): boolean {
    return this.args.multipleColumnsSorting ?? this._multipleColumnsSorting;
  }
  protected set multipleColumnsSorting(v: boolean) {
    this._multipleColumnsSorting = v;
  }

  protected get showComponentFooter(): boolean {
    return this.args.showComponentFooter ?? true;
  }

  protected get showCurrentPageNumberSelect(): boolean {
    return this.args.showCurrentPageNumberSelect ?? true;
  }

  @tracked
  protected _useNumericPagination = false;
  protected get useNumericPagination(): boolean {
    return this.args.useNumericPagination ?? this._useNumericPagination;
  }
  protected set useNumericPagination(v: boolean) {
    this._useNumericPagination = v;
  }

  protected get showColumnsDropdown(): boolean {
    return this.args.showColumnsDropdown ?? this._showColumnsDropdown;
  }
  protected set showColumnsDropdown(v: boolean) {
    this._showColumnsDropdown = v;
  }

  get useFilteringByColumns(): boolean {
    return this.args.useFilteringByColumns ?? true;
  }

  protected get filteringIgnoreCase(): boolean {
    return this.args.filteringIgnoreCase ?? true;
  }

  protected get doFilteringByHiddenColumns(): boolean {
    return this.args.doFilteringByHiddenColumns ?? true;
  }

  protected get showGlobalFilter(): boolean {
    return this.args.showGlobalFilter ?? true;
  }

  protected get focusGlobalFilter(): boolean {
    return this.args.focusGlobalFilter ?? false;
  }

  protected get checkTextTranslations(): boolean {
    return this.args.checkTextTranslations ?? false;
  }

  get useDataGrouping(): boolean {
    return this.args.useDataGrouping ?? false;
  }

  @tracked
  declare currentGroupingPropertyName: string;

  /**
   * Sort direction for grouped property values
   */
  @tracked
  sortByGroupedFieldDirection = SortConstants.asc;

  /**
   * Global filter value
   */
  @tracked
  protected _filterString = '';
  protected get filterString(): string {
    return this.args.filterString ?? this._filterString;
  }
  protected set filterString(v: string) {
    this._filterString = v;
  }

  /**
   * @default 'row'
   */
  @tracked
  protected _displayGroupedValueAs = 'row';
  get displayGroupedValueAs(): string {
    return this.args.displayGroupedValueAs ?? this._displayGroupedValueAs;
  }
  set displayGroupedValueAs(v: string) {
    this._displayGroupedValueAs = v;
  }

  get collapseNumPaginationForPagesCount(): number {
    return this.args.collapseNumPaginationForPagesCount ?? 1;
  }

  get data(): TrackedArray<ModelsTableDataItem> {
    return new TrackedArray<ModelsTableDataItem>(this.args.data ?? []);
  }

  protected get columns(): ModelsTableColumnOptions[] {
    return this.args.columns ?? new TrackedArray<ModelsTableColumnOptions>([]);
  }

  get columnComponents(): ColumnComponents {
    return this.args.columnComponents ?? {};
  }

  /**
   * @default []
   */
  protected get columnSets(): ColumnSet[] {
    return this.args.columnSets ?? new TrackedArray<ColumnSet>([]);
  }

  /**
   * List of columns shown in the table. It's created from the {@link Core.ModelsTableArgs.columns | columns} provided to the component
   *
   * @default []
   */
  @tracked
  processedColumns = new TrackedArray<ModelsTableColumn>([]);

  get groupedHeaders(): GroupedHeader[][] {
    return this.args.groupedHeaders ?? new TrackedArray([]);
  }

  protected get showPageSize(): boolean {
    return this.args.showPageSize ?? true;
  }

  @tracked
  declare expandedItems: TrackedArray<ModelsTableDataItem>;

  @tracked
  protected _multipleExpand = true;
  protected get multipleExpand(): boolean {
    return this.args.multipleExpand ?? this._multipleExpand;
  }
  protected set multipleExpand(v: boolean) {
    this._multipleExpand = v;
  }

  @tracked
  declare collapsedGroupValues: TrackedArray<any>;

  /**
   * Allow or disallow to select rows on click.
   * If `false` - no row can be selected
   *
   * @default true
   */
  protected get selectRowOnClick(): boolean {
    return this.args.selectRowOnClick ?? true;
  }

  @tracked
  protected _multipleSelect = false;
  /**
   * Allow or disallow to select multiple rows.
   * If `false` - only one row may be selected in the same time
   *
   * @default false
   */
  get multipleSelect(): boolean {
    return this.args.multipleSelect ?? this._multipleSelect;
  }
  set multipleSelect(v: boolean) {
    this._multipleSelect = v;
  }

  get expandedRowComponent(): ComponentLike | null {
    return this.args.expandedRowComponent ?? null;
  }

  get groupingRowComponent(): ComponentLike | null {
    return this.args.groupingRowComponent ?? null;
  }

  get groupSummaryRowComponent(): ComponentLike | null {
    return this.args.groupSummaryRowComponent ?? null;
  }

  get groupHeaderCellComponent(): ComponentLike | null {
    return this.args.groupHeaderCellComponent ?? null;
  }

  @tracked
  declare selectedItems: TrackedArray<ModelsTableDataItem>;

  /**
   * List of the currently visible columns
   *
   * @default []
   */
  get visibleProcessedColumns(): ModelsTableColumn[] {
    return this.processedColumns
      ? this.processedColumns.filter((pc) => pc.isVisible)
      : [];
  }

  /**
   * True if all processedColumns are hidden by `isHidden`
   *
   * @default false
   */
  get allColumnsAreHidden(): boolean {
    return (
      this.processedColumns &&
      this.processedColumns.length > 0 &&
      this.processedColumns.every((pc) => pc.isHidden)
    );
  }

  get dataGroupProperties(): DataGroupProperty[] {
    return new TrackedArray<DataGroupProperty>(
      this.args.dataGroupProperties ? this.args.dataGroupProperties : [],
    );
  }

  /**
   * @default []
   */
  protected get dataGroupOptions(): SelectOption[] {
    return this.dataGroupProperties.map((value) => {
      return isSelectOption(value)
        ? value
        : ({
            label: propertyNameToTitle(value),
            value,
          } as SelectOption);
    });
  }

  /**
   * `true` if some value is set to the global filter
   *
   * @default false
   */
  get globalFilterUsed(): boolean {
    return !!this.filterString;
  }

  /**
   * `true` if global filter or filter by any column is used
   *
   * @default false
   */
  get anyFilterUsed(): boolean {
    return (
      this.globalFilterUsed || this.processedColumns.some((pc) => pc.filterUsed)
    );
  }

  /**
   * `true` if all processedColumns don't use filtering and sorting
   *
   * @default false
   */
  protected get noHeaderFilteringAndSorting(): boolean {
    return (
      this.processedColumns.every((pc) => !pc.useFilter) &&
      this.processedColumns.every((pc) => !pc.useSorting)
    );
  }

  /**
   * Number of pages
   *
   * @default 0
   */
  get pagesCount(): number {
    const pagesCount = this.arrangedContentLength / this.pageSize;
    return 0 === pagesCount % 1 ? pagesCount : Math.floor(pagesCount) + 1;
  }

  /**
   * {@link Core.ModelsTableArgs.data | data} filtered with a global filter and columns filters
   *
   * Filtering by columns is ignored if {@link Core.ModelsTableArgs.useFilteringByColumns | useFilteringByColumns} is set to `false`
   *
   * @default []
   */
  protected get filteredContent(): TrackedArray<ModelsTableDataItem> {
    if (!isArray(this.data)) {
      return new TrackedArray([]);
    }
    if (!this.anyFilterUsed) {
      return this.data;
    }
    let filterString = this.filterString;
    if (this.filteringIgnoreCase) {
      filterString = filterString.toLowerCase();
    }

    let _processedColumns = this.processedColumns.filter((pc) => pc.useFilter);
    if (!this.doFilteringByHiddenColumns) {
      _processedColumns = _processedColumns.filter((pc) => !pc.isHidden);
    }
    if (!_processedColumns.length) {
      return this.data;
    }

    // global search
    const filtersFor = _processedColumns.map((pc) => pc.filterField);
    const globalSearch = this.data.filter((row) => {
      return filtersFor.some((filterFor) => {
        let cellValue = '' + get(row, `${filterFor}`);
        if (this.filteringIgnoreCase) {
          cellValue = cellValue.toLowerCase();
        }
        return cellValue.includes(filterString);
      });
    });

    if (!this.useFilteringByColumns) {
      return new TrackedArray(globalSearch);
    }

    // search by each column
    _processedColumns = _processedColumns.filter(
      (c) => !!c.filterField && !(c.filterWithSelect && '' === c.filterString),
    );
    return new TrackedArray(
      globalSearch.filter((row) => {
        return _processedColumns.every((c) => {
          const filterFor = c.filterField;
          if (!filterFor) {
            return true;
          }
          let cellValue = '' + get(row, filterFor);
          let filterString = c.filterString;
          if (this.filteringIgnoreCase && c.filterFunction === defaultFilter) {
            cellValue =
              typeOf(cellValue) === 'string'
                ? cellValue.toLowerCase()
                : cellValue;
            filterString =
              typeOf(filterString) === 'string'
                ? filterString.toLowerCase()
                : filterString;
          }
          if ('function' === typeof c.filterFunction) {
            return c.filterFunction(
              cellValue,
              filterString,
              row as ModelsTableDataItem,
            );
          }
          return 0 === compare(cellValue, filterString);
        });
      }),
    );
  }

  /**
   * {@link filteredContent} sorted by needed properties
   *
   * @default []
   */
  protected get arrangedContent(): TrackedArray<ModelsTableDataItem> {
    const sortProperties = this.sortProperties.map((p) => {
      const [prop, direction] = splitPropSortDirection(p);
      return [prop, direction || SortConstants.asc];
    });

    const s = this.filteredContent.slice();
    if (sortProperties.length) {
      s.sort((row1, row2) => {
        for (let i = 0; i < sortProperties.length; i++) {
          const [prop, direction] = sortProperties[i] || '';
          const sortFunction =
            get(this.sortFunctions, prop || '') || betterCompare;
          const result = prop
            ? sortFunction(
                get(row1, prop) as any,
                get(row2, prop) as any,
                direction,
              )
            : 0;
          if (result !== 0) {
            return direction === SortConstants.desc ? -1 * result : result;
          }
        }

        return 0;
      });
    }
    return new TrackedArray(s);
  }

  /**
   * {@link filteredContent} grouped by {@link Core.ModelsTableArgs.currentGroupingPropertyName | currentGroupingPropertyName} sorted by needed properties
   *
   * @default []
   */
  get groupedArrangedContent(): TrackedArray<ModelsTableDataItem> {
    if (!this.useDataGrouping || !isArray(this.filteredContent)) {
      return new TrackedArray([]);
    }
    const sortProperties = this.sortProperties.map((p) => {
      const [prop, direction] = splitPropSortDirection(p);
      return [prop, direction || SortConstants.asc];
    });

    let grouped = chunkBy<ModelsTableDataItem>(
      this.filteredContent,
      this.currentGroupingPropertyName,
      this.sortByGroupedFieldDirection,
    );

    grouped = new TrackedArray(
      grouped.map((group) => {
        return sortProperties.length
          ? group.sort((row1, row2) => {
              for (let i = 0; i < sortProperties.length; i++) {
                const [prop, direction] = sortProperties[i] || '';
                const sortFunction =
                  get(this.sortFunctions, prop || '') || betterCompare;
                let result = 0;
                if (prop) {
                  result = sortFunction(
                    get(row1, prop) as any,
                    get(row2, prop) as any,
                  );
                }
                if (result !== 0) {
                  return direction === SortConstants.desc
                    ? -1 * result
                    : result;
                }
              }
              return 0;
            })
          : group;
      }),
    );
    return new TrackedArray(
      grouped.reduce((result, group) => [...result, ...group], []),
    );
  }

  /**
   * Content of the current table page
   *
   * {@link arrangedContent} sliced for currently shown page
   *
   * @default []
   */
  get visibleContent(): TrackedArray<ModelsTableDataItem> {
    const startIndex = this.pageSize * (this.currentPageNumber - 1);
    if (this.arrangedContentLength < this.pageSize) {
      return this.arrangedContent;
    }
    return new TrackedArray(
      this.arrangedContent.slice(startIndex, startIndex + this.pageSize),
    );
  }

  /**
   * Content of the current table page when rows grouping is used
   *
   * {@link groupedVisibleContent} sliced for currently shown page
   *
   * @default []
   */
  get groupedVisibleContent(): TrackedArray<ModelsTableDataItem[]> {
    if (!this.useDataGrouping) {
      return new TrackedArray([]);
    }
    const startIndex = this.pageSize * (this.currentPageNumber - 1);
    return this.groupedArrangedContent.length < this.pageSize
      ? chunkBy<ModelsTableDataItem>(
          this.groupedArrangedContent,
          this.currentGroupingPropertyName,
        )
      : chunkBy<ModelsTableDataItem>(
          this.groupedArrangedContent.slice(
            startIndex,
            startIndex + this.pageSize,
          ),
          this.currentGroupingPropertyName,
        );
  }

  /**
   * List of grouped property values in order to show groups in the table
   *
   * @default []
   */
  get groupedVisibleContentValuesOrder(): string[] {
    return this.groupedVisibleContent.map(
      (group) => get(group[0], this.currentGroupingPropertyName) as string,
    );
  }

  /**
   * Is user on the last page
   */
  get isLastPage(): boolean {
    return this.currentPageNumber >= this.pagesCount;
  }

  /**
   * Alias to `arrangedContent.length`.  Faster than retrieving arrangedContent
   * as it avoids sorting the data before calculating length.
   *
   * @default 0
   */
  get arrangedContentLength(): number {
    // arrangedContent is just filteredContent which has been sorted.
    return this.filteredContent.slice().length;
  }

  /**
   * Index of the first currently shown record
   *
   * @default 0
   */
  get firstIndex(): number {
    return 0 === this.arrangedContentLength
      ? 0
      : this.pageSize * (this.currentPageNumber - 1) + 1;
  }

  /**
   * Index of the last currently shown record
   *
   * @default 10
   */
  get lastIndex(): number {
    return this.isLastPage
      ? this.arrangedContentLength
      : this.currentPageNumber * this.pageSize;
  }

  /**
   * List of possible {@link pageSize} values. Used to change size of `visibleContent`
   *
   * @default [10, 25, 50]
   */
  get pageSizeValues(): number[] {
    return new TrackedArray<number>(
      this.args.pageSizeValues ? this.args.pageSizeValues : [10, 25, 50],
    );
  }

  /**
   * List of options for pageSize-selectBox
   * It's mapped from {@link pageSizeValues}
   *
   * @default []
   */
  @tracked
  pageSizeOptions = new TrackedArray<SelectOption>([]);

  /**
   * List of options for pageNumber-selectBox
   *
   * @default []
   */
  get currentPageNumberOptions(): SelectOption[] {
    const currentPageNumberOptions = [];
    const pageCount = this.pagesCount;
    for (let i = 1; i <= pageCount; i++) {
      currentPageNumberOptions.push(optionStrToObj(i));
    }
    return currentPageNumberOptions;
  }

  /**
   * These are options for the columns dropdown.
   * By default, the 'Show All', 'Hide All' and 'Restore Defaults' buttons are displayed.
   */
  get columnDropdownOptions(): ColumnDropdownOptions {
    return {
      showAll: true,
      hideAll: true,
      restoreDefaults: true,
      columnSets: new TrackedArray(this.columnSets || []),
    } as ColumnDropdownOptions;
  }

  constructor(owner: unknown, args: ModelsTableArgs & T) {
    super(owner, args);
    this.setup();
  }

  @action
  protected didUpdateNode(): void {
    this.updateHeaderCellsColspan();
  }

  @action
  protected didInsertNode(element: HTMLElement): void {
    this.focus(element);
    if (this.checkTextTranslations) {
      this._checkColumnTitles();
    }
  }

  /**
   * @method _checkColumnTitles
   */
  protected _checkColumnTitles(): void {
    this.columns.forEach((c, index) => {
      warn(
        `#${this._id}. No title. Column #${index}. ${c.propertyName}`,
        !(!hasOwnProperty.call(c, 'title') && c.propertyName),
        { id: '#emt-column-no-title' },
      );
    });
  }

  /**
   * Component init
   *
   * Set visibility and filtering attributes for each column
   *
   * @method setup
   */
  protected setup(): void {
    this._setupArgs();
    this._setupSelectedRows();
    this._setupColumns();
    this._setupPageSizeOptions();
  }

  protected _setupArgs(): void {
    this.expandedItems = new TrackedArray<ModelsTableDataItem>(
      this.args.expandedItems ?? [],
    );
    this.collapsedGroupValues = new TrackedArray<ModelsTableDataItem>(
      this.args.collapsedGroupValues ?? [],
    );
    this.selectedItems = new TrackedArray<ModelsTableDataItem>(
      this.args.selectedItems ?? [],
    );
    this.currentGroupingPropertyName =
      this.args.currentGroupingPropertyName ?? '';
  }

  /**
   * Focus on 'Global filter' on component render
   *
   * @method focus
   */
  protected focus(element: HTMLElement): void {
    if (this.showGlobalFilter && this.focusGlobalFilter) {
      (<HTMLInputElement>element.querySelector('.filterString'))?.focus();
    }
  }

  /**
   * Preselect table rows if `selectedItems` is provided
   *
   * `multipleSelected` may be set `true` if `selectedItems` has more than 1 item
   *
   * @method _setupSelectedRows
   */
  protected _setupSelectedRows(): void {
    if (
      isArray(this.selectedItems) &&
      this.selectedItems.length > 1 &&
      !this.multipleSelect
    ) {
      warn(
        '`multipleSelect` is set `true`, because you have provided multiple `selectedItems`.',
        false,
        { id: '#emt-multipleSelected_autoset' },
      );
      next(() => (this.multipleSelect = true));
    }
  }

  /**
   * Generate hash for column-`extend`
   *
   * @method _createColumnInstance
   */
  protected _createColumnInstance(
    options: ModelsTableColumnOptions,
  ): ModelsTableColumn {
    const column = new ModelsTableColumn(options);
    column.usePredefinedFilterOptions =
      'array' === typeOf(options.predefinedFilterOptions);
    column.originalDefinition = options;
    column.data = this.data;
    column.filterFunction =
      'function' === typeOf(options.filterFunction)
        ? options.filterFunction
        : defaultFilter;
    return column;
  }

  /**
   * Create a column.
   * This can be overwritten if you need to use your own column object.
   *
   * Override must be something like:
   *
   * @example
   * ```js
   * _createColumn(options) {
   *   const column = this._createColumnInstance(options);
   *   setProperties(column, options);
   *   return column;
   * }
   * ```
   */
  protected _createColumn(
    options: ModelsTableColumnOptions,
  ): ModelsTableColumn {
    return this._createColumnInstance(options);
  }

  /**
   * Create new properties for `columns`
   */
  protected _setupColumns(): void {
    const nColumns = new TrackedArray<ModelsTableColumn>(
      this.columns.map((column) => {
        const c = this._createColumn(column);

        assert(
          `"colspanForSortCell" must be 1 or greater. You passed "${c.colspanForSortCell}"`,
          c.colspanForSortCell >= 1,
        );
        assert(
          `"colspanForFilterCell" must be 1 or greater. You passed "${c.colspanForFilterCell}"`,
          c.colspanForFilterCell >= 1,
        );

        const sortDirection = column.sortDirection;
        const sortPrecedence = Number(column.sortPrecedence);
        const defaultSortPrecedence =
          sortPrecedence > NOT_SORTED ? sortPrecedence : NOT_SORTED;
        c.sorting =
          sortDirection && sortPrecedence > NOT_SORTED
            ? sortDirection
            : SortConstants.none;
        c.sortPrecedence = defaultSortPrecedence;
        return c;
      }),
    );
    this.processedColumns = nColumns;

    this.sortProperties = new TrackedArray<string>([]);
    const filteredOrderedColumns = nColumns
      .slice()
      .sort((c1, c2) => betterCompare(c1.sortPrecedence, c2.sortPrecedence))
      .filter((col) => isSortedByDefault(col));
    filteredOrderedColumns.forEach((column) => {
      this.sort(column);
      next(() => {
        if (this.multipleColumnsSorting) {
          this._multiColumnsSorting(
            column,
            column.sortField,
            column.sortDirection,
          );
        } else {
          this._singleColumnSorting(
            column,
            column.sortField,
            column.sortDirection,
          );
        }
      });
    });
    this.updateHeaderCellsColspanOnce();
  }

  /**
   * Provide backward compatibility with `pageSizeValues` equal to an array with numbers and not objects
   * `pageSizeValues` is live as is, `pageSizeOptions` is used in the templates
   */
  protected _setupPageSizeOptions(): void {
    this.pageSizeOptions = new TrackedArray(
      this.pageSizeValues.map(optionStrToObj),
    );
  }

  /**
   * Set `sortProperties` when single-column sorting is used
   */
  protected _singleColumnSorting(
    column: ModelsTableColumn,
    sortedBy?: string | number,
    newSorting?: SortConstants,
  ): void {
    this.processedColumns.forEach((pc) => (pc.sorting = SortConstants.none));
    column.sorting = newSorting || SortConstants.none;
    const sortFunctions = Object.create(null);
    if (sortedBy) {
      sortFunctions[sortedBy] = column.sortFunction;
    }
    this.sortFunctions = sortFunctions;
    this.sortProperties.splice(0, this.sortProperties.length);
    if (SortConstants.none !== newSorting) {
      this.sortProperties.push(`${sortedBy}:${newSorting}`);
    }
  }

  /**
   * Set `sortProperties` when multi-columns sorting is used
   */
  protected _multiColumnsSorting(
    column: ModelsTableColumn,
    sortedBy?: string | number,
    newSorting?: SortConstants,
  ): void {
    column.sorting = newSorting || SortConstants.none;
    const sortPropertiesMap: any = {};
    this.sortProperties.forEach((p) => {
      const [propertyName, order] = splitPropSortDirection(p);
      sortPropertiesMap[propertyName] = order;
    });
    if (sortedBy) {
      delete sortPropertiesMap[sortedBy];
    }

    const newSortProperties = [];
    const newSortFunctions = Object.create(null);
    keys(sortPropertiesMap).forEach((propertyName) => {
      if (propertyName !== sortedBy) {
        newSortProperties.push(
          `${propertyName}:${sortPropertiesMap[propertyName]}`,
        );
      }
      set(newSortFunctions, propertyName, column.sortFunction);
    });
    if (SortConstants.none !== newSorting && sortedBy) {
      newSortProperties.push(`${sortedBy}:${newSorting}`);
      newSortFunctions[sortedBy] = column.sortFunction;
    }
    this.sortProperties.splice(0, this.sortProperties.length);
    this.sortProperties.push(...newSortProperties);
    this.sortFunctions = newSortFunctions;
  }

  /**
   * Send {@link Core.ModelsTableArgs.onDisplayDataChanged | onDisplayDataChanged}-action when user does sort of filter.
   * Action is sent if {@link Core.ModelsTableArgs.onDisplayDataChanged | onDisplayDataChanged} is a closure-action
   */
  protected userInteractionObserver(overrides?: { [key: string]: any }): void {
    if (typeof this.args.onDisplayDataChanged === 'function') {
      let settings: DisplaySettingsSnapshot = {
        sort: this.sortProperties,
        currentPageNumber: this.currentPageNumber,
        pageSize: this.pageSize,
        filterString: this.filterString,
        filteredContent: this.filteredContent,
        selectedItems: this.selectedItems,
        expandedItems: this.expandedItems,
        currentGroupingPropertyName: this.currentGroupingPropertyName,
        displayGroupedValueAs: this.displayGroupedValueAs,
        columns: this.processedColumns.map((c) => ({
          filterString: c.filterString,
          filterField: c.filterField,
          sortField: c.sortField,
          sorting: c.sorting,
          propertyName: c.propertyName,
        })),
        columnFilters: {},
      };
      this.processedColumns.forEach((column) => {
        if (!isBlank(column.filterString) && !!column.filterField) {
          settings.columnFilters[column.filterField] = column.filterString;
        }
      });
      if (overrides) {
        settings = {
          ...settings,
          ...overrides,
        };
      }
      this.args.onDisplayDataChanged(settings);
    }
  }

  /**
   * Send {@link Core.ModelsTableArgs.onColumnsVisibilityChanged | onColumnsVisibilityChanged}-action when user changes which columns are visible.
   * Action is sent if {@link Core.ModelsTableArgs.onColumnsVisibilityChanged | onColumnsVisibilityChanged} is a closure action
   */
  protected _onColumnsVisibilityChanged(): void {
    if (typeof this.args.onColumnsVisibilityChanged === 'function') {
      const columnsVisibility = this.processedColumns.map((column) => ({
        isHidden: column.isHidden,
        mayBeHidden: column.mayBeHidden,
        propertyName: column.propertyName,
      }));
      this.args.onColumnsVisibilityChanged(columnsVisibility);
    }
  }

  /**
   * Handler for global filter and filter by each column
   */
  protected forceToFirstPage(): void {
    this.currentPageNumber = 1;
    this.userInteractionObserver({
      currentPageNumber: 1,
    });
  }

  /**
   * Collapse open rows when user change page size or moved to the another page
   */
  @action
  protected collapseRowOnNavigate(): void {
    this.expandedItems.splice(0, this.expandedItems.length);
  }

  /**
   * Update colspans for table header cells
   */
  protected updateHeaderCellsColspan(): void {
    once(this, this.updateHeaderCellsColspanOnce);
  }

  protected updateHeaderCellsColspanOnce(): void {
    this.processedColumns.forEach((column, index, columns) => {
      const colspanForSortCell = column.colspanForSortCell;
      const colspanForFilterCell = column.colspanForFilterCell;
      const nextColumnsForSortCell = columns
        .slice(index, index + colspanForSortCell)
        .filter((c) => c.isHidden);
      const nextColumnsForFilterCell = columns
        .slice(index, index + colspanForFilterCell)
        .filter((c) => c.isHidden);
      set(
        column,
        'realColspanForSortCell',
        colspanForSortCell - nextColumnsForSortCell.length,
      );
      set(
        column,
        'realColspanForFilterCell',
        colspanForFilterCell - nextColumnsForFilterCell.length,
      );
    });
  }

  /**
   * Clear all filters
   */
  protected _clearFilters(): void {
    this.filterString = '';
    this.processedColumns.forEach((pc) => (pc.filterString = ''));
  }

  /**
   * Toggle visibility for provided column
   *
   * It does nothing if column can't be hidden (see {@link Core.ModelsTableColumn.mayBeHidden | mayBeHidden}).
   * May trigger sending {@link Core.ModelsTableArgs.onColumnsVisibilityChanged | onColumnsVisibilityChanged}
   *
   * @event toggleColumnVisibility
   */
  @action
  toggleColumnVisibility(column: ModelsTableColumn): void {
    if (column.mayBeHidden) {
      column.isHidden = !column.isHidden;
      this._onColumnsVisibilityChanged();
    }
    this.updateHeaderCellsColspan();
  }

  /**
   * Show all columns
   *
   * Set each column `isHidden` value to `false`.
   * May trigger sending {@link Core.ModelsTableArgs.onColumnsVisibilityChanged | onColumnsVisibilityChanged}
   *
   * @event showAllColumns
   */
  @action
  showAllColumns(): void {
    this.processedColumns.forEach((pc) => (pc.isHidden = false));
    this._onColumnsVisibilityChanged();
    this.updateHeaderCellsColspan();
  }

  /**
   * Hide all columns that may be hidden (see {@link Core.ModelsTableColumn.mayBeHidden | mayBeHidden})
   *
   * May trigger sending {@link Core.ModelsTableArgs.onColumnsVisibilityChanged | onColumnsVisibilityChanged}
   *
   * @event hideAllColumns
   */
  @action
  hideAllColumns(): void {
    this.processedColumns.forEach((pc) => {
      if (pc.mayBeHidden) {
        pc.isHidden = true;
      }
    });
    this._onColumnsVisibilityChanged();
    this.updateHeaderCellsColspan();
  }

  /**
   * Restore columns visibility values according to their default visibility settings (see [defaultVisible](Utils.Core.ModelsTableColumn.html#property_defaultVisible))
   *
   * May trigger sending {@link Core.ModelsTableArgs.onColumnsVisibilityChanged | onColumnsVisibilityChanged}
   *
   * @event restoreDefaultVisibility
   */
  @action
  restoreDefaultVisibility(): void {
    this.processedColumns.forEach((c) => {
      set(c, 'isHidden', !c.defaultVisible);
      this._onColumnsVisibilityChanged();
    });
    this.updateHeaderCellsColspan();
  }

  /**
   * Toggle visibility for every column in the selected columns set
   *
   * It ignores columns that can't be hidden (see {@link Core.ModelsTableColumn.mayBeHidden | mayBeHidden}).
   * May trigger sending {@link Core.ModelsTableArgs.onColumnsVisibilityChanged | onColumnsVisibilityChanged}
   *
   * @event toggleColumnSetVisibility
   */
  @action
  toggleColumnSetVisibility(
    columnSetToToggle: ColumnSet = {} as ColumnSet,
  ): void {
    // If hideOtherColumns is not set, default to true if toggleSet=false, else to false
    const hideOtherColumns = isNone(columnSetToToggle.hideOtherColumns)
      ? !columnSetToToggle.toggleSet
      : columnSetToToggle.hideOtherColumns;
    let showColumns: string[] = [];
    // If showColumns is a function, call it
    if (typeof columnSetToToggle.showColumns === 'function') {
      run(this, columnSetToToggle.showColumns, this.processedColumns);
      this.updateHeaderCellsColspan();
      return;
    } else {
      showColumns = columnSetToToggle.showColumns || [];
    }

    const setColumns: ModelsTableColumn[] = [];
    const otherColumns: ModelsTableColumn[] = [];

    this.processedColumns.forEach((column) => {
      if (!column.propertyName || !column.mayBeHidden) {
        return;
      }

      if (showColumns.includes(column.propertyName)) {
        setColumns.push(column);
      } else {
        otherColumns.push(column);
      }
    });

    // By default, all columns should always be set to visible
    // However, if `toggleSet=true`, then the set should be toggled between visible/hidden
    // In this case, if one of the set columns is hidden, make them all visible, else hide them
    let targetVisibility = true;
    if (columnSetToToggle.toggleSet) {
      targetVisibility = !!setColumns.find((c) => !c.isVisible);
    }

    setColumns.forEach((column) => {
      if (
        column.propertyName &&
        showColumns.includes(column.propertyName) &&
        column.isVisible !== targetVisibility
      ) {
        this.toggleColumnVisibility(column);
      }
    });

    if (hideOtherColumns) {
      otherColumns.forEach((column) => {
        if (
          column.propertyName &&
          !showColumns.includes(column.propertyName) &&
          column.isVisible
        ) {
          this.toggleColumnVisibility(column);
        }
      });
    }
    this.updateHeaderCellsColspan();
  }

  /**
   * Pagination click-handler
   *
   * It moves user to the selected page.
   * Check {@link DefaultTheme.PaginationNumeric} and {@link DefaultTheme.PaginationSimple} for usage examples.
   * May trigger sending {@link Core.ModelsTableArgs.onDisplayDataChanged | onDisplayDataChanged}
   *
   * @event goToPage
   */
  @action
  goToPage(pageNumber: number): void {
    this.currentPageNumber = +pageNumber;
    this.collapseRowOnNavigate();
    this.userInteractionObserver({
      currentPageNumber: +pageNumber,
    });
  }

  /**
   * Sort selected column by [sortedBy](Utils.Core.ModelsTableColumn.html#property_sortedBy) or {@link Core.ModelsTableColumn.propertyName | propertyName}
   *
   * It will drop sorting for other columns if {@link multipleColumnsSorting} is set to `false`.
   * It will add new sorting if {@link multipleColumnsSorting} is set to `true`.
   * May trigger sending {@link Core.ModelsTableArgs.onDisplayDataChanged | onDisplayDataChanged}.
   * Table will be dropped to the first page if sorting is done
   *
   * For multiColumns-sorting calling sort will change sort-order. E.g.:
   *
   * @example
   * ```js
   * sortProperties = ['a:asc', 'b:asc', 'c:desc'];
   * sort({propertyName: 'b'}); // sortProperties now is ['a:asc', 'c:desc', 'b:desc']
   * ```
   *
   * @event sort
   */
  @action
  sort(column: ModelsTableColumn): void {
    if (!column.sortField) {
      return;
    }
    const currentSorting = column.sorting || SortConstants.none;
    let newSorting = this.sortMap[currentSorting];
    if (column.sortField === this.currentGroupingPropertyName) {
      newSorting =
        this.sortByGroupedFieldDirection === SortConstants.asc
          ? SortConstants.desc
          : SortConstants.asc;
      this.sortByGroupedFieldDirection = newSorting;
      return;
    }
    next(() => {
      if (this.multipleColumnsSorting) {
        this._multiColumnsSorting(column, column.sortField, newSorting);
      } else {
        this._singleColumnSorting(column, column.sortField, newSorting);
      }
      this.collapseRowOnNavigate();
      this.forceToFirstPage();
    });
  }

  /**
   * Expand selected row
   *
   * It will cause expandedRowComponent to be used for it. It will collapse already expanded row if {@link multipleExpand} is set to `false`.
   * Expanding is assigned to the record itself and not their index.
   * So, if page #1 has first row expanded and user is moved to any another page, first row on new page won't be expanded.
   * However, when user will be back to the first page, first row will be expanded. May trigger sending {@link Core.ModelsTableArgs.onDisplayDataChanged | onDisplayDataChanged}
   *
   * @event expandRow
   */
  @action
  expandRow(index: number, dataItem: ModelsTableDataItem): void {
    assert('row index should be numeric', typeOf(index) === 'number');
    assert(
      `row #${index} is already expanded`,
      !this.expandedItems.includes(dataItem),
    );
    if (!this.multipleExpand && this.expandedItems.length === 1) {
      this.expandedItems.splice(0, this.expandedItems.length);
    }
    this.expandedItems.push(dataItem);
    this.userInteractionObserver();
  }

  /**
   * Collapse selected row
   *
   * May trigger sending {@link Core.ModelsTableArgs.onDisplayDataChanged | onDisplayDataChanged}
   *
   * @event collapseRow
   */
  @action
  collapseRow(index: number, dataItem: ModelsTableDataItem): void {
    assert('row index should be numeric', typeOf(index) === 'number');
    const expandedItemIndex = this.expandedItems.indexOf(dataItem);
    assert(`row #${index} is not expanded`, expandedItemIndex !== -1);
    this.expandedItems.splice(expandedItemIndex, 1);
    this.userInteractionObserver();
  }

  /**
   * Expand all rows in the current page
   *
   * It works only if {@link multipleExpand} is set to `true`. May trigger sending {@link Core.ModelsTableArgs.onDisplayDataChanged | onDisplayDataChanged}
   *
   * @event expandAllRows
   */
  @action
  expandAllRows(): void {
    if (this.multipleExpand) {
      this.expandedItems.splice(0, this.expandedItems.length);
      if (this.useDataGrouping) {
        const itemsToExpand: ModelsTableDataItem[] = [];
        this.groupedVisibleContent.forEach((m) => {
          if (isArray(m)) {
            itemsToExpand.push(...m);
          }
        });
        this.expandedItems.push(...itemsToExpand);
      } else {
        this.expandedItems.push(...this.visibleContent);
      }
      this.userInteractionObserver();
    }
  }

  /**
   * Collapse all rows in the current page
   *
   * May trigger sending {@link Core.ModelsTableArgs.onDisplayDataChanged | onDisplayDataChanged}
   *
   * @event collapseAllRows
   */
  @action
  collapseAllRows(): void {
    this.collapseRowOnNavigate();
    this.userInteractionObserver();
  }

  /**
   * Handler for row-click
   *
   * Toggle `selected`-state for row. Select only one or multiple rows depends on {@link multipleSelect} value.
   * May trigger sending {@link Core.ModelsTableArgs.onDisplayDataChanged | onDisplayDataChanged}
   *
   * @event clickOnRow
   */
  @action
  clickOnRow(index: number, dataItem: ModelsTableDataItem): void {
    assert('row index should be numeric', typeOf(index) === 'number');
    if (this.selectRowOnClick) {
      const selectedItemIndex = this.selectedItems.indexOf(dataItem);
      if (selectedItemIndex === -1) {
        if (!this.multipleSelect && this.selectedItems.length === 1) {
          this.selectedItems.splice(0, this.selectedItems.length);
        }
        this.selectedItems.push(dataItem);
      } else {
        this.selectedItems.splice(selectedItemIndex, 1);
      }
    }
    this.userInteractionObserver();
  }

  /**
   * Handler for double-click on row
   *
   * May trigger sending {@link Core.ModelsTableArgs.onRowDoubleClick | onRowDoubleClick}
   *
   * @event doubleClickOnRow
   */
  @action
  doubleClickOnRow(index: number, dataItem: ModelsTableDataItem): void {
    assert('row index should be numeric', typeOf(index) === 'number');
    if (typeof this.args.onRowDoubleClick === 'function') {
      this.args.onRowDoubleClick(index, dataItem);
    }
  }

  /**
   * Handler for row-hover
   *
   * May trigger sending {@link Core.ModelsTableArgs.onRowHover | onRowHover}
   *
   * @event hoverOnRow
   */
  @action
  hoverOnRow(index: number, dataItem: ModelsTableDataItem): void {
    assert('row index should be numeric', typeOf(index) === 'number');
    if (typeof this.args.onRowHover === 'function') {
      this.args.onRowHover(index, dataItem);
    }
  }

  /**
   * Handler for row-hover
   *
   * May trigger sending {@link Core.ModelsTableArgs.onRowOut | onRowOut}
   *
   * @event outRow
   */
  @action
  outRow(index: number, dataItem: ModelsTableDataItem): void {
    assert('row index should be numeric', typeOf(index) === 'number');
    if (typeof this.args.onRowOut === 'function') {
      this.args.onRowOut(index, dataItem);
    }
  }

  /**
   * Clear all column filters and global filter
   *
   * May trigger sending {@link Core.ModelsTableArgs.onDisplayDataChanged | onDisplayDataChanged}
   *
   * @event clearFilters
   */
  @action
  clearFilters(): void {
    this._clearFilters();
    this.userInteractionObserver({
      filterString: '',
    });
  }

  /**
   * Select/deselect all rows
   *
   * May trigger sending {@link Core.ModelsTableArgs.onDisplayDataChanged | onDisplayDataChanged}
   *
   * @event toggleAllSelection
   */
  @action
  toggleAllSelection(): void {
    const allSelectedBefore = this.selectedItems.length === this.data.length;
    this.selectedItems.splice(0, this.selectedItems.length);
    if (!allSelectedBefore) {
      const toSelect = this.data.slice ? this.data.slice() : this.data;
      this.selectedItems.push(...toSelect);
    }
    this.userInteractionObserver();
  }

  /**
   * Expand or collapse all rows in the rows group
   *
   * **IMPORTANT** {@link Core.ModelsTableArgs.multipleExpand | multipleExpand} should be set to `true` otherwise this action won't do anything
   *
   * @event toggleGroupedRowsExpands
   */
  @action
  toggleGroupedRowsExpands(groupedValue: string): void {
    if (!this.multipleExpand) {
      return;
    }
    const groupedItems = this.groupedArrangedContent.filter(
      (cn) => get(cn, this.currentGroupingPropertyName) === groupedValue,
    );
    const notExpandedGroupItems = groupedItems.filter(
      (record) => !this.expandedItems.includes(record),
    );
    if (notExpandedGroupItems.length) {
      const toPush = notExpandedGroupItems.filter(
        (record) => !this.expandedItems.includes(record),
      );
      this.expandedItems.push(...toPush);
    } else {
      groupedItems.forEach((record) => {
        const index = this.expandedItems.indexOf(record);
        if (index !== -1) {
          this.expandedItems.splice(index, 1);
        }
      });
    }
    this.userInteractionObserver();
  }

  /**
   * Select/deselect rows from the rows group
   *
   * **IMPORTANT** {@link Core.ModelsTableArgs.multipleSelect | multipleSelect} should be set to `true` otherwise this action won't do anything
   *
   * May trigger sending {@link Core.ModelsTableArgs.onDisplayDataChanged | onDisplayDataChanged}
   *
   * @event toggleGroupedRowsSelection
   */
  @action
  toggleGroupedRowsSelection(groupedValue: string): void {
    if (!this.multipleSelect) {
      return;
    }
    const groupedItems = this.groupedArrangedContent.filter(
      (cn) => get(cn, this.currentGroupingPropertyName) === groupedValue,
    );
    const notSelectedGroupItems = groupedItems.filter(
      (record) => !this.selectedItems.includes(record),
    );
    if (notSelectedGroupItems.length) {
      const toPush = notSelectedGroupItems.filter(
        (record) => !this.selectedItems.includes(record),
      );
      this.selectedItems.push(...toPush);
    } else {
      groupedItems.forEach((record) => {
        const index = this.selectedItems.indexOf(record);
        if (index !== -1) {
          this.selectedItems.splice(index, 1);
        }
      });
    }
    this.userInteractionObserver();
  }

  /**
   * Collapse or expand rows group
   *
   * @event toggleGroupedRows
   */
  @action
  toggleGroupedRows(groupedValue: string): void {
    const index = this.collapsedGroupValues.indexOf(groupedValue);
    if (index === -1) {
      this.collapsedGroupValues.push(groupedValue);
    } else {
      this.collapsedGroupValues.splice(index, 1);
    }
  }

  /**
   * Change number of shown rows
   *
   * @event changePageSize
   */
  @action
  changePageSize(newPageSize: string): void {
    const newPageSizeNumeric = +newPageSize;
    this.pageSize = newPageSizeNumeric;
    this.currentPageNumber = 1;
    this.collapseRowOnNavigate();
    this.userInteractionObserver({
      pageSize: newPageSizeNumeric,
      currentPageNumber: 1,
    });
  }

  /**
   * Change global filter value
   *
   * @event changeGlobalFilter
   */
  @action
  changeGlobalFilter(e: Event | string): void {
    const newGlobalFilterValue =
      typeof e === 'object'
        ? ((e as Event).target as HTMLInputElement).value
        : `${e}`;
    this.filterString = newGlobalFilterValue;
    this.currentPageNumber = 1;
    this.userInteractionObserver({
      filterString: newGlobalFilterValue,
      currentPageNumber: 1,
    });
  }

  /**
   * Change column filter value
   *
   * @event changeColumnFilter
   */
  @action
  changeColumnFilter(
    newColumnFilterValue: string,
    column: ModelsTableColumn,
  ): void {
    column.filterString = newColumnFilterValue;
    this.forceToFirstPage();
  }

  /**
   * @event changeGroupingPropertyName
   */
  @action
  changeGroupingPropertyName(newGroupingPropertyName: string): void {
    this.currentGroupingPropertyName = newGroupingPropertyName;
    this.userInteractionObserver({
      currentGroupingPropertyName: newGroupingPropertyName,
    });
  }

  @action
  protected onClick(e?: Event): void {
    if (this.isolated) {
      e?.stopPropagation?.();
    }
  }
}
