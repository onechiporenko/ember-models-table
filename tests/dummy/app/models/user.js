import {computed} from '@ember/object';
import {gt} from '@ember/object/computed';
import DS from 'ember-data';

export default class UserModel extends DS.Model {

  @DS.attr('number') index;
  @DS.attr('string') firstName;
  @DS.attr('string') lastName;
  @DS.attr('number') age;
  @DS.attr('string') city;
  @DS.attr('string') country;

  @computed('city')
  get cityWithHtml() {
    return `<i>${this.city}</i>`;
  }

  @gt('age', 20) canBuyBeer;

}
