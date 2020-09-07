import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action, set} from '@ember/object';
import layout from '../templates/components/filter-cell-input';

/**
 * @class FilterCellInput
 * @namespace Components
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class FilterCellInputComponent extends Component {

  @action
  noop() {}

  @action
  updateColumnFilterString(e) {
    set(this, 'column.filterString', e.target.value);
  }

  @action
  clearColumnFilterString() {
    set(this, 'column.filterString', '');
  }
}
