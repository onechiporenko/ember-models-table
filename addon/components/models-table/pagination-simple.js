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

  /**
   * @property themePaginationWrapperClass
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.paginationWrapper') themePaginationWrapperClass;

  /**
   * @property themePaginationWrapperDefaultClass
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.paginationWrapperDefault') themePaginationWrapperDefaultClass;

  /**
   * Bound from [ModelsTable.currentPageNumber](Components.ModelsTable.html#property_currentPageNumber)
   *
   * @property currentPageNumber
   * @type number
   * @default 1
   */
  currentPageNumber = 1;

  /**
   * Bound from [ModelsTable.arrangedContentLength](Components.ModelsTable.html#property_arrangedContentLength)
   *
   * @property recordsCount
   * @type number
   * @default null
   */
  recordsCount = null;

  /**
   * Bound from [ModelsTable.pagesCount](Components.ModelsTable.html#property_pagesCount)
   *
   * @property pagesCount
   * @type number
   * @default null
   */
  pagesCount = null;

  /**
   * Bound from [ModelsTable.currentPageNumberOptions](Components.ModelsTable.html#property_currentPageNumberOptions)
   *
   * @property currentPageNumberOptions
   * @type SelectOption[]
   * @default null
   */
  currentPageNumberOptions = null;

  /**
   * Bound from [ModelsTable.showCurrentPageNumberSelect](Components.ModelsTable.html#property_showCurrentPageNumberSelect)
   *
   * @property showCurrentPageNumberSelect
   * @type boolean
   * @default null
   */
  showCurrentPageNumberSelect = null;

  /**
   * Closure action [ModelsTable.gotoCustomPage](Components.ModelsTable.html#event_gotoCustomPage)
   *
   * @event goToPage
   */
  goToPage = null;

  /**
   * Bound from [ModelsTable.pageSize](Components.ModelsTable.html#property_pageSize)
   *
   * @property pageSize
   * @type number
   * @default 10
   */
  pageSize = 10;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Are buttons "Back" and "First" enabled
   *
   * @property gotoBackEnabled
   * @type boolean
   * @default false
   * @protected
   */
  @gt('currentPageNumber', 1) gotoBackEnabled;

  /**
   * Are buttons "Next" and "Last" enabled
   *
   * @property gotoForwardEnabled
   * @type boolean
   * @default false
   * @protected
   */
  @computed('currentPageNumber', 'pagesCount')
  get gotoForwardEnabled() {
    return this.currentPageNumber < this.pagesCount;
  }
  /**
   * @property inputId
   * @type string
   * @private
   */
  @computed('elementId')
  get inputId() {
    return `${this.elementId}-page-number-select`;
  }

  /**
   * @event gotoFirst
   * @protected
   */
  @action
  gotoFirst() {
    if (!this.gotoBackEnabled) {
      return;
    }
    this.goToPage(1);
  }

  /**
   * @event gotoPrev
   * @protected
   */
  @action
  gotoPrev() {
    if (!this.gotoBackEnabled) {
      return;
    }
    if (this.currentPageNumber > 1) {
      this.goToPage(this.currentPageNumber - 1);
    }
  }

  /**
   * @event gotoNext
   * @protected
   */
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

  /**
   * @event gotoLast
   * @protected
   */
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

  /**
   * @event gotoPage
   * @param {number} pageNumber
   * @protected
   */
  @action
  gotoPage(pageNumber) {
    this.goToPage(pageNumber);
  }

  /**
   * @event noop
   * @protected
   */
  @action
  noop() {}
}
