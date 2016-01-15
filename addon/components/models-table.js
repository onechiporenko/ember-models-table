import Ember from 'ember';
import fmt from '../utils/fmt';

/**
 * @typedef {object} ModelsTable~ModelsTableColumn
 * @property {string} propertyName data's property shown in the current column
 * @property {string} title column's title
 * @property {string} template custom template used in the column's cells
 * @property {string} sortedBy custom data's property that is used to sort column
 * @property {string} sorting is column sorted now
 * @property {boolean} isHidden is column hidden now
 * @property {boolean} mayBeHidden may this column be hidden
 * @property {boolean} filterWithSelect should select-box be used as filter for this column
 * @property {string[]|number[]} predefinedFilterOptions list of option to the filter-box (used if <code>filterWithSelect</code> is true)
 * @property {string} className custom classnames for column
 * @property {function} filterFunction custom function used to filter rows (used if <code>filterWithSelect</code> is false)
 */

const keys = Object.keys;

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
  defineProperty,
  compare,
  typeOf,
  Component,
  String: S,
  Object: O
} = Ember;

const defaultMessages = {
  searchLabel: 'Search:',
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
  'caret': 'caret'
};

const defaultCssClasses = {
  outerTableWrapper: 'models-table-wrapper',
  innerTableWrapper: 'inner-table-wrapper',
  table: 'table table-striped table-bordered table-condensed',
  globalFilterWrapper: 'pull-left',
  columnsDropdownWrapper: 'pull-right columns-dropdown',
  columnsDropdownButtonWrapper: 'btn-group',
  columnsDropdown: 'dropdown-menu pull-right',
  theadCell: 'table-header',
  tfooterWrapper: 'table-footer clearfix',
  footerSummary: 'table-summary',
  footerSummaryNumericPagination: 'col-md-3 col-sm-3',
  footerSummaryDefaultPagination: 'col-md-8 col-sm-8',
  pageSizeWrapper: 'col-md-2 col-sm-2',
  pageSizeSelectWrapper: 'pull-right',
  paginationWrapper: 'table-nav',
  paginationWrapperNumeric: 'col-md-7 col-sm-7',
  paginationWrapperDefault: 'col-md-2 col-sm-2',
  buttonDefault: 'btn btn-default',
  noDataCell: ''
};

/**
 * Extend <code>customs</code>-object with properties from <code>defaults</code>-object
 *
 * @param {object} customs
 * @param {object} defaults
 * @returns {object}
 */
function smartExtend(customs, defaults) {
  var result = {};
  keys(customs).forEach(k => {
    set(result, k, get(customs, k));
  });

  keys(defaults).forEach(k => {
    if(isNone(get(result, k))) {
      set(result, k, get(defaults, k));
    }
  });
  return result;
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
 * data -> filteredContent -> arrangedContent -> visibleContent
 *
 * @class ModelsTable
 * @extends Ember.Component
 */
export default Component.extend({

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
   * Determines if table footer should be shown on the page
   *
   * @type {boolean}
   * @name ModelsTable#showTableFooter
   * @default true
   */
  showTableFooter: true,

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
   * Determines if "Global filter"-field should be shown
   *
   * @type {boolean}
   * @name ModelsTable#showGlobalFilter
   * @default true
   */
  showGlobalFilter: true,

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
   * Template for table's row
   *
   * @type {string}
   * @default 'components/models-table/row'
   * @name ModelsTable#rowTemplate
   */
  rowTemplate: 'components/models-table/row',

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
   * Number of pages
   *
   * @type {number}
   * @name ModelsTable#pagesCount
   */
  pagesCount: computed('arrangedContent.[]', 'pageSize', function () {
    const pagesCount = get(this, 'arrangedContent.length') / get(this, 'pageSize');
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
    var groups = []; // array of 8 numbers
    var labels = A([]);
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
    return A(labels.compact().map(label => { return {
      label: label,
      isLink: label !== notLinkLabel,
      isActive: label === currentPageNumber};
    }));
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
      filteringIgnoreCase
    } = getProperties(this, 'processedColumns', 'data', 'useFilteringByColumns', 'filteringIgnoreCase');
    var filterString = get(this, 'filterString');

    if (!data) {
      return A([]);
    }

    // global search
    var globalSearch = data.filter(function (row) {
      return processedColumns.length ? processedColumns.any(c => {
        const propertyName = get(c, 'propertyName');
        if (propertyName) {
          var cellValue = '' + get(row, propertyName);
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
      return processedColumns.length ? processedColumns.every(c => {
        const propertyName = get(c, 'propertyName');
        if (propertyName) {
          var cellValue = '' + get(row, propertyName);
          if (get(c, 'useFilter')) {
            var filterString = get(c, 'filterString');
            if (get(c, 'filterWithSelect')) {
              if ('' === filterString) {
                return true;
              }
              return 0 === compare(cellValue, filterString);
            }
            else {
              if (filteringIgnoreCase) {
                cellValue = cellValue.toLowerCase();
                filterString = filterString.toLowerCase();
              }
              return c.filterFunction(cellValue, filterString);
            }
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
  arrangedContent: computed.sort('filteredContent', 'sortProperties'),

  /**
   * Content of the current table page
   *
   * @type {Ember.Object[]}
   * @name ModelsTable#visibleContent
   */
  visibleContent: computed('arrangedContent.[]', 'pageSize', 'currentPageNumber', function () {
    const {
      arrangedContent,
      pageSize,
      currentPageNumber
    } = getProperties(this, 'arrangedContent', 'pageSize', 'currentPageNumber');
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
    return 0 === arrangedContentLength ? 0 : pageSize * (currentPageNumber - 1) + 1;
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
    return isLastPage ? arrangedContentLength : currentPageNumber * pageSize;
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
   * Open first page if user has changed pageSize
   * @method pageSizeObserver
   * @name ModelsTable#pageSizeObserver
   */
  pageSizeObserver: observer('pageSize', function () {
    set(this, 'currentPageNumber', 1);
  }),
  
  /**
   * Open first page if user has changed filterString
   *
   * @method filterStringObserver
   * @name ModelsTable#filterStringObserver
   */
  filterStringObserver: observer('filterString', 'processedColumns.@each.filterString', function () {
    set(this, 'currentPageNumber', 1);
  }),

  /**
   * @method contentChangedAfterPolling
   * @name ModelsTable#contentChangedAfterPolling
   */
  contentChangedAfterPolling () {
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
    this._setupColumns();
    this._setupMessages();
    this._setupIcons();
    this._setupClasses();
  }),

  /**
   * Create new properties for <code>columns</code> (filterString, useFilter, isVisible, defaultVisible)
   *
   * @method _setupColumns
   * @private
   * @name ModelsTable#_setupColumns
   */
  _setupColumns () {
    let self = this;
    let defaultSortColumn = null;
    let defaultSortedBy = null;
    let defaultSortOrder = 'asc';

    let nColumns = A(get(this, 'columns').map(column => {
      var filterFunction = get(column, 'filterFunction');
      filterFunction = 'function' === typeOf(filterFunction) ? filterFunction : defaultFilter;

      let c = O.create(JSON.parse(JSON.stringify(column)));
      let propertyName = get(c, 'propertyName');
      if (isNone(get(c, 'filterString'))) {
        setProperties(c, {
          filterString: '',
          useFilter: !isNone(propertyName)
        });
      }
      set(c, 'filterFunction', filterFunction);

      if (isNone(get(c, 'mayBeHidden'))) {
        set(c, 'mayBeHidden', true);
      }

      let sorting = 'none';
      if( column.sortedByDefault )
      {
        defaultSortColumn = c;
        defaultSortedBy = column.sortedBy? column.sortedBy:column.propertyName;
        defaultSortOrder = column.defaultSortOrder? column.defaultSortOrder:'asc';
        sorting = defaultSortOrder;
      }

      defineProperty(c, 'isVisible', computed.not('isHidden'));
      defineProperty(c, 'sortAsc', computed.equal('sorting', 'asc'));
      defineProperty(c, 'sortDesc', computed.equal('sorting', 'desc'));

      setProperties(c, {
        defaultVisible: !get(c, 'isHidden'),
        sorting: sorting
      });

      if (get(c, 'filterWithSelect') && get(c, 'useFilter')) {
        let predefinedFilterOptions = get(column, 'predefinedFilterOptions');
        if (predefinedFilterOptions && predefinedFilterOptions.length && '' !== predefinedFilterOptions[0]) {
          predefinedFilterOptions = [''].concat(predefinedFilterOptions);
        }
        let usePredefinedFilterOptions = 'array' === typeOf(predefinedFilterOptions);
        set(c, 'filterOptions', usePredefinedFilterOptions ? predefinedFilterOptions : []);
        if (!usePredefinedFilterOptions) {
          self.addObserver(`data.@each.${propertyName}`, self, self._updateFiltersWithSelect);
        }
      }
      return c;
    }));

    nColumns.forEach(column => {
      if(isNone(get(column, 'propertyName'))) {
        return;
      }
      var propertyName = get(column, 'propertyName');
      if (isNone(get(column, 'title'))) {
        set(column, 'title', self._propertyNameToTitle(propertyName));
      }
      self.addObserver(`data.@each.${propertyName}`, self, self.contentChangedAfterPolling);
    });
    set(this, 'processedColumns', nColumns);
    this._updateFiltersWithSelect();


    if( defaultSortColumn )
       this._singleColumnSorting(defaultSortColumn, defaultSortedBy, defaultSortOrder);

},

  /**
   * Convert some string to the human readable one
   *
   * @method _propertyNameToTitle
   * @param {string} name value to convert
   * @return {string}
   * @private
   * @name ModelsTable#_propertyNameToTitle
   */
  _propertyNameToTitle(name) {
    return S.capitalize(S.dasherize(name).replace(/\-/g, ' '));
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
    var newMessages = smartExtend(customIcons, defaultMessages);
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
    var newIcons = smartExtend(customIcons, defaultIcons);
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
    var newClasses = smartExtend(customClasses, defaultCssClasses);
    set(this, 'classes', O.create(newClasses));
  },

  /**
   * Updates <code>filterOptions</code> for columns which use <code>filterWithSelect</code>
   * and don't have <code>predefinedFilterOptions</code>
   * <code>filterOptions</code> are calculated like <code>data.mapBy(column.propertyName).uniq()</code>,
   * where data is component's <code>data</code>
   * If preselected option doesn't exist after <code>filterOptions</code> update,
   * <code>filterString</code> is reverted to empty string (basically, filtering for this column is dropped)
   *
   * @private
   * @name ModelsTable#_updateFiltersWithSelect
   */
  _updateFiltersWithSelect () {
    let processedColumns = get(this, 'processedColumns');
    let data = get(this, 'data');
    processedColumns.forEach(column => {
      let predefinedFilterOptions = get(column, 'predefinedFilterOptions');
      let filterWithSelect = get(column, 'filterWithSelect');
      if (filterWithSelect && 'array' !== typeOf(predefinedFilterOptions)) {
        let propertyName = get(column, 'propertyName');
        let filterOptions = [''].concat(A(A(data.filterBy(propertyName)).mapBy(propertyName)).uniq());
        let filterString = get(column, 'filterString');
        if (-1 === filterOptions.indexOf(filterString)) {
          this.$(`.changeFilterForColumn.${propertyName}`).val(''); // select empty value
          set(column, 'filterString', '');
        }
        set(column, 'filterOptions', filterOptions);
      }
    });
  },

  /**
   * Set <code>sortProperties</code> when single-column sorting is used
   *
   * @param {ModelsTableColumn} column
   * @param {string} sortedBy
   * @param {string} newSorting 'asc|desc|none'
   * @method _singleColumnSorting
   * @private
   * @name ModelsTable#_singleColumnSorting
   */
  _singleColumnSorting(column, sortedBy, newSorting) {
    get(this, 'processedColumns').setEach('sorting', 'none');
    set(column, 'sorting', newSorting);
    if ('none' === newSorting) {
      set(this, 'sortProperties', []);
    }
    else {
      set(this, 'sortProperties', [`${sortedBy}:${newSorting}`]);
    }
  },

  /**
   * Set <code>sortProperties</code> when multi-columns sorting is used
   *
   * @param {ModelsTableColumn} column
   * @param {string} sortedBy
   * @param {string} newSorting 'asc|desc|none'
   * @method _multiColumnsSorting
   * @private
   * @name ModelsTable#_multiColumnsSorting
   */
  _multiColumnsSorting(column, sortedBy, newSorting) {
    set(column, 'sorting', newSorting);
    var sortProperties = get(this, 'sortProperties');
    var sortPropertiesMap = {};
    sortProperties.forEach(p => {
      let [propertyName, order] = p.split(':');
      sortPropertiesMap[propertyName] = order;
    });
    delete sortPropertiesMap[sortedBy];

    var newSortProperties = A([]);
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

  actions: {

    sendAction () {
      this.sendAction.apply(this, arguments);
    },

    toggleHidden (column) {
      if (get(column, 'mayBeHidden')) {
        column.toggleProperty('isHidden');
      }
    },

    showAllColumns () {
      get(this, 'processedColumns').setEach('isHidden', false);
    },

    hideAllColumns () {
      get(this, 'processedColumns').setEach('isHidden', true);
    },

    restoreDefaultVisibility() {
      get(this, 'processedColumns').forEach(c => {
        set(c, 'isHidden', !get(c, 'defaultVisible'));
      });
    },

    gotoFirst () {
      if (!get(this, 'gotoBackEnabled')) {
        return;
      }
      set(this, 'currentPageNumber', 1);
    },

    gotoPrev () {
      if (!get(this, 'gotoBackEnabled')) {
        return;
      }
      if (get(this, 'currentPageNumber') > 1) {
        this.decrementProperty('currentPageNumber');
      }
    },

    gotoNext () {
      if (!get(this, 'gotoForwardEnabled')) {
        return;
      }
      var currentPageNumber = get(this, 'currentPageNumber');
      var pageSize = get(this, 'pageSize');
      var arrangedContentLength = get(this, 'arrangedContent.length');
      if (arrangedContentLength > pageSize * (currentPageNumber - 1)) {
        this.incrementProperty('currentPageNumber');
      }
    },

    gotoLast () {
      if (!get(this, 'gotoForwardEnabled')) {
        return;
      }
      var pageSize = get(this, 'pageSize');
      var arrangedContentLength = get(this, 'arrangedContent.length');
      var pageNumber = arrangedContentLength / pageSize;
      pageNumber = (0 === pageNumber % 1) ? pageNumber : (Math.floor(pageNumber) + 1);
      set(this, 'currentPageNumber', pageNumber);
    },

    gotoCustomPage (pageNumber) {
      set(this, 'currentPageNumber', pageNumber);
    },

    /**
     * @param {ModelsTableColumn} column
     */
    sort (column) {
      const sortMap = {
        none: 'asc',
        asc: 'desc',
        desc: 'none'
      };
      var sortedBy = get(column, 'sortedBy') || get(column, 'propertyName');
      if (isNone(sortedBy)) {
        return;
      }
      var currentSorting = get(column, 'sorting');
      var newSorting = sortMap[currentSorting];

      if (get(this, 'multipleColumnsSorting')) {
        this._multiColumnsSorting(column, sortedBy, newSorting);
      }
      else {
        this._singleColumnSorting(column, sortedBy, newSorting);
      }
    },

    changePageSize () {
      const selectedIndex = this.$('.changePageSize')[0].selectedIndex;
      const pageSizeValues = get(this, 'pageSizeValues');
      const selectedValue = pageSizeValues[selectedIndex];
      set(this, 'pageSize', selectedValue);
    },

    /**
     * @param {ModelsTableColumn} column
     */
    changeFilterForColumn (column) {
      let val = this.$(`.changeFilterForColumn.${get(column, 'propertyName')}`)[0].value;
      set(column, 'filterString', val);
    }

  }

});