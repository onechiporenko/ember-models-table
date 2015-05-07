import Ember from 'ember';

export default Ember.Component.extend(Ember.SortableMixin, {

  /**
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
   * @type {boolean}
   */
  showTableFooter: true,

  /**
   * @type {Ember.Object[]}
   */
  content: Ember.A([]),

  /**
   * @type {Ember.Object[]}
   */
  columns: Ember.A([]),

  /**
   * @type {string}
   */
  summaryTemplate: 'Show %@ - %@ of %@',

  /**
   * @type {boolean}
   */
  gotoBackEnabled: Ember.computed.gt('currentPageNumber', 1),

  /**
   * @type {boolean}
   */
  gotoForwardEnabled: Ember.computed('currentPageNumber', 'pageSize', 'arrangedContent.length', function () {
    var pagesCount = this.get('arrangedContent.length') / this.get('pageSize');
    pagesCount = (pagesCount % 1 === 0) ? pagesCount : (Math.floor(pagesCount) + 1);
    return this.get('currentPageNumber') < pagesCount;
  }),

  /**
   * @type {Ember.Object[]}
   */
  visibleContent: Ember.computed('arrangedContent.[]', 'pageSize', 'currentPageNumber', function () {
    var arrangedContent = this.get('arrangedContent');
    var pageSize = this.get('pageSize');
    var currentPageNumber = this.get('currentPageNumber');
    var startIndex = pageSize * (currentPageNumber - 1);
    if (arrangedContent.get('length') < pageSize) {
      return arrangedContent;
    }
    return Ember.A(arrangedContent.slice(startIndex, startIndex + pageSize));
  }),

  /**
   * @type {string}
   */
  summary: Ember.computed('pageSize', 'currentPageNumber', 'arrangedContent.[]', 'content.[]', function () {
    var currentPageNumber = this.get('currentPageNumber');
    var pageSize = this.get('pageSize');
    var arrangedContentLength = this.get('arrangedContent.length');
    var isLastPage = !this.get('gotoForwardEnabled');
    var firstIndex = arrangedContentLength === 0 ? 0 : pageSize * (currentPageNumber - 1) + 1;
    var lastIndex = isLastPage ? arrangedContentLength : currentPageNumber * pageSize;
    return Ember.String.fmt(this.get('summaryTemplate'), firstIndex, lastIndex, arrangedContentLength);
  }),

  /**
   * @type {number[]}
   */
  pageSizeValues: Ember.A([10, 25, 50]),

  /**
   * Open first page if user has changed pageSize
   * @method pageSizeObserver
   */
  pageSizeObserver: Ember.observer('pageSize', function () {
    this.set('currentPageNumber', 1);
  }),

  /**
   * @method contentChangedAfterPolling
   */
  contentChangedAfterPolling: Ember.observer('content.[]', function () {
    this.notifyPropertyChange('arrangedContent');
  }),

  willInsertElement: function () {
    var columns = this.get('columns');
    if (!columns.length) {
      return;
    }
    this.addObserver('content.@each.{' + columns.mapProperty('propertyName').join(',') + '}', this, this.contentChangedAfterPolling);
  },

  actions: {

    gotoFirst: function () {
      if (!this.get('gotoBackEnabled')) {
        return;
      }
      this.set('currentPageNumber', 1);
    },

    gotoPrev: function () {
      if (!this.get('gotoBackEnabled')) {
        return;
      }
      if (this.get('currentPageNumber') > 1) {
        this.decrementProperty('currentPageNumber');
      }
    },

    gotoNext: function () {
      if (!this.get('gotoForwardEnabled')) {
        return;
      }
      var currentPageNumber = this.get('currentPageNumber');
      var pageSize = this.get('pageSize');
      var arrangedContentLength = this.get('arrangedContent.length');
      if (arrangedContentLength > pageSize * (currentPageNumber - 1)) {
        this.incrementProperty('currentPageNumber');
      }
    },

    gotoLast: function () {
      if (!this.get('gotoForwardEnabled')) {
        return;
      }
      var pageSize = this.get('pageSize');
      var arrangedContentLength = this.get('arrangedContent.length');
      var pageNumber = arrangedContentLength / pageSize;
      pageNumber = (pageNumber % 1 === 0) ? pageNumber : (Math.floor(pageNumber) + 1);
      this.set('currentPageNumber', pageNumber);
    },

    sort: function (column) {
      var sortProperties = this.get('sortProperties');
      var sortedBy = Ember.get(column, 'sortedBy') || Ember.get(column, 'propertyName');
      if (sortProperties.contains(sortedBy)) {
        this.toggleProperty('sortAscending');
      }
      else {
        this.setProperties({
          sortAscending: true,
          sortProperties: Ember.A([sortedBy])
        });
      }
      this.get('columns').setEach('sortAsc', false);
      this.get('columns').setEach('sortDesc', false);
      column.setProperties({
        sortAsc: this.get('sortAscending'),
        sortDesc: !this.get('sortAscending')
      });
    }

  }

});
