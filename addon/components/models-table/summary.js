import {className, layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, computed, get} from '@ember/object';
import {alias} from '@ember/object/computed';
import layout from '../../templates/components/models-table/summary';
import fmt from '../../utils/fmt';
import Noop from '../../mixins/no-op';

/**
 * Summary block used within [models-table/footer](Components.ModelsTableFooter.html).
 *
 * Value from [ModelsTable.messages.summary](Components.ModelsTable.html#property_messages) is used as a template for shown message. It's filled with `firstIndex`, `lastIndex` and `recordsCount`.
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
 * @uses Mixins.Noop
 */
@templateLayout(layout)
export default class SummaryComponent extends Component.extend(Noop) { // eslint-disable-line ember-es6-class/no-object-extend

  @className
  @alias('themeInstance.footerSummary') themeFooterSummaryClass;

  /**
   * @property paginationTypeClass
   * @type string
   * @private
   * @readonly
   */
  @className
  @computed('useNumericPagination', 'themeInstance.{footerSummaryNumericPagination,footerSummaryDefaultPagination}')
  get paginationTypeClass() {
    return get(this, 'useNumericPagination') ?
      get(this, 'themeInstance.footerSummaryNumericPagination') :
      get(this, 'themeInstance.footerSummaryDefaultPagination');
  }

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

  /**
   * Bound from {{#crossLink "Components.ModelsTable/arrangedContentLength:property"}}ModelsTable.arrangedContentLength{{/crossLink}}
   *
   * @property recordsCount
   * @type number
   * @default null
   */
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
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
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
   * @property useNumericPagination
   * @type boolean
   * @default null
   */
  useNumericPagination = null;

  /**
   * @property summary
   * @type string
   * @private
   * @readonly
   */
  @computed('firstIndex', 'lastIndex', 'recordsCount', 'msg')
  get summary() {
    return fmt(get(this, 'themeInstance.messages.tableSummary'), get(this, 'firstIndex'), get(this, 'lastIndex'), get(this, 'recordsCount'));
  }

  @action
  doClearFilters() {
    get(this, 'clearFilters')();
  }
}
