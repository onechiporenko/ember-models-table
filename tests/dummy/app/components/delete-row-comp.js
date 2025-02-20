// BEGIN-SNIPPET delete-row-comp
import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class DeleteRowComponent extends Component {
  @action
  onClick(event) {
    if (this.args.onClick) {
      this.args.onClick(this.args.record);
      event?.stopPropagation();
    }
  }
}
// END-SNIPPET
