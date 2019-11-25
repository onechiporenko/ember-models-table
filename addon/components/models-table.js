/* eslint ember/closure-actions: 0 */
import { assign } from '@ember/polyfills';
import {typeOf, compare, isBlank, isNone, isPresent} from '@ember/utils';
import {run} from '@ember/runloop';
import Component from '@ember/component';
import {assert, warn} from '@ember/debug';
import O, {
  observer,
  computed,
  getProperties,
  setProperties,
  set,
  get
} from '@ember/object';
import {alias, readOnly} from '@ember/object/computed';
import {isArray, A} from '@ember/array';
import betterCompare from '../utils/better-compare';
import layout from '../templates/components/models-table';
import ModelsTableColumn, {propertyNameToTitle} from '../utils/column';

/**
 * @typedef {object} groupedHeader
 * @property {string} title header for grouped columns
 * @property {number} colspan HTML colspan attr
 * @property {number} rowspan HTML rowspan attr
 */

const {
  keys
} = Object;

const NOT_SORTED = -1;

/**
 * @ignore
 * @param {ModelsTableColumn} column
 * @returns {boolean}
 */
function isSortedByDefault(column) {
  return column.sortPrecedence > NOT_SORTED;
}

/**
 * Default filter-function used in the filter by columns
 *
 * @param {string} cellValue value in the table cell
 * @param {string} filterString needed substring
 * @returns {boolean}
 * @ignore
 */
function defaultFilter(cellValue, filterString) {
  return -1 !== cellValue.indexOf(filterString);
}

/**
 * @ignore
 * @param {string} option
 * @returns {{value: *, label: *}}
 */
function optionStrToObj(option) {
  return {value: option, label: option};
}

/**
 * Updates <code>filterOptions</code> for column which use <code>filterWithSelect</code>
 * and don't have <code>predefinedFilterOptions</code>
 * <code>filterOptions</code> are calculated like <code>data.mapBy(column.propertyName).uniq()</code>,
 * where data is component's <code>data</code>
 *
 * @param {string} propertyName
 * @returns {object[]}
 * @ignore
 */
function getFilterOptionsCP(propertyName) {
  return computed(`data.@each.${propertyName}`, function () {
    let data = get(this, 'data');
    let predefinedFilterOptions = get(this, 'predefinedFilterOptions');
    let filterWithSelect = get(this, 'filterWithSelect');
    if (filterWithSelect && 'array' !== typeOf(predefinedFilterOptions)) {
      let _data = A(A(data).compact());
      let options = A(_data.mapBy(propertyName)).compact();
      if (get(this, 'sortFilterOptions')) {
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
        return (sortOrder === 'desc') ? (-1 * result) : result;
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
 * {{models-table data=model columns=columns}}
 * ```
 *
 * Usage with block context:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{mt.global-filter}}
 *   {{mt.data-group-by-select}}
 *   {{mt.columns-dropdown}}
 *   {{mt.table}}
 *   {{mt.footer}}
 * {{/models-table}}
 * ```
 *
 * ModelsTable yields references to the following contextual components:
 *
 * * [models-table/global-filter](Components.ModelsTableGlobalFilter.html) - global filter used for table data
 * * [models-table/columns-dropdown](Components.ModelsTableColumnsDropdown.html) - dropdown with list of options to toggle columns and column-sets visibility
 * * [models-table/data-group-by-select](Components.ModelsTableDataGroupBySelect.html) - dropdown to select property for table-rows grouping
 * * [models-table/table](Components.ModelsTableTable.html) - table with a data
 * * [models-table/footer](Components.ModelsTableFooter.html) - summary and pagination
 *
 * Check own docs for each component to get detailed info.
 *
 * ModelsTable has a lot of options you may configure, but there are two required properties called `data` and `columns`. First one contains data (e.g. list of records from the store). Second one is a list of table's columns (check [models-table-column](Utils.ModelsTableColumn.html) for available options).
 *
 * @namespace Components
 * @class ModelsTable
 * @extends Ember.Component
 */
export default Component.extend({

  layout,

  classNames: ['models-table-wrapper'],

  /**
   * Number of records shown on one table-page
   *
   * @type number
   * @property pageSize
   * @default 10
   */
  pageSize: 10,

  /**
   * Currently shown page number. It may be set initially
   *
   * @type number
   * @property currentPageNumber
   * @default 1
   */
  currentPageNumber: 1,

  /**
   * Order of sorting for each columns. Unsorted column firstly become sorted ASC, then DESC, then sorting is dropped again
   *
   * @property sortMap
   * @type object
   * @default {{ none: 'asc', asc: 'desc', desc: 'none' }}
   */
  sortMap: computed(function() {
    return {
      none: 'asc',
      asc: 'desc',
      desc: 'none'
    };
  }),

  /**
   * List of properties to sort table rows
   *
   * Each value is like 'propertyName:sortDirection'
   *
   * @type string[]
   * @property sortProperties
   * @default []
   * @private
   */
  sortProperties: computed({
    get() {
      return A([]);
    },
    set(k,v) {
      return v;
    }
  }),

  /**
   * Hash of custom functions to sort table rows
   *
   * @type Object
   * @property sortFunctions
   * @default {}
   * @private
   */
  sortFunctions: computed({
    get() {
      return Object.create(null);
    },
    set(k ,v) {
      return v;
    }
  }),

  /**
   * @type string[]
   * @default ['processedColumns.@each.filterString', 'filterString', 'pageSize']
   * @private
   * @readonly
   */
  forceToFirstPageProps: computed(function () {
    return A(['processedColumns.@each.filterString', 'filterString', 'pageSize']);
  }),

  /**
   * Determines if multi-columns sorting should be used
   *
   * @type boolean
   * @property multipleColumnsSorting
   * @default true
   */
  multipleColumnsSorting: true,

  /**
   * Determines if component footer should be shown on the page
   *
   * @type boolean
   * @property showComponentFooter
   * @default true
   */
  showComponentFooter: true,

  /**
   * Determines if dropdown for current page number should be shown near the pagination block
   *
   * @property showCurrentPageNumberSelect
   * @type boolean
   * @default true
   */
  showCurrentPageNumberSelect: true,

  /**
   * Determines if numeric pagination should be used
   *
   * @type boolean
   * @property useNumericPagination
   * @default false
   */
  useNumericPagination: false,

  /**
   * Determines if columns-dropdown should be shown
   *
   * @type boolean
   * @property showColumnsDropdown
   * @default true
   */
  showColumnsDropdown: true,

  /**
   * Determines if filtering by columns should be available to the user
   *
   * @type boolean
   * @property useFilteringByColumns
   * @default true
   */
  useFilteringByColumns: true,

  /**
   * Global filter value
   *
   * @type string
   * @property filterString
   * @default ''
   */
  filterString: '',

  /**
   * Determines if filtering (global and by column) should ignore case
   *
   * @type boolean
   * @property filteringIgnoreCase
   * @default false
   */
  filteringIgnoreCase: false,

  /**
   * Determines if filtering should be done by hidden columns
   *
   * **Notice:** after changing this value filtering results will be updated only after filter options are changed
   *
   * @type boolean
   * @property doFilteringByHiddenColumns
   * @default true
   */
  doFilteringByHiddenColumns: true,

  /**
   * Determines if 'Global filter'-field should be shown
   *
   * @type boolean
   * @property showGlobalFilter
   * @default true
   */
  showGlobalFilter: true,

  /**
   * Determines if focus should be on the 'Global filter'-field on component render
   *
   * @type boolean
   * @property focusGlobalFilter
   * @default false
   */
  focusGlobalFilter: false,

  /**
   * Value for development purposes. Used to check translation issues like:
   *
   * * Auto generated titles for columns
   *
   * @property checkTextTranslations
   * @type boolean
   * @default false
   */
  checkTextTranslations: false,

  /**
   * Determines if <code>processedColumns</code> will be updated if <code>columns</code> are changed (<code>propertyName</code> and
   * <code>template</code> are observed)
   * <b>IMPORTANT</b> All filter, sort and visibility options will be dropped to the default values while updating
   *
   * @type boolean
   * @property columnsAreUpdateable
   * @default false
   */
  columnsAreUpdateable: false,

  /**
   * Determines if rows should be grouped for some property
   *
   * Grouped value may be shown in the separated row on the top of the group or in the first column (in the cell with rowspan) in the each group (see {{#crossLink 'Components.ModelsTable/displayGroupedValueAs:property'}}displayGroupedValueAs{{/crossLink}})
   *
   * Generally you should not show column with property which is used for grouping (but it's up to you)
   *
   * @property useDataGrouping
   * @type boolean
   * @default false
   */
  useDataGrouping: false,

  /**
   * Property name used now for grouping rows
   *
   * **IMPORTANT** It should be set initially if {{#crossLink 'Components.ModelsTable/useDataGrouping:property'}}useDataGrouping{{/crossLink}} is set to `true`
   *
   * @property currentGroupingPropertyName
   * @type string
   * @default null
   */
  currentGroupingPropertyName: null,

  /**
   * Sort direction for grouped property values
   *
   * @property sortByGroupedFieldDirection
   * @type string
   * @default 'asc'
   * @private
   */
  sortByGroupedFieldDirection: 'asc',

  /**
   * Determines how grouped value will be displayed - as a row or column
   *
   * Allowed values are `row` and `column`
   *
   * @property displayGroupedValueAs
   * @type string
   * @default 'row'
   */
  displayGroupedValueAs: 'row',

  /**
   * Used in numeric pagination. If pages count is less than `collapseNumPaginationForPagesCount`, all pages will be shown.
   * E.g. for `collapseNumPaginationForPagesCount = 4` and `pagesCount = 4` pagination will be `1 2 3 4`, however for
   * `collapseNumPaginationForPagesCount = 1` and `pagesCount = 4` pagination will be `1 2 ... 4`
   *
   * @property collapseNumPaginationForPagesCount
   * @type number
   * @default 1
   */
  collapseNumPaginationForPagesCount: computed({
    get() {
      return 1;
    },
    set(k,v) {
      return Number(v);
    }
  }),

  /**
   * <code>columns</code> fields which are observed to update shown table-columns
   * It is used only if <code>columnsAreUpdateable</code> is <code>true</code>
   *
   * @type string[]
   * @property columnFieldsToCheckUpdate
   * @default ['propertyName', 'component']
   */
  columnFieldsToCheckUpdate: computed(function() {
    return A(['propertyName', 'component']);
  }),

  /**
   * `themeInstance` is an instance of [DefaultTheme](Themes.Default.html) or it's children.
   * By default `models-table` uses [BootstrapTheme](Themes.Bootstrap.html) instance.
   *
   * You may create your own theme-class and set `themeInstance` to it's instance. Check Theme properties you may define in your own theme.
   *
   * @type Themes.Bootstrap3
   * @property themeInstance
   */

  /**
   * All table records
   *
   * It's a first of the two attributes you must set to the component
   *
   * @type object[]
   * @property data
   * @default []
   */
  data: computed({
    get() {
      return A([]);
    },
    set(k, v) {
      return v;
    }
  }),

  /**
   * Table columns. Check [ModelsTableColumn](Utils.ModelsTableColumn.html) for available properties
   *
   * It's a second of the two attributes you must set to the component
   *
   * @type object[]
   * @property columns
   * @default []
   */
  columns: computed({
    get() {
      return A([]);
    },
    set(k, v) {
      return v;
    }
  }),

  /**
   * Hash of components to be used for columns.
   *
   * See [ModelsTableColumn](Utils.ModelsTableColumn.html), property component
   *
   * @type Object
   * @property columnComponents
   * @default {}
   */
  columnComponents: computed({
    get() {
      return {};
    },
    set(k,v) {
      return v;
    }
  }),

  /**
   * Sets of columns that can be toggled together.
   * Each object should have:
   *  * `label` (string) - The label for the set. This will be displayed in the columns dropdown.
   *  * `showColumns` (array|Function) - This should either be an array of `propertyNames` to show, or a function. If it is a function, the function will be called with the `processedColumns` as attribute.
   *  * `hideOtherColumns` (boolean) -  If this is true (default), all columns not specified in <code>showColumns</code> will be hidden. If this is set to false, other columns will be left at whatever visibility they were before.
   *  * `toggleSet` (boolean) - If this is true (default is false), the set columns will be shown if one of them is currently hidden,
   else they will all be hidden. Settings this will result in a default of `hideOtherColumns=false`
   *
   * @type Object[]
   * @property columnSets
   * @default []
   */
  columnSets: computed({
    get() {
      return A([]);
    },
    set(k, v) {
      return v;
    }
  }),

  /**
   * List of columns shown in the table. It's created from the {{#crossLink 'Components.ModelsTable/columns:property'}}columns{{/crossLink}} provided to the component
   *
   * @type Object[]
   * @property processedColumns
   * @default []
   * @private
   */
  processedColumns: computed({
    get() {
      return A([]);
    },
    set(k, v) {
      return v;
    }
  }),

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
   * @type groupedHeader[][]
   * @default []
   */
  groupedHeaders: computed({
    get() {
      return A([]);
    },
    set(k ,v) {
      return v;
    }
  }),

  /**
   * Determines if page size should be shown
   *
   * @type boolean
   * @property showPageSize
   * @default true
   */
  showPageSize: true,

  /**
   * Expanded row items.
   *
   * It's set to the initial value when current page or page size is changed
   *
   * @type object[]
   * @property expandedItems
   * @default null
   */
  expandedItems: computed({
    get() {
      return A([]);
    },
    set(k, v) {
      if (!isArray(v)) {
        warn('`expandedItems` must be an array.', false, {id: '#emt-expandedItems-array'});
      }
      return A(v);
    }
  }),

  /**
   * true - allow to expand more than 1 row,
   * false - only 1 row may be expanded in the same time
   *
   * @type boolean
   * @property multipleExpand
   * @default false
   */
  multipleExpand: false,

  /**
   * List of grouped property values where the groups are collapsed
   *
   * @type array
   * @property collapsedGroupValues
   * @default []
   */
  collapsedGroupValues: computed({
    get() {
      return A([]);
    },
    set(k, v) {
      if (!isArray(v)) {
        warn('`collapsedGroupValues` must be an array.', false, {id: '#emt-collapsedGroupValues-array'});
      }
      return A(v);
    }
  }),

  /**
   * Allow or disallow to select rows on click.
   * If `false` - no row can be selected
   *
   * @type boolean
   * @property selectRowOnClick
   * @default true
   */
  selectRowOnClick: true,

  /**
   * Allow or disallow to select multiple rows.
   * If `false` - only one row may be selected in the same time
   *
   * @type boolean
   * @property multipleSelect
   * @default false
   */
  multipleSelect: false,

  /**
   * Component used in the 'expanded' row
   *
   * It will receive several options:
   * * `record` - current row value
   * * `processedColumns` - current column (one of the {{#crossLink 'Components.ModelsTable/processedColumns:property'}}processedColumns{{/crossLink}})
   * * `index` - current row index
   * * `selectedItems` - bound from {{#crossLink 'Components.ModelsTable/selectedItems:property'}}selectedItems{{/crossLink}}
   * * `visibleProcessedColumns` - bound from {{#crossLink 'Components.ModelsTable/visibleProcessedColumns:property'}}visibleProcessedColumns{{/crossLink}}
   * * `clickOnRow` - closure action {{#crossLink 'Components.ModelsTable/actions.clickOnRow:method'}}ModelsTable.actions.clickOnRow{{/crossLink}}
   * * `themeInstance` - bound from {{#crossLink 'Components.ModelsTable/themeInstance:property'}}themeInstance{{/crossLink}}
   *
   * Usage:
   *
   * ```hbs
   * {{models-table data=model columns=columns expandedRowComponent=(component "expanded-row")}}
   * ```
   *
   * @type object
   * @property expandedRowComponent
   * @default null
   */
  expandedRowComponent: null,

  /**
   * Component used in the row with a grouped value
   *
   * This component won't be used if {{#crossLink 'Component.ModelsTable/useDataGrouping:property'}}useDataGrouping{{/crossLink}} is not `true`
   *
   * Component will receive several options:
   *
   * * `groupedValue` - grouped property value
   * * `currentGroupingPropertyName` - bound from {{#crossLink 'Components.ModelsTable/currentGroupingPropertyName:property'}}currentGroupingPropertyName{{/crossLink}}
   * * `displayGroupedValueAs` - bound from {{#crossLink 'Components.ModelsTable/displayGroupedValueAs:property'}}ModelsTable.displayGroupedValueAs{{/crossLink}}
   * * `toggleGroupedRows` - closure action {{#crossLink 'Components.ModelsTable/actions.toggleGroupedRows:method'}}ModelsTable.actions.toggleGroupedRows{{/crossLink}}
   * * `toggleGroupedRowsExpands` - closure action {{#crossLink 'Components.ModelsTable/actions.toggleGroupedRowsExpands:method'}}ModelsTable.actions.toggleGroupedRowsExpands{{/crossLink}}
   * * `toggleGroupedRowsSelection` - closure action {{#crossLink 'Components.ModelsTable/actions.toggleGroupedRowsSelection:method'}}ModelsTable.actions.toggleGroupedRowsSelection{{/crossLink}}
   * * `visibleProcessedColumns` - bound from {{#crossLink 'Components.ModelsTable/visibleProcessedColumns:property'}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   * * `themeInstance` - bound from {{#crossLink 'Components.ModelsTable/themeInstance:property'}}ModelsTable.themeInstance{{/crossLink}}
   * * `groupedItems` - list of all rows group items
   * * `visibleGroupedItems` - list of rows group items shown on the current table page
   * * `selectedGroupedItems` - list of selected rows group items
   * * `expandedGroupedItems` - list of expanded rows group items
   *
   * Usage:
   *
   * ```hbs
   * {{models-table data=model columns=columns groupingRowComponent=(component "grouping-row")}}
   * ```
   *
   * @type object
   * @property groupingRowComponent
   * @default null
   */
  groupingRowComponent: null,

  /**
   * This component won't be used if {{#crossLink 'Component.ModelsTable/useDataGrouping:property'}}useDataGrouping{{/crossLink}} is not `true`
   *
   * Component will receive several options:
   *
   * * `visibleProcessedColumns` - bound from {{#crossLink 'Components.ModelsTable/visibleProcessedColumns:property'}}ModelsTable.visibleProcessedColumns{{/crossLink}}
   * * `themeInstance` - bound from {{#crossLink 'Components.ModelsTable/themeInstance:property'}}ModelsTable.themeInstance{{/crossLink}}
   * * `groupedItems` - list of all rows group items
   * * `visibleGroupedItems` - list of rows group items shown on the current table page
   * * `selectedGroupedItems` - list of selected rows group items
   * * `expandedGroupedItems` - list of expanded rows group items
   *
   * Usage:
   *
   * ```hbs
   * {{models-table data=model columns=columns groupSummaryRowComponent=(component "group-summary-row")}}
   * ```
   *
   * @type object
   * @property groupSummaryRowComponent
   * @default null
   */
  groupSummaryRowComponent: null,

  /**
   * Component for header cell for column with grouping value
   *
   * This component won't be used if {{#crossLink 'Component.ModelsTable/useDataGrouping:property'}}useDataGrouping{{/crossLink}} is not `true` and
   * {{#crossLink 'Component.ModelsTable/displayGroupedValueAs:property'}}displayGroupedValueAs{{/crossLink}} is not `columns`
   *
   * Usage:
   *
   * ```hbs
   * {{models-table data=model columns=columns groupHeaderCellComponent=(component "group-header-cell")}}
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
  groupHeaderCellComponent: null,

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
   * Usage:
   *
   * ```hbs
   * {{models-table data=model columns=columns displayDataChangedAction=(action "someAction")}}
   * ```
   *
   * @event displayDataChangedAction
   */
  displayDataChangedAction: null,

  /**
   * Action sent on init to give access to the Public API
   *
   * @default null
   * @property registerAPI
   * @type closureFunction
   */
  registerAPI: null,

  /**
   * Closure action sent on change of visible columns
   *
   * The action will receive an array of objects as parameter, where every object looks like this: `{ propertyName: 'firstName', isHidden: true, mayBeHidden: false }`
   *
   * * Usage:
   *
   * ```hbs
   * {{models-table data=model columns=columns columnsVisibilityChangedAction=(action "someAction")}}
   * ```
   *
   * @event columnsVisibilityChangedAction
   */
  columnsVisibilityChangedAction: null,

  /**
   * Closure action sent on row double-click
   *
   * Usage
   *
   * ```hbs
   * {{models-table data=model columns=columns rowDoubleClickAction=(action "someAction")}}
   * ```
   *
   * @event rowDoubleClickAction
   */
  rowDoubleClickAction: null,

  /**
   * Closure action sent on row hover
   *
   * Usage
   *
   * ```hbs
   * {{models-table data=model columns=columns rowHoverAction=(action "someAction")}}
   * ```
   *
   * @event rowHoverAction
   */
  rowHoverAction: null,

  /**
   * Closure action sent on row out
   *
   * Usage
   *
   * ```hbs
   * {{models-table data=model columns=columns rowOutAction=(action "someAction")}}
   * ```
   *
   * @event rowOutAction
   */
  rowOutAction: null,

  /**
   * List of currently selected row items
   *
   * Row may be selected by clicking on it, if {{#crossLink 'Components.ModelsTable/selectRowOnClick:property'}}selectRowOnClick{{/crossLink}} is set to `true`
   *
   * @default null
   * @property selectedItems
   * @type object[]
   */
  selectedItems: computed({
    get() {
      return A([]);
    },
    set(k, v) {
      if (!isArray(v)) {
        warn('`selectedItems` must be an array.', false, {id: '#emt-selectedItems-array'});
      }
      return A(v);
    }
  }),

  /**
   * List of the currently visible columns
   *
   * @type Object[]
   * @property visibleProcessedColumns
   * @default []
   * @private
   */
  visibleProcessedColumns: computed.filterBy('processedColumns', 'isVisible', true),

  /**
   * True if all processedColumns are hidden by <code>isHidden</code>
   *
   * @type boolean
   * @property allColumnsAreHidden
   * @readonly
   * @private
   */
  allColumnsAreHidden: computed('processedColumns.@each.isHidden', function () {
    const processedColumns = get(this, 'processedColumns');
    return get(processedColumns, 'length') > 0 && processedColumns.isEvery('isHidden', true);
  }),

  /**
   * List of property names can be used for grouping
   *
   * It may be a list of strings of list of objects. In first case label and value in the select-box will be the same.
   * In the second case you must set `label` and `value` properties for each list item
   *
   * **IMPORTANT** It must contain {{#crossLink 'Components.ModelsTable/currentGroupingPropertyName:property'}}currentGroupingPropertyName{{/crossLink}}-value
   *
   * @property dataGroupProperties
   * @type string[]|object[]
   * @default []
   */
  dataGroupProperties: computed({
    get() {
      return A([]);
    },
    set(k ,v) {
      return v;
    }
  }),

  /**
   * @property dataGroupOptions
   * @type object[]
   * @private
   * @readonly
   */
  dataGroupOptions: computed('dataGroupProperties.[]', function () {
    return get(this, 'dataGroupProperties').map(item => {
      return 'object' === typeOf(item) || 'instance' === typeOf(item) ? item : {label: propertyNameToTitle(item), value: item};
    });
  }),

  /**
   * `true` if some value is set to the global filter
   *
   * @type boolean
   * @property globalFilterUsed
   * @readonly
   * @private
   */
  globalFilterUsed: computed.notEmpty('filterString'),

  /**
   * `true` if global filter or filter by any column is used
   *
   * @type boolean
   * @property anyFilterUsed
   * @readonly
   * @private
   */
  anyFilterUsed: computed('globalFilterUsed', 'processedColumns.@each.filterUsed', function () {
    return get(this, 'globalFilterUsed') || get(this, 'processedColumns').isAny('filterUsed');
  }),

  /**
   * `true` if all processedColumns don't use filtering and sorting
   *
   * @type boolean
   * @property noHeaderFilteringAndSorting
   * @readonly
   * @private
   */
  noHeaderFilteringAndSorting: computed('processedColumns.@each.{useSorting,useFilter}', function () {
    const processedColumns = get(this, 'processedColumns');
    return processedColumns.isEvery('useFilter', false) && processedColumns.isEvery('useSorting', false);
  }),

  /**
   * Number of pages
   *
   * @type number
   * @property pagesCount
   * @readonly
   * @private
   */
  pagesCount: computed('arrangedContent.[]', 'pageSize', function () {
    const pagesCount = get(this, 'arrangedContent.length') / get(this, 'pageSize');
    return (0 === pagesCount % 1) ? pagesCount : (Math.floor(pagesCount) + 1);
  }),

  /**
   * {{#crossLink 'Components.ModelsTable/data:property'}}data{{/crossLink}} filtered with a global filter and columns filters
   *
   * Filtering by columns is ignored if {{#crossLink 'Components.ModelsTable/useFilteringByColumns:property'}}useFilteringByColumns{{/crossLink}} is set to `false`
   *
   * @type Object[]
   * @property filteredContent
   * @readonly
   * @private
   */
  filteredContent: computed('filterString', 'data.[]', 'useFilteringByColumns', 'processedColumns.@each.filterString', function () {
    const processedColumns = get(this, 'processedColumns');
    const data = get(this, 'data');
    const useFilteringByColumns = get(this, 'useFilteringByColumns');
    const filteringIgnoreCase = get(this, 'filteringIgnoreCase');
    const doFilteringByHiddenColumns = get(this, 'doFilteringByHiddenColumns');
    if (!isArray(data)) {
      return [];
    }
    if (!get(this, 'anyFilterUsed')) {
      return data.slice();
    }
    let filterString = get(this, 'filterString');
    if (filteringIgnoreCase) {
      filterString = filterString.toLowerCase();
    }

    let _processedColumns = A(processedColumns.filterBy('useFilter'));
    if (!doFilteringByHiddenColumns) {
      _processedColumns = A(_processedColumns.filterBy('isHidden', false));
    }
    if (!get(_processedColumns, 'length')) {
      return data.slice();
    }

    // global search
    const filtersFor = A(A(_processedColumns.mapBy('filterField')).compact());
    let globalSearch = data.filter(function (row) {
      return filtersFor.any(filterFor => {
        let cellValue = '' + get(row, filterFor);
        if (filteringIgnoreCase) {
          cellValue = cellValue.toLowerCase();
        }
        return -1 !== cellValue.indexOf(filterString);
      });
    });

    if (!useFilteringByColumns) {
      return globalSearch;
    }

    // search by each column
    _processedColumns = _processedColumns.filterBy('filterField').filter(c => !((get(c, 'filterWithSelect') && '' === get(c, 'filterString'))));
    return globalSearch.filter(row => {
      return _processedColumns.every(c => {
        const filterFor = get(c, 'filterField');
        let cellValue = '' + get(row, filterFor);
        let filterString = get(c, 'filterString');
        if (filteringIgnoreCase) {
          cellValue = typeOf(cellValue) === 'string' ? cellValue.toLowerCase() : cellValue;
          filterString = typeOf(filterString) === 'string' ? filterString.toLowerCase() : filterString;
        }
        return 'function' === typeOf(c.filterFunction) ? c.filterFunction(cellValue, filterString, row) : 0 === compare(cellValue, filterString);
      });
    });
  }),

  /**
   * {{#crossLink 'Components.ModelsTable/filteredContent:property'}}filteredContent{{/crossLink}} sorted by needed properties
   *
   * @type Object[]
   * @property arrangedContent
   * @readonly
   * @private
   */
  arrangedContent: computed('filteredContent.[]', 'sortProperties.[]', 'sortFunctions.[]', function () {
    const filteredContent = get(this, 'filteredContent');
    let sortProperties = get(this, 'sortProperties').map(p => {
      let [prop, direction] = p.split(':');
      direction = direction || 'asc';

      return [prop, direction];
    });

    let _filteredContent = filteredContent.slice();
    const sortedPropsLength = get(sortProperties, 'length');
    return sortedPropsLength ? _filteredContent.sort((row1, row2) => {
      for (let i = 0; i < sortedPropsLength; i++) {
        let [prop, direction] = sortProperties[i];
        let sortFunction = get(this, `sortFunctions.${prop}`) || betterCompare;
        let result = prop ? sortFunction(get(row1, prop), get(row2, prop)) : 0;
        if (result !== 0) {
          return (direction === 'desc') ? (-1 * result) : result;
        }
      }

      return 0;
    }) : _filteredContent;
  }),

  filteredContentObserver() {
    run.once(this, this.filteredContentObserverOnce);
  },

  filteredContentObserverOnce() {
    this.updateState({ recordsCount: this.get('filteredContent.length') });
  },

  /**
   * {{#crossLink 'Components.ModelsTable/filteredContent:property'}}filteredContent{{/crossLink}} grouped by {{#crossLink 'Components.ModelsTable/currentGroupingPropertyName:property'}}currentGroupingPropertyName{{/crossLink}} sorted by needed properties
   *
   * @property groupedArrangedContent
   * @type object[]
   * @private
   * @readonly
   */
  groupedArrangedContent: computed('filteredContent.[]', 'sortProperties.[]', 'sortFunctions.[]', 'useDataGrouping', 'currentGroupingPropertyName', 'sortByGroupedFieldDirection', function () {
    const useDataGrouping = get(this, 'useDataGrouping');
    const currentGroupingPropertyName = get(this, 'currentGroupingPropertyName');
    const filteredContent = get(this, 'filteredContent');
    const sortByGroupedFieldDirection = get(this, 'sortByGroupedFieldDirection');
    let grouped = {};
    if (!useDataGrouping || !isArray(filteredContent)) {
      return grouped;
    }
    let sortProperties = get(this, 'sortProperties').map(p => {
      let [prop, direction] = p.split(':');
      direction = direction || 'asc';
      return [prop, direction];
    });

    grouped = chunkBy(filteredContent, currentGroupingPropertyName, sortByGroupedFieldDirection);

    const sortPropsLength = get(sortProperties, 'length');
    grouped = grouped.map(group => {
      return sortPropsLength ? A(group.sort((row1, row2) => {
        for (let i = 0; i < sortPropsLength; i++) {
          let [prop, direction] = sortProperties[i];
          let sortFunction = get(this, `sortFunctions.${prop}`) || betterCompare;
          let result = prop ? sortFunction(get(row1, prop), get(row2, prop)) : 0;
          if (result !== 0) {
            return (direction === 'desc') ? (-1 * result) : result;
          }
        }
        return 0;
      })) : group;
    });
    return grouped.reduce((result, group) => A([...result, ...group]), []);
  }),

  /**
   * Content of the current table page
   *
   * {{#crossLink 'Components.ModelsTable/arrangedContent:property'}}arrangedContent{{/crossLink}} sliced for currently shown page
   *
   * @type Object[]
   * @property visibleContent
   * @readonly
   * @private
   */
  visibleContent: computed('arrangedContent.[]', 'pageSize', 'currentPageNumber', function () {
    const arrangedContent = get(this, 'arrangedContent');
    const pageSize = get(this, 'pageSize');
    const currentPageNumber = get(this, 'currentPageNumber');
    const startIndex = pageSize * (currentPageNumber - 1);
    if (get(arrangedContent, 'length') < pageSize) {
      return arrangedContent;
    }
    return arrangedContent.slice(startIndex, startIndex + pageSize);
  }),

  /**
   * Content of the current table page when rows grouping is used
   *
   * {{#crossLink 'Components.ModelsTable/groupedVisibleContent:property'}}groupedVisibleContent{{/crossLink}} sliced for currently shown page
   *
   * @property groupedVisibleContent
   * @default {}
   * @type object
   * @private
   * @readonly
   */
  groupedVisibleContent: computed('groupedArrangedContent', 'pageSize', 'currentPageNumber', 'useDataGrouping', 'currentGroupingPropertyName', function () {
    const useDataGrouping = get(this, 'useDataGrouping');
    const currentGroupingPropertyName = get(this, 'currentGroupingPropertyName');
    const groupedArrangedContent = get(this, 'groupedArrangedContent');
    const pageSize = get(this, 'pageSize');
    const currentPageNumber = get(this, 'currentPageNumber');
    if (!useDataGrouping) {
      return [];
    }
    const startIndex = pageSize * (currentPageNumber - 1);
    return get(groupedArrangedContent, 'length') < pageSize ?
      chunkBy(groupedArrangedContent, currentGroupingPropertyName) :
      chunkBy(groupedArrangedContent.slice(startIndex, startIndex + pageSize), currentGroupingPropertyName);
  }),

  /**
   * List of grouped property values in order to show groups in the table
   *
   * @type array
   * @property groupedVisibleContentValuesOrder
   * @private
   * @readonly
   */
  groupedVisibleContentValuesOrder: computed('groupedVisibleContent.[]', 'currentGroupingPropertyName', function () {
    const currentGroupingPropertyName = get(this, 'currentGroupingPropertyName');
    return get(this, 'groupedVisibleContent').map(group => get(group, `firstObject.${currentGroupingPropertyName}`));
  }),

  /**
   * Is user on the last page
   *
   * @type boolean
   * @property isLastPage
   * @readonly
   * @private
   */
  isLastPage: computed('currentPageNumber', 'pagesCount', function () {
    return get(this, 'currentPageNumber') >= get(this, 'pagesCount');
  }),

  /**
   * Alias to <code>arrangedContent.length</code>
   *
   * @type number
   * @property arrangedContentLength
   * @readonly
   * @private
   */
  arrangedContentLength: alias('arrangedContent.length'),

  /**
   * Index of the first currently shown record
   *
   * @type number
   * @property firstIndex
   * @private
   * @readonly
   */
  firstIndex: computed('arrangedContentLength' ,'pageSize', 'currentPageNumber', function () {
    return 0 === get(this, 'arrangedContentLength') ? 0 : get(this, 'pageSize') * (get(this, 'currentPageNumber') - 1) + 1;
  }),

  /**
   * Index of the last currently shown record
   *
   * @type number
   * @property lastIndex
   * @readonly
   * @private
   */
  lastIndex: computed('isLastPage', 'arrangedContentLength', 'currentPageNumber', 'pageSize', function () {
    return get(this, 'isLastPage') ? get(this, 'arrangedContentLength') : get(this, 'currentPageNumber') * get(this, 'pageSize');
  }),

  /**
   * List of possible <code>pageSize</code> values. Used to change size of <code>visibleContent</code>
   *
   * @type number[]
   * @default [10, 25, 50]
   * @property pageSizeValues
   */
  pageSizeValues: computed(function() {
    return A([10, 25, 50]);
  }),

  /**
   * List of options for pageSize-selectBox
   * It's mapped from <code>pageSizeValues</code>
   * This value should not be set manually!
   *
   * @type [{value: string|number, label: string|number}]
   * @property pageSizeOptions
   * @default []
   * @private
   */
  pageSizeOptions: computed({
    get() {
      return A([]);
    },
    set(k ,v) {
      return v;
    }
  }),

  /**
   * List of options for pageNumber-selectBox
   *
   * @property currentPageNumberOptions
   * @type [{value: string|number, label: string|number}]
   * @default []
   * @private
   */
  currentPageNumberOptions: computed('pagesCount', function () {
    const pagesCount = get(this, 'pagesCount');
    return Array.apply(null, {length: pagesCount}).map((v, i) => optionStrToObj(i + 1));
  }),

  /**
   * These are options for the columns dropdown.
   * By default, the 'Show All', 'Hide All' and 'Restore Defaults' buttons are displayed.
   *
   * @type { showAll: boolean, hideAll: boolean, restoreDefaults: boolean, columnSets: object[] }
   * @property columnDropdownOptions
   * @readonly
   * @private
   */
  columnDropdownOptions: computed('columnSets.{label,showColumns,hideOtherColumns}', function() {
    return O.create({
      showAll: true,
      hideAll: true,
      restoreDefaults: true,
      columnSets: A(get(this, 'columnSets') || [])
    });
  }),

  /**
   * Public API that allows for programmatic interaction with the component
   *
   * {
   *  refilter() - Invalidates the filteredContent property, causing the table to be re-filtered.
   *  recordsCount - Size of the current arranged content
   * }
   *
   * @type object
   * @property publicAPI
   *
   */
  publicAPI: null,

  updateState(changes) {
    let newState = set(this, 'publicAPI', assign({}, this.get('publicAPI'), changes));
    let registerAPI = this.get('registerAPI');
    if (registerAPI) {
      registerAPI(newState);
    }
    return newState;
  },

  /**
   * Show first page if for some reasons there is no content for current page, but table data exists
   *
   * @method visibleContentObserver
   * @returns {undefined}
   * @private
   */
  visibleContentObserver() {
    run.once(this, this.visibleContentObserverOnce);
  },

  /**
   * @method visibleContentObserverOnce
   * @returns {undefined}
   * @private
   */
  visibleContentObserverOnce() {
    let visibleContentLength = get(this, 'visibleContent.length');
    let dataLength = get(this, 'data.length');
    let currentPageNumber = get(this, 'currentPageNumber');
    if (!visibleContentLength && dataLength && currentPageNumber !== 1) {
      set(this, 'currentPageNumber', 1);
    }
  },

  init() {
    this._super(...arguments);
    this.setup();
  },

  didReceiveAttrs() {
    this.updateColumns();
  },

  didInsertElement() {
    this.focus();
    this._super(...arguments);
    if (get(this, 'checkTextTranslations')) {
      this._checkColumnTitles();
    }
  },

  /**
   * @method checkColumnTitles
   * @private
   * @returns {undefined}
   */
  _checkColumnTitles() {
    get(this, 'columns').forEach((c, index) => {
      warn(`#${this.elementId}. No title. Column #${index}. ${get(c, 'propertyName')}`, !(!c.hasOwnProperty('title') && get(c, 'propertyName')), {id: '#emt-column-no-title'});
    });
  },

  /**
   * Component init
   *
   * Set visibility and filtering attributes for each column
   *
   * @method setup
   * @returns {undefined}
   */
  setup() {
    this._setupSelectedRows();
    this._setupColumns();
    this._setupPageSizeOptions();

    if (get(this, 'columnsAreUpdateable')) {
      let columnFieldsToCheckUpdate = get(this, 'columnFieldsToCheckUpdate');
      assert('`columnFieldsToCheckUpdate` should be an array of strings', 'array' === typeOf(columnFieldsToCheckUpdate));
      columnFieldsToCheckUpdate.forEach(propertyName => this.addObserver(`columns.@each.${propertyName}`, this, this._setupColumnsOnce));
    }
    this.addObserver('visibleContent.length', this, this.visibleContentObserver);
    this.addObserver('filteredContent.length', this, this.filteredContentObserver);

    set(this, 'publicAPI', {});

    this.updateState({
      recordsCount: this.get('filteredContent.length') || 0,
      refilter: this.refilter.bind(this)
    });
  },

  refilter() {
    this.notifyPropertyChange('filteredContent');
  },

  /**
   * Recalculate processedColumns when the columns attr changes
   *
   * @method updateColumns
   * @returns {undefined}
   */
  updateColumns() {
    if (get(this, 'columnsAreUpdateable')) {
      this._setupColumns();
    }
  },

  /**
   * Focus on 'Global filter' on component render
   *
   * @method focus
   * @returns {undefined}
   */
  focus() {
    if (get(this, 'showGlobalFilter') && get(this, 'focusGlobalFilter')) {
      this.element.querySelector('.filterString').focus();
    }
  },

  /**
   * Preselect table rows if `selectedItems` is provided
   *
   * `multipleSelected` may be set `true` if `selectedItems` has more than 1 item
   *
   * @private _setupSelectedRows
   * @returns {undefined}
   * @method
   */
  _setupSelectedRows() {
    let selectedItems = get(this, 'selectedItems');
    if (isArray(selectedItems) && get(selectedItems, 'length') > 1 && !get(this, 'multipleSelected')) {
      warn('`multipleSelected` is set `true`, because you have provided multiple `selectedItems`.', false, {id: '#emt-multipleSelected_autoset'});
      set(this, 'multipleSelected', true);
    }
  },

  /**
   * Wrapper for <code>_setupColumns</code> to call it only once when observer is fired
   *
   * @method _setupColumnsOnce
   * @returns {undefined}
   * @private
   */
  _setupColumnsOnce() {
    run.once(this, this._setupColumns);
  },

  /**
   * Generate hash for column-`extend`
   *
   * @method _createColumnHash
   * @param {object} options
   * @returns {object}
   * @private
   */
  _createColumnHash(options) {
    const hash = {
      __mt: this,
      data: readOnly('__mt.data')
    };
    const {propertyName} = options;
    if (get(options, 'filterWithSelect') && (get(options, 'filteredBy') || get(options, 'propertyName')) && !get(options, 'disableFiltering')) {
      let predefinedFilterOptions = get(options, 'predefinedFilterOptions');
      let usePredefinedFilterOptions = 'array' === typeOf(predefinedFilterOptions);
      if (usePredefinedFilterOptions && get(predefinedFilterOptions, 'length')) {
        const types = A(['object', 'instance']);
        const allObjects = A(predefinedFilterOptions).every(option => types.includes(typeOf(option)) && option.hasOwnProperty('label') && option.hasOwnProperty('value'));
        const allPrimitives = A(predefinedFilterOptions).every(option => !types.includes(typeOf(option)));
        assert('`predefinedFilterOptions` should be an array of objects or primitives and not mixed', allObjects || allPrimitives);
        if (allPrimitives) {
          predefinedFilterOptions = predefinedFilterOptions.map(optionStrToObj);
        }
        if ('' !== predefinedFilterOptions[0].value) {
          predefinedFilterOptions = [{value: '', label: ''}, ...predefinedFilterOptions];
        }
        hash.filterOptions = usePredefinedFilterOptions ? A(predefinedFilterOptions) : [];
      }
      else if (usePredefinedFilterOptions) {
        // Empty array as predefined filter
        hash.useFilter = false;
      }
      else {
        if (propertyName) {
          hash.filterOptions = getFilterOptionsCP(propertyName);
        }
      }
    }
    return hash;
  },

  /**
   * Set values for some column-properties after its creation
   *
   * @method _postProcessColumn
   * @param {object} column
   * @returns {object}
   * @private
   */
  _postProcessColumn(column) {
    const filterOptions = get(column, 'filterOptions');
    const placeholder = get(column, 'filterPlaceholder');
    if (isArray(filterOptions) && placeholder && !filterOptions[0].label) {
      set(column, 'filterOptions.firstObject.label', placeholder);
    }
    return column;
  },

  /**
   * Create a column.
   * This can be overwritten if you need to use your own column object.
   *
   * Override must something like:
   *
   * ```js
   * _createColumn(options) {
   *   const hash = this._createColumnHash(options);
   *   const column = ModelsTableColumn.extend(hash).create(options);
   *   return this._postProcessColumn(column);
   * }
   * ```
   *
   * @method _createColumn
   * @param {object} options
   * @returns {Object}
   */
  _createColumn(options) {
    const hash = this._createColumnHash(options);
    const column = ModelsTableColumn.extend(hash).create(options);
    return this._postProcessColumn(column);
  },

  /**
   * Create new properties for `columns`
   *
   * @method _setupColumns
   * @returns {undefined}
   * @private
   */
  _setupColumns () {
    let self = this;

    let nColumns = A(get(this, 'columns').map(column => {
      let filterFunction = get(column, 'filterFunction');
      filterFunction = 'function' === typeOf(filterFunction) ? filterFunction : defaultFilter;

      let c = this._createColumn(column);

      ['colspanForSortCell', 'colspanForFilterCell'].forEach(prop => {
        const val = get(c, prop);
        assert(`"${prop}" must be 1 or greater. You passed "${val}"`, typeOf(val) === 'number' && val >= 1);
      });

      setProperties(c, {
        filterString: get(c, 'filterString') || '',
        originalDefinition: column
      });

      this._setupColumnsComponent(c, column);

      set(c, 'filterFunction', filterFunction);

      if (isNone(get(c, 'mayBeHidden'))) {
        set(c, 'mayBeHidden', true);
      }

      const { sortDirection, sortPrecedence } = column;
      const hasSortPrecedence = !isNone(sortPrecedence) && sortPrecedence > NOT_SORTED;
      const defaultSortPrecedence = hasSortPrecedence ? sortPrecedence : NOT_SORTED;
      const defaultSorting = sortDirection && (sortPrecedence > NOT_SORTED) ? sortDirection.toLowerCase() : 'none';

      setProperties(c, {
        defaultVisible: !get(c, 'isHidden'),
        sorting: defaultSorting,
        sortPrecedence: defaultSortPrecedence
      });
      return c;
    }));
    nColumns.filterBy('propertyName').forEach(column => {
      let propertyName = get(column, 'propertyName');
      if (isNone(get(column, 'title'))) {
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
      if (get(this, 'multipleColumnsSorting')) {
        this._multiColumnsSorting(...sortingArgs);
      }
      else {
        this._singleColumnSorting(...sortingArgs);
      }
    });
    this.updateHeaderCellsColspanOnce();
  },

  /**
   * Create new properties for `columns` for components
   *
   * @method _setupColumnsComponent
   * @param {ModelsTableColumn} c
   * @param {object} column raw column
   * @returns {undefined}
   * @private
   */
  _setupColumnsComponent(c, column) {
    let columnComponents = get(this, 'columnComponents');
    if (isPresent(columnComponents)) {

      // display component
      let componentName = get(column, 'component');
      if (isPresent(componentName)) {
        let hashComponent = get(columnComponents, componentName);
        if (isPresent(hashComponent)) {
          set(c, 'component', hashComponent);
        }
      }

      // edit component
      componentName = get(column, 'componentForEdit');
      if (isPresent(componentName)) {
        let hashComponent = get(columnComponents, componentName);
        if (isPresent(hashComponent)) {
          set(c, 'componentForEdit', hashComponent);
        }
      }

    }
  },

  /**
   * Provide backward compatibility with <code>pageSizeValues</code> equal to an array with numbers and not objects
   * <code>pageSizeValues</code> is live as is, <code>pageSizeOptions</code> is used in the templates
   *
   * @method _setupPageSizeOptions
   * @returns {undefined}
   * @private
   */
  _setupPageSizeOptions() {
    let pageSizeOptions = get(this, 'pageSizeValues').map(optionStrToObj);
    set(this, 'pageSizeOptions', pageSizeOptions);
  },

  /**
   * Set <code>sortProperties</code> when single-column sorting is used
   *
   * @param {ModelsTableColumn} column
   * @param {string} sortedBy
   * @param {string} newSorting 'asc|desc|none'
   * @method _singleColumnSorting
   * @returns {undefined}
   * @private
   */
  _singleColumnSorting(column, sortedBy, newSorting) {
    get(this, 'processedColumns').setEach('sorting', 'none');
    set(column, 'sorting', newSorting);
    let sortFunctions = Object.create(null);
    sortFunctions[sortedBy] = get(column, 'sortFunction');
    set(this, 'sortFunctions', sortFunctions);
    set(this, 'sortProperties', 'none' === newSorting ? [] : [`${sortedBy}:${newSorting}`]);
  },

  /**
   * Set <code>sortProperties</code> when multi-columns sorting is used
   *
   * @param {ModelsTableColumn} column
   * @param {string} sortedBy
   * @param {string} newSorting 'asc|desc|none'
   * @method _multiColumnsSorting
   * @returns {undefined}
   * @private
   */
  _multiColumnsSorting(column, sortedBy, newSorting) {
    set(column, 'sorting', newSorting);
    let sortProperties = get(this, 'sortProperties');
    let sortPropertiesMap = {};
    sortProperties.forEach(p => {
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
      set(newSortFunctions, propertyName, get(column, 'sortFunction'));
    });
    if ('none' !== newSorting) {
      newSortProperties.pushObject(`${sortedBy}:${newSorting}`);
      newSortFunctions[sortedBy] = get(column, 'sortFunction');
    }
    set(this, 'sortProperties', newSortProperties);
    set(this, 'sortFunctions', newSortFunctions);
  },

  /**
   * Send `displayDataChangedAction`-action when user does sort of filter.
   * Action is sent if `displayDataChangedAction` is a closure-action
   *
   * @method userInteractionObserver
   * @returns {undefined}
   * @private
   */
  userInteractionObserver () {
    run.once(this, this.userInteractionObserverOnce);
  },

  /**
   * @method userInteractionObserverOnce
   * @returns {undefined}
   * @private
   */
  userInteractionObserverOnce() {
    let action = get(this, 'displayDataChangedAction');
    let actionIsFunction = typeof action === 'function';

    if (actionIsFunction) {
      let columns = get(this, 'processedColumns');
      let settings = O.create({
        sort: get(this, 'sortProperties'),
        currentPageNumber: get(this, 'currentPageNumber'),
        pageSize: get(this, 'pageSize'),
        filterString: get(this, 'filterString'),
        filteredContent: get(this, 'filteredContent'),
        selectedItems: get(this, 'selectedItems'),
        expandedItems: get(this, 'expandedItems'),
        columns: columns.map(c => getProperties(c, ['filterString', 'filterField', 'sortField', 'sorting', 'propertyName'])),
        columnFilters: {}
      });
      columns.forEach(column => {
        if (!isBlank(get(column, 'filterString'))) {
          settings.columnFilters[get(column, 'propertyName')] = get(column, 'filterString');
        }
      });
      action(settings);
    }
  },

  /**
   * Send `columnsVisibilityChangedAction`-action when user changes which columns are visible.
   * Action is sent if `columnsVisibilityChangedAction` is a closure action
   *
   * @returns {undefined}
   * @method _sendColumnsVisibilityChangedAction
   * @private
   */
  _sendColumnsVisibilityChangedAction() {
    let action = get(this, 'columnsVisibilityChangedAction');
    let actionIsFunction = typeof action === 'function';

    if (actionIsFunction) {
      let columns = get(this, 'processedColumns');
      let columnsVisibility = columns.map(column => {
        let options = getProperties(column, 'isHidden', 'mayBeHidden', 'propertyName');
        options.isHidden = !!options.isHidden;
        return options;
      });
      action(columnsVisibility);
    }
  },

  /**
   * Handler for global filter and filter by each column
   *
   * @method forceToFirstPage
   * @returns {undefined}
   * @private
   */
  forceToFirstPage() {
    set(this, 'currentPageNumber', 1);
    this.userInteractionObserver();
  },

  /**
   * Collapse open rows when user change page size or moved to the another page
   *
   * @method collapseRowOnNavigate
   * @returns {undefined}
   * @private
   */
  collapseRowOnNavigate: observer('currentPageNumber', 'pageSize', function () {
    get(this, 'expandedItems').clear();
  }),

  /**
   * Rebuild the whole table.
   * This can be called to force a complete re-render of the table.
   *
   * @method rebuildTable
   * @returns {undefined}
   */
  rebuildTable() {
    set(this, 'currentPageNumber', 1);
    this._clearFilters();
    this.setup();
  },

  /**
   * Update colspans for table header cells
   *
   * @method updateHeaderCellsColspan
   * @returns {undefined}
   * @private
   */
  updateHeaderCellsColspan: observer('processedColumns.@each.{isVisible,colspanForSortCell,colspanForFilterCell}', function () {
    run.once(this, this.updateHeaderCellsColspanOnce);
  }),

  /**
   * @method updateHeaderCellsColspanOnce
   * @returns {undefined}
   * @private
   */
  updateHeaderCellsColspanOnce() {
    get(this, 'processedColumns').forEach((column, index, columns) => {
      const colspanForSortCell = get(column, 'colspanForSortCell');
      const colspanForFilterCell = get(column, 'colspanForFilterCell');
      const nextColumnsForSortCell = columns.slice(index, index + colspanForSortCell).filter(c => get(c, 'isHidden'));
      const nextColumnsForFilterCell = columns.slice(index, index + colspanForFilterCell).filter(c => get(c, 'isHidden'));
      set(column, 'realColspanForSortCell', colspanForSortCell - get(nextColumnsForSortCell, 'length'));
      set(column, 'realColspanForFilterCell', colspanForFilterCell - get(nextColumnsForFilterCell, 'length'));
    });
  },

  /**
   * Clear all filters.
   *
   * @method _clearFilters
   * @returns {undefined}
   * @private
   */
  _clearFilters() {
    set(this, 'filterString', '');
    get(this, 'processedColumns').setEach('filterString', '');
  },

  willInsertElement() {
    get(this, 'forceToFirstPageProps').forEach(propertyName => this.addObserver(propertyName, this, 'forceToFirstPage'));
    return this._super(...arguments);
  },

  willDestroyElement() {
    get(this, 'forceToFirstPageProps').forEach(propertyName => this.removeObserver(propertyName, this, 'forceToFirstPage'));
    const registerAPI = get(this, 'registerAPI');
    if (registerAPI) {
      registerAPI(null);
    }
    get(this, 'processedColumns').invoke('destroy');
    return this._super(...arguments);
  },

  /**
   * @type Object
   */
  actions: {

    /**
     * Toggle visibility for provided column
     *
     * It doesn't do nothing if column can't be hidden (see {{#crossLink 'Utils.ModelsTableColumn/mayBeHidden:property'}}mayBeHidden{{/crossLink}}). May trigger sending {{#crossLink 'Components.ModelsTable/columnsVisibilityChangedAction:property'}}columnsVisibilityChangedAction{{/crossLink}}
     *
     * @method actions.toggleHidden
     * @param {ModelsTableColumn} column
     * @returns {undefined}
     */
    toggleHidden (column) {
      if (get(column, 'mayBeHidden')) {
        column.toggleProperty('isHidden');
        this._sendColumnsVisibilityChangedAction();
      }
    },

    /**
     * Show all columns
     *
     * Set each column `isHidden` value to `false`. May trigger sending {{#crossLink 'Components.ModelsTable/columnsVisibilityChangedAction:property'}}columnsVisibilityChangedAction{{/crossLink}}
     *
     * @method actions.showAllColumns
     * @returns {undefined}
     */
    showAllColumns () {
      get(this, 'processedColumns').setEach('isHidden', false);
      this._sendColumnsVisibilityChangedAction();
    },

    /**
     * Hide all columns that may be hidden (see {{#crossLink 'Utils.ModelsTableColumn/mayBeHidden:property'}}mayBeHidden{{/crossLink}})
     *
     * May trigger sending {{#crossLink 'Components.ModelsTable/columnsVisibilityChangedAction:property'}}columnsVisibilityChangedAction{{/crossLink}}
     *
     * @method actions.hideAllColumns
     * @returns {undefined}
     */
    hideAllColumns () {
      A(get(this, 'processedColumns').filterBy('mayBeHidden')).setEach('isHidden', true);
      this._sendColumnsVisibilityChangedAction();
    },

    /**
     * Restore columns visibility values according to their default visibility settings (see {{#crossLink 'Utils.ModelsTableColumn/defaultVisible:property'}}defaultVisible{{/crossLink}})
     *
     * May trigger sending {{#crossLink 'Components.ModelsTable/columnsVisibilityChangedAction:property'}}columnsVisibilityChangedAction{{/crossLink}}
     *
     * @method actions.restoreDefaultVisibility
     * @returns {undefined}
     */
    restoreDefaultVisibility() {
      get(this, 'processedColumns').forEach(c => {
        set(c, 'isHidden', !get(c, 'defaultVisible'));
        this._sendColumnsVisibilityChangedAction();
      });
    },

    /**
     * Toggle visibility for every column in the selected columns set
     *
     * It ignore columns that can't be hidden (see {{#crossLink 'Utils.ModelsTableColumn/mayBeHidden:property'}}mayBeHidden{{/crossLink}}). May trigger sending {{#crossLink 'Components.ModelsTable/columnsVisibilityChangedAction:property'}}columnsVisibilityChangedAction{{/crossLink}}
     *
     * @method actions.toggleColumnSet
     * @returns {undefined}
     */
    toggleColumnSet({ showColumns = [], hideOtherColumns, toggleSet = false } = {}) {
      let columns = get(this, 'processedColumns');

      // If hideOtherColumns is not set, default to true if toggleSet=false, else to false
      hideOtherColumns = isNone(hideOtherColumns) ? !toggleSet : hideOtherColumns;

      // If showColumns is a function, call it
      if (typeOf(showColumns) === 'function') {
        return run(this, showColumns, columns);
      }

      let setColumns = A([]);
      let otherColumns = A([]);

      columns.forEach((column) => {
        let columnId = get(column, 'propertyName');

        if (!columnId || !get(column, 'mayBeHidden')) {
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
        let columnId = get(column, 'propertyName');
        if (showColumns.includes(columnId) && get(column, 'isVisible') !== targetVisibility) {
          this.send('toggleHidden', column);
        }
      });

      if (hideOtherColumns) {
        otherColumns.forEach((column) => {
          let columnId = get(column, 'propertyName');

          if (!showColumns.includes(columnId) && get(column, 'isVisible')) {
            this.send('toggleHidden', column);
          }
        });
      }
    },

    /**
     * Pagination click-handler
     *
     * It moves user to the selected page. Check [models-table/pagination-numeric](Components.ModelsTablePaginationNumeric.html) and [models-table/pagination-simple](Components.ModelsTablePaginationSimple.html) for usage examples. May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
     *
     * @param {number} pageNumber
     * @method actions.gotoCustomPage
     * @returns {undefined}
     */
    gotoCustomPage (pageNumber) {
      set(this, 'currentPageNumber', pageNumber);
      this.userInteractionObserver();
    },

    /**
     * Sort selected column by {{#crossLink 'Utils.ModelsTableColumn/sortedBy:property'}}sortedBy{{/crossLink}} or {{#crossLink 'Utils.ModelsTableColumn/propertyName:property'}}propertyName{{/crossLink}}
     *
     * It will drop sorting for other columns if {{#crossLink 'Components.ModelsTable/multipleColumnsSorting:property'}}multipleColumnsSorting{{/crossLink}} is set to `false`. It will add new sorting if {{#crossLink 'Components.ModelsTable/multipleColumnsSorting:property'}}multipleColumnsSorting{{/crossLink}} is set to `true`. May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}. Table will be dropped to the first page if sorting is done
     *
     * For multiColumns-sorting calling sort will change sort-order. E.g.:
     *
     * ```js
     * sortProperties = ['a:asc', 'b:asc', 'c:desc'];
     * sort({propertyName: 'b'}); // sortProperties now is ['a:asc', 'c:desc', 'b:desc']
     * ```
     *
     * @method actions.sort
     * @param {ModelsTableColumn} column
     * @returns {undefined}
     */
    sort (column) {
      const sortMap = get(this, 'sortMap');
      let sortedBy = get(column, 'sortedBy') || get(column, 'propertyName');
      if (!sortedBy) {
        return;
      }
      let currentSorting = get(column, 'sorting') || 'none';
      let newSorting = sortMap[currentSorting.toLowerCase()];
      if (sortedBy === get(this, 'currentGroupingPropertyName')) {
        const sortByGroupedFieldDirection = get(this, 'sortByGroupedFieldDirection');
        newSorting = sortByGroupedFieldDirection === 'asc' ? 'desc' : 'asc';
        set(this, 'sortByGroupedFieldDirection', newSorting);
        return;
      }
      let sortingArgs = [column, sortedBy, newSorting];
      if (get(this, 'multipleColumnsSorting')) {
        this._multiColumnsSorting(...sortingArgs);
      }
      else {
        this._singleColumnSorting(...sortingArgs);
      }
      set(this, 'currentPageNumber', 1);
      this.userInteractionObserver();
    },

    /**
     * Expand selected row
     *
     * It will cause expandedRowComponent to be used for it. It will collapse already expanded row if {{#crossLink 'Components.ModelsTable/multipleExpand:property'}}multipleExpand{{/crossLink}} is set to `false`. Expanding is assigned to the record itself and not their index. So, if page #1 has first row expanded and user is moved to any another page, first row on new page won't be expanded. But when user will be back to the first page, first row will be expanded. May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
     *
     * @param {number} index
     * @param {object} dataItem
     * @returns {undefined}
     * @method actions.expandRow
     */
    expandRow(index, dataItem) {
      assert('row index should be numeric', typeOf(index) === 'number');
      let multipleExpand = get(this, 'multipleExpand');
      let expandedItems = get(this, 'expandedItems');
      if (!multipleExpand && get(expandedItems, 'length') === 1) {
        expandedItems.clear();
      }
      expandedItems.pushObject(dataItem);
      this.userInteractionObserver();
    },

    /**
     * Collapse selected row
     *
     * May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
     *
     * @param {number} index
     * @param {object} dataItem
     * @returns {undefined}
     * @method actions.collapseRow
     */
    collapseRow(index, dataItem) {
      assert('row index should be numeric', typeOf(index) === 'number');
      get(this, 'expandedItems').removeObject(dataItem);
      this.userInteractionObserver();
    },

    /**
     * Expand all rows in the current page
     *
     * It works only if {{#crossLink 'Components.ModelsTable/multipleExpand:property'}}multipleExpand{{/crossLink}} is set to `true`. May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
     *
     * @method actions.expandAllRows
     * @returns {undefined}
     */
    expandAllRows() {
      let multipleExpand = get(this, 'multipleExpand');
      let visibleContent = get(this, 'visibleContent');
      if (multipleExpand) {
        if (get(this, 'useDataGrouping')) {
          get(this, 'expandedItems').pushObjects(A(objToArray(get(this, 'groupedVisibleContent'))));
        }
        else {
          get(this, 'expandedItems').pushObjects(A(visibleContent.slice()));
        }
        this.userInteractionObserver();
      }
    },

    /**
     * Collapse all rows in the current page
     *
     * May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
     *
     * @method actions.collapseAllRows
     * @returns {undefined}
     */
    collapseAllRows() {
      get(this, 'expandedItems').clear();
      this.userInteractionObserver();
    },

    /**
     * Handler for row-click
     *
     * Toggle <code>selected</code>-state for row. Select only one or multiple rows depends on {{#crossLink 'Components.ModelsTable/multipleSelect:property'}}multipleSelect{{/crossLink}} value. May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
     *
     * @param {number} index
     * @param {object} dataItem
     * @returns {undefined}
     * @method actions.clickOnRow
     */
    clickOnRow(index, dataItem) {
      assert('row index should be numeric', typeOf(index) === 'number');
      if (get(this, 'selectRowOnClick')) {
        let multipleSelect = get(this, 'multipleSelect');
        let selectedItems = get(this, 'selectedItems');
        if (selectedItems.includes(dataItem)) {
          selectedItems.removeObject(dataItem);
        }
        else {
          if (!multipleSelect && get(selectedItems, 'length') === 1) {
            get(this, 'selectedItems').clear();
          }
          get(this, 'selectedItems').pushObject(dataItem);
        }
      }
      this.userInteractionObserver();
    },

    /**
     * Handler for double-click on row
     *
     * May trigger sending {{#crossLink 'Components.ModelsTable/rowDoubleClickAction:property'}}rowDoubleClickAction{{/crossLink}}
     *
     * @param {number} index
     * @param {object} dataItem
     * @returns {undefined}
     * @method actions.doubleClickOnRow
     */
    doubleClickOnRow(index, dataItem) {
      assert('row index should be numeric', typeOf(index) === 'number');
      let action = get(this, 'rowDoubleClickAction');
      let actionIsFunction = typeof action === 'function';
      if (actionIsFunction) {
        action(index, dataItem);
      }
    },

    /**
     * Handler for row-hover
     *
     * May trigger sending {{#crossLink 'Components.ModelsTable/rowHoverAction:property'}}rowHoverAction{{/crossLink}}
     *
     * @param {number} index
     * @param {object} dataItem
     * @returns {undefined}
     * @method actions.hoverOnRow
     */
    hoverOnRow(index, dataItem) {
      assert('row index should be numeric', typeOf(index) === 'number');
      let action = get(this, 'rowHoverAction');
      let actionIsFunction = typeof action === 'function';
      if (actionIsFunction) {
        action(index, dataItem);
      }
    },

    /**
     * Handler for row-hover
     *
     * May trigger sending {{#crossLink 'Components.ModelsTable/rowHoverAction:property'}}rowOutAction{{/crossLink}}
     *
     * @param {number} index
     * @param {object} dataItem
     * @returns {undefined}
     * @method actions.outRow
     */
    outRow(index, dataItem) {
      assert('row index should be numeric', typeOf(index) === 'number');
      let action = get(this, 'rowOutAction');
      let actionIsFunction = typeof action === 'function';
      if (actionIsFunction) {
        action(index, dataItem);
      }
    },

    /**
     * Clear all column filters and global filter
     *
     * May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
     *
     * @returns {undefined}
     * @method actions.clearFilters
     */
    clearFilters() {
      this._clearFilters();
    },

    /**
     * Select/deselect all rows
     *
     * May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
     *
     * @method actions.toggleAllSelection
     * @returns {undefined}
     */
    toggleAllSelection() {
      let selectedItems = get(this, 'selectedItems');
      let data = get(this, 'data');
      const allSelectedBefore = get(selectedItems, 'length') === get(data, 'length');
      get(this, 'selectedItems').clear();
      if(!allSelectedBefore) {
        const toSelect = data.slice? data.slice() : data;
        get(this, 'selectedItems').pushObjects(toSelect);
      }
      this.userInteractionObserver();
    },

    /**
     * Expand or collapse all rows in the rows group
     *
     * **IMPORTANT** `multipleExpand` should be set to `true` otherwise this action won't do anything
     *
     * @method actions.toggleGroupedRowsExpands
     * @param {*} groupedValue
     * @returns {undefined}
     */
    toggleGroupedRowsExpands(groupedValue) {
      if (!get(this, 'multipleExpand')) {
        return;
      }
      let expandedItems = get(this, 'expandedItems');
      const currentGroupingPropertyName = get(this, 'currentGroupingPropertyName');
      const groupedItems = get(this, 'groupedArrangedContent').filterBy(currentGroupingPropertyName, groupedValue);
      const notExpandedGroupItems = groupedItems.filter(record => expandedItems.indexOf(record) === -1);
      if (get(notExpandedGroupItems, 'length')) {
        const toPush = notExpandedGroupItems.filter(record => expandedItems.indexOf(record) === -1);
        get(this, 'expandedItems').pushObjects(toPush);
      }
      else {
        groupedItems.forEach(record => expandedItems.removeObject(record));
      }
      this.userInteractionObserver();
    },

    /**
     * Select/deselect rows from the rows group
     *
     * **IMPORTANT** `multipleSelect` should be set to `true` otherwise this action won't do anything
     *
     * May trigger sending {{#crossLink 'Components.ModelsTable/displayDataChangedAction:property'}}displayDataChangedAction{{/crossLink}}
     *
     * @method actions.toggleGroupedRowsSelection
     * @param {*} groupedValue
     * @returns {undefined}
     */
    toggleGroupedRowsSelection(groupedValue) {
      if (!get(this, 'multipleSelect')) {
        return;
      }
      let selectedItems = get(this, 'selectedItems');
      const currentGroupingPropertyName = get(this, 'currentGroupingPropertyName');
      const groupedItems = get(this, 'groupedArrangedContent').filterBy(currentGroupingPropertyName, groupedValue);
      const notSelectedGroupItems = groupedItems.filter(record => selectedItems.indexOf(record) === -1);
      if (get(notSelectedGroupItems, 'length')) {
        const toPush = notSelectedGroupItems.filter(record => selectedItems.indexOf(record) === -1);
        get(this, 'selectedItems').pushObjects(toPush);
      }
      else {
        groupedItems.forEach(record => selectedItems.removeObject(record));
      }
      this.userInteractionObserver();
    },

    /**
     * Collapse or expand rows group
     *
     * @method actions.toggleGroupedRows
     * @param {*} groupedValue
     * @returns {undefined}
     */
    toggleGroupedRows(groupedValue) {
      let collapsedGroupValues = get(this, 'collapsedGroupValues');
      if (collapsedGroupValues.includes(groupedValue)) {
        collapsedGroupValues.removeObject(groupedValue);
      }
      else {
        get(this, 'collapsedGroupValues').pushObject(groupedValue);
      }
    }
  }

});
