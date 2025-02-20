import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class FilterCellSelectComponent extends Component {
  filterOptions = ['']
    .concat([
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
    ])
    .map((option) => ({
      value: option,
      label: option,
    }));

  @action
  onChangeColumnFilter(newValue) {
    this.args.changeColumnFilter(newValue, this.args.column);
  }

  @action
  clearFilter() {
    this.args.changeColumnFilter('', this.args.column);
  }
}
