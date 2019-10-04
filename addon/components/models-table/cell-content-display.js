import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/cell-content-display';
import {get, set} from '@ember/object';

/**
 * Default cell-component. Used to print property-value (`row` - source, `column.propertyName` - key).
 *
 * Properties and event-handlers from [models-table/cell](Components.ModelsTableCell.html) are bound here
 *
 * @namespace Components
 * @class ModelsTableCellContentDisplay
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class CellContentDisplayComponent extends Component {
  init() {
    set(this, 'tagName', get(this, 'themeInstance.tagNames.cell-content'));
    super.init(...arguments);
  }
}
