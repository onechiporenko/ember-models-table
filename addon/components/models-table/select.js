import Ember from 'ember';
import layout from '../../templates/components/models-table/select';

export default Ember.Component.extend({

  layout,
  tagName: 'select',
  classNameBindings: ['cssPropertyName', 'themeInstance.input'],
  cssPropertyName: '',
  themeInstance: null,

  change() {
    this.set('value', this.$('option:selected').val());
  }

});
