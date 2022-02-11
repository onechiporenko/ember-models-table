import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  author: belongsTo('user'),
});
