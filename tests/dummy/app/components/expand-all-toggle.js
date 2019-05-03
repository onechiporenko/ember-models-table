import Component from '@ember/component';
import {action, get} from '@ember/object';
import layout from '../templates/components/expand-all-toggle';

export default class ExpandAllToggleComponent extends Component {
  layout = layout;

  @action
  doCollapseAllRows() {
    get(this, 'collapseAllRows')();
  }

  @action
  doExpandAllRows() {
    get(this, 'expandAllRows')();
  }
}