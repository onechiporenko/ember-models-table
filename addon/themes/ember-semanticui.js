import SemanticUiTheme from './semanticui';

/**
 * @class EmberSemanticUITheme
 * @namespace Themes
 * @extends Themes.SemanticUITheme
 */
export default class EmberSemanticUiTheme extends SemanticUiTheme {

  /**
   * @property componentsPath
   * @type string
   * @default 'models-table/themes/ember-semanticui/'
   */
  componentsPath = 'models-table/themes/ember-semanticui/';

  /**
   * @property columnsDropdownComponent
   * @type string
   * @default 'models-table/themes/semanticui/columns-dropdown'
   */
  columnsDropdownComponent = 'models-table/themes/semanticui/columns-dropdown';

  /**
   * @property globalFilterComponent
   * @type string
   * @default 'models-table/themes/semanticui/global-filter'
   */
  globalFilterComponent = 'models-table/themes/semanticui/global-filter';

  /**
   * @property dataGroupBySelectComponent
   * @type string
   * @default 'models-table/themes/semanticui/data-group-by-select'
   */
  dataGroupBySelectComponent = 'models-table/themes/semanticui/data-group-by-select';

  /**
   * @property paginationSimpleComponent
   * @type string
   * @default 'models-table/themes/semanticui/pagination-simple'
   */
  paginationSimpleComponent = 'models-table/themes/semanticui/pagination-simple';

  /**
   * @property paginationNumericComponent
   * @type string
   * @default 'models-table/themes/semanticui/pagination-numeric'
   */
  paginationNumericComponent = 'models-table/themes/semanticui/pagination-numeric';

  /**
   * @property summaryComponent
   * @type string
   * @default 'models-table/themes/semanticui/summary'
   */
  summaryComponent = 'models-table/themes/semanticui/summary';
}
