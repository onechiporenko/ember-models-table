import Model from '@ember-data/model';
import { attr, belongsTo } from '@ember-data/model';

export default class CommentModel extends Model {
  @attr('string') date;
  @attr('string') text;
  @belongsTo('user', { async: true, inverse: 'user' }) author;
}
