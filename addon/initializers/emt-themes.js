import DefaultTheme from '../themes/default';
import Bs3Theme from '../themes/bootstrap3';
import Bs4Theme from '../themes/bootstrap4';
import SemanticUiTheme from '../themes/semanticui';
import EmberSemanticUiTheme from '../themes/ember-semanticui';
import EmberBootstrapV3 from '../themes/ember-bootstrap-v3';
import EmberBootstrapV4 from '../themes/ember-bootstrap-v4';
import EmberPaper from '../themes/ember-paper';

export function initialize(application) {
  application.register('emt-theme:default', DefaultTheme, {singleton: false});
  application.register('emt-theme:bootstrap3', Bs3Theme, {singleton: false});
  application.register('emt-theme:bootstrap4', Bs4Theme, {singleton: false});
  application.register('emt-theme:semanticui', SemanticUiTheme, {singleton: false});
  application.register('emt-theme:ember-semanticui', EmberSemanticUiTheme, {singleton: false});
  application.register('emt-theme:ember-bootstrap-v3', EmberBootstrapV3, {singleton: false});
  application.register('emt-theme:ember-bootstrap-v4', EmberBootstrapV4, {singleton: false});
  application.register('emt-theme:ember-paper', EmberPaper, {singleton: false});
}

export default {
  name: 'emt-themes',
  initialize
};
