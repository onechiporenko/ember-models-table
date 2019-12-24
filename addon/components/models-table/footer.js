import {className, layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {alias} from '@ember/object/computed';
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
 *     <Footer.PageSizeSelect />
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
   * @property tfooterInternalWrapper
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.tfooterInternalWrapper')
  tfooterInternalWrapper;

  /**
   * Bound from [ModelsTable.collapseNumPaginationForPagesCount](Components.ModelsTable.html#property_collapseNumPaginationForPagesCount)
   *
   * @property collapseNumPaginationForPagesCount
   * @type number
   * @default null
   */
  collapseNumPaginationForPagesCount = null;

  /**
   * Bound from [ModelsTable.firstIndex](Components.ModelsTable.html#property_firstIndex)
   *
   * @property firstIndex
   * @type number
   * @default null
   */
  firstIndex = null;

  /**
   * Bound from [ModelsTable.lastIndex](Components.ModelsTable.html#property_lastIndex)
   *
   * @property lastIndex
   * @type number
   * @default null
   */
  lastIndex = null;

  /**
   * @property recordsCount
   * @type number
   * @default null
   */
  recordsCount = null;

  /**
   * Bound from [ModelsTable.anyFilterUsed](Components.ModelsTable.html#property_anyFilterUsed)
   *
   * @default null
   * @property anyFilterUsed
   * @type boolean
   */
  anyFilterUsed = null;

  /**
   * Bound from [ModelsTable.currentPageNumberOptions](Components.ModelsTable.html#property_currentPageNumberOptions)
   *
   * @property currentPageNumberOptions
   * @type SelectOption[]
   * @default null
   */
  currentPageNumberOptions = null;

  /**
   * Bound from [ModelsTable.pageSizeOptions](Components.ModelsTable.html#property_pageSizeOptions)
   *
   * @property pageSizeOptions
   * @type SelectOption[]
   * @default null
   */
  pageSizeOptions = null;

  /**
   * Bound from [ModelsTable.pageSize](Components.ModelsTable.html#property_pageSize)
   *
   * @property pageSize
   * @type number
   * @default 10
   */
  pageSize = 10;

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
   * @default null
   * @type boolean
   */
  showCurrentPageNumberSelect = null;

  /**
   * Bound from [ModelsTable.pagesCount](Components.ModelsTable.html#property_pagesCount)
   *
   * @property pagesCount
   * @type number
   * @default null
   */
  pagesCount = null;

  /**
   * Bound from [ModelsTable.showPageSize](Components.ModelsTable.html#property_showPageSize)
   *
   * @property showPageSize
   * @type boolean
   * @default null
   */
  showPageSize = null;

  /**
   * Bound from [ModelsTable.useNumericPagination](Components.ModelsTable.html#property_useNumericPagination)
   *
   * @property useNumericPagination
   * @type boolean
   * @default null
   */
  useNumericPagination = null;

  /**
   * Closure action [ModelsTable.goToPage](Components.ModelsTable.html#event_goToPage)
   *
   * @event goToPage
   */
  goToPage = null;

  /**
   * Closure action [ModelsTable.clearFilters](Components.ModelsTable.html#event_clearFilters)
   *
   * @event clearFilters
   */
  clearFilters = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;
}
