// BEGIN-SNIPPET display-data-changed-action
import Controller from '@ember/controller';
import {set, get} from '@ember/object';
import {action} from '@ember/object';

export default class DisplayDataChangedActionController extends Controller {

  actionData = null;

  @action
  myAction(data) {
    data.filteredContent = [
      `/* array with filtered records (${get(data, 'filteredContent.length')}) */`
    ];
    data.selectedItems = [
      `/* array with selected records (${get(data, 'selectedItems.length')}) */`
    ];
    set(this, 'actionData', data);
    // eslint-disable-next-line
    console.log(data);
  }

}
// END-SNIPPET
