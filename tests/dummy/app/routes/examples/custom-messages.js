import ExampleRoute from './example';
import BootstrapTheme from 'ember-models-table/themes/bootstrap3';
import {set} from '@ember/object';

export default ExampleRoute.extend({
  setupController(controller) {
    this._super(...arguments);
    set(controller, 'themeInstance', BootstrapTheme.create({
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
});
