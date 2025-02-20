import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

import { type GlobalFilterSignature } from '../../../../interfaces/components/models-table/themes/default/global-filter-signature.interface';

/**
 * Global filter element used within {@link Core.ModelsTable | ModelsTable}.
 *
 * Its value is used for all data-items and for each columns {@link Core.ModelsTableColumn.filterField | filterField}.
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.GlobalFilter />
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * Block usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.GlobalFilter>
 *     {{input value=MT.globalFilter}}
 *     <button disabled={{if MT.globalFilterUsed "disabled"}} {{on "click" this.clearGlobalFilter}}>
 *       Clear Global Filter
 *     </button>
 *   </MT.GlobalFilter>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 */
export default class GlobalFilter extends Component<GlobalFilterSignature> {
  protected elementId = guidFor(this);

  protected get inputId(): string {
    return `${this.elementId}-global-filter`;
  }

  protected getNewFilterValueFromEvent(e: Event | string): string {
    return typeof e === 'object'
      ? ((e as Event).target as HTMLInputElement).value
      : `${e}`;
  }

  /**
   * @event noop
   */
  @action
  protected noop(): void {
    // do nothing.
  }

  /**
   * @event updateGlobalFilterString
   */
  @action
  protected updateGlobalFilterString(e: Event | string): boolean {
    const newFilterValue = this.getNewFilterValueFromEvent(e);
    this.args.changeGlobalFilter(newFilterValue);
    return false;
  }

  /**
   * @event clearGlobalFilter
   */
  @action
  protected clearGlobalFilter(e: Event): boolean {
    e?.stopPropagation?.();
    this.args.changeGlobalFilter('');
    return false;
  }
}
