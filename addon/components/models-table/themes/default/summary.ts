import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import fmt from '../../../../utils/emt/fmt';
import DefaultTheme from '../../../../services/emt-themes/default';

export interface SummaryArgs {
  /**
   * Bound from [[Core.ModelsTable.themeInstance | ModelsTable.themeInstance]]
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from [[Core.ModelsTable.firstIndex | ModelsTable.firstIndex]]
   */
  firstIndex: number;
  /**
   * Bound from [[Core.ModelsTable.lastIndex | ModelsTable.lastIndex]]
   */
  lastIndex: number;
  /**
   * Bound from [[Core.ModelsTable.arrangedContentLength | ModelsTable.arrangedContentLength]]
   */
  recordsCount: number;
  /**
   * Bound from [[Core.ModelsTable.anyFilterUsed | ModelsTable.anyFilterUsed]]
   */
  anyFilterUsed: boolean;
  /**
   * Bound from [[Core.ModelsTable.useNumericPagination | ModelsTable.useNumericPagination]]
   */
  useNumericPagination: boolean;
  /**
   * Bound from [[Core.ModelsTable.clearFilters | ModelsTable.clearFilters]]
   *
   * @event clearFilters
   */
  clearFilters: () => void;
}

/**
 * Summary block used within [[DefaultTheme.Footer]].
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
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
 * * [[summary]] - message like "Show xx - yy from zzz"
 */
export default class Summary extends Component<SummaryArgs> {
  protected elementId = guidFor(this);

  protected get paginationTypeClass(): string {
    return this.args.useNumericPagination
      ? this.args.themeInstance.footerSummaryNumericPagination
      : this.args.themeInstance.footerSummaryDefaultPagination;
  }

  /**
   * Summary message like `A - B of C`
   */
  get summary(): string {
    return fmt(
      this.args.themeInstance.tableSummaryMsg,
      this.args.firstIndex,
      this.args.lastIndex,
      this.args.recordsCount
    );
  }

  protected get inputId(): string {
    return `${this.elementId}-summary-input`;
  }

  /**
   * @event doClearFilters
   */
  @action
  protected doClearFilters(e: Event): void {
    e?.stopPropagation?.();
    e?.preventDefault?.();
    this.args.clearFilters();
  }

  /**
   * @event noop
   */
  @action
  protected noop(): void {
    // do nothing.
  }
}
