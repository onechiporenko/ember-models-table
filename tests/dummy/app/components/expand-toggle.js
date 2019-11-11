import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action} from '@ember/object';
import layout from '../templates/components/expand-toggle';

export default
@templateLayout(layout)
class ExpandToggleComponent extends Component {

  @action
  doCollapseRow(index, record) {
    this.collapseRow(index, record);
  }

  @action
  doExpandRow(index, record) {
    this.expandRow(index, record);
  }
}
