// BEGIN-SNIPPET delete-row-comp
import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../templates/components/delete-row-comp';

export default
@templateLayout(layout)
class DeleteRowComponent extends Component {

  record = null;

  click(event) {
    if (this.onClick) {
      this.onClick(this.record);
      event.stopPropagation();
    }
  }

}
// END-SNIPPET
