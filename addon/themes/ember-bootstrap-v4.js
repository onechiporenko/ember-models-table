import Bootstrap4Theme from './bootstrap4';

/**
 * @class EmberBootstrap4Theme
 * @namespace Themes
 * @extends Themes.Bootstrap4Theme
 */
export default class EmberBootstrap4Theme extends Bootstrap4Theme {

  /**
   * @property columnsDropdownComponent
   * @type string
   * @default 'models-table/themes/ember-bootstrap-v4/columns-dropdown'
   */

  /**
   * @property dataGroupBySelectComponent
   * @type string
   * @default 'models-table/themes/ember-bootstrap-v4/data-group-by-select'
   */

  /**
   * @property globalFilterComponent
   * @type string
   * @default 'models-table/themes/ember-bootstrap-v4/global-filter'
   */

  /**
   * @property rowFilteringCellComponent
   * @type string
   * @default 'models-table/themes/ember-bootstrap-v4/row-filtering-cell'
   */

  /**
   * @property summaryComponent
   * @type string
   * @default 'models-table/themes/ember-bootstrap-v4/row-filtering-summary'
   */

  /**
   * @property componentsPath
   * @type string
   * @default 'models-table/themes/ember-bootstrap-v4/'
   */
  componentsPath = 'models-table/themes/ember-bootstrap-v4/';

  /**
   * @property sortGroupedPropertyBtn
   * @type string
   * @default 'btn btn-link'
   */
  sortGroupedPropertyBtn = 'btn btn-link';
}
