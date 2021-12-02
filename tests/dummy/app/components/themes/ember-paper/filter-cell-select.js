import Component from '@glimmer/component';
import { action } from '@ember/object';

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
    return false;
  }

  @action
  clearFilter(e) {
    e?.stopPropagation?.();
    this.args.changeColumnFilter('', this.args.column);
    return false;
  }
}
