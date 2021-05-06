import Component from '@glimmer/component';
import { A } from '@ember/array';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';

/**
 * Numeric navigation used within [models-table/footer](Components.ModelsTableFooter.html).
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Footer as |Footer|>
 *     <Footer.PaginationNumeric />
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
 *     <Footer.PaginationNumeric as |PN|>
 *       {{#each PN.visiblePageNumbers as |page|}}
 *         {{#if page.isLink}}
 *           <button
 *             class="{{MT.themeInstance.paginationNumericItem}} {{if page.isActive MT.themeInstance.paginationNumericItemActive}} {{MT.themeInstance.buttonDefault}}"
 *             {{action MT.goToPage page.label}}>
 *             {{page.label}}
 *           </button>
 *         {{else}}
 *           <button
 *             type="button"
 *             class="{{MT.themeInstance.buttonDefault}} {{MT.themeInstance.paginationNumericItem}}"
 *             disabled="disabled">
 *             {{page.label}}
 *           </button>
 *         {{/if}}
 *       {{/each}}
 *       <PN.PageNumberSelect />
 *     </Footer.PaginationNumeric>
 *   </MT.Footer>
 * </ModelsTable>
 * ```
 * ModelsTablePaginationNumeric yields references to the following contextual components:
 *
 * * PageNumberSelect - selectbox with list of available pages
 *
 * References to the following properties are yielded:
 *
 * * [visiblePageNumbers](Components.ModelsTablePaginationNumeric.html#property_visiblePageNumbers)
 *
 * @class ModelsTablePaginationNumeric
 * @namespace Components
 * @extends Glimmer.Component
 */
export default class PaginationNumericComponent extends Component {
  elementId = guidFor(this);

  /**
   * List of links to the page
   * Used if [ModelsTable.useNumericPagination](Components.ModelsTable.html#property_useNumericPagination) is true
   *
   * @type object[]
   * @property visiblePageNumbers
   * @default []
   * @protected
   */
  get visiblePageNumbers() {
    const {
      pagesCount,
      currentPageNumber,
      collapseNumPaginationForPagesCount,
    } = this.args;
    const notLinkLabel = '...';
    const showAll = pagesCount <= collapseNumPaginationForPagesCount;
    let groups = []; // array of 8 numbers
    let labels = A([]);
    groups[0] = 1;
    groups[1] = Math.min(1, pagesCount);
    groups[6] = Math.max(1, pagesCount);
    groups[7] = pagesCount;
    groups[3] = Math.max(groups[1] + 1, currentPageNumber - 1);
    groups[4] = Math.min(groups[6] - 1, currentPageNumber + 1);
    groups[2] = Math.floor((groups[1] + groups[3]) / 2);
    groups[5] = Math.floor((groups[4] + groups[6]) / 2);

    if (showAll) {
      for (let i = groups[0]; i <= groups[7]; i++) {
        labels[i] = i;
      }
    } else {
      for (let n = groups[0]; n <= groups[1]; n++) {
        labels[n] = n;
      }
      const userGroup2 = groups[4] >= groups[3] && groups[3] - groups[1] > 1;
      if (userGroup2) {
        labels[groups[2]] = notLinkLabel;
      }
      for (let i = groups[3]; i <= groups[4]; i++) {
        labels[i] = i;
      }
      const userGroup5 = groups[4] >= groups[3] && groups[6] - groups[4] > 1;
      if (userGroup5) {
        labels[groups[5]] = notLinkLabel;
      }
      for (let i = groups[6]; i <= groups[7]; i++) {
        labels[i] = i;
      }
    }

    return A(
      labels.compact().map((label) => ({
        label,
        isLink: label !== notLinkLabel,
        isActive: label === currentPageNumber,
      }))
    );
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
   * @event gotoCustomPage
   * @param {number} pageNumber
   * @param {Event} e
   * @protected
   */
  @action
  gotoCustomPage(pageNumber, e) {
    e?.stopPropagation?.();
    this.args.goToPage(pageNumber);
  }
}
