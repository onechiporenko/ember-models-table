import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action} from '@ember/object';
import layout from '../templates/components/expand-all-toggle';

export default
@templateLayout(layout)
class ExpandAllToggleComponent extends Component {

  @action
  doCollapseAllRows() {
    this.collapseAllRows();
  }

  @action
  doExpandAllRows() {
    this.expandAllRows();
  }
}
