import SemanticUiTheme from './semanticui';

/**
 * @class EmberSemanticUI
 * @namespace Themes
 * @extends Themes.SemanticUI
 */
export default class EmberSemanticUiTheme extends SemanticUiTheme {
  componentsPath = 'models-table/themes/ember-semanticui/';

  columnsDropdownComponent = 'models-table/themes/semanticui/columns-dropdown';
  globalFilterComponent = 'models-table/themes/semanticui/global-filter';
  dataGroupBySelectComponent = 'models-table/themes/semanticui/data-group-by-select';
  paginationSimpleComponent = 'models-table/themes/semanticui/pagination-simple';
  paginationNumericComponent = 'models-table/themes/semanticui/pagination-numeric';
  summaryComponent = 'models-table/themes/semanticui/summary';
}
