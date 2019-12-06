import {className, layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, computed} from '@ember/object';
import {alias, gt} from '@ember/object/computed';
import layout from '../../templates/components/models-table/pagination-simple';

/**
 * Simple navigation (first, prev, next, last) used within [models-table/footer](Components.ModelsTableFooter.html).
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Footer as |Footer|>
 *     <Footer.PaginationSimple />
 *     {{! ... }}
 *   </MT.Footer>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * @class ModelsTablePaginationSimple
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class PaginationSimpleComponent extends Component {

  @className
  @alias('themeInstance.paginationWrapper') themePaginationWrapperClass;

  @className
  @alias('themeInstance.paginationWrapperDefault') themePaginationWrapperDefaultClass;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentPageNumber:property"}}ModelsTable.currentPageNumber{{/crossLink}}
   *
   * @type number
   * @default null
   */
  currentPageNumber = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/arrangedContentLength:property"}}ModelsTable.arrangedContentLength{{/crossLink}}
   *
   * @type number
   * @default null
   */
  recordsCount = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/pagesCount:property"}}ModelsTable.pagesCount{{/crossLink}}
   *
   * @type number
   * @default null
   */
  pagesCount = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentPageNumberOptions:property"}}ModelsTable.currentPageNumberOptions{{/crossLink}}
   *
   * @type object[]
   * @default null
   */
  currentPageNumberOptions = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/showCurrentPageNumberSelect:property"}}ModelsTable.showCurrentPageNumberSelect{{/crossLink}}
   *
   * @default null
   */
  showCurrentPageNumberSelect = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.gotoCustomPage:method"}}ModelsTable.actions.gotoCustomPage{{/crossLink}}
   *
   * @event goToPage
   */
  goToPage = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/pageSize:property"}}ModelsTable.pageSize{{/crossLink}}
   *
   * @type number
   * @default null
   */
  pageSize = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Are buttons "Back" and "First" enabled
   *
   */
  @gt('currentPageNumber', 1) gotoBackEnabled;

  /**
   * Are buttons "Next" and "Last" enabled
   *
   */
  @computed('currentPageNumber', 'pagesCount')
  get gotoForwardEnabled() {
    return this.currentPageNumber < this.pagesCount;
  }
  /**
   * @type string
   * @private
   */
  @computed('elementId')
  get inputId() {
    return `${this.elementId}-page-number-select`;
  }

  @action
  gotoFirst() {
    if (!this.gotoBackEnabled) {
      return;
    }
    this.goToPage(1);
  }

  @action
  gotoPrev() {
    if (!this.gotoBackEnabled) {
      return;
    }
    if (this.currentPageNumber > 1) {
      this.goToPage(this.currentPageNumber - 1);
    }
  }

  @action
  gotoNext() {
    if (!this.gotoForwardEnabled) {
      return;
    }
    const pageSize = parseInt(this.pageSize, 10);
    if (this.recordsCount > pageSize * (this.currentPageNumber - 1)) {
      this.goToPage(this.currentPageNumber + 1);
    }
  }

  @action
  gotoLast() {
    if (!this.gotoForwardEnabled) {
      return;
    }
    const pageSize = parseInt(this.pageSize, 10);
    let pageNumber = this.recordsCount / pageSize;
    pageNumber = (0 === pageNumber % 1) ? pageNumber : (Math.floor(pageNumber) + 1);
    this.goToPage(pageNumber);
  }

  @action
  gotoPage(pageNumber) {
    this.goToPage(pageNumber);
  }

  @action
  noop() {}
}
