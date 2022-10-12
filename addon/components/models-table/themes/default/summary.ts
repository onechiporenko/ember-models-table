import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import fmt from '../../../../utils/emt/fmt';
import DefaultTheme from '../../../../services/emt-themes/default';

export interface SummaryArgs {
  /**
   * Bound from {@link Core.ModelsTable.themeInstance | ModelsTable.themeInstance}
   */
  themeInstance: DefaultTheme;
  /**
   * Bound from {@link Core.ModelsTable.firstIndex | ModelsTable.firstIndex}
   */
  firstIndex: number;
  /**
   * Bound from {@link Core.ModelsTable.lastIndex | ModelsTable.lastIndex}
   */
  lastIndex: number;
  /**
   * Bound from {@link Core.ModelsTable.arrangedContentLength | ModelsTable.arrangedContentLength}
   */
  recordsCount: number;
  /**
   * Bound from {@link Core.ModelsTable.anyFilterUsed | ModelsTable.anyFilterUsed}
   */
  anyFilterUsed: boolean;
  /**
   * Bound from {@link Core.ModelsTable.useNumericPagination | ModelsTable.useNumericPagination}
   */
  useNumericPagination: boolean;
  /**
   * Bound from {@link Core.ModelsTable.clearFilters | ModelsTable.clearFilters}
   *
   * @event clearFilters
   */
  clearFilters: () => void;
}

/**
 * Summary block used within {@link DefaultTheme.Footer}.
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
 * * {@link summary} - message like "Show xx - yy from zzz"
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
