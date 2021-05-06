import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

/**
 * Dropdown with page size values used within [models-table/footer](Components.ModelsTableFooter.html).
 *
 * Value from [ModelsTable.pageSizeOptions](Components.ModelsTable.html#property_pageSizeOptions) is used as a list of dropdown-options.
 *
 * Usage example:
 *
 * ```hbs
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
 * ```hbs
 * <ModelsTable @data={{this.data}} @columns={{this.columns}} as |MT|>
 *   <MT.Footer as |Footer|>
 *     <Footer.PageSizeSelect as |SizeSelectBlock|>
 *       <SizeSelectBlock.Select />
 *     </Footer.PageSizeSelect>
 *   </MT.Footer>
 * </ModelsTable>
 * ```
 * ModelsTablePageSizeSelect yields references to the following contextual components:
 *
 * * Select - selectbox with list of available page size options
 *
 * @class ModelsTablePageSizeSelect
 * @namespace Components
 * @extends Glimmer.Component
 */
export default class PageSizeSelectComponent extends Component {
  elementId = guidFor(this);

  /**
   * @property inputId
   * @type string
   * @private
   */
  get inputId() {
    return `${this.elementId}-page-size-select`;
  }
}
