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
 * References to the following properties are yielded:
 *
 * * [summary](Components.ModelsTableSummary.html#property_summary) - message like "Show xx - yy from zzz"
 *
 * @class ModelsTableSummary
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class SummaryComponent extends Component {

  /**
   * @property themeFooterSummaryClass
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.footerSummary') themeFooterSummaryClass;

  /**
   * @property paginationTypeClass
   * @type string
   * @protected
   */
  @className
  @computed('useNumericPagination', 'themeInstance.{footerSummaryNumericPagination,footerSummaryDefaultPagination}')
  get paginationTypeClass() {
    return this.useNumericPagination ?
      get(this, 'themeInstance.footerSummaryNumericPagination') :
      get(this, 'themeInstance.footerSummaryDefaultPagination');
  }

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
   * Bound from [ModelsTable.arrangedContentLength](Components.ModelsTable.html#property_arrangedContentLength)
   *
   * @property recordsCount
   * @type number
   * @default null
   */
  recordsCount = null;

  /**
   * Bound from [ModelsTable.anyFilterUsed](Components.ModelsTable.html#property_anyFilterUsed)
   *
   * @property anyFilterUsed
   * @type boolean
   * @default null
   */
  anyFilterUsed = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Closure action [ModelsTable.clearFilters](Components.ModelsTable.html#event_clearFilters)
   *
   * @event clearFilters
   */
  clearFilters = null;

  /**
   * Bound from [ModelsTable.useNumericPagination](Components.ModelsTable.html#property_useNumericPagination)
   *
   * @property useNumericPagination
   * @type boolean
   * @default null
   */
  useNumericPagination = null;

  /**
   * @property summary
   * @type string
   * @protected
   */
  @computed('firstIndex', 'lastIndex', 'recordsCount', 'msg')
  get summary() {
    return fmt(get(this, 'themeInstance.tableSummaryMsg'), this.firstIndex, this.lastIndex, this.recordsCount);
  }

  /**
   * @property inputId
   * @type string
   * @protected
   */
  @computed('elementId')
  get inputId() {
    return `${this.elementId}-summary-input`;
  }

  /**
   * @event doClearFilters
   * @protected
   */
  @action
  doClearFilters() {
    this.clearFilters();
  }

  /**
   * @event noop
   * @protected
   */
  @action
  noop() {}
}
