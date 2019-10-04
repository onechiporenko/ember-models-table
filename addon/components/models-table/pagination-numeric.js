import {className, layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {A} from '@ember/array';
import {action, computed, get, getProperties} from '@ember/object';
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

  @className
  @alias('themeInstance.paginationWrapper') themePaginationWrapperClass;

  @className
  @alias('themeInstance.paginationWrapperNumeric') themePaginationWrapperNumericClass;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/collapseNumPaginationForPagesCount:property"}}ModelsTable.collapseNumPaginationForPagesCount{{/crossLink}}
   *
   * @property collapseNumPaginationForPagesCount
   * @type number
   * @default null
   */
  collapseNumPaginationForPagesCount = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentPageNumber:property"}}ModelsTable.currentPageNumber{{/crossLink}}
   *
   * @property currentPageNumber
   * @type number
   * @default null
   */
  currentPageNumber = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/showCurrentPageNumberSelect:property"}}ModelsTable.showCurrentPageNumberSelect{{/crossLink}}
   *
   * @property showCurrentPageNumberSelect
   * @type boolean
   * @default null
   */
  showCurrentPageNumberSelect = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentPageNumberOptions:property"}}ModelsTable.currentPageNumberOptions{{/crossLink}}
   *
   * @property currentPageNumberOptions
   * @type object[]
   * @default null
   */
  currentPageNumberOptions = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/arrangedContentLength:property"}}ModelsTable.arrangedContentLength{{/crossLink}}
   *
   * @property recordsCount
   * @type number
   * @default null
   */
  recordsCount = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/pageSize:property"}}ModelsTable.pageSize{{/crossLink}}
   *
   * @property pageSize
   * @type number
   * @default null
   */
  pageSize = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/pagesCount:property"}}ModelsTable.pagesCount{{/crossLink}}
   *
   * @property pagesCount
   * @type number
   * @default null
   */
  pagesCount = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.gotoCustomPage:method"}}ModelsTable.actions.gotoCustomPage{{/crossLink}}
   *
   * @event goToPage
   */
  goToPage = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * List of links to the page
   * Used if {{#crossLink "Components.ModelsTable/useNumericPagination:property"}}ModelsTable.useNumericPagination{{/crossLink}} is true
   * @typedef {object} visiblePageNumber
   * @property {boolean} isLink
   * @property {boolean} isActive
   * @property {string} label
   *
   * @type {visiblePageNumber[]}
   * @property visiblePageNumbers
   */
  @computed('pagesCount', 'currentPageNumber', 'collapseNumPaginationForPagesCount')
  get visiblePageNumbers() {
    const {
      pagesCount,
      currentPageNumber,
      collapseNumPaginationForPagesCount
    } = getProperties(this, 'pagesCount', 'currentPageNumber', 'collapseNumPaginationForPagesCount');
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
        label: label,
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
    return `${get(this, 'elementId')}-page-number-select`;
  }

  @action
  gotoCustomPage(pageNumber) {
    get(this, 'goToPage')(pageNumber);
  }
}
