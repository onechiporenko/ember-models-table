// BEGIN-SNIPPET display-data-changed-action
import { action } from '@ember/object';
import ExampleController from './example';

export default class DisplayDataChangedActionController extends ExampleController {
  actionData = null;

  @action
  myAction(data) {
    data.filteredContent = [
      `/* array with filtered records (${data.filteredContent.length}) */`,
    ];
    data.selectedItems = [
      `/* array with selected records (${data.selectedItems.length}) */`,
    ];
    this.actionData = data;
    // eslint-disable-next-line
    console.log(data);
  }
}
// END-SNIPPET
