import {assign} from '@ember/polyfills';
import {typeOf, compare, isBlank, isNone, isPresent} from '@ember/utils';
import {run} from '@ember/runloop';
import Component from '@ember/component';
import {assert, warn} from '@ember/debug';
import EmberObject, {
  action,
  computed,
  setProperties,
  set,
  get
} from '@ember/object';
import {classNames, layout as templateLayout} from '@ember-decorators/component';
import {observes} from '@ember-decorators/object';
import {alias, filterBy, notEmpty} from '@ember/object/computed';
import {isArray, A} from '@ember/array';
import betterCompare from '../utils/better-compare';
import layout from '../templates/components/models-table';
import ModelsTableColumn, {propertyNameToTitle} from '../utils/column';
import SORT_CONSTANTS from 'ember-models-table/constants/sort-constants';

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
  prototype: {
    hasOwnProperty
  }
} = Object;

const NOT_SORTED = -1;

/*
 * @param {Utils.ModelsTableColumn} column
 * @return boolean
 */
function isSortedByDefault(column) {
  return column.sortPrecedence > NOT_SORTED;
}

/*
 * Default filter-function used in the filter by columns
 *
 * @param {string} cellValue value in the table cell
 * @param {string} filterString needed substring
 * @return boolean
 */
function defaultFilter(cellValue, filterString) {
  return -1 !== cellValue.indexOf(filterString);
}

/*
 * @param {string} option
 * @return {{value: string|number|boolean, label: string|number|boolean}}
 */
function optionStrToObj(option) {
  return {value: option, label: option};
}

/*
 * Updates `filterOptions` for column which use `filterWithSelect`
 * and don't have `predefinedFilterOptions`
 * `filterOptions` are calculated like `data.mapBy(column.propertyName).uniq()`,
 * where data is component's `data`
 *
 * @param {string} propertyName
 * @return {object[]}
 */
function getFilterOptionsCP(propertyName) {
  return computed(`data.@each.${propertyName}`, 'data', 'filterWithSelect', 'predefinedFilterOptions', 'sortFilterOptions', function () {
    if (this.filterWithSelect && 'array' !== typeOf(this.predefinedFilterOptions)) {
      let _data = A(A(this.data).compact());
      let options = A(_data.mapBy(propertyName)).compact();
      if (this.sortFilterOptions) {
        options = options.sort();
      }
      return A(A(['', ...options]).uniq().map(optionStrToObj));
    }
    return [];
  });
}

function chunkBy(collection, propertyName, sortOrder) {
  const doSort = arguments.length === 3;
  const chunks = A([]);
  const values = [];
  if (!isArray(collection)) {
    return chunks;
  }
  collection.forEach(item => {
    const value = get(item, propertyName);
    if (values.indexOf(value) === -1) {
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
        return (sortOrder === SORT_CONSTANTS.DESC) ? (-1 * result) : result;
      }
      return 0;
    });
    return sortedValues.map(v => chunks[values.indexOf(v)]);
  }
  return chunks;
}

function objToArray(map) {
  let ret = [];
  if (isArray(map)) {
    map.forEach(m => {
      ret = [...ret, ...m];
    });
    return ret;
  }
  keys(map).forEach(k => {
    if (isArray(map[k])) {
      ret = [...ret, ...map[k]];
    }
  });
  return ret;
}

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
 *
 * ModelsTable has a lot of options you may configure, but there are two required properties called `data` and `columns`. First one contains data (e.g. list of records from the store). Second one is a list of table's columns (check [models-table-column](Utils.ModelsTableColumn.html) for available options).
 *
 * @class ModelsTable
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
@classNames('models-table-wrapper')
class ModelsTableComponent extends Component {
  /**
   * Number of records shown on one table-page
   *
   * @property pageSize
   * @type number
   * @default 10
   */
  pageSize = 10;

  /**
   * Currently shown page number. It may be set initially
   *
   * @property currentPageNumber
   * @type number
   * @default 1
   */
  currentPageNumber = 1;

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
    [SORT_CONSTANTS.DESC]: SORT_CONSTANTS.NONE
  };

  /**
   * List of properties to sort table rows
   *
   * Each value is like 'propertyName:sortDirection'
   *
   * @property sortProperties
   * @protected
   */
  sortProperties = A([]);

  /**
   * Hash of custom functions to sort table rows
   *
   * @property sortFunctions
   * @type object
   * @protected
   */
  sortFunctions = Object.create(null);

  /**
   * @property forceToFirstPageProps
   * @type string[]
   * @protected
   * @default ['processedColumns.@each.filterString', 'filterString', 'pageSize']
   */
  forceToFirstPageProps = A(['processedColumns.@each.filterString', 'filterString', 'pageSize']);

  /**
   * Determines if multi-columns sorting should be used
   *
   * @property multipleColumnsSorting
   * @type boolean
   * @default true
   */
  multipleColumnsSorting = true;

  /**
   * Determines if component footer should be shown on the page
   *
   * @property showComponentFooter
   * @type boolean
   * @default true
   */
  showComponentFooter = true;

  /**
   * Determines if dropdown for current page number should be shown near the pagination block
   *
   * @property showCurrentPageNumberSelect
   * @type boolean
   * @default true
   */
  showCurrentPageNumberSelect = true;

  /**
   * Determines if numeric pagination should be used
   *
   * @property useNumericPagination
   * @type boolean
   * @default false
   */
  useNumericPagination = false;

  /**
   * Determines if columns-dropdown should be shown
   *
   * @property showColumnsDropdown
   * @type boolean
   * @default true
   */
  showColumnsDropdown = true;

  /**
   * Determines if filtering by columns should be available to the user
   *
   * @property useFilteringByColumns
   * @type boolean
   * @default true
   */
  useFilteringByColumns = true;

  /**
   * Global filter value
   *
   * @property filterString
   * @type string
   * @default ''
   */
  filterString = '';

  /**
   * Determines if filtering (global and by column) should ignore case
   *
   * @property filteringIgnoreCase
   * @type boolean
   * @default false
   */
  filteringIgnoreCase = false;

  /**
   * Determines if filtering should be done by hidden columns
   *
   * **Notice:** after changing this value filtering results will be updated only after filter options are changed
   *
   * @property doFilteringByHiddenColumns
   * @type boolean
   * @default true
   */
  doFilteringByHiddenColumns = true;

  /**
   * Determines if 'Global filter'-field should be shown
   *
   * @property showGlobalFilter
   * @type boolean
   * @default true
   */
  showGlobalFilter = true;

  /**
   * Determines if focus should be on the 'Global filter'-field on component render
   *
   * @property focusGlobalFilter
   * @type boolean
   * @default false
   */
  focusGlobalFilter = false;

  /**
   * Value for development purposes. Used to check translation issues like:
   *
   * * Auto generated titles for columns
   *
   * @property checkTextTranslations
   * @type boolean
   * @default false
   */
  checkTextTranslations = false;

  /**
   * Determines if `processedColumns` will be updated if `columns` are changed (`propertyName` and `template` are observed)
   *
   * **IMPORTANT** All filter, sort and visibility options will be dropped to the default values while updating
   *
   * @property columnsAreUpdateable
   * @type boolean
   * @default false
   */
  columnsAreUpdateable = false;

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
  useDataGrouping = false;

  /**
   * Property name used now for grouping rows
   *
   * **IMPORTANT** It should be set initially if [useDataGrouping](Components.ModelsTable.html#property_useDataGrouping) is set to `true`
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  currentGroupingPropertyName = null;

  /**
   * Sort direction for grouped property values
   *
   * @property sortByGroupedFieldDirection
   * @protected
   * @type string
   * @default 'asc'
   */
  sortByGroupedFieldDirection = SORT_CONSTANTS.ASC;

  /**
   * Determines how grouped value will be displayed - as a row or column
   *
   * Allowed values are `row` and `column`
   *
   * @property displayGroupedValueAs
   * @type string
   * @default 'row'
   */
  displayGroupedValueAs = 'row';

  /**
   * Used in numeric pagination. If pages count is less than `collapseNumPaginationForPagesCount`, all pages will be shown.
   * E.g. for `collapseNumPaginationForPagesCount = 4` and `pagesCount = 4` pagination will be `1 2 3 4`, however for
   * `collapseNumPaginationForPagesCount = 1` and `pagesCount = 4` pagination will be `1 2 ... 4`
   *
   * @property collapseNumPaginationForPagesCount
   * @type number
   * @default 1
   */
  collapseNumPaginationForPagesCount = 1;

  /**
   * `columns` fields which are observed to update shown table-columns
   * It is used only if `columnsAreUpdateable` is `true`
   *
   * @property columnFieldsToCheckUpdate
   * @type string[]
   * @default ['propertyName', 'component']
   */
  columnFieldsToCheckUpdate = A(['propertyName', 'component']);

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
  data = A([]);

  /**
   * Table columns. Check [ModelsTableColumn](Utils.ModelsTableColumn.html) for available properties
   *
   * It's a second of the two attributes you must set to the component
   *
   * @property columns
   * @type Utils.ModelsTableColumn[]
   * @default []
   */
  columns = A([]);

  /**
   * Hash of components to be used for columns.
   *
   * See [ModelsTableColumn](Utils.ModelsTableColumn.html), property component
   *
   * @property columnComponents
   * @type object
   * @default {}
   */
  columnComponents = {};

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
  columnSets = A([]);

  /**
   * List of columns shown in the table. It's created from the [columns](Components.ModelsTable.html#property_columns) provided to the component
   *
   * @protected
   * @property processedColumns
   * @type Utils.ModelsTableColumn[]
   * @default []
   */
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
  groupedHeaders = A([]);

  /**
   * Determines if page size should be shown
   *
   * @property showPageSize
   * @type boolean
   * @default true
   */
  showPageSize = true;

  /**
   * Expanded row items.
   *
   * It's set to the initial value when current page or page size is changed
   *
   * @property  expandedItems
   * @type object[]
   * @default []
   */
  @computed()
  get expandedItems() {
    return A([]);
  }
  set expandedItems(v) {
    return A(v);
  }

  /**
   * true - allow to expand more than 1 row,
   * false - only 1 row may be expanded in the same time
   *
   * @property multipleExpand
   * @type boolean
   * @default false
   */
  multipleExpand = false;

  /**
   * List of grouped property values where the groups are collapsed
   *
   * @property collapsedGroupValues
   * @type array[]
   * @default []
   */
  @computed()
  get collapsedGroupValues() {
    return A([]);
  }
  set collapsedGroupValues(v) {
    return A(v);
  }

  /**
   * Allow or disallow to select rows on click.
   * If `false` - no row can be selected
   *
   * @property selectRowOnClick
   * @type boolean
   * @default true
   */
  selectRowOnClick = true;

  /**
   * Allow or disallow to select multiple rows.
   * If `false` - only one row may be selected in the same time
   *
   * @property multipleSelect
   * @type boolean
   * @default false
   */
  multipleSelect = false;

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
  expandedRowComponent = null;

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
  groupingRowComponent = null;

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
  groupSummaryRowComponent = null;

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
  groupHeaderCellComponent = null;

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
   *   @displayDataChangedAction={{action "someAction"}}
   * />
   * ```
   *
   * @event displayDataChangedAction
   */
  displayDataChangedAction = null;

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
   *   @columnsVisibilityChangedAction={{action "someAction"}}
   * />
   * ```
   *
   * @event columnsVisibilityChangedAction
   */
  columnsVisibilityChangedAction = null;

  /**
   * Closure action sent on row double-click
   *
   * @example
   * ```hbs
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{columns}}
   *   @rowDoubleClickAction={{action "someAction"}}
   * />
   * ```
   *
   * @event rowDoubleClickAction
   */
  rowDoubleClickAction = null;

  /**
   * Closure action sent on row hover
   *
   * @example
   * ```hbs
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{columns}}
   *   @rowHoverAction={{action "someAction"}}
   * />
   * ```
   *
   * @event rowHoverAction
   */
  rowHoverAction = null;

  /**
   * Closure action sent on row out
   *
   * @example
   * ```hbs
   * <ModelsTable
   *   @data={{model}}
   *   @columns={{columns}}
   *   @rowOutAction={{action "someAction"}}
   * />
   * ```
   *
   * @event rowOutAction
   */
  rowOutAction = null;

  /**
   * List of currently selected row items
   *
   * Row may be selected by clicking on it, if [selectRowOnClick](Components.ModelsTable.html#event_selectRowOnClick) is set to `true`
   *
   * @property selectedItems
   * @type object[]
   * @default []
   */
  @computed()
  get selectedItems() {
    return A([]);
  }
  set selectedItems(v) {
    return A(v);
  }

  /**
   * List of the currently visible columns
   *
   * @protected
   * @property visibleProcessedColumns
   * @type object[]
   * @default []
   */
  @filterBy('processedColumns', 'isVisible', true) visibleProcessedColumns;

  /**
   * True if all processedColumns are hidden by `isHidden`
   *
   * @protected
   * @property allColumnsAreHidden
   * @type boolean
   * @default false
   */
  @computed('processedColumns.@each.isHidden')
  get allColumnsAreHidden() {
    return this.processedColumns && this.processedColumns.length > 0 && this.processedColumns.isEvery('isHidden', true);
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
  dataGroupProperties = A([]);

  /**
   * @protected
   * @property dataGroupOptions
   * @type Internal.SelectOption[]
   * @default []
   */
  @computed('dataGroupProperties.[]')
  get dataGroupOptions() {
    return this.dataGroupProperties.map(value => {
      return 'object' === typeOf(value) || 'instance' === typeOf(value) ? value : {
        label: propertyNameToTitle(value),
        value
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
  @notEmpty('filterString') globalFilterUsed;

  /**
   * `true` if global filter or filter by any column is used
   *
   * @protected
   * @property anyFilterUsed
   * @type boolean
   * @default false
   */
  @computed('globalFilterUsed', 'processedColumns.@each.filterUsed')
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
  @computed('processedColumns.@each.{useSorting,useFilter}')
  get noHeaderFilteringAndSorting() {
    return this.processedColumns.isEvery('useFilter', false) && this.processedColumns.isEvery('useSorting', false);
  }

  /**
   * Number of pages
   *
   * @protected
   * @property pagesCount
   * @type number
   * @default 0
   */
  @computed('arrangedContent.[]', 'pageSize')
  get pagesCount() {
    const pagesCount = this.arrangedContent.length / this.pageSize;
    return (0 === pagesCount % 1) ? pagesCount : (Math.floor(pagesCount) + 1);
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
  @computed('anyFilterUsed', 'data.[]', 'doFilteringByHiddenColumns', 'filterString', 'processedColumns.@each.filterString', 'useFilteringByColumns')
  get filteredContent() {
    const {processedColumns, data, filteringIgnoreCase} = this;
    if (!isArray(data)) {
      return [];
    }
    if (!this.anyFilterUsed) {
      return data.slice();
    }
    let filterString = this.filterString;
    if (filteringIgnoreCase) {
      filterString = filterString.toLowerCase();
    }

    let _processedColumns = A(processedColumns.filterBy('useFilter'));
    if (!this.doFilteringByHiddenColumns) {
      _processedColumns = A(_processedColumns.filterBy('isHidden', false));
    }
    if (!_processedColumns.length) {
      return data.slice();
    }

    // global search
    const filtersFor = A(A(_processedColumns.mapBy('filterField')).compact());
    let globalSearch = data.filter(row => {
      return filtersFor.any(filterFor => {
        let cellValue = '' + get(row, filterFor);
        if (filteringIgnoreCase) {
          cellValue = cellValue.toLowerCase();
        }
        return -1 !== cellValue.indexOf(filterString);
      });
    });

    if (!this.useFilteringByColumns) {
      return globalSearch;
    }

    // search by each column
    _processedColumns = _processedColumns.filterBy('filterField').filter(c => !((c.filterWithSelect && '' === c.filterString)));
    return globalSearch.filter(row => {
      return _processedColumns.every(c => {
        const filterFor = c.filterField;
        let cellValue = '' + get(row, filterFor);
        let filterString = c.filterString;
        if (filteringIgnoreCase) {
          cellValue = typeOf(cellValue) === 'string' ? cellValue.toLowerCase() : cellValue;
          filterString = typeOf(filterString) === 'string' ? filterString.toLowerCase() : filterString;
        }
        return 'function' === typeOf(c.filterFunction) ? c.filterFunction(cellValue, filterString, row) : 0 === compare(cellValue, filterString);
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
  @computed('filteredContent.[]', 'sortProperties.[]', 'sortFunctions.[]')
  get arrangedContent() {
    let sortProperties = this.sortProperties.map(p => {
      let [prop, direction] = p.split(':');
      direction = direction || SORT_CONSTANTS.ASC;

      return [prop, direction];
    });

    let _filteredContent = this.filteredContent.slice();
    return sortProperties.length ? _filteredContent.sort((row1, row2) => {
      for (let i = 0; i < sortProperties.length; i++) {
        let [prop, direction] = sortProperties[i];
        let sortFunction = get(this, `sortFunctions.${prop}`) || betterCompare;
        let result = prop ? sortFunction(get(row1, prop), get(row2, prop), direction) : 0;
        if (result !== 0) {
          return (direction === SORT_CONSTANTS.DESC) ? (-1 * result) : result;
        }
      }

      return 0;
    }) : _filteredContent;
  }
  set arrangedContent(v) {
    return v;
  }

  /**
   * @method filteredContentObserver
   * @protected
   */
  filteredContentObserver() {
    run.once(this, this.filteredContentObserverOnce);
  }

  /**
   * @method filteredContentObserverOnce
   * @protected
   */
  filteredContentObserverOnce() {
    this.updateState({recordsCount: this.filteredContent.length});
  }

  /**
   * [filteredContent](Components.ModelsTable.html#property_filteredContent) grouped by [currentGroupingPropertyName](Components.ModelsTable.html#property_currentGroupingPropertyName) sorted by needed properties
   *
   * @protected
   * @property groupedArrangedContent
   * @type object[]
   * @default []
   */
  @computed('filteredContent.[]', 'sortProperties.[]', 'sortFunctions.[]', 'useDataGrouping', 'currentGroupingPropertyName', 'sortByGroupedFieldDirection')
  get groupedArrangedContent() {
    const {useDataGrouping, currentGroupingPropertyName, filteredContent, sortByGroupedFieldDirection} = this;
    let grouped = {};
    if (!useDataGrouping || !isArray(filteredContent)) {
      return grouped;
    }
    let sortProperties = this.sortProperties.map(p => {
      let [prop, direction] = p.split(':');
      direction = direction || SORT_CONSTANTS.ASC;
      return [prop, direction];
    });

    grouped = chunkBy(filteredContent, currentGroupingPropertyName, sortByGroupedFieldDirection);

    grouped = grouped.map(group => {
      return sortProperties.length ? A(group.sort((row1, row2) => {
        for (let i = 0; i < sortProperties.length; i++) {
          let [prop, direction] = sortProperties[i];
          let sortFunction = get(this, `sortFunctions.${prop}`) || betterCompare;
          let result = prop ? sortFunction(get(row1, prop), get(row2, prop)) : 0;
          if (result !== 0) {
            return (direction === SORT_CONSTANTS.DESC) ? (-1 * result) : result;
          }
        }
        return 0;
      })) : group;
    });
    return grouped.reduce((result, group) => A([...result, ...group]), []);
  }

  /**
   * Content of the current table page
   *
   * [arrangedContent](Componens.ModelsTable.html#property_arrangedContent) sliced for currently shown page
   *
   * @protected
   * @property visibleContent
   * @type object[]
   * @default []
   */
  @computed('arrangedContent.[]', 'pageSize', 'currentPageNumber')
  get visibleContent() {
    const {arrangedContent, pageSize, currentPageNumber} = this;
    const startIndex = pageSize * (currentPageNumber - 1);
    if (arrangedContent.length < pageSize) {
      return arrangedContent;
    }
    return arrangedContent.slice(startIndex, startIndex + pageSize);
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
  @computed('groupedArrangedContent', 'pageSize', 'currentPageNumber', 'useDataGrouping', 'currentGroupingPropertyName')
  get groupedVisibleContent() {
    const {useDataGrouping, currentGroupingPropertyName, groupedArrangedContent, pageSize, currentPageNumber} = this;
    if (!useDataGrouping) {
      return [];
    }
    const startIndex = pageSize * (currentPageNumber - 1);
    return groupedArrangedContent.length < pageSize ?
      chunkBy(groupedArrangedContent, currentGroupingPropertyName) :
      chunkBy(groupedArrangedContent.slice(startIndex, startIndex + pageSize), currentGroupingPropertyName);
  }

  /**
   * List of grouped property values in order to show groups in the table
   *
   * @protected
   * @property groupedVisibleContentValuesOrder
   * @type object[]
   * @default []
   */
  @computed('groupedVisibleContent.[]', 'currentGroupingPropertyName')
  get groupedVisibleContentValuesOrder() {
    return this.groupedVisibleContent.map(group => get(group, `firstObject.${this.currentGroupingPropertyName}`));
  }

  /**
   * Is user on the last page
   *
   * @property isLastPage
   * @type boolean
   * @protected
   */
  @computed('currentPageNumber', 'pagesCount')
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
  @alias('arrangedContent.length') arrangedContentLength;

  /**
   * Index of the first currently shown record
   *
   * @protected
   * @property firstIndex
   * @type number
   * @default 0
   */
  @computed('arrangedContentLength', 'pageSize', 'currentPageNumber')
  get firstIndex() {
    return 0 === this.arrangedContentLength ? 0 : this.pageSize * (this.currentPageNumber - 1) + 1;
  }

  /**
   * Index of the last currently shown record
   *
   * @protected
   * @property lastIndex
   * @type number
   * @default 10
   */
  @computed('isLastPage', 'arrangedContentLength', 'currentPageNumber', 'pageSize')
  get lastIndex() {
    return this.isLastPage ? this.arrangedContentLength : this.currentPageNumber * this.pageSize;
  }

  /**
   * List of possible [pageSize](Components.ModelsTable.html#property_pageSize) values. Used to change size of `visibleContent`
   *
   * @property pageSizeValues
   * @type number[]
   * @default [10, 25, 50]
   */
  pageSizeValues = A([10, 25, 50]);

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
  pageSizeOptions = A([]);

  /**
   * List of options for pageNumber-selectBox
   *
   * @protected
   * @property currentPageNumberOptions
   * @type SelectOption[]
   * @default []
   */
  @computed('pagesCount')
  get currentPageNumberOptions() {
    return Array.apply(null, {length: this.pagesCount}).map((v, i) => optionStrToObj(i + 1));
  }

  /**
   * These are options for the columns dropdown.
   * By default, the 'Show All', 'Hide All' and 'Restore Defaults' buttons are displayed.
   *
   * @protected
   * @property columnDropdownOptions
   * @type Internal.ColumnDropdownOptions
   */
  @computed('columnSets.{label,showColumns,hideOtherColumns}')
  get columnDropdownOptions() {
    return EmberObject.create({
      showAll: true,
      hideAll: true,
      restoreDefaults: true,
      columnSets: A(this.columnSets || [])
    });
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
    let registerAPI = this.registerAPI;
    if (registerAPI) {
      registerAPI(newState);
    }
    return newState;
  }

  /**
   * Show first page if for some reasons there is no content for current page, but table data exists
   *
   * @method visibleContentObserver
   * @protected
   */
  visibleContentObserver() {
    run.once(this, this.visibleContentObserverOnce);
  }

  /**
   * @method visibleContentObserverOnce
   * @protected
   */
  visibleContentObserverOnce() {
    const visibleContentLength = this.visibleContent.length;
    const dataLength = this.data.length;
    if (!visibleContentLength && dataLength && this.currentPageNumber !== 1) {
      set(this, 'currentPageNumber', 1);
    }
  }

  init() {
    super.init(...arguments);
    this.setup();
  }

  didReceiveAttrs() {
    this.updateColumns();
  }

  didInsertElement() {
    this.focus();
    super.didInsertElement(...arguments);
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
      warn(`#${this.elementId}. No title. Column #${index}. ${c.propertyName}`, !(!hasOwnProperty.call(c,'title') && c.propertyName), {id: '#emt-column-no-title'});
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

    if (this.columnsAreUpdateable) {
      assert('`columnFieldsToCheckUpdate` should be an array of strings', 'array' === typeOf(this.columnFieldsToCheckUpdate));
      this.columnFieldsToCheckUpdate.forEach(propertyName => this.addObserver(`columns.@each.${propertyName}`, this, this._setupColumnsOnce));
    }
    this.addObserver('visibleContent.length', this, this.visibleContentObserver);
    this.addObserver('filteredContent.length', this, this.filteredContentObserver);

    set(this, 'publicAPI', {});

    this.updateState({
      recordsCount: this.filteredContent.length || 0,
      refilter: this.refilter.bind(this)
    });
  }

  /**
   * @method refilter
   * @protected
   */
  refilter() {
    this.notifyPropertyChange('filteredContent');
  }

  /**
   * Recalculate processedColumns when the columns attr changes
   *
   * @method updateColumns
   * @protected
   */
  updateColumns() {
    if (this.columnsAreUpdateable) {
      this._setupColumns();
    }
  }

  /**
   * Focus on 'Global filter' on component render
   *
   * @method focus
   * @protected
   */
  focus() {
    if (this.showGlobalFilter && this.focusGlobalFilter) {
      this.element.querySelector('.filterString').focus();
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
    if (isArray(this.selectedItems) && this.selectedItems.length > 1 && !this.multipleSelected) {
      warn('`multipleSelected` is set `true`, because you have provided multiple `selectedItems`.', false, {id: '#emt-multipleSelected_autoset'});
      set(this, 'multipleSelected', true);
    }
  }

  /**
   * Wrapper for [_setupColumns](Components.ModelsTable.html#method__setupColumns) to call it only once when observer is fired
   *
   * @method _setupColumnsOnce
   * @protected
   */
  _setupColumnsOnce() {
    run.once(this, this._setupColumns);
  }

  /**
   * Generate hash for column-`extend`
   *
   * @method _createColumnInstance
   * @param {Utils.ModelsTableColumn} options
   * @protected
   */
  _createColumnInstance(options) {
    const {propertyName, filteredBy, disableFiltering, filterWithSelect} = options;
    const column = ModelsTableColumn.create();
    if (filterWithSelect && (filteredBy || propertyName) && !disableFiltering) {
      let predefinedFilterOptions = options.predefinedFilterOptions;
      let usePredefinedFilterOptions = 'array' === typeOf(predefinedFilterOptions);
      if (usePredefinedFilterOptions && predefinedFilterOptions.length) {
        const types = A(['object', 'instance']);
        const allObjects = A(predefinedFilterOptions)
          .every(option =>
            types.includes(typeOf(option)) &&
            hasOwnProperty.call(option, 'label') &&
            hasOwnProperty.call(option, 'value'));
        const allPrimitives = A(predefinedFilterOptions)
          .every(option =>
            !types.includes(typeOf(option)));
        assert('`predefinedFilterOptions` should be an array of objects or primitives and not mixed', allObjects || allPrimitives);
        if (allPrimitives) {
          predefinedFilterOptions = predefinedFilterOptions.map(optionStrToObj);
        }
        if ('' !== predefinedFilterOptions[0].value) {
          predefinedFilterOptions = [{value: '', label: ''}, ...predefinedFilterOptions];
        }
        column.filterOptions = usePredefinedFilterOptions ? A(predefinedFilterOptions) : [];
        return column;
      }
      if (usePredefinedFilterOptions) {
        // Empty array as predefined filter
        column.disableFiltering = true;
        return column;
      }
      if (!!filteredBy || !!propertyName) {
        class C extends ModelsTableColumn {
          @getFilterOptionsCP(filteredBy || propertyName)
          filterOptions;
        }
        return C.create();
      }
    }
    return column;
  }

  /**
   * Set values for some column-properties after its creation
   *
   * @method _postProcessColumn
   * @param {Utils.ModelsTableColumn} column
   * @return Utils.ModelsTableColumn
   * @protected
   */
  _postProcessColumn(column) {
    set(column, '__mt', this);
    const filterOptions = column.filterOptions;
    const placeholder = column.filterPlaceholder;
    if (isArray(filterOptions) && placeholder && !filterOptions[0].label) {
      set(column, 'filterOptions.firstObject.label', placeholder);
    }
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
   *   return this._postProcessColumn(column);
   * }
   * ```
   *
   * @param {Utils.ModelsTableColumn} options
   * @method _createColumn
   * @return {Utils.ModelsTableColumn}
   */
  _createColumn(options) {
    const column = this._createColumnInstance(options);
    setProperties(column, options);
    return this._postProcessColumn(column);
  }

  /**
   * Create new properties for `columns`
   *
   * @private
   * @method _setupColumns
   */
  _setupColumns() {
    let self = this;

    let nColumns = A(this.columns.map(column => {
      let filterFunction = column.filterFunction;
      filterFunction = 'function' === typeOf(filterFunction) ? filterFunction : defaultFilter;

      let c = this._createColumn(column);

      ['colspanForSortCell', 'colspanForFilterCell'].forEach(prop => {
        const val = get(c, prop);
        assert(`"${prop}" must be 1 or greater. You passed "${val}"`, typeOf(val) === 'number' && val >= 1);
      });

      setProperties(c, {
        filterString: c.filterString || '',
        originalDefinition: column
      });

      this._setupColumnsComponent(c, column);

      set(c, 'filterFunction', filterFunction);

      if (isNone(c.mayBeHidden)) {
        set(c, 'mayBeHidden', true);
      }

      const {sortDirection, sortPrecedence} = column;
      const hasSortPrecedence = !isNone(sortPrecedence) && sortPrecedence > NOT_SORTED;
      const defaultSortPrecedence = hasSortPrecedence ? sortPrecedence : NOT_SORTED;
      const defaultSorting = sortDirection && (sortPrecedence > NOT_SORTED) ? sortDirection.toLowerCase() : SORT_CONSTANTS.NONE;

      setProperties(c, {
        defaultVisible: !c.isHidden,
        sorting: defaultSorting,
        sortPrecedence: defaultSortPrecedence
      });
      return c;
    }));
    nColumns.filterBy('propertyName').forEach(column => {
      let propertyName = column.propertyName;
      if (isNone(column.title)) {
        set(column, 'title', propertyNameToTitle(propertyName));
      }
    });
    set(this, 'processedColumns', nColumns);

    set(this, 'sortProperties', A());
    const filteredOrderedColumns = nColumns.sortBy('sortPrecedence').filter(col => isSortedByDefault(col));
    filteredOrderedColumns.forEach(column => {
      self.send('sort', column);
      const defaultSortedBy = column.sortedBy || column.propertyName;
      let sortingArgs = [column, defaultSortedBy, column.sortDirection.toLowerCase()];
      if (this.multipleColumnsSorting) {
        this._multiColumnsSorting(...sortingArgs);
      }
      else {
        this._singleColumnSorting(...sortingArgs);
      }
    });
    this.updateHeaderCellsColspanOnce();
  }

  /**
   * Create new properties for `columns` for components
   *
   * @protected
   * @method _setupColumnsComponent
   */
  _setupColumnsComponent(c, column) {
    if (isPresent(this.columnComponents)) {

      // display component
      let componentName = column.component;
      if (isPresent(componentName)) {
        let hashComponent = get(this.columnComponents, componentName);
        if (isPresent(hashComponent)) {
          set(c, 'component', hashComponent);
        }
      }

      // edit component
      componentName = column.componentForEdit;
      if (isPresent(componentName)) {
        let hashComponent = get(this.columnComponents, componentName);
        if (isPresent(hashComponent)) {
          set(c, 'componentForEdit', hashComponent);
        }
      }

    }
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
    set(this, 'sortProperties', SORT_CONSTANTS.NONE === newSorting ? [] : [`${sortedBy}:${newSorting}`]);
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
    this.sortProperties.forEach(p => {
      let [propertyName, order] = p.split(':');
      sortPropertiesMap[propertyName] = order;
    });
    delete sortPropertiesMap[sortedBy];

    let newSortProperties = A([]);
    let newSortFunctions = Object.create(null);
    keys(sortPropertiesMap).forEach(propertyName => {
      if (propertyName !== sortedBy) {
        newSortProperties.pushObject(`${propertyName}:${sortPropertiesMap[propertyName]}`);
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
   * Send `displayDataChangedAction`-action when user does sort of filter.
   * Action is sent if `displayDataChangedAction` is a closure-action
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
    let actionIsFunction = typeof this.displayDataChangedAction === 'function';

    if (actionIsFunction) {
      let settings = EmberObject.create({
        sort: this.sortProperties,
        currentPageNumber: this.currentPageNumber,
        pageSize: this.pageSize,
        filterString: this.filterString,
        filteredContent: this.filteredContent,
        selectedItems: this.selectedItems,
        expandedItems: this.expandedItems,
        columns: this.processedColumns.map(c => ({
          filterString: c.filterString,
          filterField: c.filterField,
          sortField: c.sortField,
          sorting: c.sorting,
          propertyName: c.propertyName
        })),
        columnFilters: {}
      });
      this.processedColumns.forEach(column => {
        if (!isBlank(column.filterString)) {
          settings.columnFilters[column.propertyName] = column.filterString;
        }
      });
      this.displayDataChangedAction(settings);
    }
  }

  /**
   * Send `columnsVisibilityChangedAction`-action when user changes which columns are visible.
   * Action is sent if `columnsVisibilityChangedAction` is a closure action
   *
   * @protected
   * @method _sendColumnsVisibilityChangedAction
   */
  _sendColumnsVisibilityChangedAction() {
    let actionIsFunction = typeof this.columnsVisibilityChangedAction === 'function';

    if (actionIsFunction) {
      const columnsVisibility = this.processedColumns.map(column => {
        const options = {
          isHidden: column.isHidden,
          mayBeHidden: column.mayBeHidden,
          propertyName: column.propertyName
        };
        options.isHidden = !!options.isHidden;
        return options;
      });
      this.columnsVisibilityChangedAction(columnsVisibility);
    }
  }

  /**
   * Handler for global filter and filter by each column
   *
   * @protected
   * @method forceToFirstPage
   */
  forceToFirstPage() {
    set(this, 'currentPageNumber', 1);
    this.userInteractionObserver();
  }

  /**
   * Collapse open rows when user change page size or moved to the another page
   *
   * @protected
   * @method collapseRowOnNavigate
   */
  @observes('currentPageNumber', 'pageSize')
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
    set(this, 'currentPageNumber', 1);
    this._clearFilters();
    this.setup();
  }

  /**
   * Update colspans for table header cells
   *
   * @protected
   * @method updateHeaderCellsColspan
   */
  @observes('processedColumns.@each.{isVisible,colspanForSortCell,colspanForFilterCell}')
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
      const nextColumnsForSortCell = columns.slice(index, index + colspanForSortCell).filter(c => c.isHidden);
      const nextColumnsForFilterCell = columns.slice(index, index + colspanForFilterCell).filter(c => c.isHidden);
      set(column, 'realColspanForSortCell', colspanForSortCell - nextColumnsForSortCell.length);
      set(column, 'realColspanForFilterCell', colspanForFilterCell - nextColumnsForFilterCell.length);
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

  willInsertElement() {
    this.forceToFirstPageProps.forEach(propertyName => this.addObserver(propertyName, this, 'forceToFirstPage'));
    return super.willInsertElement(...arguments);
  }

  willDestroyElement() {
    this.forceToFirstPageProps.forEach(propertyName => this.removeObserver(propertyName, this, 'forceToFirstPage'));
    if (this.registerAPI) {
      this.registerAPI(null);
    }
    this.processedColumns.invoke('destroy');
    return super.willDestroyElement(...arguments);
  }

  /**
   * Toggle visibility for provided column
   *
   * It doesn't do nothing if column can't be hidden (see [mayBeHidden](Utils.ModelsTableColumn.html#property_mayBeHidden)). May trigger sending [columnsVisibilityChangedAction](Components.ModelsTable.html#event_columnsVisibilityChangedAction)
   *
   * @event toggleHidden
   * @param {Utils.ModelsTableColumn} column
   * @protected
   */
  @action
  toggleHidden(column) {
    if (column.mayBeHidden) {
      column.toggleProperty('isHidden');
      this._sendColumnsVisibilityChangedAction();
    }
  }

  /**
   * Show all columns
   *
   * Set each column `isHidden` value to `false`. May trigger sending [columnsVisibilityChangedAction](Components.ModelsTable.html#event_columnsVisibilityChangedAction)
   *
   * @event showAllColumns
   * @protected
   */
  @action
  showAllColumns() {
    this.processedColumns.setEach('isHidden', false);
    this._sendColumnsVisibilityChangedAction();
  }

  /**
   * Hide all columns that may be hidden (see [mayBeHidden](Utils.ModelsTableColumn.html#property_mayBeHidden))
   *
   * May trigger sending [columnsVisibilityChangedAction](Components.ModelsTable.html#event_columnsVisibilityChangedAction)
   *
   * @event hideAllColumns
   * @protected
   */
  @action
  hideAllColumns() {
    A(this.processedColumns.filterBy('mayBeHidden')).setEach('isHidden', true);
    this._sendColumnsVisibilityChangedAction();
  }

  /**
   * Restore columns visibility values according to their default visibility settings (see [defaultVisible](Utils.ModelsTableColumn.html#property_defaultVisible))
   *
   * May trigger sending [columnsVisibilityChangedAction](Components.MdoelsTableColumn.html#event_columnsVisibilityChangedAction)
   *
   * @event restoreDefaultVisibility
   * @protected
   */
  @action
  restoreDefaultVisibility() {
    this.processedColumns.forEach(c => {
      set(c, 'isHidden', !c.defaultVisible);
      this._sendColumnsVisibilityChangedAction();
    });
  }

  /**
   * Toggle visibility for every column in the selected columns set
   *
   * It ignore columns that can't be hidden (see [mayBeHidden](Utils.ModelsTableColumn.html#property_mayBeHidden)). May trigger sending [columnsVisibilityChangedAction](Components.ModelsTable.html#event_columnsVisibilityChangedAction)
   *
   * @event toggleColumnSet
   * @param {Internal.ColumnSet} columnSetToToggle
   * @protected
   */
  @action
  toggleColumnSet({showColumns = [], hideOtherColumns, toggleSet = false} = {}) {
    // If hideOtherColumns is not set, default to true if toggleSet=false, else to false
    hideOtherColumns = isNone(hideOtherColumns) ? !toggleSet : hideOtherColumns;

    // If showColumns is a function, call it
    if (typeOf(showColumns) === 'function') {
      return run(this, showColumns, this.processedColumns);
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
      if (showColumns.includes(columnId) && column.isVisible !== targetVisibility) {
        this.send('toggleHidden', column);
      }
    });

    if (hideOtherColumns) {
      otherColumns.forEach((column) => {
        let columnId = column.propertyName;

        if (!showColumns.includes(columnId) && column.isVisible) {
          this.send('toggleHidden', column);
        }
      });
    }
  }

  /**
   * Pagination click-handler
   *
   * It moves user to the selected page. Check [models-table/pagination-numeric](Components.ModelsTablePaginationNumeric.html) and [models-table/pagination-simple](Components.ModelsTablePaginationSimple.html) for usage examples. May trigger sending [displayDataChangedAction](Components.ModelsTable.html#event_displayDataChangedAction)
   *
   * @event gotoCustomPage
   * @param {number} pageNumber
   * @protected
   */
  @action
  gotoCustomPage(pageNumber) {
    set(this, 'currentPageNumber', pageNumber);
    this.userInteractionObserver();
  }

  /**
   * Sort selected column by [sortedBy](Utils.ModelsTableColumn.html#property_sortedBy) or [propertyName](Utils.ModelsTableColumn.html#property_propertyName)
   *
   * It will drop sorting for other columns if [multipleColumnsSorting](Components.ModelsTable.html#property_multipleColumnsSorting) is set to `false`. It will add new sorting if [multipleColumnsSorting](Components.ModelsTable.html#property_multipleColumnsSorting) is set to `true`. May trigger sending [displayDataChangedAction](Components.ModelsTable.html#event_displayDataChangedAction). Table will be dropped to the first page if sorting is done
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
      newSorting = this.sortByGroupedFieldDirection === SORT_CONSTANTS.ASC ? SORT_CONSTANTS.DESC : SORT_CONSTANTS.ASC;
      set(this, 'sortByGroupedFieldDirection', newSorting);
      return;
    }
    let sortingArgs = [column, sortedBy, newSorting];
    if (this.multipleColumnsSorting) {
      this._multiColumnsSorting(...sortingArgs);
    }
    else {
      this._singleColumnSorting(...sortingArgs);
    }
    set(this, 'currentPageNumber', 1);
    this.userInteractionObserver();
  }

  /**
   * Expand selected row
   *
   * It will cause expandedRowComponent to be used for it. It will collapse already expanded row if [multipleExpand](Components.ModelsTable.html#property_multipleExpand) is set to `false`. Expanding is assigned to the record itself and not their index. So, if page #1 has first row expanded and user is moved to any another page, first row on new page won't be expanded. But when user will be back to the first page, first row will be expanded. May trigger sending [displayDataChangedAction](Components.ModelsTable.html#event_displayDataChangedAction)
   *
   * @event expandRow
   * @param {number} index
   * @param {object} dataItem
   * @protected
   */
  @action
  expandRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    const {multipleExpand, expandedItems} = this;
    if (!multipleExpand && expandedItems.length === 1) {
      expandedItems.clear();
    }
    expandedItems.pushObject(dataItem);
    this.userInteractionObserver();
  }

  /**
   * Collapse selected row
   *
   * May trigger sending [displayDataChangedAction](Components.ModelsTable.html#event_displayDataChangedAction)
   *
   * @event collapseRow
   * @param {number} index
   * @param {object} dataItem
   * @protected
   */
  @action
  collapseRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    this.expandedItems.removeObject(dataItem);
    this.userInteractionObserver();
  }

  /**
   * Expand all rows in the current page
   *
   * It works only if [multipleExpand](Components.ModelsTable.html#property_multipleExpand) is set to `true`. May trigger sending [displayDataChangedAction](Components.ModelsTable.html#event_displayDataChangedAction)
   *
   * @event expandAllRows
   * @protected
   */
  @action
  expandAllRows() {
    const {multipleExpand, visibleContent} = this;
    if (multipleExpand) {
      if (this.useDataGrouping) {
        this.expandedItems.pushObjects(A(objToArray(this.groupedVisibleContent)));
      }
      else {
        this.expandedItems.pushObjects(A(visibleContent.slice()));
      }
      this.userInteractionObserver();
    }
  }

  /**
   * Collapse all rows in the current page
   *
   * May trigger sending [displayDataChangedAction](Components.ModelsTable.html#event_displayDataChangedAction)
   *
   * @event collapseAllRows
   * @protected
   */
  @action
  collapseAllRows() {
    this.expandedItems.clear();
    this.userInteractionObserver();
  }

  /**
   * Handler for row-click
   *
   * Toggle `selected`-state for row. Select only one or multiple rows depends on [multipleSelect](Components.ModelsTable.html#property_multipleSelect) value. May trigger sending [displayDataChangedAction](Components.ModelsTable.html#event_displayDataChangedAction)
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
      const {multipleSelect, selectedItems} = this;
      if (selectedItems.includes(dataItem)) {
        selectedItems.removeObject(dataItem);
      }
      else {
        if (!multipleSelect && selectedItems.length === 1) {
          selectedItems.clear();
        }
        selectedItems.pushObject(dataItem);
      }
    }
    this.userInteractionObserver();
  }

  /**
   * Handler for double-click on row
   *
   * May trigger sending [rowDoubleClickAction](Components.ModelsTable.html#event_rowDoubleClickAction)
   *
   * @event doubleClickOnRow
   * @param {number} index
   * @param {object} dataItem
   * @protected
   */
  @action
  doubleClickOnRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    let actionIsFunction = typeof this.rowDoubleClickAction === 'function';
    if (actionIsFunction) {
      this.rowDoubleClickAction(index, dataItem);
    }
  }

  /**
   * Handler for row-hover
   *
   * May trigger sending [rowHoverAction](Components.ModelsTable.html#event_rowHoverAction)
   *
   * @event hoverOnRow
   * @param {number} index
   * @param {object} dataItem
   * @protected
   */
  @action
  hoverOnRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    let actionIsFunction = typeof this.rowHoverAction === 'function';
    if (actionIsFunction) {
      this.rowHoverAction(index, dataItem);
    }
  }

  /**
   * Handler for row-hover
   *
   * May trigger sending [rowOutAction](Components.ModelsTable.html#event_rowOutAction)
   *
   * @event outRow
   * @param {number} index
   * @param {object} dataItem
   * @protected
   */
  @action
  outRow(index, dataItem) {
    assert('row index should be numeric', typeOf(index) === 'number');
    let actionIsFunction = typeof this.rowOutAction === 'function';
    if (actionIsFunction) {
      this.rowOutAction(index, dataItem);
    }
  }

  /**
   * Clear all column filters and global filter
   *
   * May trigger sending [displayDataChangedAction](Components.ModelsTable.html#event_displayDataChangedAction)
   *
   * @event clearFilters
   * @protected
   */
  @action
  clearFilters() {
    this._clearFilters();
  }

  /**
   * Select/deselect all rows
   *
   * May trigger sending [displayDataChangedAction](Components.ModelsTable.html#event_displayDataChangedAction)
   *
   * @event toggleAllSelection
   * @protected
   */
  @action
  toggleAllSelection() {
    const {selectedItems, data} = this;
    const allSelectedBefore = selectedItems.length === data.length;
    selectedItems.clear();
    if (!allSelectedBefore) {
      const toSelect = data.slice ? data.slice() : data;
      selectedItems.pushObjects(toSelect);
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
    const {expandedItems, currentGroupingPropertyName} = this;
    const groupedItems = this.groupedArrangedContent.filterBy(currentGroupingPropertyName, groupedValue);
    const notExpandedGroupItems = groupedItems.filter(record => expandedItems.indexOf(record) === -1);
    if (notExpandedGroupItems.length) {
      const toPush = notExpandedGroupItems.filter(record => expandedItems.indexOf(record) === -1);
      expandedItems.pushObjects(toPush);
    }
    else {
      groupedItems.forEach(record => expandedItems.removeObject(record));
    }
    this.userInteractionObserver();
  }

  /**
   * Select/deselect rows from the rows group
   *
   * **IMPORTANT** `multipleSelect` should be set to `true` otherwise this action won't do anything
   *
   * May trigger sending [displayDataChangedAction](Components.ModelsTable.html#event_displayDataChangedAction)
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
    const {selectedItems, currentGroupingPropertyName} = this;
    const groupedItems = this.groupedArrangedContent.filterBy(currentGroupingPropertyName, groupedValue);
    const notSelectedGroupItems = groupedItems.filter(record => selectedItems.indexOf(record) === -1);
    if (notSelectedGroupItems.length) {
      const toPush = notSelectedGroupItems.filter(record => selectedItems.indexOf(record) === -1);
      selectedItems.pushObjects(toPush);
    }
    else {
      groupedItems.forEach(record => selectedItems.removeObject(record));
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
    }
    else {
      this.collapsedGroupValues.pushObject(groupedValue);
    }
  }

  click(e) {
    if (this.isolated) {
      e.stopPropagation();
    }
  }

}
