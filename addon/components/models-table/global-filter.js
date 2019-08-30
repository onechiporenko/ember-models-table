import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import Noop from '../../mixins/no-op';
import layout from '../../templates/components/models-table/global-filter';
import {computed, get} from '@ember/object';

/**
 * Global filter element used within [models-table](Components.ModelsTable.html).
 *
 * Its value is used for all data-items and for each columns `propertyName`.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.GlobalFilter />
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * @namespace Components
 * @class ModelsTableGlobalFilter
 * @extends Ember.Component
 * @uses Mixins.Noop
 */
@templateLayout(layout)
export default class GlobalFilterComponent extends Component.extend(Noop) { // eslint-disable-line ember-es6-class/no-object-extend
  /**
   * Bound from {{#crossLink "Components.ModelsTable/filterString:property"}}ModelsTable.filterString{{/crossLink}}
   *
   * @property value
   * @type string
   * @default null
   */
  value = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/globalFilterUsed:property"}}ModelsTable.globalFilterUsed{{/crossLink}}
   *
   * @property globalFilterUsed
   * @type boolean
   * @default null
   */
  globalFilterUsed = null;


  /**
   * @property inputId
   * @type string
   * @private
   */
  @computed('elementId')
  get inputId() {
    return `${get(this, 'elementId')}-global-filter`;
  }

}
