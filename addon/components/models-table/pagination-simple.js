import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';

/**
 * Simple navigation (first, prev, next, last) used within [models-table/footer](Components.ModelsTableFooter.html).
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
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
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Footer as |Footer|>
 *     <Footer.PaginationSimple as |PS|>
 *       <button
 *         class="{{if PS.goToBackEnabled "enabled" "disabled"}} {{MT.themeInstance.buttonDefault}}"
 *         {{on "click" PS.goToFirst}}>
 *         <i class={{MT.themeInstance.navFirstIcon}}></i>
 *       </button>
 *       <button
 *         class="{{if PS.goToBackEnabled "enabled" "disabled"}} {{MT.themeInstance.buttonDefault}}"
 *         {{on "click" PS.goToPrev}}>
 *         <i class={{MT.themeInstance.navPrevIcon}}></i>
 *       </button>
 *       <button
 *         class="{{if PS.goToForwardEnabled "enabled" "disabled"}} {{MT.themeInstance.buttonDefault}}"
 *         {{on "click" PS.goToNext}}>
 *         <i class={{MT.themeInstance.navNextIcon}}></i>
 *       </button>
 *       <button
 *         class="{{if PS.goToForwardEnabled "enabled" "disabled"}} {{MT.themeInstance.buttonDefault}}"
 *         {{on "click" PS.goToLast}}>
 *         <i class={{MT.themeInstance.navLastIcon}}></i>
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
 * @extends Glimmer.Component
 */
export default class PaginationSimpleComponent extends Component {
  elementId = guidFor(this);

  /**
   * Are buttons "Back" and "First" enabled
   *
   * @property goToBackEnabled
   * @type boolean
   * @default false
   * @protected
   */
  get goToBackEnabled() {
    return this.args.currentPageNumber > 1;
  }

  /**
   * Are buttons "Next" and "Last" enabled
   *
   * @property goToForwardEnabled
   * @type boolean
   * @default false
   * @protected
   */
  get goToForwardEnabled() {
    return this.args.currentPageNumber < this.args.pagesCount;
  }
  /**
   * @property inputId
   * @type string
   * @private
   */
  get inputId() {
    return `${this.elementId}-page-number-select`;
  }

  /**
   * @event gotoFirst
   * @param {Event} e
   * @protected
   */
  @action
  gotoFirst(e) {
    e?.stopPropagation?.();
    if (!this.goToBackEnabled) {
      return false;
    }
    this.args.goToPage(1);
    return false;
  }

  /**
   * @event gotoPrev
   * @param {Event} e
   * @protected
   */
  @action
  gotoPrev(e) {
    e?.stopPropagation?.();
    if (!this.goToBackEnabled) {
      return false;
    }
    if (this.args.currentPageNumber > 1) {
      this.args.goToPage(this.args.currentPageNumber - 1);
    }
    return false;
  }

  /**
   * @event gotoNext
   * @param {Event} e
   * @protected
   */
  @action
  gotoNext(e) {
    e?.stopPropagation?.();
    if (!this.goToForwardEnabled) {
      return false;
    }
    const pageSize = parseInt(this.args.pageSize, 10);
    if (this.args.recordsCount > pageSize * (this.args.currentPageNumber - 1)) {
      this.args.goToPage(this.args.currentPageNumber + 1);
    }
    return false;
  }

  /**
   * @event gotoLast
   * @param {Event} e
   * @protected
   */
  @action
  gotoLast(e) {
    e?.stopPropagation?.();
    if (!this.goToForwardEnabled) {
      return;
    }
    const pageSize = parseInt(this.args.pageSize, 10);
    let pageNumber = this.args.recordsCount / pageSize;
    pageNumber = 0 === pageNumber % 1 ? pageNumber : Math.floor(pageNumber) + 1;
    this.args.goToPage(pageNumber);
    return false;
  }

  /**
   * @event gotoCustomPage
   * @param {number} pageNumber
   * @protected
   */
  @action
  gotoCustomPage(pageNumber) {
    this.args.goToPage(pageNumber);
  }

  /**
   * @event noop
   * @protected
   */
  @action
  noop() {}
}
