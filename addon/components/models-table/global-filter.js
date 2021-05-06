import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';

/**
 * Global filter element used within [models-table](Components.ModelsTable.html).
 *
 * Its value is used for all data-items and for each columns `propertyName`.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.GlobalFilter />
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * Block usage example:
 *
 * ```hbs
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.GlobalFilter>
 *     {{input value=MT.globalFilter}}
 *     <button disabled={{if MT.globalFilterUsed "disabled"}} {{action (mut MT.globalFilter) ""}}>
 *       Clear Global Filter
 *     </button>
 *   </MT.GlobalFilter>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * @namespace Components
 * @class ModelsTableGlobalFilter
 * @extends Glimmer.Component
 */
export default class GlobalFilterComponent extends Component {
  elementId = guidFor(this);

  /**
   * @property inputId
   * @type string
   * @private
   */
  get inputId() {
    return `${this.elementId}-global-filter`;
  }

  /**
   * @event noop
   * @protected
   */
  @action
  noop() {}

  /**
   * @event updateGlobalFilterString
   * @protected
   * @param {Event} e
   */
  @action
  updateGlobalFilterString(e) {
    const newFilterValue = e.target ? e.target.value : e;
    e?.stopPropagation?.();
    this.args.changeGlobalFilter(newFilterValue);
    return false;
  }

  /**
   * @event clearGlobalFilter
   * @protected
   * @param {Event} e
   */
  @action
  clearGlobalFilter(e) {
    e?.stopPropagation?.();
    this.args.changeGlobalFilter('');
    return false;
  }
}
