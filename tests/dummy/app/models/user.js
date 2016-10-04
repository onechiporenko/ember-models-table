import Ember from 'ember';
import DS from 'ember-data';

const {computed} = Ember;

export default DS.Model.extend({

  index: DS.attr('number'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  age: DS.attr('number'),
  city: DS.attr('string'),

  cityWithHtml: computed('city', function () {
    return `<i>${this.get('city')}</i>`;
  })

});
