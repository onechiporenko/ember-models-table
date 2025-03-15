import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

import { type PaginationSimpleSignature } from '../../../../interfaces/components/models-table/themes/default/pagination-simple-signature.interface';

/**
 * Simple navigation (first, prev, next, last) used within {@link DefaultTheme.TableFooter | TableFooter} or {@link Core.ModelsTable | ModelsTable}.
 *
 * Usage example:
 *
 * ```html
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
 * ```html
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
 * * {@link DefaultTheme.Select | PageNumberSelect} - selectbox with list of available pages
 *
 * References to the following properties are yielded:
 *
 * * {@link goToBackEnabled} - `true` is user is not in the first page
 * * {@link goToForwardEnabled} - `true` if user is not in the last page
 *
 * References to the following actions are yielded:
 *
 * * {@link DefaultTheme.PaginationSimpleArgs.goToPage | goToPage} - action to navigate user to the custom page
 * * {@link gotoFirst} - action to navigate user to the first page
 * * {@link gotoPrev} - action to navigate user to the previous page
 * * {@link gotoNext} - action to navigate user to the next page
 * * {@link gotoLast} - action to navigate user to the last page
 */
export default class PaginationSimple extends Component<PaginationSimpleSignature> {
  protected elementId = guidFor(this);

  /**
   * Are buttons "Back" and "First" enabled
   *
   * @default false
   */
  get goToBackEnabled(): boolean {
    return this.args.currentPageNumber > 1;
  }

  /**
   * Are buttons "Next" and "Last" enabled
   *
   * @default false
   */
  get goToForwardEnabled(): boolean {
    return this.args.currentPageNumber < this.args.pagesCount;
  }

  protected get inputId(): string {
    return `${this.elementId}-page-number-select`;
  }

  /**
   * @event gotoFirst
   */
  @action
  gotoFirst(e: Event): boolean {
    e?.stopPropagation?.();
    if (!this.goToBackEnabled) {
      return false;
    }
    this.args.goToPage(1);
    return false;
  }

  /**
   * @event gotoPrev
   */
  @action
  gotoPrev(e: Event): boolean {
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
   */
  @action
  gotoNext(e: Event): boolean {
    e?.stopPropagation?.();
    if (!this.goToForwardEnabled) {
      return false;
    }
    const pageSize = parseInt(`${this.args.pageSize}`, 10);
    if (this.args.recordsCount > pageSize * (this.args.currentPageNumber - 1)) {
      this.args.goToPage(this.args.currentPageNumber + 1);
    }
    return false;
  }

  /**
   * @event gotoLast
   */
  @action
  gotoLast(e: Event): boolean {
    e?.stopPropagation?.();
    if (!this.goToForwardEnabled) {
      return false;
    }
    const pageSize = parseInt(`${this.args.pageSize}`, 10);
    let pageNumber = this.args.recordsCount / pageSize;
    pageNumber = 0 === pageNumber % 1 ? pageNumber : Math.floor(pageNumber) + 1;
    this.args.goToPage(pageNumber);
    return false;
  }

  /**
   * @event goToPage
   */
  @action
  protected goToPage(pageNumber: string): void {
    this.args.goToPage(+pageNumber);
  }

  /**
   * @event noop
   */
  @action
  protected noop(): void {
    // do nothing.
  }
}
