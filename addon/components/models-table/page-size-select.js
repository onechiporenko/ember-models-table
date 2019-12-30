import {className, layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {computed} from '@ember/object';
import {alias} from '@ember/object/computed';
import layout from '../../templates/components/models-table/page-size-select';

/**
 * Dropdown with page size values used within [models-table/footer](Components.ModelsTableFooter.html).
 *
 * Value from [ModelsTable.pageSizeOptions](Components.ModelsTable.html#property_pageSizeOptions) is used as a list of dropdown-options.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
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
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
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
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class PageSizeSelectComponent extends Component {

  /**
   * @property pageSizeWrapper
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.pageSizeWrapper')
  pageSizeWrapper;

  /**
   * Bound from [ModelsTable.pageSizeOptions](Components.ModelsTable.html#property_pageSizeOptions)
   *
   * @property pageSizeOptions
   * @type SelectOption[]
   * @default null
   */
  pageSizeOptions = null;

  /**
   * Bound from [ModelsTable.pageSize](Components.ModelsTable.html#property_pageSize)
   *
   * @property pageSize
   * @type number
   * @default 10
   */
  pageSize = 10;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * @property inputId
   * @type string
   * @private
   */
  @computed('elementId')
  get inputId() {
    return `${this.elementId}-page-size-select`;
  }

}
