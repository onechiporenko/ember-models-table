import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import layout from '../../templates/components/models-table/cell-content-edit';
import { get, set } from '@ember/object';

/**
 * Component for cells in the edit-mode.
 *
 * Properties and event-handlers from [models-table/cell](Components.ModelsTableCell.html) are bound here
 *
 * @namespace Components
 * @class ModelsTableCellContentEdit
 * @extends Ember.Component
 */
@templateLayout(layout)
export default class CellContentEditComponent extends Component {
  init() {
    set(this, 'tagName', get(this, 'themeInstance.tagNames.cell-content'));
    super.init(...arguments);
  }
}
