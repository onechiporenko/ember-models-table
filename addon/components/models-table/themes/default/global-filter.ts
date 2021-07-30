import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import DefaultTheme from '../../../../services/emt-themes/default';

export interface GlobalFilterArgs {
  /**
   * Bound from [[Core.ModelsTable.filterString | ModelsTable.filterString]]
   */
  value: string;
  /**
   * Bound from [[Core.ModelsTable.globalFilterUsed | ModelsTable.globalFilterUsed]]
   */
  globalFilterUsed: boolean;
  /**
   * Bound from [[Core.ModelsTable.themeInstance | ModelsTable.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from [[Core.ModelsTable.changeGlobalFilter | ModelsTable.changeGlobalFilter]]
   *
   * @event changeGlobalFilter
   */
  changeGlobalFilter: (v: string) => void;
}

/**
 * Global filter element used within [[Core.ModelsTable | ModelsTable]].
 *
 * Its value is used for all data-items and for each columns [[Core.ModelsTableColumn.filterField | filterField]].
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
export default class GlobalFilter extends Component<GlobalFilterArgs> {
  protected elementId = guidFor(this);

  protected get inputId(): string {
    return `${this.elementId}-global-filter`;
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
    let newFilterValue;
    if (typeof e === 'object') {
      newFilterValue = (<HTMLInputElement>e.target).value;
      e?.stopPropagation?.();
    } else {
      newFilterValue = e;
    }
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
