import Component from '@glimmer/component';
import { action } from '@ember/object';

/**
 * @class FilterCellInput
 * @namespace Components
 */
export default class FilterCellInputComponent extends Component {
  @action
  noop() {
    // do nothing.
  }

  @action
  updateColumnFilterString(e) {
    this.args.changeColumnFilter(e.target.value, this.args.column);
  }

  @action
  clearColumnFilterString() {
    this.args.changeColumnFilter('', this.args.column);
  }
}
