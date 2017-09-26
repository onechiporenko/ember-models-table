import {assign} from '@ember/polyfills';
import {on} from '@ember/object/evented';
import {typeOf, compare, isBlank, isNone} from '@ember/utils';
import {run} from '@ember/runloop';
import Component from '@ember/component';
import {assert, warn} from '@ember/debug';
import O, {
  observer,
  computed,
  getProperties,
  setProperties,
  getWithDefault,
  set,
  get
} from '@ember/object';
import {capitalize, dasherize} from '@ember/string';
import jQ from 'jquery';
import {isArray, A} from '@ember/array';
import betterCompare from '../utils/better-compare';

import Bootstrap3Theme from '../themes/bootstrap3';

import layout from '../templates/components/models-table';
import ModelsTableColumn from '../utils/column';

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

const defaultMessages = {
  searchLabel: 'Search:',
  searchPlaceholder: '',
  'columns-title': 'Columns',
  'columns-showAll': 'Show All',
  'columns-hideAll': 'Hide All',
  'columns-restoreDefaults': 'Restore Defaults',
  tableSummary: 'Show %@ - %@ of %@',
  allColumnsAreHidden: 'All columns are hidden. Use <strong>columns</strong>-dropdown to show some of them',
  noDataToShow: 'No records to show'
};

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
 * Convert some string to the human readable one
 *
 * @param {string} name value to convert
 * @returns {string}
 * @ignore
 */
function propertyNameToTitle(name) {
  return capitalize(dasherize(name).replace(/-/g, ' '));
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
      return A(['', ...options]).uniq().map(optionStrToObj);
    }
    return [];
  });
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
   * @type number
   * @property currentPageNumber
   * @default 1
   */
  currentPageNumber: 1,

  /**
   * @type string[]
   * @property sortProperties
   * @default []
   * @private
   */
  sortProperties: computed(function() {
    return A([]);
  }),

  /**
   * Determines if multi-columns sorting should be used
   *
   * @type boolean
   * @property multipleColumnsSorting
   * @default false
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
   * Determines if "Global filter"-field should be shown
   *
   * @type boolean
   * @property showGlobalFilter
   * @default true
   */
  showGlobalFilter: true,

  /**
   * Determines if focus should be on the "Global filter"-field on component render
   *
   * @type boolean
   * @property focusGlobalFilter
   * @default false
   */
  focusGlobalFilter: false,

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
   * @type Themes.Default
   * @property themeInstance
   */
  themeInstance: computed(function() {
    return  Bootstrap3Theme.create();
  }),

  /**
   * All table records
   *
   * @type object[]
   * @property data
   * @default []
   */
  data: computed(function() {
    return A([]);
  }),

  /**
   * Table columns. Check [ModelsTableColumn](Utils.ModelsTableColumn.html) for available properties
   *
   * @type object[]
   * @property columns
   * @default []
   */
  columns: computed(function() {
    return A([]);
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
  columnSets: computed(function() {
    return A([]);
  }),

  /**
   * @type Object[]
   * @property processedColumns
   * @default []
   * @private
   */
  processedColumns: computed(function() {
    return A([]);
  }),

  /**
   * Overrides for messages used in the component.
   *
   * @type Object
   * @property messages
   * @default {
   *  searchLabel: 'Search:',
   *  searchPlaceholder: '',
   *  'columns-title': 'Columns',
   *  'columns-showAll': 'Show All',
   *  'columns-hideAll': 'Hide All',
   *  'columns-restoreDefaults': 'Restore Defaults',
   *  tableSummary: 'Show %@ - %@ of %@',
   *  allColumnsAreHidden: 'All columns are hidden. Use <strong>columns</strong>-dropdown to show some of them',
   *  noDataToShow: 'No records to show'
   * }
   */
  messages: computed(function() {
    return O.create({});
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
  groupedHeaders: computed(function() {
    return A([]);
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
   * Expanded row items
   * It's set to the initial value when current page or page size is changed
   *
   * @type object[]
   * @property _expandedItems
   * @private
   */
  _expandedItems: null,

  /**
   * true - allow to expand more than 1 row
   * false - only 1 row may be expanded in the same time
   *
   * @type boolean
   * @property multipleExpand
   * @default false
   */
  multipleExpand: false,

  /**
   * @type object[]
   * @property _selectedItems
   * @private
   */
  _selectedItems: null,

  /**
   * Allow or disallow to select rows on click
   * If `false` - no row can be selected
   *
   * @type boolean
   * @property selectRowOnClick
   * @default true
   */
  selectRowOnClick: true,

  /**
   * Allow or disallow to select multiple rows
   * If `false` - only one row may be selected in the same time
   *
   * @type boolean
   * @property multipleSelect
   * @default false
   */
  multipleSelect: false,

  /**
   * @type string
   * @property expandedRowComponent
   * @default ''
   */
  expandedRowComponent: '',

  /**
   * Action-name sent on user interaction
   *
   * @type string
   * @property displayDataChangedAction
   * @default 'displayDataChanged'
   */
  displayDataChangedAction: 'displayDataChanged',

  /**
   * Determines if action on user interaction should be sent
   *
   * @default false
   * @property sendDisplayDataChangedAction
   * @type boolean
   */
  sendDisplayDataChangedAction: false,

  /**
   * Action-name sent on change of visible columns
   *
   * The action will receive an array of objects as parameter, where every object looks like this: `{ propertyName: 'firstName', isHidden: true, mayBeHidden: false }`
   *
   * @type string
   * @property columnsVisibilityChangedAction
   * @default 'columnsVisibilityChanged'
   */
  columnsVisibilityChangedAction: 'columnsVisibilityChanged',

  /**
   * Determines if action on change of visible columns should be sent
   *
   * @default false
   * @property sendColumnsVisibilityChangedAction
   * @type boolean
   */
  sendColumnsVisibilityChangedAction: false,

  /**
   * Rows with this items should be preselected on component init
   * It's NOT a list of indexes!
   *
   * @default null
   * @property preselectedItems
   * @type object[]|null
   */
  preselectedItems: null,

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
    return processedColumns.length > 0 && processedColumns.isEvery('isHidden', true);
  }),

  /**
   * @type boolean
   * @property globalFilterUsed
   * @readonly
   * @private
   */
  globalFilterUsed: computed.notEmpty('filterString'),

  /**
   * Global filter or filter by any column is used
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
   * True if all processedColumns don't use filtering and sorting
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
    const pagesCount = get(this, 'arrangedContent.length') / parseInt(get(this, 'pageSize'), 10);
    return (0 === pagesCount % 1) ? pagesCount : (Math.floor(pagesCount) + 1);
  }),

  /**
   * @type Object[]
   * @property filteredContent
   * @readonly
   * @private
   */
  filteredContent: computed('filterString', 'data.[]', 'useFilteringByColumns', 'processedColumns.@each.filterString', function () {
    const {
      processedColumns,
      data,
      useFilteringByColumns,
      filteringIgnoreCase,
      doFilteringByHiddenColumns
    } = getProperties(this, 'processedColumns', 'data', 'useFilteringByColumns', 'filteringIgnoreCase', 'doFilteringByHiddenColumns');
    let filterString = get(this, 'filterString');

    if (!data) {
      return A([]);
    }

    let _processedColumns = processedColumns;
    if (!doFilteringByHiddenColumns) {
      _processedColumns = A(_processedColumns.filterBy('isHidden', false));
    }

    // global search
    let globalSearch = data.filter(function (row) {
      return _processedColumns.length ? _processedColumns.any(c => {
        const filterFor = get(c, 'filteredBy') || get(c, 'propertyName');
        if (filterFor) {
          let cellValue = '' + get(row, filterFor);
          if (filteringIgnoreCase) {
            cellValue = cellValue.toLowerCase();
            filterString = filterString.toLowerCase();
          }
          return -1 !== cellValue.indexOf(filterString);
        }
        return false;
      }) : true;
    });

    if (!useFilteringByColumns) {
      return A(globalSearch);
    }

    // search by each column
    return A(globalSearch.filter(row => {
      return _processedColumns.length ? _processedColumns.every(c => {
        const filterFor = get(c, 'filteredBy') || get(c, 'propertyName');
        if (filterFor) {
          let cellValue = '' + get(row, filterFor);
          if (get(c, 'useFilter')) {
            let filterString = get(c, 'filterString');
            if (get(c, 'filterWithSelect') && '' === filterString) {
              return true;
            }
            if (filteringIgnoreCase) {
              cellValue = typeOf(cellValue) === 'string' ? cellValue.toLowerCase() : cellValue;
              filterString = typeOf(filterString) === 'string' ? filterString.toLowerCase() : filterString;
            }
            return 'function' === typeOf(c.filterFunction) ? c.filterFunction(cellValue, filterString, row) : 0 === compare(cellValue, filterString);
          }
          return true;
        }
        return true;
      }) : true;
    }));
  }),

  /**
   * @type Object[]
   * @property arrangedContent
   * @readonly
   * @private
   */
  arrangedContent: computed('filteredContent.[]', 'sortProperties.[]', function () {
    const filteredContent = get(this, 'filteredContent');
    let sortProperties = get(this, 'sortProperties').map(p => {
      let [prop, direction] = p.split(':');
      direction = direction || 'asc';

      return [prop, direction];
    });

    let _filteredContent = filteredContent.slice();
    return sortProperties.length ? A(_filteredContent.sort((row1, row2) => {
      for (let i = 0; i < sortProperties.length; i++) {
        let [prop, direction] = sortProperties[i];
        let result = betterCompare(get(row1, prop), get(row2, prop));
        if (result !== 0) {
          return (direction === 'desc') ? (-1 * result) : result;
        }
      }

      return 0;
    })) : _filteredContent;
  }),

  /**
   * Content of the current table page
   *
   * @type Object[]
   * @property visibleContent
   * @readonly
   * @private
   */
  visibleContent: computed('arrangedContent.[]', 'pageSize', 'currentPageNumber', function () {
    let {
      arrangedContent,
      pageSize,
      currentPageNumber
    } = getProperties(this, 'arrangedContent', 'pageSize', 'currentPageNumber');
    pageSize = parseInt(pageSize, 10);
    const startIndex = pageSize * (currentPageNumber - 1);
    if (get(arrangedContent, 'length') < pageSize) {
      return arrangedContent;
    }
    return A(arrangedContent.slice(startIndex, startIndex + pageSize));
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
  arrangedContentLength: computed.alias('arrangedContent.length'),

  /**
   * Index of the first currently shown record
   *
   * @type number
   * @property firstIndex
   * @private
   */
  firstIndex: computed('arrangedContentLength' ,'pageSize', 'currentPageNumber', function () {
    const {
      currentPageNumber,
      pageSize,
      arrangedContentLength
      } = getProperties(this, 'currentPageNumber', 'pageSize', 'arrangedContentLength');
    return 0 === arrangedContentLength ? 0 : parseInt(pageSize, 10) * (currentPageNumber - 1) + 1;
  }),

  /**
   * Index of the last shown record
   *
   * @type number
   * @property lastIndex
   * @readonly
   * @private
   */
  lastIndex: computed('isLastPage', 'arrangedContentLength', 'currentPageNumber', 'pageSize', function () {
    const {
      currentPageNumber,
      pageSize,
      isLastPage,
      arrangedContentLength
      } = getProperties(this, 'currentPageNumber', 'pageSize', 'isLastPage', 'arrangedContentLength');
    return isLastPage ? arrangedContentLength : currentPageNumber * parseInt(pageSize, 10);
  }),

  /**
   * List of possible <code>pageSize</code> values
   * Used to change size of <code>visibleContent</code>
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
   * @type {value: string|number, label: string|number}
   * @property pageSizeOptions
   * @default []
   * @private
   */
  pageSizeOptions: computed(function() {
    return A([]);
  }),

  /**
   * These are options for the columns dropdown.
   * By default, the "Show All", 'Hide All" and "Restore Defaults" buttons are displayed.
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

  /**
   * @method contentChangedAfterPolling
   * @returns {undefined}
   * @private
   */
  contentChangedAfterPolling () {
    run.once(this, this.contentChangedAfterPollingOnce);
  },

  /**
   * @method contentChangedAfterPollingOnce
   * @returns {undefined}
   * @private
   */
  contentChangedAfterPollingOnce () {
    get(this, 'filteredContent');
    this.notifyPropertyChange('filteredContent');
  },

  /**
   * Component init
   *
   * Set visibility and filtering attributes for each column
   * Update messages used by table with user-provided messages (@see {@link messages})
   *
   * @method setup
   * @returns {undefined}
   */
  setup: on('init', function() {
    this._setupSelectedRows();
    this._setupExpandedRows();
    this._setupColumns();
    this._setupMessages();
    this._setupPageSizeOptions();

    if (get(this, 'columnsAreUpdateable')) {
      let columnFieldsToCheckUpdate = get(this, 'columnFieldsToCheckUpdate');
      assert('`columnFieldsToCheckUpdate` should be an array of strings', 'array' === typeOf(columnFieldsToCheckUpdate));
      columnFieldsToCheckUpdate.forEach(propertyName => this.addObserver(`columns.@each.${propertyName}`, this, this._setupColumnsOnce));
    }
    this.addObserver('processedColumns.@each.filterString', this, this.filteringApplied);
    this.addObserver('visibleContent.length', this, this.visibleContentObserver);
  }),

  /**
   * Recalculate processedColumns when the columns attr changes
   *
   * @method updateColumns
   */
  updateColumns: on('didReceiveAttrs', function() {
    if (get(this, 'columnsAreUpdateable')) {
      this._setupColumns();
    }
  }),

  /**
   * Focus on "Global filter" on component render
   *
   * @method focus
   */
  focus: on('didInsertElement', function () {
    if (get(this, 'showGlobalFilter') && get(this, 'focusGlobalFilter')) {
      jQ('.filterString').focus();
    }
  }),

  /**
   * Preselect table rows if `preselectedItems` is provided
   * `multipleSelected` may be set `true` if `preselectedItems` has more than 1 item
   *
   * @private _setupSelectedRows
   * @returns {undefined}
   * @method
   */
  _setupSelectedRows() {
    set(this, '_selectedItems', A([]));
    let preselectedItems = get(this, 'preselectedItems');
    if (isArray(preselectedItems)) {
      set(this, '_selectedItems', A(preselectedItems));
      if (preselectedItems.length > 1 && !get(this, 'multipleSelected')) {
        warn('`multipleSelected` is set `true`, because you have provided multiple `preselectedItems`.', false, {id: '#multipleSelected_autoset'});
        set(this, 'multipleSelected', true);
      }
    }
  },

  /**
   * @method _setupExpandedRows
   * @returns {undefined}
   * @private
   */
  _setupExpandedRows() {
    set(this, '_expandedItems', A([]));
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
   * Create a column.
   * This can be overwritten if you need to use your own column object.
   *
   * @method _createColumn
   * @param {object} options
   * @returns {Object}
   * @private
   */
  _createColumn(options) {
    return ModelsTableColumn.create(options);
  },

  /**
   * Create new properties for <code>columns</code> (filterString, useFilter, isVisible, defaultVisible)
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
      let propertyName = get(c, 'propertyName');
      setProperties(c, {
        data: get(this, 'data'),
        filterString: get(c, 'filterString') || '',
        originalDefinition: column
      });

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

      if (get(c, 'filterWithSelect') && get(c, 'useFilter')) {
        let predefinedFilterOptions = get(column, 'predefinedFilterOptions');
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
          set(c, 'filterOptions', usePredefinedFilterOptions ? predefinedFilterOptions : []);
        }
        else if (usePredefinedFilterOptions) {
          // Empty array as predefined filter
          set(c, 'useFilter', false);
        }
        else {
          if (propertyName) {
            set(c, 'filterOptions', getFilterOptionsCP(propertyName));
          }
        }
      }
      return c;
    }));
    nColumns.filterBy('propertyName').forEach(column => {
      let propertyName = get(column, 'propertyName');
      if (isNone(get(column, 'title'))) {
        set(column, 'title', propertyNameToTitle(propertyName));
      }
    });
    set(this, 'processedColumns', nColumns);

    // Apply initial sorting
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
  },

  /**
   * Update messages used by widget with custom values provided by user in the <code>customMessages</code>
   *
   * @method _setupMessages
   * @returns {undefined}
   * @private
   */
  _setupMessages: observer('customMessages', function () {
    const customIcons = getWithDefault(this, 'customMessages', {});
    let newMessages = {};
    assign(newMessages, defaultMessages, customIcons);
    set(this, 'messages', O.create(newMessages));
  }),

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
    keys(sortPropertiesMap).forEach(propertyName => {
      if (propertyName !== sortedBy) {
        newSortProperties.pushObject(`${propertyName}:${sortPropertiesMap[propertyName]}`);
      }
    });
    if ('none' !== newSorting) {
      newSortProperties.pushObject(`${sortedBy}:${newSorting}`);
    }
    set(this, 'sortProperties', newSortProperties);
  },

  /**
   * send <code>displayDataChangedAction</code>-action when user does sort of filter
   * action is sent only if <code>sendDisplayDataChangedAction</code> is true (default false)
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
    if (get(this, 'sendDisplayDataChangedAction')) {
      let columns = get(this, 'processedColumns');
      let settings = O.create({
        sort: get(this, 'sortProperties'),
        currentPageNumber: get(this, 'currentPageNumber'),
        pageSize: parseInt(get(this, 'pageSize'), 10),
        filterString: get(this, 'filterString'),
        filteredContent: get(this, 'filteredContent'),
        selectedItems: get(this, '_selectedItems'),
        expandedItems: get(this, '_expandedItems'),
        columnFilters: {}
      });
      columns.forEach(column => {
        if (!isBlank(get(column, 'filterString'))) {
          settings.columnFilters[get(column, 'propertyName')] = get(column, 'filterString');
        }
      });
      this.sendAction('displayDataChangedAction', settings);
    }
  },

  /**
   * send <code>columnsVisibilityChangedAction</code>-action when user changes which columns are visible
   * action is sent only if <code>sendColumnsVisibilityChangedAction</code> is true (default false)
   *
   * @returns {undefined}
   * @method _sendColumnsVisibilityChangedAction
   * @private
   */
  _sendColumnsVisibilityChangedAction() {
    if (get(this, 'sendColumnsVisibilityChangedAction')) {
      let columns = get(this, 'processedColumns');
      let columnsVisibility = columns.map(column => {
        let options = getProperties(column, 'isHidden', 'mayBeHidden', 'propertyName');
        options.isHidden = !!options.isHidden;
        return options;
      });
      this.sendAction('columnsVisibilityChangedAction', columnsVisibility);
    }
  },

  /**
   * Force <code>arrangedContent</code> to be updated when <code>sortProperties</code> is changed
   * Currently "normal" <code>Em.computed.sort</code> has issue when sort properties is empty
   *
   * @method forceUpdateArrangedContent
   * @returns {undefined}
   * @private
   */
  forceUpdateArrangedContent: observer('filteredContent.[]', 'sortProperties.[]', function () {
    this.notifyPropertyChange('arrangedContent');
  }),

  /**
   * Handler for global filter and filter by each column
   *
   * @method filteringApplied
   * @returns {undefined}
   * @private
   */
  filteringApplied: observer('filterString', function () {
    set(this, 'currentPageNumber', 1);
    this.userInteractionObserver();
  }),

  /**
   * Handler for <code>pageSize</code> changing
   *
   * @method paginationApplied
   * @returns {undefined}
   * @private
   */
  paginationApplied: observer('pageSize', function () {
    set(this, 'currentPageNumber', 1);
    this.userInteractionObserver();
  }),

  /**
   * Collapse open rows when user change page size or moved to the another page
   *
   * @method collapseRowOnNavigate
   * @returns {undefined}
   * @private
   */
  collapseRowOnNavigate: observer('currentPageNumber', 'pageSize', function () {
    set(this, '_expandedItems', A([]));
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

  /**
   * @type Object
   */
  actions: {

    /**
     * @method actions.sendAction
     * @returns {undefined}
     */
    sendAction () {
      this.sendAction(...arguments);
    },

    /**
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
     * @method actions.showAllColumns
     * @returns {undefined}
     */
    showAllColumns () {
      get(this, 'processedColumns').setEach('isHidden', false);
      this._sendColumnsVisibilityChangedAction();
    },

    /**
     * @method actions.hideAllColumns
     * @returns {undefined}
     */
    hideAllColumns () {
      A(get(this, 'processedColumns').filterBy('mayBeHidden')).setEach('isHidden', true);
      this._sendColumnsVisibilityChangedAction();
    },

    /**
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
     * @param {number} pageNumber
     * @method actions.gotoCustomPage
     * @returns {undefined}
     */
    gotoCustomPage (pageNumber) {
      set(this, 'currentPageNumber', pageNumber);
      this.userInteractionObserver();
    },

    /**
     * @method actions.sort
     * @param {ModelsTableColumn} column
     * @returns {undefined}
     */
    sort (column) {
      const sortMap = {
        none: 'asc',
        asc: 'desc',
        desc: 'none'
      };
      let sortedBy = get(column, 'sortedBy') || get(column, 'propertyName');
      if (!sortedBy) {
        return;
      }
      let currentSorting = get(column, 'sorting');
      let newSorting = sortMap[currentSorting.toLowerCase()];
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
     * @param {number} index
     * @param {object} dataItem
     * @returns {undefined}
     * @method actions.expandRow
     */
    expandRow(index, dataItem) {
      assert(`row index should be numeric`, typeOf(index) === 'number');
      let multipleExpand = get(this, 'multipleExpand');
      let expandedItems = get(this, '_expandedItems');
      if (multipleExpand) {
        expandedItems.pushObject(dataItem);
      }
      else {
        if (expandedItems.length === 1) {
          expandedItems.clear();
        }
        expandedItems.pushObject(dataItem);
      }
      set(this, '_expandedItems', expandedItems);
      this.userInteractionObserver();
    },

    /**
     * @param {number} index
     * @param {object} dataItem
     * @returns {undefined}
     * @method actions.collapseRow
     */
    collapseRow(index, dataItem) {
      assert(`row index should be numeric`, typeOf(index) === 'number');
      let expandedItems = get(this, '_expandedItems').without(dataItem);
      set(this, '_expandedItems', expandedItems);
      this.userInteractionObserver();
    },

    /**
     * @method actions.expandAllRows
     * @returns {undefined}
     */
    expandAllRows() {
      let multipleExpand = get(this, 'multipleExpand');
      let visibleContent = get(this, 'visibleContent');
      if (multipleExpand) {
        set(this, '_expandedItems', A(visibleContent.slice()));
        this.userInteractionObserver();
      }
    },

    /**
     * @method actions.collapseAllRows
     * @returns {undefined}
     */
    collapseAllRows() {
      set(this, '_expandedItems', A());
      this.userInteractionObserver();
    },

    /**
     * Handler for row-click
     * Toggle <code>selected</code>-state for row
     * Select only one or multiple rows depends on <code>multipleSelect</code>-value
     *
     * @param {number} index
     * @param {object} dataItem
     * @returns {undefined}
     * @method actions.clickOnRow
     */
    clickOnRow(index, dataItem) {
      assert(`row index should be numeric`, typeOf(index) === 'number');
      if (get(this, 'selectRowOnClick')) {
        let multipleSelect = get(this, 'multipleSelect');
        let selectedItems = get(this, '_selectedItems');
        if (selectedItems.includes(dataItem)) {
          selectedItems = selectedItems.without(dataItem);
          set(this, '_selectedItems', selectedItems);
        }
        else {
          if (multipleSelect) {
            get(this, '_selectedItems').pushObject(dataItem);
          }
          else {
            if(selectedItems.length === 1) {
              get(this, '_selectedItems').clear();
            }
            get(this, '_selectedItems').pushObject(dataItem);
          }
        }
      }
      this.userInteractionObserver();
    },

    /**
     * Clear all column filters and global filter
     * @returns {undefined}
     * @method actions.clearFilters
     */
    clearFilters() {
      this._clearFilters();
    },

    /**
     * Dummy action for internal use
     * @method actions.emptyAction
     * @returns {undefined}
     */
    emptyAction() {
      return true;
    },

    /**
     * Select/deselect all rows
     * @method actions.toggleAllSelection
     * @returns {undefined}
     */
    toggleAllSelection() {
      let selectedItems = get(this, '_selectedItems');
      let data = get(this, 'data');
      if(selectedItems.length === data.get('length')) {
        get(this, '_selectedItems').clear();
      }
      else {
        set(this, '_selectedItems', A(data.slice()));
      }
      this.userInteractionObserver();
    }
  }

});
