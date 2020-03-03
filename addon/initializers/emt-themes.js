import DefaultTheme from '../themes/default';
import Bs3Theme from '../themes/bootstrap3';
import Bs4Theme from '../themes/bootstrap4';
import EmberBootstrapV3Theme from '../themes/ember-bootstrap-v3';
import EmberBootstrapV4Theme from '../themes/ember-bootstrap-v4';
import EmberPaperTheme from '../themes/ember-paper';
import PlainHtmlTheme from '../themes/plain-html';

export function initialize(application) {
  application.register('emt-theme:default', DefaultTheme, {singleton: false});
  application.register('emt-theme:bootstrap3', Bs3Theme, {singleton: false});
  application.register('emt-theme:bootstrap4', Bs4Theme, {singleton: false});
  application.register('emt-theme:ember-bootstrap-v3', EmberBootstrapV3Theme, {singleton: false});
  application.register('emt-theme:ember-bootstrap-v4', EmberBootstrapV4Theme, {singleton: false});
  application.register('emt-theme:ember-paper', EmberPaperTheme, {singleton: false});
  application.register('emt-theme:plain-html', PlainHtmlTheme, {singleton: false});
}

export default {
  name: 'emt-themes',
  initialize
};
