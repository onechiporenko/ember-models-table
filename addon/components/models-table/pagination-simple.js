import Ember from 'ember';
import layout from '../../templates/components/models-table/pagination-simple';

const {computed, get} = Ember;

export default Ember.Component.extend({
  layout,
  currentPageNumber: null,
  recordsCount: null,
  pagesCount: null,
  pageSize: null,
  goToPage: null,
  themeInstance: null,
  classNameBindings: ['themeInstance.paginationWrapper', 'themeInstance.paginationWrapperDefault'],
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

  actions: {
    gotoFirst () {
      if (!get(this, 'gotoBackEnabled')) {
        return;
      }
      get(this, 'goToPage')(1);
    },

    gotoPrev () {
      if (!get(this, 'gotoBackEnabled')) {
        return;
      }
      const currentPageNumber = get(this, 'currentPageNumber');
      if (currentPageNumber > 1) {
        get(this, 'goToPage')(currentPageNumber - 1);
      }
    },

    gotoNext () {
      if (!get(this, 'gotoForwardEnabled')) {
        return;
      }
      let currentPageNumber = get(this, 'currentPageNumber');
      let pageSize = parseInt(get(this, 'pageSize'), 10);
      let arrangedContentLength = get(this, 'recordsCount');
      if (arrangedContentLength > pageSize * (currentPageNumber - 1)) {
        get(this, 'goToPage')(currentPageNumber + 1);
      }
    },

    gotoLast () {
      if (!get(this, 'gotoForwardEnabled')) {
        return;
      }
      let pageSize = parseInt(get(this, 'pageSize'), 10);
      let arrangedContentLength = get(this, 'recordsCount');
      let pageNumber = arrangedContentLength / pageSize;
      pageNumber = (0 === pageNumber % 1) ? pageNumber : (Math.floor(pageNumber) + 1);
      get(this, 'goToPage')(pageNumber);
    }
  }
});
