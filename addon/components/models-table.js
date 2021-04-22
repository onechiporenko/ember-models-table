import { assign } from '@ember/polyfills';
import { tracked } from '@glimmer/tracking';
import { typeOf, compare, isBlank, isNone } from '@ember/utils';
import { run } from '@ember/runloop';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { assert, warn } from '@ember/debug';
import { action, setProperties, set, get } from '@ember/object';
import { isArray, A } from '@ember/array';
import betterCompare from '../utils/emt/better-compare';
import { propertyNameToTitle } from '../utils/emt/column';
import SORT_CONSTANTS from 'ember-models-table/constants/sort-constants';
import ModelsTableColumn from '../utils/emt/emt-column';

/**
 * @class GroupedHeader
 * @namespace Internal
 */
/**
 * Header for grouped columns
 * @property title
 * @type string
 * @for GroupedHeader
 */
/**
 * HTML colspan attr
 * @property colspan
 * @type number
 * @for GroupedHeader
 */
/**
 * HTML rowspan attr
 * @property rowspan
 * @type number
 * @for GroupedHeader
 */

/**
 * @class SelectOption
 * @namespace Internal
 */
/**
 * @property value
 * @for SelectOption
 * @type {string|number|boolean}
 */
/**
 * @property label
 * @for SelectOption
 * @type {string|number|boolean}
 */

/**
 * @class ColumnSet
 * @namespace Internal
 */
/**
 * @property label
 * @for ColumnSet
 * @type string
 */
/**
 * @property showColumns
 * @for ColumnSet
 * @type string[]|Function
 */
/**
 * @property hideOtherColumns
 * @for ColumnSet
 * @type boolean
 */
/**
 * @property toggleSet
 * @for ColumnSet
 * @type boolean
 */

/**
 * @class ColumnDropdownOptions
 * @namespace Internal
 */
/**
 * @property showAll
 * @type boolean
 * @for ColumnDropdownOptions
 */
/**
 * @property hideAll
 * @type boolean
 * @for ColumnDropdownOptions
 */
/**
 * @property restoreDefaults
 * @type boolean
 * @for ColumnDropdownOptions
 */
/**
 * @property columnSets
 * @type ColumnSet[]
 * @for ColumnDropdownOptions
 */

/**
 * @class SortMap
 * @namespace Internal
 */
/**
 * @property asc
 * @type string
 * @for SortMap
 */
/**
 * @property desc
 * @type string
 * @for SortMap
 */
/**
 * @property none
 * @type string
 * @for SortMap
 */

const {
  keys,
  prototype: { hasOwnProperty },
} = Object;

const NOT_SORTED = -1;

/*
 * @param {Utils.ModelsTableColumn} column
 * @return boolean
 */
const isSortedByDefault = (column) => column.sortPrecedence > NOT_SORTED;

/*
 * Default filter-function used in the filter by columns
 *
 * @param {string} cellValue value in the table cell
 * @param {string} filterString needed substring
 * @return boolean
 */
const defaultFilter = (cellValue, filterString) =>
  cellValue.includes(filterString);

/*
 * @param {string} option
 * @return {{value: string|number|boolean, label: string|number|boolean}}
 */
const optionStrToObj = (option) => ({ value: option, label: option });

const chunkBy = (collection, propertyName, sortOrder) => {
  const doSort = !isNone(sortOrder);
  const chunks = A([]);
  const values = [];
  if (!isArray(collection)) {
    return chunks;
  }
  collection.forEach((item) => {
    const value = get(item, propertyName);
    if (!values.includes(value)) {
      values.push(value);
      chunks.push(A([]));
    }
    const index = values.indexOf(value);
    chunks[index].pushObject(item);
  });
  if (doSort) {
    const sortedValues = values.slice().sort((v1, v2) => {
      let result = betterCompare(v1, v2);
      if (result !== 0) {
        return sortOrder === SORT_CONSTANTS.DESC ? -1 * result : result;
      }
      return 0;
    });
    return sortedValues.map((v) => chunks[values.indexOf(v)]);
  }
  return chunks;
};

const objToArray = (map) => {
  let ret = [];
  if (isArray(map)) {
    map.forEach((m) => {
      ret = [...ret, ...m];
    });
    return ret;
  }
  keys(map).forEach((k) => {
    if (isArray(map[k])) {
      ret = [...ret, ...map[k]];
    }
  });
  return ret;
};

/**
 * Table-component with pagination, sorting and filtering.
 *
 * It should be used when whole dataset is already loaded. For server-side pagination, filtering and sorting
 * [models-table-server-paginated](Components.ModelsTableServerPaginated.html) should be used.
 *
 * Basic usage example:
 *
 * ```hbs
 * <ModelsTable @data={{model}} @columns={{columns}} />
 * ```
 *
 * Usage with block context:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
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
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
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
 * * [models-table/global-filter](Components.ModelsTableGlobalFilter.html) - global filter used for table data
 * * [models-table/columns-dropdown](Components.Utils.ModelsTableColumnsDropdown.html) - dropdown with list of options to toggle columns and column-sets visibility
 * * [models-table/data-group-by-select](Components.ModelsTableDataGroupBySelect.html) - dropdown to select property for table-rows grouping
 * * [models-table/table](Components.ModelsTableTable.html) - table with a data
 * * [models-table/footer](Components.ModelsTableFooter.html) - summary and pagination
 * * [models-table/summary](Components.ModelsTableSummary.html) - component with summary info about table data. It also contains button to clear all filters applied to the table
 * * [models-table/size-select](Components.ModelsTableSizeSelect.html) - component with a page sizes dropdown. It allows to select number if records shown on page
 * * [models-table/pagination-numeric](Components.ModelsTablePaginationNumeric.html) - component with a table navigation. It allows to move to the page by its number
 * * [models-table/pagination-simple](Components.ModelsTablePaginationSimple.html) - component with a table navigation. It allows to move to the first, last, prev and next pages (this four buttons are shown always)
 *
 * Check own docs for each component to get detailed info.
 *
 * References to the following properties are yielded:
 *
 * * [processedColumns](Components.ModelsTable.html#property_processedColumns) - list of columns in the table
 * * [visibleProcessedColumns](Components.ModelsTable.html#property_visibleProcessedColumns) - list of currently visible columns in the table
 * * [visibleContent](Components.ModelsTable.html#property_visibleContent) - list of records shown in the current table's page
 * * [groupedHeaders](Components.ModelsTable.html#property_groupedHeaders) - extra headers for table's header. DOESN'T work properly with visibility toggle for columns
 * * [groupedVisibleContent](Components.ModelsTable.html#property_groupedVisibleContent) - list of records shown in the current table's page when rows grouping is enabled
 * * [groupedVisibleContentValuesOrder](Components.ModelsTable.html#property_groupedVisibleContentValuesOrder) - list of values for property used to group rows
 * * [groupedArrangedContent](Components.ModelsTable.html#property_groupedArrangedContent) - list of all filtered and sorted records in the table used when rows grouping is enabled
 * * [displayGroupedValueAs](Components.ModelsTable.html#property_displayGroupedValueAs) - determines how value for grouping is shown. Can "row" and "column"
 * * [sortByGroupedFieldDirection](Components.ModelsTable.html#property_sortByGroupedFieldDirection) - sorting order for property used to group rows
 * * [useDataGrouping](Components.ModelsTable.html#property_useDataGrouping) - flag to turn on/off rows grouping
 * * [globalFilterUsed](Components.ModelsTable.html#property_globalFilterUsed) - `true` if global filter is used
 * * [globalFilter](Components.ModelsTable.html#property_filterString) - value of global filter
 * * [anyFilterUsed](Components.ModelsTable.html#property_anyFilterUsed) - `true` when any filter (global or for column) is used. `false` when no filters are used
 * * [useFilteringByColumns](Components.ModelsTable.html#property_useFilteringByColumns) - determines if columns filtering should be used. By default if it's `false` header's row with filter input/select fields is not shown
 * * [collapsedGroupValues](Components.ModelsTable.html#property_collapsedGroupValues) - list of values for property used to group rows. Row group with this value are collapsed
 * * [pagesCount](Components.ModelsTable.html#property_pagesCount) - number of pages in the table
 * * [recordsCount](Components.ModelsTable.html#property_arrangedContentLength) - number of records in the table
 * * [firstIndex](Components.ModelsTable.html#property_firstIndex) - first row's index in the current page
 * * [lastIndex](Components.ModelsTable.html#property_lastIndex) - last row's index in the current page
 * * [currentPageNumber](Components.ModelsTable.html#property_currentPageNumber) - current page
 * * [currentPageNumberOptions](Components.ModelsTable.html#property_currentPageNumberOptions) - list of options for current page
 * * [pageSizeOptions](Components.ModelsTable.html#property_pageSizeOptions) - list of options for page size select
 * * [pageSize](Components.ModelsTable.html#property_pageSize) - number of rows shown in the table's page
 * * [columnDropdownOptions](Components.ModelsTable.html#property_columnDropdownOptions) - list of options for columns dropdown
 * * [allColumnsAreHidden](Components.ModelsTable.html#property_allColumnsAreHidden) - `true` if all columns are hidden. `false` if at least one column is visible
 * * [dataGroupOptions](Components.ModelsTable.html#property_dataGroupOptions) - list of property names used for rows grouping
 * * [currentGroupingPropertyName](Components.ModelsTable.html#property_currentGroupingPropertyName) - property name used now for grouping rows * [themeInstance](Components.ModelsTable.html#property_themeInstance) - theme instance used in the table
 * * [expandedItems](Components.ModelsTable.html#property_expandedItems) - list of expanded rows
 * * [selectedItems](Components.ModelsTable.html#property_selectedItems) - list of selected rows
 * * [isLoading](Components.ModelsTable.html#property_isLoading) - `true` when data for table is loading (used only for `models-table-server-paginated`)
 * * [isError](Components.ModelsTable.html#property_isError) - `true` when request for data loading failed (used only for `models-table-server-paginated`)
 * * [publicAPI](Components.ModelsTable.html#property_publicAPI) - public API that allows for programmatic interaction with the component
 *
 * References to the following actions are yielded:
 *
 * * [showAllColumns](Components.ModelsTable.html#event_showAllColumns) - show all columns in the table (by default used in the columns dropdown)
 * * [hideAllColumns](Components.ModelsTable.html#event_hideAllColumns) - hide all column in the table (by default used in the columns dropdown)
 * * [restoreDefaultVisibility](Components.ModelsTable.html#event_restoreDefaultVisibility) - show columns visible initially (by default used in the columns dropdown)
 * * [toggleColumnSetVisibility](Components.ModelsTable.html#event_toggleColumnSet) - toggle visibility for columns in the custom columns set (by default used in the columns dropdown)
 * * [toggleColumnVisibility](Components.ModelsTable.html#event_toggleHidden) - toggle visibility for column (by default used in the columns dropdown)
 * * [expandRow](Components.ModelsTable.html#event_expandRow) - expand or collapse row to show details
 * * [collapseRow](Components.ModelsTable.html#event_collapseRow) - select or deselect row
 * * [expandAllRows](Components.ModelsTable.html#event_expandAllRows) - expand all rows
 * * [collapseAllRows](Components.ModelsTable.html#event_collapseAllRows) - collapse all rows
 * * [toggleAllSelection](Components.ModelsTable.html#event_toggleAllSelection) - select or deselect all rows
 * * [goToPage](Components.ModelsTable.html#event_goToPage) - change table's page (by default used in the pagination)
 * * [clearFilters](Components.ModelsTable.html#event_clearFilters) - clear all filters (by default used in the summary)
 * * [sort](Components.ModelsTable.html#event_sort) - sort provided column
 * * [toggleGroupedRowsSelection](Components.ModelsTable.html#event_toggleGroupedRowsSelection) - select or deselect all rows in the group (for cases when rows grouping is used)
 * * [toggleGroupedRowsExpands](Components.ModelsTable.html#event_toggleGroupedRowsExpands) - expand or collapse all rows in the group (for cases when rows grouping is used)
 * * [toggleGroupedRows](Components.ModelsTable.html#event_toggleGroupedRows) - toggle rows group (for cases when rows grouping is used)
 * * [clickOnRow](Components.ModelsTable.html#event_clickOnRow)
 * * [doubleClickOnRow](Components.ModelsTable.html#event_doubleClickOnRow)
 * * [hoverOnRow](Components.ModelsTable.html#event_hoverOnRow)
 * * [outRow](Components.ModelsTable.html#event_outRow)
 * * [changePageSize](Components.ModelsTable.html#event_changePageSize) - set number of rows on the page
 * * [changeGlobalFilter](Components.ModelsTable.html#event_changeGlobalFilter) - change global filter value
 * * [changeColumnFilter](Components.ModelsTable.html#event_changeColumnFilter) - change filter value for column
 * * [changeGroupingPropertyName](Components.ModelsTable.html#event_changeGroupingPropertyName) - change property used to group rows
 *
 * ModelsTable has a lot of options you may configure, but there are two required properties called `data` and `columns`. First one contains data (e.g. list of records from the store). Second one is a list of table's columns (check [models-table-column](Utils.ModelsTableColumn.html) for available options).
 *
 * @class ModelsTable
 * @namespace Components
 * @extends Glimmer.Component
 */
export default class ModelsTableComponent extends Component {
  @service() store;

  /**
   * @property _showColumnsDropdown
   * @type boolean
   * @protected
   * @default true
   */
  @tracked
  _showColumnsDropdown = true;

  /**
   * @property _expandedItems
   * @type object[]
   * @protected
   * @default []
   */
  _expandedItems = A([]);

  /**
   * @property _selectedItems
   * @type object[]
   * @protected
   * @default []
   */
  _selectedItems = A([]);

  /**
   * @property _pageSize
   * @type number
   * @protected
   */
  get themeInstance() {
    return this.args.themeInstance || {};
  }

  /**
   * @property _pageSize
   * @type number
   * @protected
   * @default 10
   */
  @tracked
  _pageSize = 10;
  /**
   * Number of records shown on one table-page
   *
   * @property pageSize
   * @type number
   * @default 10
   */
  get pageSize() {
    return this.args.pageSize ?? this._pageSize;
  }
  set pageSize(v) {
    this._pageSize = v;
  }

  /**
   * @property _currentPageNumber
   * @type number
   * @protected
   * @default 1
   */
  @tracked
  _currentPageNumber = 1;

  /**
   * Currently shown page number. It may be set initially
   *
   * @property currentPageNumber
   * @type number
   * @default 1
   */
  get currentPageNumber() {
    const currentPageNumber =
      this.args.currentPageNumber ?? this._currentPageNumber;
    return this.arrangedContentLength <= (currentPageNumber - 1) * this.pageSize
      ? 1
      : currentPageNumber;
  }
  set currentPageNumber(currentPageNumber) {
    this._currentPageNumber = currentPageNumber;
  }

  /**
   * Flag to determine if component should bubble inner `click` action handler
   *
   * It's useful when `models-table` is used inside the row-expand
   *
   *
   * @property isolated
   * @type boolean
   * @default false
   */
  @tracked
  isolated = false;

  /**
   * Order of sorting for each columns. Unsorted column firstly become sorted ASC, then DESC, then sorting is dropped again
   *
   * @property sortMap
   * @type Internal.SortMap
   */
  sortMap = {
    [SORT_CONSTANTS.NONE]: SORT_CONSTANTS.ASC,
    [SORT_CONSTANTS.ASC]: SORT_CONSTANTS.DESC,
    [SORT_CONSTANTS.DESC]: SORT_CONSTANTS.NONE,
  };

  /**
   * List of properties to sort table rows
   *
   * Each value is like 'propertyName:sortDirection'
   *
   * @property sortProperties
   * @protected
   */
  @tracked
  sortProperties = A([]);

  /**
   * Hash of custom functions to sort table rows
   *
   * @property sortFunctions
   * @type object
   * @protected
   */
  @tracked
  sortFunctions = Object.create(null);

  @tracked
  _multipleColumnsSorting = true;
  /**
   * Determines if multi-columns sorting should be used
   *
   * @property multipleColumnsSorting
   * @type boolean
   * @default true
   */
  get multipleColumnsSorting() {
    return this.args.multipleColumnsSorting ?? this._multipleColumnsSorting;
  }
  set multipleColumnsSorting(v) {
    this._multipleColumnsSorting = v;
  }

  /**
   * Determines if component footer should be shown on the page
   *
   * @property showComponentFooter
   * @type boolean
   * @default true
   */
  get showComponentFooter() {
    return this.args.showComponentFooter ?? true;
  }

  /**
   * Determines if dropdown for current page number should be shown near the pagination block
   *
   * @property showCurrentPageNumberSelect
   * @type boolean
   * @default true
   */
  get showCurrentPageNumberSelect() {
    return this.args.showCurrentPageNumberSelect ?? true;
  }

  /**
   * @property _useNumericPagination
   * @type boolean
   * @protected
   * @default true
   */
  @tracked
  _useNumericPagination = false;
  /**
   * Determines if numeric pagination should be used
   *
   * @property useNumericPagination
   * @type boolean
   * @default false
   */
  get useNumericPagination() {
    return this.args.useNumericPagination ?? this._useNumericPagination;
  }
  set useNumericPagination(v) {
    this._useNumericPagination = v;
  }

  /**
   * Determines if columns-dropdown should be shown
   *
   * @property showColumnsDropdown
   * @type boolean
   * @default true
   */
  get showColumnsDropdown() {
    return this.args.showColumnsDropdown ?? this._showColumnsDropdown;
  }
  set showColumnsDropdown(v) {
    this._showColumnsDropdown = v;
  }

  /**
   * Determines if filtering by columns should be available to the user
   *
   * @property useFilteringByColumns
   * @type boolean
   * @default true
   */
  get useFilteringByColumns() {
    return this.args.useFilteringByColumns ?? true;
  }

  /**
   * Determines if filtering (global and by column) should ignore case
   *
   * @property filteringIgnoreCase
   * @type boolean
   * @default false
   */
  get filteringIgnoreCase() {
    return this.args.filteringIgnoreCase ?? true;
  }

  /**
   * Determines if filtering should be done by hidden columns
   *
   * **Notice:** after changing this value filtering results will be updated only after filter options are changed
   *
   * @property doFilteringByHiddenColumns
   * @type boolean
   * @default true
   */
  get doFilteringByHiddenColumns() {
    return this.args.doFilteringByHiddenColumns ?? true;
  }

  /**
   * Determines if 'Global filter'-field should be shown
   *
   * @property showGlobalFilter
   * @type boolean
   * @default true
   */
  get showGlobalFilter() {
    return this.args.showGlobalFilter ?? true;
  }

  /**
   * Determines if focus should be on the 'Global filter'-field on component render
   *
   * @property focusGlobalFilter
   * @type boolean
   * @default false
   */
  get focusGlobalFilter() {
    return this.args.focusGlobalFilter ?? false;
  }

  /**
   * Value for development purposes. Used to check translation issues like:
   *
   * * Auto generated titles for columns
   *
   * @property checkTextTranslations
   * @type boolean
   * @default false
   */
  get checkTextTranslations() {
    return this.args.checkTextTranslations ?? false;
  }

  /**
   * Determines if rows should be grouped for some property
   *
   * Grouped value may be shown in the separated row on the top of the group or in the first column (in the cell with rowspan) in the each group (see [displayGroupedValueAs](Components.ModelsTable.html#property_displayGroupedValueAs))
   *
   * Generally you should not show column with property which is used for grouping (but it's up to you)
   *
   * @property useDataGrouping
   * @type boolean
   * @default false
   */
  get useDataGrouping() {
    return this.args.useDataGrouping ?? false;
  }

  @tracked
  _currentGroupingPropertyName = null;
  /**
   * Property name used now for grouping rows
   *
   * **IMPORTANT** It should be set initially if [useDataGrouping](Components.ModelsTable.html#property_useDataGrouping) is set to `true`
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  get currentGroupingPropertyName() {
    return (
      this.args.currentGroupingPropertyName ?? this._currentGroupingPropertyName
    );
  }
  set currentGroupingPropertyName(v) {
    this._currentGroupingPropertyName = v;
  }

  /**
   * Sort direction for grouped property values
   *
   * @property sortByGroupedFieldDirection
   * @protected
   * @type string
   * @default 'asc'
   */
  @tracked
  sortByGroupedFieldDirection = SORT_CONSTANTS.ASC;

  /**
   * Global filter value
   *
   * @property filterString
   * @type string
   * @default ''
   */
  @tracked
  _filterString = '';

  /**
   * Global filter value
   *
   * @property filterString
   * @type string
   * @default ''
   */
  get filterString() {
    return this.args.filterString ?? this._filterString;
  }
  set filterString(v) {
    this._filterString = v;
  }

  /**
   * @property _displayGroupedValueAs
   * @type string
   * @protected
   * @default 'row'
   */
  @tracked
  _displayGroupedValueAs = 'row';
  /**
   * Determines how grouped value will be displayed - as a row or column
   *
   * Allowed values are `row` and `column`
   *
   * @property displayGroupedValueAs
   * @type string
   * @default 'row'
   */
  get displayGroupedValueAs() {
    return this.args.displayGroupedValueAs ?? this._displayGroupedValueAs;
  }
  set displayGroupedValueAs(v) {
    this._displayGroupedValueAs = v;
  }

  /**
   * Used in numeric pagination. If pages count is less than `collapseNumPaginationForPagesCount`, all pages will be shown.
   * E.g. for `collapseNumPaginationForPagesCount = 4` and `pagesCount = 4` pagination will be `1 2 3 4`, however for
   * `collapseNumPaginationForPagesCount = 1` and `pagesCount = 4` pagination will be `1 2 ... 4`
   *
   * @property collapseNumPaginationForPagesCount
   * @type number
   * @default 1
   */
  get collapseNumPaginationForPagesCount() {
    return this.args.collapseNumPaginationForPagesCount ?? 1;
  }

  /**
   * `themeInstance` is an instance of [DefaultTheme](Themes.Default.html) or it's children.
   * By default `models-table` uses [BootstrapTheme](Themes.Bootstrap3.html) instance.
   *
   * You may create your own theme-class and set `themeInstance` to it's instance. Check Theme properties you may define in your own theme.
   *
   * @type Themes.Bootstrap3Theme
   * @property ThemeInstance
   */

  /**
   * All table records
   *
   * It's a first of the two attributes you must set to the component
   *
   * @property data
   * @type object[]
   * @default []
   */
  get data() {
    return this.args.data ?? A([]);
  }

  /**
   * Table columns. Check [ModelsTableColumn](Utils.ModelsTableColumn.html) for available properties
   *
   * It's a second of the two attributes you must set to the component
   *
   * @property columns
   * @type Utils.ModelsTableColumn[]
   * @default []
   */
  get columns() {
    return this.args.columns ?? A([]);
  }

  /**
   * Hash of components to be used for columns.
   *
   * See [ModelsTableColumn](Utils.ModelsTableColumn.html), property component
   *
   * @property columnComponents
   * @type object
   * @default {}
   */
  get columnComponents() {
    return this.args.columnComponents ?? {};
  }

  /**
   * Sets of columns that can be toggled together.
   * Each object should have:
   *  * `label` (string) - The label for the set. This will be displayed in the columns dropdown.
   *  * `showColumns` (array|Function) - This should either be an array of `propertyNames` to show, or a function. If it is a function, the function will be called with the `processedColumns` as attribute.
   *  * `hideOtherColumns` (boolean) -  If this is true (default), all columns not specified in `showColumns` will be hidden. If this is set to false, other columns will be left at whatever visibility they were before.
   *  * `toggleSet` (boolean) - If this is true (default is false), the set columns will be shown if one of them is currently hidden,
   else they will all be hidden. Settings this will result in a default of `hideOtherColumns=false`
   *
   * @property columnSets
   * @type Internal.ColumnSet[]
   * @default []
   */
  get columnSets() {
    return this.args.columnSets ?? A([]);
  }

  /**
   * List of columns shown in the table. It's created from the [columns](Components.ModelsTable.html#property_columns) provided to the component
   *
   * @protected
   * @property processedColumns
   * @type Utils.ModelsTableColumn[]
   * @default []
   */
  @tracked
  processedColumns = A([]);

  /**
   * List of the additional headers. Used to group columns.
   *
   * Each object may have such fields:
   *
   * * `title` (string) - Header for grouped column
   * * `colspan` (number) - HTML colspan attr
   * * `rowspan` (number) - HTML rowspan attr
   *
   * @property groupedHeaders
   * @type Internal.GroupedHeader[][]
   * @default []
   */
  get groupedHeaders() {
    return this.args.groupedHeaders ?? A([]);
  }

  /**
   * Determines if page size should be shown
   *
   * @property showPageSize
   * @type boolean
   * @default true
   */
  get showPageSize() {
    return this.args.showPageSize ?? true;
  }

  /**
   * Expanded row items.
   *
   * It's set to the initial value when current page or page size is changed
   *
   * @property  expandedItems
   * @type object[]
   * @default []
   */
  get expandedItems() {
    return this.args.expandedItems ?? this._expandedItems;
  }
  set expandedItems(v) {
    this._expandedItems = A(v);
  }

  @tracked
  _multipleExpand = true;
  /**
   * true - allow to expand more than 1 row,
   * false - only 1 row may be expanded in the same time
   *
   * @property multipleExpand
   * @type boolean
   * @default false
   */
  get multipleExpand() {
    return this.args.multipleExpand ?? this._multipleExpand;
  }
  set multipleExpand(v) {
    this._multipleExpand = Boolean(v);
  }

  @tracked
  _collapsedGroupValues = A([]);
  /**
   * List of grouped property values where the groups are collapsed
   *
   * @property collapsedGroupValues
   * @type array[]
   * @default []
   */
  get collapsedGroupValues() {
    return this.args.collapsedGroupValues ?? this._collapsedGroupValues;
  }
  set collapsedGroupValues(v) {
    this._collapsedGroupValues = A(v);
  }

  /**
   * Allow or disallow to select rows on click.
   * If `false` - no row can be selected
   *
   * @property selectRowOnClick
   * @type boolean
   * @default true
   */
  get selectRowOnClick() {
    return this.args.selectRowOnClick ?? true;
  }

  @tracked
  _multipleSelect = false;
  /**
   * Allow or disallow to select multiple rows.
   * If `false` - only one row may be selected in the same time
   *
   * @property multipleSelect
   * @type boolean
   * @default false
   */
  get multipleSelect() {
    return this.args.multipleSelect ?? this._multipleSelect;
  }
  set multipleSelect(v) {
    this._multipleSelect = Boolean(v);
  }

  /**
   * Component used in the 'expanded' row
   *
   * It will receive several options:
   * * `record` - current row value
   * * `processedColumns` - current column (one of the [processedColumns](Components.ModelsTable.html#property_processedColumns))
   * * `index` - current row index
   * * `selectedItems` - bound from [selectedItems](Components.ModelsTable.html#property_selectedItems)
   * * `visibleProcessedColumns` - bound from [visibleProcessedColumns](Components.ModelsTable.html#property_visibleProcessedColumns)
   * * `clickOnRow` - closure action [clickOnRow](Components.ModelsTable.html#event_clickOnRow)
   * * `themeInstance` - bound from [themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @example
   * ```hbs
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{columns}}
   *   @expandedRowComponent={{component "expanded-row"}}
   * />
   * ```
   *
   * @property expandedRowComponent
   * @type object
   * @default null
   */
  get expandedRowComponent() {
    return this.args.expandedRowComponent ?? null;
  }

  /**
   * Component used in the row with a grouped value
   *
   * This component won't be used if [useDataGrouping](Components.ModelsTable.html#property_useDataGrouping) is not `true`
   *
   * Component will receive several options:
   *
   * * `groupedValue` - grouped property value
   * * `currentGroupingPropertyName` - bound from [currentGroupingPropertyName](Components.ModelsTable.html#property_currentGroupingPropertyName)
   * * `displayGroupedValueAs` - bound from [displayGroupedValueAs](Components.ModelsTable.html#property_displayGroupedValueAs)
   * * `toggleGroupedRows` - closure action [toggleGroupedRows](Components.ModelsTable.html#event_toggleGroupedRows)
   * * `toggleGroupedRowsExpands` - closure action [toggleGroupedRowsExpands](Components.ModelsTable.html#event_toggleGroupedRowsExpands)
   * * `toggleGroupedRowsSelection` - closure action [toggleGroupedRowsSelection](Components.ModelsTable.html#event_toggleGroupedRowsSelection)
   * * `visibleProcessedColumns` - bound from [visibleProcessedColumns](Components.ModelsTable.html#event_visibleProcessedColumns)
   * * `themeInstance` - bound from [themeInstance](Components.ModelsTable.html#property_themeInstance)
   * * `groupedItems` - list of all rows group items
   * * `visibleGroupedItems` - list of rows group items shown on the current table page
   * * `selectedGroupedItems` - list of selected rows group items
   * * `expandedGroupedItems` - list of expanded rows group items
   *
   * @example
   * ```hbs
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{columns}}
   *   @groupingRowComponent={{component "grouping-row"}}
   * />
   * ```
   *
   * @property groupingRowComponent
   * @type object
   * @default null
   */
  get groupingRowComponent() {
    return this.args.groupingRowComponent ?? null;
  }

  /**
   * This component won't be used if [useDataGrouping](Compnents.ModelsTable.html#property_useDataGrouping) is not `true`
   *
   * Component will receive several options:
   *
   * * `visibleProcessedColumns` - bound from [visibleProcessedColumns](Components.ModelsTable.html#property_visibleProcessedColumns)
   * * `themeInstance` - bound from [themeInstance](Components.ModelsTable.html#property_themeInstance)
   * * `groupedItems` - list of all rows group items
   * * `visibleGroupedItems` - list of rows group items shown on the current table page
   * * `selectedGroupedItems` - list of selected rows group items
   * * `expandedGroupedItems` - list of expanded rows group items
   *
   * @example
   * ```hbs
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{columns}}
   *   @groupSummaryRowComponent={{component "group-summary-row"}}
   * />
   * ```
   *
   * @property groupSummaryRowComponent
   * @type object
   * @default null
   */
  get groupSummaryRowComponent() {
    return this.args.groupSummaryRowComponent ?? null;
  }

  /**
   * Component for header cell for column with grouping value
   *
   * This component won't be used if [useDataGrouping](Components.ModelsTable.html#property_useDataGrouping) is not `true` and [displayGroupedValueAs](Components.ModelsTable.html#property_displayGroupedValueAs) is not `columns`
   *
   * @example
   * ```hbs
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{columns}}
   *   @groupHeaderCellComponent={{component "group-header-cell"}}
   * />
   * ```
   *
   * Component will receive such options:
   *
   * * `currentGroupingPropertyName` - property name used to group rows in the current moment
   *
   * @property groupHeaderCellComponent
   * @type object
   * @default null
   */
  get groupHeaderCellComponent() {
    return this.args.groupHeaderCellComponent ?? null;
  }

  /**
   * Closure action sent on user interaction
   *
   * Action will send one parameter - object with fields:
   *
   * * `sort` - list with sort value `propertyName:sortDirection`
   * * `currentPageNumber` - currently shown page number
   * * `pageSize` - current page size
   * * `filterString` - global filter value
   * * `filteredContent` - filtered data
   * * `selectedItems` - list with selected row items
   * * `expandedItems` - list with expanded row items
   * * `columnFilters` - hash with fields equal to filtered propertyName and values equal to filter values
   *
   * @example
   * ```hbs
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{columns}}
   *   @onDisplayDataChanged={{action "someAction"}}
   * />
   * ```
   *
   * @event onDisplayDataChanged
   */
  onDisplayDataChanged = null;

  /**
   * Action sent on init to give access to the Public API
   *
   * @property registerAPI
   * @type Function
   * @default null
   */
  registerAPI = null;

  /**
   * Closure action sent on change of visible columns
   *
   * The action will receive an array of objects as parameter, where every object looks like this: `{ propertyName: 'firstName', isHidden: true, mayBeHidden: false }`
   *
   * @example
   * ```hbs
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{columns}}
   *   @onColumnsVisibilityChanged={{action "someAction"}}
   * />
   * ```
   *
   * @event onColumnsVisibilityChanged
   */
  onColumnsVisibilityChanged = null;

  /**
   * Closure action sent on row double-click
   *
   * @example
   * ```hbs
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{columns}}
   *   @onRowDoubleClick={{action "someAction"}}
   * />
   * ```
   *
   * @event onRowDoubleClick
   */
  onRowDoubleClick = null;

  /**
   * Closure action sent on row hover
   *
   * @example
   * ```hbs
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{columns}}
   *   @onRowHover={{action "someAction"}}
   * />
   * ```
   *
   * @event onRowHover
   */
  onRowHover = null;

  /**
   * Closure action sent on row out
   *
   * @example
   * ```hbs
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{columns}}
   *   @onRowOut={{action "someAction"}}
   * />
   * ```
   *
   * @event onRowOut
   */
  onRowOut = null;

  /**
   * List of currently selected row items
   *
   * Row may be selected by clicking on it, if [selectRowOnClick](Components.ModelsTable.html#event_selectRowOnClick) is set to `true`
   *
   * @property selectedItems
   * @type object[]
   * @default []
   */
  get selectedItems() {
    return this.args.selectedItems ?? this._selectedItems;
  }
  set selectedItems(v) {
    this._selectedItems = A(v);
  }

  /**
   * List of the currently visible columns
   *
   * @protected
   * @property visibleProcessedColumns
   * @type object[]
   * @default []
   */
  get visibleProcessedColumns() {
    return this.processedColumns
      ? this.processedColumns.filter((c) => Boolean(c.isVisible))
      : [];
  }

  /**
   * True if all processedColumns are hidden by `isHidden`
   *
   * @protected
   * @property allColumnsAreHidden
   * @type boolean
   * @default false
   */
  get allColumnsAreHidden() {
    return (
      this.processedColumns &&
      this.processedColumns.length > 0 &&
      this.processedColumns.isEvery('isHidden', true)
    );
  }

  /**
   * List of property names can be used for grouping
   *
   * It may be a list of strings of list of objects. In first case label and value in the select-box will be the same.
   * In the second case you must set `label` and `value` properties for each list item
   *
   * **IMPORTANT** It must contain [currentGroupingPropertyName](Components.ModelsTable.html#property_currentGroupingPropertyName)-value
   *
   * @property dataGroupProperties
   * @type string[]|object[]
   * @default []
   */
  get dataGroupProperties() {
    return this.args.dataGroupProperties ?? A([]);
  }

  /**
   * @protected
   * @property dataGroupOptions
   * @type Internal.SelectOption[]
   * @default []
   */
  get dataGroupOptions() {
    return this.dataGroupProperties.map((value) => {
      return 'object' === typeOf(value) || 'instance' === typeOf(value)
        ? value
        : {
            label: propertyNameToTitle(value),
            value,
          };
    });
  }

  /**
   * `true` if some value is set to the global filter
   *
   * @protected
   * @property globalFilterUsed
   * @type boolean
   * @default false
   */
  get globalFilterUsed() {
    return !!this.filterString;
  }

  /**
   * `true` if global filter or filter by any column is used
   *
   * @protected
   * @property anyFilterUsed
   * @type boolean
   * @default false
   */
  get anyFilterUsed() {
    return this.globalFilterUsed || this.processedColumns.isAny('filterUsed');
  }

  /**
   * `true` if all processedColumns don't use filtering and sorting
   *
   * @protected
   * @property noHeaderFilteringAndSorting
   * @type boolean
   * @default false
   */
  get noHeaderFilteringAndSorting() {
    return (
      this.processedColumns.isEvery('useFilter', false) &&
      this.processedColumns.isEvery('useSorting', false)
    );
  }

  /**
   * Number of pages
   *
   * @protected
   * @property pagesCount
   * @type number
   * @default 0
   */
  get pagesCount() {
    const pagesCount = this.arrangedContent.length / this.pageSize;
    return 0 === pagesCount % 1 ? pagesCount : Math.floor(pagesCount) + 1;
  }

  /**
   * [data](Components.ModelsTable.html#property_data) filtered with a global filter and columns filters
   *
   * Filtering by columns is ignored if [useFilteringByColumns](Components.ModelsTable.html#property_useFilteringByColumns) is set to `false`
   *
   * @protected
   * @property filteredContent
   * @type object[]
   * @default []
   */
  get filteredContent() {
    if (!isArray(this.data)) {
      return [];
    }
    if (!this.anyFilterUsed) {
      return this.data.slice();
    }
    let filterString = this.filterString;
    if (this.filteringIgnoreCase) {
      filterString = filterString.toLowerCase();
    }

    let _processedColumns = A(this.processedColumns.filterBy('useFilter'));
    if (!this.doFilteringByHiddenColumns) {
      _processedColumns = A(_processedColumns.filterBy('isHidden', false));
    }
    if (!_processedColumns.length) {
      return this.data.slice();
    }

    // global search
    const filtersFor = A(A(_processedColumns.mapBy('filterField')).compact());
    let globalSearch = this.data.filter((row) => {
      return filtersFor.any((filterFor) => {
        let cellValue = '' + get(row, filterFor);
        if (this.filteringIgnoreCase) {
          cellValue = cellValue.toLowerCase();
        }
        return cellValue.includes(filterString);
      });
    });

    if (!this.useFilteringByColumns) {
      return globalSearch;
    }

    // search by each column
    _processedColumns = _processedColumns
      .filterBy('filterField')
      .filter((c) => !(c.filterWithSelect && '' === c.filterString));
    return globalSearch.filter((row) => {
      return _processedColumns.every((c) => {
        const filterFor = c.filterField;
        let cellValue = '' + get(row, filterFor);
        let filterString = c.filterString;
        if (this.filteringIgnoreCase) {
          cellValue =
            typeOf(cellValue) === 'string'
              ? cellValue.toLowerCase()
              : cellValue;
          filterString =
            typeOf(filterString) === 'string'
              ? filterString.toLowerCase()
              : filterString;
        }
        return 'function' === typeOf(c.filterFunction)
          ? c.filterFunction(cellValue, filterString, row)
          : 0 === compare(cellValue, filterString);
      });
    });
  }
  set filteredContent(v) {
    return v;
  }

  /**
   * [filteredContent](Components.ModelsTable.html#property_filteredContent) sorted by needed properties
   *
   * @protected
   * @property arrangedContent
   * @type object[]
   * @default []
   */
  get arrangedContent() {
    let sortProperties = this.sortProperties.map((p) => {
      let [prop, direction] = p.split(':');
      direction = direction || SORT_CONSTANTS.ASC;

      return [prop, direction];
    });

    let _filteredContent = this.filteredContent.slice();
    return sortProperties.length
      ? _filteredContent.sort((row1, row2) => {
          for (let i = 0; i < sortProperties.length; i++) {
            let [prop, direction] = sortProperties[i];
            let sortFunction =
              get(this, `sortFunctions.${prop}`) || betterCompare;
            let result = prop
              ? sortFunction(get(row1, prop), get(row2, prop), direction)
              : 0;
            if (result !== 0) {
              return direction === SORT_CONSTANTS.DESC ? -1 * result : result;
            }
          }

          return 0;
        })
      : _filteredContent;
  }
  set arrangedContent(v) {
    return v;
  }

  /**
   * @method filteredContentObserverOnce
   * @protected
   */
  filteredContentObserverOnce() {
    this.updateState({ recordsCount: this.filteredContent.length });
  }

  /**
   * [filteredContent](Components.ModelsTable.html#property_filteredContent) grouped by [currentGroupingPropertyName](Components.ModelsTable.html#property_currentGroupingPropertyName) sorted by needed properties
   *
   * @protected
   * @property groupedArrangedContent
   * @type object[]
   * @default []
   */
  get groupedArrangedContent() {
    let grouped = {};
    if (!this.useDataGrouping || !isArray(this.filteredContent)) {
      return grouped;
    }
    let sortProperties = this.sortProperties.map((p) => {
      let [prop, direction] = p.split(':');
      direction = direction || SORT_CONSTANTS.ASC;
      return [prop, direction];
    });

    grouped = chunkBy(
      this.filteredContent,
      this.currentGroupingPropertyName,
      this.sortByGroupedFieldDirection
    );

    grouped = grouped.map((group) => {
      return sortProperties.length
        ? A(
            group.sort((row1, row2) => {
              for (let i = 0; i < sortProperties.length; i++) {
                let [prop, direction] = sortProperties[i];
                let sortFunction =
                  get(this, `sortFunctions.${prop}`) || betterCompare;
                let result = prop
                  ? sortFunction(get(row1, prop), get(row2, prop))
                  : 0;
                if (result !== 0) {
                  return direction === SORT_CONSTANTS.DESC
                    ? -1 * result
                    : result;
                }
              }
              return 0;
            })
          )
        : group;
    });
    return grouped.reduce((result, group) => A([...result, ...group]), []);
  }

  /**
   * Content of the current table page
   *
   * [arrangedContent](Components.ModelsTable.html#property_arrangedContent) sliced for currently shown page
   *
   * @protected
   * @property visibleContent
   * @type object[]
   * @default []
   */
  get visibleContent() {
    const startIndex = this.pageSize * (this.currentPageNumber - 1);
    if (this.arrangedContent.length < this.pageSize) {
      return this.arrangedContent;
    }
    return this.arrangedContent.slice(startIndex, startIndex + this.pageSize);
  }

  /**
   * Content of the current table page when rows grouping is used
   *
   * [groupedVisibleContent](Components.ModelsTable.html#property_groupedVisibleContent) sliced for currently shown page
   *
   * @protected
   * @property groupedVisibleContent
   * @type object[]
   * @default []
   */
  get groupedVisibleContent() {
    if (!this.useDataGrouping) {
      return [];
    }
    const startIndex = this.pageSize * (this.currentPageNumber - 1);
    return this.groupedArrangedContent.length < this.pageSize
      ? chunkBy(this.groupedArrangedContent, this.currentGroupingPropertyName)
      : chunkBy(
          this.groupedArrangedContent.slice(
            startIndex,
            startIndex + this.pageSize
          ),
          this.currentGroupingPropertyName
        );
  }

  /**
   * List of grouped property values in order to show groups in the table
   *
   * @protected
   * @property groupedVisibleContentValuesOrder
   * @type object[]
   * @default []
   */
  get groupedVisibleContentValuesOrder() {
    return this.groupedVisibleContent.map((group) =>
      get(group, `firstObject.${this.currentGroupingPropertyName}`)
    );
  }

  /**
   * Is user on the last page
   *
   * @property isLastPage
   * @type boolean
   * @protected
   */
  get isLastPage() {
    return this.currentPageNumber >= this.pagesCount;
  }

  /**
   * Alias to `arrangedContent.length`
   *
   * @protected
   * @property arrangedContentLength
   * @type number
   * @default 0
   */
  get arrangedContentLength() {
    return this.arrangedContent.length;
  }

  /**
   * Index of the first currently shown record
   *
   * @protected
   * @property firstIndex
   * @type number
   * @default 0
   */
  get firstIndex() {
    return 0 === this.arrangedContentLength
      ? 0
      : this.pageSize * (this.currentPageNumber - 1) + 1;
  }

  /**
   * Index of the last currently shown record
   *
   * @protected
   * @property lastIndex
   * @type number
   * @default 10
   */
  get lastIndex() {
    return this.isLastPage
      ? this.arrangedContentLength
      : this.currentPageNumber * this.pageSize;
  }

  /**
   * List of possible [pageSize](Components.ModelsTable.html#property_pageSize) values. Used to change size of `visibleContent`
   *
   * @property pageSizeValues
   * @type number[]
   * @default [10, 25, 50]
   */
  get pageSizeValues() {
    return this.args.pageSizeValues ?? A([10, 25, 50]);
  }

  /**
   * List of options for pageSize-selectBox
   * It's mapped from [pageSizeValues](Components.ModelsTable.html#property_pageSizeValues)
   * This value should not be set manually!
   *
   * @protected
   * @property pageSizeOptions
   * @type SelectOption[]
   * @default []
   */
  @tracked
  pageSizeOptions = A([]);

  /**
   * List of options for pageNumber-selectBox
   *
   * @protected
   * @property currentPageNumberOptions
   * @type SelectOption[]
   * @default []
   */
  get currentPageNumberOptions() {
    return Array.apply(null, { length: this.pagesCount }).map((v, i) =>
      optionStrToObj(i + 1)
    );
  }

  /**
   * These are options for the columns dropdown.
   * By default, the 'Show All', 'Hide All' and 'Restore Defaults' buttons are displayed.
   *
   * @protected
   * @property columnDropdownOptions
   * @type Internal.ColumnDropdownOptions
   */
  get columnDropdownOptions() {
    return {
      showAll: true,
      hideAll: true,
      restoreDefaults: true,
      columnSets: A(this.columnSets || []),
    };
  }

  /**
   * Public API that allows for programmatic interaction with the component
   *
   *  * `refilter()` - Invalidates the filteredContent property, causing the table to be re-filtered.
   *  * `recordsCount` - Size of the current arranged content
   *
   *  @property publicAPI
   *  @default null
   */
  publicAPI = null;

  /**
   * @method updateState
   * @param {object} changes
   * @return object
   * @protected
   */
  updateState(changes) {
    let newState = set(this, 'publicAPI', assign({}, this.publicAPI, changes));
    let registerAPI = this.args.registerAPI;
    if (registerAPI) {
      registerAPI(newState);
    }
    return newState;
  }

  constructor(owner, args) {
    super(owner, args);
    this.setup();
  }

  @action
  didUpdateNode() {
    this.updateColumns();
    this.updateHeaderCellsColspan();
  }

  @action
  didInsertNode(element) {
    this.focus(element);
    if (this.checkTextTranslations) {
      this._checkColumnTitles();
    }
  }

  /**
   * @method _checkColumnTitles
   * @protected
   */
  _checkColumnTitles() {
    this.columns.forEach((c, index) => {
      warn(
        `#${this.elementId}. No title. Column #${index}. ${c.propertyName}`,
        !(!hasOwnProperty.call(c, 'title') && c.propertyName),
        { id: '#emt-column-no-title' }
      );
    });
  }

  /**
   * Component init
   *
   * Set visibility and filtering attributes for each column
   *
   * @method setup
   * @protected
   */
  setup() {
    this._setupSelectedRows();
    this._setupColumns();
    this._setupPageSizeOptions();
    set(this, 'publicAPI', {});

    this.updateState({
      recordsCount: this.filteredContent.length || 0,
    });
  }

  /**
   * Focus on 'Global filter' on component render
   *
   * @method focus
   * @protected
   */
  focus(element) {
    if (this.showGlobalFilter && this.focusGlobalFilter) {
      element.querySelector('.filterString').focus();
    }
  }

  /**
   * Preselect table rows if `selectedItems` is provided
   *
   * `multipleSelected` may be set `true` if `selectedItems` has more than 1 item
   *
   * @method _setupSelectedRows
   * @protected
   */
  _setupSelectedRows() {
    if (
      isArray(this.selectedItems) &&
      this.selectedItems.length > 1 &&
      !this.multipleSelect
    ) {
      warn(
        '`multipleSelect` is set `true`, because you have provided multiple `selectedItems`.',
        false,
        { id: '#emt-multipleSelected_autoset' }
      );
      set(this, 'multipleSelect', true);
    }
  }

  /**
   * Generate hash for column-`extend`
   *
   * @method _createColumnInstance
   * @param {ModelsTableColumn} options
   * @protected
   */
  _createColumnInstance(options) {
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
   * Override must something like:
   *
   * @example
   * ```js
   * _createColumn(options) {
   *   const column = this._createColumnInstance(options);
   *   setProperties(column, options);
   *   return column;
   * }
   * ```
   *
   * @param {ModelsTableColumn} options
   * @method _createColumn
   * @return {ModelsTableColumn}
   */
  _createColumn(options) {
    return this._createColumnInstance(options);
  }

  /**
   * Create new properties for `columns`
   *
   * @private
   * @method _setupColumns
   */
  _setupColumns() {
    let nColumns = A(
      this.columns.map((column) => {
        let c = this._createColumn(column);

        ['colspanForSortCell', 'colspanForFilterCell'].forEach((prop) => {
          const val = get(c, prop);
          assert(
            `"${prop}" must be 1 or greater. You passed "${val}"`,
            typeOf(val) === 'number' && val >= 1
          );
        });

        const { sortDirection, sortPrecedence } = column;
        const hasSortPrecedence =
          !isNone(sortPrecedence) && sortPrecedence > NOT_SORTED;
        const defaultSortPrecedence = hasSortPrecedence
          ? sortPrecedence
          : NOT_SORTED;
        const defaultSorting =
          sortDirection && sortPrecedence > NOT_SORTED
            ? sortDirection.toLowerCase()
            : SORT_CONSTANTS.NONE;

        setProperties(c, {
          sorting: defaultSorting,
          sortPrecedence: defaultSortPrecedence,
        });
        return c;
      })
    );
    set(this, 'processedColumns', nColumns);

    set(this, 'sortProperties', A());
    const filteredOrderedColumns = nColumns
      .sortBy('sortPrecedence')
      .filter((col) => isSortedByDefault(col));
    filteredOrderedColumns.forEach((column) => {
      this.sort(column);
      const defaultSortedBy = column.sortedBy || column.propertyName;
      let sortingArgs = [
        column,
        defaultSortedBy,
        column.sortDirection.toLowerCase(),
      ];
      if (this.multipleColumnsSorting) {
        this._multiColumnsSorting(...sortingArgs);
      } else {
        this._singleColumnSorting(...sortingArgs);
      }
    });
    this.updateHeaderCellsColspanOnce();
  }

  /**
   * Provide backward compatibility with `pageSizeValues` equal to an array with numbers and not objects
   * `pageSizeValues` is live as is, `pageSizeOptions` is used in the templates
   *
   * @protected
   * @method _setupPageSizeOptions
   */
  _setupPageSizeOptions() {
    let pageSizeOptions = this.pageSizeValues.map(optionStrToObj);
    set(this, 'pageSizeOptions', pageSizeOptions);
  }

  /**
   * Set `sortProperties` when single-column sorting is used
   *
   * @protected
   * @method _singleColumnSorting
   */
  _singleColumnSorting(column, sortedBy, newSorting) {
    this.processedColumns.setEach('sorting', SORT_CONSTANTS.NONE);
    set(column, 'sorting', newSorting);
    let sortFunctions = Object.create(null);
    sortFunctions[sortedBy] = column.sortFunction;
    set(this, 'sortFunctions', sortFunctions);
    set(
      this,
      'sortProperties',
      SORT_CONSTANTS.NONE === newSorting ? [] : [`${sortedBy}:${newSorting}`]
    );
  }

  /**
   * Set `sortProperties` when multi-columns sorting is used
   *
   * @method _multiColumnsSorting
   * @protected
   */
  _multiColumnsSorting(column, sortedBy, newSorting) {
    set(column, 'sorting', newSorting);
    let sortPropertiesMap = {};
    this.sortProperties.forEach((p) => {
      let [propertyName, order] = p.split(':');
      sortPropertiesMap[propertyName] = order;
    });
    delete sortPropertiesMap[sortedBy];

    let newSortProperties = A([]);
    let newSortFunctions = Object.create(null);
    keys(sortPropertiesMap).forEach((propertyName) => {
      if (propertyName !== sortedBy) {
        newSortProperties.pushObject(
          `${propertyName}:${sortPropertiesMap[propertyName]}`
        );
      }
      set(newSortFunctions, propertyName, column.sortFunction);
    });
    if (SORT_CONSTANTS.NONE !== newSorting) {
      newSortProperties.pushObject(`${sortedBy}:${newSorting}`);
      newSortFunctions[sortedBy] = column.sortFunction;
    }
    set(this, 'sortProperties', newSortProperties);
    set(this, 'sortFunctions', newSortFunctions);
  }

  /**
   * Send `onDisplayDataChanged`-action when user does sort of filter.
   * Action is sent if `onDisplayDataChanged` is a closure-action
   *
   * @protected
   * @method userInteractionObserver
   */
  userInteractionObserver() {
    run.once(this, this.userInteractionObserverOnce);
  }

  /**
   * @protected
   * @method userInteractionObserverOnce
   */
  userInteractionObserverOnce() {
    let actionIsFunction = typeof this.args.onDisplayDataChanged === 'function';

    if (actionIsFunction) {
      let settings = {
        sort: this.sortProperties,
        currentPageNumber: this.currentPageNumber,
        pageSize: this.pageSize,
        filterString: this.filterString,
        filteredContent: this.filteredContent,
        selectedItems: this.selectedItems,
        expandedItems: this.expandedItems,
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
        if (!isBlank(column.filterString)) {
          settings.columnFilters[column.propertyName] = column.filterString;
        }
      });
      this.args.onDisplayDataChanged(settings);
    }
  }

  /**
   * Send `onColumnsVisibilityChanged`-action when user changes which columns are visible.
   * Action is sent if `onColumnsVisibilityChanged` is a closure action
   *
   * @protected
   * @method _onColumnsVisibilityChanged
   */
  _onColumnsVisibilityChanged() {
    let actionIsFunction =
      typeof this.args.onColumnsVisibilityChanged === 'function';

    if (actionIsFunction) {
      const columnsVisibility = this.processedColumns.map((column) => ({
        isHidden: !!column.isHidden,
        mayBeHidden: column.mayBeHidden,
        propertyName: column.propertyName,
      }));
      this.args.onColumnsVisibilityChanged(columnsVisibility);
    }
  }

  /**
   * @protected
   * @param {string} key
   * @param {*} value
   */
  _updateArgsDependedValue(key, value) {
    set(this, key, value);
    if ('function' === typeof this.args.updateArgs) {
      this.args.updateArgs(key, value);
    }
  }

  /**
   * Handler for global filter and filter by each column
   *
   * @protected
   * @method forceToFirstPage
   */
  forceToFirstPage() {
    this._updateArgsDependedValue('currentPageNumber', 1);
    this.userInteractionObserver();
  }

  /**
   * Collapse open rows when user change page size or moved to the another page
   *
   * @protected
   * @method collapseRowOnNavigate
   */
  @action
  collapseRowOnNavigate() {
    this.expandedItems.clear();
  }

  /**
   * Rebuild the whole table.
   * This can be called to force a complete re-render of the table.
   *
   * @method rebuildTable
   * @protected
   */
  rebuildTable() {
    this._updateArgsDependedValue('currentPageNumber', 1);
    this._clearFilters();
    this.collapseRowOnNavigate();
    this.setup();
  }

  /**
   * Update colspans for table header cells
   *
   * @protected
   * @method updateHeaderCellsColspan
   */
  updateHeaderCellsColspan() {
    run.once(this, this.updateHeaderCellsColspanOnce);
  }

  /**
   * @protected
   * @method updateHeaderCellsColspanOnce
   */
  updateHeaderCellsColspanOnce() {
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
        colspanForSortCell - nextColumnsForSortCell.length
      );
      set(
        column,
        'realColspanForFilterCell',
        colspanForFilterCell - nextColumnsForFilterCell.length
      );
    });
  }

  /**
   * Clear all filters.
   *
   * @protected
   * @method _clearFilters
   */
  _clearFilters() {
    set(this, 'filterString', '');
    this.processedColumns.setEach('filterString', '');
  }

  @action
  willDestroyNode() {
    if (this.args.registerAPI) {
      this.args.registerAPI(null);
    }
    this.processedColumns.invoke('destroy');
  }

  /**
   * Toggle visibility for provided column
   *
   * It doesn't do nothing if column can't be hidden (see [mayBeHidden](Utils.ModelsTableColumn.html#property_mayBeHidden)). May trigger sending [onColumnsVisibilityChanged](Components.ModelsTable.html#event_onColumnsVisibilityChanged)
   *
   * @event toggleHidden
   * @param {Utils.ModelsTableColumn} column
   * @protected
   */
  @action
  toggleHidden(column) {
    if (column.mayBeHidden) {
      column.isHidden = !column.isHidden;
      this._onColumnsVisibilityChanged();
    }
    this.updateHeaderCellsColspan();
  }

  /**
   * Show all columns
   *
   * Set each column `isHidden` value to `false`. May trigger sending [onColumnsVisibilityChanged](Components.ModelsTable.html#event_onColumnsVisibilityChanged)
   *
   * @event showAllColumns
   * @protected
   */
  @action
  showAllColumns() {
    this.processedColumns.setEach('isHidden', false);
    this._onColumnsVisibilityChanged();
    this.updateHeaderCellsColspan();
  }

  /**
   * Hide all columns that may be hidden (see [mayBeHidden](Utils.ModelsTableColumn.html#property_mayBeHidden))
   *
   * May trigger sending [onColumnsVisibilityChanged](Components.ModelsTable.html#event_onColumnsVisibilityChanged)
   *
   * @event hideAllColumns
   * @protected
   */
  @action
  hideAllColumns() {
    A(this.processedColumns.filterBy('mayBeHidden')).setEach('isHidden', true);
    this._onColumnsVisibilityChanged();
    this.updateHeaderCellsColspan();
  }

  /**
   * Restore columns visibility values according to their default visibility settings (see [defaultVisible](Utils.ModelsTableColumn.html#property_defaultVisible))
   *
   * May trigger sending [onColumnsVisibilityChanged](Components.MdoelsTableColumn.html#event_onColumnsVisibilityChanged)
   *
   * @event restoreDefaultVisibility
   * @protected
   */
  @action
  restoreDefaultVisibility() {
    this.processedColumns.forEach((c) => {
      set(c, 'isHidden', !c.defaultVisible);
      this._onColumnsVisibilityChanged();
    });
    this.updateHeaderCellsColspan();
  }

  /**
   * Toggle visibility for every column in the selected columns set
   *
   * It ignore columns that can't be hidden (see [mayBeHidden](Utils.ModelsTableColumn.html#property_mayBeHidden)). May trigger sending [onColumnsVisibilityChanged](Components.ModelsTable.html#event_onColumnsVisibilityChanged)
   *
   * @event toggleColumnSet
   * @param {Internal.ColumnSet} columnSetToToggle
   * @protected
   */
  @action
  toggleColumnSet({
    showColumns = [],
    hideOtherColumns,
    toggleSet = false,
  } = {}) {
    // If hideOtherColumns is not set, default to true if toggleSet=false, else to false
    hideOtherColumns = isNone(hideOtherColumns) ? !toggleSet : hideOtherColumns;

    // If showColumns is a function, call it
    if (typeOf(showColumns) === 'function') {
      run(this, showColumns, this.processedColumns);
      this.updateHeaderCellsColspan();
      return;
    }

    let setColumns = A([]);
    let otherColumns = A([]);

    this.processedColumns.forEach((column) => {
      let columnId = column.propertyName;

      if (!columnId || !column.mayBeHidden) {
        return;
      }

      showColumns = A(showColumns);
      if (showColumns.includes(columnId)) {
        setColumns.pushObject(column);
      } else {
        otherColumns.pushObject(column);
      }
    });

    // By default, all columns should always be set to visible
    // However, if `toggleSet=true`, then the set should be toggled between visible/hidden
    // In this case, if one of the set columns is hidden, make them all visible, else hide them
    let targetVisibility = true;
    if (toggleSet) {
      targetVisibility = !!setColumns.findBy('isVisible', false);
    }

    setColumns.forEach((column) => {
      let columnId = column.propertyName;
      if (
        showColumns.includes(columnId) &&
        column.isVisible !== targetVisibility
      ) {
        this.toggleHidden(column);
      }
    });

    if (hideOtherColumns) {
      otherColumns.forEach((column) => {
        let columnId = column.propertyName;

        if (!showColumns.includes(columnId) && column.isVisible) {
          this.toggleHidden(column);
        }
      });
    }
    this.updateHeaderCellsColspan();
  }

  /**
   * Pagination click-handler
   *
   * It moves user to the selected page. Check [models-table/pagination-numeric](Components.ModelsTablePaginationNumeric.html) and [models-table/pagination-simple](Components.ModelsTablePaginationSimple.html) for usage examples. May trigger sending [onDisplayDataChanged](Components.ModelsTable.html#event_onDisplayDataChanged)
   *
   * @event gotoCustomPage
   * @param {number} pageNumber
   * @protected
   */
  @action
  gotoCustomPage(pageNumber) {
    this._updateArgsDependedValue('currentPageNumber', pageNumber);
    this.collapseRowOnNavigate();
    this.userInteractionObserver();
  }

  /**
   * Sort selected column by [sortedBy](Utils.ModelsTableColumn.html#property_sortedBy) or [propertyName](Utils.ModelsTableColumn.html#property_propertyName)
   *
   * It will drop sorting for other columns if [multipleColumnsSorting](Components.ModelsTable.html#property_multipleColumnsSorting) is set to `false`. It will add new sorting if [multipleColumnsSorting](Components.ModelsTable.html#property_multipleColumnsSorting) is set to `true`. May trigger sending [onDisplayDataChanged](Components.ModelsTable.html#event_onDisplayDataChanged). Table will be dropped to the first page if sorting is done
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
   * @param {Utils.ModelsTableColumn} column
   * @protected
   */
  @action
  sort(column) {
    let sortedBy = column.sortedBy || column.propertyName;
    if (!sortedBy) {
      return;
    }
    let currentSorting = column.sorting || SORT_CONSTANTS.NONE;
    let newSorting = this.sortMap[currentSorting.toLowerCase()];
    if (sortedBy === this.currentGroupingPropertyName) {
      newSorting =
        this.sortByGroupedFieldDirection === SORT_CONSTANTS.ASC
          ? SORT_CONSTANTS.DESC
          : SORT_CONSTANTS.ASC;
      set(this, 'sortByGroupedFieldDirection', newSorting);
      return;
    }
    let sortingArgs = [column, sortedBy, newSorting];
    if (this.multipleColumnsSorting) {
      this._multiColumnsSorting(...sortingArgs);
    } else {
      this._singleColumnSorting(...sortingArgs);
    }
    this._updateArgsDependedValue('currentPageNumber', 1);
    this.collapseRowOnNavigate();
    this.userInteractionObserver();
  }

  /**
   * Expand selected row
   *
   * It will cause expandedRowComponent to be used for it. It will collapse already expanded row if [multipleExpand](Components.ModelsTable.html#property_multipleExpand) is set to `false`. Expanding is assigned to the record itself and not their index. So, if page #1 has first row expanded and user is moved to any another page, first row on new page won't be expanded. But when user will be back to the first page, first row will be expanded. May trigger sending [onDisplayDataChanged](Components.ModelsTable.html#event_onDisplayDataChanged)
   *
   * @event expandRow
   * @param {number} index
   * @param {object} dataItem
   * @protected
   */
  @action
  expandRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    assert(
      `row #${index} is already expanded`,
      !this.expandedItems.includes(dataItem)
    );
    if (!this.multipleExpand && this.expandedItems.length === 1) {
      this.expandedItems.clear();
    }
    this.expandedItems.pushObject(dataItem);
    this.userInteractionObserver();
  }

  /**
   * Collapse selected row
   *
   * May trigger sending [onDisplayDataChanged](Components.ModelsTable.html#event_onDisplayDataChanged)
   *
   * @event collapseRow
   * @param {number} index
   * @param {object} dataItem
   * @protected
   */
  @action
  collapseRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    assert(
      `row #${index} is not expanded`,
      this.expandedItems.includes(dataItem)
    );
    this.expandedItems.removeObject(dataItem);
    this.userInteractionObserver();
  }

  /**
   * Expand all rows in the current page
   *
   * It works only if [multipleExpand](Components.ModelsTable.html#property_multipleExpand) is set to `true`. May trigger sending [onDisplayDataChanged](Components.ModelsTable.html#event_onDisplayDataChanged)
   *
   * @event expandAllRows
   * @protected
   */
  @action
  expandAllRows() {
    if (this.multipleExpand) {
      if (this.useDataGrouping) {
        this.expandedItems.pushObjects(
          A(objToArray(this.groupedVisibleContent))
        );
      } else {
        this.expandedItems.pushObjects(A(this.visibleContent.slice()));
      }
      this.userInteractionObserver();
    }
  }

  /**
   * Collapse all rows in the current page
   *
   * May trigger sending [onDisplayDataChanged](Components.ModelsTable.html#event_onDisplayDataChanged)
   *
   * @event collapseAllRows
   * @protected
   */
  @action
  collapseAllRows() {
    this.collapseRowOnNavigate();
    this.userInteractionObserver();
  }

  /**
   * Handler for row-click
   *
   * Toggle `selected`-state for row. Select only one or multiple rows depends on [multipleSelect](Components.ModelsTable.html#property_multipleSelect) value. May trigger sending [onDisplayDataChanged](Components.ModelsTable.html#event_onDisplayDataChanged)
   *
   * @event clickOnRow
   * @param {number} index
   * @param {object} dataItem
   * @protected
   */
  @action
  clickOnRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    if (this.selectRowOnClick) {
      if (this.selectedItems.includes(dataItem)) {
        this.selectedItems.removeObject(dataItem);
      } else {
        if (!this.multipleSelect && this.selectedItems.length === 1) {
          this.selectedItems.clear();
        }
        this.selectedItems.pushObject(dataItem);
      }
    }
    this.userInteractionObserver();
  }

  /**
   * Handler for double-click on row
   *
   * May trigger sending [onRowDoubleClick](Components.ModelsTable.html#event_onRowDoubleClick)
   *
   * @event doubleClickOnRow
   * @param {number} index
   * @param {object} dataItem
   * @protected
   */
  @action
  doubleClickOnRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    let actionIsFunction = typeof this.args.onRowDoubleClick === 'function';
    if (actionIsFunction) {
      this.args.onRowDoubleClick(index, dataItem);
    }
  }

  /**
   * Handler for row-hover
   *
   * May trigger sending [onRowHover](Components.ModelsTable.html#event_onRowHover)
   *
   * @event hoverOnRow
   * @param {number} index
   * @param {object} dataItem
   * @protected
   */
  @action
  hoverOnRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    let actionIsFunction = typeof this.args.onRowHover === 'function';
    if (actionIsFunction) {
      this.args.onRowHover(index, dataItem);
    }
  }

  /**
   * Handler for row-hover
   *
   * May trigger sending [onRowOut](Components.ModelsTable.html#event_onRowOut)
   *
   * @event outRow
   * @param {number} index
   * @param {object} dataItem
   * @protected
   */
  @action
  outRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    let actionIsFunction = typeof this.args.onRowOut === 'function';
    if (actionIsFunction) {
      this.args.onRowOut(index, dataItem);
    }
  }

  /**
   * Clear all column filters and global filter
   *
   * May trigger sending [onDisplayDataChanged](Components.ModelsTable.html#event_onDisplayDataChanged)
   *
   * @event clearFilters
   * @protected
   */
  @action
  clearFilters() {
    this._clearFilters();
    this.userInteractionObserver();
  }

  /**
   * Select/deselect all rows
   *
   * May trigger sending [onDisplayDataChanged](Components.ModelsTable.html#event_onDisplayDataChanged)
   *
   * @event toggleAllSelection
   * @protected
   */
  @action
  toggleAllSelection() {
    const allSelectedBefore = this.selectedItems.length === this.data.length;
    this.selectedItems.clear();
    if (!allSelectedBefore) {
      const toSelect = this.data.slice ? this.data.slice() : this.data;
      this.selectedItems.pushObjects(toSelect);
    }
    this.userInteractionObserver();
  }

  /**
   * Expand or collapse all rows in the rows group
   *
   * **IMPORTANT** `multipleExpand` should be set to `true` otherwise this action won't do anything
   *
   * @event toggleGroupedRowsExpands
   * @param {string|number|boolean} groupedValue
   * @protected
   */
  @action
  toggleGroupedRowsExpands(groupedValue) {
    if (!this.multipleExpand) {
      return;
    }
    const groupedItems = this.groupedArrangedContent.filterBy(
      this.currentGroupingPropertyName,
      groupedValue
    );
    const notExpandedGroupItems = groupedItems.filter(
      (record) => !this.expandedItems.includes(record)
    );
    if (notExpandedGroupItems.length) {
      const toPush = notExpandedGroupItems.filter(
        (record) => !this.expandedItems.includes(record)
      );
      this.expandedItems.pushObjects(toPush);
    } else {
      groupedItems.forEach((record) => this.expandedItems.removeObject(record));
    }
    this.userInteractionObserver();
  }

  /**
   * Select/deselect rows from the rows group
   *
   * **IMPORTANT** `multipleSelect` should be set to `true` otherwise this action won't do anything
   *
   * May trigger sending [onDisplayDataChanged](Components.ModelsTable.html#event_onDisplayDataChanged)
   *
   * @event toggleGroupedRowsSelection
   * @param {string|number|boolean} groupedValue
   * @protected
   */
  @action
  toggleGroupedRowsSelection(groupedValue) {
    if (!this.multipleSelect) {
      return;
    }
    const groupedItems = this.groupedArrangedContent.filterBy(
      this.currentGroupingPropertyName,
      groupedValue
    );
    const notSelectedGroupItems = groupedItems.filter(
      (record) => !this.selectedItems.includes(record)
    );
    if (notSelectedGroupItems.length) {
      const toPush = notSelectedGroupItems.filter(
        (record) => !this.selectedItems.includes(record)
      );
      this.selectedItems.pushObjects(toPush);
    } else {
      groupedItems.forEach((record) => this.selectedItems.removeObject(record));
    }
    this.userInteractionObserver();
  }

  /**
   * Collapse or expand rows group
   *
   * @event toggleGroupedRows
   * @param {string|number|boolean} groupedValue
   * @protected
   */
  @action
  toggleGroupedRows(groupedValue) {
    if (this.collapsedGroupValues.includes(groupedValue)) {
      this.collapsedGroupValues.removeObject(groupedValue);
    } else {
      this.collapsedGroupValues.pushObject(groupedValue);
    }
  }

  /**
   * Change number of shown rows
   *
   * @event changePageSize
   * @param {number} newPageSize
   * @protected
   */
  @action
  changePageSize(newPageSize) {
    this._updateArgsDependedValue('pageSize', newPageSize);
    this.forceToFirstPage();
    this.collapseRowOnNavigate();
    this.filteredContentObserverOnce();
  }

  /**
   * Change global filter value
   *
   * @event changeGlobalFilter
   * @param {string} newGlobalFilterValue
   * @protected
   */
  @action
  changeGlobalFilter(newGlobalFilterValue) {
    this._updateArgsDependedValue('filterString', newGlobalFilterValue);
    this.forceToFirstPage();
    this.filteredContentObserverOnce();
  }

  /**
   * Change column filter value
   *
   * @event changeColumnFilter
   * @param {string} newColumnFilterValue
   * @param {Utils.ModelsTableColumn} column
   * @protected
   */
  @action
  changeColumnFilter(newColumnFilterValue, column) {
    set(column, 'filterString', newColumnFilterValue);
    this.forceToFirstPage();
    this.filteredContentObserverOnce();
  }

  /**
   * @event changeGroupingPropertyName
   * @param {string} newGroupingPropertyName
   * @protected
   */
  @action
  changeGroupingPropertyName(newGroupingPropertyName) {
    this._updateArgsDependedValue(
      'currentGroupingPropertyName',
      newGroupingPropertyName
    );
  }

  @action
  onClick(e) {
    if (this.isolated) {
      e?.stopPropagation();
    }
  }
}
