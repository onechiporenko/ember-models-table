import Component from '@glimmer/component';
import { action } from '@ember/object';

/**
 * @class FilterCellInput
 * @namespace Components
 * @extends Glimmer.Component
 */
export default class FilterCellInputComponent extends Component {
  @action
  noop() {}

  @action
  updateColumnFilterString(e) {
    this.args.changeColumnFilter(e.target.value, this.args.column);
  }

  @action
  clearColumnFilterString() {
    this.args.changeColumnFilter('', this.args.column);
  }
}
