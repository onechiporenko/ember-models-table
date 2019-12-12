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
 */
export default
@templateLayout(layout)
@tagName('select')
class SelectComponent extends Component {

  /**
   * @property disabled
   * @type boolean
   * @protected
   */
  @attribute
  @empty('options') disabled;

  /**
   * @property themeInputClass
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.input') themeInputClass;

  /**
   * @property themeSelectClass
   * @type string
   * @protected
   */
  @className
  @alias('themeInstance.select') themeSelectClass;

  /**
   * @property type
   * @type string
   * @default ''
   */
  type = '';

  /**
   * @property cssPropertyName
   * @type string
   * @default ''
   */
  @className
  cssPropertyName = '';

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
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
