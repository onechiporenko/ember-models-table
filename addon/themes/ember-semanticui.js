import SemanticTheme from './semanticui';

/**
 * @class EmberSemanticUI
 * @namespace Themes
 * @extends Themes.SemanticUI
 */
export default class EmberSemanticTheme extends SemanticTheme {
  components = {
    'select': 'models-table/themes/ember-semanticui/select',
    'row-filtering-cell': 'models-table/themes/ember-semanticui/row-filtering-cell'
  }
}
