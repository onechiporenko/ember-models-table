import ExampleRoute from './example';
import {set} from '@ember/object';
import getThemeClass from '../../utils/get-theme-class';

export default class CustomMessagesRoute extends ExampleRoute {

  setupController(controller) {
    super.setupController(...arguments);
    set(controller, 'themeInstance', getThemeClass(this).create({
      searchLabelMsg: 'Se@rch',
      columnsTitleMsg: 'ColumnZ',
      columnsShowAllMsg: 'Show Me All!',
      columnsHideAllMsg: 'Hide All!',
      columnsRestoreDefaultsMsg: 'Restore My Columns',
      tableSummaryMsg: 'Now are showing %@ - %@ of %@',
      allColumnsAreHiddenMsg: 'No visible columns, dude!',
      noDataToShowMsg: 'No data. Sorry, bro...'
    }));
  }
}
