import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/global-filter';
import {action, computed} from '@ember/object';

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
 */
export default
@templateLayout(layout)
class GlobalFilterComponent extends Component {
  /**
   * Bound from {{#crossLink "Components.ModelsTable/filterString:property"}}ModelsTable.filterString{{/crossLink}}
   *
   * @type string
   * @default null
   */
  value = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/globalFilterUsed:property"}}ModelsTable.globalFilterUsed{{/crossLink}}
   *
   * @default null
   */
  globalFilterUsed = null;


  /**
   * @type string
   * @private
   */
  @computed('elementId')
  get inputId() {
    return `${this.elementId}-global-filter`;
  }

  @action
  noop() {}

}
