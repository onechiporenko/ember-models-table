import {className, layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {A} from '@ember/array';
import {action, computed} from '@ember/object';
import {alias} from '@ember/object/computed';
import layout from '../../templates/components/models-table/pagination-numeric';

/**
 * Numeric navigation used within [models-table/footer](Components.ModelsTableFooter.html).
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Footer as |footer|>
 *     <Footer.PaginationNumeric />
 *     {{! ... }}
 *   </MT.Footer>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * @class ModelsTablePaginationNumeric
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class PaginationNumericComponent extends Component {

  /**
   * @property themePaginationWrapperClass
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.paginationWrapper') themePaginationWrapperClass;

  /**
   * @property themePaginationWrapperNumericClass
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.paginationWrapperNumeric') themePaginationWrapperNumericClass;

  /**
   * Bound from [ModelsTable.collapseNumPaginationForPagesCount](Components.ModelsTable.html#property_collapseNumPaginationForPagesCount)
   *
   * @property collapseNumPaginationForPagesCount
   * @type number
   * @default null
   */
  collapseNumPaginationForPagesCount = null;

  /**
   * Bound from [ModelsTable.currentPageNumber](Components.ModelsTable.html#property_currentPageNumber)
   *
   * @property currentPageNumber
   * @type number
   * @default 1
   */
  currentPageNumber = 1;

  /**
   * Bound from [ModelsTable.showCurrentPageNumberSelect](Components.ModelsTable.html#property_showCurrentPageNumberSelect)
   *
   * @property showCurrentPageNumberSelect
   * @type boolean
   * @default null
   */
  showCurrentPageNumberSelect = null;

  /**
   * Bound from [ModelsTable.currentPageNumberOptions](Components.ModelsTable.html#property_currentPageNumberOptions)
   *
   * @property currentPageNumberOptions
   * @type SelectOption[]
   * @default null
   */
  currentPageNumberOptions = null;

  /**
   * Bound from [ModelsTable.arrangedContentLength](Components.ModelsTable.html#property_arrangedContentLength)
   *
   * @property recordsCount
   * @type number
   * @default null
   */
  recordsCount = null;

  /**
   * Bound from [ModelsTable.pageSize](Components.ModelsTable.html#property_pageSize)
   *
   * @property pageSize
   * @type number
   * @default 10
   */
  pageSize = 10;

  /**
   * Bound from [ModelsTable.pagesCount](Components.ModelsTable.html#property_pagesCount)
   *
   * @property pagesCount
   * @type number
   * @default null
   */
  pagesCount = null;

  /**
   * Closure action [ModelsTable.gotoCustomPage](Components.ModelsTable.html#event_gotoCustomPage)
   *
   * @event goToPage
   */
  goToPage = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * List of links to the page
   * Used if [ModelsTable.useNumericPagination](Components.ModelsTable.html#property_useNumericPagination) is true
   *
   * @type object[]
   * @property visiblePageNumbers
   * @default []
   * @protected
   */
  @computed('pagesCount', 'currentPageNumber', 'collapseNumPaginationForPagesCount')
  get visiblePageNumbers() {
    const {
      pagesCount,
      currentPageNumber,
      collapseNumPaginationForPagesCount
    } = this;
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
    }
    else {
      for (let n = groups[0]; n <= groups[1]; n++) {
        labels[n] = n;
      }
      const userGroup2 = groups[4] >= groups[3] && ((groups[3] - groups[1]) > 1);
      if (userGroup2) {
        labels[groups[2]] = notLinkLabel;
      }
      for (let i = groups[3]; i <= groups[4]; i++) {
        labels[i] = i;
      }
      const userGroup5 = groups[4] >= groups[3] && ((groups[6] - groups[4]) > 1);
      if (userGroup5) {
        labels[groups[5]] = notLinkLabel;
      }
      for (let i = groups[6]; i <= groups[7]; i++) {
        labels[i] = i;
      }
    }

    return A(labels.compact().map(label => ({
        label,
        isLink: label !== notLinkLabel,
        isActive: label === currentPageNumber
      })
    ));
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
   * @event gotoCustomPage
   * @param {number} pageNumber
   * @protected
   */
  @action
  gotoCustomPage(pageNumber) {
    this.goToPage(pageNumber);
  }
}
