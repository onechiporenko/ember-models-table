import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('number') index;
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('number') age;
  @attr('string') city;
  @attr('string') country;

  @hasMany('comment') comments;

  get cityWithHtml() {
    return `<i>${this.city}</i>`;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get canBuyBeer() {
    return this.age > 20;
  }
}
