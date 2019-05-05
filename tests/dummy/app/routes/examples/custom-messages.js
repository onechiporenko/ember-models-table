import ExampleRoute from './example';
import {set} from '@ember/object';
import getThemeClass from '../../utils/get-theme-class';

export default class CustomMessagesRoute extends ExampleRoute {

  setupController(controller) {
    super.setupController(...arguments);
    set(controller, 'themeInstance', getThemeClass(this).create({
      messages: {
        searchLabel: 'Se@rch',
        'columns-title': 'ColumnZ',
        'columns-showAll': 'Show Me All!',
        'columns-hideAll': 'Hide All!',
        'columns-restoreDefaults': 'Restore My Columns',
        tableSummary: 'Now are showing %@ - %@ of %@',
        allColumnsAreHidden: 'No visible columns, dude!',
        noDataToShow: 'No data. Sorry, bro...'
      }
    }));
  }
}
