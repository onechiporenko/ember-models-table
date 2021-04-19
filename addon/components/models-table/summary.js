import Component from '@glimmer/component';
import { action } from '@ember/object';
import fmt from '../../utils/emt/fmt';

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
 * @extends Glimmer.Component
 */
export default class SummaryComponent extends Component {
  /**
   * @property paginationTypeClass
   * @type string
   * @protected
   */
  get paginationTypeClass() {
    return this.useNumericPagination
      ? this.args.themeInstance.footerSummaryNumericPagination
      : this.args.themeInstance.footerSummaryDefaultPagination;
  }

  /**
   * @property summary
   * @type string
   * @protected
   */
  get summary() {
    return fmt(
      this.args.themeInstance.tableSummaryMsg,
      this.args.firstIndex,
      this.args.lastIndex,
      this.args.recordsCount
    );
  }

  /**
   * @property inputId
   * @type string
   * @protected
   */
  get inputId() {
    return `${this.elementId}-summary-input`;
  }

  /**
   * @event doClearFilters
   * @param {Event} e
   * @protected
   */
  @action
  doClearFilters(e) {
    e?.stopPropagation();
    this.args.clearFilters();
  }

  /**
   * @event noop
   * @protected
   */
  @action
  noop() {}
}
