import {className, layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, computed, get} from '@ember/object';
import {alias} from '@ember/object/computed';
import layout from '../../templates/components/models-table/summary';
import fmt from '../../utils/fmt';

/**
 * Summary block used within [models-table/footer](Components.ModelsTableFooter.html).
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.Footer as |Footer|>
 *     <Footer.Summary />
 *     {{! ... }}
 *   </MT.Footer>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * @class ModelsTableSummary
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class SummaryComponent extends Component {

  @className
  @alias('themeInstance.footerSummary') themeFooterSummaryClass;

  /**
   * @type string
   * @private
   * @readonly
   */
  @className
  @computed('useNumericPagination', 'themeInstance.{footerSummaryNumericPagination,footerSummaryDefaultPagination}')
  get paginationTypeClass() {
    return this.useNumericPagination ?
      get(this, 'themeInstance.footerSummaryNumericPagination') :
      get(this, 'themeInstance.footerSummaryDefaultPagination');
  }

  /**
   * Bound from {{#crossLink "Components.ModelsTable/firstIndex:property"}}ModelsTable.firstIndex{{/crossLink}}
   *
   * @type number
   * @default null
   */
  firstIndex = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/lastIndex:property"}}ModelsTable.lastIndex{{/crossLink}}
   *
   * @type number
   * @default null
   */
  lastIndex = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/arrangedContentLength:property"}}ModelsTable.arrangedContentLength{{/crossLink}}
   *
   * @type number
   * @default null
   */
  recordsCount = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/anyFilterUsed:property"}}ModelsTable.anyFilterUsed{{/crossLink}}
   *
   * @default null
   */
  anyFilterUsed = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Closure action {{#crossLink "Components.ModelsTable/actions.clearFilters:method"}}ModelsTable.actions.clearFilters{{/crossLink}}
   *
   * @event clearFilters
   */
  clearFilters = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/useNumericPagination:property"}}ModelsTable.useNumericPagination{{/crossLink}}
   *
   * @default null
   */
  useNumericPagination = null;

  /**
   * @type string
   * @private
   * @readonly
   */
  @computed('firstIndex', 'lastIndex', 'recordsCount', 'msg')
  get summary() {
    return fmt(get(this, 'themeInstance.tableSummaryMsg'), this.firstIndex, this.lastIndex, this.recordsCount);
  }

  /**
   * @type string
   * @private
   */
  @computed('elementId')
  get inputId() {
    return `${this.elementId}-summary-input`;
  }

  @action
  doClearFilters() {
    this.clearFilters();
  }

  @action
  noop() {}
}
