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
 * Block usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Footer as |Footer|>
 *     <Footer.PaginationSimple as |PS|>
 *       <button
 *         class="{{if PS.goToBackEnabled "enabled" "disabled"}} {{themeInstance.buttonDefault}}"
 *         {{action PS.goToFirst}}>
 *         <i class={{themeInstance.navFirstIcon}}></i>
 *       </button>
 *       <button
 *         class="{{if PS.goToBackEnabled "enabled" "disabled"}} {{themeInstance.buttonDefault}}"
 *         {{action PS.goToPrev}}>
 *         <i class={{themeInstance.navPrevIcon}}></i>
 *       </button>
 *       <button
 *         class="{{if PS.goToForwardEnabled "enabled" "disabled"}} {{themeInstance.buttonDefault}}"
 *         {{action PS.goToNext}}>
 *         <i class={{themeInstance.navNextIcon}}></i>
 *       </button>
 *       <button
 *         class="{{if PS.goToForwardEnabled "enabled" "disabled"}} {{themeInstance.buttonDefault}}"
 *         {{action PS.goToLast}}>
 *         <i class={{themeInstance.navLastIcon}}></i>
 *       </button>
 *       <PS.PageNumberSelect/>
 *     </Footer.PaginationSimple>
 *   </MT.Footer>
 * </ModelsTable>
 * ```
 * ModelsTablePaginationSimple yields references to the following contextual components:
 *
 * * PageNumberSelect - selectbox with list of available pages
 *
 * References to the following properties are yielded:
 *
 * * [goToBackEnabled](Components.ModelsTablePaginationSimple.html#property_goToBackEnabled) - `true` is user is not in the first page
 * * [goToForwardEnabled](Components.ModelsTablePaginationSimple.html#property_goToForwardEnabled) - `true` if user is not in the last page
 *
 * References to the following actions are yielded:
 *
 * * [goToPage](Components.ModelsTablePaginationSimple.html#event_goToPage) - action to navigate user to the custom page
 * * [goToFirst](Components.ModelsTablePaginationSimple.html#event_goToFirst) - action to navigate user to the first page
 * * [goToPrev](Components.ModelsTablePaginationSimple.html#event_goToPrev) - action to navigate user to the previous page
 * * [goToNext](Components.ModelsTablePaginationSimple.html#event_goToNext) - action to navigate user to the next page
 * * [goToLast](Components.ModelsTablePaginationSimple.html#event_goToLast) - action to navigate user to the last page
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
   * @property goToBackEnabled
   * @type boolean
   * @default false
   * @protected
   */
  @gt('currentPageNumber', 1) goToBackEnabled;

  /**
   * Are buttons "Next" and "Last" enabled
   *
   * @property goToForwardEnabled
   * @type boolean
   * @default false
   * @protected
   */
  @computed('currentPageNumber', 'pagesCount')
  get goToForwardEnabled() {
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
    if (!this.goToBackEnabled) {
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
    if (!this.goToBackEnabled) {
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
    if (!this.goToForwardEnabled) {
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
    if (!this.goToForwardEnabled) {
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
