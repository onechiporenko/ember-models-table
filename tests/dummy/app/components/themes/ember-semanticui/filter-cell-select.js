import Component from '@ember/component';
import layout from '../../../templates/components/themes/ember-semanticui/filter-cell-select';

export default class FilterCellSelectComponent extends Component {
  layout = layout;
  data = null;
  filterOptions = [''].concat(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']).map(option => ({
    value: option,
    label: option
  }))
}
