import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { type PageSizeSelectSignature } from '../../../../interfaces/components/models-table/themes/default/page-size-select-signature.interface';

/**
 * Dropdown with page size values used within {@link DefaultTheme.TableFooter | TableFooter}.
 *
 * Value from {@link Core.ModelsTable.pageSizeOptions | ModelsTable.pageSizeOptions} is used as a list of dropdown-options.
 *
 * Usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Footer as |Footer|>
 *     <Footer.PageSizeSelect />
 *     {{! ... }}
 *   </MT.Footer>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 * Block usage example:
 *
 * ```html
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Footer as |Footer|>
 *     <Footer.PageSizeSelect as |SizeSelectBlock|>
 *       <SizeSelectBlock.Select />
 *     </Footer.PageSizeSelect>
 *   </MT.Footer>
 * </ModelsTable>
 * ```
 * References to the following contextual components are yielded:
 *
 * * {@link DefaultTheme.Select | Select} - selectbox with list of available page size options
 */
export default class PageSizeSelect extends Component<PageSizeSelectSignature> {
  protected elementId = guidFor(this);

  protected get inputId(): string {
    return `${this.elementId}-page-size-select`;
  }
}
