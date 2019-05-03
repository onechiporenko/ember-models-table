import Component from '@ember/component';
import {get, set} from '@ember/object';
import layout from '../../templates/components/models-table/select';

/**
 * Select-dropdown with a list of options. Used as page-size select and for select-filters.
 *
 * @class ModelsTableSelect
 * @namespace Components
 * @extends Ember.Component
 * @private
 */
export default class SelectComponent extends Component {

  layout = layout;

  tagName = 'select';

  classNameBindings = ['cssPropertyName', 'themeInstance.input', 'themeInstance.select'];

  /**
   * @type string
   * @default ''
   * @property type
   */
  type = '';

  /**
   * @type string
   * @default ''
   * @property cssPropertyName
   */
  cssPropertyName = '';

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  change() {
    let val = this.element.querySelector('option:checked').value;
    if (get(this, 'type') === 'number') {
      val = +val;
    }
    set(this, 'value', val);
  }
}
