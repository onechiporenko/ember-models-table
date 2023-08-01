import Component from '@glimmer/component';
import { FooterSignature } from '../../../../interfaces/components/models-table/themes/default/footer-signature.interface';

/**
 * Footer block used within {@link Core.ModelsTable | ModelsTable}.
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Footer />
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * Usage example with a block context:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Footer as |Footer|>
 *     <Footer.Summary />
 *     <Footer.PageSizeSelect />
 *     {{#if useNumericPagination}}
 *       <Footer.PaginationNumeric />
 *     {{else}}
 *       <Footer.PaginationSimple />
 *     {{/if}}
 *   </MT.Footer>
 * </ModelsTable>
 * ```
 *
 * ModelsTableFooter yields references to the following contextual components:
 *
 * * {@link DefaultTheme.Summary | Summary} - component with summary info about table data. It also contains button to clear all filters applied to the table
 * * {@link DefaultTheme.PageSizeSelect | PageSizeSelect} - component with a page sizes dropdown. It allows to select number if records shown on page
 * * {@link DefaultTheme.PaginationNumeric | PaginationNumeric} - component with a table navigation. It allows to move to the page by its number
 * * {@link DefaultTheme.PaginationSimple | PaginationSimple} - component with a table navigation. It allows to move to the first, last, prev and next pages (this four buttons are shown always)
 *
 * Check own docs for each component to get detailed info.
 */
export default class Footer extends Component<FooterSignature> {}
