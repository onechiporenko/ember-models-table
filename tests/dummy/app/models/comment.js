import Model, { attr, belongsTo } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') date;
  @attr('string') text;
  @belongsTo('user') author;
}
