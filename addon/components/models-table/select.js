import Component from '@ember/component';
import layout from '../../templates/components/models-table/select';

/**
 * Select-dropdown with a list of options. Used as page-size select and for select-filters.
 *
 * @class ModelsTableSelect
 * @namespace Components
 * @extends Ember.Component
 * @private
 */
export default Component.extend({

  layout,
  tagName: 'select',
  classNameBindings: ['cssPropertyName', 'themeInstance.input'],

  /**
   * @type string
   * @default ''
   * @property cssPropertyName
   */
  cssPropertyName: '',

  /**
   * Bound from {{#crossLink "Components.ModelsTable/themeInstance:property"}}ModelsTable.themeInstance{{/crossLink}}
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance: null,

  change() {
    this.set('value', this.$('option:selected').val());
  }

});
