// BEGIN-SNIPPET delete-row-comp
import Component from '@glimmer/component';
import { action } from '@ember/object';

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
