import Ember from 'ember';

var get = Ember.get;
var set = Ember.set;
var setProperties = Ember.setProperties;

export default Ember.Component.extend(Ember.SortableMixin, {

  /**
   * Number of records shown on one table-page (size of the <code>visibleContent</code>)
   * @type {number}
   */
  pageSize: 10,

  /**
   * @type {number}
   */
  currentPageNumber: 1,

  /**
   * @type {string[]}
   */
  sortProperties: Ember.A([]),

  /**
   * @type {boolean}
   */
  sortAscending: true,

  /**
   * Should table footer be shown on the page
   * @type {boolean}
   */
  showTableFooter: true,

  /**
   * All table records
   * @type {Ember.Object[]}
   */
  content: Ember.A([]),

  /**
   * Table columns
   * @type {Ember.Object[]}
   */
  columns: Ember.A([]),

  /**
   * @type {string}
   */
  summaryTemplate: 'Show %@ - %@ of %@',

  /**
   * Are buttons "Back" and "First" enabled
   * @type {boolean}
   */
  gotoBackEnabled: Ember.computed.gt('currentPageNumber', 1),

  /**
   * Are buttons "Next" and "Last" enabled
   * @type {boolean}
   */
  gotoForwardEnabled: Ember.computed('currentPageNumber', 'pageSize', 'arrangedContent.length', function () {
    var pagesCount = get(this, 'arrangedContent.length') / get(this, 'pageSize');
    pagesCount = (pagesCount % 1 === 0) ? pagesCount : (Math.floor(pagesCount) + 1);
    return get(this, 'currentPageNumber') < pagesCount;
  }),

  /**
   * Content of the current table page
   * @type {Ember.Object[]}
   */
  visibleContent: Ember.computed('arrangedContent.[]', 'pageSize', 'currentPageNumber', function () {
    var arrangedContent = get(this, 'arrangedContent');
    var pageSize = get(this, 'pageSize');
    var currentPageNumber = get(this, 'currentPageNumber');
    var startIndex = pageSize * (currentPageNumber - 1);
    if (get(arrangedContent, 'length') < pageSize) {
      return arrangedContent;
    }
    return Ember.A(arrangedContent.slice(startIndex, startIndex + pageSize));
  }),

  /**
   * Real table summary
   * @use summaryTemplate
   * @type {string}
   */
  summary: Ember.computed('pageSize', 'currentPageNumber', 'arrangedContent.[]', 'content.[]', function () {
    var currentPageNumber = get(this, 'currentPageNumber');
    var pageSize = get(this, 'pageSize');
    var arrangedContentLength = get(this, 'arrangedContent.length');
    var isLastPage = !get(this, 'gotoForwardEnabled');
    var firstIndex = arrangedContentLength === 0 ? 0 : pageSize * (currentPageNumber - 1) + 1;
    var lastIndex = isLastPage ? arrangedContentLength : currentPageNumber * pageSize;
    return Ember.String.fmt(get(this, 'summaryTemplate'), firstIndex, lastIndex, arrangedContentLength);
  }),

  /**
   * List of possible <code>pageSize</code> values
   * Used to change size of <code>visibleContent</code>
   * @type {number[]}
   */
  pageSizeValues: Ember.A([10, 25, 50]),

  /**
   * Open first page if user has changed pageSize
   * @method pageSizeObserver
   */
  pageSizeObserver: Ember.observer('pageSize', function () {
    set(this, 'currentPageNumber', 1);
  }),

  /**
   * @method contentChangedAfterPolling
   */
  contentChangedAfterPolling: Ember.observer('content.[]', function () {
    this.notifyPropertyChange('arrangedContent');
  }),

  willInsertElement: function () {
    var columns = get(this, 'columns');
    if (!columns.length) {
      return;
    }
    this.addObserver('content.@each.{' + columns.mapBy('propertyName').join(',') + '}', this, this.contentChangedAfterPolling);
  },

  actions: {

    gotoFirst: function () {
      if (!get(this, 'gotoBackEnabled')) {
        return;
      }
      set(this, 'currentPageNumber', 1);
    },

    gotoPrev: function () {
      if (!get(this, 'gotoBackEnabled')) {
        return;
      }
      if (get(this, 'currentPageNumber') > 1) {
        this.decrementProperty('currentPageNumber');
      }
    },

    gotoNext: function () {
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

    gotoLast: function () {
      if (!get(this, 'gotoForwardEnabled')) {
        return;
      }
      var pageSize = get(this, 'pageSize');
      var arrangedContentLength = get(this, 'arrangedContent.length');
      var pageNumber = arrangedContentLength / pageSize;
      pageNumber = (pageNumber % 1 === 0) ? pageNumber : (Math.floor(pageNumber) + 1);
      set(this, 'currentPageNumber', pageNumber);
    },

    sort: function (column) {
      var sortProperties = get(this, 'sortProperties');
      var sortedBy = Ember.get(column, 'sortedBy') || Ember.get(column, 'propertyName');
      if (Ember.isNone(sortedBy)) {
        return;
      }
      if (sortProperties.indexOf(sortedBy) >= 0) {
        this.toggleProperty('sortAscending');
      }
      else {
        setProperties(this, {
          sortAscending: true,
          sortProperties: Ember.A([sortedBy])
        });
      }
      get(this, 'columns').forEach(function (column) {
        setProperties(column, {
          sortAsc: false,
          sortDesc: false
        });
      });
      setProperties(column, {
        sortAsc: get(this, 'sortAscending'),
        sortDesc: !get(this, 'sortAscending')
      });
    }

  }

});
