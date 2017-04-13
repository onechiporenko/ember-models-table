import Ember from 'ember';
import fmt from '../utils/fmt';
import assignPoly from '../utils/assign-poly';

import layout from '../templates/components/models-table';
import ModelsTableColumn from '../-private/column';

/**
 * @typedef {object} groupedHeader
 * @property {string} title header for grouped columns
 * @property {number} colspan HTML colspan attr
 * @property {number} rowspan HTML rowspan attr
 */

const {
  keys
} = Object;

const {
  get,
  set,
  getWithDefault,
  setProperties,
  getProperties,
  computed,
  observer,
  isNone,
  A,
  on,
  compare,
  typeOf,
  run,
  Component,
  assert,
  String: S,
  Object: O,
  $: jQ,
  isArray,
  Logger: {warn}
} = Ember;

const assign = Object.assign || Ember.assign || assignPoly; // for Ember 2.4

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

const defaultIcons = {
  'sort-asc': 'glyphicon glyphicon-triangle-bottom',
  'sort-desc': 'glyphicon glyphicon-triangle-top',
  'column-visible': 'glyphicon glyphicon-check',
  'column-hidden': 'glyphicon glyphicon-unchecked',
  'nav-first': 'glyphicon glyphicon-chevron-left',
  'nav-prev': 'glyphicon glyphicon-menu-left',
  'nav-next': 'glyphicon glyphicon-menu-right',
  'nav-last': 'glyphicon glyphicon-chevron-right',
  'caret': 'caret',
  'expand-row': 'glyphicon glyphicon-plus',
  'expand-all-rows': 'glyphicon glyphicon-plus',
  'collapse-row': 'glyphicon glyphicon-minus',
  'collapse-all-rows': 'glyphicon glyphicon-minus',
  'select-all-rows': 'glyphicon glyphicon-check',
  'deselect-all-rows': 'glyphicon glyphicon-unchecked',
  'select-row': 'glyphicon glyphicon-check',
  'deselect-row': 'glyphicon glyphicon-unchecked'
};

const defaultCssClasses = {
  outerTableWrapper: '',
  innerTableWrapper: 'inner-table-wrapper',
  table: 'table table-striped table-bordered table-condensed',
  globalFilterWrapper: 'pull-left',
  columnsDropdownWrapper: 'pull-right columns-dropdown',
  columnsDropdownButtonWrapper: 'btn-group',
  columnsDropdown: 'dropdown-menu pull-right',
  theadCell: 'table-header',
  theadCellNoSorting: 'table-header-no-sorting',
  theadCellNoFiltering: 'table-header-no-filtering',
  tfooterWrapper: 'table-footer clearfix',
  footerSummary: 'table-summary',
  footerSummaryNumericPagination: 'col-md-4 col-sm-4 col-xs-4',
  footerSummaryDefaultPagination: 'col-md-5 col-sm-5 col-xs-5',
  pageSizeWrapper: 'col-md-2 col-sm-2 col-xs-2',
  pageSizeSelectWrapper: 'pull-right',
  paginationWrapper: 'table-nav',
  paginationWrapperNumeric: 'col-md-6 col-sm-6 col-xs-6',
  paginationWrapperDefault: 'col-md-5 col-sm-5 col-xs-5',
  buttonDefault: 'btn btn-default',
  noDataCell: '',
  collapseRow: 'collapse-row',
  collapseAllRows: 'collapse-all-rows',
  expandRow: 'expand-row',
  expandAllRows: 'expand-all-rows',
  thead: '',
  input: 'form-control',
  clearFilterIcon: 'glyphicon glyphicon-remove-sign form-control-feedback',
  clearAllFiltersIcon: 'glyphicon glyphicon-remove-circle',
  globalFilterDropdownWrapper: ''
};

function isSortedByDefault(column) {
  return column.sortPrecedence > NOT_SORTED;
}

/**
 * Default filter-function used in the filter by columns
 *
 * @param {string} cellValue value in the table cell
 * @param {string} filterString needed substring
 * @returns {boolean}
 */
function defaultFilter(cellValue, filterString) {
  return -1 !== cellValue.indexOf(filterString);
}

/**
 * Convert some string to the human readable one
 *
 * @param {string} name value to convert
 * @return {string}
 */
function propertyNameToTitle(name) {
  return S.capitalize(S.dasherize(name).replace(/\-/g, ' '));
}

function optionStrToObj(option) {
  return {value: option, label: option};
}

/**
 * Updates <code>filterOptions</code> for column which use <code>filterWithSelect</code>
 * and don't have <code>predefinedFilterOptions</code>
 * <code>filterOptions</code> are calculated like <code>data.mapBy(column.propertyName).uniq()</code>,
 * where data is component's <code>data</code>
 */
function getFilterOptionsCP(propertyName) {
  return computed(`data.@each.${propertyName}`, function () {
    let data = get(this, 'data');
    let predefinedFilterOptions = get(this, 'predefinedFilterOptions');
    let filterWithSelect = get(this, 'filterWithSelect');
    if (filterWithSelect && 'array' !== typeOf(predefinedFilterOptions)) {
      let options = A(data.mapBy(propertyName)).compact();
      if (get(this, 'sortFilterOptions')) {
        options = options.sort();
      }
      return A([''].concat(options)).uniq().map(optionStrToObj);
    }
    return [];
  });
}

function generateIndexes(count) {
  let ret = new Array(count);
  for (let i = 0; i < count; i++) {
    ret.push(i);
  }
  return ret;
}

/**
 * data -> filteredContent -> arrangedContent -> visibleContent
 *
 * @class ModelsTable
 * @extends Ember.Component
 */
export default Component.extend({

  layout,

  /**
   * Number of records shown on one table-page (size of the <code>visibleContent</code>)
   *
   * @type number
   * @name ModelsTable#pageSize
   * @default 10
   */
  pageSize: 10,

  /**
   * @type {number}
   * @name ModelsTable#currentPageNumber
   * @default 1
   */
  currentPageNumber: 1,

  /**
   * @type {string[]}
   * @name ModelsTable#sortProperties
   * @default []
   */
  sortProperties: A([]),

  /**
   * Determines if multi-columns sorting should be used
   *
   * @type {boolean}
   * @name ModelsTable#multipleColumnsSorting
   * @default false
   */
  multipleColumnsSorting: true,

  /**
   * Determines if component footer should be shown on the page
   *
   * @type {boolean}
   * @name ModelsTable#showComponentFooter
   * @default true
   */
  showComponentFooter: true,

  /**
   * Determines if numeric pagination should be used
   *
   * @type {boolean}
   * @name ModelsTable#useNumericPagination
   * @default false
   */
  useNumericPagination: false,

  /**
   * Determines if columns-dropdown should be shown
   *
   * @type {boolean}
   * @name ModelsTable#showColumnsDropdown
   * @default true
   */
  showColumnsDropdown: true,

  /**
   * Determines if filtering by columns should be available to the user
   *
   * @type {boolean}
   * @name ModelsTable#useFilteringByColumns
   * @default true
   */
  useFilteringByColumns: true,

  /**
   * @type {string}
   * @name ModelsTable#filterString
   * @default ''
   */
  filterString: '',

  /**
   * Determines if filtering (global and by column) should ignore case
   *
   * @type {boolean}
   * @name ModelsTable#filteringIgnoreCase
   * @default false
   */
  filteringIgnoreCase: false,

  /**
   * Determines if filtering should be done by hidden columns
   * Notice: after changing this value filtering results will be updated only after filter options are changed
   *
   * @type {boolean}
   * @name ModelsTable#doFilteringByHiddenColumns
   * @default true
   */
  doFilteringByHiddenColumns: true,

  /**
   * Determines if "Global filter"-field should be shown
   *
   * @type {boolean}
   * @name ModelsTable#showGlobalFilter
   * @default true
   */
  showGlobalFilter: true,

  /**
   * Determines if focus should be on the "Global filter"-field on component render
   *
   * @type {boolean}
   * @name ModelsTable#focusGlobalFilter
   * @default false
   */
  focusGlobalFilter: false,

  /**
   * Determines if <code>processedColumns</code> will be updated if <code>columns</code> are changed (<code>propertyName</code> and
   * <code>template</code> are observed)
   * <b>IMPORTANT</b> All filter, sort and visibility options will be dropped to the default values while updating
   *
   * @type {boolean}
   * @name ModelsTable#columnsAreUpdateable
   * @default false
   */
  columnsAreUpdateable: false,

  /**
   * <code>columns</code> fields which are observed to update shown table-columns
   * It is used only if <code>columnsAreUpdateable</code> is <code>true</code>
   *
   * @type {string[]}
   * @name ModelsTable#columnFieldsToCheckUpdate
   * @default ['propertyName', 'template']
   */
  columnFieldsToCheckUpdate: A(['propertyName', 'template']),

  /**
   * All table records
   *
   * @type {Ember.Object[]}
   * @name ModelsTable#data
   * @default []
   */
  data: A([]),

  /**
   * Table columns
   *
   * @type {ModelsTable~ModelsTableColumn[]}
   * @name ModelsTable#columns
   * @default []
   */
  columns: A([]),

  /**
   * @type {Ember.Object[]}
   * @name ModelsTable#processedColumns
   * @default []
   */
  processedColumns: A([]),

  /**
   * @type {Object}
   * @name ModelsTable#messages
   */
  messages: O.create({}),

  /**
   * @type {Object}
   * @name ModelsTable#classes
   */
  classes: O.create({}),

  /**
   * @type {Object}
   * @name ModelsTable#icons
   */
  icons: O.create({}),

  /**
   * List of the additional headers
   * Used to group columns
   *
   * @type {groupedHeader[][]}
   * @name ModelsTable#groupedHeaders
   */
  groupedHeaders: A([]),

  /**
   * Template with First|Prev|Next|Last buttons
   *
   * @type {string}
   * @name ModelsTable#simplePaginationTemplate
   * @default 'components/models-table/simple-pagination'
   */
  simplePaginationTemplate: 'components/models-table/simple-pagination',

  /**
   * Template with nav buttons
   *
   * @type {string}
   * @name ModelsTable#numericPaginationTemplate
   * @default 'components/models-table/numeric-pagination'
   */
  numericPaginationTemplate: 'components/models-table/numeric-pagination',

  /**
   * Template with table footer
   *
   * @type {string}
   * @name ModelsTable#tableFooterTemplate
   * @default 'components/models-table/table-footer'
   */
  tableFooterTemplate: 'components/models-table/table-footer',

  /**
   * Template for component footer
   *
   * @type {string}
   * @name ModelsTable#tfooterTemplate
   * @default
   */
  componentFooterTemplate: 'components/models-table/component-footer',

  /**
   * Template for page size
   *
   * @type {string}
   * @name ModelsTable#pageSizeTemplate
   * @default 'components/models-table/table-footer'
   */
  pageSizeTemplate: 'components/models-table/page-size',

  /**
   * Determines if page size should be shown
   *
   * @type {boolean}
   * @name ModelsTable#showPageSize
   * @default true
   */
  showPageSize: true,

  /**
   * Template with global filter
   *
   * @type {string}
   * @name ModelsTable#globalFilterTemplate
   * @default 'components/models-table/global-filter'
   */
  globalFilterTemplate: 'components/models-table/global-filter',

  /**
   * Template with columns dropdown
   *
   * @type {string}
   * @name ModelsTable#columnsDropdownTemplate
   * @default 'components/models-table/columns-dropdown'
   */
  columnsDropdownTemplate: 'components/models-table/columns-dropdown',

  /**
   * Template with header row for column names
   *
   * @type {string}
   * @name ModelsTable#headerRowSortingTemplate
   * @default 'components/models-table/header-row-sorting'
   */
  headerSortingRowTemplate: 'components/models-table/header-row-sorting',

  /**
   * Template for sorting icons
   *
   * @type {string}
   * @name ModelsTable#headerSortingIconsTemplate
   * @default 'components/models-table/header-sorting-icons'
   */
  headerSortingIconsTemplate: 'components/models-table/header-sorting-icons',

  /**
   * Template with header row for column filters
   *
   * @type {string}
   * @name ModelsTable#headerFilteringRowTemplate
   * @default 'components/models-table/header-row-filtering'
   */
  headerFilteringRowTemplate: 'components/models-table/header-row-filtering',

  /**
   * Template with header rows for columns grouping
   *
   * @type {string}
   * @name ModelsTable#headerFilteringRowTemplate
   * @default 'components/models-table/header-rows-grouped'
   */
  headerGroupedRowsTemplate: 'components/models-table/header-rows-grouped',

  /**
   * Template for table's row
   *
   * @type {string}
   * @default 'components/models-table/row'
   * @name ModelsTable#rowTemplate
   */
  rowTemplate: 'components/models-table/row',

  /**
   * Template for expanded row
   *
   * @type {string}
   * @default 'components/models-table/expanded-row'
   * @name ModelsTable#expandedRowTemplate
   */
  expandedRowTemplate: 'components/models-table/expanded-row',

  /**
   * Template for row with message about no available data
   *
   * @type {string}
   * @default 'components/models-table/no-data'
   * @name ModelsTable#noDataShowTemplate
   */
  noDataShowTemplate: 'components/models-table/no-data',

  /**
   * Template for row with message about all columns are hidden
   *
   * @type {string}
   * @default 'components/models-table/all-columns-hidden'
   * @name ModelsTable#allColumnsHiddenTemplate
   */
  allColumnsHiddenTemplate: 'components/models-table/all-columns-hidden',

  /**
   * Indexes of the expanded rows
   * It's set to the initial value when current page or page size is changed
   *
   * @type {number[]}
   * @private
   * @name ModelsTable#_expandedRowIndexes
   */
  _expandedRowIndexes: null,

  /**
   * true - allow to expand more than 1 row
   * false - only 1 row may be expanded in the same time
   *
   * @type {boolean}
   * @default false
   * @name ModelsTable#multipleExpand
   */
  multipleExpand: false,

  /**
   * @type {object[]}
   * @private
   * @name ModelsTable#_selectedItems
   */
  _selectedItems: null,
  
  /**
   * Allow or disallow to select rows on click
   * If `false` - no row can be selected
   *
   * @type {boolean}
   * @default true
   * @name ModelsTable#selectRowOnClick
   */
  selectRowOnClick: true,

  /**
   * Allow or disallow to select multiple rows
   * If `false` - only one row may be selected in the same time
   *
   * @type {boolean}
   * @default false
   * @name ModelsTable#multipleSelect
   */
  multipleSelect: false,

  /**
   * Action-name sent on user interaction
   *
   * @type {string}
   * @default 'displayDataChanged'
   * @name ModelsTable#displayDataChangedAction
   */
  displayDataChangedAction: 'displayDataChanged',

  /**
   * Determines if action on user interaction should be sent
   *
   * @default false
   * @type {boolean}
   * @name ModelsTable#sendDisplayDataChangedAction
   */
  sendDisplayDataChangedAction: false,

  /**
   * Action-name sent on change of visible columns
   *
   * @type {string}
   * @default 'columnsVisibilityChanged'
   * @name ModelsTable#columnsVisibilityChangedAction
   */
  columnsVisibilityChangedAction: 'columnsVisibilityChanged',

  /**
   * Determines if action on change of visible columns should be sent
   *
   * @default false
   * @type {boolean}
   * @name ModelsTable#sendColumnsVisibilityChangedAction
   */
  sendColumnsVisibilityChangedAction: false,

  /**
   * Rows with this items should be preselected on component init
   * It's NOT a list of indexes!
   *
   * @default null
   * @type {object[]|null}
   * @name ModelsTable#preselectedItems
   */
  preselectedItems: null,

  /**
   * List of the currently visible columns
   *
   * @type {Ember.Object[]}
   * @default []
   * @name ModelsTable#visibleProcessedColumns
   */
  visibleProcessedColumns: computed.filterBy('processedColumns', 'isVisible', true),

  /**
   * True if all processedColumns are hidden by <code>isHidden</code>
   *
   * @type {boolean}
   * @name ModelsTable#allColumnsAreHidden
   */
  allColumnsAreHidden: computed('processedColumns.@each.isHidden', function () {
    const processedColumns = get(this, 'processedColumns');
    return processedColumns.length > 0 && processedColumns.isEvery('isHidden', true);
  }),

  /**
   * @type {boolean}
   */
  globalFilterUsed: computed.notEmpty('filterString'),

  /**
   * Global filter or filter by any column is used
   *
   * @type {boolean}
   */
  anyFilterUsed: computed('globalFilterUsed', 'processedColumns.@each.filterUsed', function () {
    return get(this, 'globalFilterUsed') || get(this, 'processedColumns').isAny('filterUsed');
  }),
  
  /**
   * True if all processedColumns dosn't use filtering and sorting
   *
   * @type {boolean}
   * @name ModelsTable#noHeaderFilteringAndSorting
   */
  noHeaderFilteringAndSorting: computed('processedColumns.@each.useFilter', 'processedColumns.@each.useSorting', function () {
    const processedColumns = get(this, 'processedColumns');
    return processedColumns.isEvery('useFilter', false) && processedColumns.isEvery('useSorting', false);
  }),

  /**
   * Number of pages
   *
   * @type {number}
   * @name ModelsTable#pagesCount
   */
  pagesCount: computed('arrangedContent.[]', 'pageSize', function () {
    const pagesCount = get(this, 'arrangedContent.length') / parseInt(get(this, 'pageSize'), 10);
    return (0 === pagesCount % 1) ? pagesCount : (Math.floor(pagesCount) + 1);
  }),

  /**
   * List of links to the page
   * Used if <code>useNumericPagination</code> is true
   * @typedef {object} visiblePageNumber
   * @property {boolean} isLink
   * @property {boolean} isActive
   * @property {string} label
   *
   * @type {visiblePageNumber[]}
   * @name ModelsTable#visiblePageNumbers
   */
  visiblePageNumbers: computed('arrangedContentLength', 'pagesCount', 'currentPageNumber', function () {
    const {
      pagesCount,
      currentPageNumber
    } = getProperties(this, 'pagesCount', 'currentPageNumber');
    const notLinkLabel = '...';
    let groups = []; // array of 8 numbers
    let labels = A([]);
    groups[0] = 1;
    groups[1] = Math.min(1, pagesCount);
    groups[6] = Math.max(1, pagesCount);
    groups[7] = pagesCount;
    groups[3] = Math.max(groups[1] + 1, currentPageNumber - 1);
    groups[4] = Math.min(groups[6] - 1, currentPageNumber + 1);
    groups[2] = Math.floor((groups[1] + groups[3]) / 2);
    groups[5] = Math.floor((groups[4] + groups[6]) / 2);

    for (let n = groups[0]; n <= groups[1]; n++) {
      labels[n] = n;
    }
    const userGroup2 = groups[4] >= groups[3] && ((groups[3] - groups[1]) > 1);
    if (userGroup2) {
      labels[groups[2]] = notLinkLabel;
    }
    for (let i = groups[3]; i <= groups[4]; i++) {
      labels[i] = i;
    }
    const userGroup5 = groups[4] >= groups[3] && ((groups[6] - groups[4]) > 1);
    if (userGroup5) {
      labels[groups[5]] = notLinkLabel;
    }
    for (let i = groups[6]; i <= groups[7]; i++) {
      labels[i] = i;
    }
    return A(labels.compact().map(label => ({
      label: label,
      isLink: label !== notLinkLabel,
      isActive: label === currentPageNumber})
    ));
  }),

  /**
   * Are buttons "Back" and "First" enabled
   *
   * @type {boolean}
   * @name ModelsTable#gotoBackEnabled
   */
  gotoBackEnabled: computed.gt('currentPageNumber', 1),

  /**
   * Are buttons "Next" and "Last" enabled
   *
   * @type {boolean}
   * @name ModelsTable#gotoForwardEnabled
   */
  gotoForwardEnabled: computed('currentPageNumber', 'pagesCount', function () {
    return get(this, 'currentPageNumber') < get(this, 'pagesCount');
  }),

  /**
   * @type {Ember.Object[]}
   * @name ModelsTable#filteredContent
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
      _processedColumns = _processedColumns.filterBy('isHidden', false);
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
              cellValue = cellValue.toLowerCase();
              filterString = filterString.toLowerCase();
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
   * @type {Ember.Object[]}
   * @name ModelsTable#arrangedContent
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
        let result = compare(get(row1, prop), get(row2, prop));
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
   * @type {Ember.Object[]}
   * @name ModelsTable#visibleContent
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
   * Real table summary
   *
   * @type {string}
   * @name ModelsTable#summary
   */
  summary: computed('firstIndex', 'lastIndex', 'arrangedContentLength', 'messages.tableSummary', function () {
    const {
      arrangedContentLength,
      firstIndex,
      lastIndex
    } = getProperties(this, 'arrangedContentLength', 'firstIndex', 'lastIndex');
    return fmt(get(this, 'messages.tableSummary'), firstIndex, lastIndex, arrangedContentLength);
  }),

  /**
   * Is user on the last page
   *
   * @type {boolean}
   * @name ModelsTable#isLastPage
   */
  isLastPage: computed.not('gotoForwardEnabled'),

  /**
   * Alias to <code>arrangedContent.length</code>
   *
   * @type {number}
   * @name ModelsTable#arrangedContentLength
   */
  arrangedContentLength: computed.alias('arrangedContent.length'),

  /**
   * Index of the first currently shown record
   *
   * @type {number}
   * @name ModelsTable#firstIndex
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
   * @type {number}
   * @name ModelsTable#lastIndex
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
   * @type {number[]}
   * @default [10, 25, 50]
   * @name ModelsTable#pageSizeValues
   */
  pageSizeValues: A([10, 25, 50]),

  /**
   * List of options for pageSize-selectBox
   * It's mapped from <code>pageSizeValues</code>
   * This value should not be set manually!
   *
   * @type {{value: string|number, label: string|number}}
   * @default []
   * @private
   */
  pageSizeOptions: A([]),

  /**
   * Show first page if for some reasons there is no content for current page, but table data exists
   *
   * @method visibleContentObserver
   * @name ModelsTable#visibleContentObserver
   * @private
   */
  visibleContentObserver() {
    run.once(this, this.visibleContentObserverOnce);
  },

  /**
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
   * @name ModelsTable#contentChangedAfterPolling
   * @private
   */
  contentChangedAfterPolling () {
    run.once(this, this.contentChangedAfterPollingOnce);
  },

  /**
   * @private
   */
  contentChangedAfterPollingOnce () {
    get(this, 'filteredContent');
    this.notifyPropertyChange('filteredContent');
  },

  /**
   * Component init
   * Set visibility and filtering attributes for each column
   * Update messages used by table with user-provided messages (@see messages)
   * Update icons used by table with user-provided icons (@see icons)
   * Update classes used by table with user-provided css-classes (@see classes)
   *
   * @method setup
   * @name ModelsTable#setup
   */
  setup: on('init', function() {
    this._setupSelectedRows();
    this._setupExpandedRows();
    this._setupColumns();
    this._setupMessages();
    this._setupIcons();
    this._setupClasses();
    this._setupPageSizeOptions();

    if (get(this, 'columnsAreUpdateable')) {
      let columnFieldsToCheckUpdate = get(this, 'columnFieldsToCheckUpdate');
      assert('`columnFieldsToCheckUpdate` should be an array of strings', 'array' === typeOf(columnFieldsToCheckUpdate));
      columnFieldsToCheckUpdate.forEach(propertyName => this.addObserver(`columns.@each.${propertyName}`, this, this._setupColumnsOnce));
    }
    this.addObserver('visibleContent.length', this, this.visibleContentObserver);
  }),

  /**
   * Recalculate processedColumns when the columns attr changes
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
   * @name ModelsTable#focus
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
   * @private
   */
  _setupSelectedRows() {
    set(this, '_selectedItems', A([]));
    let preselectedItems = get(this, 'preselectedItems');
    if (isArray(preselectedItems)) {
      set(this, '_selectedItems', A(preselectedItems));
      if (preselectedItems.length > 1 && !get(this, 'multipleSelected')) {
        warn('`multipleSelected` is set `true`, because you have provided multiple `preselectedItems`.');
        set(this, 'multipleSelected', true);
      }
    }
  },

  _setupExpandedRows() {
    set(this, '_expandedRowIndexes', A([]));
  },

  /**
   * Wrapper for <code>_setupColumns</code> to call it only once when observer is fired
   *
   * @method _setupColumnsOnce
   * @name ModelsTable#_setupColumnsOnce
   * @private
   */
  _setupColumnsOnce() {
    run.once(this, this._setupColumns);
  },

  /**
   * Create new properties for <code>columns</code> (filterString, useFilter, isVisible, defaultVisible)
   *
   * @method _setupColumns
   * @private
   * @name ModelsTable#_setupColumns
   */
  _setupColumns () {
    let self = this;

    let nColumns = A(get(this, 'columns').map(column => {
      let filterFunction = get(column, 'filterFunction');
      filterFunction = 'function' === typeOf(filterFunction) ? filterFunction : defaultFilter;

      let c = ModelsTableColumn.create(column);
      let propertyName = get(c, 'propertyName');
      let sortedBy = get(c, 'sortedBy');
      let filteredBy = get(c, 'filteredBy');
      setProperties(c, {
        data: get(this, 'data'),
        filterString: get(c, 'filterString') || '',
        useFilter: !isNone(filteredBy || propertyName) && !get(c, 'disableFiltering'),
        useSorting: !isNone(sortedBy || propertyName) && !get(c, 'disableSorting'),
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
        if (usePredefinedFilterOptions) {
          const types = A(['object', 'instance']);
          const allObjects = A(predefinedFilterOptions).every(option => types.includes(typeOf(option)) && option.hasOwnProperty('label') && option.hasOwnProperty('value'));
          const allPrimitives = A(predefinedFilterOptions).every(option => !types.includes(typeOf(option)));
          assert('`predefinedFilterOptions` should be an array of objects or primitives and not mixed', allObjects || allPrimitives);
          if (allPrimitives) {
            predefinedFilterOptions = predefinedFilterOptions.map(optionStrToObj);
          }
          if ('' !== predefinedFilterOptions[0].value) {
            predefinedFilterOptions = [{value: '', label: ''}].concat(predefinedFilterOptions);
          }
          set(c, 'filterOptions', usePredefinedFilterOptions ? predefinedFilterOptions : []);
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
   * @private
   * @name ModelsTable#_setupMessages
   */
  _setupMessages: observer('customMessages', function () {
    const customIcons = getWithDefault(this, 'customMessages', {});
    let newMessages = {};
    assign(newMessages, defaultMessages, customIcons);
    set(this, 'messages', O.create(newMessages));
  }),

  /**
   * Update icons-classes used by widget with custom values provided by user in the <code>customIcons</code>
   *
   * @method _setupIcons
   * @private
   * @name ModelsTable#_setupIcons
   */
  _setupIcons() {
    const customIcons = getWithDefault(this, 'customIcons', {});
    let newIcons = {};
    assign(newIcons, defaultIcons, customIcons);
    set(this, 'icons', O.create(newIcons));
  },

  /**
   * Update css-classes used by widget with custom values provided by user in the <code>customClasses</code>
   *
   * @method _setupClasses
   * @private
   * @name ModelsTable#_setupClasses
   */
  _setupClasses() {
    const customClasses = getWithDefault(this, 'customClasses', {});
    let newClasses = {};
    assign(newClasses, defaultCssClasses, customClasses);
    set(this, 'classes', O.create(newClasses));
  },

  /**
   * Provide backward compatibility with <code>pageSizeValues</code> equal to an array with numbers and not objects
   * <code>pageSizeValues</code> is live as is, <code>pageSizeOptions</code> is used in the templates
   *
   * @private
   * @name ModelsTable#_setupPageSizeOptions
   */
  _setupPageSizeOptions() {
    let pageSizeOptions = get(this, 'pageSizeValues').map(optionStrToObj);
    set(this, 'pageSizeOptions', pageSizeOptions);
  },

  /**
   * Set <code>sortProperties</code> when single-column sorting is used
   *
   * @param {ModelsTable~ModelsTableColumn} column
   * @param {string} sortedBy
   * @param {string} newSorting 'asc|desc|none'
   * @method _singleColumnSorting
   * @private
   * @name ModelsTable#_singleColumnSorting
   */
  _singleColumnSorting(column, sortedBy, newSorting) {
    get(this, 'processedColumns').setEach('sorting', 'none');
    set(column, 'sorting', newSorting);
    set(this, 'sortProperties', 'none' === newSorting ? [] : [`${sortedBy}:${newSorting}`]);
  },

  /**
   * Set <code>sortProperties</code> when multi-columns sorting is used
   *
   * @param {ModelsTable~ModelsTableColumn} column
   * @param {string} sortedBy
   * @param {string} newSorting 'asc|desc|none'
   * @method _multiColumnsSorting
   * @private
   * @name ModelsTable#_multiColumnsSorting
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
   * @name ModelsTable#userInteractionObserver
   * @method userInteractionObserver
   * @private
   */
  userInteractionObserver () {
    run.once(this, this.userInteractionObserverOnce);
  },

  /**
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
        expandedRowIndexes: get(this, '_expandedRowIndexes'),
        columnFilters: {}
      });
      columns.forEach(column => {
        if (get(column, 'filterString')) {
          settings.columnFilters[get(column, 'propertyName')] = get(column, 'filterString');
        }
      });
      this.sendAction('displayDataChangedAction', settings);
    }
  },

  /**
   * send <code>columnsVisibilityChangedAction</code>-action when user changes which columns are visible
   * action is sent only if <code>sendColumnsVisibilityChangedAction</code> is true (default false)
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
   * @name ModelsTable#forseUpdateArrangedContent
   * @private
   */
  forceUpdateArrangedContent: observer('filteredContent.[]', 'sortProperties.[]', function () {
    this.notifyPropertyChange('arrangedContent');
  }),

  /**
   * Handler for global filter and filter by each column
   *
   * @method filteringApplied
   * @name ModelsTable#filteringApplied
   * @private
   */
  filteringApplied: observer('filterString', 'processedColumns.@each.filterString', function () {
    set(this, 'currentPageNumber', 1);
    this.userInteractionObserver();
  }),

  /**
   * Handler for <code>pageSize</code> changing
   *
   * @method paginationApplied
   * @name ModelsTable#paginationApplied
   * @private
   */
  paginationApplied: observer('pageSize', function () {
    set(this, 'currentPageNumber', 1);
    this.userInteractionObserver();
  }),

  /**
   * Collapse open rows when user change page size or moved to the another page
   *
   * @method collapseRow
   * @name ModelsTable#collapseRow
   * @private
   */
  collapseRow: observer('currentPageNumber', 'pageSize', function () {
    set(this, '_expandedRowIndexes', A([]));
  }),

  actions: {

    sendAction () {
      this.sendAction(...arguments);
    },

    /**
     * @param {ModelsTable~ModelsTableColumn} column
     */
    toggleHidden (column) {
      if (get(column, 'mayBeHidden')) {
        column.toggleProperty('isHidden');
        this._sendColumnsVisibilityChangedAction();
      }
    },

    showAllColumns () {
      get(this, 'processedColumns').setEach('isHidden', false);
      this._sendColumnsVisibilityChangedAction();
    },

    hideAllColumns () {
      get(this, 'processedColumns').setEach('isHidden', true);
      this._sendColumnsVisibilityChangedAction();
    },

    restoreDefaultVisibility() {
      get(this, 'processedColumns').forEach(c => {
        set(c, 'isHidden', !get(c, 'defaultVisible'));
        this._sendColumnsVisibilityChangedAction();
      });
    },

    gotoFirst () {
      if (!get(this, 'gotoBackEnabled')) {
        return;
      }
      set(this, 'currentPageNumber', 1);
      this.userInteractionObserver();
    },

    gotoPrev () {
      if (!get(this, 'gotoBackEnabled')) {
        return;
      }
      if (get(this, 'currentPageNumber') > 1) {
        this.decrementProperty('currentPageNumber');
        this.userInteractionObserver();
      }
    },

    gotoNext () {
      if (!get(this, 'gotoForwardEnabled')) {
        return;
      }
      let currentPageNumber = get(this, 'currentPageNumber');
      let pageSize = parseInt(get(this, 'pageSize'), 10);
      let arrangedContentLength = get(this, 'arrangedContent.length');
      if (arrangedContentLength > pageSize * (currentPageNumber - 1)) {
        this.incrementProperty('currentPageNumber');
        this.userInteractionObserver();
      }
    },

    gotoLast () {
      if (!get(this, 'gotoForwardEnabled')) {
        return;
      }
      let pageSize = parseInt(get(this, 'pageSize'), 10);
      let arrangedContentLength = get(this, 'arrangedContent.length');
      let pageNumber = arrangedContentLength / pageSize;
      pageNumber = (0 === pageNumber % 1) ? pageNumber : (Math.floor(pageNumber) + 1);
      set(this, 'currentPageNumber', pageNumber);
      this.userInteractionObserver();
    },

    gotoCustomPage (pageNumber) {
      set(this, 'currentPageNumber', pageNumber);
      this.userInteractionObserver();
    },

    /**
     * @param {ModelsTable~ModelsTableColumn} column
     */
    sort (column) {
      const sortMap = {
        none: 'asc',
        asc: 'desc',
        desc: 'none'
      };
      let sortedBy = get(column, 'sortedBy') || get(column, 'propertyName');
      if (isNone(sortedBy)) {
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

    expandRow(index) {
      assert(`row index should be numeric`, typeOf(index) === 'number');
      let multipleExpand = get(this, 'multipleExpand');
      let expandedRowIndexes = get(this, '_expandedRowIndexes');
      if (multipleExpand) {
        expandedRowIndexes.pushObject(index);
      }
      else {
        if (expandedRowIndexes.length === 1) {
          expandedRowIndexes.clear();
        }
        expandedRowIndexes.pushObject(index);
      }
      set(this, '_expandedRowIndexes', expandedRowIndexes);
      this.userInteractionObserver();
    },

    collapseRow(index) {
      assert(`row index should be numeric`, typeOf(index) === 'number');
      let expandedRowIndexes = get(this, '_expandedRowIndexes').without(index);
      set(this, '_expandedRowIndexes', expandedRowIndexes);
      this.userInteractionObserver();
    },

    expandAllRows() {
      let multipleExpand = get(this, 'multipleExpand');
      let expandedRowIndexes = get(this, '_expandedRowIndexes');
      let visibleContentLength = get(this, 'visibleContent.length');
      if (multipleExpand) {
        expandedRowIndexes.clear();
        expandedRowIndexes.pushObjects(generateIndexes(visibleContentLength));
        this.userInteractionObserver();
      }
    },

    collapseAllRows() {
      get(this, '_expandedRowIndexes').clear();
      this.userInteractionObserver();
    },

    /**
     * Handler for row-click
     * Toggle <code>selected</code>-state for row
     * Select only one or multiple rows depends on <code>multipleSelect</code>-value
     *
     * @param {number} index
     * @param {object} dataItem
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
     */
    clearFilters() {
      set(this, 'filterString', '');
      get(this, 'processedColumns').setEach('filterString', '');
    },

    /**
     * Dummy action for internal use
     */
    emptyAction() {
      return true;
    },

    /**
     * Select/deselect all rows
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
