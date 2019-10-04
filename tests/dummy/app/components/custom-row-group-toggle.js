import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, get} from '@ember/object';
import layout from '../templates/components/custom-row-group-toggle';

export default
@templateLayout(layout)
class CustomRowGroupToggleComponent extends Component {

  @action
  doToggleGroupedRows() {
    get(this, 'toggleGroupedRows')(get(this, 'groupedValue'));
  }

  @action
  doToggleGroupedRowsSelection(e) {
    get(this, 'toggleGroupedRowsSelection')(get(this, 'groupedValue'));
    e.stopPropagation();
  }

  @action
  doToggleGroupedRowsExpands(e) {
    get(this, 'toggleGroupedRowsExpands')(get(this, 'groupedValue'));
    e.stopPropagation();
  }
}
