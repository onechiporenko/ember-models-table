import {attribute, className, layout as templateLayout, tagName} from '@ember-decorators/component';
import Component from '@ember/component';
import {set} from '@ember/object';
import {alias, empty} from '@ember/object/computed';
import layout from '../../templates/components/models-table/select';

/**
 * Select-dropdown with a list of options. Used as page-size select and for select-filters.
 *
 * @class ModelsTableSelect
 * @namespace Components
 * @extends Ember.Component
 * @private
 */
export default
@templateLayout(layout)
@tagName('select')
class SelectComponent extends Component {

  @attribute
  @empty('options') disabled;

  @className
  @alias('themeInstance.input') themeInputClass;

  @className
  @alias('themeInstance.select') themeSelectClass;

  /**
   * @type string
   * @default ''
   */
  type = '';

  /**
   * @type string
   * @default ''
   */
  @className
  cssPropertyName = '';

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @type object
   * @default null
   */
  themeInstance = null;

  change() {
    let val = this.element.querySelector('option:checked').value;
    if (this.type === 'number') {
      val = +val;
    }
    set(this, 'value', val);
  }
}
