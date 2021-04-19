import Component from '@glimmer/component';
import { set } from '@ember/object';

/**
 * Component for cells in the edit-mode.
 *
 * Properties and event-handlers from [models-table/cell](Components.ModelsTableCell.html) are bound here
 *
 * @namespace Components
 * @class ModelsTableCellContentEdit
 * @extends Glimmer.Component
 */
export default class CellContentEditComponent extends Component {
  constructor(owner, args) {
    super(owner, args);
    if (this.args.themeInstance) {
      set(this, 'tagName', this.args.themeInstance.cellContentTagName);
    }
  }
}
