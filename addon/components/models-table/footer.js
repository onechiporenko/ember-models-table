import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/footer';

/**
 * Footer block used within [models-table](Components.ModelsTable.html).
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Footer />
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * Usage example with a block context:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Footer as |Footer|>
 *     <Footer.Summary />
 *     <Footer.SizeSelect />
 *     {{#if useNumericPagination}}
 *       <Footer.PaginationNumeric />
 *     {{else}}
 *       <Footer.PaginationSimple />
 *     {{/if}}
 *   </MT.Footer>
 * </ModelsTable>
 * ```
 *
 * ModelsTableFooter yields references to the following contextual components:
 *
 * * [models-table/summary](Components.ModelsTableSummary.html) - component with summary info about table data. It also contains button to clear all filters applied to the table
 * * [models-table/size-select](Components.ModelsTableSizeSelect.html) - component with a page sizes dropdown. It allows to select number if records shown on page
 * * [models-table/pagination-numeric](Components.ModelsTablePaginationNumeric.html) - component with a table navigation. It allows to move to the page by its number
 * * [models-table/pagination-simple](Components.ModelsTablePaginationSimple.html) - component with a table navigation. It allows to move to the first, last, prev and next pages (this four buttons are shown always)
 *
 * Check own docs for each component to get detailed info.
 *
 * @class ModelsTableFooter
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class FooterComponent extends Component {
  /**
   * Bound from {{#crossLink "Components.ModelsTable/collapseNumPaginationForPagesCount:property"}}ModelsTable.collapseNumPaginationForPagesCount{{/crossLink}}
   *
   * @property collapseNumPaginationForPagesCount
   * @type number
   * @default null
   */
  collapseNumPaginationForPagesCount = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/firstIndex:property"}}ModelsTable.firstIndex{{/crossLink}}
   *
   * @property firstIndex
   * @type number
   * @default null
   */
  firstIndex = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/lastIndex:property"}}ModelsTable.lastIndex{{/crossLink}}
   *
   * @property lastIndex
   * @type number
   * @default null
   */
  lastIndex = null;

  recordsCount = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/anyFilterUsed:property"}}ModelsTable.anyFilterUsed{{/crossLink}}
   *
   * @property anyFilterUsed
   * @type boolean
   * @default null
   */
  anyFilterUsed = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/currentPageNumberOptions:property"}}ModelsTable.currentPageNumberOptions{{/crossLink}}
   *
   * @property currentPageNumberOptions
   * @type object[]
   * @default null
   */
  currentPageNumberOptions = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/pageSizeOptions:property"}}ModelsTable.pageSizeOptions{{/crossLink}}
   *
   * @property pageSizeOptions
   * @type object[]
   * @default null
   */
  pageSizeOptions = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/pageSize:property"}}ModelsTable.pageSize{{/crossLink}}
   *
   * @property pageSize
   * @type number
   * @default null
   */
  pageSize = null;

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
   * Bound from {{#crossLink "Components.ModelsTable/pagesCount:property"}}ModelsTable.pagesCount{{/crossLink}}
   *
   * @property pagesCount
   * @type number
   * @default null
   */
  pagesCount = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/showPageSize:property"}}ModelsTable.showPageSize{{/crossLink}}
   *
   * @property showPageSize
   * @type boolean
   * @default null
   */
  showPageSize = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/useNumericPagination:property"}}ModelsTable.useNumericPagination{{/crossLink}}
   *
   * @property useNumericPagination
   * @type boolean
   * @default null
   */
  useNumericPagination = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.goToPage:method"}}ModelsTable.actions.goToPage{{/crossLink}}
   *
   * @event goToPage
   */
  goToPage = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.clearFilters:method"}}ModelsTable.actions.clearFilters{{/crossLink}}
   *
   * @event clearFilters
   */
  clearFilters = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;
}
