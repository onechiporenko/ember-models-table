import {computed} from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({

  index: DS.attr('number'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  age: DS.attr('number'),
  city: DS.attr('string'),

  cityWithHtml: computed('city', function () {
    return `<i>${this.get('city')}</i>`;
  }),

  canBuyBeer: computed.gt('age', 20)

});
