import Component from '@ember/component';
import {action, get} from '@ember/object';
import layout from '../templates/components/expand-toggle';

export default class ExpandToggleComponent extends Component {
  layout = layout;

  @action
  doCollapseRow(index, record) {
    get(this, 'collapseRow')(index, record);
  }

  @action
  doExpandRow(index, record) {
    get(this, 'expandRow')(index, record);
  }
}
