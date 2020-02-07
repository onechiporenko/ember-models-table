import {computed} from '@ember/object';
import {gt} from '@ember/object/computed';
import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {

  @attr('number') index;
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('number') age;
  @attr('string') city;
  @attr('string') country;

  @hasMany('comment') comments;

  @computed('city')
  get cityWithHtml() {
    return `<i>${this.city}</i>`;
  }

  @computed('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @gt('age', 20) canBuyBeer;

}
