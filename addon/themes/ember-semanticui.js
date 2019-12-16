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
   * @property cellContentEditComponent
   * @type string
   * @default 'models-table/themes/semanticui/cell-content-edit'
   */
  cellContentEditComponent = 'models-table/themes/semanticui/cell-content-edit';

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
   * @property expandAllToggleComponent
   * @type string
   * @default 'models-table/themes/semanticui/expand-all-toggle'
   */
  expandAllToggleComponent = 'models-table/themes/semanticui/expand-all-toggle';

  /**
   * @property expandToggleComponent
   * @type string
   * @default 'models-table/themes/semanticui/expand-toggle'
   */
  expandToggleComponent = 'models-table/themes/semanticui/expand-toggle';

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
   * @property rowSelectCheckboxAllComponent
   * @type string
   * @default 'models-table/themes/semanticui/row-select-all-checkbox'
   */
  rowSelectAllCheckboxComponent = 'models-table/themes/semanticui/row-select-all-checkbox';

  /**
   * @property rowSelectCheckboxComponent
   * @type string
   * @default 'models-table/themes/semanticui/row-select-checkbox'
   */
  rowSelectCheckboxComponent = 'models-table/themes/semanticui/row-select-checkbox';

  /**
   * @property summaryComponent
   * @type string
   * @default 'models-table/themes/semanticui/summary'
   */
  summaryComponent = 'models-table/themes/semanticui/summary';
}
