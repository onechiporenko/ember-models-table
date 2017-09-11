import Ember from 'ember';
import layout from '../../templates/components/models-table/pagination-simple';

const {computed, get} = Ember;

/**
 * Simple navigation (first, prev, next, last) used within [models-table/footer](Components.ModelsTableFooter.html).
 *
 * Usage example:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.footer as |footer|}}
 *     {{footer.pagination-simple}}
 *     {{! ... }}
 *   {{/mt.footer}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * @class ModelsTablePaginationSimple
 * @namespace Components
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  layout,

  classNameBindings: ['themeInstance.paginationWrapper', 'themeInstance.paginationWrapperDefault'],

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentPageNumber:property"}}ModelsTable.currentPageNumber{{/crossLink}}
   *
   * @property currentPageNumber
   * @type number
   * @default null
   */
  currentPageNumber: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/arrangedContentLength:property"}}ModelsTable.arrangedContentLength{{/crossLink}}
   *
   * @property recordsCount
   * @type number
   * @default null
   */
  recordsCount: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/pagesCount:property"}}ModelsTable.pagesCount{{/crossLink}}
   *
   * @property pagesCount
   * @type number
   * @default null
   */
  pagesCount: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.gotoCustomPage:method"}}ModelsTable.actions.gotoCustomPage{{/crossLink}}
   *
   * @event goToPage
   */
  goToPage: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/pageSize:property"}}ModelsTable.pageSize{{/crossLink}}
   *
   * @property pageSize
   * @type number
   * @default null
   */
  pageSize: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance: null,

  /**
   * Bound from {{#crossLink "Components.ModelsTable/messages:property"}}ModelsTable.messages{{/crossLink}}
   *
   * @property messages
   * @type object
   * @default null
   */
  messages: null,

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.sendAction:method"}}ModelsTable.actions.sendAction{{/crossLink}}
   *
   * @event sendAction
   */
  sendAction: null,

  /**
   * Are buttons "Back" and "First" enabled
   *
   * @type boolean
   * @property gotoBackEnabled
   */
  gotoBackEnabled: computed.gt('currentPageNumber', 1),

  /**
   * Are buttons "Next" and "Last" enabled
   *
   * @type boolean
   * @property gotoForwardEnabled
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
