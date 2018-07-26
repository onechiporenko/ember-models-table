import DefaultTheme from '../themes/default';
import Bs3Theme from '../themes/bootstrap3';
import Bs4Theme from '../themes/bootstrap4';
import SemanticUiTheme from '../themes/semanticui';

export function initialize(application) {
  application.register('emt-theme:default', DefaultTheme, {singleton: false});
  application.register('emt-theme:bootstrap3', Bs3Theme, {singleton: false});
  application.register('emt-theme:bootstrap4', Bs4Theme, {singleton: false});
  application.register('emt-theme:semanticui', SemanticUiTheme, {singleton: false});
}

export default {
  name: 'emt-themes',
  initialize
};
