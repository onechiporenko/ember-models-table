import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {computed, get} from '@ember/object';
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
 *     <Footer.SizeSelect />
 *     {{! ... }}
 *   </MT.Footer>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * @class ModelsTablePageSizeSelect
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class PageSizeSelectComponent extends Component {
  /**
   * Bound from {{#crossLink "Components.ModelsTable/pageSizeOptions:property"}}ModelsTable.pageSizeOptions{{/crossLink}}
   *
   * @property pageSizeOptions
   * @type object[]
   * @default null
   */
  pageSizeOptions = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/pageSize:property"}}ModelsTable.pageSize{{/crossLink}}
   *
   * @property pageSize
   * @type number
   * @default null
   */
  pageSize = null;

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
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
    return `${get(this, 'elementId')}-page-size-select`;
  }

}
