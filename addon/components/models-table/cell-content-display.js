import Component from '@glimmer/component';
import { set } from '@ember/object';

/**
 * Default cell-component. Used to print property-value (`row` - source, `column.propertyName` - key).
 *
 * Properties and event-handlers from [models-table/cell](Components.ModelsTableCell.html) are bound here
 *
 * @namespace Components
 * @class ModelsTableCellContentDisplay
 * @extends Glimmer.Component
 */
export default class CellContentDisplayComponent extends Component {
  constructor(owner, args) {
    super(owner, args);
    if (this.args.themeInstance) {
      set(this, 'tagName', this.args.themeInstance.cellContentTagName);
    }
  }
}
