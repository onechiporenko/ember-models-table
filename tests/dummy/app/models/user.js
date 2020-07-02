import {computed} from '@ember/object';
import Model, { attr } from '@ember-data/model';

export default Model.extend({

  index: attr('number'),
  firstName: attr('string'),
  lastName: attr('string'),
  age: attr('number'),
  city: attr('string'),
  country: attr('string'),

  cityWithHtml: computed('city', function () {
    return `<i>${this.get('city')}</i>`;
  }),

  canBuyBeer: computed.gt('age', 20)

});
