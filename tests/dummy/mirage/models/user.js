import { Model, hasMany } from 'miragejs';

export default Model.extend({
  comments: hasMany('comment'),
});
