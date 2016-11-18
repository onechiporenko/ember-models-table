import Ember from 'ember';
import layout from '../templates/components/models-select';

export default Ember.Component.extend({

  layout,

  tagName: 'select',

  classNameBindings: ['cssPropertyName'],

  cssPropertyName: '',

  change() {
    this.set('value', this.$('option:selected').val());
  }

});
