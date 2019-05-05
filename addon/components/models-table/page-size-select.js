import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/page-size-select';

/**
 * Dropdown with page size values used within [models-table/footer](Components.ModelsTableFooter.html).
 *
 * Value from [ModelsTable.pageSizeOptions](Components.ModelsTable.html#property_pageSizeOptions) is used as a list of dropdown-options.
 *
 * Usage example:
 *
 * ```hbs
 * {{#models-table data=data columns=columns as |mt|}}
 *   {{#mt.footer as |footer|}}
 *     {{footer.size-select}}
 *     {{! ... }}
 *   {{/mt.footer}}
 *   {{! .... }}
 * {{/models-table}}
 * ```
 *
 * @class ModelsTablePageSizeSelect
 * @namespace Components
 * @extends Ember.Component
 */
@templateLayout(layout)
export default class PageSizeSelectComponent extends Component {
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
}
